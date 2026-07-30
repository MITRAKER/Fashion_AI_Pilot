import puppeteer from 'puppeteer'
import { mkdirSync, existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const url = 'https://mitraker.github.io/Fashion_AI_Pilot/'

const outDir = resolve(root, 'renders')
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--ignore-gpu-blocklist', '--allow-file-access-from-files'],
})

const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 })

page.on('console', msg => console.log('BROWSER LOG:', msg.text()))
page.on('pageerror', err => console.log('BROWSER ERROR:', err.message))

await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 })

// Click ENTER RUNWAY PLATFORM if intro splash is present
const enterBtn = await page.evaluateHandle(() => {
  const btns = Array.from(document.querySelectorAll('button'))
  return btns.find(b => b.textContent?.includes('Enter Runway Platform'))
})
if (enterBtn) {
  const el = enterBtn.asElement()
  if (el) {
    await el.click()
    await new Promise(r => setTimeout(r, 1500))
  }
}

// Type password 'pilot' if on login page
const passInput = await page.$('input[type="password"]')
if (passInput) {
  await passInput.type('pilot')
  const submitBtn = await page.$('button.btn.gold.block')
  if (submitBtn) {
    await submitBtn.click()
    await new Promise(r => setTimeout(r, 1500))
  }
}

// 1. Dashboard screenshot (with SeasonCalendar)
await page.screenshot({ path: resolve(outDir, 'master_dashboard.png') })

// 2. Click first style (DR-1041 or TP-2010)
const styleBtns = await page.$$('.nav-group button')
for (const b of styleBtns) {
  const text = await page.evaluate(el => el.textContent, b)
  if (text && (text.includes('DR-1041') || text.includes('TP-2010') || text.includes('ST-27-011'))) {
    await b.click()
    await new Promise(r => setTimeout(r, 2500))
    break
  }
}
await page.screenshot({ path: resolve(outDir, 'master_3d_stylesheet.png') })

// 3. Click Governance
const govBtn = await page.$('.nav-group button:last-child')
if (govBtn) {
  await govBtn.click()
  await new Promise(r => setTimeout(r, 1200))
  await page.screenshot({ path: resolve(outDir, 'app_governance.png') })
}

console.log(JSON.stringify({ ok: true, msg: 'App screenshots captured successfully' }, null, 2))
await browser.close()
