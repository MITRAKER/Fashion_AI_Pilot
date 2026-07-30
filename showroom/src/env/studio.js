import * as THREE from 'three'

/**
 * OWNED BY: environment/lighting agent.
 *
 * Builds the studio: a generated IBL plus the three-point rig from ART-DIRECTION §6.
 * The environment must contain recognisable softbox SHAPES — glass and gold reflect
 * it, and a uniform grey environment is the single fastest way to make a render look
 * like a Three.js demo.
 *
 * @returns {{ envMap: THREE.Texture, lights: THREE.Object3D[], dispose: () => void }}
 */
export function createStudioEnvironment(renderer, scene) {
  const pmrem = new THREE.PMREMGenerator(renderer)
  pmrem.compileEquirectangularShader()

  const envScene = buildEnvScene()
  const target = pmrem.fromScene(envScene, 0.04)
  const envMap = target.texture

  const lights = []

  // Key — large soft source, upper-left, warm.
  const key = new THREE.DirectionalLight(0xfff2e0, 3.1)
  key.position.set(-2.6, 2.8, 2.2)
  key.castShadow = true
  key.shadow.mapSize.set(2048, 2048)
  key.shadow.camera.near = 0.5
  key.shadow.camera.far = 12
  key.shadow.camera.left = -3
  key.shadow.camera.right = 3
  key.shadow.camera.top = 3
  key.shadow.camera.bottom = -3
  key.shadow.bias = -0.0006
  key.shadow.normalBias = 0.018
  key.shadow.radius = 4
  lights.push(key)

  // Rim — behind and above right. This is what separates the coat from the void.
  const rim = new THREE.DirectionalLight(0xdCE6ff, 4.6)
  rim.position.set(2.9, 2.2, -2.6)
  lights.push(rim)

  // Fill — very low, cool, keeps shadow detail off pure black.
  const fill = new THREE.DirectionalLight(0x9fb0c8, 0.28)
  fill.position.set(1.2, -0.4, 3.0)
  lights.push(fill)

  for (const l of lights) scene.add(l)

  return {
    envMap,
    lights,
    dispose() {
      target.dispose()
      pmrem.dispose()
    },
  }
}

/**
 * A dark room containing emissive softbox panels. Prefiltered through PMREM this
 * gives glass a believable reflection with structure in it.
 */
function buildEnvScene() {
  const s = new THREE.Scene()

  // Enclosing shell, very dark, so reflections fall off to black rather than grey.
  const shell = new THREE.Mesh(
    new THREE.BoxGeometry(14, 9, 14),
    new THREE.MeshBasicMaterial({ color: 0x0a0a0c, side: THREE.BackSide }),
  )
  s.add(shell)

  const box = (w, h, color, intensity, pos, rot) => {
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(w, h),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(intensity) }),
    )
    m.position.set(...pos)
    if (rot) m.rotation.set(...rot)
    s.add(m)
    return m
  }

  // Main softbox, upper left — the big shape you want to see in the glass.
  box(5.5, 3.0, 0xfff4e6, 5.2, [-3.6, 2.6, 2.2], [0, Math.PI * 0.28, 0])
  // Strip light, upper right — the long specular streak across gold pills.
  box(0.7, 5.4, 0xe8f0ff, 6.0, [4.0, 1.8, -0.6], [0, -Math.PI * 0.36, 0])
  // Low warm bounce, front — lifts the underside of the coat.
  box(4.4, 1.2, 0xffe2bd, 1.1, [0.6, -2.0, 3.0], [0, 0, 0])
  // Ceiling wash, dim and broad.
  box(9, 6, 0xbfd0e8, 0.55, [0, 4.4, 0], [Math.PI / 2, 0, 0])

  return s
}
