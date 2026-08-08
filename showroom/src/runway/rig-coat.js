import * as THREE from 'three'

/**
 * A simulated coat worn over a rigged character.
 *
 * The character's own clothing is baked into a single texture, so the wardrobe
 * had nothing real to change — it was tinting her entire body. This is an actual
 * garment: a cloth cylinder pinned to the rig's shoulder ring, falling under
 * gravity and colliding with the torso and legs, so it swings with the walk and
 * can be recoloured per colourway.
 *
 * Simulated in the avatar group's space rather than world space: the walk
 * translates the group, and cloth that integrates in world space would be thrown
 * backwards every frame by that translation.
 */
export function createRigCoat(bones, scale, material) {
  const COLS = 44
  const ROWS = 30
  const OPENING = 0.66            // radians of gap at centre front — a coat opens
  const SHOULDER_Y = 1.42         // avatar-local metres
  const LENGTH = 0.86
  // Neck-sized, not shoulder-sized. Pinning a wide ring holds the whole garment
  // as a barrel — the structural constraints propagate that radius all the way
  // down. Starting at the collar lets the body push the cloth outward, which is
  // how a coat actually gets its shape.
  const R0 = 0.098

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
      const t = r / (ROWS - 1)
      // Break the symmetry so the cloth relaxes into folds rather than a cone.
      const fold = Math.sin(c * 2.1) * 0.007 + Math.sin(c * 0.6) * 0.010
      const rad = R0 + t * 0.155 + fold * t
      const o = i * 3
      cur[o] = Math.cos(a) * rad
      cur[o + 1] = SHOULDER_Y - t * LENGTH
      cur[o + 2] = Math.sin(a) * rad * 0.78
      prev[o] = cur[o]; prev[o + 1] = cur[o + 1]; prev[o + 2] = cur[o + 2]
      if (r === 0) pinned[i] = 1
    }
  }

  // Rest offsets of the pinned ring relative to the shoulder, so the collar can
  // be re-pinned to wherever the bone has moved to this frame.
  const pinRest = []
  for (let c = 0; c < COLS; c++) {
    const o = idx(0, c) * 3
    pinRest.push([cur[o], cur[o + 1] - SHOULDER_Y, cur[o + 2]])
  }

  const links = []
  const link = (a, b, k = 1) => {
    const d = Math.hypot(
      cur[a * 3] - cur[b * 3], cur[a * 3 + 1] - cur[b * 3 + 1], cur[a * 3 + 2] - cur[b * 3 + 2])
    links.push([a, b, d, k])
  }
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (c + 1 < COLS) link(idx(r, c), idx(r, c + 1))
      if (r + 1 < ROWS) link(idx(r, c), idx(r + 1, c))
      if (c + 1 < COLS && r + 1 < ROWS) link(idx(r, c), idx(r + 1, c + 1), 0.65)
      if (c > 0 && r + 1 < ROWS) link(idx(r, c), idx(r + 1, c - 1), 0.65)
      if (r + 2 < ROWS) link(idx(r, c), idx(r + 2, c), 0.10)   // bend — wool has body
      if (c + 2 < COLS) link(idx(r, c), idx(r, c + 2), 0.08)
    }
  }

  const GRAVITY = -6.2
  const DAMP = 0.962
  const ITER = 5

  const mesh = new THREE.Mesh(geometry, material)
  mesh.castShadow = true
  mesh.receiveShadow = true
  mesh.frustumCulled = false

  const tmp = new THREE.Vector3()
  /** Bone position expressed in the avatar group's space. */
  function bonePos(bone, out) {
    if (!bone) return null
    bone.getWorldPosition(out)
    return mesh.parent ? mesh.parent.worldToLocal(out) : out
  }

  /** Torso and hips as two capsules — enough to keep cloth off the body. */
  function collide(x, y, z, hips, chest) {
    let px = x, pz = z
    const bands = [
      [chest, 0.185, 0.78],
      [hips, 0.175, 0.80],
    ]
    for (const [c, r, squash] of bands) {
      if (!c) continue
      if (Math.abs(y - c.y) > 0.34) continue
      const dx = px - c.x, dz = (pz - c.z) / squash
      const d = Math.hypot(dx, dz)
      if (d < r && d > 1e-6) {
        const s = r / d
        px = c.x + dx * s
        pz = c.z + dz * s * squash
      }
    }
    return [px, pz]
  }

  const hipsP = new THREE.Vector3()
  const chestP = new THREE.Vector3()
  const shP = new THREE.Vector3()

  function step(dt) {
    const h = Math.min(dt, 1 / 60)
    const h2 = h * h

    const hips = bonePos(bones.hips, hipsP) ? hipsP.clone() : null
    const chest = bonePos(bones.spine2, chestP) ? chestP.clone() : null
    const shoulder = bonePos(bones.spine2, shP) ? shP.clone() : null

    // Re-pin the collar to the rig so the coat rides the shoulders as she walks.
    if (shoulder) {
      for (let c = 0; c < COLS; c++) {
        const o = idx(0, c) * 3
        cur[o] = shoulder.x + pinRest[c][0]
        cur[o + 1] = shoulder.y + pinRest[c][1] + 0.22   // collar sits at the neck
        cur[o + 2] = shoulder.z + pinRest[c][2]
        prev[o] = cur[o]; prev[o + 1] = cur[o + 1]; prev[o + 2] = cur[o + 2]
      }
    }

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
        const [px, pz] = collide(cur[o], cur[o + 1], cur[o + 2], hips, chest)
        cur[o] = px; cur[o + 2] = pz
      }
    }

    for (let i = 0; i < count; i++) pos.setXYZ(i, cur[i * 3], cur[i * 3 + 1], cur[i * 3 + 2])
    pos.needsUpdate = true
    geometry.computeVertexNormals()
  }

  return {
    mesh,
    update: step,
    /** Advance without drawing so the first frame is hung cloth, not a cylinder. */
    settle(seconds = 3.0) {
      const h = 1 / 120
      for (let t = 0; t < seconds; t += h) step(h)
    },
  }
}
