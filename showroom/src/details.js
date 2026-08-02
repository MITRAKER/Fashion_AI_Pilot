import * as THREE from 'three'

/**
 * The detail library — numbered construction treatments, as in the reference
 * sheet: eight shoulder treatments, six bust treatments, drawn as a vocabulary a
 * designer picks from rather than a mood.
 *
 * Two rules this follows, and they are what stop it being a picture menu:
 *
 * 1. Every treatment BUILDS GEOMETRY. Choosing "cascade ruffle" adds a cascade,
 *    it does not swap a thumbnail. A library you cannot see on the body is a
 *    catalogue, not a tool.
 *
 * 2. Every treatment states its CONSTRUCTION and what it costs. A ruffle is not
 *    a look, it is a cut length, a gather ratio and an edge finish — and gather
 *    ratio is the number that decides whether it reads as soft or as bulk.
 *
 * Recommendation is driven by the measured source: hard-edged references get
 * structured treatments (scallop, pleat, architectural bow), soft-edged ones get
 * draped and gathered treatments. The reasoning is stated so it can be argued
 * with, per fashion-patternmaking: shaping is relocated, never removed.
 *
 * NOT production geometry. These are concept forms — a scallop here has no
 * seam allowance, no interlining, no grade rule.
 */

/* --------------------------------------------------------------- helpers */

/** A wavy band swept along a path — the basis of ruffles and cascades. */
function ruffleStrip(pts, { width = 0.06, waves = 7, amp = 0.022, seg = 90 }, mat) {
  const curve = new THREE.CatmullRomCurve3(pts)
  const g = new THREE.PlaneGeometry(1, 1, seg, 5)
  const pos = g.attributes.position
  const up = new THREE.Vector3(0, 1, 0)
  const t = new THREE.Vector3(), n = new THREE.Vector3(), b = new THREE.Vector3()
  const p = new THREE.Vector3()

  for (let i = 0; i <= seg; i++) {
    const u = i / seg
    curve.getPointAt(Math.min(u, 1), p)
    curve.getTangentAt(Math.min(u, 1), t).normalize()
    n.crossVectors(t, up).normalize()
    b.crossVectors(n, t).normalize()
    for (let j = 0; j <= 5; j++) {
      const v = j / 5
      // Flare and ripple grow toward the free edge: a gathered edge is longer
      // than the seam it hangs from, which is exactly what a gather ratio means.
      const ripple = Math.sin(u * Math.PI * 2 * waves) * amp * v
      const out = width * v
      const idx = j * (seg + 1) + i
      pos.setXYZ(idx,
        p.x + n.x * out + b.x * ripple,
        p.y + n.y * out + b.y * ripple - v * width * 0.55,
        p.z + n.z * out + b.z * ripple)
    }
  }
  pos.needsUpdate = true
  g.computeVertexNormals()
  const m = new THREE.Mesh(g, mat)
  m.castShadow = true
  return m
}

/** Repeated arc lobes along the bust line — a scalloped or shell edge. */
function scallopBand(radiusAt, y, mat, { lobes = 7, depth = 0.038 } = {}) {
  const group = new THREE.Group()
  const r = radiusAt(y)
  for (let i = 0; i < lobes; i++) {
    // Front arc only: a scallop reads across the bust, not around the back.
    const a = -Math.PI * 0.62 + (i / (lobes - 1)) * Math.PI * 1.24
    const lobe = new THREE.Mesh(
      new THREE.SphereGeometry(depth, 18, 12, 0, Math.PI * 2, 0, Math.PI * 0.55), mat)
    lobe.position.set(Math.cos(a) * r * 1.01, y, Math.sin(a) * r * 0.78 * 1.01)
    lobe.rotation.x = Math.PI
    lobe.scale.set(1, 0.62, 0.7)
    lobe.castShadow = true
    group.add(lobe)
  }
  return group
}

/* --------------------------------------------------------------- library */

export const SHOULDER = [
  {
    n: 1, name: 'Cascade ruffle',
    construction: 'Bias-cut strip, 2.5:1 gather, rolled hem, set into the shoulder seam.',
    note: 'The ruffle falls in a spiral because it is cut on the bias; cut straight it would break in flat pleats.',
    prefers: 'soft',
    build: (mat, ctx) => ruffleStrip([
      new THREE.Vector3(0.10, 0.66, 0.05), new THREE.Vector3(0.155, 0.60, 0.03),
      new THREE.Vector3(0.175, 0.50, -0.01), new THREE.Vector3(0.165, 0.40, -0.02),
    ], { width: 0.085, waves: 5, amp: 0.030 }, mat),
  },
  {
    n: 2, name: 'Shoulder bow',
    construction: 'Two loops and a knot in self fabric, interlined to hold the loop open.',
    note: 'Without interlining the loop collapses within an hour of wear.',
    prefers: 'structured',
    build: (mat) => {
      const g = new THREE.Group()
      for (const s of [1, -1]) {
        const loop = new THREE.Mesh(new THREE.TorusGeometry(0.055, 0.016, 10, 26), mat)
        loop.position.set(0.115 + s * 0.005, 0.655, s * 0.045)
        loop.rotation.set(Math.PI / 2, s * 0.5, 0.4)
        loop.scale.set(1, 1, 0.55)
        loop.castShadow = true
        g.add(loop)
      }
      const knot = new THREE.Mesh(new THREE.SphereGeometry(0.022, 16, 12), mat)
      knot.position.set(0.115, 0.655, 0)
      knot.scale.set(1, 0.8, 0.7)
      g.add(knot)
      return g
    },
  },
  {
    n: 3, name: 'One-shoulder drape',
    construction: 'Single width drawn from the opposite waist across the bust, gathered at one shoulder.',
    note: 'Asymmetry means the pattern is cut single-layer, not on the fold — twice the cloth and no mirror.',
    prefers: 'soft',
    build: (mat) => ruffleStrip([
      new THREE.Vector3(-0.135, 0.44, 0.06), new THREE.Vector3(-0.03, 0.53, 0.12),
      new THREE.Vector3(0.075, 0.60, 0.09), new THREE.Vector3(0.125, 0.655, 0.02),
    ], { width: 0.11, waves: 2.5, amp: 0.020 }, mat),
  },
  {
    n: 4, name: 'Puff sleeve',
    construction: 'Gathered head, 3:1 into the armhole, elasticated or banded at the bicep.',
    note: 'Volume lives in the sleeve head; the cap must be walked against the armhole or it will not set.',
    prefers: 'structured',
    build: (mat) => {
      const g = new THREE.Group()
      for (const s of [1, -1]) {
        const puff = new THREE.Mesh(new THREE.SphereGeometry(0.075, 22, 16), mat)
        puff.position.set(s * 0.145, 0.615, 0)
        puff.scale.set(0.85, 0.95, 0.8)
        puff.castShadow = true
        g.add(puff)
      }
      return g
    },
  },
  {
    n: 5, name: 'Off-shoulder band',
    construction: 'Horizontal band across both upper arms, boned at centre front to stop it riding.',
    note: 'Nothing holds this up but tension; the bodice below must take the load.',
    prefers: 'structured',
    build: (mat, ctx) => {
      const r = ctx.radiusAt(0.60)
      const band = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.16, r * 1.2, 0.055, 48, 1, true), mat)
      band.position.y = 0.60
      band.scale.z = 0.8
      band.castShadow = true
      return band
    },
  },
  {
    n: 6, name: 'Petal cap',
    construction: 'Overlapping shaped petals, faced and edge-stitched, set into the armhole.',
    note: 'Each petal is a separate pattern piece; the overlap order is a construction instruction, not a preference.',
    prefers: 'structured',
    build: (mat) => {
      const g = new THREE.Group()
      for (const s of [1, -1]) {
        for (let i = 0; i < 3; i++) {
          const petal = new THREE.Mesh(
            new THREE.SphereGeometry(0.055, 16, 10, 0, Math.PI, 0, Math.PI * 0.6), mat)
          petal.position.set(s * 0.14, 0.628 - i * 0.018, -0.02 + i * 0.022)
          petal.rotation.set(0.5 + i * 0.18, s > 0 ? -0.4 : 0.4 + Math.PI, 0)
          petal.scale.set(1, 0.5, 0.9)
          petal.castShadow = true
          g.add(petal)
        }
      }
      return g
    },
  },
  {
    n: 7, name: 'Draped cowl strap',
    construction: 'Bias loop falling from front to back shoulder, weighted at the low point.',
    note: 'Bias again — a cowl cut on straight grain hangs in creases instead of a curve.',
    prefers: 'soft',
    build: (mat) => ruffleStrip([
      new THREE.Vector3(0.075, 0.60, 0.085), new THREE.Vector3(0.125, 0.575, 0.02),
      new THREE.Vector3(0.13, 0.645, -0.05),
    ], { width: 0.05, waves: 1.5, amp: 0.026 }, mat),
  },
  {
    n: 8, name: 'Feathered collar',
    construction: 'Cut-pile or feather trim applied to a faced stand; trim is an external supplier line.',
    note: 'Goes outside the organisation, so supplier and estimated cost belong on the style sheet.',
    prefers: 'soft',
    build: (mat, ctx) => {
      const g = new THREE.Group()
      const r = ctx.radiusAt(0.60)
      for (let i = 0; i < 34; i++) {
        const a = -Math.PI * 0.75 + (i / 33) * Math.PI * 1.5
        const q = new THREE.Mesh(new THREE.ConeGeometry(0.014, 0.075, 6), mat)
        q.position.set(Math.cos(a) * r * 1.08, 0.615 + Math.sin(i * 1.7) * 0.012,
                       Math.sin(a) * r * 0.78 * 1.08)
        q.rotation.set(Math.PI * 0.42, 0, -a + Math.sin(i) * 0.3)
        q.castShadow = true
        g.add(q)
      }
      return g
    },
  },
]

export const BUST = [
  {
    n: 1, name: 'Scalloped edge',
    construction: 'Faced scallops, understitched, 7 lobes across the bust.',
    note: 'Each scallop is clipped at the curve or it will not turn out cleanly.',
    prefers: 'structured',
    build: (mat, ctx) => scallopBand(ctx.radiusAt, 0.548, mat, { lobes: 7, depth: 0.036 }),
  },
  {
    n: 2, name: 'Shell cups',
    construction: 'Moulded or seamed cups with radiating stitch lines, foam-backed.',
    note: 'A moulded cup is bought, not drafted — it constrains the size range to the supplier’s.',
    prefers: 'structured',
    build: (mat, ctx) => scallopBand(ctx.radiusAt, 0.545, mat, { lobes: 2, depth: 0.075 }),
  },
  {
    n: 3, name: 'Gathered sweetheart',
    construction: 'Softly gathered into a sweetheart line, 1.6:1, stay-taped to hold the curve.',
    note: 'Without a stay tape the gathered edge grows and the neckline drops.',
    prefers: 'soft',
    build: (mat) => ruffleStrip([
      new THREE.Vector3(-0.115, 0.548, 0.055), new THREE.Vector3(-0.045, 0.575, 0.10),
      new THREE.Vector3(0, 0.545, 0.115), new THREE.Vector3(0.045, 0.575, 0.10),
      new THREE.Vector3(0.115, 0.548, 0.055),
    ], { width: 0.045, waves: 6, amp: 0.014 }, mat),
  },
  {
    n: 4, name: 'Pleated panel',
    construction: 'Knife pleats, 12 mm, pressed and edge-stitched to the waist seam.',
    note: 'Pressed pleats need a stable fibre; they fall out of a fluid silk within a season.',
    prefers: 'structured',
    build: (mat, ctx) => {
      const g = new THREE.Group()
      const r = ctx.radiusAt(0.50)
      for (let i = 0; i < 11; i++) {
        const a = -Math.PI * 0.42 + (i / 10) * Math.PI * 0.84
        const pl = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.135, 0.016), mat)
        pl.position.set(Math.cos(a) * r * 1.02, 0.487, Math.sin(a) * r * 0.78 * 1.02)
        pl.rotation.y = -a
        pl.castShadow = true
        g.add(pl)
      }
      return g
    },
  },
]

/** Which treatments the measured source argues for, and why. */
export function recommend(analysis) {
  const structured = analysis.edge >= 0.14
  const want = structured ? 'structured' : 'soft'
  const why = structured
    ? `The source is hard-edged (${(analysis.edge * 100).toFixed(0)}% strong boundaries), so treatments that hold their own shape carry the reference; a soft gather would blur what makes it distinctive.`
    : `The source is soft-edged (${(analysis.edge * 100).toFixed(0)}% strong boundaries), so gathered and draped treatments read it; a pressed pleat would contradict it.`
  return {
    want, why,
    shoulder: SHOULDER.filter(s => s.prefers === want).map(s => s.n),
    bust: BUST.filter(s => s.prefers === want).map(s => s.n),
  }
}
