import * as THREE from 'three'

/**
 * OWNED BY: character & costume agent. See ART-DIRECTION §5 (materials), §7 (cloth).
 *
 * A dressed fashion figure walking a catwalk.
 *
 *   proportion  — 9-head croquis. The extra length is taken BELOW the knee
 *                 (shin 1.28× the thigh) and in the heel, never in the torso.
 *   head        — a sculpted skull, not a scaled sphere: brow, socket, cheekbone,
 *                 mandible and chin are displaced blobs on a dense ellipsoid, so
 *                 the silhouette has a jaw and the three-quarter has structure.
 *                 Hair is a swept cap with a real hairline, a parting and a low
 *                 chignon — volume, not a helmet.
 *   costume     — camel wool trench: swept shell with a real shoulder line, a
 *                 rolled collar and rolled revers (both built with thickness, so
 *                 no zero-width shards), double-breasted closure, leather belt.
 *                 Everything from the bust down is an XPBD-ish skirt hung off the
 *                 yoke ring, cinched at the waist, self-colliding, and colliding
 *                 with the torso and BOTH legs.
 *   gait        — keyframed hip/knee/ankle curves (heel strike → roll → toe-off),
 *                 pelvic list + yaw, shoulders counter-rotating on a lag, arms on
 *                 a longer lag, feet tracking the runway centre line.
 *   poses       — A power stance / B shoulder twist / C coat flare, each with an
 *                 attack, a real hold, and an eased release back into the walk.
 */

const D = Math.PI / 180

/* ------------------------------------------------------- proportion (metres)
 * Sole of the shoe at local y = 0. Head unit 0.206 → 9.03 heads.
 *   crown 1.860 · chin 1.654 (1H) · shoulder 1.545 · waist 1.258 (3H)
 *   hip joint 1.040 (4H) · knee 0.640 (5.9H) · ankle 0.128 (8.4H) · sole 0
 * Thigh 0.400 / shin 0.512 — every millimetre of elongation is below the knee.
 */
const Y_SHOULDER = 1.545
const Y_WAIST = 1.258
const Y_SEAT = 1.088
const Y_HIPJOINT = 1.040
const THIGH_LEN = 0.400
const SHIN_LEN = 0.512
const HIP_HALF = 0.070
const SHOULDER_HALF = 0.150
const UPPERARM_LEN = 0.300
const FOREARM_LEN = 0.255

/** Top surface of the catwalk deck in world space (world.js DECK_Y). */
const GROUND_Y = -0.56

const RUNWAY_START_Z = -14.0
const RUNWAY_PIT_Z = -0.2
const WALK_SPEED = 1.4

/* ----------------------------------------------------------------- helpers */

const smooth01 = t => (t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t))
const clamp01 = t => (t < 0 ? 0 : t > 1 ? 1 : t)

/** Periodic Catmull-Rom through a ring of keys; u wraps. */
function cyc(keys, u) {
  const n = keys.length
  const f = (((u % 1) + 1) % 1) * n
  const i = Math.floor(f)
  const t = f - i
  const p0 = keys[(i - 1 + n) % n]
  const p1 = keys[i % n]
  const p2 = keys[(i + 1) % n]
  const p3 = keys[(i + 2) % n]
  const t2 = t * t
  return 0.5 * (2 * p1 + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 +
    (-p0 + 3 * p1 - 3 * p2 + p3) * t2 * t)
}

/** Sample a keyframe table [v0..vn] at t ∈ [0,1] with Catmull-Rom, clamped ends. */
function key(tab, t) {
  const n = tab.length - 1
  const f = clamp01(t) * n
  const i = Math.min(Math.floor(f), n - 1)
  const s = f - i
  const p0 = tab[Math.max(i - 1, 0)], p1 = tab[i], p2 = tab[i + 1], p3 = tab[Math.min(i + 2, n)]
  const s2 = s * s
  return 0.5 * (2 * p1 + (-p0 + p2) * s + (2 * p0 - 5 * p1 + 4 * p2 - p3) * s2 +
    (-p0 + 3 * p1 - 3 * p2 + p3) * s2 * s)
}

function mesh(g, mat, cast = true) {
  g.computeVertexNormals()
  const m = new THREE.Mesh(g, mat)
  m.castShadow = cast
  m.receiveShadow = true
  return m
}

/** Revolved section. Profiles run top → bottom in the object's own space, which
 *  is why every joint origin is the anatomical joint centre. */
function lathe(profile, mat, seg = 32, zSquash = 1, phiStart = 0, phiLength = Math.PI * 2) {
  const pts = profile.map(([r, y]) => new THREE.Vector2(Math.max(r, 0.0004), y))
  const g = new THREE.LatheGeometry(pts, seg, phiStart, phiLength)
  if (zSquash !== 1) g.scale(1, 1, zSquash)
  return mesh(g, mat)
}

function ellipsoid(rx, ry, rz, mat, seg = 26) {
  const g = new THREE.SphereGeometry(1, seg, Math.max(14, seg - 8))
  g.scale(rx, ry, rz)
  return mesh(g, mat)
}

/**
 * Swept tube through a stack of (y, rx, rz) rings, with an optional squareness
 * so a shoulder can read as a shoulder instead of a cone. Rows run top → bottom.
 * This is what gives the coat a tailored shell rather than a lathe of revolution.
 */
function tube(rows, mat, seg = 56) {
  const pos = []
  const W = seg + 1
  for (const row of rows) {
    const n = 2 + (row.sq || 0) * 2.4
    const e = 2 / n
    for (let c = 0; c <= seg; c++) {
      const a = (c / seg) * Math.PI * 2
      const sa = Math.sin(a), ca = Math.cos(a)
      const sx = Math.sign(sa) * Math.pow(Math.abs(sa), e)
      const sz = Math.sign(ca) * Math.pow(Math.abs(ca), e)
      pos.push((row.cx || 0) + row.rx * sx, row.y, (row.cz || 0) + row.rz * sz)
    }
  }
  const tris = []
  for (let r = 0; r < rows.length - 1; r++) {
    for (let c = 0; c < seg; c++) {
      const a = r * W + c, b = a + 1, d = a + W, e2 = d + 1
      tris.push(a, d, b, b, d, e2)
    }
  }
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
  g.setIndex(tris)
  g.computeVertexNormals()
  // Winding sanity: a closed tube must face out. Cheaper to verify than to reason
  // about, and a silently inverted shell reads as a hole in the coat.
  const nrm = g.attributes.normal
  const probe = W + Math.floor(seg * 0.25)
  const px = pos[probe * 3] - (rows[1].cx || 0)
  const pz = pos[probe * 3 + 2] - (rows[1].cz || 0)
  if (nrm.getX(probe) * px + nrm.getZ(probe) * pz < 0) {
    const idx = g.index.array
    for (let i = 0; i < idx.length; i += 3) { const t = idx[i]; idx[i] = idx[i + 2]; idx[i + 2] = t }
    g.index.needsUpdate = true
    g.computeVertexNormals()
  }
  return mesh(g, mat)
}

/**
 * Parametric surface given real thickness. A lapel or a collar built as a
 * zero-width plane is exactly the "flat triangular shard" failure — cloth has an
 * edge, and the edge is what tells the eye it is cloth.
 */
function slab(nu, nv, fn, mat, thickness = 0.0042, orient = null) {
  const P = []
  for (let i = 0; i < nu; i++) {
    for (let j = 0; j < nv; j++) P.push(new THREE.Vector3().fromArray(fn(i / (nu - 1), j / (nv - 1))))
  }
  const at = (i, j) => P[i * nv + j]
  const Nn = []
  const du = new THREE.Vector3(), dv = new THREE.Vector3()
  for (let i = 0; i < nu; i++) {
    for (let j = 0; j < nv; j++) {
      du.subVectors(at(Math.min(i + 1, nu - 1), j), at(Math.max(i - 1, 0), j))
      dv.subVectors(at(i, Math.min(j + 1, nv - 1)), at(i, Math.max(j - 1, 0)))
      const n = new THREE.Vector3().crossVectors(du, dv)
      Nn.push(n.lengthSq() < 1e-12 ? new THREE.Vector3(0, 0, 1) : n.normalize())
    }
  }
  // The parameterisation decides which way du × dv points, and a silently
  // inverted slab vanishes under FrontSide. Orient against a reference interior
  // point instead of reasoning about winding by hand.
  let flip = false
  if (orient) {
    const oc = new THREE.Vector3().fromArray(orient)
    let acc = 0
    for (let i = 0; i < nu; i += Math.max(1, (nu / 6) | 0)) {
      for (let j = 0; j < nv; j += Math.max(1, (nv / 4) | 0)) {
        const k = i * nv + j
        acc += Nn[k].dot(du.subVectors(at(i, j), oc))
      }
    }
    flip = acc < 0
    if (flip) for (const n of Nn) n.negate()
  }
  const pos = []
  const push = (p, n, k) => pos.push(p.x + n.x * k, p.y + n.y * k, p.z + n.z * k)
  const h = thickness * 0.5
  // Border verts get pulled in so the edge bevels rather than knife-edging.
  const bevel = (i, j) => (i === 0 || j === 0 || i === nu - 1 || j === nv - 1 ? 0.34 : 1)
  for (let i = 0; i < nu; i++) for (let j = 0; j < nv; j++) push(at(i, j), Nn[i * nv + j], h * bevel(i, j))
  const OFF = nu * nv
  for (let i = 0; i < nu; i++) for (let j = 0; j < nv; j++) push(at(i, j), Nn[i * nv + j], -h * bevel(i, j))
  const tris = []
  for (let i = 0; i < nu - 1; i++) {
    for (let j = 0; j < nv - 1; j++) {
      const a = i * nv + j, b = a + 1, c = a + nv, d = c + 1
      tris.push(a, c, d, a, d, b)
      tris.push(OFF + a, OFF + d, OFF + c, OFF + a, OFF + b, OFF + d)
    }
  }
  // Rim: walk the border once and stitch the two layers.
  const border = []
  for (let i = 0; i < nu; i++) border.push(i * nv)
  for (let j = 1; j < nv; j++) border.push((nu - 1) * nv + j)
  for (let i = nu - 2; i >= 0; i--) border.push(i * nv + nv - 1)
  for (let j = nv - 2; j >= 1; j--) border.push(j)
  for (let k = 0; k < border.length; k++) {
    const a = border[k], b = border[(k + 1) % border.length]
    tris.push(a, OFF + a, OFF + b, a, OFF + b, b)
  }
  if (flip) for (let i = 0; i < tris.length; i += 3) { const t = tris[i]; tris[i] = tris[i + 2]; tris[i + 2] = t }
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
  g.setIndex(tris)
  return mesh(g, mat)
}

/** Fine fibre normal — a broken twill. Wool with no surface break-up reads as
 *  painted plastic the moment the rim light hits it (§5). */
function fibreNormal(size = 256, repeat = 18) {
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size
  const ctx = canvas.getContext('2d')
  const img = ctx.createImageData(size, size)
  const h = new Float32Array(size * size)
  const fract = v => v - Math.floor(v)
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const twill = Math.sin((x + y) * 0.82) * 0.5 + Math.sin((x - y) * 0.31) * 0.2
      const grit = fract(Math.sin(x * 12.9898 + y * 78.233) * 43758.5453) - 0.5
      const slub = Math.sin(x * 0.09 + fract(Math.sin(y * 4.11) * 91.7) * 6.0) * 0.18
      h[y * size + x] = twill + grit * 0.6 + slub
    }
  }
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const l = h[y * size + ((x - 1 + size) % size)]
      const r = h[y * size + ((x + 1) % size)]
      const d = h[((y - 1 + size) % size) * size + x]
      const u = h[((y + 1) % size) * size + x]
      const nx = (l - r) * 1.25
      const ny = (d - u) * 1.25
      const inv = 1 / Math.hypot(nx, ny, 1)
      const o = (y * size + x) * 4
      img.data[o] = (nx * inv * 0.5 + 0.5) * 255
      img.data[o + 1] = (ny * inv * 0.5 + 0.5) * 255
      img.data[o + 2] = (inv * 0.5 + 0.5) * 255
      img.data[o + 3] = 255
    }
  }
  ctx.putImageData(img, 0, 0)
  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(repeat, repeat)
  return tex
}

/* ------------------------------------------------------------------ channels
 * One flat pose vector so the walk and the struck poses blend numerically
 * instead of fighting over the same rotation objects. */
const CH = [
  'rootY', 'rootX',
  'pelRX', 'pelRY', 'pelRZ',
  'chRX', 'chRY', 'chRZ',
  'hdRX', 'hdRY', 'hdRZ',
  'aLX', 'aLY', 'aLZ', 'fLX',
  'aRX', 'aRY', 'aRZ', 'fRX',
  'tLX', 'tLY', 'tLZ', 'sLX', 'ftLX',
  'tRX', 'tRY', 'tRZ', 'sRX', 'ftRX',
]
const zeroed = () => CH.reduce((o, k) => (o[k] = 0, o), {})

/* Gait keys sampled at eighths of the stride. Degrees, anatomical sign:
 * thigh + = flexed forward · knee + = flexed · ankle + = toe up. */
const K_THIGH = [26, 16, 2, -12, -22, -8, 16, 28]
const K_KNEE = [4, 16, 10, 4, 32, 62, 52, 14]
const K_ANKLE = [10, 2, -4, -10, -22, -6, 4, 10]

export function createAvatar(envMap) {
  const group = new THREE.Group()

  /* ---------------------------------------------------------- materials §5 */
  const fibre = fibreNormal()

  // Camel wool gabardine. §5: sheen ~0.6 with a warm sheenColor so a backlit
  // silhouette picks up the fuzz halo. Pushed to 1.0 it stops being wool and
  // starts being duchesse satin, which is what the previous build looked like.
  const shell = new THREE.MeshPhysicalMaterial({
    color: 0xc8a57e,
    envMap,
    envMapIntensity: 0.42,
    metalness: 0.0,
    roughness: 0.85,
    normalMap: fibre,
  })
  shell.normalScale = new THREE.Vector2(0.6, 0.6)
  shell.sheen = 0.68
  shell.sheenRoughness = 0.36
  shell.sheenColor = new THREE.Color(0xe4cdae)

  // Coat lining. Rendered BackSide over the same cloth geometry, so wherever the
  // coat opens you see a lining instead of a black hole punched in the silhouette.
  const lining = new THREE.MeshPhysicalMaterial({
    color: 0x6b563f,
    envMap,
    envMapIntensity: 0.5,
    metalness: 0.0,
    roughness: 0.42,
    side: THREE.BackSide,
  })
  lining.sheen = 0.5
  lining.sheenRoughness = 0.32
  lining.sheenColor = new THREE.Color(0xc9a980)

  // Under-layer: fine dark knit. Warm taupe rather than black so the leg line
  // still reads, and matte enough that it never picks up a plastic highlight.
  const knit = new THREE.MeshPhysicalMaterial({
    color: 0x453c33,
    envMap,
    envMapIntensity: 0.36,
    metalness: 0.0,
    roughness: 0.95,
    normalMap: fibre,
  })
  knit.normalScale = new THREE.Vector2(0.30, 0.30)
  knit.sheen = 0.8
  knit.sheenRoughness = 0.45
  // Warm sheen: §5 requires the fuzz halo along a backlit silhouette.
  knit.sheenColor = new THREE.Color(0xb69a7c)

  // Skin: envMapIntensity deliberately low. The studio IBL is bright enough that
  // anything above ~0.3 with a clearcoat turns a head into chrome.
  const skin = new THREE.MeshPhysicalMaterial({
    color: 0xceac8c,
    envMap,
    envMapIntensity: 0.20,
    metalness: 0.0,
    roughness: 0.60,
    clearcoat: 0.06,
    clearcoatRoughness: 0.62,
  })
  skin.sheen = 0.28
  skin.sheenRoughness = 0.75
  skin.sheenColor = new THREE.Color(0xffc9a4)

  const lipMat = skin.clone()
  lipMat.color = new THREE.Color(0xa9705f)
  lipMat.roughness = 0.42
  lipMat.clearcoat = 0.4
  lipMat.clearcoatRoughness = 0.3

  const eyeWhite = new THREE.MeshPhysicalMaterial({
    color: 0xcfc7bd, envMap, envMapIntensity: 0.28, roughness: 0.25, metalness: 0,
    clearcoat: 0.6, clearcoatRoughness: 0.1,
  })
  const irisMat = new THREE.MeshPhysicalMaterial({
    color: 0x241610, envMap, envMapIntensity: 0.9, roughness: 0.10, metalness: 0,
    clearcoat: 1.0, clearcoatRoughness: 0.04,
  })

  // Hair. Warm near-black with an anisotropic sweep — never a mirror. The old
  // 0.8 envMapIntensity + clearcoat is precisely what made the head chrome.
  const hairMat = new THREE.MeshPhysicalMaterial({
    color: 0x231913,
    envMap,
    envMapIntensity: 0.30,
    metalness: 0.0,
    roughness: 0.34,
    clearcoat: 0.22,
    clearcoatRoughness: 0.30,
  })
  hairMat.anisotropy = 1.0
  hairMat.anisotropyRotation = Math.PI / 2
  hairMat.sheen = 0.3
  hairMat.sheenRoughness = 0.3
  hairMat.sheenColor = new THREE.Color(0x6b4a33)

  const leather = new THREE.MeshPhysicalMaterial({
    color: 0x120f0d,
    envMap,
    envMapIntensity: 0.75,
    metalness: 0.05,
    roughness: 0.36,
    clearcoat: 0.5,
    clearcoatRoughness: 0.18,
  })

  const horn = new THREE.MeshPhysicalMaterial({
    color: 0x2a1d14, envMap, envMapIntensity: 0.8, roughness: 0.28,
    metalness: 0.0, clearcoat: 0.7, clearcoatRoughness: 0.12,
  })

  const patent = new THREE.MeshPhysicalMaterial({
    color: 0x0e0e10,
    envMap,
    envMapIntensity: 1.1,
    metalness: 0.15,
    roughness: 0.16,
    clearcoat: 1.0,
    clearcoatRoughness: 0.05,
  })

  const goldMat = new THREE.MeshPhysicalMaterial({
    color: 0xc9a227, envMap, envMapIntensity: 1.5, metalness: 1.0, roughness: 0.24,
  })
  goldMat.anisotropy = 0.6

  /* ------------------------------------------------------------- skeleton */
  const pelvis = new THREE.Group()
  pelvis.position.y = Y_SEAT
  group.add(pelvis)

  const chest = new THREE.Group()                 // pivots at the waist
  chest.position.y = Y_WAIST - Y_SEAT
  pelvis.add(chest)

  const neck = new THREE.Group()
  neck.position.y = Y_SHOULDER - Y_WAIST + 0.001
  chest.add(neck)

  const head = new THREE.Group()
  head.position.y = 0.100
  neck.add(head)

  // Everything the trench is made of, so "no outerwear" actually undresses her
  // instead of leaving a floating yoke and a pair of sleeves behind.
  const coatGroup = new THREE.Group()
  chest.add(coatGroup)
  const coatParts = []                        // pieces that must live on a joint

  /* ------------------------------------------------------------ body forms */
  chest.add(lathe([
    [0.030, 0.322], [0.082, 0.306], [0.130, 0.290], [0.138, 0.248],
    [0.140, 0.196], [0.130, 0.140], [0.110, 0.062], [0.098, 0.000],
  ], knit, 34, 0.72))

  pelvis.add(lathe([
    [0.098, 0.172], [0.112, 0.120], [0.128, 0.062], [0.140, 0.000],
    [0.139, -0.030], [0.126, -0.062], [0.104, -0.092], [0.068, -0.116],
    [0.028, -0.128], [0.004, -0.132],
  ], knit, 34, 0.78))

  // Hip balls fill the crotch/thigh transition so the leg does not read as a
  // tube pushed into a socket.
  for (const s of [1, -1]) {
    const ball = ellipsoid(0.086, 0.092, 0.078, knit, 22)
    ball.position.set(HIP_HALF * s, Y_HIPJOINT - Y_SEAT + 0.012, 0)
    pelvis.add(ball)
  }

  // Trapezius wedge: the neck has to grow out of the shoulders, not sprout from
  // a hole in them.
  const traps = ellipsoid(0.120, 0.052, 0.072, knit, 24)
  traps.position.set(0, Y_SHOULDER - Y_WAIST - 0.030, -0.006)
  chest.add(traps)

  /* --------------------------------------------------------------- neck */
  neck.add(lathe([
    [0.036, 0.108], [0.038, 0.070], [0.043, 0.026], [0.052, -0.008],
    [0.068, -0.036], [0.086, -0.054],
  ], skin, 28, 0.90))

  /* =========================================================== the head ===
   * Built as a dense ellipsoid then sculpted: a mandible taper with a real
   * gonial angle, a chin, cheekbones, brow, sockets, and a nose modelled into
   * the same surface so nothing floats. Then the features that read by VALUE at
   * 40 px — brows, lash line, iris, lips — go on as small separate meshes.
   */
  const SK = { rx: 0.0718, ry: 0.1030, rz: 0.0902 }
  const SKULL_Y = 0.110                     // head-local centre of the cranium

  const faceGroup = new THREE.Group()       // origin AT the cranium centre
  faceGroup.position.y = SKULL_Y
  head.add(faceGroup)

  {
    const g = new THREE.SphereGeometry(1, 68, 48)
    g.scale(SK.rx, SK.ry, SK.rz)
    const p = g.attributes.position

    // --- mandible: taper below the cheekbone, keep a gonial corner, push the
    // chin forward. This is the whole difference between a head and an egg.
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), y = p.getY(i), z = p.getZ(i)
      if (y >= 0.004) continue
      const t = clamp01((0.004 - y) / (SK.ry + 0.004))
      const jaw = Math.pow(t, 1.35)
      // gonial angle survives to ~t 0.55, then the jaw sweeps to the chin
      const wide = 1 - 0.66 * smooth01((t - 0.30) / 0.70)
      p.setX(i, x * wide)
      const back = z < 0 ? 1 - 0.72 * jaw : 1 - 0.24 * jaw * jaw
      p.setZ(i, z * back)
      p.setY(i, y * (1 - 0.06 * jaw))
    }

    // --- feature blobs. dir null = radial from the cranium centre.
    const F = []
    const sym = (x, y, z, r, a, d) => { F.push([x, y, z, r, a, d]); F.push([-x, y, z, r, a, d]) }
    // chin button + mental crease
    F.push([0, -0.088, 0.030, 0.030, 0.0125, [0, 0.30, 1]])
    F.push([0, -0.070, 0.036, 0.024, 0.0045, [0, 0, 1]])
    // mandible ridge from the gonial angle to the chin
    sym(0.046, -0.048, -0.012, 0.026, 0.0060, null)
    sym(0.044, -0.060, 0.012, 0.024, 0.0055, null)
    sym(0.034, -0.074, 0.030, 0.022, 0.0050, null)
    // cheekbone / zygomatic
    sym(0.055, -0.002, 0.040, 0.030, 0.0070, null)
    sym(0.048, -0.024, 0.052, 0.024, 0.0030, null)
    // cheek hollow under it
    sym(0.044, -0.040, 0.044, 0.024, -0.0055, null)
    // temple flat
    sym(0.062, 0.032, 0.026, 0.030, -0.0055, null)
    // brow ridge + glabella
    sym(0.026, 0.030, 0.070, 0.026, 0.0055, [0, 0.15, 1])
    F.push([0, 0.031, 0.078, 0.020, 0.0028, [0, 0, 1]])
    // eye sockets
    sym(0.029, 0.013, 0.066, 0.024, -0.0075, null)
    sym(0.031, 0.021, 0.060, 0.017, -0.0035, null)
    // nose: bridge → tip, modelled into the skull so there is no seam
    F.push([0, 0.020, 0.080, 0.017, 0.0055, [0, 0, 1]])
    F.push([0, 0.006, 0.084, 0.016, 0.0105, [0, 0, 1]])
    F.push([0, -0.008, 0.083, 0.015, 0.0150, [0, -0.10, 1]])
    F.push([0, -0.019, 0.079, 0.012, 0.0140, [0, -0.30, 1]])
    sym(0.011, -0.023, 0.070, 0.011, 0.0060, [0.45, 0, 1])
    // philtrum + lips volume
    F.push([0, -0.036, 0.070, 0.013, 0.0030, [0, 0, 1]])
    F.push([0, -0.045, 0.068, 0.015, 0.0055, [0, 0, 1]])
    F.push([0, -0.056, 0.064, 0.014, 0.0045, [0, 0, 1]])
    F.push([0, -0.050, 0.070, 0.008, -0.0022, [0, 0, 1]])
    // occiput
    F.push([0, 0.012, -0.086, 0.052, 0.0055, null])

    const v = new THREE.Vector3()
    const d = new THREE.Vector3()
    for (let i = 0; i < p.count; i++) {
      v.set(p.getX(i), p.getY(i), p.getZ(i))
      let ax = 0, ay = 0, az = 0
      for (let k = 0; k < F.length; k++) {
        const f = F[k]
        const dx = v.x - f[0], dy = v.y - f[1], dz = v.z - f[2]
        const q = (dx * dx + dy * dy + dz * dz) / (f[3] * f[3])
        if (q >= 1) continue
        const w = (1 - q) * (1 - q) * f[4]
        if (f[5]) { d.set(f[5][0], f[5][1], f[5][2]).normalize() }
        else { d.copy(v).normalize() }
        ax += d.x * w; ay += d.y * w; az += d.z * w
      }
      p.setXYZ(i, v.x + ax, v.y + ay, v.z + az)
    }
    const skull = mesh(g, skin)
    skull.receiveShadow = true
    faceGroup.add(skull)
  }

  // --- eyes. An almond of sclera set into the socket with a dark iris and a
  // lash line above: at runway distance this is what makes a face read.
  for (const s of [1, -1]) {
    const eye = new THREE.Group()
    eye.position.set(0.0292 * s, 0.0128, 0.0575)
    eye.rotation.y = -0.30 * s
    eye.rotation.z = 0.10 * s
    faceGroup.add(eye)

    const ball = ellipsoid(0.0125, 0.0072, 0.0060, eyeWhite, 20)
    ball.castShadow = false
    eye.add(ball)

    const iris = ellipsoid(0.0056, 0.0056, 0.0034, irisMat, 18)
    iris.position.set(0.0004, 0.0002, 0.0044)
    iris.castShadow = false
    eye.add(iris)

    // Lash line — a squashed torus arc. Reads as the dark upper lid.
    const lash = new THREE.Mesh(
      new THREE.TorusGeometry(0.0118, 0.0016, 8, 22, Math.PI * 1.05), hairMat)
    lash.rotation.z = Math.PI * 0.02
    lash.position.set(0, -0.0006, 0.0038)
    lash.scale.set(1, 0.62, 0.7)
    eye.add(lash)

    // Upper lid fold — a thin skin ridge that catches the key.
    const lid = new THREE.Mesh(
      new THREE.TorusGeometry(0.0136, 0.0028, 8, 20, Math.PI * 0.95), skin)
    lid.position.set(0, 0.0012, 0.0006)
    lid.scale.set(1, 0.72, 0.55)
    lid.castShadow = false
    eye.add(lid)

    // Brow.
    const brow = new THREE.Mesh(
      new THREE.TorusGeometry(0.0200, 0.0030, 8, 22, Math.PI * 0.72), hairMat)
    brow.position.set(0.0300 * s, 0.0288, 0.0616)
    brow.rotation.set(0.18, -0.52 * s, Math.PI * (s > 0 ? 0.16 : 0.84))
    brow.scale.set(1, 0.60, 0.42)
    faceGroup.add(brow)

    // Ear — small, mostly under the hair, but it stops the head reading as a helm.
    const ear = ellipsoid(0.0062, 0.0175, 0.0110, skin, 16)
    ear.position.set(0.0672 * s, -0.0060, -0.0090)
    ear.rotation.set(0.12, 0.30 * s, -0.16 * s)
    faceGroup.add(ear)
  }

  // --- lips: value, not form. Two small volumes plus the mouth line.
  {
    const upper = ellipsoid(0.0148, 0.0042, 0.0058, lipMat, 18)
    upper.position.set(0, -0.0452, 0.0700)
    upper.rotation.x = -0.18
    upper.castShadow = false
    faceGroup.add(upper)

    const lower = ellipsoid(0.0132, 0.0050, 0.0058, lipMat, 18)
    lower.position.set(0, -0.0568, 0.0684)
    lower.rotation.x = 0.16
    lower.castShadow = false
    faceGroup.add(lower)
  }

  /* --------------------------------------------------------------- hair
   * A swept cap with a genuine hairline (high at the forehead, low at the nape),
   * a centre parting, strand ripples that break the anisotropic highlight, and a
   * low chignon. Volume, not a chrome shell.
   */
  {
    const HAIRLINE = a => {
      // a = 0 front, π back. Polar angle at which the hair stops.
      const front = Math.cos(a)                     // +1 front, -1 back
      const side = Math.abs(Math.sin(a))
      return (72 - 15 * front + 12 * side) * D
    }
    const NA = 52, NR = 13
    const hair = slab(NA + 1, NR, (u, v) => {
      const a = u * Math.PI * 2
      const th = HAIRLINE(a) * (0.045 + 0.955 * v)
      // thickness of the hair mass: thin at the hairline, full over the crown,
      // heaviest at the back where the mass sits.
      let off = 0.0035 + 0.0105 * smooth01(v * 1.15)
      off += 0.0130 * smooth01((-Math.cos(a) - 0.05) / 1.05) * smooth01(v * 1.4)
      // strand ripple — the anisotropic key breaks into filaments instead of
      // sliding across a single dome.
      off += Math.sin(a * 11 + v * 1.2) * 0.0016 * Math.sin(Math.PI * clamp01(v * 1.05))
      // centre parting, front only
      const dist = Math.min(Math.abs(a), Math.abs(a - Math.PI * 2))
      off -= 0.0062 * Math.exp(-Math.pow(dist / 0.20, 2)) * smooth01((v - 0.05) / 0.55)
      const st = Math.sin(th), ct = Math.cos(th)
      return [
        (SK.rx + off) * st * Math.sin(a),
        (SK.ry + off) * ct - 0.0035 * (1 - ct),
        (SK.rz + off) * st * Math.cos(a) - 0.0045 * st * (1 - Math.cos(a)) * 0.5,
      ]
    }, hairMat, 0.0035, [0, 0, 0])
    faceGroup.add(hair)

    // Nape mass — the hair gathered down the back of the skull.
    const nape = ellipsoid(0.0640, 0.0700, 0.0560, hairMat, 26)
    nape.position.set(0, -0.0300, -0.0470)
    nape.scale.set(1, 1, 1)
    faceGroup.add(nape)

    // Low chignon at the occiput.
    const bunG = new THREE.Group()
    bunG.position.set(0, -0.0620, -0.0790)
    bunG.rotation.x = 0.34
    faceGroup.add(bunG)
    const bun = new THREE.Mesh(new THREE.TorusGeometry(0.0300, 0.0165, 14, 26), hairMat)
    bun.castShadow = true
    bunG.add(bun)
    const bunCore = ellipsoid(0.0230, 0.0230, 0.0180, hairMat, 20)
    bunG.add(bunCore)

    // Two face-framing pieces so the hairline is not a hard edge on skin.
    for (const s of [1, -1]) {
      const wisp = ellipsoid(0.0080, 0.0340, 0.0180, hairMat, 16)
      wisp.position.set(0.0640 * s, -0.0180, 0.0180)
      wisp.rotation.set(0.10, 0, 0.13 * s)
      faceGroup.add(wisp)
    }
  }

  /* ---------------------------------------------------------------- arms */
  function buildArm(side) {
    const shoulder = new THREE.Group()
    shoulder.position.set(SHOULDER_HALF * side, Y_SHOULDER - Y_WAIST, 0)
    chest.add(shoulder)

    // bare arm (visible with the coat off)
    shoulder.add(lathe([
      [0.012, 0.052], [0.044, 0.026], [0.049, -0.040], [0.045, -0.150],
      [0.038, -0.270], [0.034, -0.300], [0.030, -0.318],
    ], knit, 26))
    const shoulderBall = ellipsoid(0.048, 0.048, 0.046, knit, 20)
    shoulder.add(shoulderBall)

    const elbow = new THREE.Group()
    elbow.position.y = -UPPERARM_LEN
    shoulder.add(elbow)

    elbow.add(lathe([
      [0.030, 0.026], [0.037, 0.004], [0.038, -0.045], [0.033, -0.135],
      [0.026, -0.212], [0.023, -0.240],
    ], knit, 26))
    const elbowBall = ellipsoid(0.036, 0.036, 0.036, knit, 18)
    elbow.add(elbowBall)

    // --- sleeve: set-in head that buries itself in the coat shoulder, a soft
    // taper, an elbow ball so a bent arm never opens a gap, and a cuff strap.
    const sleeveTop = tube([
      { y: 0.062, rx: 0.030, rz: 0.030 },
      { y: 0.044, rx: 0.046, rz: 0.045 },
      { y: 0.018, rx: 0.056, rz: 0.055 },
      { y: -0.020, rx: 0.058, rz: 0.058 },
      { y: -0.090, rx: 0.056, rz: 0.056 },
      { y: -0.180, rx: 0.052, rz: 0.052 },
      { y: -0.262, rx: 0.049, rz: 0.049 },
      { y: -0.320, rx: 0.048, rz: 0.048 },
    ], shell, 30)
    shoulder.add(sleeveTop)

    const sleeveBot = tube([
      { y: 0.030, rx: 0.049, rz: 0.049 },
      { y: -0.010, rx: 0.048, rz: 0.048 },
      { y: -0.090, rx: 0.045, rz: 0.045 },
      { y: -0.170, rx: 0.041, rz: 0.041 },
      { y: -0.226, rx: 0.038, rz: 0.038 },
      { y: -0.238, rx: 0.043, rz: 0.043 },
      { y: -0.262, rx: 0.042, rz: 0.042 },
      { y: -0.268, rx: 0.036, rz: 0.036 },
    ], shell, 28)
    elbow.add(sleeveBot)

    const elbowSleeve = ellipsoid(0.050, 0.050, 0.050, shell, 20)
    elbow.add(elbowSleeve)

    const cuff = new THREE.Mesh(new THREE.TorusGeometry(0.043, 0.0050, 8, 22), leather)
    cuff.rotation.x = Math.PI / 2
    cuff.position.y = -0.244
    elbow.add(cuff)
    const cuffBuckle = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.009, 0.005), goldMat)
    cuffBuckle.position.set(0.042 * side, -0.244, 0.006)
    elbow.add(cuffBuckle)

    // sleeve parts belong to the coat, so "no outerwear" strips them
    coatParts.push(sleeveTop, sleeveBot, elbowSleeve, cuff, cuffBuckle)

    /* ------------------------------------------------------------- hand
     * The old hand was a flat ellipse floating at the end of the forearm. This
     * one continues out of the wrist: a wrist collar, a palm block, a curled
     * finger mass with real knuckles, and a thumb set on the radial side. */
    const hand = new THREE.Group()
    hand.position.y = -FOREARM_LEN
    elbow.add(hand)

    // wrist — overlaps the forearm so the join is continuous, not a butt seam
    hand.add(lathe([
      [0.021, 0.024], [0.0225, 0.006], [0.0235, -0.010], [0.0250, -0.024],
      [0.0268, -0.036],
    ], skin, 20, 0.78))

    const palm = new THREE.Group()
    palm.position.set(0, -0.036, 0)
    palm.rotation.z = -0.09 * side
    palm.rotation.x = 0.06
    hand.add(palm)

    const palmMesh = ellipsoid(0.0262, 0.0335, 0.0122, skin, 22)
    palmMesh.position.y = -0.0280
    palm.add(palmMesh)
    // thenar pad — the heel of the thumb, gives the hand a silhouette
    const thenar = ellipsoid(0.0130, 0.0200, 0.0110, skin, 16)
    thenar.position.set(-0.0130 * side, -0.0230, 0.0032)
    palm.add(thenar)

    // knuckle roll
    const knuck = ellipsoid(0.0258, 0.0090, 0.0120, skin, 18)
    knuck.position.y = -0.0580
    palm.add(knuck)

    // four fingers, slightly curled and splayed
    const FING = [
      { x: 0.0182, sp: 0.14 },
      { x: 0.0062, sp: 0.05 },
      { x: -0.0060, sp: -0.04 },
      { x: -0.0175, sp: -0.15 },
    ]
    for (const f of FING) {
      const gpr = new THREE.Group()
      gpr.position.set(f.x * side, -0.0600, 0.0010)
      gpr.rotation.z = f.sp * side
      gpr.rotation.x = 0.20
      palm.add(gpr)
      const seg1 = lathe([
        [0.0072, 0.004], [0.0074, -0.010], [0.0070, -0.026], [0.0066, -0.038],
      ], skin, 12, 0.86)
      gpr.add(seg1)
      const mid = new THREE.Group()
      mid.position.y = -0.038
      mid.rotation.x = 0.42
      gpr.add(mid)
      const seg2 = lathe([
        [0.0068, 0.005], [0.0066, -0.010], [0.0058, -0.022],
      ], skin, 12, 0.86)
      mid.add(seg2)
      const tip = new THREE.Group()
      tip.position.y = -0.022
      tip.rotation.x = 0.38
      mid.add(tip)
      const seg3 = lathe([
        [0.0060, 0.004], [0.0056, -0.008], [0.0044, -0.016], [0.0018, -0.021],
      ], skin, 12, 0.86)
      tip.add(seg3)
    }

    // thumb
    const th = new THREE.Group()
    th.position.set(-0.0210 * side, -0.0300, 0.0060)
    th.rotation.set(0.34, 0.30 * side, 0.62 * side)
    palm.add(th)
    th.add(lathe([
      [0.0092, 0.006], [0.0092, -0.012], [0.0084, -0.026], [0.0078, -0.034],
    ], skin, 12, 0.9))
    const th2 = new THREE.Group()
    th2.position.y = -0.034
    th2.rotation.x = 0.30
    th.add(th2)
    th2.add(lathe([
      [0.0078, 0.004], [0.0072, -0.012], [0.0058, -0.024], [0.0026, -0.030],
    ], skin, 12, 0.9))

    return { shoulder, elbow, hand }
  }
  const armL = buildArm(1)
  const armR = buildArm(-1)

  /* ---------------------------------------------------------------- legs */
  function buildLeg(side) {
    const thigh = new THREE.Group()
    thigh.position.set(HIP_HALF * side, Y_HIPJOINT - Y_SEAT, 0)
    pelvis.add(thigh)

    thigh.add(lathe([
      [0.004, 0.084], [0.052, 0.070], [0.080, 0.034], [0.086, -0.030],
      [0.083, -0.120], [0.074, -0.220], [0.064, -0.320], [0.057, -0.386],
      [0.055, -0.412], [0.052, -0.428],
    ], knit, 30, 0.95))

    const shin = new THREE.Group()
    shin.position.y = -THIGH_LEN
    thigh.add(shin)

    // Knee: an actual patella mass at the joint. Without it a 60° knee bend
    // scissors the two tubes and opens a hole in the leg.
    const kneeBall = ellipsoid(0.058, 0.056, 0.058, knit, 22)
    shin.add(kneeBall)

    // Calf belly high and full, then a long clean taper to a fine ankle: this
    // line is what reads as fashion-figure length.
    shin.add(lathe([
      [0.030, 0.062], [0.046, 0.044], [0.054, 0.020], [0.057, -0.022],
      [0.062, -0.140], [0.057, -0.235], [0.045, -0.345], [0.034, -0.445],
      [0.029, -0.505], [0.020, -0.514], [0.010, -0.518],
    ], knit, 30, 0.94))

    const foot = new THREE.Group()
    foot.position.y = -SHIN_LEN
    shin.add(foot)

    // ankle knuckle so the shin does not simply end
    const ankle = ellipsoid(0.026, 0.024, 0.028, knit, 16)
    ankle.position.y = 0.006
    foot.add(ankle)

    // Stiletto pump. The 32° plantarflexion of the last is baked into the mesh,
    // so foot.rotation.x = 0 already means "standing in heels". Contact geometry
    // is unchanged from the measured build — SOLE_OFFSET is re-derived from it
    // at construction either way.
    const vamp = ellipsoid(0.037, 0.032, 0.108, patent, 26)
    vamp.rotation.x = 0.55
    vamp.position.set(0, -0.072, 0.022)
    foot.add(vamp)

    // heel counter — wraps the back of the foot into the shoe
    const counter = ellipsoid(0.032, 0.030, 0.030, patent, 18)
    counter.position.set(0, -0.030, -0.030)
    foot.add(counter)

    const heel = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.013, 0.101, 14), patent)
    heel.position.set(0, -0.079, -0.0465)
    heel.rotation.x = -0.172
    heel.castShadow = true
    foot.add(heel)

    const strap = new THREE.Mesh(new THREE.TorusGeometry(0.035, 0.0045, 8, 24), patent)
    strap.rotation.x = Math.PI / 2
    strap.position.y = -0.012
    strap.scale.z = 0.9
    foot.add(strap)

    const buckle = new THREE.Mesh(new THREE.BoxGeometry(0.013, 0.009, 0.004), goldMat)
    buckle.position.set(0.033 * side, -0.012, 0.005)
    foot.add(buckle)

    return { thigh, shin, foot }
  }
  const legL = buildLeg(1)
  const legR = buildLeg(-1)

  /* ============================================================== the coat */
  const COLS = 56
  const ROWS = 38
  const RING_Y = 0.180                      // chest-local; world 1.438 (bust line)
  const RING_R = 0.192
  const Z_SQ = 0.72
  const HEM_Y = 0.50                        // world — just below the knee
  const LENGTH = (Y_WAIST + RING_Y) - HEM_Y
  const OPEN_MAX = 0.86                     // radians of front gap at the hem

  /** Front vent: shut through the chest, waist and hip, sweeping open below. A
   *  wider opening than this stops being a trench and becomes a flying cape. */
  const gapAt = rt => OPEN_MAX * smooth01((rt - 0.34) / 0.66)

  // --- rigid tailoring, carried by the chest -------------------------------
  // Shell: a swept tube, not a lathe. rx/rz per ring plus a squareness term give
  // a shoulder line, a chest and a nipped waist that a revolve cannot.
  const SHELL_ROWS = [
    { y: 0.362, rx: 0.044, rz: 0.042 },   // snug on the neck, or the collar
    { y: 0.356, rx: 0.052, rz: 0.048 },   // opening shows as a hole
    { y: 0.352, rx: 0.066, rz: 0.058 },
    { y: 0.344, rx: 0.088, rz: 0.068 },
    { y: 0.332, rx: 0.122, rz: 0.078, sq: 0.18 },
    { y: 0.316, rx: 0.160, rz: 0.088, sq: 0.34 },
    { y: 0.294, rx: 0.203, rz: 0.100, sq: 0.46 },
    { y: 0.272, rx: 0.208, rz: 0.112, sq: 0.36 },
    { y: 0.244, rx: 0.203, rz: 0.124, sq: 0.20 },
    { y: 0.212, rx: 0.196, rz: 0.132, sq: 0.07 },
    { y: RING_Y, rx: RING_R, rz: RING_R * Z_SQ, sq: 0 },
  ]
  const shellMesh = tube(SHELL_ROWS, shell, 60)
  coatGroup.add(shellMesh)

  /** Radius of the shell at a chest-local height, for a given azimuth. */
  function shellAt(y, a) {
    let i = 0
    while (i < SHELL_ROWS.length - 2 && SHELL_ROWS[i + 1].y > y) i++
    const r0 = SHELL_ROWS[i], r1 = SHELL_ROWS[i + 1]
    const t = clamp01((r0.y - y) / Math.max(r0.y - r1.y, 1e-6))
    const rx = r0.rx + (r1.rx - r0.rx) * t
    const rz = r0.rz + (r1.rz - r0.rz) * t
    return new THREE.Vector3(rx * Math.sin(a), y, rz * Math.cos(a))
  }
  /** Outward normal of the shell ellipse at that point. */
  function shellNormal(y, a) {
    const p0 = shellAt(y, a)
    let i = 0
    while (i < SHELL_ROWS.length - 2 && SHELL_ROWS[i + 1].y > y) i++
    const r0 = SHELL_ROWS[i], r1 = SHELL_ROWS[i + 1]
    const t = clamp01((r0.y - y) / Math.max(r0.y - r1.y, 1e-6))
    const rx = r0.rx + (r1.rx - r0.rx) * t
    const rz = r0.rz + (r1.rz - r0.rz) * t
    const n = new THREE.Vector3(p0.x / (rx * rx), 0, p0.z / (rz * rz)).normalize()
    // tilt with the shell's own slope so the normal is not purely horizontal
    const slope = (r1.rx - r0.rx) / Math.max(r0.y - r1.y, 1e-6)
    n.y = Math.max(-0.35, Math.min(0.35, slope * 0.10))
    return n.normalize()
  }

  /* ---- collar: a stand that rises off the neck seam and rolls over ------- */
  {
    const A_G = 0.72                       // half-angle of the front gorge
    // cross-section [outward, up] of a trench collar
    const CR = [
      [0.000, 0.000], [0.003, 0.014], [0.007, 0.028], [0.015, 0.040],
      [0.029, 0.047], [0.047, 0.044], [0.062, 0.032], [0.072, 0.014],
    ]
    const collar = slab(30, CR.length, (u, v) => {
      const a = A_G + u * (Math.PI * 2 - A_G * 2)
      const yBase = 0.348
      const p = shellAt(yBase, a)
      const n = shellNormal(yBase, a).setY(0).normalize()
      // taper the collar into nothing as it approaches the gorge
      const edge = Math.min(u, 1 - u)
      const k = 0.45 + 0.55 * smooth01(edge / 0.16)
      const j = v * (CR.length - 1)
      const j0 = Math.min(Math.floor(j), CR.length - 2)
      const s = j - j0
      const dr = (CR[j0][0] + (CR[j0 + 1][0] - CR[j0][0]) * s) * k
      const dy = (CR[j0][1] + (CR[j0 + 1][1] - CR[j0][1]) * s) * k
      return [p.x + n.x * dr, p.y + dy, p.z + n.z * dr]
    }, shell, 0.0048, [0, 0.352, -0.010])
    coatGroup.add(collar)
  }

  /* ---- revers: the lapel rolls back over a real fold radius -------------- */
  {
    const FOLD_R = 0.0115
    const PHI = 2.72                       // 156° of roll
    const W = [0.030, 0.058, 0.078, 0.089, 0.090, 0.082, 0.068, 0.048, 0.024, 0.008]
    const NU = 22, NV = 13
    for (const side of [1, -1]) {
      const lapel = slab(NU, NV, (u, v) => {
        // roll line: gorge → break point, riding the shell surface
        const y = 0.340 + (0.176 - 0.340) * u
        const a = (0.60 + 0.10 * u) * side
        const O = shellAt(y, a)
        const n = shellNormal(y, a)
        // tangent along the roll line
        const y2 = 0.340 + (0.176 - 0.340) * Math.min(u + 0.02, 1)
        const a2 = (0.60 + 0.10 * Math.min(u + 0.02, 1)) * side
        const t = shellAt(y2, a2).sub(O).normalize()
        const b = new THREE.Vector3().crossVectors(n, t).normalize()   // outboard
        const d0 = b.clone().multiplyScalar(-1)                         // toward CF
        const total = key(W, u)
        const arcLen = Math.min(FOLD_R * PHI, total * 0.62)
        const phiEnd = arcLen / FOLD_R
        const w = v * total
        let px, py, pz
        if (w <= arcLen) {
          const ph = w / FOLD_R
          const s1 = Math.sin(ph), c1 = 1 - Math.cos(ph)
          px = O.x + FOLD_R * (d0.x * s1 + n.x * c1)
          py = O.y + FOLD_R * (d0.y * s1 + n.y * c1)
          pz = O.z + FOLD_R * (d0.z * s1 + n.z * c1)
        } else {
          const s1 = Math.sin(phiEnd), c1 = 1 - Math.cos(phiEnd)
          const ex = O.x + FOLD_R * (d0.x * s1 + n.x * c1)
          const ey = O.y + FOLD_R * (d0.y * s1 + n.y * c1)
          const ez = O.z + FOLD_R * (d0.z * s1 + n.z * c1)
          const dx = d0.x * Math.cos(phiEnd) + n.x * Math.sin(phiEnd)
          const dy = d0.y * Math.cos(phiEnd) + n.y * Math.sin(phiEnd)
          const dz = d0.z * Math.cos(phiEnd) + n.z * Math.sin(phiEnd)
          const L = w - arcLen
          // the free edge lifts slightly off the chest — a lapel never lies flat
          const lift = 0.16 * (L / Math.max(total - arcLen, 1e-4))
          px = ex + dx * L + n.x * lift * 0.05
          py = ey + dy * L + lift * 0.010
          pz = ez + dz * L + n.z * lift * 0.05
        }
        return [px, py, pz]
      }, shell, 0.0046, [0, 0.258, -0.020])
      coatGroup.add(lapel)
    }
  }

  /* ---- closure: double-breasted buttons + belt --------------------------- */
  {
    const UP = new THREE.Vector3(0, 1, 0)
    for (const s of [1, -1]) {
      for (const y of [0.252, 0.200]) {
        const a = 0.30 * s
        const p = shellAt(y, a)
        const n = shellNormal(y, a)
        const b = new THREE.Mesh(new THREE.CylinderGeometry(0.0094, 0.0094, 0.0042, 16), horn)
        b.position.set(p.x + n.x * 0.005, p.y + n.y * 0.005, p.z + n.z * 0.005)
        b.quaternion.setFromUnitVectors(UP, n)
        b.castShadow = true
        coatGroup.add(b)
      }
    }
  }

  const belt = lathe([
    [0.206, 0.030], [0.214, 0.008], [0.214, -0.014], [0.204, -0.034],
  ], leather, 44, Z_SQ, 0.58, Math.PI * 2 - 1.16)
  coatGroup.add(belt)

  for (const s of [1, -1]) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.019, 0.0042, 8, 20), goldMat)
    ring.position.set(0.113 * s, -0.002, 0.128)
    ring.rotation.set(Math.PI / 2, 0, 0.5 * s)
    coatGroup.add(ring)
  }
  // belt tail, hanging off the buckle
  {
    const tail = slab(10, 4, (u, v) => {
      const x = 0.150 - u * 0.010
      const y = -0.004 - u * 0.150
      const z = 0.126 - u * u * 0.030
      return [x + (v - 0.5) * 0.026, y + Math.sin(u * 2.2) * 0.004, z + (v - 0.5) * 0.004]
    }, leather, 0.003, [0, -0.05, 0])
    coatGroup.add(tail)
  }

  // --- solved skirt --------------------------------------------------------
  const clothGeo = new THREE.PlaneGeometry(1, 1, COLS - 1, ROWS - 1)
  const cpos = clothGeo.attributes.position
  const N = cpos.count
  const cur = new Float32Array(N * 3)
  const prev = new Float32Array(N * 3)
  const pinned = new Uint8Array(N)
  const hit = new Uint8Array(N)
  const pinTarget = new Float32Array(N * 3)
  const rowT = new Float32Array(ROWS)
  const rowSpace = new Float32Array(ROWS)
  const idx = (r, c) => r * COLS + c

  for (let r = 0; r < ROWS; r++) {
    const rt = r / (ROWS - 1)
    rowT[r] = rt
    const gap = gapAt(rt)
    const span = Math.PI * 2 - gap
    for (let c = 0; c < COLS; c++) {
      const i = idx(r, c)
      const a = gap / 2 + (c / (COLS - 1)) * span
      // Broad, low-frequency flutes seeded in ANGLE space, not column index, so
      // they stay evenly distributed as the ring opens. Seven flutes is a coat;
      // twenty is an accordion, and an accordion is what shatters into shards.
      const fold = Math.sin(a * 7 + 0.4) * 0.011 + Math.sin(a * 3 - 0.8) * 0.007
      const rad = RING_R + Math.pow(rt, 1.15) * 0.235 + fold * rt * rt
      const y = (Y_WAIST + RING_Y) - rt * LENGTH
      const o = i * 3
      cur[o] = Math.sin(a) * rad
      cur[o + 1] = y
      cur[o + 2] = Math.cos(a) * rad * Z_SQ
      prev[o] = cur[o]; prev[o + 1] = cur[o + 1]; prev[o + 2] = cur[o + 2]
      if (r === 0) {
        pinned[i] = 1
        pinTarget[o] = cur[o]
        pinTarget[o + 1] = cur[o + 1] - Y_WAIST
        pinTarget[o + 2] = cur[o + 2]
      }
    }
    rowSpace[r] = (Math.PI * 2 * (RING_R + rt * 0.235)) / COLS
  }

  // Structural first, then shear, then bend — the clamp pass below only walks
  // the structural block.
  const con = []
  const link = (a, b, stiff) => {
    const d = Math.hypot(cur[a * 3] - cur[b * 3], cur[a * 3 + 1] - cur[b * 3 + 1],
      cur[a * 3 + 2] - cur[b * 3 + 2])
    con.push(a, b, d, stiff)
  }
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (c + 1 < COLS) link(idx(r, c), idx(r, c + 1), 1)
      if (r + 1 < ROWS) link(idx(r, c), idx(r + 1, c), 1)
    }
    // Where the coat is still shut, seal the seam so the front cannot gape.
    if (gapAt(rowT[r]) < 0.06) link(idx(r, COLS - 1), idx(r, 0), 1)
  }
  const STRUCT = con.length / 4
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (c + 1 < COLS && r + 1 < ROWS) link(idx(r, c), idx(r + 1, c + 1), 0.62)
      if (c > 0 && r + 1 < ROWS) link(idx(r, c), idx(r + 1, c - 1), 0.62)
      // Bend. HIGH, not low: the radius of a fold is set by bending resistance
      // against gravity, and wool gabardine folds in broad rounded flutes. Slack
      // bend constraints are exactly what creased this coat into flat shards.
      if (r + 2 < ROWS) link(idx(r, c), idx(r + 2, c), 0.52)
      if (c + 2 < COLS) link(idx(r, c), idx(r, c + 2), 0.46)
      if (r + 3 < ROWS) link(idx(r, c), idx(r + 3, c), 0.24)
      if (c + 3 < COLS) link(idx(r, c), idx(r, c + 3), 0.22)
    }
  }
  // Hem facing: a real coat hem is interfaced, so it holds a smooth curve and
  // "breaks" in long folds instead of zig-zagging vertex to vertex.
  for (const r of [ROWS - 1, ROWS - 2]) {
    for (let c = 0; c + 4 < COLS; c++) link(idx(r, c), idx(r, c + 4), 0.80)
  }
  const CN = con.length / 4

  const clothMesh = new THREE.Mesh(clothGeo, shell)
  clothMesh.castShadow = true
  clothMesh.receiveShadow = true
  clothMesh.frustumCulled = false
  group.add(clothMesh)

  // Second pass over the same geometry, back faces only: the lining. Without it
  // the inside of the vent is an unlit hole and the silhouette loses its edge.
  const clothBack = new THREE.Mesh(clothGeo, lining)
  clothBack.castShadow = false
  clothBack.receiveShadow = true
  clothBack.frustumCulled = false
  group.add(clothBack)

  /* ----------------------------------------------- per-frame frame caches */
  const _inv = new THREE.Matrix4()
  const _v = new THREE.Vector3()
  const chestToGroup = new THREE.Matrix4()
  const groupToChest = new THREE.Matrix4()
  const pelvisToGroup = new THREE.Matrix4()
  const groupToPelvis = new THREE.Matrix4()
  const J = {
    hipL: new THREE.Vector3(), kneeL: new THREE.Vector3(), ankL: new THREE.Vector3(),
    hipR: new THREE.Vector3(), kneeR: new THREE.Vector3(), ankR: new THREE.Vector3(),
  }

  function jointToGroup(obj, out) {
    obj.getWorldPosition(out)
    return out.applyMatrix4(_inv)
  }

  function refreshFrames() {
    group.updateMatrixWorld(true)
    _inv.copy(group.matrixWorld).invert()
    chestToGroup.multiplyMatrices(_inv, chest.matrixWorld)
    groupToChest.copy(chestToGroup).invert()
    pelvisToGroup.multiplyMatrices(_inv, pelvis.matrixWorld)
    groupToPelvis.copy(pelvisToGroup).invert()
    jointToGroup(legL.thigh, J.hipL); jointToGroup(legL.shin, J.kneeL); jointToGroup(legL.foot, J.ankL)
    jointToGroup(legR.thigh, J.hipR); jointToGroup(legR.shin, J.kneeR); jointToGroup(legR.foot, J.ankR)
  }

  /* ------------------------------------------------------ body collision */
  const CHEST_PROF = [
    [0.322, 0.052], [0.290, 0.136], [0.248, 0.148], [0.196, 0.150],
    [0.140, 0.140], [0.062, 0.120], [0.000, 0.110],
  ]
  const PELV_PROF = [
    [0.172, 0.110], [0.120, 0.126], [0.062, 0.141], [0.000, 0.152],
    [-0.040, 0.150], [-0.080, 0.136], [-0.116, 0.108],
  ]
  function radiusAt(prof, y) {
    if (y > prof[0][0] || y < prof[prof.length - 1][0]) return 0
    for (let i = 0; i < prof.length - 1; i++) {
      const [y0, r0] = prof[i], [y1, r1] = prof[i + 1]
      if (y <= y0 && y >= y1) return r0 + (r1 - r0) * ((y0 - y) / Math.max(y0 - y1, 1e-6))
    }
    return 0
  }

  function pushEllipse(i, o, toLocal, toWorld, prof, gapOut) {
    _v.set(cur[o], cur[o + 1], cur[o + 2]).applyMatrix4(toLocal)
    const r = radiusAt(prof, _v.y)
    if (r === 0) return
    const rx = r + gapOut
    const rz = (r + gapOut) * Z_SQ
    const d = Math.hypot(_v.x / rx, _v.z / rz)
    if (d >= 1 || d < 1e-6) return
    _v.x /= d; _v.z /= d
    _v.applyMatrix4(toWorld)
    cur[o] = _v.x; cur[o + 1] = _v.y; cur[o + 2] = _v.z
    hit[i] = 1
  }

  /** Waist cinch — the belt is not decoration, the cloth is actually pulled in
   *  under it, which is what forces the flare below. */
  function cinch(o, maxR) {
    _v.set(cur[o], cur[o + 1], cur[o + 2]).applyMatrix4(groupToChest)
    const d = Math.hypot(_v.x / maxR, _v.z / (maxR * Z_SQ))
    if (d <= 1) return
    _v.x /= d; _v.z /= d
    _v.applyMatrix4(chestToGroup)
    cur[o] = _v.x; cur[o + 1] = _v.y; cur[o + 2] = _v.z
  }

  /** Capsule push-out — this is what lets a swinging knee drive the hem. */
  function pushCapsule(i, o, a, b, rad) {
    const abx = b.x - a.x, aby = b.y - a.y, abz = b.z - a.z
    const px = cur[o] - a.x, py = cur[o + 1] - a.y, pz = cur[o + 2] - a.z
    const ll = abx * abx + aby * aby + abz * abz
    let t = ll > 1e-9 ? (px * abx + py * aby + pz * abz) / ll : 0
    t = t < 0 ? 0 : t > 1 ? 1 : t
    const dx = px - abx * t, dy = py - aby * t, dz = pz - abz * t
    const d = Math.hypot(dx, dy, dz)
    if (d >= rad || d < 1e-6) return
    const k = (rad - d) / d
    cur[o] += dx * k; cur[o + 1] += dy * k; cur[o + 2] += dz * k
    hit[i] = 1
  }

  /* ------------------------------------------------------------- solver */
  const GRAVITY = -9.1
  const DAMP = 0.958
  const ITER = 8
  const HIP_ROW = Math.floor(ROWS * 0.30)
  // Radius ceiling per row: tight through the belt, free everywhere else.
  const cinchR = new Float32Array(ROWS)
  for (let r = 0; r < ROWS; r++) {
    const k = Math.min(1, Math.abs(rowT[r] - 0.205) / 0.135)
    cinchR[r] = rowT[r] > 0.36 ? 99 : 0.181 + 0.16 * k * k
  }
  // Hem weight: the last rows are faced and heavier, so the coat hangs from the
  // bust instead of ballooning behind her.
  const rowG = new Float32Array(ROWS)
  const rowDrag = new Float32Array(ROWS)
  for (let r = 0; r < ROWS; r++) {
    rowG[r] = 1 + 0.55 * smooth01((rowT[r] - 0.72) / 0.28)
    rowDrag[r] = Math.pow(rowT[r], 1.6)
  }
  // Self-collision floor: a fold may not close tighter than this, which is what
  // stops the sheet from folding through itself into blades.
  const selfD = new Float32Array(ROWS)
  for (let r = 0; r < ROWS; r++) selfD[r] = rowSpace[r] * 1.55

  let simTime = 0
  let airDrag = 0
  let bobAcc = 0

  function stepCloth(dt) {
    const h = Math.min(dt, 1 / 60)
    const h2 = h * h
    simTime += h

    // Pins ride the chest, so the coat is driven by the torso and lags behind it
    // by exactly as much as the damping allows.
    for (let c = 0; c < COLS; c++) {
      const o = idx(0, c) * 3
      _v.set(pinTarget[o], pinTarget[o + 1], pinTarget[o + 2]).applyMatrix4(chestToGroup)
      cur[o] = _v.x; cur[o + 1] = _v.y; cur[o + 2] = _v.z
    }

    hit.fill(0)

    for (let i = COLS; i < N; i++) {
      const o = i * 3
      const row = (i / COLS) | 0
      const rt = rowT[row]
      // §7: gentle air motion so the hem is alive without flapping.
      const breeze = Math.sin(simTime * 1.6 + i * 0.019) * 0.075 * rt
      const vx = (cur[o] - prev[o]) * DAMP
      const vy = (cur[o + 1] - prev[o + 1]) * DAMP
      const vz = (cur[o + 2] - prev[o + 2]) * DAMP
      prev[o] = cur[o]; prev[o + 1] = cur[o + 1]; prev[o + 2] = cur[o + 2]
      cur[o] += vx + breeze * h2 * 6
      cur[o + 1] += vy + (GRAVITY * rowG[row] + bobAcc) * h2
      cur[o + 2] += vz - airDrag * rowDrag[row] * h2
    }

    for (let k = 0; k < ITER; k++) {
      for (let n = 0; n < CN; n++) {
        const b4 = n * 4
        const a = con[b4], b = con[b4 + 1]
        const ao = a * 3, bo = b * 3
        const dx = cur[bo] - cur[ao], dy = cur[bo + 1] - cur[ao + 1], dz = cur[bo + 2] - cur[ao + 2]
        const d = Math.hypot(dx, dy, dz) || 1e-6
        const f = ((d - con[b4 + 2]) / d) * 0.5 * con[b4 + 3]
        const mx = dx * f, my = dy * f, mz = dz * f
        if (!pinned[a]) { cur[ao] += mx; cur[ao + 1] += my; cur[ao + 2] += mz }
        if (!pinned[b]) { cur[bo] -= mx; cur[bo + 1] -= my; cur[bo + 2] -= mz }
      }

      // Approximate self-collision (§7). Only same-row / same-column neighbours a
      // few steps away, which is where a sheet folds back on itself.
      if (k >= 2) {
        for (let r = HIP_ROW; r < ROWS; r++) {
          const md = selfD[r], md2 = md * md
          for (let c = 0; c + 3 < COLS; c++) {
            const ao = idx(r, c) * 3, bo = idx(r, c + 3) * 3
            const dx = cur[bo] - cur[ao], dy = cur[bo + 1] - cur[ao + 1], dz = cur[bo + 2] - cur[ao + 2]
            const q = dx * dx + dy * dy + dz * dz
            if (q >= md2 || q < 1e-9) continue
            const d = Math.sqrt(q)
            const f = ((d - md) / d) * 0.5
            const mx = dx * f, my = dy * f, mz = dz * f
            cur[ao] += mx; cur[ao + 1] += my; cur[ao + 2] += mz
            cur[bo] -= mx; cur[bo + 1] -= my; cur[bo + 2] -= mz
          }
        }
      }

      for (let i = COLS; i < N; i++) {
        const o = i * 3
        const row = (i / COLS) | 0
        if (row < HIP_ROW + 4) {
          pushEllipse(i, o, groupToChest, chestToGroup, CHEST_PROF, 0.024)
          pushEllipse(i, o, groupToPelvis, pelvisToGroup, PELV_PROF, 0.026)
        }
        if (cinchR[row] < 90) cinch(o, cinchR[row])
        if (row >= HIP_ROW) {
          pushCapsule(i, o, J.hipL, J.kneeL, 0.106)
          pushCapsule(i, o, J.hipR, J.kneeR, 0.106)
          pushCapsule(i, o, J.kneeL, J.ankL, 0.072)
          pushCapsule(i, o, J.kneeR, J.ankR, 0.072)
        }
      }
    }

    // Hard stretch ceiling. Wool does not grow 40% under its own weight, and a
    // stretched grid is what turns a hem into tatters.
    for (let n = 0; n < STRUCT; n++) {
      const b4 = n * 4
      const a = con[b4], b = con[b4 + 1], rest = con[b4 + 2] * 1.04
      const ao = a * 3, bo = b * 3
      const dx = cur[bo] - cur[ao], dy = cur[bo + 1] - cur[ao + 1], dz = cur[bo + 2] - cur[ao + 2]
      const d = Math.hypot(dx, dy, dz)
      if (d <= rest || d < 1e-6) continue
      const f = ((d - rest) / d) * 0.5
      const mx = dx * f, my = dy * f, mz = dz * f
      if (!pinned[a]) { cur[ao] += mx; cur[ao + 1] += my; cur[ao + 2] += mz }
      if (!pinned[b]) { cur[bo] -= mx; cur[bo + 1] -= my; cur[bo + 2] -= mz }
    }

    // Friction: a contact projection injects velocity unless the previous
    // position follows it. Without this the coat jitters against the legs and
    // never settles (§7 — it must come to rest).
    for (let i = COLS; i < N; i++) {
      if (!hit[i]) continue
      const o = i * 3
      prev[o] += (cur[o] - prev[o]) * 0.40
      prev[o + 1] += (cur[o + 1] - prev[o + 1]) * 0.40
      prev[o + 2] += (cur[o + 2] - prev[o + 2]) * 0.40
    }

    for (let i = 0; i < N; i++) cpos.setXYZ(i, cur[i * 3], cur[i * 3 + 1], cur[i * 3 + 2])
    cpos.needsUpdate = true
    clothGeo.computeVertexNormals()
    weldSeamNormals()
    clothGeo.computeBoundingSphere()
  }

  // Where the coat is closed, columns 0 and COLS-1 are coincident but are
  // separate vertices, so their normals disagree and the closure shows as a hard
  // line down the back. Average them.
  const cnrm = clothGeo.attributes.normal
  const SEAL_ROWS = []
  for (let r = 0; r < ROWS; r++) if (gapAt(rowT[r]) < 0.06) SEAL_ROWS.push(r)
  function weldSeamNormals() {
    for (let k = 0; k < SEAL_ROWS.length; k++) {
      const a = idx(SEAL_ROWS[k], 0), b = idx(SEAL_ROWS[k], COLS - 1)
      const nx = (cnrm.getX(a) + cnrm.getX(b)) * 0.5
      const ny = (cnrm.getY(a) + cnrm.getY(b)) * 0.5
      const nz = (cnrm.getZ(a) + cnrm.getZ(b)) * 0.5
      const l = Math.hypot(nx, ny, nz) || 1
      cnrm.setXYZ(a, nx / l, ny / l, nz / l)
      cnrm.setXYZ(b, nx / l, ny / l, nz / l)
    }
    cnrm.needsUpdate = true
  }

  /** Impulse into the lower coat — the flare pose throws it open. */
  function flare(power) {
    const from = Math.floor(ROWS * 0.40)
    for (let r = from; r < ROWS; r++) {
      const f = (r - from) / (ROWS - from)
      for (let c = 0; c < COLS; c++) {
        const o = idx(r, c) * 3
        const dx = cur[o], dz = cur[o + 2]
        const d = Math.hypot(dx, dz) || 1
        prev[o] -= (dx / d) * power * f
        prev[o + 2] -= (dz / d) * power * f
        prev[o + 1] -= power * f * 0.30
      }
    }
  }

  /* ------------------------------------------------------------ animation */
  const W = zeroed()
  const P = zeroed()
  const O = zeroed()

  function walkChannels(phi, out) {
    const u = phi / (Math.PI * 2)
    const s = Math.sin(phi)

    const tL = cyc(K_THIGH, u) * D, kL = cyc(K_KNEE, u) * D, aL = cyc(K_ANKLE, u) * D
    const tR = cyc(K_THIGH, u + 0.5) * D, kR = cyc(K_KNEE, u + 0.5) * D, aR = cyc(K_ANKLE, u + 0.5) * D
    out.tLX = -tL; out.sLX = kL; out.ftLX = -aL
    out.tRX = -tR; out.sRX = kR; out.ftRX = -aR

    // Adduction: catwalk feet land on one line, so both legs swing inboard.
    const add = 6.6 * D + Math.cos(phi) * 2.0 * D
    out.tLZ = -add
    out.tRZ = add
    out.tLY = 0.03
    out.tRY = -0.03

    // Pelvis: shift toward the stance foot, list so the swing hip drops, yaw
    // carrying the swing side forward.
    out.rootX = s * 0.044
    out.pelRZ = s * 0.140
    out.pelRY = s * 0.175
    out.pelRX = -0.03
    out.rootY = -Math.cos(phi * 2) * 0.021

    // Shoulders counter-rotate against the pelvis and arrive late.
    const lag = Math.sin(phi - 0.55)
    out.chRY = -lag * 0.135
    out.chRZ = -lag * 0.072
    out.chRX = -0.045

    // The head holds the eyeline down the runway whatever the body does.
    out.hdRY = -(out.pelRY + out.chRY) * 0.88
    out.hdRZ = -(out.pelRZ + out.chRZ) * 0.62
    out.hdRX = -0.055

    // Arms antiphase to the same-side leg, on a longer lag than the shoulders.
    const sw = Math.cos(phi - 0.42)
    out.aLX = sw * 15 * D
    out.aRX = -sw * 15 * D
    out.aLZ = 0.085 + Math.abs(sw) * 0.028
    out.aRZ = -(0.085 + Math.abs(sw) * 0.028)
    out.aLY = -0.05
    out.aRY = 0.05
    out.fLX = -(17 + sw * 7) * D
    out.fRX = -(17 - sw * 7) * D
  }

  function poseChannels(name, out) {
    for (let i = 0; i < CH.length; i++) out[CH[i]] = 0
    if (name === 'A') {
      // Power stance — weight stacked on the left leg, hip thrown, hand on hip.
      out.rootX = 0.050
      out.pelRZ = -0.190; out.pelRY = 0.200; out.pelRX = -0.05
      out.chRY = -0.270; out.chRZ = 0.135; out.chRX = -0.090
      out.hdRY = 0.330; out.hdRZ = -0.090; out.hdRX = -0.080
      out.tLX = 0.020; out.tLZ = -0.060; out.sLX = 0.030
      out.tRX = -0.230; out.tRZ = 0.150; out.sRX = 0.400; out.ftRX = -0.330
      out.aLX = 0.150; out.aLY = -0.620; out.aLZ = 0.560; out.fLX = -1.480
      out.aRX = 0.180; out.aRY = 0.140; out.aRZ = -0.230; out.fRX = -0.230
    } else if (name === 'B') {
      // Shoulder twist — a deep spiral through the waist, chin brought back over
      // the leading shoulder toward the lens.
      out.rootX = -0.030
      out.pelRY = -0.240; out.pelRZ = 0.170; out.pelRX = -0.02
      out.chRY = 0.560; out.chRZ = -0.160; out.chRX = -0.060
      out.hdRY = -0.520; out.hdRZ = 0.120; out.hdRX = -0.040
      out.tLX = -0.300; out.tLZ = -0.120; out.sLX = 0.120; out.ftLX = -0.180
      out.tRX = 0.170; out.tRZ = 0.190; out.sRX = 0.060; out.ftRX = 0.060
      out.aLX = 0.420; out.aLY = 0.180; out.aLZ = 0.330; out.fLX = -0.400
      out.aRX = -0.150; out.aRY = 0.520; out.aRZ = 0.360; out.fRX = -1.150
    } else {
      // Coat flare — arms sweep back and open, chest lifted, coat thrown wide.
      out.rootY = 0.020
      out.pelRZ = -0.120; out.pelRY = 0.070; out.pelRX = 0.04
      out.chRX = -0.190; out.chRY = 0.100; out.chRZ = 0.060
      out.hdRX = -0.150; out.hdRY = -0.070
      out.tLX = -0.230; out.tLZ = -0.190; out.sLX = 0.060; out.ftLX = -0.120
      out.tRX = 0.140; out.tRZ = 0.200; out.sRX = 0.180; out.ftRX = 0.140
      out.aLX = 0.560; out.aLY = -0.220; out.aLZ = 0.760; out.fLX = -0.280
      out.aRX = 0.560; out.aRY = 0.220; out.aRZ = -0.760; out.fRX = -0.280
    }
  }

  // During the sole measurement the root offset is not known yet, so the root
  // rides at rootY alone and the measured minimum IS the offset.
  let measuring = false
  let SOLE_OFFSET = 0

  function applyChannels(o) {
    group.position.y = (measuring ? 0 : GROUND_Y - SOLE_OFFSET) + o.rootY
    pelvis.position.x = o.rootX
    pelvis.rotation.set(o.pelRX, o.pelRY, o.pelRZ)
    chest.rotation.set(o.chRX, o.chRY, o.chRZ)
    neck.rotation.set(o.hdRX * 0.35, o.hdRY * 0.30, o.hdRZ * 0.30)
    head.rotation.set(o.hdRX * 0.65, o.hdRY * 0.70, o.hdRZ * 0.70)

    armL.shoulder.rotation.set(o.aLX, o.aLY, o.aLZ)
    armL.elbow.rotation.x = o.fLX
    armR.shoulder.rotation.set(o.aRX, o.aRY, o.aRZ)
    armR.elbow.rotation.x = o.fRX

    legL.thigh.rotation.set(o.tLX, o.tLY, o.tLZ)
    legL.shin.rotation.x = o.sLX
    legL.foot.rotation.x = o.ftLX
    legR.thigh.rotation.set(o.tRX, o.tRY, o.tRZ)
    legR.shin.rotation.x = o.sRX
    legR.foot.rotation.x = o.ftRX
  }

  /* ---------------------------------------------------------- state machine */
  const OMEGA = 5.9                     // rad/s → ~1.07 s per stride
  let phase = 0
  let isWalking = true
  let poseName = null
  let poseT = 0
  let poseW = 0
  const ATTACK = 0.26, HOLD = 1.05, RELEASE = 0.55
  const easeOut = t => 1 - Math.pow(1 - t, 3)
  const easeInOut = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

  /**
   * Measured, never eyeballed. Sweep the whole stride, take a Box3 over both
   * shoe groups, and the deepest point of the cycle IS the root offset — so the
   * heel tip kisses the deck at y = GROUND_Y instead of sinking through it. If
   * the shoe or the skeleton changes, this re-derives itself.
   */
  ;(function measureSole() {
    measuring = true
    const box = new THREE.Box3()
    const tmp = zeroed()
    let lowest = Infinity
    for (let i = 0; i < 48; i++) {
      walkChannels((i / 48) * Math.PI * 2, tmp)
      applyChannels(tmp)
      group.updateMatrixWorld(true)
      box.setFromObject(legL.foot); lowest = Math.min(lowest, box.min.y)
      box.setFromObject(legR.foot); lowest = Math.min(lowest, box.min.y)
    }
    measuring = false
    SOLE_OFFSET = lowest
  })()

  group.position.set(0.68, GROUND_Y - SOLE_OFFSET, RUNWAY_START_Z)

  // Settle before anything is drawn, so the first frame is hung cloth and never
  // a cylinder caught mid-fall.
  walkChannels(0, W)
  applyChannels(W)
  refreshFrames()
  for (let i = 0; i < 420; i++) stepCloth(1 / 120)

  return {
    group,
    torsoGroup: chest,
    coat: clothMesh,
    get z() { return group.position.z },
    get isAtPit() { return Math.abs(group.position.z - RUNWAY_PIT_Z) < 0.25 },

    setWalking(walk) { isWalking = walk },

    /**
     * Dress the model. The wardrobe passes a colourway from the real collection,
     * so what you see on the runway is a style record, not a dress-up asset.
     *
     * @param {{coat?:string, knit?:string, shoe?:string, coatVisible?:boolean}} look
     */
    setLook(look = {}) {
      if (look.coat !== undefined) {
        shell.color.set(look.coat)
        // Lining reads as the same cloth turned over: darker, a touch warmer.
        lining.color.set(look.coat)
        lining.color.offsetHSL(0.012, 0.04, -0.20)
        // Sheen tracks the shell so a backlit silhouette keeps its fuzz halo (§5)
        // instead of fringing in the previous colourway. Warm, per §5.
        shell.sheenColor.set(look.coat)
        shell.sheenColor.offsetHSL(-0.02, -0.10, 0.20)
      }
      if (look.knit !== undefined) knit.color.set(look.knit)
      if (look.shoe !== undefined) patent.color.set(look.shoe)
      if (look.coatVisible !== undefined) {
        clothMesh.visible = look.coatVisible
        clothBack.visible = look.coatVisible
        coatGroup.visible = look.coatVisible
        for (const m of coatParts) m.visible = look.coatVisible
      }
    },

    /** Accepts 'A' | 'poseA' | 'a' — runway-main and the capture harness disagree. */
    strikePose(name) {
      const k = String(name || '').replace(/^pose/i, '').toUpperCase()
      poseName = k === 'B' || k === 'C' ? k : 'A'
      poseT = 0
      if (poseName === 'C') flare(0.048)
    },

    update(dt) {
      const step = Math.min(dt, 1 / 30)

      // A pose arrests the walk: attack, hold, then ease back out and carry on.
      let travel = isWalking
      if (poseName) {
        poseT += step
        if (poseT < ATTACK) { poseW = easeOut(poseT / ATTACK); travel = false }
        else if (poseT < ATTACK + HOLD) { poseW = 1; travel = false }
        else if (poseT < ATTACK + HOLD + RELEASE) {
          poseW = 1 - easeInOut((poseT - ATTACK - HOLD) / RELEASE)
        } else { poseName = null; poseW = 0 }
      }

      if (travel) {
        group.position.z = Math.min(group.position.z + WALK_SPEED * step, RUNWAY_PIT_Z)
        phase = (phase + step * OMEGA) % (Math.PI * 2)
      }

      walkChannels(phase, W)
      if (poseW > 0) {
        poseChannels(poseName || 'A', P)
        for (let i = 0; i < CH.length; i++) {
          const k = CH[i]
          O[k] = W[k] + (P[k] - W[k]) * poseW
        }
      } else {
        for (let i = 0; i < CH.length; i++) O[CH[i]] = W[CH[i]]
      }
      applyChannels(O)

      // Cloth forcing: drag from walking through still air, plus the pseudo-force
      // of the pelvic bounce, which pumps the hem once per step. Kept low — at
      // the old value the skirt was blown horizontal and read as a torn flag.
      const v = travel ? WALK_SPEED : 0
      airDrag = v * v * 0.62
      bobAcc = travel ? Math.cos(phase * 2) * 0.021 * (2 * OMEGA) * (2 * OMEGA) * 0.35 : 0

      refreshFrames()
      stepCloth(step)
    },

    resetPosition() {
      group.position.z = RUNWAY_START_Z
      poseName = null
      poseW = 0
      isWalking = true
    },
  }
}
