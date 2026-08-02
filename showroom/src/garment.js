import * as THREE from 'three'
import { makeWool } from './materials/library.js'

/**
 * A coat draped on the dress form.
 *
 * The cloth starts as a cylinder wrapped around the body with a gap at centre front
 * (a coat opens), pinned along the shoulder ring, then relaxes under gravity with
 * collision against the form. That is what produces a real drape: the fall is
 * computed against the body, not modelled by hand.
 */
export function createGarment(envMap, form, opts = {}) {
  // Drape is a property of the CLOTH, so the fabric chosen on the board changes
  // the simulation rather than only the colour. Defaults reproduce the original
  // wool behaviour so the style sheet is unaffected.
  const D = { bend: 0.10, gravity: -5.2, damp: 0.965, flare: 0.115, ...(opts.drape || {}) }
  const COLS = 56          // around the body
  const ROWS = 40          // shoulder to hem
  const OPENING = 0.62     // radians of gap at centre front — it is a coat, it opens
  const TOP = 0.598        // sits below the shoulder so the form's shoulder line reads
  const LENGTH = 0.74      // mid-calf
  const START_R = 0.178    // starts close to the body; the fall creates the volume

  const geometry = new THREE.PlaneGeometry(1, 1, COLS - 1, ROWS - 1)
  const pos = geometry.attributes.position
  const count = pos.count

  const cur = new Float32Array(count * 3)
  const prev = new Float32Array(count * 3)
  const pinned = new Uint8Array(count)

  const idx = (r, c) => r * COLS + c
  const span = Math.PI * 2 - OPENING

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const i = idx(r, c)
      const a = -Math.PI / 2 + OPENING / 2 + (c / (COLS - 1)) * span
      const y = TOP - (r / (ROWS - 1)) * LENGTH
      // Slight A-line from the start so the solver has somewhere to fall into.
      // Symmetry is the enemy of drape: a perfectly even ring relaxes into a cone.
      // Seed each column with a little extra cloth so folds have somewhere to start.
      const fold = Math.sin(c * 2.3) * 0.006 + Math.sin(c * 0.7) * 0.009
      const rad = START_R + (r / (ROWS - 1)) * D.flare + fold * (r / (ROWS - 1))
      const o = i * 3
      cur[o] = Math.cos(a) * rad
      cur[o + 1] = y
      cur[o + 2] = Math.sin(a) * rad * 0.8
      prev[o] = cur[o]; prev[o + 1] = cur[o + 1]; prev[o + 2] = cur[o + 2]
      if (r === 0) pinned[i] = 1          // shoulder ring holds the coat up
    }
  }

  const constraints = []
  const link = (a, b, stiff = 1) => {
    const d = Math.hypot(
      cur[a * 3] - cur[b * 3], cur[a * 3 + 1] - cur[b * 3 + 1], cur[a * 3 + 2] - cur[b * 3 + 2])
    constraints.push([a, b, d, stiff])
  }
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (c + 1 < COLS) link(idx(r, c), idx(r, c + 1))
      if (r + 1 < ROWS) link(idx(r, c), idx(r + 1, c))
      if (c + 1 < COLS && r + 1 < ROWS) link(idx(r, c), idx(r + 1, c + 1), 0.7)
      if (c > 0 && r + 1 < ROWS) link(idx(r, c), idx(r + 1, c - 1), 0.7)
      if (r + 2 < ROWS) link(idx(r, c), idx(r + 2, c), D.bend)   // bend: the fabric's body
      if (c + 2 < COLS) link(idx(r, c), idx(r, c + 2), D.bend * 0.8)
    }
  }

  const GRAVITY = D.gravity
  const DAMP = D.damp
  const ITER = 6
  let time = 0

  function step(dt) {
    const h = Math.min(dt, 1 / 60)
    const h2 = h * h
    for (let i = 0; i < count; i++) {
      if (pinned[i]) continue
      const o = i * 3
      for (let a = 0; a < 3; a++) {
        const v = (cur[o + a] - prev[o + a]) * DAMP
        prev[o + a] = cur[o + a]
        cur[o + a] += v + (a === 1 ? GRAVITY * h2 : 0)
      }
    }

    for (let k = 0; k < ITER; k++) {
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
      // Body collision — the whole reason the drape looks right.
      for (let i = 0; i < count; i++) {
        if (pinned[i]) continue
        const o = i * 3
        const p = form.project(cur[o], cur[o + 1], cur[o + 2])
        if (p) { cur[o] = p[0]; cur[o + 2] = p[2] }
      }
    }

    for (let i = 0; i < count; i++) pos.setXYZ(i, cur[i * 3], cur[i * 3 + 1], cur[i * 3 + 2])
    pos.needsUpdate = true
    geometry.computeVertexNormals()
    time += h
  }

  const material = opts.material || makeWool(envMap)
  const mesh = new THREE.Mesh(geometry, material)
  mesh.castShadow = true
  mesh.receiveShadow = true

  return {
    object3D: mesh,
    material,
    update: step,
    /** Advance without drawing so a capture is of settled cloth, never mid-fall. */
    settle(seconds = 4.0) {
      const h = 1 / 120
      for (let t = 0; t < seconds; t += h) step(h)
    },
  }
}
