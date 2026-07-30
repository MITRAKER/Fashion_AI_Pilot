import * as THREE from 'three'

/**
 * Stylized garment matching the sketch reference silhouette.
 */
export function createGarment(envMap, form) {
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

  // Main dress body with collar, fitted waist, and flared asymmetric hem.
  const profile = [
    [0.060, 0.652], [0.105, 0.620], [0.205, 0.572], [0.228, 0.492],
    [0.188, 0.355], [0.142, 0.250], [0.166, 0.156], [0.228, 0.090],
    [0.310, -0.008], [0.402, -0.152], [0.428, -0.214],
  ].map(([r, y]) => new THREE.Vector2(r, y))
  const bodyGeo = new THREE.LatheGeometry(profile, 128)
  bodyGeo.scale(1, 1, 0.76)

  const p = bodyGeo.attributes.position
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i)
    const y = p.getY(i)
    const z = p.getZ(i)
    const a = Math.atan2(z, x)

    // Belted waist shaping.
    const waistFalloff = Math.exp(-Math.pow((y - 0.22) / 0.12, 2))
    const waistScale = 1 - waistFalloff * 0.17

    // Asymmetric lower skirt dip for the wrapped drape read.
    const lower = THREE.MathUtils.clamp((0.10 - y) / 0.28, 0, 1)
    const asym = Math.sin(a - 0.85) * 0.046 * lower

    p.setXYZ(i, x * waistScale, y - asym, z * waistScale)
  }
  bodyGeo.computeVertexNormals()

  const body = new THREE.Mesh(bodyGeo, fabric)
  body.castShadow = true
  body.receiveShadow = true
  garment.add(body)

  // Wrapped asymmetric front panel crossing from right shoulder to left hip.
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

  function makeSleeve(side = 1) {
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

    const cuff = new THREE.Mesh(
      new THREE.TorusGeometry(0.06, 0.015, 16, 42),
      beltMat,
    )
    cuff.rotation.x = Math.PI / 2
    cuff.position.set(0.355 * side, 0.205, 0.04)
    cuff.scale.set(1.12, 1, 0.82)
    cuff.castShadow = true
    garment.add(cuff)

    garment.add(sleeve)
  }

  makeSleeve(1)
  makeSleeve(-1)

  const belt = new THREE.Mesh(
    new THREE.TorusGeometry(0.205, 0.013, 14, 84),
    beltMat,
  )
  belt.rotation.x = Math.PI / 2
  belt.position.y = 0.208
  belt.scale.set(1, 1, 0.76)
  belt.castShadow = true
  garment.add(belt)

  return {
    object3D: garment,
    update() {},
    settle() {},
  }
}
