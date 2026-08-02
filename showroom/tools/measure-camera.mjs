import puppeteer from 'puppeteer'
const b = await puppeteer.launch({ headless: true, args: ['--no-sandbox','--disable-dev-shm-usage'] })
const p = await b.newPage()
await p.setViewport({ width: 1000, height: 640 })
await p.goto('http://localhost:5174/runway.html', { waitUntil: 'networkidle2', timeout: 45000 })
await new Promise(r => setTimeout(r, 4000))

// Sample the camera every frame across at least one shot transition.
const stats = await p.evaluate(() => new Promise(resolve => {
  const { camera } = window.__RUNWAY__
  const samples = []
  let last = camera.position.clone()
  let lastQ = camera.quaternion.clone()
  const t0 = performance.now()
  function tick() {
    const dPos = camera.position.distanceTo(last)
    const dRot = 2 * Math.acos(Math.min(1, Math.abs(lastQ.dot(camera.quaternion))))
    samples.push([dPos, dRot])
    last = camera.position.clone(); lastQ = camera.quaternion.clone()
    if (performance.now() - t0 < 24000) requestAnimationFrame(tick)
    else {
      const pos = samples.map(s => s[0]).slice(2)
      const rot = samples.map(s => s[1]).slice(2)
      const mean = a => a.reduce((x, y) => x + y, 0) / a.length
      const mp = mean(pos), mr = mean(rot)
      resolve({
        frames: samples.length,
        posPerFrame: { mean: +mp.toFixed(5), max: +Math.max(...pos).toFixed(5) },
        rotPerFrameDeg: { mean: +(mr * 57.2958).toFixed(4), max: +(Math.max(...rot) * 57.2958).toFixed(4) },
        // A cut is a single frame moving orders of magnitude more than the mean.
        posSpikeRatio: +(Math.max(...pos) / Math.max(mp, 1e-6)).toFixed(1),
        rotSpikeRatio: +(Math.max(...rot) / Math.max(mr, 1e-9)).toFixed(1),
      })
    }
  }
  requestAnimationFrame(tick)
}))
console.log(JSON.stringify(stats, null, 1))
await b.close()
