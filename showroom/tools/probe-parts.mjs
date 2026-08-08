import puppeteer from 'puppeteer'
const b = await puppeteer.launch({ headless: true, args: ['--no-sandbox','--disable-dev-shm-usage'] })
const p = await b.newPage()
await p.setViewport({ width: 900, height: 900 })
await p.goto('http://localhost:5174/runway.html?shot=2', { waitUntil: 'networkidle2', timeout: 45000 })
await new Promise(r => setTimeout(r, 7000))
const out = await p.evaluate(() => {
  const { avatar, THREE } = window.__RUNWAY__
  const rows = []
  const wp = new THREE.Vector3()
  avatar.group.traverse(o => {
    if (!o.isMesh) return
    o.getWorldPosition(wp)
    // Thigh/knee band in world space (deck is -0.56)
    if (wp.y < -0.20 || wp.y > 0.30) return
    const g = o.geometry
    g.computeBoundingSphere()
    rows.push({
      type: g.type,
      r: +g.boundingSphere.radius.toFixed(3),
      y: +wp.y.toFixed(3),
      mat: o.material?.name || o.material?.type,
      col: '#' + (o.material?.color?.getHexString?.() ?? '??'),
      rough: o.material?.roughness,
    })
  })
  return rows.sort((a, b) => b.r - a.r).slice(0, 10)
})
console.log(JSON.stringify(out, null, 1))
await b.close()
