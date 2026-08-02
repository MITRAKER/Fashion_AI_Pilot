import * as THREE from 'three'

/**
 * A dress, built from a pattern — not a cloth cylinder.
 *
 * Wrapping a simulated tube around a form gives "a piece of cloth around", which
 * is exactly what it looked like. A garment reads as a garment because of its
 * PATTERN: a bodice shaped to the body with a real neckline, a waist where the
 * shaping changes, and a skirt that hangs from that waist.
 *
 * So this is two pieces with different physics, which is also how the real thing
 * behaves:
 *
 *   BODICE  conforms to the form. It is fitted, so it does not need simulating —
 *           it is a surface generated against the body with a neckline cut into
 *           it. Shaping comes from the pattern, per fashion-patternmaking:
 *           dart excess is conserved, so the bust volume is absorbed into the
 *           panel rather than hidden.
 *
 *   SKIRT   hangs from the waist and IS simulated, because its character is in
 *           how it falls (fashion-draping: drape when the silhouette depends on
 *           the fall).
 *
 * Necklines are the parameter a designer actually reaches for first, so the
 * shape is data rather than geometry.
 */

export const NECKLINES = {
  sweetheart: { name: 'Sweetheart', front: 0.545, dip: 0.030, lobe: 0.55, strap: false },
  v:          { name: 'Deep V',     front: 0.500, dip: 0.075, lobe: 0.10, strap: true },
  square:     { name: 'Square',     front: 0.560, dip: 0.000, lobe: 0.00, strap: true },
  bandeau:    { name: 'Bandeau',    front: 0.575, dip: 0.008, lobe: 0.20, strap: false },
}

const WAIST_Y = 0.418
const BODICE_TOP = 0.615

export function createDress(form, material, opts = {}) {
  const group = new THREE.Group()
  const base = NECKLINES[opts.neckline] || NECKLINES.sweetheart
  // The spec can nudge the neckline height without changing its shape family,
  // which is what "lower the neckline" means when the style stays sweetheart.
  const neck = opts.necklineY != null ? { ...base, front: opts.necklineY } : base
  const drape = { bend: 0.10, gravity: -5.6, damp: 0.964, flare: 0.30, ...(opts.drape || {}) }
  const length = opts.length ?? 0.78

  /** Body radius at a height, from the form's own collision surface. */
  const radiusAt = y => {
    const p = form.project(0.0005, y, 0)
    return p ? Math.hypot(p[0], p[2]) : 0.12
  }

  /* ------------------------------------------------------------- bodice */
  // A conforming surface from waist to bust, with the neckline cut as a height
  // field around the body rather than as a hole punched through a tube.
  const BC = 72, BR = 26
  const bodiceGeo = new THREE.PlaneGeometry(1, 1, BC - 1, BR - 1)
  {
    const pos = bodiceGeo.attributes.position
    const uv = bodiceGeo.attributes.uv
    for (let r = 0; r < BR; r++) {
      for (let c = 0; c < BC; c++) {
        const i = r * BC + c
        const a = (c / (BC - 1)) * Math.PI * 2 - Math.PI / 2
        // How far round from centre front, 0 at CF, 1 at CB.
        const t = Math.abs(((c / (BC - 1)) + 0.25) % 1 - 0.5) * 2

        // Neckline: lowest at centre front, rising toward the side seam. The
        // sweetheart lobe is a raised bump either side of centre.
        const lobe = neck.lobe * Math.exp(-Math.pow((t - 0.22) / 0.16, 2))
        const topY = r === 0
          ? neck.front + neck.dip * Math.cos(t * Math.PI) + lobe * 0.055 + t * 0.055
          : 0
        const yTop = Math.min(BODICE_TOP, topY || BODICE_TOP)
        const v = r / (BR - 1)
        const y = yTop - v * (yTop - WAIST_Y)

        const rad = radiusAt(y) + 0.004      // sits just off the skin
        pos.setXYZ(i, Math.cos(a) * rad, y, Math.sin(a) * rad * 0.78)
        uv.setXY(i, c / (BC - 1), 1 - v * 0.42)   // top of the print on the bodice
      }
    }
    pos.needsUpdate = true
    bodiceGeo.computeVertexNormals()
  }
  const bodice = new THREE.Mesh(bodiceGeo, material)
  bodice.castShadow = true
  bodice.receiveShadow = true
  group.add(bodice)

  // Straps, when the neckline calls for them.
  if (neck.strap) {
    for (const s of [1, -1]) {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(s * 0.085, neck.front + 0.02, 0.075),
        new THREE.Vector3(s * 0.135, 0.655, 0.02),
        new THREE.Vector3(s * 0.115, 0.640, -0.075),
      ])
      const strap = new THREE.Mesh(new THREE.TubeGeometry(curve, 20, 0.010, 8, false), material)
      strap.castShadow = true
      group.add(strap)
    }
  }

  /* -------------------------------------------------------------- skirt */
  const SC = 60, SR = 34
  const skirtGeo = new THREE.PlaneGeometry(1, 1, SC - 1, SR - 1)
  const pos = skirtGeo.attributes.position
  const uv = skirtGeo.attributes.uv
  const count = pos.count
  const cur = new Float32Array(count * 3)
  const prev = new Float32Array(count * 3)
  const pinned = new Uint8Array(count)
  const idx = (r, c) => r * SC + c

  const waistR = radiusAt(WAIST_Y) + 0.004
  for (let r = 0; r < SR; r++) {
    for (let c = 0; c < SC; c++) {
      const i = idx(r, c)
      const a = (c / (SC - 1)) * Math.PI * 2 - Math.PI / 2
      const t = r / (SR - 1)
      // Break symmetry so the skirt relaxes into folds, not a cone.
      const fold = Math.sin(c * 2.4) * 0.006 + Math.sin(c * 0.8) * 0.009
      const rad = waistR + t * drape.flare + fold * t
      const o = i * 3
      cur[o] = Math.cos(a) * rad
      cur[o + 1] = WAIST_Y - t * length
      cur[o + 2] = Math.sin(a) * rad * 0.80
      prev[o] = cur[o]; prev[o + 1] = cur[o + 1]; prev[o + 2] = cur[o + 2]
      if (r === 0) pinned[i] = 1                       // hangs from the waist seam
      uv.setXY(i, c / (SC - 1), 0.58 - t * 0.58)       // print continues downward
    }
  }
  uv.needsUpdate = true

  const links = []
  const link = (a, b, k = 1) => {
    const d = Math.hypot(
      cur[a * 3] - cur[b * 3], cur[a * 3 + 1] - cur[b * 3 + 1], cur[a * 3 + 2] - cur[b * 3 + 2])
    links.push([a, b, d, k])
  }
  for (let r = 0; r < SR; r++) {
    for (let c = 0; c < SC; c++) {
      if (c + 1 < SC) link(idx(r, c), idx(r, c + 1))
      if (r + 1 < SR) link(idx(r, c), idx(r + 1, c))
      if (c + 1 < SC && r + 1 < SR) link(idx(r, c), idx(r + 1, c + 1), 0.65)
      if (c > 0 && r + 1 < SR) link(idx(r, c), idx(r + 1, c - 1), 0.65)
      if (r + 2 < SR) link(idx(r, c), idx(r + 2, c), drape.bend)
      if (c + 2 < SC) link(idx(r, c), idx(r, c + 2), drape.bend * 0.8)
    }
  }

  function step(dt) {
    const h = Math.min(dt, 1 / 60), h2 = h * h
    for (let i = 0; i < count; i++) {
      if (pinned[i]) continue
      const o = i * 3
      for (let k = 0; k < 3; k++) {
        const v = (cur[o + k] - prev[o + k]) * drape.damp
        prev[o + k] = cur[o + k]
        cur[o + k] += v + (k === 1 ? drape.gravity * h2 : 0)
      }
    }
    for (let it = 0; it < 5; it++) {
      for (let n = 0; n < links.length; n++) {
        const [a, b, rest, stiff] = links[n]
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
        const p = form.project(cur[o], cur[o + 1], cur[o + 2])
        if (p) { cur[o] = p[0]; cur[o + 2] = p[2] }
      }
    }
    for (let i = 0; i < count; i++) pos.setXYZ(i, cur[i * 3], cur[i * 3 + 1], cur[i * 3 + 2])
    pos.needsUpdate = true
    skirtGeo.computeVertexNormals()
  }

  const skirt = new THREE.Mesh(skirtGeo, material)
  skirt.castShadow = true
  skirt.receiveShadow = true
  skirt.frustumCulled = false
  group.add(skirt)

  return {
    object3D: group,
    material,
    neckline: neck.name,
    update: step,
    settle(seconds = 4.0) {
      const h = 1 / 120
      for (let t = 0; t < seconds; t += h) step(h)
    },
    dispose() {
      bodiceGeo.dispose(); skirtGeo.dispose()
      group.traverse(o => { if (o.isMesh && o.geometry !== bodiceGeo && o.geometry !== skirtGeo) o.geometry.dispose() })
    },
  }
}
