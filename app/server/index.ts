import { createServer } from 'node:http'
import { openDb } from './db.ts'
import { seedIfEmpty, ensureUsers } from './seed.ts'
import { handleApi } from './api.ts'

const PORT = Number(process.env.PORT ?? 8787)
const FILE = process.env.DB_FILE ?? new URL('../atelier.db', import.meta.url).pathname.slice(1)

/**
 * SEED=0 starts an empty workspace — accounts only, no collections, no styles.
 *
 * The demonstrator always booted full of invented styles, measurements and
 * factory messages, which is fine for a demo and wrong for a product: there was
 * no way to sit down and start your own season. Real work now has somewhere to
 * go, and the synthetic collection is opt-in rather than unavoidable.
 */
const WANT_SEED = process.env.SEED !== '0'

const db = openDb(FILE)
const seeded = WANT_SEED ? seedIfEmpty(db) : (ensureUsers(db), false)

const server = createServer((req, res) => {
  if (!req.url?.startsWith('/api/')) {
    res.writeHead(404, { 'content-type': 'application/json' })
    return res.end(JSON.stringify({ error: 'API server. The UI is served by Vite on :5173.' }))
  }
  handleApi(req, res, db)
})

server.listen(PORT, () => {
  console.log(`fashion ai api  http://localhost:${PORT}`)
  console.log(`database        ${FILE}${
    seeded ? '  (seeded with synthetic data)' : WANT_SEED ? '' : '  (empty — SEED=0)'}`)
})
