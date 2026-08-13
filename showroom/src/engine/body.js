/**
 * The body a garment is drafted onto — in real metres, from the floor up.
 *
 * The point of this file is the shoulder.
 *
 * Every garment in this repo so far was built from bust, waist and hip. You
 * cannot set an armhole or hang a sleeve from those three numbers, so the
 * bodice stopped at BODICE_TOP = 0.615 — below the form's own shoulder point at
 * 0.652 — and every dress came out strapless by construction. Not a styling
 * choice, an arithmetic one. Natalie has said this repeatedly and she is right:
 * "the engine seemed to only know the bust the waist the hip and that is the
 * problem. Why aren't we getting the shoulder?"
 *
 * A bodice block needs, at minimum: shoulder slope, across-shoulder, neck
 * width, armhole depth and nape-to-waist. All five are here and all five are
 * used by the drafting in pattern.js.
 *
 * Figures are a size-38 / US 6 block on a 1.70 m form, half-widths, taken from
 * the same profile showroom/src/form.js already draws — so the garment and the
 * form agree about where the body is.
 */

export const BODY = {
  height: 1.70,

  // --- vertical landmarks, metres from floor -------------------------------
  napeY: 1.455,          // base of neck, centre back — where nape-to-waist starts
  neckSideY: 1.445,      // side neck point, the inner end of the shoulder seam
  shoulderY: 1.395,      // shoulder point, the outer end — 5 cm below the neck
  armholeY: 1.215,       // underarm; shoulder-to-here is the armhole depth
  bustY: 1.240,
  underBustY: 1.170,
  waistY: 1.075,
  highHipY: 1.000,
  hipY: 0.915,
  kneeY: 0.480,
  floorY: 0,

  // --- half-widths at those heights ----------------------------------------
  neckHalf: 0.062,       // neck width / 2
  shoulderHalf: 0.185,   // across-shoulder / 2 — the outer shoulder point
  chestHalf: 0.168,      // across-chest, above the bust
  bustHalf: 0.156,
  underBustHalf: 0.140,
  waistHalf: 0.126,
  highHipHalf: 0.140,
  hipHalf: 0.168,

  // --- depths (front-to-back), for a body that is not a flat oval ----------
  bustDepth: 0.108,
  waistDepth: 0.092,
  hipDepth: 0.112,

  // --- arm ------------------------------------------------------------------
  bicepHalf: 0.055,
  wristHalf: 0.032,
  armLength: 0.585,      // shoulder point to wrist
}

/** Shoulder slope in radians — the drop from side neck to shoulder point. */
export const shoulderSlope = (b = BODY) =>
  Math.atan2(b.neckSideY - b.shoulderY, b.shoulderHalf - b.neckHalf)

/** Armhole depth: shoulder point down to underarm. The sleeve hangs from this. */
export const armholeDepth = (b = BODY) => b.shoulderY - b.armholeY

/** Nape to waist — the length a back bodice is drafted to. */
export const napeToWaist = (b = BODY) => b.napeY - b.waistY

/**
 * Half-width of the body at any height, interpolated between the landmarks.
 * Used to lay a panel onto the body rather than onto a cylinder.
 */
export function halfWidthAt(y, b = BODY) {
  const pts = [
    [b.floorY, b.hipHalf * 0.72], [b.kneeY, b.hipHalf * 0.80],
    [b.hipY, b.hipHalf], [b.highHipY, b.highHipHalf], [b.waistY, b.waistHalf],
    [b.underBustY, b.underBustHalf], [b.bustY, b.bustHalf],
    [b.armholeY, b.chestHalf], [b.shoulderY, b.shoulderHalf],
    [b.neckSideY, b.neckHalf * 1.9], [b.napeY + 0.04, b.neckHalf],
  ]
  if (y <= pts[0][0]) return pts[0][1]
  for (let i = 1; i < pts.length; i++) {
    if (y <= pts[i][0]) {
      const [y0, w0] = pts[i - 1], [y1, w1] = pts[i]
      const t = (y - y0) / Math.max(y1 - y0, 1e-6)
      return w0 + (w1 - w0) * t
    }
  }
  return pts[pts.length - 1][1]
}

/** Front-to-back half-depth at a height, so panels wrap an ellipse not a circle. */
export function halfDepthAt(y, b = BODY) {
  const pts = [
    [b.floorY, b.hipDepth * 0.78], [b.hipY, b.hipDepth],
    [b.waistY, b.waistDepth], [b.bustY, b.bustDepth],
    [b.shoulderY, b.bustDepth * 0.86], [b.napeY, b.bustDepth * 0.62],
  ]
  if (y <= pts[0][0]) return pts[0][1]
  for (let i = 1; i < pts.length; i++) {
    if (y <= pts[i][0]) {
      const [y0, d0] = pts[i - 1], [y1, d1] = pts[i]
      const t = (y - y0) / Math.max(y1 - y0, 1e-6)
      return d0 + (d1 - d0) * t
    }
  }
  return pts[pts.length - 1][1]
}
