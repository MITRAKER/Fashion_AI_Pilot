import { BODY, halfWidthAt, halfDepthAt, armholeDepth } from './body.js'

/**
 * Pattern panels, drafted from body landmarks and sewn at named seams.
 *
 * This is the structural difference from what was here before, and it is the
 * same difference CLO has: a garment is not a surface of revolution around a
 * body, it is flat panels joined along seams. A tube has no seams to hang from,
 * which is why the runway coat settled into a barrel and why every sleeve
 * attempt failed — there was no armhole to set one into.
 *
 * Each panel is a grid of vertices with a `seams` map naming which edge joins
 * what. The garment assembler welds vertices across matching seam names, so the
 * shoulder seam is genuinely one continuous surface rather than two shells
 * intersecting, and a force applied at the hem travels up through the seam.
 *
 * Panels here: front bodice, back bodice, two sleeves, skirt. Enough for a
 * shirt dress, which is what Natalie has been trying to fit.
 */

/** Point on the body surface at height y and angular position a (0 = centre front). */
function onBody(y, a, ease = 0) {
  const w = halfWidthAt(y) + ease
  const d = halfDepthAt(y) + ease
  return [Math.sin(a) * w, y, Math.cos(a) * d]
}

/**
 * A quad grid panel. `arc` maps column index to an angle around the body, `rise`
 * maps row index to a height. Rows run top to bottom so row 0 is the seam that
 * carries the garment's weight.
 */
function gridPanel({ id, cols, rows, arc, rise, ease, seams }) {
  const pos = []
  const uv = []
  for (let r = 0; r <= rows; r++) {
    const tr = r / rows
    const y = rise(tr)
    for (let c = 0; c <= cols; c++) {
      const tc = c / cols
      pos.push(onBody(y, arc(tc, tr), typeof ease === 'function' ? ease(tr) : ease))
      uv.push([tc, 1 - tr])
    }
  }
  const idx = []
  const at = (r, c) => r * (cols + 1) + c
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      idx.push(at(r, c), at(r + 1, c), at(r, c + 1))
      idx.push(at(r, c + 1), at(r + 1, c), at(r + 1, c + 1))
    }
  }
  return { id, cols, rows, pos, uv, idx, seams }
}

/**
 * Draft a garment's panels.
 *
 * `spec` is the parsed-sketch shape the rest of the app already speaks —
 * silhouette, neckline, sleeveType, hemLength — so a sketch parsed on the
 * server drafts a pattern here without translation.
 */
export function draftPanels(spec = {}) {
  const b = BODY
  const sleeve = /sleeve/i.test(spec.sleeveType ?? '') && !/sleeveless/i.test(spec.sleeveType ?? '')
  const hem = ({ mini: 0.52, knee: b.kneeY, midi: 0.33, maxi: 0.06, ankle: 0.10 })[
    String(spec.hemLength ?? 'knee').toLowerCase()] ?? b.kneeY

  // Neckline drop at centre front, measured DOWN from the side neck point.
  const neck = /cowl|high|crew|draped/i.test(spec.neckline ?? '') ? 0.035
    : /square|bateau/i.test(spec.neckline ?? '') ? 0.075
    : /^v|deep v/i.test(spec.neckline ?? '') ? 0.150
    : 0.085

  const panels = []
  const EASE = 0.012          // wearing ease: the body is not the garment

  // --- FRONT BODICE ---------------------------------------------------------
  // Row 0 is the shoulder seam and the neckline. This is the row the old
  // bodice never had: it started at the bust and had nowhere to hang from.
  panels.push(gridPanel({
    id: 'front',
    cols: 12, rows: 14, ease: EASE,
    arc: tc => (-Math.PI / 2) + tc * Math.PI,      // right side seam -> left side seam
    rise: tr => {
      // Top edge follows the shoulder line; below it the panel drops to the waist.
      const top = b.shoulderY
      return top - tr * (top - b.waistY)
    },
    seams: { top: 'shoulder-front', left: 'side-left', right: 'side-right', bottom: 'waist-front' },
  }))
  // Cut the neckline out of the top row by lowering the middle of it.
  shapeNeckline(panels[0], neck, b)

  // --- BACK BODICE ----------------------------------------------------------
  panels.push(gridPanel({
    id: 'back',
    cols: 12, rows: 14, ease: EASE,
    arc: tc => (Math.PI / 2) + tc * Math.PI,       // left side seam -> right, round the back
    rise: tr => b.shoulderY - tr * (b.shoulderY - b.waistY),
    seams: { top: 'shoulder-back', left: 'side-right', right: 'side-left', bottom: 'waist-back' },
  }))
  shapeNeckline(panels[1], 0.028, b)               // backs sit higher than fronts

  // --- SKIRT ----------------------------------------------------------------
  // Hangs from the waist seam and is the part that actually simulates.
  const flare = /flow|flare|full|volum/i.test(spec.silhouette ?? '') ? 0.52 : 0.20
  panels.push(gridPanel({
    id: 'skirt',
    cols: 24, rows: 18,
    ease: tr => EASE + flare * tr * tr,            // widens toward the hem
    arc: tc => -Math.PI + tc * Math.PI * 2,
    rise: tr => b.waistY - tr * (b.waistY - hem),
    seams: { top: 'waist' },
  }))

  // --- SLEEVES --------------------------------------------------------------
  // Set into the armhole, which only exists because the bodice reaches the
  // shoulder. This is the payoff for drafting from a shoulder landmark.
  if (sleeve) {
    const full = /balloon|volumin|puff|bishop|gathered/i.test(spec.sleeveType ?? '')
    for (const side of [-1, 1]) panels.push(sleevePanel(side, full, spec))
  }

  return panels
}

/** Lower the centre of a bodice's top row to cut a neckline into it. */
function shapeNeckline(panel, drop, b) {
  const cols = panel.cols
  const mid = cols / 2
  for (let c = 0; c <= cols; c++) {
    // 1 at centre front, 0 at the side neck points — a smooth scoop, not a notch.
    const t = Math.max(0, 1 - Math.abs(c - mid) / (cols * 0.30))
    const k = t * t * (3 - 2 * t)
    const p = panel.pos[c]
    p[1] -= drop * k
    // Pull the neckline in toward the neck so it sits on the body, not off it.
    const shrink = 1 - 0.30 * k
    p[0] *= shrink
    p[2] *= shrink
  }
  // The shoulder seam itself: the outermost columns sit at the shoulder point.
  panel.pos[0][1] = b.shoulderY
  panel.pos[cols][1] = b.shoulderY
}

/**
 * A sleeve, as a tube whose head is stitched around the armhole.
 *
 * The cap is the top of the tube and it is pinned; everything below the bicep
 * is free to swing. A "voluminous" sleeve is the same pattern with more cloth
 * in it, which is what a gathered sleeve head actually is.
 */
function sleevePanel(side, full, spec) {
  const b = BODY
  const cols = 12, rows = 14
  const capY = b.shoulderY
  const depth = armholeDepth(b)
  const shoulderX = side * b.shoulderHalf
  const pos = [], uv = [], idx = []

  // The cap must SIT IN the armhole, not beside it. The armhole rim runs from
  // the shoulder point down to the underarm, and its centre is inboard of the
  // shoulder point by about the arm's own radius — starting the tube at the
  // shoulder point left the sleeves floating clear of the body.
  const capCx = shoulderX - side * b.bicepHalf * 0.55
  const capCy = capY - depth * 0.42

  for (let r = 0; r <= rows; r++) {
    const tr = r / rows
    // Down the arm, angled slightly away from the body.
    const along = tr * b.armLength
    const cx = capCx + side * along * 0.13
    const cy = capCy - along * 0.93
    const cz = 0
    // Radius: the cap opening matches the armhole, then the bicep, then a
    // taper. A full sleeve keeps its volume most of the way down.
    const rad = tr < 0.18
      ? depth * 0.46 + (b.bicepHalf * 1.15 - depth * 0.46) * (tr / 0.18)
      : (full
        ? b.bicepHalf * (1.75 - 0.42 * tr)
        : b.bicepHalf * (1.10 - 0.52 * tr) + b.wristHalf * tr * 0.6)
    for (let c = 0; c <= cols; c++) {
      const a = (c / cols) * Math.PI * 2
      pos.push([cx + Math.cos(a) * rad * 0.92, cy + Math.sin(a) * rad * 0.30, cz + Math.sin(a) * rad])
      uv.push([c / cols, 1 - tr])
    }
  }
  const at = (r, c) => r * (cols + 1) + c
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      idx.push(at(r, c), at(r + 1, c), at(r, c + 1))
      idx.push(at(r, c + 1), at(r + 1, c), at(r + 1, c + 1))
    }
  }
  return {
    id: side < 0 ? 'sleeve-right' : 'sleeve-left',
    cols, rows, pos, uv, idx,
    seams: { top: side < 0 ? 'armhole-right' : 'armhole-left' },
  }
}
