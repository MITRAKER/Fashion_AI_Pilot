import * as THREE from 'three'
import {
  EffectComposer, RenderPass, EffectPass, Effect, BloomEffect, ToneMappingEffect, ToneMappingMode,
  VignetteEffect, SMAAEffect, BlendFunction, ChromaticAberrationEffect,
  DepthOfFieldEffect,
} from 'postprocessing'

/**
 * OWNED BY: post agent. See ART-DIRECTION §8 — the order below is deliberate.
 *
 * The failure mode to avoid is "Instagram filter": if a viewer can point at an
 * effect and name it, it is turned up too far. Every value here should be at the
 * threshold of perception except bloom on gold.
 *
 * Pass layout (each split is load-bearing, do not merge them back):
 *
 *   1  RenderPass                     scene -> HDR
 *   2  EffectPass(grade)              exposure / contrast / lift, still HDR
 *   3  EffectPass(dof)                needs the GRADED buffer as its bokeh source
 *   4  EffectPass(bloom, tone, ca,    bloom must read the DEFOCUSED buffer, or
 *      grain, vignette)               highlights bloom sharp over soft geometry
 *   5  EffectPass(smaa)               last, on the LDR image
 *
 * Merging 2/3 would make DoF sample the ungraded buffer for its bokeh colour
 * (DepthOfFieldEffect.update() reads the pass INPUT, not the chained shader
 * result) and blurred regions would come out darker than sharp ones. Merging
 * 3/4 has the same problem for bloom.
 */

/* ------------------------------------------------------------------- grade */
/**
 * Exposure and a light film grade, applied in linear HDR before the ACES curve.
 *
 * `renderer.toneMapping` is NoToneMapping everywhere in this project, so nothing
 * else in the chain applies exposure — without this the stage renders a stop or
 * two under and reads flat and dead.
 *
 * `shadowLift` is added AFTER the contrast expansion specifically so the floor of
 * the image can never reach 0: §10.9 fails the frame for clipped blacks.
 */
const GRADE_FRAG = /* glsl */`
uniform float exposure;
uniform float contrast;
uniform float saturation;
uniform float shadowLift;
uniform vec3 liftTint;

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  vec3 c = inputColor.rgb * exposure;

  // Contrast pivoted on scene-linear middle grey.
  c = max(vec3(0.0), (c - 0.18) * contrast + 0.18);

  // Cool lift so the void is a colour, not a hole.
  c += liftTint * shadowLift;

  float l = dot(c, vec3(0.2125, 0.7154, 0.0721));
  c = mix(vec3(l), c, saturation);

  outputColor = vec4(c, inputColor.a);
}
`

class GradeEffect extends Effect {
  constructor({ exposure = 1.0, contrast = 1.0, saturation = 1.0, shadowLift = 0.0,
    liftTint = new THREE.Color(0.62, 0.72, 1.0) } = {}) {
    super('GradeEffect', GRADE_FRAG, {
      blendFunction: BlendFunction.SRC,
      uniforms: new Map([
        ['exposure', new THREE.Uniform(exposure)],
        ['contrast', new THREE.Uniform(contrast)],
        ['saturation', new THREE.Uniform(saturation)],
        ['shadowLift', new THREE.Uniform(shadowLift)],
        ['liftTint', new THREE.Uniform(new THREE.Vector3(liftTint.r, liftTint.g, liftTint.b))],
      ]),
    })
  }
  get exposure() { return this.uniforms.get('exposure').value }
  set exposure(v) { this.uniforms.get('exposure').value = v }
}

/* ------------------------------------------------------------------- grain */
/**
 * Animated fine grain, plus a dither floor.
 *
 * postprocessing's NoiseEffect with OVERLAY/premultiply multiplies the noise by
 * the input colour, which means it contributes exactly nothing in the shadows —
 * the one place an 8-bit output actually bands (§10.9). This version weights the
 * grain toward the mids (so highlights stay clean) and keeps a small constant
 * term everywhere, which is what breaks up the dark gradient.
 */
const GRAIN_FRAG = /* glsl */`
uniform float grainAmount;
uniform float ditherAmount;

float hash13(vec3 p3) {
  p3 = fract(p3 * 0.1031);
  p3 += dot(p3, p3.zyx + 31.32);
  return fract((p3.x + p3.y) * p3.z);
}

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  float n = hash13(vec3(gl_FragCoord.xy, fract(time) * 977.0)) - 0.5;
  float l = dot(inputColor.rgb, vec3(0.2125, 0.7154, 0.0721));
  float w = 4.0 * l * (1.0 - l);        // peaks in the mids, dies at both ends
  outputColor = vec4(inputColor.rgb + n * (grainAmount * w + ditherAmount), inputColor.a);
}
`

class FilmGrainEffect extends Effect {
  constructor({ grain = 0.02, dither = 0.004 } = {}) {
    super('FilmGrainEffect', GRAIN_FRAG, {
      blendFunction: BlendFunction.SRC,
      uniforms: new Map([
        ['grainAmount', new THREE.Uniform(grain)],
        ['ditherAmount', new THREE.Uniform(dither)],
      ]),
    })
  }
}

/* ------------------------------------------------------- depth attachments */
/**
 * Fixes: GL_INVALID_OPERATION "Read and write depth stencil attachments cannot
 * be the same image".
 *
 * When any pass needs depth, EffectComposer builds three DepthTextures via
 * `clone()` — one for the input buffer, one for the output buffer, one "stable"
 * copy that effects sample. But three's `Texture.copy()` assigns
 * `this.source = source.source`, and WebGLTextures keys the actual GL texture off
 * `texture.source`. So all three clones resolve to ONE GL texture: the composer
 * then blits depth from the input buffer into the stable target with the same
 * image bound to both ends of the blit, and the driver rejects it.
 *
 * Giving each depth texture its own Source makes them three distinct GL textures,
 * which is what the composer already assumes. Run once, before the first frame,
 * so no GL resources have been allocated yet.
 */
function separateDepthAttachments(composer) {
  const targets = [composer.inputBuffer, composer.outputBuffer, composer.depthRenderTarget]
  const seen = new Set()
  for (const rt of targets) {
    const dt = rt && rt.depthTexture
    if (!dt) continue
    if (seen.has(dt.source)) dt.source = new THREE.Source({ ...dt.image })
    seen.add(dt.source)
    rt.dispose()
  }
}

/* ---------------------------------------------------------------- pipeline */
export function buildPipeline(renderer, scene, camera, options = {}) {
  const {
    exposure = 1.0,
    contrast = 1.0,
    saturation = 1.0,
    shadowLift = 0.0025,
    bloomThreshold = 0.72,
    bloomIntensity = 1.05,
    bloomRadius = 0.72,
    focusDistance = 3.2,
    focusRange = 1.6,
    bokehScale = 2.0,
    vignetteOffset = 0.30,
    vignetteDarkness = 0.58,
    grain = 0.020,
    chroma: chromaOffset = 0.00040,
  } = options

  const composer = new EffectComposer(renderer, {
    frameBufferType: THREE.HalfFloatType,   // banding in the dark gradient is a fail
  })

  composer.addPass(new RenderPass(scene, camera))

  const grade = new GradeEffect({ exposure, contrast, saturation, shadowLift })
  composer.addPass(new EffectPass(camera, grade))

  // focusDistance/focusRange are world units in postprocessing >= 6.36. A
  // `target` Vector3 assigned by the caller overrides focusDistance per frame.
  const dof = new DepthOfFieldEffect(camera, {
    focusDistance,
    focusRange,
    bokehScale,                 // postprocessing's kernel is a circular disc — round bokeh
    resolutionScale: 0.6,
  })
  composer.addPass(new EffectPass(camera, dof))

  const bloom = new BloomEffect({
    blendFunction: BlendFunction.ADD,
    luminanceThreshold: bloomThreshold,   // gold speculars cross this; lit cloth does not
    luminanceSmoothing: 0.20,
    intensity: bloomIntensity,
    mipmapBlur: true,
    radius: bloomRadius,
  })

  const tone = new ToneMappingEffect({
    mode: ToneMappingMode.ACES_FILMIC,
    resolution: 256,
  })

  const chroma = new ChromaticAberrationEffect({
    offset: new THREE.Vector2(chromaOffset, chromaOffset),
    radialModulation: true,       // corners only
    modulationOffset: 0.55,
  })

  const grainFx = new FilmGrainEffect({ grain })
  const vignette = new VignetteEffect({ offset: vignetteOffset, darkness: vignetteDarkness })

  composer.addPass(new EffectPass(camera, bloom, tone, chroma, grainFx, vignette))
  composer.addPass(new EffectPass(camera, new SMAAEffect()))

  separateDepthAttachments(composer)

  addEventListener('resize', () => composer.setSize(innerWidth, innerHeight))

  return { composer, effects: { grade, dof, bloom, chroma, grain: grainFx, vignette, tone } }
}
