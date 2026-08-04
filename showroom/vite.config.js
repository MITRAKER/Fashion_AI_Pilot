import { defineConfig } from 'vite'

export default defineConfig({
  // garment-engine is a local file: dependency that builds to CommonJS.
  // Vite's dev server doesn't pre-bundle/convert linked local packages by
  // default, so without this its raw `exports.X = require(...)` code gets
  // served straight to the browser (which has no `exports`/`require`
  // globals) and throws "exports is not defined".
  optimizeDeps: {
    include: ['garment-engine'],
  },
})
