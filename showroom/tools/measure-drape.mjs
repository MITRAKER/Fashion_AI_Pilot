import puppeteer from 'puppeteer'
const b = await puppeteer.launch({ headless: true, args: ['--no-sandbox','--disable-dev-shm-usage'] })
const p = await b.newPage()
await p.setViewport({ width: 1200, height: 900 })
await p.goto('http://localhost:5174/board.html', { waitUntil: 'networkidle2', timeout: 45000 })
await new Promise(r => setTimeout(r, 12000))

const out = []
const cards = await p.$$('.fab')
for (let i = 0; i < cards.length; i++) {
  await cards[i].click()
  await new Promise(r => setTimeout(r, 2500))
  const m = await p.evaluate(() => ({
    name: document.getElementById('worn-name').textContent,
    phys: document.getElementById('worn-phys').textContent,
    box: window.__PREVIEW__?.measure(),
  }))
  out.push(m)
}
console.log(JSON.stringify(out, null, 1))
await b.close()
