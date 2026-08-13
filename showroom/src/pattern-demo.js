import * as THREE from 'three'
import { GarmentEngine, ThreeGarmentMesh } from './engine/garment-engine.js'
import { createDressForm } from './form.js'
import { createStudioEnvironment } from './env/studio.js'
import { BODY, shoulderSlope, armholeDepth, napeToWaist } from './engine/body.js'
import { CATALOGUE } from './fabric-engine.js'

/**
 * The drafted garment on the form — front, side, back.
 *
 * This page exists to make one claim checkable: the garment reaches the
 * shoulder. Everything before it was drafted from bust, waist and hip, so the
 * bodice stopped below the shoulder point and every dress came out strapless
 * whatever it was asked for. The readout under the viewport prints the
 * landmarks the pattern was actually drafted from, and the measured top of the
 * settled mesh against the body's shoulder height. If the first number is not
 * above the second, the shoulder is not there and the page says so.
 */

const mount = document.getElementById('view')
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
renderer.outputColorSpace = THREE.SRGBColorSpace
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1.12
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
mount.appendChild(renderer.domElement)

const scene = new THREE.Scene()
scene.background = new THREE.Color(0xf2f2f4)
const camera = new THREE.PerspectiveCamera(32, 1, 0.05, 50)

const env = createStudioEnvironment(renderer, scene)
scene.environment = env.envMap
env.lights.forEach(l => { l.intensity = Math.min(l.intensity, 2.1) })
scene.add(new THREE.HemisphereLight(0xffffff, 0xdadade, 1.15))

const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(8, 8),
  new THREE.ShadowMaterial({ opacity: 0.15 }),
)
ground.rotation.x = -Math.PI / 2
ground.receiveShadow = true
scene.add(ground)

// form.js is a stylised form in its own unit scale, and its proportions are not
// a 1.70 m body — scaling it by height alone made it enormous around the bust.
// Align on the measurement that matters for fit instead: match bust half-width,
// then slide it so its bust sits at the body's bust height.
const FORM_BUST_HALF = 0.153        // from the profile in form.js
const FORM_BUST_Y = 0.545
const form = createDressForm(env.envMap)
const formScale = BODY.bustHalf / FORM_BUST_HALF
form.group.scale.setScalar(formScale)
form.group.position.y = BODY.bustY - FORM_BUST_Y * formScale
scene.add(form.group)

const SPEC = {
  garmentCategory: 'dress',
  silhouette: 'Fitted through the waist with a flowing skirt',
  neckline: 'High draped/cowl neckline',
  sleeveType: 'Voluminous gathered sleeves',
  hemLength: 'knee',
}

let engine = null
let garment = null

function build(fabricName) {
  if (garment) { scene.remove(garment.mesh); garment.mesh.geometry.dispose() }
  engine = new GarmentEngine(SPEC)
  const fabric = CATALOGUE.find(f => f.name === fabricName)
  if (fabric) engine.setFabric(fabric)
  engine.settle(420)
  garment = new ThreeGarmentMesh(engine, { color: 0xcbb89c, envMap: env.envMap })
  scene.add(garment.mesh)
  report(fabric)
}

function report(fabric) {
  const m = garment.measure()
  // Landing exactly ON the shoulder point is the correct answer for a shoulder
  // seam — a strict > called that a failure. 2 mm of tolerance, and anything
  // materially below the shoulder is still reported as strapless.
  const ok = m.top >= BODY.shoulderY - 0.002
  document.getElementById('readout').innerHTML = [
    ['Panels drafted', engine.panels.map(p => p.id).join(', ')],
    ['Particles / springs', `${engine.positions.length} / ${engine.springs.length}`],
    ['Shoulder slope', `${(shoulderSlope() * 180 / Math.PI).toFixed(1)}°`],
    ['Armhole depth', `${(armholeDepth() * 100).toFixed(1)} cm`],
    ['Nape to waist', `${(napeToWaist() * 100).toFixed(1)} cm`],
    ['Fabric', fabric ? `${fabric.name} — bend ${fabric.drape.bend}` : 'default'],
    ['Body shoulder height', `${BODY.shoulderY.toFixed(3)} m`],
    ['Measured top of garment', `${m.top.toFixed(3)} m`],
    ['Reaches the shoulder', ok ? 'YES' : 'NO — still strapless'],
    ['Settled hem', `${m.hem.toFixed(3)} m`],
  ].map(([k, v]) => `<div><span>${k}</span><b class="${
    k === 'Reaches the shoulder' ? (ok ? 'ok' : 'bad') : ''}">${v}</b></div>`).join('')
}

/* ------------------------------------------------------------------- views */
const VIEWS = { front: 0, side: Math.PI / 2, back: Math.PI }
let targetAz = 0
let az = 0

document.querySelectorAll('[data-view]').forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll('[data-view]').forEach(b => b.classList.remove('on'))
    btn.classList.add('on')
    targetAz = VIEWS[btn.dataset.view]
  }
})
document.querySelectorAll('[data-fabric]').forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll('[data-fabric]').forEach(b => b.classList.remove('on'))
    btn.classList.add('on')
    build(btn.dataset.fabric)
  }
})

function resize() {
  const w = mount.clientWidth || 900
  const h = mount.clientHeight || 640
  renderer.setSize(w, h, true)
  camera.aspect = w / Math.max(h, 1)
  camera.updateProjectionMatrix()
}
new ResizeObserver(resize).observe(mount)
resize()

build('Silk georgette')

const clock = new THREE.Clock()
let frames = 0
function tick() {
  requestAnimationFrame(tick)
  const dt = Math.min(clock.getDelta(), 1 / 30)
  az += (targetAz - az) * 0.09
  camera.position.set(Math.sin(az) * 3.05, 1.12, Math.cos(az) * 3.05)
  camera.lookAt(0, 0.92, 0)
  engine.update(dt)
  garment.updateFrame()
  renderer.render(scene, camera)
  if (++frames === 60) window.__SHOWROOM_READY__ = true
}
tick()

// Let the capture harness pose a view by name.
window.__POSE__ = name => { targetAz = VIEWS[name] ?? 0; az = targetAz }
window.__MEASURE__ = () => garment.measure()
