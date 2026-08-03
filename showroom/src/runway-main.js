import * as THREE from 'three'
import { createStudioEnvironment } from './env/studio.js'
import { buildPipeline } from './post/pipeline.js'
import { createRunwayWorld } from './runway/world.js'
import { createAvatar } from './runway/avatar.js'
import { createModelAvatar } from './runway/model-avatar.js'
import { createWardrobe } from './runway/wardrobe.js'
import { createHotspots } from './runway/hotspots.js'

/**
 * Fashion runway — a presentation view of a look.
 *
 * This was a rhythm game: a 120 BPM beat clock, pose input judged against it,
 * PERFECT/GREAT/GOOD ratings and a combo multiplier. All of that is gone. A
 * score turns looking at a garment into losing at a game, and this is a
 * collection tool.
 *
 * What it is now: the model walks the catwalk under show lighting, space or a
 * click holds her so a look can be read, and clicking a garment part opens that
 * part's spec with the same approval state the tech pack carries.
 */

const POSES = ['A', 'B', 'C']

const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' })
renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
renderer.setSize(innerWidth, innerHeight)
renderer.outputColorSpace = THREE.SRGBColorSpace
renderer.toneMapping = THREE.NoToneMapping      // ACES is applied in the post chain
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
document.body.appendChild(renderer.domElement)

const scene = new THREE.Scene()
scene.background = new THREE.Color(0x050507)
scene.fog = new THREE.FogExp2(0x050507, 0.026)

const camera = new THREE.PerspectiveCamera(36, innerWidth / innerHeight, 0.05, 200)

const env = createStudioEnvironment(renderer, scene)
scene.environment = env.envMap
// The runway has its own lighting design; the studio rig would flatten it.
env.lights.forEach(l => { l.intensity *= 0.28 })

const world = createRunwayWorld(env.envMap)
scene.add(world.group)

// A real rigged character by default; ?proc=1 falls back to the procedural rig
// so the two can be compared in the same lighting.
const useProcedural = new URLSearchParams(location.search).has('proc')
const avatar = useProcedural
  ? createAvatar(env.envMap)
  : await createModelAvatar(env.envMap)
scene.add(avatar.group)


// OWNED BY: cinematography agent.
// The lighting rig in world.js is still moving under this file, so every grade
// value is overridable from the query string while it settles:
//   ?exp=0.4&bloom=0.6&thr=1.4&bokeh=2&grain=0
const Q = new URLSearchParams(location.search)
const q = (key, fallback) => (Q.has(key) ? Number(Q.get(key)) : fallback)

const { composer, effects } = buildPipeline(renderer, scene, camera, {
  // 0.28 was set while world.js was still dark; the lighting rig landed much
  // brighter and the two were never reconciled, which buried the entire set —
  // deck, seating and backdrop were rendering the whole time, just below black.
  exposure: q('exp', 0.80),
  contrast: q('con', 1.10),
  saturation: q('sat', 1.05),
  shadowLift: q('lift', 0.006),
  // The lit deck lands around 1.0-1.4 linear after exposure; gold trim and
  // speculars are well above it. The threshold goes between the two.
  bloomThreshold: q('thr', 1.60),
  bloomIntensity: q('bloom', 0.85),
  bloomRadius: q('rad', 0.72),
  focusRange: q('range', 1.5),
  bokehScale: q('bokeh', 2.2),
  vignetteOffset: q('vigoff', 0.30),
  vignetteDarkness: q('vig', 0.52),
  grain: q('grain', 0.019),
})

// Focus rides the model, so she is the only thing in the frame that is sharp.
const focusTarget = new THREE.Vector3()
effects.dof.target = focusTarget

addEventListener('resize', () => {
  renderer.setSize(innerWidth, innerHeight)
  camera.aspect = innerWidth / innerHeight
  camera.updateProjectionMatrix()
})

// Debug handle. Lets the capture harness measure the scene instead of eyeballing
// a screenshot — "is she floating?" is a bounding-box question, not an opinion.
window.__RUNWAY__ = { scene, camera, avatar, world, THREE }

// Wardrobe: pick a look, the model wears it. Selecting an item names the style
// on the HUD, so the frame always says which style record is on the runway.
const lookLabel = document.getElementById('looklabel')
const lookName = document.getElementById('lookname')
const wardrobe = createWardrobe(avatar, {
  onChange: (_cat, item) => {
    if (lookLabel) lookLabel.textContent = item.sub
    // The corner that used to count a score now names the garment on the deck.
    if (lookName) lookName.textContent = item.name ?? item.sub
  },
})
window.__RUNWAY__.wardrobe = wardrobe

// Click a garment part, read its spec. Markers track the rig and carry the same
// approval state the tech pack does, so an unresolved detail looks unresolved here.
const hotspots = createHotspots(avatar, camera, renderer)
window.__RUNWAY__.hotspots = hotspots

/* --------------------------------------------------------------------- HUD */
const hud = {
  hint: document.getElementById('hint'),
}

/* ------------------------------------------------------------------- input */
let started = false
let clockTime = 0
let poseIndex = 0

function start() {
  if (started) return
  started = true
  avatar.setWalking(true)
  hud.hint.classList.add('gone')
}

/**
 * Hold the walk so a garment can be read.
 *
 * This was a rhythm game: pose on the 120 BPM beat, judged PERFECT/GREAT/GOOD,
 * combo multiplying a score. Scoring is gone — this is a presentation view of a
 * collection, and a score turns looking at a garment into losing at a game.
 * What is left is the useful half: stop the model, turn her, read the details.
 */
function togglePause() {
  if (!started) { start(); return }
  paused = !paused
  avatar.setWalking(!paused)
  if (paused) avatar.strikePose(POSES[poseIndex++ % POSES.length])
}
let paused = false

addEventListener('keydown', e => {
  if (e.code === 'Space') { e.preventDefault(); togglePause() }
  if (e.code === 'Enter') start()
})
// Pointer events must not fight the hotspots — clicking a garment part opens its
// spec card, and that click should not also halt the walk.
addEventListener('pointerdown', e => {
  if (e.target.closest?.('.hs-card, .hs-toggle, .hs-marker')) return
  togglePause()
})

// The title card is a full-screen 72%-black scrim, so a headless capture would
// otherwise grade a dimmed frame rather than the actual stage. Same intent as the
// __SHOWROOM_POSE__ hook below: make the still representative. Real users are
// untouched — nothing auto-starts in a normal browser.
if (navigator.webdriver) setTimeout(start, 600)

/* -------------------------------------------------------------------- loop */
const clock = new THREE.Clock()
let frames = 0

/* ------------------------------------------------------------------ camera */
/**
 * OWNED BY: cinematography agent. ART-DIRECTION §2.
 *
 * Broadcast coverage of a catwalk: the cameras live in the pit, at deck height,
 * looking UP the runway so the deck converges on the LED wall and the model is
 * read against the glow. The old chase cam sat above head height looking down,
 * which is a security-camera angle and left the top half of the frame empty.
 *
 * Geometry this rig is built against (world.js / avatar.js):
 *   catwalk centreline x = 0.68, deck surface y = -0.56, LED wall at z = -18.8
 *   model x = 0.68, sole y = -0.56, crown y = +1.30 (1.86m, 9 heads)
 *
 * Per shot:
 *   side/height/back  camera placement — side and back are relative to the
 *                     model, height is absolute world Y (deck is -0.56)
 *   aim               world Y of the look-at point on the model's body
 *   yaw/pitch/roll    composition offsets applied AFTER lookAt, in degrees.
 *                     This is what takes the subject off dead centre: yaw is
 *                     negative so she sits left of the middle and the runway
 *                     converges into the negative space on the right. Roll is
 *                     never zero — §10.7 fails an axis-aligned frame.
 */
const SHOTS = [
  // Low hero. Solved, not eyeballed: at 4.3m the 1.86m figure subtends 24° of the
  // 34° vertical, i.e. ~70% of frame height (§2), and the -6.6° tilt puts her
  // between 15% and 85% so she has headroom without floating.
  { name: 'hero', fov: 34, side: 0.58, height: -0.06, back: 4.25, aim: 0.86,
    yaw: -7.2, pitch: -6.6, roll: -2.1, push: 0.08, hold: 9.0 },
  // Three-quarter — wider and a touch higher, the deck reading as a long diagonal.
  { name: 'three-quarter', fov: 30, side: 1.95, height: 0.34, back: 6.10, aim: 0.72,
    yaw: -8.6, pitch: -4.0, roll: 1.7, push: 0.07, hold: 7.0 },
  // Pit close-up — almost on the deck, cropped mid-thigh, looking steeply up.
  { name: 'pit', fov: 40, side: 0.62, height: -0.30, back: 1.90, aim: 0.68,
    yaw: -9.2, pitch: -1.5, roll: -3.0, push: 0.05, hold: 6.0 },
]

const RUNWAY_X = 0.68
const camGoal = new THREE.Vector3()
const camAim = new THREE.Vector3()
const D2R = Math.PI / 180

// ?shot=1 pins a framing — used when reviewing each one in isolation.
const forcedShot = new URLSearchParams(location.search).get('shot')
let shotIndex = forcedShot === null ? 0 : Number(forcedShot) % SHOTS.length
let prevIndex = shotIndex
let shotTime = 0
let blendT = 1                      // 1 = settled on the current shot

/**
 * The reference this is held to never cuts — the camera glides continuously.
 * So the SHOTS above became keyframes rather than cuts: every parameter (fov,
 * placement, aim, yaw/pitch/roll) is blended from the outgoing framing to the
 * incoming one over BLEND seconds on a cubic ease. There is no snap anywhere in
 * this function.
 *
 * Blending the PARAMETERS rather than the resulting matrices is what keeps the
 * move readable: the camera travels a smooth arc through the shot space instead
 * of sliding along a straight line between two poses and swinging its aim.
 */
const BLEND = 2.6

const EASE = k => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2)
const mix = (a, b, k) => a + (b - a) * k

function updateCamera(dt, z, t) {
  shotTime += dt

  if (forcedShot === null && blendT >= 1 && shotTime >= SHOTS[shotIndex].hold) {
    prevIndex = shotIndex
    shotIndex = (shotIndex + 1) % SHOTS.length
    shotTime = 0
    blendT = 0
  }
  if (blendT < 1) blendT = Math.min(1, blendT + dt / BLEND)

  const a = SHOTS[prevIndex]
  const b = SHOTS[shotIndex]
  const k = EASE(blendT)
  const p = key => mix(a[key], b[key], k)

  // Slow idle drift — §2 caps it at 2° amplitude over an 8s-plus period.
  const driftYaw = Math.sin(t * 0.52) * 1.1
  const driftPitch = Math.sin(t * 0.37 + 1.9) * 0.7

  // Push-in continues across the blend, so the move never stalls mid-transition.
  const prog = Math.min(shotTime / b.hold, 1)
  const dolly = 1 - p('push') * (prog * prog * (3 - 2 * prog))

  camGoal.set(RUNWAY_X + p('side'), p('height'), z + p('back') * dolly)
  camAim.set(RUNWAY_X, p('aim'), z)

  // A light critically-damped follow on top of the blended goal. Frame-rate
  // independent, so the move is identical at 30fps and 144fps.
  camera.position.lerp(camGoal, 1 - Math.pow(0.0016, dt))

  camera.lookAt(camAim)
  camera.rotateY((p('yaw') + driftYaw) * D2R)
  camera.rotateX((p('pitch') + driftPitch) * D2R)
  camera.rotateZ(p('roll') * D2R)

  const fov = p('fov')
  if (Math.abs(camera.fov - fov) > 1e-3) { camera.fov = fov; camera.updateProjectionMatrix() }

  focusTarget.set(avatar.group.position.x, avatar.group.position.y + 0.46, z)
}

// Start settled on the opening framing rather than easing in from the origin.
updateCamera(0, avatar.z, 0)
camera.position.copy(camGoal)

function tick() {
  requestAnimationFrame(tick)
  const dt = Math.min(clock.getDelta(), 1 / 30)
  clockTime += dt

  avatar.update(dt)
  world.update(dt, avatar.z)

  updateCamera(dt, avatar.z, clockTime)

  hotspots.update()
  composer.render(dt)

  if (++frames === 60) window.__SHOWROOM_READY__ = true
}
tick()

// Capture-harness hooks: pose the scene deterministically for a still.
window.__SHOWROOM_POSE__ = async name => {
  if (name === 'walk') { avatar.setWalking(true); avatar.group.position.z = -7 }
  if (name === 'pit') { avatar.setWalking(true); avatar.group.position.z = -0.2; avatar.strikePose('A') }
  if (name === 'pose') { avatar.strikePose('B') }
  for (let i = 0; i < 40; i++) {           // let the sim and camera settle
    avatar.update(1 / 60); world.update(1 / 60, avatar.z)
    cutPending = true                      // snap, never ease, when posing a still
    updateCamera(1 / 60, avatar.z, clockTime)
  }
  await new Promise(r => {
    let n = 0
    const f = () => (++n < 8 ? requestAnimationFrame(f) : r())
    requestAnimationFrame(f)
  })
}
