import puppeteer from 'puppeteer'
import { mkdirSync, existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

// ---------------------------------------------------------------------------
// Headless render harness.
//
// This exists so visual critique is verifiable rather than asserted: it drives the
// real WebGL scene in headless Chrome and writes PNGs to renders/, which a critic
// sub-agent can open with the Read tool. A critic that cannot see the frame is not
// grading anything.
//
//   node tools/capture.mjs                       # default shot list
//   node tools/capture.mjs --shot hero --out a.png
//   node tools/capture.mjs --url http://localhost:5174 --width 1600 --height 1000
// ---------------------------------------------------------------------------

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, cur, i, arr) => {
    if (cur.startsWith('--')) acc.push([cur.slice(2), arr[i + 1]?.startsWith('--') ? true : arr[i + 1]])
    return acc
  }, []),
)

const URL = args.url ?? 'http://localhost:5174'
const WIDTH = Number(args.width ?? 1600)
const HEIGHT = Number(args.height ?? 1000)
const SCALE = Number(args.scale ?? 2)
const TIMEOUT = Number(args.timeout ?? 60000)

/** Shots the scene knows how to pose itself into. Keep in sync with main.js. */
const DEFAULT_SHOTS = ['hero', 'detail', 'garment', 'wide']

const outDir = resolve(root, 'renders')
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })

const browser = await puppeteer.launch({
  headless: true,
  args: [
    // Deliberately NO --use-gl / --use-angle flags. Probed on this machine
    // (tools/probe-gl.mjs): forcing ANGLE+SwiftShader *prevents* WebGL2 context
    // creation, while the default path provides WebGL2 fine. Do not "fix" this by
    // adding SwiftShader flags back.
    '--no-sandbox',
    '--disable-dev-shm-usage',
    '--ignore-gpu-blocklist',
    `--window-size=${WIDTH},${HEIGHT}`,
  ],
})

const page = await browser.newPage()
await page.setViewport({ width: WIDTH, height: HEIGHT, deviceScaleFactor: SCALE })

const logs = []
page.on('console', m => logs.push(`[${m.type()}] ${m.text()}`))
page.on('pageerror', e => logs.push(`[pageerror] ${e.message}`))

try {
  await page.goto(URL, { waitUntil: 'networkidle0', timeout: TIMEOUT })

  // The scene signals readiness itself once the environment is prefiltered, the
  // cloth has settled, and N frames have been presented — screenshotting earlier
  // captures a half-converged image and produces a meaningless grade.
  await page.waitForFunction('window.__SHOWROOM_READY__ === true', { timeout: TIMEOUT })

  const info = await page.evaluate(() => window.__SHOWROOM_INFO__ ?? {})

  const shots = args.shot ? [String(args.shot)] : DEFAULT_SHOTS
  const written = []

  for (const shot of shots) {
    const posed = await page.evaluate(async s => {
      if (typeof window.__SHOWROOM_POSE__ !== 'function') return false
      await window.__SHOWROOM_POSE__(s)
      return true
    }, shot)
    if (!posed) {
      logs.push(`[warn] scene exposes no __SHOWROOM_POSE__; captured default view for "${shot}"`)
    }

    const file = resolve(outDir, args.out ? String(args.out) : `${shot}.png`)
    await page.screenshot({ path: file, type: 'png' })
    written.push(file)
  }

  // Verify we did not just write 1600×1000 of pure black — the classic silent
  // failure when WebGL context creation fails in headless.
  const luminance = await page.evaluate(() => {
    const c = document.querySelector('canvas')
    if (!c) return null
    const g = document.createElement('canvas')
    g.width = 160; g.height = 100
    const ctx = g.getContext('2d')
    ctx.drawImage(c, 0, 0, 160, 100)
    const d = ctx.getImageData(0, 0, 160, 100).data
    let sum = 0, max = 0
    for (let i = 0; i < d.length; i += 4) {
      const l = 0.2126 * d[i] + 0.7152 * d[i + 1] + 0.0722 * d[i + 2]
      sum += l; max = Math.max(max, l)
    }
    return { mean: +(sum / (d.length / 4)).toFixed(2), max: +max.toFixed(2) }
  })

  console.log(JSON.stringify({
    ok: true, url: URL, size: `${WIDTH}x${HEIGHT}@${SCALE}x`,
    written, info, luminance,
    warning: luminance && luminance.max < 4
      ? 'FRAME IS EFFECTIVELY BLACK — WebGL likely failed to initialise'
      : undefined,
    logs: logs.slice(-25),
  }, null, 2))
} catch (err) {
  console.log(JSON.stringify({ ok: false, url: URL, error: String(err), logs: logs.slice(-40) }, null, 2))
  process.exitCode = 1
} finally {
  await browser.close()
}
