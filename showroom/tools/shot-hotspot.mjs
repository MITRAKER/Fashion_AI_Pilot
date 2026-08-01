import puppeteer from 'puppeteer'
const b = await puppeteer.launch({ headless: true, args: ['--no-sandbox','--disable-dev-shm-usage'] })
const p = await b.newPage()
await p.setViewport({ width: 1400, height: 880 })
const errs = []
p.on('pageerror', e => errs.push(e.message))
await p.goto('http://localhost:5174/runway.html?shot=0', { waitUntil: 'networkidle2', timeout: 45000 })
await new Promise(r => setTimeout(r, 7000))

const dots = await p.evaluate(() =>
  [...document.querySelectorAll('.hs-dot')].filter(d => d.style.display !== 'none').length)

// Open the unresolved one — front closure — so the card's state styling is visible.
const opened = await p.evaluate(() => {
  const list = [...document.querySelectorAll('.hs-dot')]
  const target = list.find(d => /Front closure/i.test(d.title)) || list[1]
  target?.click()
  return target?.title ?? null
})
await new Promise(r => setTimeout(r, 900))
await p.screenshot({ path: 'renders/hotspot-open.png' })

const card = await p.evaluate(() => {
  const c = document.querySelector('.hs-card')
  return { cls: c?.className, text: (c?.innerText || '').replace(/\n+/g, ' | ').slice(0, 220) }
})
console.log(JSON.stringify({ errs, visibleDots: dots, opened, card }, null, 1))
await b.close()
