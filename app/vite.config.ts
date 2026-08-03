import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const ENGINE = resolve(__dirname, '../showroom/src')

/**
 * Serves Natalie's wireframe at /wireframe from its real location in frontend/
 */
function wireframeRoute() {
  const file = resolve(__dirname, '../frontend/fashion_ai_wireframe.html')
  return {
    name: 'serve-wireframe',
    configureServer(server: any) {
      server.middlewares.use('/wireframe', (_req: any, res: any) => {
        try {
          res.setHeader('content-type', 'text/html')
          res.end(readFileSync(file, 'utf8'))
        } catch {
          res.statusCode = 404
          res.end('frontend/fashion_ai_wireframe.html not found')
        }
      })
    },
  }
}

/**
 * Proxy for museum images — ported from showroom/vite.config.js, because the
 * dashboard now runs the same source-analysis pipeline and hits the same wall.
 *
 * Reading a painting's pixels requires the image to be same-origin. The browser
 * here cannot reach the Met's image host at all — only their API host — so a
 * direct <img> load fails regardless of CORS headers. Fetch it server-side.
 *
 * The host allowlist is the whole security of this: without it, this is an open
 * proxy that would fetch anything on the internal network for any caller.
 */
const ALLOWED_HOSTS = new Set([
  'images.metmuseum.org',
  'collectionapi.metmuseum.org',
  'framemark.vam.ac.uk',        // Victoria & Albert IIIF
  'media.vam.ac.uk',
])

function museumImageProxy() {
  return {
    name: 'museum-image-proxy',
    configureServer(server: any) {
      server.middlewares.use('/museum-image', async (req: any, res: any) => {
        try {
          const target = new URL(req.url, 'http://x').searchParams.get('url')
          if (!target) { res.statusCode = 400; return res.end('missing url') }

          const u = new URL(target)
          if (u.protocol !== 'https:' || !ALLOWED_HOSTS.has(u.hostname)) {
            res.statusCode = 403
            return res.end(`host not allowed: ${u.hostname}`)
          }

          const upstream = await fetch(u.toString())
          if (!upstream.ok) {
            res.statusCode = upstream.status
            return res.end(`upstream ${upstream.status}`)
          }

          const buf = Buffer.from(await upstream.arrayBuffer())
          res.setHeader('content-type', upstream.headers.get('content-type') || 'image/jpeg')
          res.setHeader('cache-control', 'public, max-age=86400')
          res.end(buf)
        } catch (err: any) {
          res.statusCode = 502
          res.end(String(err?.message ?? err))
        }
      })
    },
  }
}

/**
 * Is the showroom dev server actually up?
 *
 * The sidebar links to the runway at localhost:5174, on a second dev server.
 * When that server is not running the link dead-ends on a browser error page
 * that says nothing about why — which has now happened twice, once at a port
 * that never existed at all. The browser cannot probe it itself (cross-origin),
 * but the dev server can, so ask here and let the UI say what to run.
 */
function showroomStatus() {
  return {
    name: 'showroom-status',
    configureServer(server: any) {
      server.middlewares.use('/showroom-status', async (_req: any, res: any) => {
        const ctl = AbortSignal.timeout(1200)
        let up = false
        try {
          const r = await fetch('http://localhost:5174/runway.html', { signal: ctl })
          up = r.ok
        } catch { up = false }
        res.setHeader('content-type', 'application/json')
        res.setHeader('cache-control', 'no-store')
        res.end(JSON.stringify({ up, url: 'http://localhost:5174/runway.html' }))
      })
    },
  }
}

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/Fashion_AI_Pilot/' : '/',
  plugins: [react(), wireframeRoute(), museumImageProxy(), showroomStatus()],
  // `@engine` is the showroom's engine, imported directly rather than copied.
  // Copying is how the dashboard ended up with a hardcoded style sheet and a
  // duplicate dress form that drifted from the real one.
  resolve: { alias: { '@engine': ENGINE } },
  server: {
    port: 5173,
    proxy: { '/api': { target: 'http://localhost:8787', changeOrigin: true } },
    // The engine lives outside this Vite root; Vite must be allowed to serve it.
    fs: { allow: [resolve(__dirname, '..')] },
  },
})
