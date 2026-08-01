import puppeteer from 'puppeteer'
const b = await puppeteer.launch({ headless: true, args: ['--no-sandbox','--disable-dev-shm-usage'] })
const p = await b.newPage()
await p.setViewport({ width: 1200, height: 760 })
await p.goto('http://localhost:5174/runway.html?shot=0', { waitUntil: 'networkidle2', timeout: 45000 })
await new Promise(r => setTimeout(r, 6000))
const out = await p.evaluate(() => {
  const { avatar, THREE } = window.__RUNWAY__
  const box = new THREE.Box3().setFromObject(avatar.group)
  return {
    avatarMinY: +box.min.y.toFixed(4),
    avatarMaxY: +box.max.y.toFixed(4),
    height: +(box.max.y - box.min.y).toFixed(3),
    rootY: +avatar.group.position.y.toFixed(4),
    deckTop: -0.56,
    gapAboveDeck: +(box.min.y - (-0.56)).toFixed(4),
  }
})
console.log(JSON.stringify(out, null, 1))
await b.close()
