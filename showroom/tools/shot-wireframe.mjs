import puppeteer from 'puppeteer'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

// Walks Natalie's clickable wireframe and captures each page, so her design can be
// compared against the built app side by side rather than described.

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const PAGES = ['dash', 'cal', 'studio', 'style', 'pack', 'preflight', 'factory', 'export']

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
})
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 })
await page.goto('http://localhost:5173/wireframe', { waitUntil: 'networkidle2', timeout: 45000 })

// Leave the landing screen.
await page.evaluate(() => {
  const b = [...document.querySelectorAll('button')]
    .find(x => /enter the workspace/i.test(x.textContent))
  b?.click()
})
await new Promise(r => setTimeout(r, 800))

const written = []
for (const id of PAGES) {
  const shown = await page.evaluate(pid => {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('on'))
    const el = document.getElementById(`pg-${pid}`)
    if (!el) return false
    el.classList.add('on')
    window.scrollTo(0, 0)
    return true
  }, id)
  if (!shown) continue
  await new Promise(r => setTimeout(r, 350))
  const out = resolve(root, 'renders', `wf-${id}.png`)
  await page.screenshot({ path: out })
  written.push(`wf-${id}.png`)
}

console.log(JSON.stringify({ ok: true, written }, null, 2))
await browser.close()
