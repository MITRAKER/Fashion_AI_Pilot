/**
 * Fashion plate generation — the board, rendered.
 *
 * The reference for this is the @svetlanastriz artwork-to-collection boards: a
 * source painting, a model wearing the garment it produced, a named palette,
 * flats, and handwritten callouts to construction. That quality comes from an
 * image model. Procedural geometry does not reach it and never will, so the 3D
 * preview and this are different jobs: the preview shows measured drape you can
 * interrogate, the plate shows what the look is.
 *
 * What makes this more than typing into an image tool is the prompt. It is
 * composed from the engine's own measurements and the specialists' cited
 * reasoning — the fabric named here is the fabric the analysis chose, and the
 * colours are clusters of the source's actual pixels, named in a designer's
 * vocabulary. The plate and the spec cannot drift apart, because one writes the
 * other.
 *
 * SERVER SIDE ONLY. A key used from client JS is visible in devtools on any
 * deployed build.
 */

const ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models'

/** Reference-board vocabulary. Not a style opinion — it is the brief's format. */
function composePrompt(b) {
  const {
    sourceName, analysis, palette = [], fabric, details = [], findings = [], spec,
  } = b

  const swatches = palette.slice(0, 7)
    .map(c => `${c.name} ${c.hex}`).join(', ')

  // Only findings that carry a principle earn space on the plate; the rest are
  // studio notes, not plate annotations.
  const notes = findings
    .filter(f => f.principle)
    .slice(0, 3)
    .map(f => `${f.specialist}: ${f.finding}`)

  const detailLines = details
    .filter(Boolean)
    .map(d => `${d.name} — ${d.construction}`)

  const skirt = spec?.components?.find(c => c.id === 'skirt')

  return [
    `A single-page couture concept board, photographed flat, on warm off-white paper.`,
    ``,
    `SUBJECT. One full-length fashion photograph of a model wearing a ${
      spec?.garmentType?.replace(/_/g, ' ') ?? 'column dress'} interpreted from "${sourceName}".`,
    fabric && `The garment is ${fabric.name} — ${fabric.hand}. ${fabric.behaviour} Render the cloth so that reads: ${fabric.why ?? ''}`,
    skirt && `Skirt length ${skirt.length}cm, flare ${skirt.flare}.`,
    detailLines.length && `Construction visible in the photograph: ${detailLines.join('; ')}.`,
    ``,
    `PALETTE. Use only these colours, drawn from the source itself: ${swatches}.`,
    analysis && `The source measures edge ${analysis.edge}, texture ${analysis.texture}, contrast ${
      analysis.contrast}, chroma ${analysis.chroma} — so the board should read ${
      analysis.edge > 0.4 ? 'structured and hard-edged' : 'soft and fluid'}, ${
      analysis.chroma > 0.5 ? 'saturated' : 'muted'}.`,
    ``,
    `LAYOUT. Around the photograph, arrange as a designer's board:`,
    `- the source artwork, small, top left, with its title set in a serif face`,
    `- a row of painted palette swatches, each labelled with its colour name`,
    `- front and back technical flats of the garment, drawn as fine pencil line art`,
    `- handwritten-style annotations with thin leader lines pointing to construction details`,
    notes.length ? `- annotation wording taken from these: ${notes.join(' | ')}` : '',
    ``,
    `STYLE. Editorial couture presentation board. Elegant serif display title, small`,
    `uppercase letterspaced labels, generous white space, subtle paper texture.`,
    `Photorealistic model and garment; the flats and annotations stay hand-drawn.`,
    `No logos, no watermarks, no invented brand names.`,
  ].filter(Boolean).join('\n')
}

/**
 * @returns {{ok: true, mime: string, data: string, prompt: string}
 *          |{ok: false, status: number, error: string, prompt?: string}}
 */
export async function generatePlate(body, { key, model }) {
  if (!key) {
    return {
      ok: false, status: 503,
      error: 'No GEMINI_API_KEY. Put one in showroom/.env and restart the dev server. '
           + 'It is read server-side and never sent to the browser.',
    }
  }

  const prompt = composePrompt(body)
  const parts = [{ text: prompt }]

  // The source image goes in as a reference so the plate is an interpretation of
  // THIS object, not of its name. Public-domain museum objects and the user's
  // own uploads only — the Met search filters on isPublicDomain before it ever
  // reaches here.
  if (body.sourceImage?.data && body.sourceImage?.mime) {
    parts.push({ inline_data: { mime_type: body.sourceImage.mime, data: body.sourceImage.data } })
  }

  let res
  try {
    res = await fetch(`${ENDPOINT}/${model}:generateContent`, {
      method: 'POST',
      headers: { 'x-goog-api-key': key, 'content-type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts }],
        generationConfig: { responseModalities: ['IMAGE'] },
      }),
      signal: AbortSignal.timeout(120000),
    })
  } catch (err) {
    return { ok: false, status: 504, error: `Could not reach the model: ${err?.message ?? err}`, prompt }
  }

  const text = await res.text()
  if (!res.ok) {
    // Surface the provider's own reason rather than a generic failure — quota,
    // a revoked key and a bad model name need different fixes.
    let reason = text.slice(0, 300)
    try { reason = JSON.parse(text)?.error?.message ?? reason } catch { /* keep raw */ }

    // "limit: 0" is not a rate limit you can wait out. It means image
    // generation is not included on this key's tier at all, and retrying
    // forever is the wrong response. Say what actually unblocks it.
    if (res.status === 429 && /limit:\s*0/.test(reason)) {
      return {
        ok: false, status: 429, prompt, needsBilling: true,
        error: 'Image generation is not available on this key\'s free tier — the quota '
             + 'is zero, not exhausted, so waiting will not help. Enable billing on the '
             + 'Google Cloud project behind the key, or use Vertex AI. PRD §8 needs a '
             + 'paid tier for real brand data anyway: free-tier terms let the provider '
             + 'train on prompts and outputs.',
      }
    }
    if (res.status === 429) {
      return { ok: false, status: 429, prompt, error: `Rate limited. ${reason}` }
    }
    return { ok: false, status: res.status, error: reason, prompt }
  }

  let json
  try { json = JSON.parse(text) } catch {
    return { ok: false, status: 502, error: 'Model returned a body that is not JSON.', prompt }
  }

  const part = json?.candidates?.[0]?.content?.parts?.find(p => p.inlineData ?? p.inline_data)
  const inline = part?.inlineData ?? part?.inline_data
  if (!inline?.data) {
    const finish = json?.candidates?.[0]?.finishReason
    return {
      ok: false, status: 502, prompt,
      error: finish === 'SAFETY'
        ? 'The model declined this source under its safety policy.'
        : `No image came back${finish ? ` (finishReason: ${finish})` : ''}.`,
    }
  }

  return { ok: true, mime: inline.mimeType ?? inline.mime_type ?? 'image/png', data: inline.data, prompt }
}

/** Connect-style middleware for a Vite dev server. Mount at /plate. */
export function plateMiddleware({ key, model }) {
  return async (req, res) => {
    if (req.method !== 'POST') {
      res.statusCode = 405
      return res.end('POST only')
    }
    const chunks = []
    for await (const c of req) chunks.push(c)
    let body
    try { body = JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}') } catch {
      res.statusCode = 400
      return res.end(JSON.stringify({ ok: false, error: 'Body is not JSON.' }))
    }
    const out = await generatePlate(body, { key, model })
    res.statusCode = out.ok ? 200 : out.status
    res.setHeader('content-type', 'application/json')
    res.setHeader('cache-control', 'no-store')
    res.end(JSON.stringify(out))
  }
}

export { composePrompt }
