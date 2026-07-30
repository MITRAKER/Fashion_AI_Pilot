import * as THREE from 'three'
import { createStudioEnvironment } from './env/studio.js'
import { buildPipeline } from './post/pipeline.js'
import { createRunwayWorld } from './runway/world.js'
import { createAvatar } from './runway/avatar.js'
import { createGameEngine } from './game/engine.js'

/**
 * Fashion runway — the playable scene.
 *
 * The world, avatar and scoring engine already existed as modules that nothing
 * imported. This wires them together: a chase camera down the catwalk, a 120 BPM
 * beat clock, and pose input judged against it.
 *
 * Loop: the model walks the catwalk, you strike a pose at the pit on the beat.
 * Accuracy against the nearest beat decides PERFECT / GREAT / GOOD, and combo
 * multiplies the score.
 */

const BPM = 120
const BEAT = 60 / BPM            // 0.5s
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

const camera = new THREE.PerspectiveCamera(38, innerWidth / innerHeight, 0.05, 200)

const env = createStudioEnvironment(renderer, scene)
scene.environment = env.envMap
// The runway has its own lighting design; the studio rig would flatten it.
env.lights.forEach(l => { l.intensity *= 0.28 })

const world = createRunwayWorld(env.envMap)
scene.add(world.group)

const avatar = createAvatar(env.envMap)
scene.add(avatar.group)

const engine = createGameEngine()

const { composer } = buildPipeline(renderer, scene, camera)

addEventListener('resize', () => {
  renderer.setSize(innerWidth, innerHeight)
  camera.aspect = innerWidth / innerHeight
  camera.updateProjectionMatrix()
})

/* --------------------------------------------------------------------- HUD */
const hud = {
  score: document.getElementById('score'),
  combo: document.getElementById('combo'),
  rating: document.getElementById('rating'),
  beat: document.getElementById('beat'),
  hint: document.getElementById('hint'),
}

/* ------------------------------------------------------------------- input */
let started = false
let clockTime = 0
let poseIndex = 0

function start() {
  if (started) return
  started = true
  engine.initAudio()
  avatar.setWalking(true)
  hud.hint.classList.add('gone')
}

function pose() {
  if (!started) { start(); return }
  // Distance in ms to the nearest beat — the whole judgement.
  const phase = clockTime % BEAT
  const offBy = Math.min(phase, BEAT - phase) * 1000
  engine.triggerPoseTiming(offBy)
  avatar.strikePose(POSES[poseIndex++ % POSES.length])
}

addEventListener('keydown', e => {
  if (e.code === 'Space') { e.preventDefault(); pose() }
  if (e.code === 'Enter') start()
})
addEventListener('pointerdown', pose)

/* -------------------------------------------------------------------- loop */
const clock = new THREE.Clock()
let frames = 0

// Chase camera: sits behind and above, easing toward the model, so the catwalk
// converges to the LED wall and the spotlights rake across frame.
const camPos = new THREE.Vector3(1.5, 1.15, 4.0)
const camAim = new THREE.Vector3(0.68, 0.35, 0)

function tick() {
  requestAnimationFrame(tick)
  const dt = Math.min(clock.getDelta(), 1 / 30)
  clockTime += dt

  avatar.update(dt)
  world.update(dt, avatar.z)
  engine.update(dt)

  const z = avatar.z
  camPos.set(1.62, 1.12, z + 3.6)
  camAim.set(0.68, 0.42, z - 1.2)
  camera.position.lerp(camPos, 1 - Math.pow(0.001, dt))
  camera.lookAt(camAim)

  // HUD
  if (hud.score) hud.score.textContent = String(engine.score).padStart(6, '0')
  if (hud.combo) hud.combo.textContent = engine.combo > 1 ? `×${engine.combo}` : ''
  if (hud.rating) {
    hud.rating.textContent = engine.ratingTime > 0 ? engine.rating : ''
    hud.rating.style.opacity = engine.ratingTime > 0 ? '1' : '0'
  }
  if (hud.beat) {
    // Pulses on the beat so the player can see the rhythm they are playing to.
    const phase = (clockTime % BEAT) / BEAT
    hud.beat.style.transform = `scale(${1 + (1 - phase) * 0.5})`
    hud.beat.style.opacity = String(0.35 + (1 - phase) * 0.65)
  }

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
    avatar.update(1 / 60); world.update(1 / 60, avatar.z); engine.update(1 / 60)
    const z = avatar.z
    camera.position.set(1.62, 1.12, z + 3.6)
    camera.lookAt(0.68, 0.42, z - 1.2)
  }
  await new Promise(r => {
    let n = 0
    const f = () => (++n < 8 ? requestAnimationFrame(f) : r())
    requestAnimationFrame(f)
  })
}
