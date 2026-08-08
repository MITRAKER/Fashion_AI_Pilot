import puppeteer from 'puppeteer'
const b = await puppeteer.launch({ headless: true, args: ['--no-sandbox','--disable-dev-shm-usage'] })
const p = await b.newPage()
await p.setViewport({ width: 1400, height: 900 })
const errs = []
p.on('pageerror', e => errs.push(e.message))
await p.goto('http://localhost:5174/board.html', { waitUntil: 'networkidle2', timeout: 45000 })
await new Promise(r => setTimeout(r, 13000))
// Pick a shoulder treatment and confirm it lands on the body.
const before = await p.evaluate(() => window.__PREVIEW__?.measure())
const picked = await p.evaluate(() => {
  const btns = [...document.querySelectorAll('.dtl[data-kind="shoulder"]')]
  const t = btns.find(x => x.dataset.n === '8') || btns[1]
  t?.click(); return t?.querySelector('b')?.textContent
})
await new Promise(r => setTimeout(r, 3000))
const after = await p.evaluate(() => window.__PREVIEW__?.measure())
await p.screenshot({ path: 'renders/detail-lib.png' })
console.log(JSON.stringify({ errs: errs.slice(0,4), picked, before, after,
  changed: JSON.stringify(before) !== JSON.stringify(after) }, null, 1))
await b.close()
