import * as THREE from 'three'

/**
 * Garment hotspots — click a part, read its spec.
 *
 * Anchors are attached to the rig, projected to screen each frame and drawn as
 * HTML markers, so a click is a DOM event on a small target rather than a raycast
 * against simulated cloth that moves under the cursor.
 *
 * The content is the point. Each hotspot shows the construction detail, the
 * measurement, its approval state and who owns it — the same provenance the tech
 * pack carries. That makes this the style sheet you can interrogate, rather than
 * a product tour: an unapproved value looks unapproved here too.
 */

/** Anchors in the avatar's local space (metres, sole at y = 0). */
const SPOTS = [
  {
    id: 'collar', label: 'Collar & lapel', at: [0.04, 1.50, 0.10],
    spec: [
      ['Construction', 'Notched lapel, 7 cm at widest'],
      ['Interlining', 'Silk organza, fused'],
      ['Understitch', '2 mm from edge, hand-finished'],
    ],
    pom: 'POM 21 · Collar height 7.0 · tol ±0.3',
    state: 'approved', by: 'N. Walker',
  },
  {
    id: 'closure', label: 'Front closure', at: [0.0, 1.16, 0.14],
    spec: [
      ['Type', 'Concealed hook and eye'],
      ['Count', '6, evenly spaced'],
      ['Placket', '4 cm, self fabric'],
    ],
    pom: 'POM 08 · Placket width 4.0 · tol ±0.2',
    state: 'unresolved',
    note: 'Sketch shows a placket but does not determine the closure. Designer decision — it changes placket width, the trim BOM and the factory operation.',
  },
  {
    id: 'cuff', label: 'Sleeve & cuff', at: [-0.30, 0.98, 0.05],
    spec: [
      ['Sleeve', 'Two-piece, set-in'],
      ['Cuff', 'Turnback, 9 cm'],
      ['Vent', 'Functional, 3 buttons'],
    ],
    pom: 'POM 14 · Sleeve length from CB 80.0 · tol ±0.5',
    state: 'approved', by: 'N. Walker',
  },
  {
    id: 'seam', label: 'Side seam', at: [0.20, 1.02, -0.02],
    spec: [
      ['Seam', 'French seam, 1.2 cm SA'],
      ['Closure', 'Invisible zip, 56 cm'],
      ['Placement', 'Left side — not centre back'],
    ],
    pom: 'POM 04 · Across shoulder 41.0 · tol ±0.5',
    state: 'proposed',
    note: 'Factory ST-26-031 reported 1.0 cm too narrow to finish cleanly. Proposed 1.2 cm — awaiting a decision.',
  },
  {
    id: 'hem', label: 'Hem & bias panel', at: [0.10, 0.42, 0.12],
    spec: [
      ['Grain', 'True bias, 45°'],
      ['Hem', '2.5 cm double turn'],
      ['Hang time', '48 h before hemming'],
    ],
    pom: 'POM 09 · CB length 118.5 · tol ±1.0',
    state: 'approved', by: 'N. Walker',
    note: 'Bias elongates under its own weight. Without the hang time the hem drops unevenly after first wear.',
  },
]

const STATE_TEXT = {
  approved: 'Approved',
  unresolved: 'Unresolved',
  proposed: 'Proposed change',
}

export function createHotspots(avatar, camera, renderer) {
  const layer = document.createElement('div')
  layer.className = 'hs-layer'
  document.body.appendChild(layer)

  const card = document.createElement('div')
  card.className = 'hs-card'
  layer.appendChild(card)

  const toggle = document.createElement('button')
  toggle.className = 'hs-toggle on'
  toggle.innerHTML = '<span></span>Details'
  layer.appendChild(toggle)

  let visible = true
  let open = null

  const anchors = SPOTS.map((s, i) => {
    // Parented to the rig so a marker tracks the body through the walk. Bone
    // attachment is preferred: fixed coordinates go stale whenever the figure
    // changes, which is exactly what happened when the rigged model landed.
    let obj = avatar.attach?.(s.id) ?? null
    if (!obj) {
      obj = new THREE.Object3D()
      obj.position.set(...s.at)
      avatar.group.add(obj)
    }

    const el = document.createElement('button')
    el.className = 'hs-dot'
    el.innerHTML = `<i>${i + 1}</i>`
    el.title = s.label
    // The runway uses pointerdown anywhere to strike a pose — a hotspot must not.
    el.addEventListener('pointerdown', e => e.stopPropagation())
    el.addEventListener('click', e => {
      e.stopPropagation()
      openSpot(open === s.id ? null : s.id)
    })
    layer.appendChild(el)

    return { spot: s, obj, el, world: new THREE.Vector3(), screen: new THREE.Vector3() }
  })

  function openSpot(id) {
    open = id
    for (const a of anchors) a.el.classList.toggle('sel', a.spot.id === id)
    if (!id) { card.classList.remove('open'); return }

    const s = SPOTS.find(x => x.id === id)
    card.className = `hs-card open ${s.state}`
    card.innerHTML = `
      <div class="hs-head">
        <b>${s.label}</b>
        <span class="hs-state ${s.state}">${STATE_TEXT[s.state]}</span>
      </div>
      <dl>${s.spec.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>
      <div class="hs-pom">${s.pom}</div>
      ${s.note ? `<p class="hs-note">${s.note}</p>` : ''}
      <div class="hs-by">${
        s.state === 'approved' ? `Approved by ${s.by} · DR-1041 v4`
        : s.state === 'proposed' ? 'Awaiting a technical designer'
        : 'Blocks factory export until resolved'
      }</div>`
  }

  // Dismiss by clicking the empty stage, without also striking a pose.
  card.addEventListener('pointerdown', e => e.stopPropagation())

  toggle.addEventListener('pointerdown', e => e.stopPropagation())
  toggle.addEventListener('click', e => {
    e.stopPropagation()
    visible = !visible
    toggle.classList.toggle('on', visible)
    layer.classList.toggle('hidden', !visible)
    if (!visible) openSpot(null)
  })

  const v = new THREE.Vector3()

  return {
    setVisible(on) { visible = on; layer.classList.toggle('hidden', !on) },
    update() {
      if (!visible) return
      const w = renderer.domElement.clientWidth
      const h = renderer.domElement.clientHeight
      const camDir = camera.getWorldDirection(new THREE.Vector3())

      for (const a of anchors) {
        a.obj.getWorldPosition(a.world)
        v.copy(a.world).project(camera)

        // Behind the camera, or facing away from it, means hide rather than
        // draw a marker for a detail you cannot actually see.
        const toSpot = a.world.clone().sub(camera.position)
        const behind = toSpot.dot(camDir) < 0
        const onScreen = v.x > -1.05 && v.x < 1.05 && v.y > -1.05 && v.y < 1.05

        if (behind || !onScreen) { a.el.style.display = 'none'; continue }
        a.el.style.display = ''
        a.el.style.transform =
          `translate(${(v.x * 0.5 + 0.5) * w}px, ${(-v.y * 0.5 + 0.5) * h}px) translate(-50%,-50%)`
      }

      if (open) {
        const a = anchors.find(x => x.spot.id === open)
        if (a && a.el.style.display !== 'none') {
          const r = a.el.getBoundingClientRect()
          // Flip to the left of the marker when it would run off the right edge.
          const flip = r.left > w - 330
          card.style.left = `${flip ? r.left - 312 : r.right + 14}px`
          card.style.top = `${Math.min(Math.max(r.top - 40, 16), h - 300)}px`
        }
      }
    },
  }
}
