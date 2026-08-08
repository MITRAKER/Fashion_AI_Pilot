import puppeteer from 'puppeteer'
const b = await puppeteer.launch({ headless: true, args: ['--no-sandbox','--disable-dev-shm-usage'] })
const p = await b.newPage()
await p.setViewport({ width: 1200, height: 760 })
await p.goto('http://localhost:5174/runway.html?shot=0', { waitUntil: 'networkidle2', timeout: 45000 })
await new Promise(r => setTimeout(r, 6000))
// One instant can catch her mid-stride with the foot lifted; the contact test is
// the MINIMUM over a full gait cycle.
const out = await p.evaluate(() => new Promise(resolve => {
  const { avatar, THREE } = window.__RUNWAY__
  const box = new THREE.Box3()
  let lowest = Infinity, highest = -Infinity
  const t0 = performance.now()
  function tick() {
    box.setFromObject(avatar.group)
    lowest = Math.min(lowest, box.min.y)
    highest = Math.max(highest, box.max.y)
    if (performance.now() - t0 < 6000) return requestAnimationFrame(tick)
    resolve({
      lowestOverCycle: +lowest.toFixed(4),
      highestOverCycle: +highest.toFixed(4),
      deckTop: -0.56,
      contactGap: +(lowest - (-0.56)).toFixed(4),
    })
  }
  requestAnimationFrame(tick)
}))
const _unused = (() => {
  const { avatar, THREE } = window.__RUNWAY__ || {}
  const box = null
  return {
    avatarMinY: +box.min.y.toFixed(4),
    avatarMaxY: +box.max.y.toFixed(4),
    height: +(box.max.y - box.min.y).toFixed(3),
    rootY: +avatar.group.position.y.toFixed(4),
    deckTop: -0.56,
  }
})
console.log(JSON.stringify(out, null, 1))
await b.close()
