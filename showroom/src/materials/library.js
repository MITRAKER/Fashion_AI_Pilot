import * as THREE from 'three'

/**
 * OWNED BY: materials agent. See ART-DIRECTION §5.
 *
 * Every material here must respond to the environment. If a surface looks the same
 * when the camera drifts, it is not finished.
 */

export const PALETTE = {
  void: 0x08080a,
  slab: 0x121214,
  slabHi: 0x1b1b1f,
  gold: 0xc9a227,
  goldHi: 0xe8c766,
  camel: 0xc8a57e,
  camelHi: 0xe4cdae,
  camelLo: 0x6e5843,
  text: 0xf2f0ed,
}

/** Smoked glass slab. Thin transmission + clearcoat gives the bevel its edge light. */
export function makeGlass(envMap) {
  return new THREE.MeshPhysicalMaterial({
    color: PALETTE.slab,
    envMap,
    envMapIntensity: 1.15,
    metalness: 0.0,
    roughness: 0.28,
    transmission: 0.10,
    thickness: 0.004,
    ior: 1.45,
    clearcoat: 0.6,
    clearcoatRoughness: 0.22,
    reflectivity: 0.42,
  })
}

/**
 * Brushed gold. Anisotropy is the point: it produces a specular streak that travels
 * along the pill as the camera moves. Flat yellow is an automatic fail.
 */
export function makeGold(envMap, { anisotropyRotation = 0 } = {}) {
  const m = new THREE.MeshPhysicalMaterial({
    color: PALETTE.gold,
    envMap,
    envMapIntensity: 1.5,
    metalness: 1.0,
    roughness: 0.22,
  })
  m.anisotropy = 0.65
  m.anisotropyRotation = anisotropyRotation
  return m
}

/**
 * Wool gabardine. Sheen is what makes cloth read as cloth — without it the coat
 * looks like painted plastic under the rim light.
 */
export function makeWool(envMap) {
  const m = new THREE.MeshPhysicalMaterial({
    color: PALETTE.camel,
    envMap,
    envMapIntensity: 0.85,
    metalness: 0.0,
    roughness: 0.78,
    side: THREE.DoubleSide,
  })
  m.sheen = 0.6
  m.sheenRoughness = 0.35
  m.sheenColor = new THREE.Color(PALETTE.camelHi)
  return m
}

/** Studio floor. Roughness rises with distance so the reflection dissolves. */
export function makeFloor(envMap) {
  return new THREE.MeshPhysicalMaterial({
    color: 0x0b0b0d,
    envMap,
    envMapIntensity: 0.7,
    metalness: 0.0,
    roughness: 0.34,
    clearcoat: 0.35,
    clearcoatRoughness: 0.4,
  })
}

/** Raised UI tile — matte, slightly lighter than the slab, catches the key softly. */
export function makeTile(envMap) {
  return new THREE.MeshPhysicalMaterial({
    color: PALETTE.slabHi,
    envMap,
    envMapIntensity: 0.9,
    metalness: 0.0,
    roughness: 0.45,
    clearcoat: 0.25,
  })
}
