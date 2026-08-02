import { extractPalette } from './palette.js'
import { analyseImage, suggestFabrics, suggestSilhouettes } from './fabric-engine.js'
import { createBodyPreview } from './board-3d.js'
import { consultSpecialists } from './specialists.js'

/**
 * Artwork → capsule collection board.
 *
 * The reference boards work because the palette is measured from the painting,
 * not invented, and every look is named. This does the deterministic half of
 * that: fetch a rights-cleared painting from the Met, cluster its actual pixels
 * into a colour story, name each colour in a designer's vocabulary, lay out the
 * board, and write the generation prompt for every look.
 *
 * What it deliberately does NOT do is generate the garment images — that needs a
 * model provider (D-05, open). The prompts are the handoff: paste one into any
 * image model and the colour story is already locked to the painting.
 *
 * Everything produced here is MOOD/PRESENTATION output. The "technical sketch"
 * prompts describe illustrations, not dimensioned flats, and must never be
 * treated as production input — that is the false-flats risk in the PRD.
 */

const MET = 'https://collectionapi.metmuseum.org/public/collection/v1'

/** Public-domain paintings with strong, distinct colour worlds. */
const SEEDS = [
  { id: 436535, label: 'Wheat Field with Cypresses · Van Gogh' },
  { id: 436532, label: 'Self-Portrait with a Straw Hat · Van Gogh' },
  { id: 437853, label: 'The Harvesters · Bruegel' },
  { id: 435809, label: 'Madonna and Child · Duccio' },
  { id: 459123, label: 'The Great Wave · Hokusai' },
  { id: 438814, label: 'Young Woman with a Water Pitcher · Vermeer' },
]

/** Garment archetypes for a six-look capsule. */
const LOOKS = [
  { n: 1, arch: 'Coat', note: 'sculpted shoulder, long lean line' },
  { n: 2, arch: 'Column dress', note: 'bias fall, no waist seam' },
  { n: 3, arch: 'Tailored jacket + trouser', note: 'soft construction' },
  { n: 4, arch: 'Layered separates', note: 'sheer over opaque' },
  { n: 5, arch: 'Draped blouse + skirt', note: 'gathered at one shoulder' },
  { n: 6, arch: 'Evening gown', note: 'full sweep, matte face' },
]

const FABRICS = [
  'Treated silk', 'Matte satin', 'Lightweight wool', 'Sheer organza',
  'Fine jacquard', 'Soft leather', 'Textured cotton', 'Crepe georgette',
]

const el = id => document.getElementById(id)

/** The 3D preview is created once and re-dressed, never rebuilt. */
let preview = null
let currentFabrics = []
let currentPalette = []
let chosenFabric = 0
let chosenColour = 0

function wear() {
  const f = currentFabrics[chosenFabric]
  const c = currentPalette[chosenColour]
  if (!f || !c) return
  if (!preview) {
    const mount = el('view3d')
    mount.querySelector('.spin')?.remove()
    preview = createBodyPreview(mount)
    window.__PREVIEW__ = preview
  }
  preview.dress(f, c.hex)
  el('worn-name').textContent = f.name
  el('worn-col').textContent = `${c.name} · ${c.hex}`
  el('worn-phys').textContent =
    `bend ${f.drape?.bend ?? '—'} · weight ${Math.abs(f.drape?.gravity ?? 0).toFixed(1)}`
  document.querySelectorAll('.fab').forEach((n, i) => n.classList.toggle('on', i === chosenFabric))
  document.querySelectorAll('#worn-swatches i').forEach((n, i) =>
    n.classList.toggle('on', i === chosenColour))
}

async function loadObject(id) {
  const r = await fetch(`${MET}/objects/${id}`)
  if (!r.ok) throw new Error(`Met ${id}: ${r.status}`)
  return r.json()
}

/** Route through the dev-server proxy: same-origin, so the canvas stays readable. */
const proxied = url => `/museum-image?url=${encodeURIComponent(url)}`

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'          // required to read pixels back
    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error('image blocked'))
    img.src = proxied(url)
  })
}

/**
 * The prompt is the deliverable. It names the colours explicitly with hex values
 * so the model cannot drift off the painting's story, and it forbids the things
 * that make generated fashion unusable — logos, text, watermarks.
 */
function lookPrompt(look, palette, art) {
  const story = palette.slice(0, 6)
    .map(c => `${c.name.toLowerCase()} (${c.hex})`).join(', ')
  return [
    `Editorial fashion photograph, full length, single model, ${look.arch.toLowerCase()}, ${look.note}.`,
    `Colour palette strictly limited to: ${story}.`,
    `Tonal world and surface quality of "${art.title}" by ${art.artistDisplayName || 'unknown'}, ${art.objectDate || ''}.`,
    `Matte fabrics, considered drape, natural fall. Plain seamless studio background, soft directional key light.`,
    `No logos, no text, no watermark, no jewellery unless specified.`,
  ].join(' ')
}

function flatPrompt(look, art) {
  return [
    `Fashion technical flat illustration, front and back orthographic views, ${look.arch.toLowerCase()}.`,
    `Clean vector line drawing, uniform line weight, white background, no shading, no model, no colour fill.`,
    `Silhouette derived from a capsule inspired by "${art.title}".`,
    `ILLUSTRATION ONLY — not a dimensioned production flat.`,
  ].join(' ')
}

function swatchRow(palette) {
  return palette.map(c => `
    <div class="sw">
      <span class="chip" style="background:${c.hex}"></span>
      <div>
        <b>${c.name}</b>
        <small>${c.hex} · ${c.share}% of canvas</small>
      </div>
    </div>`).join('')
}

function lookCard(look, palette, art) {
  const p = lookPrompt(look, palette, art)
  const f = flatPrompt(look, art)
  const swatches = palette.slice(0, 4)
    .map(c => `<i style="background:${c.hex}"></i>`).join('')
  return `
    <div class="look">
      <div class="look-h"><span class="num">${look.n}</span>
        <div><b>${look.arch}</b><small>${look.note}</small></div>
      </div>
      <div class="look-sw">${swatches}</div>
      <label>Look prompt</label>
      <textarea readonly rows="5">${p}</textarea>
      <label>Technical sketch prompt</label>
      <textarea readonly rows="3">${f}</textarea>
      <button class="copy" data-copy="${encodeURIComponent(p)}">Copy look prompt</button>
    </div>`
}

async function build(id) {
  el('status').textContent = 'Fetching artwork…'
  el('board').classList.remove('ready')

  const art = await loadObject(id)
  if (!art.isPublicDomain) {
    el('status').textContent =
      `"${art.title}" is not public domain — refusing to build a board from it.`
    return
  }
  const src = art.primaryImageSmall || art.primaryImage
  if (!src) { el('status').textContent = 'No image available for this object.'; return }

  el('status').textContent = 'Reading the painting…'
  const img = await loadImage(src)
  const palette = extractPalette(img, 10)

  el('art').src = proxied(src)
  el('art-title').textContent = art.title
  el('art-meta').textContent =
    [art.artistDisplayName, art.objectDate, art.medium].filter(Boolean).join(' · ')
  el('rights').textContent =
    `Public domain · The Met, object ${art.objectID} · verified via isPublicDomain`

  el('title').textContent = (art.title || 'Untitled').toUpperCase() + ' — REFRAMED'
  el('concept').textContent =
    `A capsule of six looks drawn from "${art.title}". The palette below is measured ` +
    `from the canvas itself — each swatch is a cluster of the painting's own pixels, ` +
    `named in the vocabulary a designer would use, with the share of canvas it occupies.`

  renderEngine(img, palette, art.title)
  el('palette').innerHTML = swatchRow(palette)
  el('looks').innerHTML = LOOKS.map(l => lookCard(l, palette, art)).join('')
  el('fabrics').innerHTML = FABRICS.map(f => `<span>${f}</span>`).join('')

  el('status').textContent = ''
  el('board').classList.add('ready')

  document.querySelectorAll('.copy').forEach(b => {
    b.onclick = async () => {
      await navigator.clipboard.writeText(decodeURIComponent(b.dataset.copy))
      b.textContent = 'Copied'
      setTimeout(() => (b.textContent = 'Copy look prompt'), 1400)
    }
  })
  window.__BOARD__ = { art, palette }
}

/**
 * The engine, on any source. Measures the image, then reasons from those numbers
 * to fabrics and silhouettes — each with the reason stated, so a designer can
 * disagree with it rather than just accept or reject a list.
 */
function renderEngine(img, palette, sourceName) {
  const a = analyseImage(img)
  const fabrics = suggestFabrics(a, 5)
  const shapes = suggestSilhouettes(a)

  el('measures').innerHTML = [
    ['Edge', a.edge, 'hard boundaries — structure vs fall'],
    ['Texture', a.texture, 'surface energy — woven interest vs flat'],
    ['Contrast', a.contrast, 'tonal range — light along a fold'],
    ['Chroma', a.chroma, 'saturation — dye depth'],
  ].map(([k, v, note]) => `
    <div class="m">
      <b>${k}</b><span class="v">${v}</span>
      <div class="bar"><i style="width:${Math.min(100, v * 100 * (k === 'Texture' ? 1.6 : 1)).toFixed(0)}%"></i></div>
      <small>${note}</small>
    </div>`).join('')

  // The panel: each finding names who said it, the rule applied, and what backs it.
  const findings = consultSpecialists(a, palette)
  el('panel').innerHTML = findings.map(f => `
    <div class="fnd${f.blocks ? ' blocks' : ''}">
      <div class="fnd-h">
        <span class="who">${f.specialist}</span>
        <b>${f.title}</b>
        <span class="cf ${f.confidence}">${f.confidence} confidence</span>
      </div>
      <p class="rule"><em>Principle</em> ${f.principle}</p>
      <p class="find">${f.finding}</p>
      ${f.blocks ? `<p class="blk">${f.blocks}</p>` : ''}
      <div class="cites">${f.cites.map(c => `<span>${c}</span>`).join('')}</div>
    </div>`).join('')

  el('fabrics-why').innerHTML = fabrics.map((f, i) => `
    <div class="fab">
      <div class="fab-h"><span class="rank">${i + 1}</span>
        <div><b>${f.name}</b><small>${f.hand}</small></div>
      </div>
      <p class="beh">${f.behaviour}</p>
      <p class="why"><em>Chosen because</em> ${f.why}</p>
      <p class="use"><em>Use for</em> ${f.use}</p>
    </div>`).join('')

  el('shapes').innerHTML = shapes.map(s => `
    <div class="shape"><b>${s.name}</b><p>${s.note}</p></div>`).join('')

  // Wearing the concept: pick a fabric, pick a colour from the measured palette.
  currentFabrics = fabrics
  currentPalette = palette
  chosenFabric = 0
  chosenColour = palette.findIndex(c => c.lightness > 25) 
  if (chosenColour < 0) chosenColour = 0

  el('worn-swatches').innerHTML = palette
    .map(c => `<i style="background:${c.hex}" title="${c.name}"></i>`).join('')
  document.querySelectorAll('#worn-swatches i').forEach((n, i) => {
    n.onclick = () => { chosenColour = i; wear() }
  })
  document.querySelectorAll('.fab').forEach((n, i) => {
    n.onclick = () => { chosenFabric = i; wear() }
  })
  wear()

  el('engine-src').textContent = sourceName
}

const sel = el('seed')
sel.innerHTML = SEEDS.map(s => `<option value="${s.id}">${s.label}</option>`).join('')
sel.onchange = () => build(Number(sel.value)).catch(e => {
  el('status').textContent = String(e.message || e)
})
el('go').onclick = () => build(Number(el('objid').value || sel.value))
  .catch(e => { el('status').textContent = String(e.message || e) })

/** Any object: photograph a flower, a shell, a swatch — the engine runs the same. */
el('upload').onchange = e => {
  const file = e.target.files?.[0]
  if (!file) return
  const url = URL.createObjectURL(file)
  const img = new Image()
  img.onload = () => {
    const palette = extractPalette(img, 10)
    el('art').src = url
    el('art-title').textContent = file.name
    el('art-meta').textContent = `Uploaded · ${img.naturalWidth}x${img.naturalHeight}`
    el('rights').textContent = 'Your own image — rights are yours'
    el('title').textContent = file.name.replace(/\.[^.]+$/, '').toUpperCase() + ' — REFRAMED'
    el('concept').textContent =
      'A capsule drawn from your reference. The palette is measured from the image ' +
      'itself, and the materials below are reasoned from how the object actually ' +
      'behaves — edge, texture, contrast and saturation.'
    renderEngine(img, palette, file.name)
    el('palette').innerHTML = swatchRow(palette)
    el('looks').innerHTML = LOOKS.map(l => lookCard(l, palette,
      { title: file.name, artistDisplayName: '', objectDate: '' })).join('')
    el('fabrics').innerHTML = FABRICS.map(f => `<span>${f}</span>`).join('')
    el('status').textContent = ''
    el('board').classList.add('ready')
    document.querySelectorAll('.copy').forEach(b => {
      b.onclick = async () => {
        await navigator.clipboard.writeText(decodeURIComponent(b.dataset.copy))
        b.textContent = 'Copied'
        setTimeout(() => (b.textContent = 'Copy look prompt'), 1400)
      }
    })
  }
  img.onerror = () => { el('status').textContent = 'Could not read that image.' }
  img.src = url
}

build(SEEDS[0].id).catch(e => { el('status').textContent = String(e.message || e) })
