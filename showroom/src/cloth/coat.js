import * as THREE from 'three'
import { makeWool } from '../materials/library.js'

/**
 * OWNED BY: cloth agent. See ART-DIRECTION §7.
 *
 * First-pass XPBD cloth: a draped panel with structural/shear/bend constraints,
 * pinned at the shoulder line, colliding against an implicit torso capsule. The
 * agent's job is to turn this into a trench coat — lapels, belt, sleeves, hem
 * weight — and to make it settle rather than breathe forever.
 */
export function createCoat(envMap) {
  const COLS = 34, ROWS = 46
  const W = 0.62, H = 1.02
  const geometry = new THREE.PlaneGeometry(W, H, COLS - 1, ROWS - 1)
  const material = makeWool(envMap)
  const mesh = new THREE.Mesh(geometry, material)
  mesh.castShadow = true
  mesh.receiveShadow = true
  mesh.position.set(0.42, 0.06, -0.28)

  const pos = geometry.attributes.position
  const count = pos.count
  const cur = new Float32Array(count * 3)
  const prev = new Float32Array(count * 3)
  const pinned = new Uint8Array(count)

  for (let i = 0; i < count; i++) {
    cur[i * 3] = pos.getX(i); cur[i * 3 + 1] = pos.getY(i); cur[i * 3 + 2] = pos.getZ(i)
    prev[i * 3] = cur[i * 3]; prev[i * 3 + 1] = cur[i * 3 + 1]; prev[i * 3 + 2] = cur[i * 3 + 2]
  }
  // Pin the shoulder line, with a shaped neckline so it hangs like a garment.
  for (let c = 0; c < COLS; c++) {
    const t = c / (COLS - 1)
    if (t < 0.22 || t > 0.78 || Math.abs(t - 0.5) < 0.09) pinned[c] = 1
  }

  const idx = (r, c) => r * COLS + c
  const constraints = []
  const add = (a, b) => {
    const d = Math.hypot(
      cur[a * 3] - cur[b * 3], cur[a * 3 + 1] - cur[b * 3 + 1], cur[a * 3 + 2] - cur[b * 3 + 2])
    constraints.push([a, b, d])
  }
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (c + 1 < COLS) add(idx(r, c), idx(r, c + 1))              // structural
      if (r + 1 < ROWS) add(idx(r, c), idx(r + 1, c))
      if (c + 1 < COLS && r + 1 < ROWS) add(idx(r, c), idx(r + 1, c + 1))  // shear
      if (c > 0 && r + 1 < ROWS) add(idx(r, c), idx(r + 1, c - 1))
      if (c + 2 < COLS) add(idx(r, c), idx(r, c + 2))              // bend
      if (r + 2 < ROWS) add(idx(r, c), idx(r + 2, c))
    }
  }

  const GRAVITY = -2.6
  const DAMP = 0.972
  const ITER = 4
  let settled = 0

  function step(dt) {
    const dt2 = Math.min(dt, 1 / 60) ** 2
    for (let i = 0; i < count; i++) {
      if (pinned[i]) continue
      const o = i * 3
      for (let a = 0; a < 3; a++) {
        const v = (cur[o + a] - prev[o + a]) * DAMP
        prev[o + a] = cur[o + a]
        cur[o + a] += v + (a === 1 ? GRAVITY * dt2 : 0)
      }
      // Gentle air so the hem is alive without flapping (§7).
      const breeze = Math.sin(cur[o + 1] * 3.0 + settled * 0.6) * 0.000045
      cur[o + 2] += breeze
    }

    for (let k = 0; k < ITER; k++) {
      for (const [a, b, rest] of constraints) {
        const ao = a * 3, bo = b * 3
        const dx = cur[bo] - cur[ao], dy = cur[bo + 1] - cur[ao + 1], dz = cur[bo + 2] - cur[ao + 2]
        const d = Math.hypot(dx, dy, dz) || 1e-6
        const diff = ((d - rest) / d) * 0.5
        const mx = dx * diff, my = dy * diff, mz = dz * diff
        if (!pinned[a]) { cur[ao] += mx; cur[ao + 1] += my; cur[ao + 2] += mz }
        if (!pinned[b]) { cur[bo] -= mx; cur[bo + 1] -= my; cur[bo + 2] -= mz }
      }
      // Torso collision — implicit capsule, keeps the coat off its own centreline.
      for (let i = 0; i < count; i++) {
        if (pinned[i]) continue
        const o = i * 3
        const r = 0.17
        const dx = cur[o], dz = cur[o + 2]
        const d = Math.hypot(dx, dz)
        if (d < r && cur[o + 1] > -0.30) {
          const s = r / (d || 1e-6)
          cur[o] = dx * s; cur[o + 2] = dz * s
        }
      }
    }

    for (let i = 0; i < count; i++) {
      pos.setXYZ(i, cur[i * 3], cur[i * 3 + 1], cur[i * 3 + 2])
    }
    pos.needsUpdate = true
    geometry.computeVertexNormals()
    settled += dt
  }

  return {
    object3D: mesh,
    update: step,
    /** Run the sim forward without drawing, so captures are of settled cloth. */
    settle(seconds = 3.0) {
      const dt = 1 / 90
      for (let t = 0; t < seconds; t += dt) step(dt)
    },
  }
}
