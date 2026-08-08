import puppeteer from 'puppeteer'
import { mkdirSync, existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const url = 'http://localhost:5175/wireframe'

const outDir = resolve(root, 'renders')
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--ignore-gpu-blocklist'],
})

const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 })

await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 })

// Click "Enter the workspace"
const btn = await page.$('.land-cta button, #landing button')
if (btn) {
  await btn.click()
  await new Promise(r => setTimeout(r, 1000))
}

// 1. Dashboard screenshot
await page.screenshot({ path: resolve(outDir, 'wf_dashboard.png') })

// 2. Click Style record nav item
const styleNav = await page.$('nav button[data-pg="style"]')
if (styleNav) {
  await styleNav.click()
  await new Promise(r => setTimeout(r, 1000))
  await page.screenshot({ path: resolve(outDir, 'wf_style_record.png') })
}

// 3. Click Tech pack nav item
const tpNav = await page.$('nav button[data-pg="techpack"]')
if (tpNav) {
  await tpNav.click()
  await new Promise(r => setTimeout(r, 1000))
  await page.screenshot({ path: resolve(outDir, 'wf_techpack.png') })
}

console.log(JSON.stringify({ ok: true, msg: 'Wireframe screenshots captured successfully' }, null, 2))
await browser.close()
