import { defineConfig } from 'vite'

/**
 * Proxy for museum images.
 *
 * Reading a painting's pixels requires the image to be same-origin or to send
 * permissive CORS. The Met sends `Access-Control-Allow-Origin: *`, but the
 * browser here cannot reach their image host at all — only their API host — so a
 * direct <img> load fails regardless of headers.
 *
 * Fetching server-side and streaming it back solves both problems at once, and
 * it is what a production build would do anyway: never let the client depend on
 * a third party's CORS policy for something you can serve yourself.
 *
 *   /museum-image?url=https://images.metmuseum.org/...
 *
 * The host allowlist matters. Without it this is an open proxy that would happily
 * fetch anything on the internal network on behalf of a caller.
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
    configureServer(server) {
      server.middlewares.use('/museum-image', async (req, res) => {
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
        } catch (err) {
          res.statusCode = 502
          res.end(String(err?.message ?? err))
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [museumImageProxy()],
  server: { port: 5174, strictPort: true },
})
