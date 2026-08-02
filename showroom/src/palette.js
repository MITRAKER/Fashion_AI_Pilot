/**
 * Extract a colour story from a painting.
 *
 * "Palette — exact colors from the painting" in the reference boards is not a
 * mood; it is a measurement. This clusters the actual pixels, so the swatches
 * are the painting's own colours rather than someone's impression of them.
 *
 * k-means in Lab rather than RGB: RGB distance does not match how the eye groups
 * colour, and clustering there splits highlights off as separate "colours" while
 * merging tones a designer would call distinct.
 */

/* ---------------------------------------------------------------- colour ops */

function srgbToLinear(c) {
  c /= 255
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
}

/** sRGB → CIE Lab (D65). */
export function rgbToLab(r, g, b) {
  const R = srgbToLinear(r), G = srgbToLinear(g), B = srgbToLinear(b)
  let x = (R * 0.4124 + G * 0.3576 + B * 0.1805) / 0.95047
  let y = (R * 0.2126 + G * 0.7152 + B * 0.0722)
  let z = (R * 0.0193 + G * 0.1192 + B * 0.9505) / 1.08883
  const f = t => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116)
  x = f(x); y = f(y); z = f(z)
  return [116 * y - 16, 500 * (x - y), 200 * (y - z)]
}

export const hex = (r, g, b) =>
  '#' + [r, g, b].map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16)
    .padStart(2, '0')).join('')

/* ------------------------------------------------------------------ naming */

/**
 * Reference colours in the vocabulary a designer actually uses. Named by nearest
 * match in Lab, so "muted olive green" comes back rather than "#6B6B3A".
 */
const NAMES = [
  ['Parchment ivory', 240, 234, 214], ['Bone', 226, 220, 205],
  ['Chalk white', 245, 245, 240], ['Soft sepia', 176, 152, 120],
  ['Faded skin rose', 214, 176, 160], ['Warm walnut brown', 122, 88, 58],
  ['Deep umber', 78, 56, 38], ['Bitumen black', 34, 28, 24],
  ['Muted olive green', 122, 122, 76], ['Moss green', 88, 100, 64],
  ['Sage', 150, 158, 130], ['Verdigris', 90, 122, 110],
  ['Smoky blue-grey', 110, 124, 140], ['Slate', 78, 88, 100],
  ['Prussian blue', 40, 58, 84], ['Lapis', 46, 70, 128],
  ['Cerulean', 92, 132, 176], ['Pale sky', 178, 200, 220],
  ['Muted gold', 186, 152, 74], ['Antique brass', 154, 124, 60],
  ['Ochre', 196, 156, 84], ['Saffron', 226, 176, 66],
  ['Terracotta', 178, 104, 74], ['Oxblood', 112, 44, 40],
  ['Madder red', 156, 56, 48], ['Dusty plum', 118, 90, 108],
  ['Aubergine', 74, 52, 68], ['Charcoal', 58, 58, 60],
  ['Graphite', 92, 92, 96], ['Pewter', 138, 138, 142],
]

const NAMED_LAB = NAMES.map(([n, r, g, b]) => [n, rgbToLab(r, g, b)])

export function nameColour(r, g, b) {
  const lab = rgbToLab(r, g, b)
  let best = NAMES[0][0], bestD = Infinity
  for (const [n, l] of NAMED_LAB) {
    const d = (lab[0] - l[0]) ** 2 + (lab[1] - l[1]) ** 2 + (lab[2] - l[2]) ** 2
    if (d < bestD) { bestD = d; best = n }
  }
  return best
}

/* --------------------------------------------------------------- extraction */

/**
 * @param {HTMLImageElement} img  loaded with crossOrigin='anonymous'
 * @param {number} k              how many colours the story should carry
 */
export function extractPalette(img, k = 10) {
  const W = 220
  const H = Math.max(1, Math.round((img.naturalHeight / img.naturalWidth) * W))
  const c = document.createElement('canvas')
  c.width = W; c.height = H
  const ctx = c.getContext('2d', { willReadFrequently: true })
  ctx.drawImage(img, 0, 0, W, H)
  const data = ctx.getImageData(0, 0, W, H).data

  const pts = []
  for (let i = 0; i < data.length; i += 4) {
    const a = data[i + 3]
    if (a < 200) continue
    const r = data[i], g = data[i + 1], b = data[i + 2]
    pts.push([...rgbToLab(r, g, b), r, g, b])
  }
  if (!pts.length) return []

  // Seed by luminance spread rather than at random, so a run is reproducible and
  // the story always spans the painting's darkest to lightest.
  pts.sort((p, q) => p[0] - q[0])
  let cents = Array.from({ length: k }, (_, i) =>
    pts[Math.floor(((i + 0.5) / k) * (pts.length - 1))].slice(0, 3))

  const assign = new Int32Array(pts.length)
  for (let iter = 0; iter < 14; iter++) {
    for (let i = 0; i < pts.length; i++) {
      let bi = 0, bd = Infinity
      for (let j = 0; j < cents.length; j++) {
        const d = (pts[i][0] - cents[j][0]) ** 2 +
                  (pts[i][1] - cents[j][1]) ** 2 +
                  (pts[i][2] - cents[j][2]) ** 2
        if (d < bd) { bd = d; bi = j }
      }
      assign[i] = bi
    }
    const sums = cents.map(() => [0, 0, 0, 0, 0, 0, 0])
    for (let i = 0; i < pts.length; i++) {
      const s = sums[assign[i]]
      for (let d = 0; d < 6; d++) s[d] += pts[i][d]
      s[6]++
    }
    cents = sums.map((s, j) => (s[6] ? [s[0] / s[6], s[1] / s[6], s[2] / s[6]] : cents[j]))
    // Keep the mean RGB alongside so the swatch is a real pixel colour.
    cents.forEach((cen, j) => {
      const s = sums[j]
      cen.rgb = s[6] ? [s[3] / s[6], s[4] / s[6], s[5] / s[6]] : [0, 0, 0]
      cen.share = s[6] / pts.length
    })
  }

  return cents
    .filter(c => c.share > 0.012)              // drop specks; they are not a colour story
    .sort((a, b) => b.share - a.share)
    .map(c => ({
      hex: hex(...c.rgb),
      name: nameColour(...c.rgb),
      share: +(c.share * 100).toFixed(1),
      lightness: +c[0].toFixed(1),
    }))
}
