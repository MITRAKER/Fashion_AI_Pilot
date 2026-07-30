import * as THREE from 'three'
import { createStudioEnvironment } from './env/studio.js'
import { createDressForm } from './form.js'
import { createGarment } from './garment.js'

/**
 * The live model at the centre of the style sheet, with front / side / back views.
 *
 * Lit brighter and cleaner than the dark showroom: this is a working document, not a
 * hero shot. A technical designer needs to read the closure placement, not admire it.
 */
const mount = document.getElementById('view')

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
renderer.outputColorSpace = THREE.SRGBColorSpace
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1.15
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
mount.appendChild(renderer.domElement)

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(30, 1, 0.05, 50)

function resize() {
  const w = mount.clientWidth, h = mount.clientHeight
  renderer.setSize(w, h, false)
  camera.aspect = w / Math.max(h, 1)
  camera.updateProjectionMatrix()
}
new ResizeObserver(resize).observe(mount)

const env = createStudioEnvironment(renderer, scene)
scene.environment = env.envMap

// Document lighting: lift the fill well above the showroom rig so the garment reads.
env.lights.forEach(l => {
  if (l.intensity < 0.5) l.intensity = 1.05          // fill
  else if (l.intensity > 4) l.intensity = 1.9        // rim, pulled back
  else l.intensity = 2.2                             // key
  l.color.set(0xffffff)
})
scene.add(new THREE.HemisphereLight(0xffffff, 0xd8d8de, 1.15))

// Ground shadow catcher — contact only, no visible plane.
const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(6, 6),
  new THREE.ShadowMaterial({ opacity: 0.16 }),
)
ground.rotation.x = -Math.PI / 2
ground.position.y = -0.312
ground.receiveShadow = true
scene.add(ground)

const form = createDressForm(env.envMap)
scene.add(form.group)

const garment = createGarment(env.envMap, form)
scene.add(garment.object3D)
garment.settle(6.0)

/* ------------------------------------------------------------------- views */
// Azimuth per view. Side is camera-left so a left-side-seam zip is the thing you see.
const VIEWS = { front: 0, side: -Math.PI / 2, back: Math.PI }
let targetAz = 0
let az = 0
const RADIUS = 2.55
const HEIGHT = 0.40

function apply() {
  camera.position.set(
    Math.sin(az) * RADIUS,
    HEIGHT,
    Math.cos(az) * RADIUS,
  )
  camera.lookAt(0, 0.24, 0)
}

document.querySelectorAll('[data-view]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-view]').forEach(b => b.classList.remove('on'))
    btn.classList.add('on')
    targetAz = VIEWS[btn.dataset.view]
  })
})

// Drag to rotate, with the view buttons still authoritative.
let dragging = false, lastX = 0
mount.addEventListener('pointerdown', e => { dragging = true; lastX = e.clientX })
addEventListener('pointerup', () => { dragging = false })
addEventListener('pointermove', e => {
  if (!dragging) return
  targetAz -= (e.clientX - lastX) * 0.007
  lastX = e.clientX
})

/* -------------------------------------------------------------------- loop */
const clock = new THREE.Clock()
let frames = 0
resize()
apply()

function tick() {
  requestAnimationFrame(tick)
  const dt = Math.min(clock.getDelta(), 1 / 30)

  az += (targetAz - az) * 0.09          // eased, never snapped
  apply()
  garment.update(dt)
  renderer.render(scene, camera)

  if (++frames === 20) document.getElementById('spin')?.classList.add('gone')
  if (frames === 60) window.__SHOWROOM_READY__ = true
}
tick()

// Let the capture harness pose the viewport by name.
window.__SHOWROOM_POSE__ = async name => {
  if (name in VIEWS) { targetAz = VIEWS[name]; az = VIEWS[name]; apply() }
  await new Promise(r => {
    let n = 0
    const f = () => (++n < 6 ? requestAnimationFrame(f) : r())
    requestAnimationFrame(f)
  })
}
