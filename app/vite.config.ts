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
  base: process.env.NODE_ENV === 'production' ? '/Fashion_AI_Pilot/' : '/',
  plugins: [react(), wireframeRoute()],
  server: {
    port: 5173,
    proxy: { '/api': { target: 'http://localhost:8787', changeOrigin: true } },
  },
  // garment-engine is a local file: dependency that builds to CommonJS. Vite's
  // dev server doesn't pre-bundle/convert linked local packages by default, so
  // without this its raw `exports.X = require(...)` code gets served straight
  // to the browser (which has no `exports`/`require` globals) and throws
  // "exports is not defined". Forcing it through optimizeDeps' esbuild
  // pre-bundling converts it to ESM like any other CJS dependency.
  optimizeDeps: {
    include: ['garment-engine'],
  },
})
