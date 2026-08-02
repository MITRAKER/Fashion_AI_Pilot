import * as THREE from 'three'
import { createStudioEnvironment } from './env/studio.js'
import { createDressForm } from './form.js'
import { createGarment } from './garment.js'

/**
 * The concept, worn.
 *
 * A palette and a fabric name are abstractions until they are on a body. This
 * drapes the chosen cloth over a dress form in the chosen colour — and, crucially,
 * with the chosen fabric's PHYSICS. Gazar stands away from the body; georgette
 * falls against it. If every fabric hung identically the preview would be
 * decoration; because the simulation changes, it is information.
 *
 * Rebuilds the garment on each change rather than tweening: cloth carries state
 * from its previous drape, and interpolating between two settled solutions gives
 * a shape that belongs to neither fabric.
 */
export function createBodyPreview(mount) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.12
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  mount.appendChild(renderer.domElement)

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(30, 1, 0.05, 50)

  const env = createStudioEnvironment(renderer, scene)
  scene.environment = env.envMap
  // Document lighting: a working preview must be legible, not moody.
  env.lights.forEach(l => {
    l.intensity = l.intensity < 0.5 ? 1.0 : l.intensity > 4 ? 1.8 : 2.1
    l.color.set(0xffffff)
  })
  scene.add(new THREE.HemisphereLight(0xffffff, 0xd8d8de, 1.1))

  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(6, 6), new THREE.ShadowMaterial({ opacity: 0.15 }))
  ground.rotation.x = -Math.PI / 2
  ground.position.y = -0.312
  ground.receiveShadow = true
  scene.add(ground)

  const form = createDressForm(env.envMap)
  scene.add(form.group)

  let garment = null
  let az = 0.35, targetAz = 0.35

  function resize() {
    const w = mount.clientWidth, h = mount.clientHeight
    if (!w || !h) return
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
  }
  new ResizeObserver(resize).observe(mount)

  let dragging = false, lastX = 0
  mount.addEventListener('pointerdown', e => { dragging = true; lastX = e.clientX })
  addEventListener('pointerup', () => { dragging = false })
  addEventListener('pointermove', e => {
    if (!dragging) return
    targetAz -= (e.clientX - lastX) * 0.008
    lastX = e.clientX
  })

  /**
   * @param {{name,drape,mat}} fabric  from fabric-engine
   * @param {string} hexColour         from the measured palette
   */
  function dress(fabric, hexColour) {
    if (garment) {
      scene.remove(garment.object3D)
      garment.object3D.geometry.dispose()
      garment.material.dispose()
    }

    const m = fabric?.mat ?? {}
    const material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(hexColour || '#c8a57e'),
      envMap: env.envMap,
      envMapIntensity: 0.9,
      roughness: m.roughness ?? 0.78,
      metalness: 0,
      side: THREE.DoubleSide,
      transparent: (m.opacity ?? 1) < 0.999,
      opacity: m.opacity ?? 1,
    })
    material.sheen = m.sheen ?? 0.6
    material.sheenRoughness = m.sheenRough ?? 0.35
    // Sheen a touch lighter than the body colour, so a backlit edge separates.
    material.sheenColor = new THREE.Color(hexColour || '#c8a57e')
    material.sheenColor.offsetHSL(0, -0.1, 0.2)

    garment = createGarment(env.envMap, form, { drape: fabric?.drape, material })
    scene.add(garment.object3D)
    garment.settle(5.0)          // capture-safe: hung cloth, never mid-fall
  }

  const clock = new THREE.Clock()
  function tick() {
    requestAnimationFrame(tick)
    const dt = Math.min(clock.getDelta(), 1 / 30)
    az += (targetAz - az) * 0.09
    camera.position.set(Math.sin(az) * 2.45, 0.38, Math.cos(az) * 2.45)
    camera.lookAt(0, 0.22, 0)
    garment?.update(dt)
    renderer.render(scene, camera)
  }
  resize()
  tick()

  return {
    dress,
    setView: a => { targetAz = a },
    /** Exact settled silhouette — pixels are ambiguous, geometry is not. */
    measure() {
      if (!garment) return null
      const b = new THREE.Box3().setFromObject(garment.object3D)
      return {
        width: +(b.max.x - b.min.x).toFixed(4),
        depth: +(b.max.z - b.min.z).toFixed(4),
        hemY: +b.min.y.toFixed(4),
      }
    },
  }
}
