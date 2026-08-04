import * as THREE from 'three'
import * as GarmentEngineModule from 'garment-engine'
import { createStudioEnvironment } from './env/studio.js'
import { createDressForm } from './form.js'

const { GarmentEngine, ThreeGarmentMesh } = GarmentEngineModule

/**
 * The live model at the centre of the style sheet, with front / side / back views.
 *
 * Lit brighter and cleaner than the dark showroom: this is a working document, not a
 * hero shot. A technical designer needs to read the closure placement, not admire it.
 */
const mount = document.getElementById('view')
const hasLinkedFlatSketch = Boolean(mount?.dataset.flatSketch)

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
renderer.outputColorSpace = THREE.SRGBColorSpace
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1.15
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.domElement.style.width = '100%'
renderer.domElement.style.height = '100%'
renderer.domElement.style.display = 'block'
mount.appendChild(renderer.domElement)

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(30, 1, 0.05, 50)

function resize() {
  const w = Math.max(mount.clientWidth, 720)
  const h = Math.max(mount.clientHeight, 520)
  // updateStyle must be true — see StyleSheet3DCanvas.tsx's resize() for why
  // `false` here causes an exponential canvas/container growth loop on any
  // devicePixelRatio > 1 display.
  renderer.setSize(w, h, true)
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

// This style's own design-intent description (mirrors seed.ts's real
// parsedSketch for ST-27-011 — see app/src/data/seed.ts). This static page
// has no seed.ts/store to read from at runtime, so the description is
// hardcoded here rather than invented.
const ST27011_PARSED_SKETCH = {
  garmentCategory: 'dress',
  silhouette: 'Asymmetric draped dress with fitted column body and dramatic balloon sleeves',
  neckline: 'Asymmetric folded neckline with draped crossover panel',
  sleeveType: 'Long voluminous balloon sleeves with deep cuffs',
  hemLength: 'knee',
  keyDesignFeatures: [
    'Fitted bodice shaping with long vertical seams and angled waist seam',
    'Slim column hem with a soft asymmetric drape extension',
  ],
}

function addGarmentEnginePresentation(envMap) {
  const engine = new GarmentEngine(ST27011_PARSED_SKETCH)
  const garmentMesh = new ThreeGarmentMesh(engine, {
    color: 0xc8b59a, roughness: 0.58, metalness: 0.0, envMap, envMapIntensity: 0.9,
  })
  garmentMesh.mesh.castShadow = true
  garmentMesh.mesh.receiveShadow = true

  // garment-engine works in real-world meters (avatar ~1.7m, shoulder at
  // y≈1.4, floor at y≈0). This scene's mannequin/camera rig is tuned to a
  // much smaller abstract unit scale (the old presentation garment spanned
  // roughly y=-0.82 at hem to y=0.4 at shoulder). Wrap in a group so the
  // engine's mesh lands in the same visual "slot" the old shell occupied,
  // without touching the camera/lighting/mannequin setup above.
  const engineWrapper = new THREE.Group()
  const OLD_SHOULDER_Y = 0.4
  const OLD_HEM_Y = -0.82
  const ENGINE_SHOULDER_Y = 1.4
  const ENGINE_FLOOR_Y = -0.02
  const fitScale = (OLD_SHOULDER_Y - OLD_HEM_Y) / (ENGINE_SHOULDER_Y - ENGINE_FLOOR_Y)
  engineWrapper.scale.setScalar(fitScale)
  engineWrapper.position.y = OLD_SHOULDER_Y - ENGINE_SHOULDER_Y * fitScale
  engineWrapper.add(garmentMesh.mesh)
  scene.add(engineWrapper)

  return {
    update(dt) {
      engine.update(dt)
      garmentMesh.updateFrame()
    },
    settle() {},
  }
}

const garment = hasLinkedFlatSketch ? addGarmentEnginePresentation(env.envMap) : { update() {}, settle() {} }

/* ------------------------------------------------------------------- views */
// Azimuth per view. Side is camera-left so a left-side-seam zip is the thing you see.
const VIEWS = { front: 0, side: -Math.PI / 2, back: Math.PI }
let targetAz = 0
let az = 0
const RADIUS = hasLinkedFlatSketch ? 2.9 : 2.55
const HEIGHT = hasLinkedFlatSketch ? 0.20 : 0.40

function apply() {
  camera.position.set(
    Math.sin(az) * RADIUS,
    HEIGHT,
    Math.cos(az) * RADIUS,
  )
  camera.lookAt(0, hasLinkedFlatSketch ? -0.02 : 0.24, 0)
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

  if (++frames === 2) document.getElementById('spin')?.classList.add('gone')
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
