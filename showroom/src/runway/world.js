import * as THREE from 'three'
import { Reflector } from 'three/examples/jsm/objects/Reflector.js'
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js'
import { makeGold } from '../materials/library.js'

/**
 * OWNED BY: lighting & atmosphere agent. See ART-DIRECTION §5, §6, §10.
 *
 * The runway set and its light rig.
 *
 * The three things that make a frame read as a fashion runway rather than a dark
 * Three.js scene, in order of importance:
 *
 *  1. The deck REFLECTS. An obsidian glass catwalk mirrors the model, the beams and
 *     the LED wall. Done with a real planar reflection (mirrored virtual camera) that
 *     is additively laid over the dark glass, attenuated by a Fresnel term and blurred
 *     with distance so it is a reflection, not a mirror (§5 "Floor").
 *  2. The beams are VOLUMES. A spotlight you cannot see the shaft of is just an
 *     exposure change. Each lamp gets an additive cone whose density is the chord
 *     length through the cone, plus a pool where it lands on the deck.
 *  3. The model is SEPARATED. Two cool kicker spots sit behind and outboard of the
 *     model and travel with it, so the silhouette always has a lit edge against the
 *     dark end of the runway (§10 fail #3).
 *
 * Everything additive here is written with alpha = 1 and premultiplied colour, because
 * three's AdditiveBlending is (SRC_ALPHA, ONE) and multiplying by alpha twice crushes
 * the low end into banding.
 */

/* ------------------------------------------------------------------ geometry */
const RUNWAY_X = 0.68          // runway centre line
const RUNWAY_W = 1.9           // deck width
const RUNWAY_LEN = 20          // deck length
const RUNWAY_CZ = -9.6         // deck centre — spans z ∈ [-19.6, 0.4]
const DECK_Y = -0.56           // deck top surface; the avatar's boots sit on this
const DECK_T = 0.16            // deck slab thickness
const LAMP_Y = 5.0             // lighting truss height

/* -------------------------------------------------------------------- colour */
const WARM = new THREE.Color(0xffe9c4)
const COOL = new THREE.Color(0xc4d8ff)
const GOLDLIGHT = new THREE.Color(0xffd08a)

export function createRunwayWorld(envMap) {
  RectAreaLightUniformsLib.init()

  const group = new THREE.Group()

  /* ===================================================== 1. the catwalk deck */

  // Obsidian glass. Low metalness + a full clearcoat is what gives glass its
  // broad specular pool; a metal=1 deck just mirrors black and disappears, which
  // is exactly how this scene used to fail.
  const deckMat = new THREE.MeshPhysicalMaterial({
    color: 0x0c0c10,
    metalness: 0.15,
    roughness: 0.22,
    clearcoat: 0.9,
    clearcoatRoughness: 0.09,
    envMap,
    // Deliberately near-zero. A prefiltered studio IBL on a clearcoat at grazing
    // incidence is a featureless pale grey — it turned the deck into wet concrete
    // and buried the planar reflection underneath it. The mirror below IS the deck.
    envMapIntensity: 0.20,
    reflectivity: 0.5,
  })
  const deck = new THREE.Mesh(new THREE.BoxGeometry(RUNWAY_W, DECK_T, RUNWAY_LEN), deckMat)
  deck.position.set(RUNWAY_X, DECK_Y - DECK_T / 2, RUNWAY_CZ)
  deck.receiveShadow = true
  group.add(deck)

  // Skirt below the deck — gives the platform real thickness instead of a floating
  // plane, and catches a little bounce so the runway edge reads against the floor.
  const skirtMat = new THREE.MeshStandardMaterial({ color: 0x08080b, roughness: 0.85, metalness: 0.0 })
  const skirt = new THREE.Mesh(new THREE.BoxGeometry(RUNWAY_W - 0.09, 0.75, RUNWAY_LEN - 0.02), skirtMat)
  skirt.position.set(RUNWAY_X, DECK_Y - DECK_T - 0.375, RUNWAY_CZ)
  skirt.receiveShadow = true
  group.add(skirt)

  // Studio floor either side of the runway, so the deck sits in a room.
  const floorMat = new THREE.MeshStandardMaterial({ color: 0x060608, roughness: 0.88, metalness: 0.0 })
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(46, 60), floorMat)
  floor.rotation.x = -Math.PI / 2
  floor.position.set(RUNWAY_X, DECK_Y - DECK_T - 0.75, RUNWAY_CZ)
  floor.receiveShadow = true
  group.add(floor)

  /* ------------------------------------------- planar reflection on the deck */

  const REFLECT_SHADER = {
    name: 'ObsidianDeckReflection',
    uniforms: {
      color: { value: null },
      tDiffuse: { value: null },
      textureMatrix: { value: null },
      uStrength: { value: 1.0 },
      uBlur: { value: 0.0022 },
    },
    vertexShader: /* glsl */`
      uniform mat4 textureMatrix;
      varying vec4 vProj;
      varying vec2 vUvL;
      varying vec3 vWorld;
      void main() {
        vUvL = uv;
        vec4 wp = modelMatrix * vec4( position, 1.0 );
        vWorld = wp.xyz;
        vProj = textureMatrix * vec4( position, 1.0 );
        gl_Position = projectionMatrix * viewMatrix * wp;
      }`,
    fragmentShader: /* glsl */`
      uniform sampler2D tDiffuse;
      uniform vec3 color;
      uniform float uStrength;
      uniform float uBlur;
      varying vec4 vProj;
      varying vec2 vUvL;
      varying vec3 vWorld;

      void main() {
        vec2 uv = vProj.xy / max( vProj.w, 1e-4 );

        vec3 toCam = cameraPosition - vWorld;
        float dist = length( toCam );
        vec3 V = toCam / max( dist, 1e-4 );

        // Schlick: grazing angles reflect almost everything, steep angles very little.
        float fres = pow( 1.0 - clamp( V.y, 0.0, 1.0 ), 3.0 );
        float refl = mix( 0.09, 1.0, fres );

        // Roughness gradient (§5): the reflection blurs and dissolves with distance.
        float b = uBlur * ( 0.4 + dist * 0.07 );
        vec3 c  = texture2D( tDiffuse, uv ).rgb * 0.34;
        c += texture2D( tDiffuse, uv + vec2(  b, 0.0 ) ).rgb * 0.155;
        c += texture2D( tDiffuse, uv + vec2( -b, 0.0 ) ).rgb * 0.155;
        c += texture2D( tDiffuse, uv + vec2( 0.0,  b * 2.3 ) ).rgb * 0.175;
        c += texture2D( tDiffuse, uv + vec2( 0.0, -b * 2.3 ) ).rgb * 0.175;

        float distFade = 1.0 / ( 1.0 + dist * 0.05 );

        // Never let the mirror end on a hard rectangle edge.
        float ex = smoothstep( 0.0, 0.055, vUvL.x ) * smoothstep( 1.0, 0.945, vUvL.x );
        float ey = smoothstep( 0.0, 0.02, vUvL.y ) * smoothstep( 1.0, 0.80, vUvL.y );

        float a = uStrength * refl * distFade * ex * ey;
        gl_FragColor = vec4( c * color * a, 1.0 );
      }`,
  }

  const mirror = new Reflector(new THREE.PlaneGeometry(RUNWAY_W - 0.04, RUNWAY_LEN - 0.04), {
    textureWidth: 1024,
    textureHeight: 1024,
    color: 0xdfe6f2,
    multisample: 0,
    shader: REFLECT_SHADER,
  })
  mirror.rotation.x = -Math.PI / 2
  mirror.position.set(RUNWAY_X, DECK_Y + 0.0015, RUNWAY_CZ)
  mirror.material.transparent = true
  mirror.material.blending = THREE.AdditiveBlending
  mirror.material.depthWrite = false
  mirror.renderOrder = 1
  group.add(mirror)

  /* -------------------------------------------------------- gold edge trim */

  // Two reads on the edge: a brushed gold rail that catches a moving specular, and
  // a dimmer inset strip below the lip so the deck edge has a warm line even where
  // no beam lands. The rail is deliberately duller than a mirror — at envMapIntensity
  // 1.5 it blooms into a glowing stick and reads as a neon tube, not metal.
  // A polished metal rail 4cm wide is, at this grazing camera, a one-pixel line of
  // pure specular — which bloom turns into a neon tube. Wide, rougher and much less
  // reflective is the only way it reads as a machined brass edge instead of a laser.
  const railMat = makeGold(envMap, { anisotropyRotation: Math.PI / 2 })
  railMat.color.setHex(0xa8862a)
  railMat.envMapIntensity = 0.32
  railMat.roughness = 0.44

  const railGeo = new THREE.BoxGeometry(0.075, 0.028, RUNWAY_LEN)
  for (const side of [-1, 1]) {
    const rail = new THREE.Mesh(railGeo, railMat)
    rail.position.set(RUNWAY_X + side * (RUNWAY_W / 2 - 0.037), DECK_Y - 0.011, RUNWAY_CZ)
    group.add(rail)
  }

  // Warm inset line under the lip: reads as trim lighting, sits well under the bloom
  // threshold so it never becomes the brightest thing in the frame.
  const stripMat = new THREE.MeshBasicMaterial({ color: 0x33230d, toneMapped: false })
  const stripGeo = new THREE.BoxGeometry(0.012, 0.02, RUNWAY_LEN)
  for (const side of [-1, 1]) {
    const strip = new THREE.Mesh(stripGeo, stripMat)
    strip.position.set(RUNWAY_X + side * (RUNWAY_W / 2 + 0.005), DECK_Y - 0.09, RUNWAY_CZ)
    group.add(strip)
  }

  /* ================================================= 2. the LED wall backdrop */

  const screenCanvas = document.createElement('canvas')
  screenCanvas.width = 1024
  screenCanvas.height = 512
  const screenCtx = screenCanvas.getContext('2d')
  const screenTex = new THREE.CanvasTexture(screenCanvas)
  screenTex.colorSpace = THREE.SRGBColorSpace

  // Pushed past 1.0 so the wall is a light source in the frame, blooms, and lands a
  // real reflection down the length of the deck rather than reading as a bright decal.
  const screenMat = new THREE.MeshBasicMaterial({ map: screenTex, toneMapped: false })
  screenMat.color.setScalar(1.15)

  const ledScreen = new THREE.Mesh(new THREE.PlaneGeometry(9.0, 5.0), screenMat)
  ledScreen.position.set(RUNWAY_X, 1.75, -18.8)
  group.add(ledScreen)

  const ledFrame = new THREE.Mesh(
    new THREE.BoxGeometry(9.5, 5.5, 0.3),
    new THREE.MeshStandardMaterial({ color: 0x121216, metalness: 0.7, roughness: 0.45 }),
  )
  ledFrame.position.set(RUNWAY_X, 1.75, -19.0)
  group.add(ledFrame)

  // Back wall so the void behind the LED has a surface to fall off against — a pure
  // black background bands under the grade (§10 fail #9).
  const backWall = new THREE.Mesh(
    new THREE.PlaneGeometry(40, 16),
    new THREE.MeshStandardMaterial({ color: 0x0a0a0e, roughness: 0.95 }),
  )
  backWall.position.set(RUNWAY_X, 3.0, -19.6)
  group.add(backWall)

  // The wall throws colour. A rect area light is the only cheap way to get a broad
  // soft wash with the right falloff off a panel of this size.
  const ledWash = new THREE.RectAreaLight(0xffffff, 1.9, 9.0, 5.0)
  ledWash.position.set(RUNWAY_X, 1.75, -18.6)
  ledWash.lookAt(RUNWAY_X, 0.4, 0)
  group.add(ledWash)

  // Two point lights hugging the wall so the spill has structure near the far deck.
  const ledPoint = new THREE.PointLight(0xffd7a0, 7, 15, 2)
  ledPoint.position.set(RUNWAY_X, 0.9, -17.4)
  group.add(ledPoint)

  /* ==================================================== 3. the lighting rig */

  const hemi = new THREE.HemisphereLight(0x24304a, 0x08080c, 0.20)
  group.add(hemi)

  // -- Key follow-spot: warm, front-high-left, travels with the model. Casts the
  //    only shadow in the rig; more than one shadow-casting spot is a frame-rate bill
  //    with no visual return here.
  const keySpot = new THREE.SpotLight(WARM.getHex(), 220, 26, 0.34, 0.72, 1.6)
  keySpot.position.set(RUNWAY_X - 1.5, LAMP_Y, 2.2)
  keySpot.castShadow = true
  keySpot.shadow.mapSize.set(1024, 1024)
  keySpot.shadow.camera.near = 1.0
  keySpot.shadow.camera.far = 24
  keySpot.shadow.bias = -0.0009
  keySpot.shadow.normalBias = 0.022
  keySpot.shadow.radius = 5
  group.add(keySpot, keySpot.target)

  // -- Kicker pair: cool, BEHIND and outboard of the model, aimed back at it. This
  //    is the separation (§10 fail #3) — the model always has a lit silhouette edge
  //    against the dark end of the runway.
  const kickL = new THREE.SpotLight(COOL.getHex(), 420, 22, 0.30, 0.85, 1.7)
  kickL.position.set(RUNWAY_X - 2.3, 2.5, -4.6)
  group.add(kickL, kickL.target)

  const kickR = new THREE.SpotLight(0xe6efff, 480, 22, 0.30, 0.85, 1.7)
  kickR.position.set(RUNWAY_X + 2.4, 2.7, -4.4)
  group.add(kickR, kickR.target)

  // -- Broad back-rim down the length of the runway. Rakes every surface facing away
  //    from camera, which is what turns the deck from black into visible glass.
  const backRim = new THREE.DirectionalLight(0xcadcff, 1.5)
  backRim.position.set(RUNWAY_X + 1.2, 4.2, -17)
  backRim.target.position.set(RUNWAY_X, DECK_Y, 0)
  group.add(backRim, backRim.target)

  // -- Low front fill, cool and very dim: keeps the model's front off pure black
  //    without flattening the rim (§6 fill ≈ 8% of key).
  const fill = new THREE.DirectionalLight(0x93a6c4, 0.42)
  fill.position.set(RUNWAY_X + 1.0, 0.6, 6.0)
  fill.target.position.set(RUNWAY_X, 0.3, -2)
  group.add(fill, fill.target)

  /* ------------------------------------------------ volumetric beams + pools */

  const BEAM_VERT = /* glsl */`
    uniform float uHalf;
    varying vec3 vN;
    varying vec3 vV;
    varying float vH;
    void main() {
      vH = clamp( ( position.y + uHalf ) / ( 2.0 * uHalf ), 0.0, 1.0 );
      vec4 wp = modelMatrix * vec4( position, 1.0 );
      vN = normalize( mat3( modelMatrix ) * normal );
      vV = cameraPosition - wp.xyz;
      gl_Position = projectionMatrix * viewMatrix * wp;
    }`

  const BEAM_FRAG = /* glsl */`
    uniform vec3 uColor;
    uniform float uIntensity;
    varying vec3 vN;
    varying vec3 vV;
    varying float vH;
    void main() {
      vec3 V = normalize( vV );
      // Density of a solid cone seen through its shell is the chord length, which
      // peaks where the surface faces you and vanishes at the silhouette. Rendering
      // both faces additively integrates front and back for free.
      float ndv = abs( dot( normalize( vN ), V ) );
      float core = pow( ndv, 1.3 );

      float along = mix( 1.0, 0.46, smoothstep( 0.0, 0.9, vH ) );  // hottest at the deck
      float tip   = smoothstep( 1.0, 0.74, vH );                   // apex dissolves
      float foot  = smoothstep( 0.0, 0.055, vH );                  // hide the open base

      float d = length( vV );
      float dfade = 1.0 / ( 1.0 + d * 0.05 );
      // The pit camera can end up INSIDE a follow cone; without this the shaft
      // becomes a full-frame milk wash instead of a beam.
      float nfade = smoothstep( 1.5, 7.0, d );

      float a = core * along * tip * foot * dfade * nfade * uIntensity;
      gl_FragColor = vec4( uColor * a, 1.0 );
    }`

  const POOL_FRAG = /* glsl */`
    uniform vec3 uColor;
    uniform float uIntensity;
    varying vec2 vUv;
    varying vec3 vWorld;
    void main() {
      vec2 p = ( vUv - 0.5 ) * 2.0;
      p.y *= 0.55;                       // pools stretch down the runway
      float r = length( p );
      float k = max( 0.0, 1.0 - r );
      // Tight hot centre, fast shoulder. A broad soft disc read as fog lying on the
      // deck and washed the reflection out; a light pool has a defined edge.
      float a = pow( k, 3.4 ) * 0.45 + pow( k, 11.0 ) * 1.3;

      float d = length( cameraPosition - vWorld );
      a *= smoothstep( 0.8, 3.5, d ) / ( 1.0 + d * 0.05 );

      gl_FragColor = vec4( uColor * a * uIntensity, 1.0 );
    }`

  const POOL_VERT = /* glsl */`
    varying vec2 vUv;
    varying vec3 vWorld;
    void main() {
      vUv = uv;
      vec4 wp = modelMatrix * vec4( position, 1.0 );
      vWorld = wp.xyz;
      gl_Position = projectionMatrix * viewMatrix * wp;
    }`

  const BEAM_DROP = 0.45          // how far the cone continues below the deck
  const beams = []

  function makeBeam({ x, z, color, intensity, spread, tilt = 0 }) {
    const height = LAMP_Y - DECK_Y + BEAM_DROP
    const radius = height * spread
    const geo = new THREE.ConeGeometry(radius, height, 40, 1, true)

    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color(color) },
        uIntensity: { value: intensity },
        uHalf: { value: height / 2 },
      },
      vertexShader: BEAM_VERT,
      fragmentShader: BEAM_FRAG,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    })

    const cone = new THREE.Mesh(geo, mat)
    // Apex at the lamp, base BEAM_DROP below the deck so the visible termination is
    // the deck intersection, not a flat cap floating above it.
    cone.position.set(x, (LAMP_Y + (DECK_Y - BEAM_DROP)) / 2, z)
    cone.rotation.z = tilt
    cone.renderOrder = 4
    group.add(cone)

    const poolMat = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color(color) },
        uIntensity: { value: intensity * 1.15 },
      },
      vertexShader: POOL_VERT,
      fragmentShader: POOL_FRAG,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const pool = new THREE.Mesh(new THREE.PlaneGeometry(radius * 2.2, radius * 3.4), poolMat)
    pool.rotation.x = -Math.PI / 2
    pool.position.set(x, DECK_Y + 0.006, z)
    pool.renderOrder = 3
    group.add(pool)

    // The lamp head itself, so the beam has a visible origin when it clips frame top.
    const can = new THREE.Mesh(
      new THREE.CylinderGeometry(0.16, 0.21, 0.34, 16),
      new THREE.MeshStandardMaterial({ color: 0x0e0e11, metalness: 0.8, roughness: 0.42 }),
    )
    can.position.set(x, LAMP_Y + 0.12, z)
    group.add(can)

    const lens = new THREE.Mesh(
      new THREE.CircleGeometry(0.17, 16),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(0.85), toneMapped: false }),
    )
    lens.rotation.x = Math.PI / 2
    lens.position.set(x, LAMP_Y - 0.06, z)
    group.add(lens)

    const b = { cone, pool, mat, poolMat, lens, base: intensity, x, z }
    beams.push(b)
    return b
  }

  // Static house rig — alternating warm/cool cans down the length of the runway.
  const HOUSE = [
    { z: -1.6, x: RUNWAY_X - 0.62, color: WARM, i: 0.26, spread: 0.125 },
    { z: -4.4, x: RUNWAY_X + 0.66, color: COOL, i: 0.24, spread: 0.125 },
    { z: -7.4, x: RUNWAY_X - 0.60, color: GOLDLIGHT, i: 0.26, spread: 0.13 },
    { z: -10.4, x: RUNWAY_X + 0.62, color: COOL, i: 0.24, spread: 0.13 },
    { z: -13.4, x: RUNWAY_X - 0.58, color: WARM, i: 0.24, spread: 0.13 },
    { z: -16.2, x: RUNWAY_X + 0.60, color: COOL, i: 0.22, spread: 0.13 },
  ]
  for (const h of HOUSE) {
    makeBeam({ x: h.x, z: h.z, color: h.color, intensity: h.i, spread: h.spread })
  }

  // Two follow-spot beams that ride the model.
  const followWarm = makeBeam({
    x: RUNWAY_X - 0.9, z: 0, color: WARM, intensity: 0.40, spread: 0.105, tilt: 0.10,
  })
  const followCool = makeBeam({
    x: RUNWAY_X + 0.95, z: 0, color: COOL, intensity: 0.38, spread: 0.10, tilt: -0.10,
  })

  /* ------------------------------------------------------------------- haze */

  // Fog cards. The camera only ever travels along +z, so cards that face +z are
  // always near enough to camera-facing — no per-frame billboarding needed.
  const HAZE_VERT = /* glsl */`
    varying vec2 vUv;
    varying vec3 vWorld;
    void main() {
      vUv = uv;
      vec4 wp = modelMatrix * vec4( position, 1.0 );
      vWorld = wp.xyz;
      gl_Position = projectionMatrix * viewMatrix * wp;
    }`

  const HAZE_FRAG = /* glsl */`
    uniform vec3 uColor;
    uniform float uIntensity;
    uniform float uTime;
    uniform float uSeed;
    varying vec2 vUv;
    varying vec3 vWorld;
    void main() {
      vec2 p = vUv;
      float n1 = sin( p.x * 5.5 + uTime * 0.22 + uSeed ) * 0.5 + 0.5;
      float n2 = sin( p.x * 12.0 - uTime * 0.15 + uSeed * 2.3 + p.y * 3.0 ) * 0.5 + 0.5;
      float n = mix( n1, n2, 0.45 );

      float vfade = pow( 1.0 - p.y, 1.9 ) * smoothstep( 0.0, 0.30, p.y );
      float hfade = pow( max( sin( p.x * 3.14159265 ), 0.0 ), 1.4 );

      // The pit camera sits 40cm off the deck and drives THROUGH these cards. Without
      // a near fade the nearest one becomes a full-screen milky sheet.
      float dist = length( cameraPosition - vWorld );
      float near = smoothstep( 1.6, 6.5, dist );
      float far  = 1.0 / ( 1.0 + dist * 0.05 );

      float a = vfade * hfade * ( 0.40 + 0.60 * n ) * near * far * uIntensity;
      gl_FragColor = vec4( uColor * a, 1.0 );
    }`

  const hazeCards = []
  for (let i = 0; i < 8; i++) {
    const z = -1.2 - i * 2.1
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color(i % 2 ? 0x9fb6dc : 0xd8c39a) },
        uIntensity: { value: 0.048 },
        uTime: { value: 0 },
        uSeed: { value: i * 1.77 },
      },
      vertexShader: HAZE_VERT,
      fragmentShader: HAZE_FRAG,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    })
    const card = new THREE.Mesh(new THREE.PlaneGeometry(5.2, 2.2), mat)
    card.position.set(RUNWAY_X, DECK_Y + 0.62, z)
    card.renderOrder = 5
    group.add(card)
    hazeCards.push({ card, mat, baseX: RUNWAY_X, seed: i * 1.77 })
  }

  /* ====================================== 4. the room: risers and spectators */

  const riserMat = new THREE.MeshStandardMaterial({ color: 0x07070a, roughness: 0.95, metalness: 0.0 })
  for (const side of [-1, 1]) {
    for (let tier = 0; tier < 3; tier++) {
      const w = 1.5
      const h = 0.34 + tier * 0.30
      const riser = new THREE.Mesh(new THREE.BoxGeometry(w, h, RUNWAY_LEN - 2), riserMat)
      riser.position.set(
        RUNWAY_X + side * (RUNWAY_W / 2 + 2.15 + tier * 1.5),
        DECK_Y - DECK_T - 0.75 + h / 2,
        RUNWAY_CZ - 1,
      )
      riser.receiveShadow = true
      group.add(riser)
    }
  }

  // Crowd silhouettes. Instanced so 96 of them cost one draw; they exist to be
  // caught by the kickers and the flashes, never to be resolved as people.
  const CROWD = 96
  const crowdMat = new THREE.MeshStandardMaterial({ color: 0x08080c, roughness: 0.95, metalness: 0.0 })
  const crowd = new THREE.InstancedMesh(new THREE.CapsuleGeometry(0.14, 0.30, 3, 8), crowdMat, CROWD)
  const m4 = new THREE.Matrix4()
  const qId = new THREE.Quaternion()
  const sc = new THREE.Vector3(1, 1, 1)
  const pos = new THREE.Vector3()
  for (let i = 0; i < CROWD; i++) {
    const side = i % 2 === 0 ? -1 : 1
    const tier = Math.floor((i / 2) % 3)
    const t = Math.floor(i / 6)
    pos.set(
      RUNWAY_X + side * (RUNWAY_W / 2 + 2.15 + tier * 1.5) + (Math.random() - 0.5) * 0.5,
      DECK_Y - DECK_T - 0.75 + (0.34 + tier * 0.30) + 0.42,
      -0.8 - t * 1.15 - Math.random() * 0.5,
    )
    qId.setFromEuler(new THREE.Euler(0, side * 1.5 + (Math.random() - 0.5) * 0.5, 0))
    sc.set(1, 0.9 + Math.random() * 0.3, 1)
    m4.compose(pos, qId, sc)
    crowd.setMatrixAt(i, m4)
  }
  crowd.instanceMatrix.needsUpdate = true
  group.add(crowd)

  /* ============================================== 5. photographer pit flashes */

  const FLASH_COUNT = 64
  const flashGeo = new THREE.BufferGeometry()
  const fPos = new Float32Array(FLASH_COUNT * 3)
  const fPhase = new Float32Array(FLASH_COUNT)
  const fRate = new Float32Array(FLASH_COUNT)
  const fSize = new Float32Array(FLASH_COUNT)

  for (let i = 0; i < FLASH_COUNT; i++) {
    const side = i % 2 === 0 ? -1 : 1
    // Two thirds crowd the pit at the near end; the rest line the runway.
    const pitty = i < FLASH_COUNT * 0.62
    const z = pitty ? 0.4 - Math.random() * 3.2 : -3.2 - Math.random() * 12.5
    fPos[i * 3] = RUNWAY_X + side * (RUNWAY_W / 2 + 1.4 + Math.random() * 2.6)
    fPos[i * 3 + 1] = DECK_Y - 0.1 + Math.random() * 1.5
    fPos[i * 3 + 2] = z
    fPhase[i] = Math.random() * 40
    fRate[i] = 0.16 + Math.random() * 0.5
    fSize[i] = 0.55 + Math.random() * 0.9
  }
  flashGeo.setAttribute('position', new THREE.BufferAttribute(fPos, 3))
  flashGeo.setAttribute('aPhase', new THREE.BufferAttribute(fPhase, 1))
  flashGeo.setAttribute('aRate', new THREE.BufferAttribute(fRate, 1))
  flashGeo.setAttribute('aSize', new THREE.BufferAttribute(fSize, 1))

  const flashMat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uBoost: { value: 1 },
      uColor: { value: new THREE.Color(0xdfeaff) },
    },
    vertexShader: /* glsl */`
      attribute float aPhase;
      attribute float aRate;
      attribute float aSize;
      uniform float uTime;
      uniform float uBoost;
      varying float vB;
      void main() {
        float t = fract( ( uTime + aPhase ) * aRate );
        vB = exp( -t * 24.0 );                 // instant pop, fast decay
        vec4 mv = modelViewMatrix * vec4( position, 1.0 );
        gl_PointSize = aSize * uBoost * ( 0.4 + vB * 2.4 ) * ( 190.0 / max( -mv.z, 0.1 ) );
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */`
      uniform vec3 uColor;
      varying float vB;
      void main() {
        vec2 d = gl_PointCoord - 0.5;
        float r = length( d ) * 2.0;
        float k = max( 0.0, 1.0 - r );
        float a = ( pow( k, 3.0 ) + pow( k, 1.1 ) * 0.28 ) * vB;
        if ( a < 0.003 ) discard;
        gl_FragColor = vec4( uColor * a * 2.6, 1.0 );
      }`,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })
  const flashes = new THREE.Points(flashGeo, flashMat)
  flashes.frustumCulled = false
  flashes.renderOrder = 6
  group.add(flashes)

  // Three pooled point lights so a burst actually lands on the model rather than
  // being a sprite floating in front of it.
  const flashLights = []
  for (let i = 0; i < 3; i++) {
    const pl = new THREE.PointLight(0xeaf2ff, 0, 9, 2)
    pl.position.set(RUNWAY_X, 0.6, 0)
    group.add(pl)
    flashLights.push({ light: pl, life: 0, peak: 0, next: Math.random() * 0.8 })
  }

  /* =========================================================== 6. the update */

  let time = 0
  let burst = 0
  const ledColor = new THREE.Color()

  const api = {
    group,
    // Kept for API compatibility with anything that reaches for the follow spots.
    spotlight1: keySpot,
    spotlight2: kickR,
    ledLight: ledWash,

    update(dt, avatarZ = 0) {
      time += dt
      burst = Math.max(0, burst - dt * 4.5)

      /* -- follow spots track the model ---------------------------------- */
      keySpot.position.set(RUNWAY_X - 1.55, LAMP_Y, avatarZ + 3.0)
      keySpot.target.position.set(RUNWAY_X, DECK_Y + 0.55, avatarZ)

      kickL.position.set(RUNWAY_X - 2.35, 2.55, avatarZ - 3.9)
      kickL.target.position.set(RUNWAY_X, DECK_Y + 0.75, avatarZ)

      kickR.position.set(RUNWAY_X + 2.45, 2.75, avatarZ - 3.7)
      kickR.target.position.set(RUNWAY_X, DECK_Y + 0.8, avatarZ)

      // A slow breath on the key so the frame is never static under the grade.
      keySpot.intensity = 220 + Math.sin(time * 0.7) * 24

      /* -- follow beams sweep with the model ----------------------------- */
      const sway = Math.sin(time * 0.55) * 0.32
      followWarm.cone.position.set(RUNWAY_X - 0.85 + sway, followWarm.cone.position.y, avatarZ - 0.45)
      followWarm.pool.position.set(RUNWAY_X - 0.5 + sway * 1.6, DECK_Y + 0.007, avatarZ - 0.45)
      followWarm.cone.rotation.z = 0.10 - sway * 0.06

      followCool.cone.position.set(RUNWAY_X + 0.9 - sway, followCool.cone.position.y, avatarZ - 2.3)
      followCool.pool.position.set(RUNWAY_X + 0.55 - sway * 1.6, DECK_Y + 0.007, avatarZ - 2.3)
      followCool.cone.rotation.z = -0.10 + sway * 0.06

      /* -- beam flicker: a real haze beam is never perfectly steady ------- */
      for (let i = 0; i < beams.length; i++) {
        const b = beams[i]
        const f = 0.93 + Math.sin(time * (1.7 + i * 0.31) + i) * 0.05 + burst * 0.5
        b.mat.uniforms.uIntensity.value = b.base * f
        b.poolMat.uniforms.uIntensity.value = b.base * 1.15 * f
      }

      /* -- haze drift ---------------------------------------------------- */
      for (const h of hazeCards) {
        h.mat.uniforms.uTime.value = time
        h.card.position.x = h.baseX + Math.sin(time * 0.13 + h.seed) * 0.5
      }

      /* -- LED wall content ---------------------------------------------- */
      screenCtx.fillStyle = '#07070a'
      screenCtx.fillRect(0, 0, 1024, 512)

      const g = screenCtx.createLinearGradient(0, 0, 0, 512)
      g.addColorStop(0, 'rgba(40,30,14,1)')
      g.addColorStop(0.55, 'rgba(14,14,20,1)')
      g.addColorStop(1, 'rgba(28,22,34,1)')
      screenCtx.fillStyle = g
      screenCtx.fillRect(0, 0, 1024, 512)

      screenCtx.lineWidth = 3
      for (let i = 0; i < 5; i++) {
        screenCtx.strokeStyle = i % 2 === 0 ? '#e6be85' : 'rgba(190,210,255,0.22)'
        screenCtx.beginPath()
        for (let x = 0; x <= 1024; x += 16) {
          const y = 300 + Math.sin(x * 0.008 + time * 2.5 + i) * (36 + i * 14)
          if (x === 0) screenCtx.moveTo(x, y)
          else screenCtx.lineTo(x, y)
        }
        screenCtx.stroke()
      }

      screenCtx.fillStyle = '#ffffff'
      screenCtx.font = 'bold 44px "Bodoni Moda", Didot, serif'
      screenCtx.textAlign = 'center'
      screenCtx.fillText('ATELIER PARIS 2026', 512, 150)
      screenCtx.fillStyle = '#e6be85'
      screenCtx.font = '17px "IBM Plex Mono", monospace'
      if ('letterSpacing' in screenCtx) screenCtx.letterSpacing = '0.3em'
      screenCtx.fillText('AUTUMN / WINTER RUNWAY SHOW', 512, 192)
      if ('letterSpacing' in screenCtx) screenCtx.letterSpacing = '0px'
      screenTex.needsUpdate = true

      // The wash light carries the wall's dominant colour, slowly cycling gold→ice,
      // so the far end of the deck is never neutral.
      const cyc = Math.sin(time * 0.32) * 0.5 + 0.5
      ledColor.setRGB(1.0, 0.80 + cyc * 0.14, 0.55 + cyc * 0.40)
      ledWash.color.copy(ledColor)
      ledWash.intensity = 1.9 + Math.sin(time * 1.6) * 0.35
      ledPoint.color.copy(ledColor)

      /* -- flashes ------------------------------------------------------- */
      flashMat.uniforms.uTime.value = time
      flashMat.uniforms.uBoost.value = 1 + burst * 1.6

      for (const fl of flashLights) {
        fl.next -= dt
        if (fl.next <= 0) {
          const idx = Math.floor(Math.random() * FLASH_COUNT)
          fl.light.position.set(
            fPos[idx * 3],
            fPos[idx * 3 + 1] + 0.2,
            // Bias the firing flashes toward wherever the model is, so a burst reads
            // as photographers shooting HER and not as random sparks.
            THREE.MathUtils.lerp(fPos[idx * 3 + 2], avatarZ + 0.6, 0.65),
          )
          fl.peak = 26 + Math.random() * 26 + burst * 60
          fl.life = 0.11
          fl.next = 0.14 + Math.random() * (burst > 0.2 ? 0.1 : 0.75)
        }
        fl.life = Math.max(0, fl.life - dt)
        fl.light.intensity = fl.peak * Math.pow(fl.life / 0.11, 2.2)
      }
    },

    triggerFlashBurst() {
      burst = 1
    },

    dispose() {
      mirror.dispose()
    },
  }

  // Capture-harness hook, same intent as __SHOWROOM_POSE__ in runway-main: the light
  // rig is many overlapping additive layers, and the only way to tell which one is
  // eating the frame is to switch them off one at a time in a headless still.
  api.layers = { mirror, beams, hazeCards, flashes, deck, crowd }
  if (typeof window !== 'undefined') window.__RUNWAY_WORLD__ = api

  return api
}
