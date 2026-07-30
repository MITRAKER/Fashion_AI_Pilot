import puppeteer from 'puppeteer'

// Finds a launch configuration that can actually create a WebGL2 context.
// Headless Chrome has no GPU, so this is entirely about which software rasteriser
// path Chrome will accept on this machine.

const BASE = ['--no-sandbox', '--disable-dev-shm-usage', '--ignore-gpu-blocklist']

const CANDIDATES = [
  ['angle+swiftshader', ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader']],
  ['swiftshader-webgl', ['--use-gl=angle', '--use-angle=swiftshader-webgl', '--enable-unsafe-swiftshader']],
  ['unsafe-swiftshader-only', ['--enable-unsafe-swiftshader']],
  ['disable-gpu+swiftshader', ['--disable-gpu', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader']],
  ['use-gl=swiftshader', ['--use-gl=swiftshader', '--enable-unsafe-swiftshader']],
  ['egl', ['--use-gl=egl', '--enable-unsafe-swiftshader']],
  ['desktop-gl', ['--use-gl=desktop']],
  ['default-no-flags', []],
]

const PAGE = `data:text/html,<canvas id=c></canvas><script>
  const c = document.getElementById('c');
  const gl2 = c.getContext('webgl2');
  const gl1 = c.getContext('webgl');
  window.__R__ = {
    webgl2: !!gl2, webgl1: !!gl1,
    renderer: (gl2||gl1) ? (gl2||gl1).getParameter(0x1F01) : null,
    vendor: (gl2||gl1) ? (gl2||gl1).getParameter(0x1F00) : null
  };
</script>`

const results = []

for (const [name, flags] of CANDIDATES) {
  let browser
  try {
    browser = await puppeteer.launch({ headless: true, args: [...BASE, ...flags] })
    const page = await browser.newPage()
    await page.goto(PAGE, { waitUntil: 'domcontentloaded', timeout: 15000 })
    const r = await page.evaluate(() => window.__R__)
    results.push({ name, ...r, flags })
  } catch (e) {
    results.push({ name, error: String(e).slice(0, 120), flags })
  } finally {
    await browser?.close()
  }
}

// Try headful too — a real desktop session means a real GPU, which is both more
// likely to work and produces a truer render than software rasterisation.
try {
  const browser = await puppeteer.launch({ headless: false, args: BASE })
  const page = await browser.newPage()
  await page.goto(PAGE, { waitUntil: 'domcontentloaded', timeout: 20000 })
  const r = await page.evaluate(() => window.__R__)
  results.push({ name: 'HEADFUL (real GPU)', ...r, flags: BASE })
  await browser.close()
} catch (e) {
  results.push({ name: 'HEADFUL (real GPU)', error: String(e).slice(0, 120) })
}

console.log(JSON.stringify(results, null, 2))
