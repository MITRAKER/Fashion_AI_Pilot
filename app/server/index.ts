import { createServer } from 'node:http'
import { openDb } from './db.ts'
import { seedIfEmpty } from './seed.ts'
import { handleApi } from './api.ts'

const PORT = Number(process.env.PORT ?? 8787)
const FILE = process.env.DB_FILE ?? new URL('../atelier.db', import.meta.url).pathname.slice(1)

const db = openDb(FILE)
const seeded = seedIfEmpty(db)

const server = createServer((req, res) => {
  if (!req.url?.startsWith('/api/')) {
    res.writeHead(404, { 'content-type': 'application/json' })
    return res.end(JSON.stringify({ error: 'API server. The UI is served by Vite on :5173.' }))
  }
  handleApi(req, res, db)
})

server.listen(PORT, () => {
  console.log(`atelier api  http://localhost:${PORT}`)
  console.log(`database     ${FILE}${seeded ? '  (seeded)' : ''}`)
})
