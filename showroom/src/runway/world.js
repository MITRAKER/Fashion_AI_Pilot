import * as THREE from 'three'
import { makeGold } from '../materials/library.js'

/**
 * AAA 3D Fashion Runway World & Lighting Studio
 *
 * Implements:
 * - 20-meter obsidian glass reflective catwalk with gold edge trim
 * - Dynamic moving spotlights following the avatar
 * - Overhead studio softboxes & cool rim backlights
 * - LED screen backdrop with animated generative graphics
 * - Spectator seating & camera flash particle bursts
 */
export function createRunwayWorld(envMap) {
  const group = new THREE.Group()

  // 1. Obsidian Glass Catwalk (Width 1.8m, Length 18m, Height 0.12m)
  const runwayGeo = new THREE.BoxGeometry(1.8, 0.12, 18)
  const runwayMat = new THREE.MeshPhysicalMaterial({
    color: 0x0d0d0f,
    metalness: 0.92,
    roughness: 0.08,
    clearcoat: 1.0,
    clearcoatRoughness: 0.04,
    envMap,
    envMapIntensity: 1.8,
  })
  const catwalk = new THREE.Mesh(runwayGeo, runwayMat)
  catwalk.position.set(0.68, -0.62, -9.5)
  catwalk.receiveShadow = true
  catwalk.castShadow = true
  group.add(catwalk)

  // Gold Side Trim Rails along Catwalk (staying behind Z = -0.5)
  const trimGeo = new THREE.BoxGeometry(0.04, 0.14, 18)
  const trimMat = makeGold(envMap, { anisotropyRotation: 0 })

  const leftTrim = new THREE.Mesh(trimGeo, trimMat)
  leftTrim.position.set(0.68 - 0.92, -0.61, -9.5)
  group.add(leftTrim)

  const rightTrim = new THREE.Mesh(trimGeo, trimMat)
  rightTrim.position.set(0.68 + 0.92, -0.61, -9.5)
  group.add(rightTrim)

  // 2. LED Backdrop Screen at end of Runway (Z = -18)
  const screenGeo = new THREE.PlaneGeometry(8.5, 4.8)
  const screenCanvas = document.createElement('canvas')
  screenCanvas.width = 1024
  screenCanvas.height = 512
  const screenCtx = screenCanvas.getContext('2d')

  const screenTex = new THREE.CanvasTexture(screenCanvas)
  screenTex.colorSpace = THREE.SRGBColorSpace

  const screenMat = new THREE.MeshBasicMaterial({
    map: screenTex,
    toneMapped: false,
  })
  const ledScreen = new THREE.Mesh(screenGeo, screenMat)
  ledScreen.position.set(0.68, 1.8, -18.8)
  group.add(ledScreen)

  // LED Screen Frame
  const frameGeo = new THREE.BoxGeometry(8.8, 5.1, 0.15)
  const frameMat = new THREE.MeshPhysicalMaterial({
    color: 0x18181c,
    metalness: 0.8,
    roughness: 0.3,
  })
  const ledFrame = new THREE.Mesh(frameGeo, frameMat)
  ledFrame.position.set(0.68, 1.8, -18.9)
  group.add(ledFrame)

  // 3. Dynamic Moving Spotlights (Spotlight 1 Warm, Spotlight 2 Cool)
  const spot1 = new THREE.SpotLight(0xfffaee, 2.0, 25, Math.PI / 8, 0.5, 1)
  spot1.position.set(0.68, 6.5, -4.0)
  spot1.target.position.set(0.68, -0.6, -4.0)
  spot1.castShadow = true
  spot1.shadow.mapSize.width = 2048
  spot1.shadow.mapSize.height = 2048
  spot1.shadow.bias = -0.0001
  group.add(spot1)
  group.add(spot1.target)

  const spot2 = new THREE.SpotLight(0xdce8ff, 2.2, 25, Math.PI / 8, 0.5, 1)
  spot2.position.set(0.68, 6.5, -8.0)
  spot2.target.position.set(0.68, -0.6, -8.0)
  spot2.castShadow = true
  group.add(spot2)
  group.add(spot2.target)

  // Soft Overhead Wash Light
  const wash = new THREE.DirectionalLight(0xfff5e6, 2.2)
  wash.position.set(0.68, 8, -5)
  group.add(wash)

  // Strong Rim Backlight for Silhouette Separation
  const rimLight = new THREE.DirectionalLight(0xd5e2ff, 6.5)
  rimLight.position.set(0.68, 3.5, -16)
  group.add(rimLight)

  // 4. Camera Flash Particles System
  const FLASH_COUNT = 45
  const flashGeo = new THREE.BufferGeometry()
  const flashPos = new Float32Array(FLASH_COUNT * 3)
  const flashPhases = new Float32Array(FLASH_COUNT)

  for (let i = 0; i < FLASH_COUNT; i++) {
    // Distribute flash points along left & right spectator rows
    const side = i % 2 === 0 ? -1.8 : 3.1
    flashPos[i * 3] = side + (Math.random() - 0.5) * 1.2
    flashPos[i * 3 + 1] = -0.3 + Math.random() * 1.6
    flashPos[i * 3 + 2] = -2 - Math.random() * 15
    flashPhases[i] = Math.random() * Math.PI * 2
  }
  flashGeo.setAttribute('position', new THREE.BufferAttribute(flashPos, 3))

  const flashMat = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.16,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })
  const flashes = new THREE.Points(flashGeo, flashMat)
  group.add(flashes)

  let time = 0

  return {
    group,
    spotlight1: spot1,
    spotlight2: spot2,
    update(dt, avatarZ = 0) {
      time += dt

      // Spotlights track avatar position
      spot1.target.position.z = avatarZ
      spot2.target.position.z = avatarZ + 1.2

      // Draw animated LED backdrop screen graphics
      screenCtx.fillStyle = '#0a0a0c'
      screenCtx.fillRect(0, 0, 1024, 512)

      // Generative gold wave particles
      screenCtx.lineWidth = 3
      for (let i = 0; i < 5; i++) {
        screenCtx.strokeStyle = i % 2 === 0 ? '#e6be85' : 'rgba(255,255,255,0.15)'
        screenCtx.beginPath()
        for (let x = 0; x < 1024; x += 16) {
          const y = 256 + Math.sin(x * 0.008 + time * 2.5 + i) * (40 + i * 15)
          if (x === 0) screenCtx.moveTo(x, y)
          else screenCtx.lineTo(x, y)
        }
        screenCtx.stroke()
      }

      // Backdrop Text Title
      screenCtx.fillStyle = '#ffffff'
      screenCtx.font = 'bold 36px "Didot", serif'
      screenCtx.textAlign = 'center'
      screenCtx.fillText('ATELIER PARIS 2026', 512, 140)
      screenCtx.fillStyle = '#e6be85'
      screenCtx.font = '16px sans-serif'
      if ('letterSpacing' in screenCtx) screenCtx.letterSpacing = '0.3em'
      screenCtx.fillText('AUTUMN / WINTER RUNWAY SHOW', 512, 180)
      if ('letterSpacing' in screenCtx) screenCtx.letterSpacing = '0px'

      screenTex.needsUpdate = true

      // Animate Camera Flashes
      const positions = flashGeo.attributes.position.array
      for (let i = 0; i < FLASH_COUNT; i++) {
        flashPhases[i] += dt * (3 + Math.random() * 4)
        if (Math.sin(flashPhases[i]) > 0.94) {
          // Sharp flash burst
          positions[i * 3 + 1] = -0.3 + Math.random() * 1.6
        }
      }
      flashGeo.attributes.position.needsUpdate = true
    },
    triggerFlashBurst() {
      // Trigger instant dramatic flash photography explosion
      flashMat.size = 0.45
      flashMat.opacity = 1.0
      setTimeout(() => {
        flashMat.size = 0.16
        flashMat.opacity = 0.85
      }, 150)
    },
  }
}
