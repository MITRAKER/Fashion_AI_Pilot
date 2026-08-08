import puppeteer from 'puppeteer'
const b = await puppeteer.launch({ headless: true, args: ['--no-sandbox','--disable-dev-shm-usage'] })
const p = await b.newPage()
await p.setViewport({ width: 1440, height: 1000, deviceScaleFactor: 1 })
const errs = []
p.on('pageerror', e => errs.push(e.message))
await p.goto('http://localhost:5173/', { waitUntil: 'networkidle2', timeout: 45000 })
await p.evaluate(() => fetch('/api/login', {method:'POST',headers:{'content-type':'application/json'},
  body: JSON.stringify({username:'natalie',password:'pilot'})}))
await p.reload({ waitUntil: 'networkidle2' })
await new Promise(r => setTimeout(r, 1500))
// Another session added an intro splash; dismiss it before reaching the workspace.
await p.evaluate(() => {
  const b = [...document.querySelectorAll('button, a')]
    .find(x => /enter runway platform|enter the workspace|skip/i.test(x.textContent || ''))
  b?.click()
})
await new Promise(r => setTimeout(r, 1800))
await p.evaluate(() => {
  const n = [...document.querySelectorAll('.nav-item')].find(x => x.textContent.includes('DR-1041'))
  n?.click()
})
await new Promise(r => setTimeout(r, 700))
await p.evaluate(() => {
  const t = [...document.querySelectorAll('.tab')].find(x => x.textContent.startsWith('Tech pack'))
  t?.click()
})
await new Promise(r => setTimeout(r, 900))
await p.screenshot({ path: 'D:/Pursuit/L2/Fashion/showroom/renders/proposal.png' })
const full = await p.evaluate(() => document.body.innerText)
const txt = full.slice(0, 700)
console.log(JSON.stringify({ errs, hasPanel: full.includes('Proposed change'), tab: full.includes('POINT OF MEASURE') || full.includes('Measurements'), idx: full.indexOf('Proposed change'), txt: txt.slice(0,340) }, null, 1))
await b.close()
