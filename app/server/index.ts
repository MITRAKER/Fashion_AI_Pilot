import { createServer } from 'node:http'
import { fileURLToPath } from 'node:url'
import { openDb } from './db.ts'
import { seedIfEmpty } from './seed.ts'
import { handleApi } from './api.ts'

const PORT = Number(process.env.PORT ?? 3000)
const HOST = process.env.HOST ?? '127.0.0.1'
const FILE = process.env.DB_FILE ?? fileURLToPath(new URL('../atelier.db', import.meta.url))

const db = openDb(FILE)
const seeded = seedIfEmpty(db)

const server = createServer((req, res) => {
  if (!req.url?.startsWith('/api/')) {
    res.writeHead(404, { 'content-type': 'application/json' })
    return res.end(JSON.stringify({ error: 'API server. The UI is served by Vite on :5173.' }))
  }
  handleApi(req, res, db)
})

server.listen(PORT, HOST, () => {
  console.log(`atelier api  http://localhost:${PORT}`)
  console.log(`database     ${FILE}${seeded ? '  (seeded)' : ''}`)
})
