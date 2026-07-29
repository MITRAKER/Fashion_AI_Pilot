import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

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

export default defineConfig({
  base: './',
  plugins: [react(), wireframeRoute()],
  server: {
    port: 5173,
    proxy: { '/api': { target: 'http://localhost:8787', changeOrigin: true } },
  },
})
