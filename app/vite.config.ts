import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

/**
 * Serves Natalie's wireframe at /wireframe from its real location in frontend/,
 * rather than copying it into app/public — two copies of a design drift, and the
 * one you're looking at is never the one that was edited.
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

export default defineConfig({
  plugins: [react(), wireframeRoute()],
  server: {
    port: 5173,
    // Same-origin proxy so the session cookie works without CORS.
    proxy: { '/api': { target: 'http://localhost:8787', changeOrigin: true } },
  },
})
