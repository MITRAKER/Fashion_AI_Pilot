import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * Native React 3D Style Sheet Canvas.
 * Renders the procedural dress form and live XPBD-settled wool coat drape
 * directly inside the React DOM tree without an iframe or bare-specifier issue.
 *
 * The viewMode prop drives the camera azimuth smoothly via a ref
 * so the Three.js scene is only created once, never torn down on view changes.
 */
export function StyleSheet3DCanvas({ viewMode = 'front' }: { viewMode?: 'front' | 'side' | 'back' }) {
  const mountRef = useRef<HTMLDivElement>(null)
  const viewRef = useRef(viewMode)

  // Keep ref in sync so the animation loop can read it without rebuilding the scene.
  useEffect(() => {
    viewRef.current = viewMode
  }, [viewMode])

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // 1. Renderer setup — match stylesheet.html exactly
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.15
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    mount.appendChild(renderer.domElement)

    // 2. Scene & Camera
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(30, mount.clientWidth / Math.max(mount.clientHeight, 1), 0.05, 50)

    function resize() {
      if (!mount) return
      const w = mount.clientWidth, h = mount.clientHeight
      renderer.setSize(w, h, false)
      camera.aspect = w / Math.max(h, 1)
      camera.updateProjectionMatrix()
    }
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(mount)
    resize()

    // 3. Studio Lighting & Environment Map
    const pmrem = new THREE.PMREMGenerator(renderer)
    pmrem.compileEquirectangularShader()
    const envScene = new THREE.Scene()
    const envGeo = new THREE.BoxGeometry(10, 10, 10)
    const envMat = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.BackSide })
    envScene.add(new THREE.Mesh(envGeo, envMat))
    const envMap = pmrem.fromScene(envScene).texture

    scene.environment = envMap

    // Document lighting — match stylesheet.html: lifted fill, pulled-back rim, clean white
    const key = new THREE.DirectionalLight(0xffffff, 2.2)
    key.position.set(-2.6, 3.8, 2.2)
    key.castShadow = true
    key.shadow.mapSize.width = 1024
    key.shadow.mapSize.height = 1024
    key.shadow.bias = -0.0001
    scene.add(key)

    const fill = new THREE.DirectionalLight(0xffffff, 1.05)
    fill.position.set(1.2, -0.4, 3.0)
    scene.add(fill)

    const rim = new THREE.DirectionalLight(0xffffff, 1.9)
    rim.position.set(2.9, 2.2, -2.6)
    scene.add(rim)

    scene.add(new THREE.HemisphereLight(0xffffff, 0xd8d8de, 1.15))

    // Ground shadow catcher — contact only, no visible plane
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(6, 6),
      new THREE.ShadowMaterial({ opacity: 0.16 })
    )
    ground.rotation.x = -Math.PI / 2
    ground.position.y = -0.312
    ground.receiveShadow = true
    scene.add(ground)

    // 4. Procedural Dress Form — exact profile from the showroom version
    const profile: [number, number][] = [
      [0.052, 0.720], [0.088, 0.690], [0.150, 0.652], [0.146, 0.600],
      [0.153, 0.545], [0.141, 0.485], [0.121, 0.418], [0.132, 0.360],
      [0.158, 0.282], [0.156, 0.210], [0.140, 0.140], [0.086, 0.108], [0.030, 0.096],
    ]
    const points = profile.map(([r, y]) => new THREE.Vector2(r, y))
    const formGeo = new THREE.LatheGeometry(points, 96)
    formGeo.computeVertexNormals()
    formGeo.scale(1.0, 1.0, 0.74)

    const formMat = new THREE.MeshPhysicalMaterial({
      color: 0xdedbd5, envMap, envMapIntensity: 0.8, roughness: 0.62, metalness: 0.0, clearcoat: 0.12,
    })
    formMat.sheen = 0.25
    formMat.sheenRoughness = 0.6
    formMat.sheenColor = new THREE.Color(0xffffff)

    const formGroup = new THREE.Group()
    const formBody = new THREE.Mesh(formGeo, formMat)
    formBody.castShadow = true
    formBody.receiveShadow = true
    formGroup.add(formBody)

    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.052, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), formMat)
    cap.position.y = 0.720
    cap.scale.z = 0.74
    formGroup.add(cap)

    const hardware = new THREE.MeshPhysicalMaterial({ color: 0x2a2724, envMap, envMapIntensity: 0.7, roughness: 0.42, metalness: 0.85 })
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.017, 0.017, 0.42, 24), hardware)
    pole.position.y = -0.09
    pole.castShadow = true
    formGroup.add(pole)

    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.185, 0.022, 48), hardware)
    base.position.y = -0.30
    base.castShadow = true
    base.receiveShadow = true
    formGroup.add(base)

    scene.add(formGroup)

    function project(x: number, y: number, z: number): [number, number, number] | null {
      let r = 0
      for (let i = 0; i < profile.length - 1; i++) {
        const [r0, y0] = profile[i], [r1, y1] = profile[i + 1]
        if (y <= y0 && y >= y1) {
          const t = (y0 - y) / Math.max(y0 - y1, 1e-6)
          r = r0 + (r1 - r0) * t
          break
        }
      }
      if (r === 0) return null
      const skin = 0.012
      const rx = r + skin, rz = (r + skin) * 0.74
      const d = Math.hypot(x / rx, z / rz)
      if (d >= 1) return null
      const s = 1 / Math.max(d, 1e-6)
      return [x * s, y, z * s]
    }

    // 5. Stylized garment built procedurally from sketch silhouette.
    const garment = new THREE.Group()

    const fabric = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#E8E0D0'),
      envMap,
      envMapIntensity: 0.9,
      roughness: 0.55,
      metalness: 0,
      clearcoat: 0.06,
    })
    fabric.sheen = 0.62
    fabric.sheenColor = new THREE.Color('#E2CFAE')
    fabric.sheenRoughness = 0.56

    const beltMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#D6CCB8'),
      envMap,
      envMapIntensity: 0.85,
      roughness: 0.58,
      metalness: 0,
      clearcoat: 0.08,
    })
    beltMat.sheen = 0.45
    beltMat.sheenColor = new THREE.Color('#DCC8A8')
    beltMat.sheenRoughness = 0.6

    const dressProfile = [
      [0.060, 0.652], [0.105, 0.620], [0.205, 0.572], [0.228, 0.492],
      [0.188, 0.355], [0.142, 0.250], [0.166, 0.156], [0.228, 0.090],
      [0.310, -0.008], [0.402, -0.152], [0.428, -0.214],
    ].map(([r, y]) => new THREE.Vector2(r, y))
    const bodyGeo = new THREE.LatheGeometry(dressProfile, 128)
    bodyGeo.scale(1, 1, 0.76)

    const bp = bodyGeo.attributes.position
    for (let i = 0; i < bp.count; i++) {
      const x = bp.getX(i)
      const y = bp.getY(i)
      const z = bp.getZ(i)
      const a = Math.atan2(z, x)

      const waistFalloff = Math.exp(-Math.pow((y - 0.22) / 0.12, 2))
      const waistScale = 1 - waistFalloff * 0.17
      const lower = THREE.MathUtils.clamp((0.10 - y) / 0.28, 0, 1)
      const asym = Math.sin(a - 0.85) * 0.046 * lower

      bp.setXYZ(i, x * waistScale, y - asym, z * waistScale)
    }
    bodyGeo.computeVertexNormals()

    const body = new THREE.Mesh(bodyGeo, fabric)
    body.castShadow = true
    body.receiveShadow = true
    garment.add(body)

    const wrapGeo = new THREE.PlaneGeometry(0.11, 0.31, 12, 18)
    const wp = wrapGeo.attributes.position
    for (let i = 0; i < wp.count; i++) {
      const x = wp.getX(i)
      const y = wp.getY(i)
      const curve = Math.sin((y + 0.16) * 6.4) * 0.007
      const sweep = (y + 0.16) * 0.05
      wp.setXYZ(i, x + sweep, y, curve)
    }
    wrapGeo.computeVertexNormals()
    const wrapPanel = new THREE.Mesh(wrapGeo, fabric)
    wrapPanel.position.set(0.045, 0.38, 0.228)
    wrapPanel.rotation.set(-0.06, 0.14, -0.52)
    wrapPanel.castShadow = true
    wrapPanel.receiveShadow = true
    garment.add(wrapPanel)

    function addSleeve(side = 1) {
      const sleeveGeo = new THREE.CylinderGeometry(0.13, 0.055, 0.44, 28, 24, true)
      const sp = sleeveGeo.attributes.position
      for (let i = 0; i < sp.count; i++) {
        const x = sp.getX(i)
        const y = sp.getY(i)
        const z = sp.getZ(i)
        const t = (y + 0.22) / 0.44
        const puff = Math.exp(-Math.pow((t - 0.35) / 0.34, 2)) * 0.34
        const gather = Math.exp(-Math.pow((t - 0.92) / 0.12, 2)) * -0.18
        const scale = 1 + puff + gather
        sp.setXYZ(i, x * scale, y, z * (scale * 0.9))
      }
      sleeveGeo.computeVertexNormals()

      const sleeve = new THREE.Mesh(sleeveGeo, fabric)
      sleeve.position.set(0.24 * side, 0.40, 0.02)
      sleeve.rotation.set(0.18, 0.04 * side, side > 0 ? -0.97 : 0.97)
      sleeve.castShadow = true
      sleeve.receiveShadow = true
      garment.add(sleeve)

      const cuff = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.015, 16, 42), beltMat)
      cuff.rotation.x = Math.PI / 2
      cuff.position.set(0.355 * side, 0.205, 0.04)
      cuff.scale.set(1.12, 1, 0.82)
      cuff.castShadow = true
      garment.add(cuff)
    }

    addSleeve(1)
    addSleeve(-1)

    const belt = new THREE.Mesh(new THREE.TorusGeometry(0.205, 0.013, 14, 84), beltMat)
    belt.rotation.x = Math.PI / 2
    belt.position.y = 0.208
    belt.scale.set(1, 1, 0.76)
    belt.castShadow = true
    garment.add(belt)

    scene.add(garment)

    // 6. Camera Azimuth & Animation Loop — exact values from stylesheet.html
    const VIEWS: Record<string, number> = { front: 0, side: -Math.PI / 2, back: Math.PI }
    let targetAz = VIEWS[viewRef.current] ?? 0
    let az = targetAz
    const RADIUS = 2.55, HEIGHT = 0.40

    function updateCamera() {
      camera.position.set(Math.sin(az) * RADIUS, HEIGHT, Math.cos(az) * RADIUS)
      camera.lookAt(0, 0.24, 0)
    }

    // Drag to rotate — exact behavior from stylesheet.html
    let dragging = false, lastX = 0
    const onPointerDown = (e: PointerEvent) => { dragging = true; lastX = e.clientX }
    const onPointerUp = () => { dragging = false }
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return
      targetAz -= (e.clientX - lastX) * 0.007
      lastX = e.clientX
    }
    mount.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('pointerup', onPointerUp)
    window.addEventListener('pointermove', onPointerMove)

    let animId: number
    const clock = new THREE.Clock()

    function tick() {
      animId = requestAnimationFrame(tick)
      const dt = Math.min(clock.getDelta(), 1 / 30)

      // Read the latest viewMode from the ref (no effect rebuild needed)
      const desiredAz = VIEWS[viewRef.current] ?? targetAz
      // Only snap targetAz to button if user isn't dragging
      if (!dragging) targetAz = desiredAz

      az += (targetAz - az) * 0.09   // eased, never snapped — matches stylesheet.html
      updateCamera()
      renderer.render(scene, camera)
    }
    tick()

    return () => {
      cancelAnimationFrame(animId)
      resizeObserver.disconnect()
      mount.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointerup', onPointerUp)
      window.removeEventListener('pointermove', onPointerMove)
      renderer.dispose()
      pmrem.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, []) // Empty deps — scene created once, viewMode read from ref

  return <div ref={mountRef} style={{ width: '100%', height: '100%', cursor: 'grab' }} />
}
