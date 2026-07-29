import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Same-origin proxy so the session cookie works without CORS.
    proxy: { '/api': { target: 'http://localhost:8787', changeOrigin: true } },
  },
})
