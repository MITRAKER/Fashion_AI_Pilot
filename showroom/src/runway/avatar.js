import * as THREE from 'three'

/**
 * OWNED BY: character & costume agent. See ART-DIRECTION §5 (materials), §7 (cloth).
 *
 * A dressed fashion figure walking a catwalk.
 *
 *   proportion  — 9-head croquis. The extra length is taken BELOW the knee
 *                 (shin 1.28× the thigh) and in the heel, never in the torso.
 *   costume     — camel wool trench: tailored yoke, stand collar, notched revers,
 *                 set-in sleeves and a leather belt are rigid and ride the
 *                 skeleton; everything from the bust down is a Verlet-solved
 *                 skirt that hangs off the yoke ring, is cinched at the waist and
 *                 collides with the torso and BOTH legs. The legs driving the hem
 *                 is what makes the coat move *with* the walk instead of near it.
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

/** Revolved section. Profiles run top → bottom in the object's own space, which
 *  is why every joint origin is the anatomical joint centre. */
function lathe(profile, mat, seg = 32, zSquash = 1, phiStart = 0, phiLength = Math.PI * 2) {
  const pts = profile.map(([r, y]) => new THREE.Vector2(Math.max(r, 0.0004), y))
  const g = new THREE.LatheGeometry(pts, seg, phiStart, phiLength)
  if (zSquash !== 1) g.scale(1, 1, zSquash)
  g.computeVertexNormals()
  const m = new THREE.Mesh(g, mat)
  m.castShadow = true
  m.receiveShadow = true
  return m
}

function ellipsoid(rx, ry, rz, mat, seg = 26) {
  const g = new THREE.SphereGeometry(1, seg, Math.max(14, seg - 8))
  g.scale(rx, ry, rz)
  const m = new THREE.Mesh(g, mat)
  m.castShadow = true
  return m
}

/** Quad strip from a grid of points — used for the lapels, which need a roll line. */
function panel(rows, mat) {
  const cols = rows[0].length
  const verts = []
  const tris = []
  for (let r = 0; r < rows.length; r++) {
    for (let c = 0; c < cols; c++) verts.push(...rows[r][c])
  }
  for (let r = 0; r < rows.length - 1; r++) {
    for (let c = 0; c < cols - 1; c++) {
      const a = r * cols + c, b = a + 1, d = a + cols, e = d + 1
      tris.push(a, d, b, b, d, e)
    }
  }
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3))
  g.setIndex(tris)
  g.computeVertexNormals()
  const m = new THREE.Mesh(g, mat)
  m.castShadow = true
  return m
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

  // Camel wool gabardine. Sheen high with a warm sheenColor so a backlit
  // silhouette picks up the fuzz halo — the thing that makes cloth read as cloth.
  const wool = new THREE.MeshPhysicalMaterial({
    color: 0xc8a57e,
    envMap,
    envMapIntensity: 0.75,
    metalness: 0.0,
    roughness: 0.86,
    side: THREE.DoubleSide,
    normalMap: fibre,
  })
  wool.normalScale = new THREE.Vector2(0.45, 0.45)
  wool.sheen = 1.0
  wool.sheenRoughness = 0.30
  wool.sheenColor = new THREE.Color(0xe4cdae)

  // Under-layer: fine dark knit. Warm taupe rather than black so the leg line
  // still reads, and matte enough that it never picks up a plastic highlight.
  const knit = new THREE.MeshPhysicalMaterial({
    color: 0x453c33,
    envMap,
    envMapIntensity: 0.40,
    metalness: 0.0,
    roughness: 0.95,
    normalMap: fibre,
  })
  knit.normalScale = new THREE.Vector2(0.30, 0.30)
  knit.sheen = 0.85
  knit.sheenRoughness = 0.45
  // Warm sheen: §5 requires the fuzz halo along a backlit silhouette.
  knit.sheenColor = new THREE.Color(0xb69a7c)

  const skin = new THREE.MeshPhysicalMaterial({
    color: 0xd2b393,
    envMap,
    envMapIntensity: 0.55,
    metalness: 0.0,
    roughness: 0.62,
    clearcoat: 0.12,
    clearcoatRoughness: 0.5,
  })
  skin.sheen = 0.2
  skin.sheenRoughness = 0.7
  skin.sheenColor = new THREE.Color(0xffd0ae)

  const hairMat = new THREE.MeshPhysicalMaterial({
    color: 0x1b1410,
    envMap,
    envMapIntensity: 0.8,
    metalness: 0.0,
    roughness: 0.42,
    clearcoat: 0.4,
    clearcoatRoughness: 0.24,
  })
  hairMat.anisotropy = 0.7
  hairMat.anisotropyRotation = Math.PI / 2

  const leather = new THREE.MeshPhysicalMaterial({
    color: 0x120f0d,
    envMap,
    envMapIntensity: 0.9,
    metalness: 0.05,
    roughness: 0.34,
    clearcoat: 0.55,
    clearcoatRoughness: 0.16,
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

  /* ------------------------------------------------------------ neck & head */
  neck.add(lathe([
    [0.038, 0.112], [0.040, 0.062], [0.046, 0.010], [0.058, -0.028],
  ], skin, 26, 0.92))

  const headGeo = new THREE.SphereGeometry(1, 40, 28)
  headGeo.scale(0.070, 0.103, 0.086)
  {
    const p = headGeo.attributes.position
    for (let i = 0; i < p.count; i++) {
      const y = p.getY(i)
      if (y < 0) {                       // taper the jaw so it is not a ball
        const k = 1 + (y / 0.103) * 0.34
        p.setX(i, p.getX(i) * k)
        p.setZ(i, p.getZ(i) * (k * 0.94 + 0.06))
      }
    }
    headGeo.computeVertexNormals()
  }
  const skull = new THREE.Mesh(headGeo, skin)
  skull.position.y = 0.104
  skull.castShadow = true
  head.add(skull)

  // Nose ridge — tiny, but it is the difference between a head and an egg.
  const nose = ellipsoid(0.0115, 0.030, 0.020, skin, 16)
  nose.position.set(0, 0.088, 0.074)
  nose.rotation.x = 0.30
  head.add(nose)

  // Hair: slick crown cap, mass at the back of the skull, low chignon at the nape.
  const crown = new THREE.Mesh(
    new THREE.SphereGeometry(1, 40, 26, 0, Math.PI * 2, 0, Math.PI * 0.60), hairMat)
  crown.scale.set(0.0785, 0.1145, 0.0985)
  crown.position.set(0, 0.104, -0.005)
  crown.castShadow = true
  head.add(crown)

  const nape = ellipsoid(0.0715, 0.088, 0.072, hairMat, 24)
  nape.position.set(0, 0.070, -0.048)
  head.add(nape)

  const bun = ellipsoid(0.048, 0.040, 0.045, hairMat, 22)
  bun.position.set(0, 0.028, -0.090)
  head.add(bun)

  /* ---------------------------------------------------------------- arms */
  function buildArm(side) {
    const shoulder = new THREE.Group()
    shoulder.position.set(SHOULDER_HALF * side, Y_SHOULDER - Y_WAIST, 0)
    chest.add(shoulder)

    shoulder.add(lathe([
      [0.012, 0.048], [0.046, 0.020], [0.050, -0.040], [0.045, -0.150],
      [0.038, -0.270], [0.033, -0.298], [0.010, -0.304],
    ], knit, 24))

    // Set-in sleeve with a rounded head that swallows the yoke's shoulder line,
    // so the arm never separates from the coat.
    shoulder.add(lathe([
      [0.004, 0.068], [0.032, 0.058], [0.064, 0.038], [0.083, 0.006],
      [0.087, -0.048], [0.080, -0.132], [0.072, -0.232], [0.069, -0.300],
    ], wool, 30))

    const elbow = new THREE.Group()
    elbow.position.y = -UPPERARM_LEN
    shoulder.add(elbow)

    elbow.add(lathe([
      [0.010, 0.030], [0.038, 0.010], [0.040, -0.045], [0.034, -0.135],
      [0.027, -0.220], [0.023, -0.252], [0.008, -0.258],
    ], knit, 24))

    elbow.add(lathe([
      [0.068, 0.014], [0.063, -0.060], [0.056, -0.160], [0.052, -0.236],
      [0.058, -0.254], [0.051, -0.264],
    ], wool, 30))

    const hand = new THREE.Group()
    hand.position.y = -FOREARM_LEN
    elbow.add(hand)
    const palm = ellipsoid(0.019, 0.047, 0.011, skin, 18)
    palm.position.y = -0.050
    palm.rotation.z = -0.10 * side
    hand.add(palm)

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
      [0.083, -0.120], [0.074, -0.220], [0.063, -0.320], [0.055, -0.392],
      [0.038, -0.406], [0.006, -0.412],
    ], knit, 28, 0.95))

    const shin = new THREE.Group()
    shin.position.y = -THIGH_LEN
    thigh.add(shin)

    // Calf belly high and full, then a long clean taper to a fine ankle: this
    // line is what reads as fashion-figure length.
    shin.add(lathe([
      [0.006, 0.058], [0.040, 0.048], [0.054, 0.020], [0.057, -0.022],
      [0.062, -0.140], [0.057, -0.235], [0.045, -0.345], [0.034, -0.445],
      [0.029, -0.505], [0.014, -0.514], [0.004, -0.518],
    ], knit, 28, 0.94))

    const foot = new THREE.Group()
    foot.position.y = -SHIN_LEN
    shin.add(foot)

    // Stiletto pump. The 32° plantarflexion of the last is baked into the mesh,
    // so foot.rotation.x = 0 already means "standing in heels".
    const vamp = ellipsoid(0.037, 0.032, 0.108, patent, 24)
    vamp.rotation.x = 0.55
    vamp.position.set(0, -0.072, 0.022)
    foot.add(vamp)

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
  const COLS = 48
  const ROWS = 32
  const RING_Y = 0.180                      // chest-local; world 1.438 (bust line)
  const RING_R = 0.192
  const Z_SQ = 0.72
  const HEM_Y = 0.50                        // world — just below the knee
  const LENGTH = (Y_WAIST + RING_Y) - HEM_Y
  const OPEN_MAX = 1.22                     // radians of front gap at the hem

  /** Front opening: shut through the chest and waist, sweeping open below. */
  const gapAt = rt => OPEN_MAX * smooth01((rt - 0.17) / 0.55)

  // --- rigid tailoring, carried by the chest -------------------------------
  chest.add(lathe([
    [0.068, 0.352], [0.098, 0.336], [0.134, 0.318], [0.166, 0.298],
    [0.177, 0.274], [0.185, 0.240], [0.190, 0.204], [RING_R, RING_Y],
  ], wool, 44, Z_SQ))

  chest.add(lathe([
    [0.104, 0.432], [0.094, 0.404], [0.082, 0.372], [0.072, 0.352],
  ], wool, 34, 0.86, 0.72, Math.PI * 2 - 1.44))

  for (const s of [1, -1]) {
    chest.add(panel([
      [[0.024 * s, 0.348, 0.098], [0.084 * s, 0.336, 0.112], [0.148 * s, 0.316, 0.088]],
      [[0.024 * s, 0.250, 0.126], [0.086 * s, 0.246, 0.140], [0.140 * s, 0.252, 0.112]],
      [[0.022 * s, 0.150, 0.142], [0.064 * s, 0.166, 0.152], [0.100 * s, 0.198, 0.134]],
    ], wool))
  }

  const belt = lathe([
    [0.206, 0.030], [0.213, 0.008], [0.213, -0.014], [0.204, -0.034],
  ], leather, 40, Z_SQ, 0.58, Math.PI * 2 - 1.16)
  chest.add(belt)

  for (const s of [1, -1]) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.019, 0.0042, 8, 20), goldMat)
    ring.position.set(0.113 * s, -0.002, 0.128)
    ring.rotation.set(Math.PI / 2, 0, 0.5 * s)
    chest.add(ring)
  }

  // --- solved skirt --------------------------------------------------------
  const clothGeo = new THREE.PlaneGeometry(1, 1, COLS - 1, ROWS - 1)
  const cpos = clothGeo.attributes.position
  const N = cpos.count
  const cur = new Float32Array(N * 3)
  const prev = new Float32Array(N * 3)
  const pinned = new Uint8Array(N)
  const pinTarget = new Float32Array(N * 3)
  const rowT = new Float32Array(ROWS)
  const idx = (r, c) => r * COLS + c

  for (let r = 0; r < ROWS; r++) {
    const rt = r / (ROWS - 1)
    rowT[r] = rt
    const gap = gapAt(rt)
    const span = Math.PI * 2 - gap
    for (let c = 0; c < COLS; c++) {
      const i = idx(r, c)
      const a = gap / 2 + (c / (COLS - 1)) * span
      // Broad, low-frequency fold allowance. A perfectly even ring relaxes into
      // a cone; a high-frequency seed turns into permanent accordion tatters.
      const fold = Math.sin(c * 0.52) * 0.010 + Math.sin(c * 0.19 + 1.1) * 0.014
      const rad = RING_R + rt * 0.212 + fold * rt
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
      if (r + 2 < ROWS) link(idx(r, c), idx(r + 2, c), 0.22)   // bend
      if (c + 2 < COLS) link(idx(r, c), idx(r, c + 2), 0.18)
    }
  }
  const CN = con.length / 4

  const clothMesh = new THREE.Mesh(clothGeo, wool)
  clothMesh.castShadow = true
  clothMesh.receiveShadow = true
  clothMesh.frustumCulled = false
  group.add(clothMesh)

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

  function pushEllipse(o, toLocal, toWorld, prof, gapOut) {
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
  function pushCapsule(o, a, b, rad) {
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
  }

  /* ------------------------------------------------------------- solver */
  const GRAVITY = -7.2
  const DAMP = 0.972
  const ITER = 5
  const HIP_ROW = Math.floor(ROWS * 0.30)
  // Radius ceiling per row: tight through the belt, free everywhere else.
  const cinchR = new Float32Array(ROWS)
  for (let r = 0; r < ROWS; r++) {
    const k = Math.min(1, Math.abs(rowT[r] - 0.205) / 0.135)
    cinchR[r] = rowT[r] > 0.36 ? 99 : 0.181 + 0.16 * k * k
  }

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

    for (let i = COLS; i < N; i++) {
      const o = i * 3
      const rt = rowT[(i / COLS) | 0]
      const breeze = Math.sin(simTime * 1.7 + i * 0.021) * 0.10 * rt
      const vx = (cur[o] - prev[o]) * DAMP
      const vy = (cur[o + 1] - prev[o + 1]) * DAMP
      const vz = (cur[o + 2] - prev[o + 2]) * DAMP
      prev[o] = cur[o]; prev[o + 1] = cur[o + 1]; prev[o + 2] = cur[o + 2]
      cur[o] += vx + breeze * h2 * 6
      cur[o + 1] += vy + (GRAVITY + bobAcc) * h2
      cur[o + 2] += vz - airDrag * rt * h2
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

      for (let i = COLS; i < N; i++) {
        const o = i * 3
        const row = (i / COLS) | 0
        if (row < HIP_ROW + 4) {
          pushEllipse(o, groupToChest, chestToGroup, CHEST_PROF, 0.024)
          pushEllipse(o, groupToPelvis, pelvisToGroup, PELV_PROF, 0.026)
        }
        if (cinchR[row] < 90) cinch(o, cinchR[row])
        if (row >= HIP_ROW) {
          pushCapsule(o, J.hipL, J.kneeL, 0.104)
          pushCapsule(o, J.hipR, J.kneeR, 0.104)
          pushCapsule(o, J.kneeL, J.ankL, 0.070)
          pushCapsule(o, J.kneeR, J.ankR, 0.070)
        }
      }
    }

    // Hard stretch ceiling. Wool does not grow 40% under its own weight, and a
    // stretched grid is what turns a hem into tatters.
    for (let n = 0; n < STRUCT; n++) {
      const b4 = n * 4
      const a = con[b4], b = con[b4 + 1], rest = con[b4 + 2] * 1.06
      const ao = a * 3, bo = b * 3
      const dx = cur[bo] - cur[ao], dy = cur[bo + 1] - cur[ao + 1], dz = cur[bo + 2] - cur[ao + 2]
      const d = Math.hypot(dx, dy, dz)
      if (d <= rest || d < 1e-6) continue
      const f = ((d - rest) / d) * 0.5
      const mx = dx * f, my = dy * f, mz = dz * f
      if (!pinned[a]) { cur[ao] += mx; cur[ao + 1] += my; cur[ao + 2] += mz }
      if (!pinned[b]) { cur[bo] -= mx; cur[bo + 1] -= my; cur[bo + 2] -= mz }
    }

    for (let i = 0; i < N; i++) cpos.setXYZ(i, cur[i * 3], cur[i * 3 + 1], cur[i * 3 + 2])
    cpos.needsUpdate = true
    clothGeo.computeVertexNormals()
    clothGeo.computeBoundingSphere()
  }

  /** Impulse into the lower coat — the flare pose throws it open. */
  function flare(power) {
    const from = Math.floor(ROWS * 0.38)
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

  function applyChannels(o) {
    group.position.y = GROUND_Y - SOLE_OFFSET + o.rootY
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

  // Measured, not eyeballed: Box3 over the rigged figure put the lowest geometry
  // 0.0622 above the root, so setting the root to deck level left her hovering.
  // The heel tip is the contact point, so the root drops by that measured gap.
  const SOLE_OFFSET = 0.0622
  group.position.set(0.68, GROUND_Y - SOLE_OFFSET, RUNWAY_START_Z)

  // Settle before anything is drawn, so the first frame is hung cloth and never
  // a cylinder caught mid-fall.
  walkChannels(0, W)
  applyChannels(W)
  refreshFrames()
  for (let i = 0; i < 340; i++) stepCloth(1 / 120)

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
      if (look.coat !== undefined) wool.color.set(look.coat)
      if (look.knit !== undefined) knit.color.set(look.knit)
      if (look.shoe !== undefined) patent.color.set(look.shoe)
      if (look.coatVisible !== undefined) clothMesh.visible = look.coatVisible
      // Sheen tracks the shell so a backlit silhouette keeps its fuzz halo (§5)
      // instead of fringing in the previous colourway.
      if (look.coat !== undefined) {
        wool.sheenColor.set(look.coat)
        wool.sheenColor.offsetHSL(0, -0.12, 0.22)
      }
    },

    /** Accepts 'A' | 'poseA' | 'a' — runway-main and the capture harness disagree. */
    strikePose(name) {
      const k = String(name || '').replace(/^pose/i, '').toUpperCase()
      poseName = k === 'B' || k === 'C' ? k : 'A'
      poseT = 0
      if (poseName === 'C') flare(0.055)
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
      // of the pelvic bounce, which pumps the hem once per step.
      const v = travel ? WALK_SPEED : 0
      airDrag = v * v * 2.6
      bobAcc = travel ? Math.cos(phase * 2) * 0.021 * (2 * OMEGA) * (2 * OMEGA) * 0.45 : 0

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
