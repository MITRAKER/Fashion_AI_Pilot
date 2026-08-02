/**
 * Object → garment: which fabric could make this, and why.
 *
 * A designer points at a flower, a shell, a painting, a piece of architecture and
 * asks "how does that become a dress?". The answer is mostly about BEHAVIOUR, not
 * colour: a petal is translucent, weightless at the edge and collapses under its
 * own weight; a shell is rigid, glossy and holds a curve. Those are fabric
 * properties — drape, hand, weight, opacity, recovery — and they are measurable
 * from an image.
 *
 * So this measures four things from the source and reasons from them:
 *
 *   edge      how crisp the boundaries are   → structure vs fluidity
 *   contrast  luminance spread               → sculptural vs soft
 *   texture   local high-frequency energy    → surface interest vs flat
 *   chroma    colour saturation              → depth of dye, sheen appetite
 *
 * Every suggestion carries the reason it was chosen, because a material called
 * for without a reason is a guess, and a designer cannot argue with a guess.
 *
 * NOT production advice. This is concept direction — a starting point for a
 * fabric conversation, not a specification. Weight, shrinkage and recovery come
 * from the mill's test report, never from a picture.
 */

/* ------------------------------------------------------------------ measure */

export function analyseImage(img) {
  const W = 200
  const H = Math.max(1, Math.round((img.naturalHeight / img.naturalWidth) * W))
  const c = document.createElement('canvas')
  c.width = W; c.height = H
  const ctx = c.getContext('2d', { willReadFrequently: true })
  ctx.drawImage(img, 0, 0, W, H)
  const d = ctx.getImageData(0, 0, W, H).data

  const lum = new Float32Array(W * H)
  let sMean = 0, n = 0
  for (let i = 0, p = 0; i < d.length; i += 4, p++) {
    const r = d[i] / 255, g = d[i + 1] / 255, b = d[i + 2] / 255
    lum[p] = 0.2126 * r + 0.7152 * g + 0.0722 * b
    const mx = Math.max(r, g, b), mn = Math.min(r, g, b)
    sMean += mx === 0 ? 0 : (mx - mn) / mx
    n++
  }
  sMean /= Math.max(n, 1)

  // Sobel magnitude — how much of the image is a hard boundary.
  let edgeSum = 0, edgeStrong = 0, cells = 0
  for (let y = 1; y < H - 1; y++) {
    for (let x = 1; x < W - 1; x++) {
      const at = (xx, yy) => lum[yy * W + xx]
      const gx = -at(x - 1, y - 1) - 2 * at(x - 1, y) - at(x - 1, y + 1)
                 + at(x + 1, y - 1) + 2 * at(x + 1, y) + at(x + 1, y + 1)
      const gy = -at(x - 1, y - 1) - 2 * at(x, y - 1) - at(x + 1, y - 1)
                 + at(x - 1, y + 1) + 2 * at(x, y + 1) + at(x + 1, y + 1)
      const m = Math.hypot(gx, gy)
      edgeSum += m
      if (m > 0.55) edgeStrong++
      cells++
    }
  }

  // Contrast as the 10th–90th percentile luminance spread: robust to a few
  // blown highlights in a photograph, unlike min/max.
  const sorted = Array.from(lum).sort((a, b) => a - b)
  const pick = q => sorted[Math.floor(q * (sorted.length - 1))]
  const contrast = pick(0.9) - pick(0.1)

  return {
    edge: +(edgeStrong / Math.max(cells, 1)).toFixed(3),
    texture: +(edgeSum / Math.max(cells, 1)).toFixed(3),
    contrast: +contrast.toFixed(3),
    chroma: +sMean.toFixed(3),
    lightness: +pick(0.5).toFixed(3),
  }
}

/* ------------------------------------------------------------------ fabrics */

/**
 * Each entry states the behaviour, not just the name. `fit` scores how well the
 * fabric answers the measured qualities of the source.
 *
 * `drape` and `mat` are what make the 3D preview honest: choosing gazar over
 * georgette changes the SIMULATION — bend stiffness, weight, how far the hem
 * flares — not only a swatch colour. A preview where every fabric hangs
 * identically teaches a designer nothing.
 *
 *   bend     resistance to folding; high = holds its own shape
 *   gravity  effective weight
 *   flare    how far the skirt stands away from the body
 */
const FABRICS = [
  {
    name: 'Silk organza', hand: 'crisp, translucent, weightless',
    behaviour: 'Holds a shape away from the body and reads as light passing through cloth.',
    fit: a => a.edge * 2.2 + (1 - a.lightness) * -0.4 + 0.3,
    use: 'Volume without weight — a sleeve or a hem that stands.',
    drape: { bend: 0.42, gravity: -3.6, damp: 0.972, flare: 0.20 }, mat: { roughness: 0.42, sheen: 0.85, sheenRough: 0.25, opacity: 0.72 },
  },
  {
    name: 'Silk gazar', hand: 'stiff, matte, sculptural',
    behaviour: 'Takes a fold and keeps it. The couture answer to architectural form.',
    fit: a => a.edge * 2.6 + a.contrast * 0.8,
    use: 'A silhouette that must hold its own geometry.',
    drape: { bend: 0.55, gravity: -3.2, damp: 0.975, flare: 0.24 }, mat: { roughness: 0.62, sheen: 0.35, sheenRough: 0.5, opacity: 1 },
  },
  {
    name: 'Duchesse satin', hand: 'heavy, lustrous, structured',
    behaviour: 'Weight plus sheen: it carries a curve and catches a highlight along it.',
    fit: a => a.contrast * 1.6 + a.chroma * 1.2 + a.edge * 0.6,
    use: 'Sculpted bodice, deep folds that read as light on a surface.',
    drape: { bend: 0.26, gravity: -7.4, damp: 0.958, flare: 0.10 }, mat: { roughness: 0.18, sheen: 0.9, sheenRough: 0.15, opacity: 1 },
  },
  {
    name: 'Silk georgette', hand: 'fluid, dry, matte',
    behaviour: 'Falls in many small folds and moves a beat behind the body.',
    fit: a => (1 - a.edge) * 2.0 + (1 - a.contrast) * 0.7,
    use: 'Bias fall, drape that follows rather than declares.',
    drape: { bend: 0.05, gravity: -5.6, damp: 0.965, flare: 0.13 }, mat: { roughness: 0.78, sheen: 0.5, sheenRough: 0.45, opacity: 0.94 },
  },
  {
    name: 'Silk chiffon', hand: 'sheer, floating, very light',
    behaviour: 'Almost no weight — layers build colour without building bulk.',
    fit: a => (1 - a.edge) * 1.7 + a.lightness * 0.9,
    use: 'Layered translucency, colour by accumulation.',
    drape: { bend: 0.03, gravity: -4.4, damp: 0.968, flare: 0.15 }, mat: { roughness: 0.72, sheen: 0.6, sheenRough: 0.35, opacity: 0.62 },
  },
  {
    name: 'Crepe de chine', hand: 'soft, dry, fluid',
    behaviour: 'Quiet drape with a matte face that keeps colour deep.',
    fit: a => (1 - a.edge) * 1.5 + a.chroma * 0.8,
    use: 'A column that skims without clinging.',
    drape: { bend: 0.08, gravity: -5.8, damp: 0.964, flare: 0.11 }, mat: { roughness: 0.82, sheen: 0.35, sheenRough: 0.55, opacity: 1 },
  },
  {
    name: 'Wool crepe', hand: 'matte, dense, stable',
    behaviour: 'Tailors cleanly and holds a pressed line.',
    fit: a => (1 - a.texture) * 1.4 + a.contrast * 0.6,
    use: 'Tailoring where the seam should be the only event.',
    drape: { bend: 0.18, gravity: -6.4, damp: 0.960, flare: 0.09 }, mat: { roughness: 0.9, sheen: 0.55, sheenRough: 0.4, opacity: 1 },
  },
  {
    name: 'Bouclé', hand: 'looped, textured, spongy',
    behaviour: 'Surface interest carries the design; seams disappear into it.',
    fit: a => a.texture * 2.4,
    use: 'When the reference is about surface rather than line.',
    drape: { bend: 0.30, gravity: -6.8, damp: 0.955, flare: 0.08 }, mat: { roughness: 0.96, sheen: 0.7, sheenRough: 0.6, opacity: 1 },
  },
  {
    name: 'Silk jacquard', hand: 'figured, substantial, subtly lustrous',
    behaviour: 'The pattern is woven in, so it moves with the cloth instead of sitting on it.',
    fit: a => a.texture * 1.8 + a.chroma * 0.9,
    use: 'Motif from the source rendered as structure, not print.',
    drape: { bend: 0.22, gravity: -6.6, damp: 0.960, flare: 0.10 }, mat: { roughness: 0.55, sheen: 0.6, sheenRough: 0.35, opacity: 1 },
  },
  {
    name: 'Cotton faille', hand: 'ribbed, crisp, matte',
    behaviour: 'Fine horizontal rib gives body without gloss.',
    fit: a => a.edge * 1.5 + (1 - a.chroma) * 0.9,
    use: 'Clean volume in a palette that should stay quiet.',
    drape: { bend: 0.34, gravity: -6.0, damp: 0.962, flare: 0.16 }, mat: { roughness: 0.8, sheen: 0.3, sheenRough: 0.5, opacity: 1 },
  },
  {
    name: 'Silk velvet', hand: 'deep pile, fluid, light-absorbing',
    behaviour: 'Colour goes almost black in the fold and glows on the crown.',
    fit: a => a.contrast * 1.5 + (1 - a.lightness) * 1.6 + a.chroma * 0.7,
    use: 'A dark reference where depth matters more than shape.',
    drape: { bend: 0.12, gravity: -8.2, damp: 0.955, flare: 0.08 }, mat: { roughness: 0.95, sheen: 1.0, sheenRough: 0.3, opacity: 1 },
  },
  {
    name: 'Technical taffeta', hand: 'papery, rustling, resilient',
    behaviour: 'Springs back from a crush and holds an inflated volume.',
    fit: a => a.edge * 1.9 + a.lightness * 0.6,
    use: 'Exaggerated volume that must survive being sat in.',
    drape: { bend: 0.46, gravity: -4.0, damp: 0.970, flare: 0.22 }, mat: { roughness: 0.35, sheen: 0.4, sheenRough: 0.3, opacity: 1 },
  },
]

/**
 * @returns {{name, hand, behaviour, use, why: string, score: number}[]}
 */
export function suggestFabrics(analysis, limit = 5) {
  const a = analysis
  return FABRICS
    .map(f => ({ ...f, score: +f.fit(a).toFixed(2) }))
    .sort((x, y) => y.score - x.score)
    .slice(0, limit)
    .map(f => ({ ...f, why: reason(f, a) }))
}

/**
 * Why THIS fabric, for THIS source.
 *
 * An earlier version described only the measurements, so every fabric carried an
 * identical justification — which reads as filler and rightly destroys trust. A
 * reason has to name the property of the cloth that answers the property of the
 * object, or it is not a reason.
 */
function reason(f, a) {
  const src = []
  if (a.edge > 0.14) src.push(`hard-edged (${(a.edge * 100).toFixed(0)}% strong boundaries)`)
  else if (a.edge < 0.08) src.push(`soft-edged (${(a.edge * 100).toFixed(0)}% strong boundaries)`)
  if (a.texture > 0.30) src.push('busy on the surface')
  if (a.contrast > 0.55) src.push(`wide in tonal range (${a.contrast.toFixed(2)})`)
  if (a.chroma > 0.40) src.push('saturated')
  if (a.lightness < 0.30) src.push('dark overall')
  const source = src.length ? `The source is ${src.join(', ')}.` : 'The source is tonally balanced.'

  // What this specific cloth contributes to that reading.
  const MATCH = {
    'Silk organza': 'Organza answers the crispness without adding weight — it stands where the object stands and disappears where it does not.',
    'Silk gazar': "Gazar is the one cloth here that will hold the object geometry literally; it takes a fold and keeps it.",
    'Duchesse satin': 'Duchesse converts a wide tonal range into light travelling along a fold — the contrast becomes the surface event.',
    'Silk georgette': 'Georgette gives the soft boundary a physical equivalent: many small folds, always a beat behind the body.',
    'Silk chiffon': 'Chiffon builds the colour by layering rather than by dye depth, which suits a source read through light.',
    'Crepe de chine': 'Crepe keeps the colour matte and deep, so a saturated source is not flattened by sheen.',
    'Wool crepe': 'Wool crepe is the tailoring answer — flat, stable, and it lets a seam be the only incident.',
    'Bouclé': 'Bouclé puts the busy surface INTO the cloth, so the reference survives being cut into panels.',
    'Silk jacquard': 'Jacquard weaves the motif in, so it moves with the garment instead of sitting on top as a print.',
    'Cotton faille': 'Faille gives body without gloss — volume in a palette that should stay quiet.',
    'Silk velvet': 'Velvet absorbs light, so a dark source keeps its depth instead of turning grey under studio lighting.',
    'Technical taffeta': 'Taffeta springs back, holding an inflated volume that would collapse in any of the silks above.',
  }
  return `${source} ${MATCH[f.name] ?? ''}`.trim()
}

/**
 * Silhouette directions implied by the measurements. Deliberately few: a
 * concept tool that offers twenty ideas has offered none.
 */
export function suggestSilhouettes(a) {
  const out = []
  if (a.edge > 0.15) {
    out.push({ name: 'Sculpted volume', note: 'Shape stands away from the body; the reference\'s hard edges become seamed panels and a self-supporting hem.' })
    out.push({ name: 'Architectural bodice', note: 'Structure concentrated above the waist, released below.' })
  }
  if (a.edge <= 0.15) {
    out.push({ name: 'Bias column', note: 'Cut on true bias so the cloth falls the way the source does — no waist seam, weight does the shaping.' })
    out.push({ name: 'Draped asymmetry', note: 'Gathered at one shoulder or hip, the fall reading as the reference\'s soft direction.' })
  }
  if (a.contrast > 0.5) {
    out.push({ name: 'Light-and-shadow pleating', note: 'Pleat depth tuned so the fold shadow reproduces the source\'s tonal range.' })
  }
  if (a.texture > 0.28) {
    out.push({ name: 'Surface-led shift', note: 'Simple shape, all interest in the cloth — let the texture be the design.' })
  }
  return out.slice(0, 4)
}
