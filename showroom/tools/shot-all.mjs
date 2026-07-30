import puppeteer from 'puppeteer'
import { mkdirSync, existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const url = 'http://localhost:5174'
const width = 1600
const height = 1000

const outDir = resolve(root, 'renders')
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--ignore-gpu-blocklist'],
})

const page = await browser.newPage()
await page.setViewport({ width, height, deviceScaleFactor: 2 })

const errors = []
page.on('pageerror', e => errors.push(e.message))

await page.goto(url, { waitUntil: 'networkidle2', timeout: 45000 })
await new Promise(r => setTimeout(r, 2500))

const shots = ['hero', 'detail', 'garment', 'wide']
const written = []

for (const shot of shots) {
  await page.evaluate(async s => {
    if (typeof window.__SHOWROOM_POSE__ === 'function') {
      await window.__SHOWROOM_POSE__(s)
    }
  }, shot)
  await new Promise(r => setTimeout(r, 800))
  const path = resolve(outDir, `${shot}.png`)
  await page.screenshot({ path, type: 'png' })
  written.push(path)
}

console.log(JSON.stringify({ ok: true, url, written, errors }, null, 2))
await browser.close()
