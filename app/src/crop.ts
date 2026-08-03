/**
 * Crop a generated photograph down to the garment, deterministically.
 *
 * Four attempts were measured before this one, and the failures are the reason
 * the code looks like this rather than like a prompt tweak:
 *
 *   "no face, no head, no hair"        -> bald heads, faces intact. SANA has no
 *                                         negative-prompt parameter, so naming
 *                                         the head is what put one in frame.
 *   "framed from the collarbone down"  -> ignored outright, full portrait back.
 *   "on a headless dress form"         -> killed the face AND the colour: 9/9
 *                                         came back white instead of indigo.
 *                                         Putting the colour back in the subject
 *                                         noun phrase brought the faces back.
 *   fixed crop off the top             -> the head sits at a different height in
 *                                         every render. 20% left a chin, 32%
 *                                         still did, and 40% ate the neckline —
 *                                         which is design information worth
 *                                         more than the crop.
 *
 * So measure each image instead of guessing at it. We already know what colour
 * the cloth is — it is the resolved colourway, the same hex the 3D form is
 * dressed in — so scan down for the first row that is substantially that
 * colour and cut just above it. That lands on the actual top of the garment in
 * whatever frame the model happened to produce, and it keeps the neckline.
 */

/** Rows must be at least this proportion garment-coloured to count as cloth. */
const ROW_HIT = 0.12
/** How close a pixel must be to the target, as squared RGB distance. */
const TOLERANCE = 78 * 78 * 3
/** Keep a little above the first cloth row so the neckline is not shaved. */
const HEADROOM = 0.02
/** Used when the colour is unknown or never found — better than nothing. */
const FALLBACK = 0.26

function rgb(hex: string) {
  const h = hex.replace('#', '')
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ]
}

export function cropToGarment(dataUrl: string, hex?: string | null): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => {
      const w = img.naturalWidth
      const h = img.naturalHeight
      const c = document.createElement('canvas')
      c.width = w
      c.height = h
      const ctx = c.getContext('2d', { willReadFrequently: true })
      if (!ctx) return resolve(dataUrl)
      ctx.drawImage(img, 0, 0)

      let cut = Math.round(h * FALLBACK)

      if (hex && /^#?[0-9a-f]{6}$/i.test(hex)) {
        const [tr, tg, tb] = rgb(hex)
        const need = Math.max(1, Math.round(w * ROW_HIT))
        // Only the top half can be head; never crop past the middle whatever
        // the scan says, or a dark background would eat the whole garment.
        const limit = Math.round(h * 0.5)
        try {
          for (let y = 0; y < limit; y += 3) {
            const row = ctx.getImageData(0, y, w, 1).data
            let hits = 0
            for (let x = 0; x < w; x += 2) {
              const i = x * 4
              const dr = row[i] - tr, dg = row[i + 1] - tg, db = row[i + 2] - tb
              if (dr * dr + dg * dg + db * db < TOLERANCE) hits += 2
            }
            if (hits >= need) {
              cut = Math.max(0, y - Math.round(h * HEADROOM))
              break
            }
          }
        } catch {
          // Tainted canvas or similar — keep the fallback rather than fail.
        }
      }

      const kept = h - cut
      if (kept <= 0) return resolve(dataUrl)
      const o = document.createElement('canvas')
      o.width = w
      o.height = kept
      const octx = o.getContext('2d')
      if (!octx) return resolve(dataUrl)
      octx.drawImage(img, 0, cut, w, kept, 0, 0, w, kept)
      resolve(o.toDataURL('image/jpeg', 0.92))
    }
    // A crop that fails must not lose the render.
    img.onerror = () => resolve(dataUrl)
    img.src = dataUrl
  })
}
