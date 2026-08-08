import puppeteer from 'puppeteer'
const b = await puppeteer.launch({ headless: true, args: ['--no-sandbox','--disable-dev-shm-usage'] })
const p = await b.newPage()
await p.setViewport({ width: 1400, height: 880 })
const errs = []
p.on('pageerror', e => errs.push(e.message))
await p.goto('http://localhost:5174/runway.html?shot=0', { waitUntil: 'networkidle2', timeout: 45000 })
await new Promise(r => setTimeout(r, 6500))
// Open the outerwear tray so the wardrobe is visible in the still.
await p.evaluate(() => document.querySelectorAll('.wr-cat')[0]?.click())
await new Promise(r => setTimeout(r, 700))
await p.screenshot({ path: 'renders/wardrobe-open.png' })
// Pick the ecru colourway and confirm it reaches the material.
const applied = await p.evaluate(() => {
  const items = [...document.querySelectorAll('.wr-item')]
  items[1]?.click()
  const { avatar } = window.__RUNWAY__
  return { coatHex: '#' + avatar.coat.material.color.getHexString(),
           label: document.getElementById('looklabel')?.textContent }
})
await new Promise(r => setTimeout(r, 1400))
await p.screenshot({ path: 'renders/wardrobe-ecru.png' })
console.log(JSON.stringify({ errs, applied }, null, 1))
await b.close()
