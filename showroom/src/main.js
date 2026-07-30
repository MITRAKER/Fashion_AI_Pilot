import * as THREE from 'three'
import { createRenderer, createCamera } from './core/renderer.js'
import { createStudioEnvironment } from './env/studio.js'
import { buildPipeline } from './post/pipeline.js'
import { createSlab } from './ui/slab.js'
import { createCoat } from './cloth/coat.js'
import { makeFloor, PALETTE } from './materials/library.js'

const renderer = createRenderer()
const camera = createCamera()
const scene = new THREE.Scene()
scene.background = new THREE.Color(PALETTE.void)
scene.fog = new THREE.FogExp2(PALETTE.void, 0.10)

const env = createStudioEnvironment(renderer, scene)
scene.environment = env.envMap

const floor = new THREE.Mesh(new THREE.PlaneGeometry(24, 24), makeFloor(env.envMap))
floor.rotation.x = -Math.PI / 2
floor.position.y = -1.42
floor.receiveShadow = true
scene.add(floor)

const slab = createSlab(env.envMap)
scene.add(slab.group)

const coat = createCoat(env.envMap)
scene.add(coat.object3D)
coat.settle(3.2)

/* ------------------------------------------------------------------ poses */
// OWNED BY: composition agent. Camera framings the capture harness can request.
const POSES = {
  hero:    { pos: [0.05, 0.16, 3.30], look: [0.02, -0.02, 0], fov: 32 },
  detail:  { pos: [0.62, 0.30, 1.95], look: [0.30, 0.02, 0], fov: 30 },
  garment: { pos: [0.95, 0.18, 2.05], look: [0.44, 0.04, -0.25], fov: 34 },
  wide:    { pos: [-0.35, 0.42, 4.35], look: [0.05, -0.10, 0], fov: 30 },
}

function pose(name) {
  const p = POSES[name] ?? POSES.hero
  camera.position.set(...p.pos)
  camera.lookAt(new THREE.Vector3(...p.look))
  camera.fov = p.fov
  camera.updateProjectionMatrix()
}
pose('hero')

// ?nopost=1 bisects the post chain out of the picture. Kept permanently: when a
// frame goes black, the first question is always "is it the scene or the chain?"
const NOPOST = new URLSearchParams(location.search).has('nopost')
const { composer } = NOPOST ? { composer: null } : buildPipeline(renderer, scene, camera)

/* ---------------------------------------------------------------- pointer */
const pointer = { x: 0, y: 0, tx: 0, ty: 0 }
addEventListener('pointermove', e => {
  pointer.tx = (e.clientX / innerWidth - 0.5) * 2
  pointer.ty = (e.clientY / innerHeight - 0.5) * 2
})

/* ------------------------------------------------------------------- loop */
const clock = new THREE.Clock()
let frames = 0
let fpsAccum = 0

function frame() {
  requestAnimationFrame(frame)
  const dt = Math.min(clock.getDelta(), 1 / 30)
  const t = clock.elapsedTime

  pointer.x += (pointer.tx - pointer.x) * 0.045     // eased, never 1:1 (§2)
  pointer.y += (pointer.ty - pointer.y) * 0.045

  slab.update(t)
  slab.group.rotation.y += pointer.x * 0.055
  slab.group.rotation.x += pointer.y * 0.030

  coat.update(dt)
  if (composer) composer.render(dt)
  else renderer.render(scene, camera)

  frames++
  fpsAccum += dt
  if (frames === 30) document.getElementById('boot')?.classList.add('gone')

  // Signal the capture harness only once the image has converged: PMREM built,
  // cloth settled, and enough frames presented that TAA-ish effects are stable.
  if (frames === 90) {
    window.__SHOWROOM_INFO__ = {
      fps: +(30 / Math.max(fpsAccum, 1e-3)).toFixed(1),
      triangles: renderer.info.render.triangles,
      calls: renderer.info.render.calls,
      pixelRatio: renderer.getPixelRatio(),
    }
    window.__SHOWROOM_READY__ = true
  }
}
frame()

window.__SHOWROOM_POSE__ = async name => {
  pose(name)
  // Let the pipeline present a few frames at the new framing before capture.
  await new Promise(r => {
    let n = 0
    const tick = () => (++n < 8 ? requestAnimationFrame(tick) : r())
    requestAnimationFrame(tick)
  })
}
