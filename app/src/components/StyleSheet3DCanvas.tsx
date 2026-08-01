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
    renderer.domElement.style.display = 'block'
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    mount.appendChild(renderer.domElement)

    // 2. Scene & Camera
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(30, 1, 0.05, 50)

    function resize() {
      if (!mount) return
      const w = mount.clientWidth, h = mount.clientHeight
      if (w === 0 || h === 0) return  // skip if not laid out yet
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(mount)
    // Deferred initial resize — wait for CSS layout to compute concrete dimensions
    resize()
    requestAnimationFrame(resize)

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

    // 5. Procedural Wool Coat Garment & XPBD Solver
    const COLS = 56, ROWS = 40, OPENING = 0.62, TOP = 0.598, LENGTH = 0.74, START_R = 0.178
    const garmentGeo = new THREE.PlaneGeometry(1, 1, COLS - 1, ROWS - 1)
    const posAttr = garmentGeo.attributes.position
    const count = posAttr.count
    const cur = new Float32Array(count * 3)
    const prev = new Float32Array(count * 3)
    const pinned = new Uint8Array(count)

    const idx = (r: number, c: number) => r * COLS + c
    const span = Math.PI * 2 - OPENING

    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const i = idx(r, c)
        const a = -Math.PI / 2 + OPENING / 2 + (c / (COLS - 1)) * span
        const y = TOP - (r / (ROWS - 1)) * LENGTH
        const fold = Math.sin(c * 2.3) * 0.006 + Math.sin(c * 0.7) * 0.009
        const rad = START_R + (r / (ROWS - 1)) * 0.115 + fold * (r / (ROWS - 1))
        const o = i * 3
        cur[o] = Math.cos(a) * rad
        cur[o + 1] = y
        cur[o + 2] = Math.sin(a) * rad * 0.8
        prev[o] = cur[o]; prev[o + 1] = cur[o + 1]; prev[o + 2] = cur[o + 2]
        if (r === 0) pinned[i] = 1
      }
    }

    const constraints: [number, number, number, number][] = []
    const link = (a: number, b: number, stiff = 1) => {
      const d = Math.hypot(cur[a * 3] - cur[b * 3], cur[a * 3 + 1] - cur[b * 3 + 1], cur[a * 3 + 2] - cur[b * 3 + 2])
      constraints.push([a, b, d, stiff])
    }
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (c + 1 < COLS) link(idx(r, c), idx(r, c + 1))
        if (r + 1 < ROWS) link(idx(r, c), idx(r + 1, c))
        if (c + 1 < COLS && r + 1 < ROWS) link(idx(r, c), idx(r + 1, c + 1), 0.7)
        if (c > 0 && r + 1 < ROWS) link(idx(r, c), idx(r + 1, c - 1), 0.7)
        if (r + 2 < ROWS) link(idx(r, c), idx(r + 2, c), 0.10)
        if (c + 2 < COLS) link(idx(r, c), idx(r, c + 2), 0.08)
      }
    }

    function stepGarment(dt: number) {
      const h = Math.min(dt, 1 / 60), h2 = h * h
      for (let i = 0; i < count; i++) {
        if (pinned[i]) continue
        const o = i * 3
        for (let a = 0; a < 3; a++) {
          const v = (cur[o + a] - prev[o + a]) * 0.965
          prev[o + a] = cur[o + a]
          cur[o + a] += v + (a === 1 ? -5.2 * h2 : 0)
        }
      }
      for (let k = 0; k < 6; k++) {
        for (let n = 0; n < constraints.length; n++) {
          const [a, b, rest, stiff] = constraints[n]
          const ao = a * 3, bo = b * 3
          const dx = cur[bo] - cur[ao], dy = cur[bo + 1] - cur[ao + 1], dz = cur[bo + 2] - cur[ao + 2]
          const d = Math.hypot(dx, dy, dz) || 1e-6
          const f = ((d - rest) / d) * 0.5 * stiff
          const mx = dx * f, my = dy * f, mz = dz * f
          if (!pinned[a]) { cur[ao] += mx; cur[ao + 1] += my; cur[ao + 2] += mz }
          if (!pinned[b]) { cur[bo] -= mx; cur[bo + 1] -= my; cur[bo + 2] -= mz }
        }
        for (let i = 0; i < count; i++) {
          if (pinned[i]) continue
          const o = i * 3
          const p = project(cur[o], cur[o + 1], cur[o + 2])
          if (p) { cur[o] = p[0]; cur[o + 2] = p[2] }
        }
      }
      for (let i = 0; i < count; i++) posAttr.setXYZ(i, cur[i * 3], cur[i * 3 + 1], cur[i * 3 + 2])
      posAttr.needsUpdate = true
      garmentGeo.computeVertexNormals()
    }

    // Pre-settle garment drape — match stylesheet.html settle(6.0)
    const settleStep = 1 / 120
    for (let t = 0; t < 6.0; t += settleStep) stepGarment(settleStep)

    const woolMat = new THREE.MeshPhysicalMaterial({
      color: 0xc4b49a, envMap, envMapIntensity: 0.95, roughness: 0.68, metalness: 0.0, clearcoat: 0.08
    })
    woolMat.sheen = 0.6
    woolMat.sheenRoughness = 0.35
    woolMat.sheenColor = new THREE.Color(0xe4cdae)

    const garmentMesh = new THREE.Mesh(garmentGeo, woolMat)
    garmentMesh.castShadow = true
    garmentMesh.receiveShadow = true
    scene.add(garmentMesh)

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
      stepGarment(dt)
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

  return <div ref={mountRef} style={{ position: 'absolute', inset: 0, cursor: 'grab' }} />
}
