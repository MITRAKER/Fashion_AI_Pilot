import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'
import { makeGlass, makeTile, makeGold, PALETTE } from '../materials/library.js'

/**
 * OWNED BY: UI agent. See ART-DIRECTION §4 and §9.
 *
 * The app as physical slabs. Text is drawn into a high-DPI canvas and mapped onto
 * the panel face: at 4× the panel's screen size it stays crisp under the tilt, which
 * is the whole game — blurry type is the tell that gives away a fake 3D UI.
 */
export function createSlab(envMap) {
  const group = new THREE.Group()

  const main = panel(1.62, 2.16, 0.035, envMap)
  main.position.set(0.16, 0, 0)
  group.add(main)

  const side = panel(0.62, 1.94, 0.030, envMap)
  side.position.set(-0.74, -0.04, 0.075)      // real Z offset — parallax, not a shadow
  group.add(side)

  // Canvas-textured faces
  main.material = [
    main.material, main.material, main.material,
    main.material, faceMaterial(drawMainFace(2048, 2730)), main.material,
  ]
  side.material = [
    side.material, side.material, side.material,
    side.material, faceMaterial(drawSideFace(1024, 3200)), side.material,
  ]

  // The gold CTA is real geometry, not painted on — it needs its own specular.
  const cta = new THREE.Mesh(
    new RoundedBoxGeometry(0.86, 0.115, 0.022, 6, 0.055),
    makeGold(envMap, { anisotropyRotation: 0 }),
  )
  cta.position.set(0.02, -0.86, 0.026)
  cta.castShadow = true
  group.add(cta)

  return {
    group,
    hitTargets: [cta],
    update(t) {
      // Idle drift — slow enough to read as "alive", not as animation.
      group.rotation.y = -0.28 + Math.sin(t * 0.18) * 0.022
      group.rotation.x = 0.12 + Math.cos(t * 0.14) * 0.012
      group.rotation.z = -0.05
    },
  }
}

function panel(w, h, d, envMap) {
  const m = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 8, 0.055), makeGlass(envMap))
  m.castShadow = true
  m.receiveShadow = true
  return m
}

function faceMaterial(canvas) {
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 16
  tex.needsUpdate = true
  return new THREE.MeshBasicMaterial({ map: tex, toneMapped: false })
}

const hex = n => '#' + n.toString(16).padStart(6, '0')

function drawMainFace(w, h) {
  const c = document.createElement('canvas')
  c.width = w; c.height = h
  const x = c.getContext('2d')
  const S = w / 1024                                  // design units → pixels

  x.fillStyle = hex(PALETTE.slab); x.fillRect(0, 0, w, h)

  // search pill
  roundRect(x, 40 * S, 44 * S, 620 * S, 78 * S, 39 * S, '#1b1b1f')
  x.fillStyle = '#6c6c76'; x.font = `${26 * S}px system-ui`
  x.fillText('Search for products…', 78 * S, 92 * S)

  // hero card with radial warm glow
  const cardY = 160 * S, cardH = 1040 * S
  roundRect(x, 40 * S, cardY, 944 * S, cardH, 44 * S, '#17171a')
  const g = x.createRadialGradient(660 * S, cardY + 420 * S, 20 * S, 660 * S, cardY + 420 * S, 520 * S)
  g.addColorStop(0, 'rgba(226,192,140,0.30)'); g.addColorStop(1, 'rgba(226,192,140,0)')
  x.fillStyle = g; x.fillRect(40 * S, cardY, 944 * S, cardH)

  x.fillStyle = '#c9a227'; x.font = `${22 * S}px system-ui`
  x.fillText('New Arrival', 92 * S, cardY + 92 * S)

  x.fillStyle = hex(PALETTE.text); x.font = `${76 * S}px Georgia, serif`
  x.fillText('Beige', 88 * S, cardY + 200 * S)
  x.fillText('Trench Coat', 88 * S, cardY + 288 * S)

  x.fillStyle = '#9d9a98'; x.font = `${24 * S}px system-ui`
  x.fillText('Timeless and elegant trench coat', 90 * S, cardY + 366 * S)
  x.fillText('with a flattering fit.', 90 * S, cardY + 404 * S)

  x.fillStyle = '#e8c766'; x.font = `${52 * S}px Georgia, serif`
  x.fillText('$129.99', 88 * S, cardY + 508 * S)

  // colour swatches
  const sw = ['#c8a57e', '#6f6f76', '#242428']
  sw.forEach((col, i) => {
    const cx = 116 * S + i * 76 * S, cy = cardY + 596 * S
    if (i === 0) { x.strokeStyle = '#c9a227'; x.lineWidth = 3 * S; circle(x, cx, cy, 32 * S); x.stroke() }
    x.fillStyle = col; circle(x, cx, cy, 24 * S); x.fill()
  })

  // size chips — active is gold
  x.fillStyle = '#75757e'; x.font = `${20 * S}px system-ui`
  x.fillText('Size', 90 * S, cardY + 684 * S)
  const sizes = ['S', 'M', 'L', 'XL']
  sizes.forEach((s, i) => {
    const bx = 88 * S + i * 84 * S, by = cardY + 706 * S, bs = 64 * S
    const active = s === 'M'
    roundRect(x, bx, by, bs, bs, 18 * S, active ? '#e8c766' : '#1f1f24')
    x.fillStyle = active ? '#241c05' : '#cfcdca'
    x.font = `${26 * S}px system-ui`; x.textAlign = 'center'
    x.fillText(s, bx + bs / 2, by + bs / 2 + 10 * S); x.textAlign = 'left'
  })

  // "You May Also Like"
  x.fillStyle = hex(PALETTE.text); x.font = `${40 * S}px Georgia, serif`
  x.fillText('You May Also Like', 48 * S, 1280 * S)
  const names = ['Wool Blend Coat', 'Oversized Blazer', 'Knit Sweater', 'Pleated Skirt']
  const prices = ['$159.99', '$89.99', '$49.99', '$59.99']
  names.forEach((n, i) => {
    const bx = 44 * S + i * 240 * S
    roundRect(x, bx, 1320 * S, 216 * S, 300 * S, 28 * S, '#161619')
    x.fillStyle = '#d6d3cf'; x.font = `${22 * S}px system-ui`
    x.fillText(n, bx + 18 * S, 1668 * S)
    x.fillStyle = '#8b8b95'; x.font = `${20 * S}px system-ui`
    x.fillText(prices[i], bx + 18 * S, 1702 * S)
  })

  return c
}

function drawSideFace(w, h) {
  const c = document.createElement('canvas')
  c.width = w; c.height = h
  const x = c.getContext('2d')
  const S = w / 512

  x.fillStyle = '#141416'; x.fillRect(0, 0, w, h)

  x.fillStyle = hex(PALETTE.text); x.font = `${44 * S}px Georgia, serif`
  x.fillText('Daylog', 46 * S, 150 * S)

  x.font = `${86 * S}px Georgia, serif`
  x.fillText('Women', 44 * S, 300 * S)
  x.fillStyle = '#c9a227'; x.fillRect(46 * S, 330 * S, 70 * S, 5 * S)

  const cats = ['New In', 'Dresses', 'Tops', 'Outerwear', 'Pants', 'Shoes', 'Bags', 'Accessories']
  cats.forEach((label, i) => {
    const y = 420 * S + i * 132 * S
    const active = label === 'Outerwear'
    if (active) {
      roundRect(x, 28 * S, y - 44 * S, 424 * S, 108 * S, 54 * S, '#1c1a15')
      x.strokeStyle = '#c9a227'; x.lineWidth = 2.5 * S
      roundRectPath(x, 28 * S, y - 44 * S, 424 * S, 108 * S, 54 * S); x.stroke()
    }
    roundRect(x, 46 * S, y - 30 * S, 80 * S, 80 * S, 26 * S, '#232327')
    x.fillStyle = active ? '#f2f0ed' : '#b9b7b4'
    x.font = `${28 * S}px system-ui`
    x.fillText(label, 156 * S, y + 22 * S)
  })

  return c
}

function roundRectPath(x, rx, ry, w, h, r) {
  x.beginPath()
  x.moveTo(rx + r, ry)
  x.arcTo(rx + w, ry, rx + w, ry + h, r)
  x.arcTo(rx + w, ry + h, rx, ry + h, r)
  x.arcTo(rx, ry + h, rx, ry, r)
  x.arcTo(rx, ry, rx + w, ry, r)
  x.closePath()
}
function roundRect(x, rx, ry, w, h, r, fill) {
  roundRectPath(x, rx, ry, w, h, r)
  x.fillStyle = fill; x.fill()
}
function circle(x, cx, cy, r) { x.beginPath(); x.arc(cx, cy, r, 0, Math.PI * 2); x.closePath() }
