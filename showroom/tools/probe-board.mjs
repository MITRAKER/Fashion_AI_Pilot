import puppeteer from 'puppeteer'
const b = await puppeteer.launch({ headless: true, args: ['--no-sandbox','--disable-dev-shm-usage'] })
const p = await b.newPage()
await p.goto('http://localhost:5174/board.html', { waitUntil: 'networkidle2', timeout: 45000 })
await new Promise(r => setTimeout(r, 4000))
const out = await p.evaluate(async () => {
  const url = 'https://images.metmuseum.org/CRDImages/ep/web-large/DP-42549-001.jpg'
  const res = { status: document.getElementById('status')?.textContent }
  try {
    const r = await fetch(url, { mode: 'cors' })
    res.fetch = `${r.status} ${r.type} len=${(await r.blob()).size}`
  } catch (e) { res.fetch = 'FETCH FAIL: ' + e.message }
  res.img = await new Promise(done => {
    const i = new Image(); i.crossOrigin = 'anonymous'
    i.onload = () => done('img ok ' + i.naturalWidth + 'x' + i.naturalHeight)
    i.onerror = ev => done('img FAIL')
    i.src = url
  })
  return res
})
console.log(JSON.stringify(out, null, 1))
await b.close()
