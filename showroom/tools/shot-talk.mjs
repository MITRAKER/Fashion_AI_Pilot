import puppeteer from 'puppeteer'
const b = await puppeteer.launch({ headless: true, args: ['--no-sandbox','--disable-dev-shm-usage'] })
const p = await b.newPage()
await p.setViewport({ width: 1400, height: 900 })
const errs = []
p.on('pageerror', e => errs.push(e.message))
await p.goto('http://localhost:5174/board.html', { waitUntil: 'networkidle2', timeout: 45000 })
await new Promise(r => setTimeout(r, 13000))

const before = await p.evaluate(() => window.__PREVIEW__?.measure())
// Say something it understands, then something it must refuse.
const run = async text => {
  await p.evaluate(t => {
    document.getElementById('say-input').value = t
    document.getElementById('say-form').dispatchEvent(new Event('submit', { cancelable: true }))
  }, text)
  await new Promise(r => setTimeout(r, 3000))
  return p.evaluate(() => document.getElementById('say-out').innerText.replace(/\n+/g,' | ').slice(0,200))
}
const r1 = await run('make it a lot longer')
const after = await p.evaluate(() => window.__PREVIEW__?.measure())
const r2 = await run('make the closure a zip')
await p.screenshot({ path: 'renders/talk.png' })
console.log(JSON.stringify({ errs: errs.slice(0,4), r1, hemBefore: before?.hemY, hemAfter: after?.hemY, r2 }, null, 1))
await b.close()
