/**
 * Wardrobe — pick a look, the model wears it.
 *
 * Pattern taken from the dress-up reference: a vertical category rail pinned to
 * the right edge, tapping a category slides out a tray of options, choosing one
 * applies it immediately.
 *
 * The difference that matters: these are not dress-up assets. Every entry is a
 * style and colourway from the SS27 collection, carrying its style number. What
 * walks the runway is a style record — the same thing the tech pack describes.
 */

/** Colourways come from the seeded collection (app/src/data/seed.ts). */
export const LOOKS = {
  outerwear: {
    label: 'Outerwear',
    glyph: 'coat',
    items: [
      { id: 'DR-1041-IND', name: 'Bias Panel Denim', sub: 'Medium Indigo · DR-1041',
        swatch: '#4a5a6b', look: { coat: 0x4a5a6b, knit: 0x2f3a42, shoe: 0x1d2228, coatVisible: true } },
      { id: 'DR-1041-ECR', name: 'Bias Panel Denim', sub: 'Ecru Overdye · DR-1041',
        swatch: '#d9cfc0', look: { coat: 0xd9cfc0, knit: 0x6e5843, shoe: 0x8a6a4a, coatVisible: true } },
      { id: 'DR-1041-CAM', name: 'Bias Panel Denim', sub: 'Camel · proposed',
        swatch: '#c8a57e', look: { coat: 0xc8a57e, knit: 0x453c33, shoe: 0x2a2724, coatVisible: true } },
      { id: 'NO-COAT', name: 'No outerwear', sub: 'Underlayer only',
        swatch: 'none', look: { coatVisible: false } },
    ],
  },
  underlayer: {
    label: 'Underlayer',
    glyph: 'top',
    items: [
      { id: 'TP-2010-OW', name: 'Cropped Poplin', sub: 'Optic White · TP-2010',
        swatch: '#e8e6e1', look: { knit: 0xe8e6e1 } },
      { id: 'KNIT-TAUPE', name: 'Fine knit', sub: 'Warm taupe',
        swatch: '#453c33', look: { knit: 0x453c33 } },
      { id: 'KNIT-INK', name: 'Fine knit', sub: 'Ink',
        swatch: '#22242a', look: { knit: 0x22242a } },
      { id: 'KNIT-MOSS', name: 'Fine knit', sub: 'Moss',
        swatch: '#4a5240', look: { knit: 0x4a5240 } },
    ],
  },
  shoes: {
    label: 'Shoes',
    glyph: 'shoe',
    items: [
      { id: 'SH-PATENT', name: 'Stiletto pump', sub: 'Black patent',
        swatch: '#15171b', look: { shoe: 0x15171b } },
      { id: 'SH-BONE', name: 'Stiletto pump', sub: 'Bone',
        swatch: '#d8d2c6', look: { shoe: 0xd8d2c6 } },
      { id: 'SH-GOLD', name: 'Stiletto pump', sub: 'Antique gold',
        swatch: '#b08d4a', look: { shoe: 0xb08d4a } },
    ],
  },
}

/** Tiny inline SVG glyphs — no asset dependency, crisp at any DPR. */
const GLYPH = {
  coat: '<path d="M12 3 5 6v15h14V6l-7-3Zm0 0v18M8 7l1 12M16 7l-1 12" />',
  top: '<path d="M9 4 5 7l2 3v11h10V10l2-3-4-3a3 3 0 0 1-6 0Z" />',
  shoe: '<path d="M3 16h10l4-3 4 1v2H3Zm0-4v4m4-2v2" />',
}

export function createWardrobe(avatar, { onChange } = {}) {
  const root = document.createElement('div')
  root.className = 'wardrobe'

  const rail = document.createElement('div')
  rail.className = 'wr-rail'
  root.appendChild(rail)

  const tray = document.createElement('div')
  tray.className = 'wr-tray'
  root.appendChild(tray)

  let openKey = null
  const selected = { outerwear: 'DR-1041-IND', underlayer: 'KNIT-TAUPE', shoes: 'SH-PATENT' }

  function apply(catKey, item) {
    selected[catKey] = item.id
    avatar.setLook(item.look)
    onChange?.(catKey, item)
    renderTray()
    renderRail()
  }

  function renderRail() {
    rail.innerHTML = ''
    for (const [key, cat] of Object.entries(LOOKS)) {
      const btn = document.createElement('button')
      btn.className = `wr-cat${openKey === key ? ' on' : ''}`
      btn.title = cat.label
      const cur = cat.items.find(i => i.id === selected[key])
      btn.innerHTML =
        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"
              stroke-linecap="round" stroke-linejoin="round">${GLYPH[cat.glyph]}</svg>
         <span class="wr-dot" style="background:${
           cur && cur.swatch !== 'none' ? cur.swatch : 'transparent'};
           ${cur && cur.swatch === 'none' ? 'border-color:rgba(255,255,255,.35)' : ''}"></span>
         <em>${cat.label}</em>`
      btn.onclick = () => { openKey = openKey === key ? null : key; renderTray(); renderRail() }
      rail.appendChild(btn)
    }
  }

  function renderTray() {
    if (!openKey) { tray.classList.remove('open'); tray.innerHTML = ''; return }
    const cat = LOOKS[openKey]
    tray.classList.add('open')
    tray.innerHTML = `<div class="wr-title">${cat.label}</div>`
    const grid = document.createElement('div')
    grid.className = 'wr-grid'
    for (const item of cat.items) {
      const el = document.createElement('button')
      el.className = `wr-item${selected[openKey] === item.id ? ' sel' : ''}`
      el.innerHTML =
        `<span class="wr-sw" style="background:${
           item.swatch === 'none' ? 'transparent' : item.swatch}
           ${item.swatch === 'none' ? ';border-style:dashed' : ''}"></span>
         <span class="wr-nm">${item.name}</span>
         <span class="wr-sub">${item.sub}</span>`
      el.onclick = () => apply(openKey, item)
      grid.appendChild(el)
    }
    tray.appendChild(grid)
    const note = document.createElement('div')
    note.className = 'wr-note'
    note.textContent = 'Colourways from the SS27 collection · synthetic data'
    tray.appendChild(note)
  }

  renderRail()
  document.body.appendChild(root)

  // Apply the opening look so the first frame matches the rail's selection.
  const first = LOOKS.outerwear.items.find(i => i.id === selected.outerwear)
  if (first) avatar.setLook(first.look)

  return { root, apply, get selected() { return { ...selected } } }
}
