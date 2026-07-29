import * as THREE from 'three'

/**
 * Procedural dress form. A lathe through a measured profile, so the silhouette is a
 * real body shape rather than a mannequin-shaped blob — the garment has to sit on
 * something with a bust, waist and hip relationship or the drape reads as fake.
 *
 * Profile is in metres, half-widths, from neck (top) down to the stand.
 */
export function createDressForm(envMap) {
  const group = new THREE.Group()

  // [halfWidth, height] — a size-38 block, roughly: bust .44 / waist .34 / hip .47 girth
  const profile = [
    [0.052, 0.720],  // neck
    [0.088, 0.690],  // neck spread into shoulder
    [0.150, 0.652],  // shoulder point
    [0.146, 0.600],  // upper chest
    [0.153, 0.545],  // bust apex
    [0.141, 0.485],  // under bust
    [0.121, 0.418],  // waist
    [0.132, 0.360],  // high hip
    [0.158, 0.282],  // hip
    [0.156, 0.210],  // thigh line
    [0.140, 0.140],  // cut of the form
    [0.086, 0.108],
    [0.030, 0.096],
  ]

  const points = profile.map(([r, y]) => new THREE.Vector2(r, y))
  const geo = new THREE.LatheGeometry(points, 96)
  geo.computeVertexNormals()

  // Slightly flattened front-to-back: a body is an ellipse in section, not a circle.
  geo.scale(1.0, 1.0, 0.74)

  const material = new THREE.MeshPhysicalMaterial({
    color: 0xdedbd5,
    envMap,
    envMapIntensity: 0.8,
    roughness: 0.62,
    metalness: 0.0,
    clearcoat: 0.12,
  })
  material.sheen = 0.25
  material.sheenRoughness = 0.6
  material.sheenColor = new THREE.Color(0xffffff)

  const body = new THREE.Mesh(geo, material)
  body.castShadow = true
  body.receiveShadow = true
  group.add(body)

  // Neck cap so the lathe does not read as a hollow tube from above.
  const cap = new THREE.Mesh(
    new THREE.SphereGeometry(0.052, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2),
    material,
  )
  cap.position.y = 0.720
  cap.scale.z = 0.74
  group.add(cap)

  // Stand — pole and base, in a darker matte so it recedes.
  const hardware = new THREE.MeshPhysicalMaterial({
    color: 0x2a2724, envMap, envMapIntensity: 0.7, roughness: 0.42, metalness: 0.85,
  })
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.017, 0.017, 0.42, 24), hardware)
  pole.position.y = -0.09
  pole.castShadow = true
  group.add(pole)

  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.185, 0.022, 48), hardware)
  base.position.y = -0.30
  base.castShadow = true
  base.receiveShadow = true
  group.add(base)

  /**
   * Collision query used by the cloth solver: pushes a point out to the form surface.
   * Returns the corrected position, or null when the point is already clear.
   */
  function project(x, y, z) {
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
    const skin = 0.012                      // cloth rides just off the body
    const rx = r + skin, rz = (r + skin) * 0.74
    const d = Math.hypot(x / rx, z / rz)
    if (d >= 1) return null
    const s = 1 / Math.max(d, 1e-6)
    return [x * s, y, z * s]
  }

  return { group, project, height: 0.72 }
}
