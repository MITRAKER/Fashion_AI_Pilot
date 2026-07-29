import * as THREE from 'three'

/**
 * Renderer + canvas. Colour management on, ACES applied in the post pipeline
 * (NOT here — doing both double-tonemaps and crushes the golds).
 */
export function createRenderer() {
  const renderer = new THREE.WebGLRenderer({
    antialias: false,          // SMAA runs in the post chain instead
    powerPreference: 'high-performance',
    stencil: false,
    depth: true,
  })
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
  renderer.setSize(innerWidth, innerHeight)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.NoToneMapping
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  document.body.appendChild(renderer.domElement)

  addEventListener('resize', () => {
    renderer.setSize(innerWidth, innerHeight)
  })

  return renderer
}

export function createCamera() {
  const camera = new THREE.PerspectiveCamera(32, innerWidth / innerHeight, 0.05, 100)
  camera.position.set(0, 0.15, 3.4)
  addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight
    camera.updateProjectionMatrix()
  })
  return camera
}
