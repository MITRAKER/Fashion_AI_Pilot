import * as THREE from 'three'
import {
  EffectComposer, RenderPass, EffectPass, BloomEffect, ToneMappingEffect, ToneMappingMode,
  VignetteEffect, NoiseEffect, SMAAEffect, BlendFunction, ChromaticAberrationEffect,
  DepthOfFieldEffect,
} from 'postprocessing'

/**
 * OWNED BY: post agent. See ART-DIRECTION §8 — the order below is deliberate.
 *
 * The failure mode to avoid is "Instagram filter": if a viewer can point at an
 * effect and name it, it is turned up too far. Every value here should be at the
 * threshold of perception except bloom on gold.
 */
export function buildPipeline(renderer, scene, camera) {
  const composer = new EffectComposer(renderer, {
    frameBufferType: THREE.HalfFloatType,   // banding in the dark gradient is a fail
  })

  composer.addPass(new RenderPass(scene, camera))

  const dof = new DepthOfFieldEffect(camera, {
    focusDistance: 0.0,
    focalLength: 0.042,
    bokehScale: 2.4,
    height: 480,
  })

  const bloom = new BloomEffect({
    blendFunction: BlendFunction.ADD,
    luminanceThreshold: 0.86,     // only gold and speculars cross this
    luminanceSmoothing: 0.24,
    intensity: 1.15,
    mipmapBlur: true,
    radius: 0.72,
  })

  const chroma = new ChromaticAberrationEffect({
    offset: new THREE.Vector2(0.00042, 0.00042),
    radialModulation: true,       // corners only
    modulationOffset: 0.42,
  })

  const grain = new NoiseEffect({ blendFunction: BlendFunction.OVERLAY, premultiply: true })
  grain.blendMode.opacity.value = 0.055

  const vignette = new VignetteEffect({ offset: 0.28, darkness: 0.62 })

  const tone = new ToneMappingEffect({
    mode: ToneMappingMode.ACES_FILMIC,
    resolution: 256,
    whitePoint: 4.0,
    middleGrey: 0.42,
  })

  composer.addPass(new EffectPass(camera, dof, bloom, tone, chroma, grain, vignette))
  composer.addPass(new EffectPass(camera, new SMAAEffect()))

  addEventListener('resize', () => composer.setSize(innerWidth, innerHeight))

  return { composer, effects: { dof, bloom, chroma, grain, vignette, tone } }
}
