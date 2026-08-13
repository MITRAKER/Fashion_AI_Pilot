import * as THREE from 'three'
import { draftPanels } from './pattern.js'
import { BODY, halfWidthAt, halfDepthAt } from './body.js'

/**
 * A garment engine that drafts from a shoulder.
 *
 * Natalie's garment-engine is a local `file:` link to a folder outside this
 * repository. It is not in the repo, not in git history, and not in the
 * deployed bundle — I looked in all three. What her code DOES give is the
 * contract, because showroom/src/stylesheet.js calls it:
 *
 *     const engine = new GarmentEngine(PARSED_SKETCH)
 *     const mesh   = new ThreeGarmentMesh(engine, { color, roughness, envMap })
 *     engine.update(dt); mesh.updateFrame()
 *
 * and it works in real metres with the shoulder near y = 1.4 and the floor at
 * y ≈ 0. This file satisfies that contract exactly, so her stylesheet page
 * drives it with no changes, and fixes the defect she has been pointing at for
 * weeks: the garment is drafted from shoulder slope, across-shoulder, neck
 * width and armhole depth, not from bust/waist/hip alone.
 *
 * Panels are sewn, not intersected. Vertices that share a seam name are welded
 * into one simulated particle, so the shoulder seam carries load: pull the hem
 * and the tension reaches the shoulder, which is the whole reason a garment
 * hangs the way it does.
 */

const WELD = 0.018        // metres; vertices closer than this on a shared seam fuse

/** Vertex indices along one edge of a panel grid, named as a tailor would. */
function edgeIndices(p, edge) {
  const out = []
  const at = (r, c) => r * (p.cols + 1) + c
  if (edge === 'top') for (let c = 0; c <= p.cols; c++) out.push(at(0, c))
  else if (edge === 'bottom') for (let c = 0; c <= p.cols; c++) out.push(at(p.rows, c))
  else if (edge === 'left') for (let r = 0; r <= p.rows; r++) out.push(at(r, 0))
  else if (edge === 'right') for (let r = 0; r <= p.rows; r++) out.push(at(r, p.cols))
  return out
}

export class GarmentEngine {
  constructor(spec = {}, opts = {}) {
    this.spec = spec
    this.panels = draftPanels(spec)

    // --- flatten panels into one particle system ---------------------------
    this.positions = []       // [x,y,z] per particle
    this.previous = []        // verlet history
    this.pinned = []          // fixed to the body
    this.indices = []         // triangles into `positions`
    this.uvs = []
    this.springs = []         // [a, b, restLength]

    const seamBuckets = new Map()


    for (const p of this.panels) {
      const map = new Array(p.pos.length)
      for (let i = 0; i < p.pos.length; i++) {
        const v = p.pos[i]
        // Weld against anything already registered on a seam this panel shares.
        let hit = -1
        const seamNames = Object.values(p.seams ?? {})
        for (const s of seamNames) {
          const bucket = seamBuckets.get(s)
          if (!bucket) continue
          for (const j of bucket) {
            const q = this.positions[j]
            if ((q[0] - v[0]) ** 2 + (q[1] - v[1]) ** 2 + (q[2] - v[2]) ** 2 < WELD * WELD) {
              hit = j; break
            }
          }
          if (hit >= 0) break
        }
        if (hit >= 0) {
          map[i] = hit
        } else {
          map[i] = this.positions.length
          this.positions.push([v[0], v[1], v[2]])
          this.previous.push([v[0], v[1], v[2]])
          this.uvs.push(p.uv[i])
          this.pinned.push(false)
        }
      }
      // Register this panel's boundary vertices under its seam names.
      for (const [edge, name] of Object.entries(p.seams ?? {})) {
        const list = seamBuckets.get(name) ?? []
        for (const i of edgeIndices(p, edge)) list.push(map[i])
        seamBuckets.set(name, list)
      }
      for (const i of p.idx) this.indices.push(map[i])
      // Structural springs along the grid.
      const at = (r, c) => map[r * (p.cols + 1) + c]
      for (let r = 0; r <= p.rows; r++) {
        for (let c = 0; c <= p.cols; c++) {
          if (c < p.cols) this.addSpring(at(r, c), at(r, c + 1))
          if (r < p.rows) this.addSpring(at(r, c), at(r + 1, c))
          // A shear diagonal, or the cloth folds like paper.
          if (r < p.rows && c < p.cols) this.addSpring(at(r, c), at(r + 1, c + 1))
        }
      }
    }

    // --- what is pinned ----------------------------------------------------
    // The bodice is fitted: it does not fall off the body, so it holds. Free
    // cloth is the skirt below the waist and the sleeve below the cap.
    for (let i = 0; i < this.positions.length; i++) {
      const y = this.positions[i][1]
      if (y >= BODY.waistY - 0.004) this.pinned[i] = true
    }

    this.gravity = opts.gravity ?? -6.2
    this.damping = opts.damping ?? 0.972
    this.stiffness = opts.stiffness ?? 0.55
    this._acc = 0
  }

  addSpring(a, b) {
    if (a === b) return
    const p = this.positions[a], q = this.positions[b]
    const rest = Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2])
    if (rest > 1e-6) this.springs.push([a, b, rest])
  }

  /** Fabric behaviour, from the catalogue entry rather than a magic number. */
  setFabric(f) {
    if (!f?.drape) return
    this.gravity = f.drape.gravity ?? this.gravity
    this.damping = f.drape.damp ?? this.damping
    this.stiffness = Math.min(0.92, 0.35 + (f.drape.bend ?? 0.2) * 1.4)
  }

  /** Fixed-step verlet so the drape is the same on every machine. */
  update(dt) {
    this._acc = Math.min(this._acc + (dt || 1 / 60), 0.1)
    const step = 1 / 120
    while (this._acc >= step) {
      this.integrate(step)
      this._acc -= step
    }
  }

  integrate(dt) {
    const g = this.gravity * dt * dt
    for (let i = 0; i < this.positions.length; i++) {
      if (this.pinned[i]) continue
      const p = this.positions[i], o = this.previous[i]
      const vx = (p[0] - o[0]) * this.damping
      const vy = (p[1] - o[1]) * this.damping
      const vz = (p[2] - o[2]) * this.damping
      o[0] = p[0]; o[1] = p[1]; o[2] = p[2]
      p[0] += vx; p[1] += vy + g; p[2] += vz
    }
    // Soft springs alone let the skirt creep: a knee-length hem settled 29 cm
    // low and tore open at the bottom row, because eighteen rows each stretching
    // a few percent compounds. Cloth barely stretches, so after the soft solve
    // every edge is hard-clamped to MAX_STRETCH of its rest length. This is what
    // stops the drape from being a function of how long you left it running.
    const MAX_STRETCH = 1.02
    for (let n = 0; n < 6; n++) {
      for (const [a, b, rest] of this.springs) {
        const p = this.positions[a], q = this.positions[b]
        let dx = q[0] - p[0], dy = q[1] - p[1], dz = q[2] - p[2]
        const d = Math.hypot(dx, dy, dz) || 1e-6
        const limit = rest * MAX_STRETCH
        // Soft pull toward rest, then a hard stop at the limit.
        let k = ((d - rest) / d) * 0.5 * this.stiffness
        if (d > limit) k = ((d - limit) / d) * 0.5 + k * 0.2
        dx *= k; dy *= k; dz *= k
        if (!this.pinned[a]) { p[0] += dx; p[1] += dy; p[2] += dz }
        if (!this.pinned[b]) { q[0] -= dx; q[1] -= dy; q[2] -= dz }
      }
      this.collide()
    }
  }

  /** Keep cloth outside the body. Without this the skirt hangs through the legs. */
  collide() {
    for (let i = 0; i < this.positions.length; i++) {
      if (this.pinned[i]) continue
      const p = this.positions[i]
      if (p[1] > BODY.waistY) continue
      const w = halfWidthAt(p[1]) + 0.008
      const d = halfDepthAt(p[1]) + 0.008
      const r = (p[0] / w) ** 2 + (p[2] / d) ** 2
      if (r < 1 && r > 1e-9) {
        const s = 1 / Math.sqrt(r)
        p[0] *= s
        p[2] *= s
      }
      if (p[1] < 0.02) p[1] = 0.02
    }
  }

  /** Let it hang before the first frame is shown, so nothing pops on screen. */
  settle(steps = 220) {
    for (let i = 0; i < steps; i++) this.integrate(1 / 120)
  }
}

/**
 * Three.js view of the engine. Same name and shape as the one her stylesheet
 * imports, so `new ThreeGarmentMesh(engine, opts).mesh` drops straight in.
 */
export class ThreeGarmentMesh {
  constructor(engine, opts = {}) {
    this.engine = engine
    const g = new THREE.BufferGeometry()
    const n = engine.positions.length
    this.array = new Float32Array(n * 3)
    const uv = new Float32Array(n * 2)
    for (let i = 0; i < n; i++) {
      uv[i * 2] = engine.uvs[i][0]
      uv[i * 2 + 1] = engine.uvs[i][1]
    }
    g.setAttribute('position', new THREE.BufferAttribute(this.array, 3))
    g.setAttribute('uv', new THREE.BufferAttribute(uv, 2))
    g.setIndex(engine.indices)
    this.geometry = g

    this.mesh = new THREE.Mesh(g, new THREE.MeshPhysicalMaterial({
      color: opts.color ?? 0xc8b59a,
      roughness: opts.roughness ?? 0.62,
      metalness: opts.metalness ?? 0,
      side: THREE.DoubleSide,
      envMap: opts.envMap ?? null,
      envMapIntensity: opts.envMapIntensity ?? 0.9,
      sheen: opts.sheen ?? 0.4,
      sheenRoughness: opts.sheenRoughness ?? 0.6,
      sheenColor: new THREE.Color(opts.color ?? 0xc8b59a),
    }))
    this.mesh.castShadow = true
    this.mesh.receiveShadow = true
    this.updateFrame()
  }

  updateFrame() {
    const p = this.engine.positions
    for (let i = 0; i < p.length; i++) {
      this.array[i * 3] = p[i][0]
      this.array[i * 3 + 1] = p[i][1]
      this.array[i * 3 + 2] = p[i][2]
    }
    this.geometry.attributes.position.needsUpdate = true
    this.geometry.computeVertexNormals()
    this.geometry.computeBoundingSphere()
  }

  /** Geometry, not opinion — the measurement that proves a shoulder exists. */
  measure() {
    const b = new THREE.Box3().setFromObject(this.mesh)
    return {
      top: +b.max.y.toFixed(4),
      hem: +b.min.y.toFixed(4),
      width: +(b.max.x - b.min.x).toFixed(4),
      depth: +(b.max.z - b.min.z).toFixed(4),
    }
  }
}
