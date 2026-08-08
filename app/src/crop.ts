/**
 * Crop the head out of a generated garment photograph, deterministically.
 *
 * Everything tried before this was measured, and every one of them failed:
 *
 *   "no face, no head, no hair"        -> bald heads, faces intact. SANA has no
 *                                         negative-prompt parameter, so naming
 *                                         the head is what put one in frame.
 *   "framed from the collarbone down"  -> ignored, full portrait returned.
 *   "on a headless dress form"         -> killed the face AND the colour: 9/9
 *                                         came back white instead of indigo,
 *                                         and a form has no hips or stride, so
 *                                         the drape stopped meaning anything.
 *   fixed crop off the top             -> the head sits at a different height in
 *                                         every render. 20% left a chin, 32%
 *                                         still did, 40% ate the neckline.
 *   scan for the garment's own colour  -> the backdrop matched. A grey-blue
 *                                         seamless is closer to indigo than two
 *                                         lit folds of denim are to each other,
 *                                         so row zero hit and nothing cropped.
 *                                         The generated cloth is rarely the
 *                                         nominal hex anyway — asked for indigo,
 *                                         it returns pale chambray.
 *
 * So do not look for the garment. Look for the subject: sample the backdrop
 * from the top corners, scan down for the first row that stops being backdrop,
 * and that is the top of the head. Cut a proportion of the visible figure below
 * it.
 *
 * This is framing-independent, which is the property all the fixed crops
 * lacked. A tighter shot has a proportionally larger head AND a proportionally
 * smaller visible figure, so the same fraction lands in the same place on the
 * body either way. It also does not care what colour the cloth came back as.
 */

/** A row is "subject" once this proportion of it differs from the backdrop. */
const SUBJECT_ROW = 0.06
/** Squared RGB distance at which a pixel counts as no-longer-backdrop. */
const BG_DELTA = 42 * 42 * 3
/**
 * Head-and-neck as a proportion of the visible figure, measured from the top of
 * the head. A fashion croquis is 8-9 heads tall; real photography frames a
 * little tighter, and cutting at the shoulder rather than the chin is the whole
 * point, so this sits above the textbook 1/8.
 */
const HEAD_SHARE = 0.22
/** Used when the backdrop cannot be read at all. */
const FALLBACK = 0.22

export function cropToGarment(dataUrl: string, _hex?: string | null): Promise<string> {
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

      try {
        // Backdrop, averaged from both top corners so one stray highlight or a
        // vignette on a single side does not define it.
        const probe = ctx.getImageData(0, 0, w, 1).data
        const edge = Math.max(1, Math.round(w * 0.04))
        let br = 0, bg = 0, bb = 0, n = 0
        for (const x0 of [0, w - edge]) {
          for (let x = x0; x < x0 + edge; x++) {
            const i = x * 4
            br += probe[i]; bg += probe[i + 1]; bb += probe[i + 2]; n++
          }
        }
        br /= n; bg /= n; bb /= n

        const need = Math.max(1, Math.round(w * SUBJECT_ROW))
        // Only the top half can be head. If nothing is found by then the frame
        // is not a figure and the fallback is the safer answer.
        const limit = Math.round(h * 0.5)
        for (let y = 0; y < limit; y += 2) {
          const row = ctx.getImageData(0, y, w, 1).data
          let off = 0
          for (let x = 0; x < w; x += 2) {
            const i = x * 4
            const dr = row[i] - br, dg = row[i + 1] - bg, db = row[i + 2] - bb
            if (dr * dr + dg * dg + db * db > BG_DELTA) off += 2
          }
          if (off >= need) {
            const figure = h - y                    // visible figure below the crown
            cut = Math.min(Math.round(h * 0.45), y + Math.round(figure * HEAD_SHARE))
            break
          }
        }
      } catch {
        // Tainted canvas or similar — keep the fallback rather than fail.
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
