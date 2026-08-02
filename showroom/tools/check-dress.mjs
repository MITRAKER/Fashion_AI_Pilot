import puppeteer from 'puppeteer'
const b = await puppeteer.launch({ headless: true, args: ['--no-sandbox','--disable-dev-shm-usage'] })
const p = await b.newPage()
await p.setViewport({ width: 1300, height: 900 })
const errs = []
p.on('pageerror', e => errs.push(e.message))
p.on('console', m => { if (m.type() === 'error') errs.push('console: ' + m.text().slice(0,120)) })
await p.goto('http://localhost:5174/board.html', { waitUntil: 'networkidle2', timeout: 45000 })
await new Promise(r => setTimeout(r, 13000))
const s = await p.evaluate(() => {
  const v = document.getElementById('view3d')
  const c = v?.querySelector('canvas')
  return {
    viewportExists: !!v,
    canvasExists: !!c,
    canvasSize: c ? `${c.width}x${c.height}` : null,
    previewApi: typeof window.__PREVIEW__?.measure === 'function',
    box: window.__PREVIEW__?.measure?.() ?? null,
    wornName: document.getElementById('worn-name')?.textContent,
    fabCards: document.querySelectorAll('.fab').length,
    spinStill: !!v?.querySelector('.spin'),
    viewTop: Math.round(v?.getBoundingClientRect().top ?? -1),
  }
})
console.log(JSON.stringify({ errs: errs.slice(0,6), ...s }, null, 1))
await b.close()
