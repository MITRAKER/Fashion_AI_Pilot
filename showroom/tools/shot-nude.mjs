import puppeteer from 'puppeteer'
const b = await puppeteer.launch({ headless: true, args: ['--no-sandbox','--disable-dev-shm-usage'] })
const p = await b.newPage()
await p.setViewport({ width: 900, height: 1000 })
await p.goto('http://localhost:5174/runway.html?shot=1', { waitUntil: 'networkidle2', timeout: 45000 })
await new Promise(r => setTimeout(r, 7000))
await p.evaluate(() => {
  const { avatar } = window.__RUNWAY__
  avatar.setLook({ coatVisible: false })
  avatar.setWalking(false)          // freeze so the pose is readable
})
await new Promise(r => setTimeout(r, 1200))
await p.screenshot({ path: 'renders/nude.png' })
console.log('ok')
await b.close()
