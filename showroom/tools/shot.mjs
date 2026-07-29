import puppeteer from 'puppeteer'
import { mkdirSync, existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

// Generic page screenshot. The in-app Browser pane refuses to composite frames in
// this environment, so this is the reliable way to actually look at a page — and
// the PNG it writes can be opened with the Read tool.
//
//   node tools/shot.mjs --url http://localhost:5173/wireframe --out wireframe.png
//   node tools/shot.mjs --url ... --full --width 1440 --height 900

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const args = {}
process.argv.slice(2).forEach((a, i, arr) => {
  if (a.startsWith('--')) {
    const next = arr[i + 1]
    args[a.slice(2)] = !next || next.startsWith('--') ? true : next
  }
})

const url = args.url ?? 'http://localhost:5173'
const width = Number(args.width ?? 1440)
const height = Number(args.height ?? 900)
const out = resolve(root, 'renders', String(args.out ?? 'shot.png'))
if (!existsSync(dirname(out))) mkdirSync(dirname(out), { recursive: true })

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--ignore-gpu-blocklist'],
})
const page = await browser.newPage()
await page.setViewport({ width, height, deviceScaleFactor: Number(args.scale ?? 1) })
const errors = []
page.on('pageerror', e => errors.push(e.message))
page.on('requestfailed', r => errors.push(`${r.failure()?.errorText} ${r.url().slice(0, 90)}`))

await page.goto(url, { waitUntil: 'networkidle2', timeout: 45000 })
await new Promise(r => setTimeout(r, Number(args.wait ?? 1200)))

await page.screenshot({ path: out, fullPage: !!args.full })
const title = await page.title()
const metrics = await page.evaluate(() => ({
  scrollHeight: document.documentElement.scrollHeight,
  sections: document.querySelectorAll('section, [class*=screen], [class*=panel]').length,
}))

console.log(JSON.stringify({ ok: true, url, title, out, metrics, errors: errors.slice(0, 8) }, null, 2))
await browser.close()
