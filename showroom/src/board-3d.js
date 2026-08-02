import * as THREE from 'three'
import { createStudioEnvironment } from './env/studio.js'
import { createDressForm } from './form.js'
import { createDress, NECKLINES } from './dress.js'

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
  let currentNeckline = 'sweetheart'
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
   * Build a texture from the source image itself.
   *
   * This is the move from the reference clip: the designer does not draw a dress
   * "inspired by" the moth, they warp the moth's own wing onto the figure, so the
   * veins, the gradient and the yellow spot survive into the garment. The 3D
   * equivalent is to map the source onto the draped cloth — the print then follows
   * the fold instead of being painted flat.
   *
   * The garment keeps PlaneGeometry's UVs through simulation (the solver moves
   * vertices, never the topology), so the mapping stays stable as it drapes.
   */
  let sourceTex = null
  function setSource(img) {
    sourceTex?.dispose()
    sourceTex = new THREE.Texture(img)
    sourceTex.colorSpace = THREE.SRGBColorSpace
    sourceTex.wrapS = THREE.MirroredRepeatWrapping
    sourceTex.wrapT = THREE.ClampToEdgeWrapping
    sourceTex.anisotropy = 8
    sourceTex.needsUpdate = true
  }

  /**
   * @param {{name,drape,mat}} fabric  from fabric-engine
   * @param {string} hexColour         from the measured palette
   * @param {'solid'|'print'|'mixed'} mode
   *        solid  the cloth is a colour from the measured palette
   *        print  the source image IS the cloth, following the drape
   *        mixed  the source printed and tinted into the palette colour, the way
   *               the reference gown carries the moth's wing as a cape over a
   *               solid column — one garment reading as both
   */
  function dress(fabric, hexColour, mode = 'solid') {
    if (garment) {
      scene.remove(garment.object3D)
      garment.dispose?.()
      garment.material?.dispose?.()
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
    if (mode !== 'solid' && sourceTex) {
      material.map = sourceTex
      // three multiplies map by color. White lets the source through untouched;
      // the palette colour pulls it toward the chosen story without losing the
      // source's structure — that is the mixture.
      material.color.set(mode === 'print' ? 0xffffff : (hexColour || '#c8a57e'))
      if (mode === 'mixed') material.color.offsetHSL(0, -0.05, 0.34)
      // The wing is wider than it is tall on a skirt panel; repeat across the
      // body and let the vertical run once from shoulder to hem.
      // Museum photographs include the picture frame, which maps onto the
      // garment as a black band across the shoulders. Inset the UVs so only the
      // canvas is used — cropping is cheaper and safer than trying to detect the
      // frame, and a designer would trim the reference before using it anyway.
      const INSET = 0.07
      sourceTex.repeat.set(2.2 * (1 - INSET * 2), 1 - INSET * 2)
      sourceTex.offset.set(INSET, INSET)
      material.roughness = Math.min((m.roughness ?? 0.7) + 0.08, 1)
    }

    material.sheen = m.sheen ?? 0.6
    material.sheenRoughness = m.sheenRough ?? 0.35
    // Sheen a touch lighter than the body colour, so a backlit edge separates.
    material.sheenColor = new THREE.Color(hexColour || '#c8a57e')
    material.sheenColor.offsetHSL(0, -0.1, 0.2)

    garment = createDress(form, material, {
      drape: fabric?.drape,
      neckline: currentNeckline,
    })
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
    setSource,
    necklines: Object.entries(NECKLINES).map(([k, v]) => ({ key: k, name: v.name })),
    setNeckline(k) { currentNeckline = k },
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
