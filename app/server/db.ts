import { DatabaseSync } from 'node:sqlite'
import { randomUUID, randomBytes, scryptSync, timingSafeEqual } from 'node:crypto'
import { mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import type {
  Asset, AuditEvent, BomRow, Collection, ExportRecord, FactoryCorrection, FactoryMessage,
  Gate, ModelInvocation, PackField, PomRow, Proposal, Role, Stage, Style, TrimRow, User,
} from '../shared/types.ts'

const SCHEMA = `
PRAGMA journal_mode = WAL;
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY, username TEXT UNIQUE NOT NULL, name TEXT NOT NULL,
  role TEXT NOT NULL, salt TEXT NOT NULL, hash TEXT NOT NULL);

CREATE TABLE IF NOT EXISTS sessions (
  token TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES users(id), created_at TEXT NOT NULL);

CREATE TABLE IF NOT EXISTS collections (
  id TEXT PRIMARY KEY, brand TEXT, season TEXT, year INTEGER, market TEXT,
  customer TEXT, ship_window TEXT, currency TEXT, owner TEXT);

CREATE TABLE IF NOT EXISTS stages (
  collection_id TEXT NOT NULL REFERENCES collections(id), n INTEGER NOT NULL,
  name TEXT, weeks TEXT, output TEXT, status TEXT, gate TEXT,
  PRIMARY KEY (collection_id, n));

CREATE TABLE IF NOT EXISTS styles (
  id TEXT PRIMARY KEY, collection_id TEXT NOT NULL REFERENCES collections(id),
  name TEXT, category TEXT, category_key TEXT, status TEXT, version INTEGER,
  base_size TEXT, units TEXT, size_range TEXT, owner TEXT, colorways TEXT,
  parsed_sketch TEXT, flat_sketch_url TEXT);

CREATE TABLE IF NOT EXISTS style_fields (
  id TEXT NOT NULL, style_id TEXT NOT NULL REFERENCES styles(id),
  section TEXT, label TEXT, value TEXT, unit TEXT, source TEXT, created_by TEXT,
  created_at TEXT, ai_involved INTEGER, confidence TEXT, approval TEXT,
  critical INTEGER, note TEXT, ord INTEGER, PRIMARY KEY (style_id, id));

CREATE TABLE IF NOT EXISTS poms (
  row_id TEXT PRIMARY KEY, style_id TEXT NOT NULL REFERENCES styles(id),
  code TEXT, name TEXT, method TEXT, tolerance TEXT, unit TEXT, sizes TEXT,
  source TEXT, created_by TEXT, created_at TEXT, ai_involved INTEGER,
  confidence TEXT, approval TEXT, critical INTEGER, note TEXT, ord INTEGER);

CREATE TABLE IF NOT EXISTS bom (
  id TEXT NOT NULL, style_id TEXT NOT NULL REFERENCES styles(id),
  material TEXT, composition TEXT, weight TEXT, placement TEXT, supplier TEXT, qty TEXT,
  source TEXT, created_by TEXT, created_at TEXT, ai_involved INTEGER,
  confidence TEXT, approval TEXT, critical INTEGER, note TEXT, PRIMARY KEY (style_id, id));

CREATE TABLE IF NOT EXISTS trims (
  id TEXT NOT NULL, style_id TEXT NOT NULL REFERENCES styles(id),
  item TEXT, spec TEXT, placement TEXT, qty TEXT,
  source TEXT, created_by TEXT, created_at TEXT, ai_involved INTEGER,
  confidence TEXT, approval TEXT, critical INTEGER, note TEXT, PRIMARY KEY (style_id, id));

CREATE TABLE IF NOT EXISTS assets (
  id TEXT NOT NULL, style_id TEXT NOT NULL REFERENCES styles(id),
  mode TEXT, title TEXT, caption TEXT, palette TEXT, synthetic INTEGER,
  PRIMARY KEY (style_id, id));

CREATE TABLE IF NOT EXISTS gates (
  key TEXT NOT NULL, style_id TEXT NOT NULL REFERENCES styles(id),
  label TEXT, approver TEXT, approved INTEGER, approved_at TEXT, reason TEXT,
  PRIMARY KEY (style_id, key));

CREATE TABLE IF NOT EXISTS thread (
  id TEXT NOT NULL, style_id TEXT NOT NULL REFERENCES styles(id),
  author TEXT, role TEXT, at TEXT, body TEXT, field_ref TEXT, state TEXT,
  proposed_rule TEXT, PRIMARY KEY (style_id, id));

CREATE TABLE IF NOT EXISTS exports (
  id TEXT PRIMARY KEY, style_id TEXT NOT NULL REFERENCES styles(id),
  version INTEGER, at TEXT, authorized INTEGER, manifest TEXT);

CREATE TABLE IF NOT EXISTS corrections (
  id TEXT PRIMARY KEY, style_id TEXT NOT NULL, thread_id TEXT NOT NULL,
  kind TEXT, target TEXT, message TEXT, severity TEXT,
  accepted INTEGER, accepted_by TEXT, accepted_at TEXT);

CREATE TABLE IF NOT EXISTS proposals (
  id TEXT PRIMARY KEY, style_id TEXT NOT NULL, field_id TEXT NOT NULL,
  field_label TEXT, current_value TEXT, proposed_value TEXT, rationale TEXT,
  source TEXT, created_by TEXT, created_at TEXT,
  state TEXT NOT NULL, decided_by TEXT, decided_at TEXT, decision_reason TEXT);

CREATE TABLE IF NOT EXISTS category_signoff (
  key TEXT PRIMARY KEY, signed_by TEXT NOT NULL, signed_at TEXT NOT NULL);

CREATE TABLE IF NOT EXISTS audit (
  id TEXT PRIMARY KEY, at TEXT NOT NULL, actor TEXT NOT NULL, action TEXT NOT NULL,
  target TEXT, from_state TEXT, to_state TEXT, reason TEXT);

CREATE TABLE IF NOT EXISTS model_invocations (
  id TEXT PRIMARY KEY, at TEXT, provider TEXT, model TEXT, feature TEXT,
  latency_ms INTEGER, cost_usd REAL, user_action TEXT, style_id TEXT);
`

export type DB = DatabaseSync

export function openDb(file: string): DB {
  const resolved = resolve(file)
  mkdirSync(dirname(resolved), { recursive: true })
  const db = new DatabaseSync(resolved)
  db.exec(SCHEMA)
  // Migration for existing local DB files created before parsed_sketch existed.
  try {
    db.exec('ALTER TABLE styles ADD COLUMN parsed_sketch TEXT')
  } catch {
    // Column already exists.
  }
  try {
    db.exec('ALTER TABLE styles ADD COLUMN flat_sketch_url TEXT')
  } catch {
    // Column already exists.
  }
  return db
}

/* ------------------------------------------------------------------ passwords */

export function hashPassword(pw: string, salt = randomBytes(16).toString('hex')) {
  return { salt, hash: scryptSync(pw, salt, 64).toString('hex') }
}

export function verifyPassword(pw: string, salt: string, hash: string) {
  const a = scryptSync(pw, salt, 64)
  const b = Buffer.from(hash, 'hex')
  return a.length === b.length && timingSafeEqual(a, b)
}

/* --------------------------------------------------------------------- audit */

export function audit(db: DB, e: Omit<AuditEvent, 'id' | 'at'>) {
  db.prepare(`INSERT INTO audit (id, at, actor, action, target, from_state, to_state, reason)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?)`)
    .run(randomUUID(), new Date().toISOString(), e.actor, e.action,
         e.target ?? null, e.from ?? null, e.to ?? null, e.reason ?? null)
}

export const readAudit = (db: DB): AuditEvent[] =>
  (db.prepare('SELECT * FROM audit ORDER BY at DESC, rowid DESC LIMIT 200').all() as any[])
    .map(r => ({
      id: r.id, at: r.at, actor: r.actor, action: r.action, target: r.target,
      from: r.from_state ?? undefined, to: r.to_state ?? undefined,
      reason: r.reason ?? undefined,
    }))

/* ---------------------------------------------------------------- sessions */

export function createSession(db: DB, userId: string) {
  const token = randomBytes(32).toString('hex')
  db.prepare('INSERT INTO sessions (token, user_id, created_at) VALUES (?, ?, ?)')
    .run(token, userId, new Date().toISOString())
  return token
}

export function userForToken(db: DB, token: string | null): User | null {
  if (!token) return null
  const r = db.prepare(`SELECT u.id, u.username, u.name, u.role FROM sessions s
                        JOIN users u ON u.id = s.user_id WHERE s.token = ?`).get(token) as any
  return r ? { id: r.id, username: r.username, name: r.name, role: r.role as Role } : null
}

export const dropSession = (db: DB, token: string) =>
  db.prepare('DELETE FROM sessions WHERE token = ?').run(token)

/* ------------------------------------------------------------------ readers */

const prov = (r: any) => ({
  source: r.source, createdBy: r.created_by, createdAt: r.created_at,
  aiInvolved: !!r.ai_involved, confidence: r.confidence, approval: r.approval,
  critical: !!r.critical, note: r.note ?? undefined,
})

export function readStyle(db: DB, id: string): Style | null {
  const s = db.prepare('SELECT * FROM styles WHERE id = ?').get(id) as any
  if (!s) return null
  const q = (sql: string) => db.prepare(sql).all(id) as any[]
  const assets = q('SELECT * FROM assets WHERE style_id = ?').map(r => ({
    id: r.id, mode: r.mode, title: r.title, caption: r.caption,
    palette: JSON.parse(r.palette), synthetic: !!r.synthetic,
  })) as Asset[]

  return {
    id: s.id, name: s.name, category: s.category, categoryKey: s.category_key,
    status: s.status, version: s.version, baseSize: s.base_size, units: s.units,
    sizeRange: JSON.parse(s.size_range), owner: s.owner, colorways: JSON.parse(s.colorways),
    parsedSketch: s.parsed_sketch ? JSON.parse(s.parsed_sketch) : undefined,
    assets: {
      items: assets,
      flatSketch: s.flat_sketch_url ?? undefined,
    },
    fields: q('SELECT * FROM style_fields WHERE style_id = ? ORDER BY ord').map(r => ({
      id: r.id, section: r.section, label: r.label, value: r.value,
      unit: r.unit ?? undefined, ...prov(r),
    })) as PackField[],
    poms: q('SELECT * FROM poms WHERE style_id = ? ORDER BY ord').map(r => ({
      code: r.code, name: r.name, method: r.method, tolerance: r.tolerance,
      unit: r.unit, sizes: JSON.parse(r.sizes), ...prov(r),
    })) as PomRow[],
    bom: q('SELECT * FROM bom WHERE style_id = ?').map(r => ({
      id: r.id, material: r.material, composition: r.composition, weight: r.weight,
      placement: r.placement, supplier: r.supplier, qty: r.qty, ...prov(r),
    })) as BomRow[],
    trims: q('SELECT * FROM trims WHERE style_id = ?').map(r => ({
      id: r.id, item: r.item, spec: r.spec, placement: r.placement, qty: r.qty, ...prov(r),
    })) as TrimRow[],
    // Lifecycle order, not row order — the UI reads this top to bottom as the
    // sequence of gates, so it must never depend on insertion order.
    gates: q(`SELECT * FROM gates WHERE style_id = ? ORDER BY CASE key
                WHEN 'concept' THEN 1 WHEN 'design' THEN 2
                WHEN 'technical' THEN 3 ELSE 4 END`).map(r => ({
      key: r.key, label: r.label, approver: r.approver, approved: !!r.approved,
      approvedAt: r.approved_at ?? undefined, reason: r.reason ?? undefined,
    })) as Gate[],
    thread: q('SELECT * FROM thread WHERE style_id = ? ORDER BY at').map(r => ({
      id: r.id, author: r.author, role: r.role, at: r.at, body: r.body,
      fieldRef: r.field_ref ?? undefined, state: r.state,
      proposedRule: r.proposed_rule ?? undefined,
    })) as FactoryMessage[],
    exports: (db.prepare('SELECT * FROM exports WHERE style_id = ? ORDER BY at DESC')
      .all(id) as any[]).map(r => ({
        id: r.id, version: r.version, at: r.at, authorized: !!r.authorized,
        manifest: JSON.parse(r.manifest),
      })) as ExportRecord[],
  }
}

export function readCollection(db: DB, id: string): Collection | null {
  const c = db.prepare('SELECT * FROM collections WHERE id = ?').get(id) as any
  if (!c) return null
  const stages = (db.prepare('SELECT * FROM stages WHERE collection_id = ? ORDER BY n')
    .all(id) as any[]).map(r => ({
      n: r.n, name: r.name, weeks: r.weeks, output: r.output,
      status: r.status, gate: r.gate ?? undefined,
    })) as Stage[]
  const ids = (db.prepare('SELECT id FROM styles WHERE collection_id = ? ORDER BY id')
    .all(id) as any[]).map(r => r.id as string)
  return {
    id: c.id, brand: c.brand, season: c.season, year: c.year, market: c.market,
    customer: c.customer, shipWindow: c.ship_window, currency: c.currency, owner: c.owner,
    stages, styles: ids.map(sid => readStyle(db, sid)!).filter(Boolean),
  }
}

export const readCorrections = (db: DB): FactoryCorrection[] =>
  (db.prepare('SELECT * FROM corrections ORDER BY accepted_at DESC').all() as any[]).map(r => ({
    id: r.id, styleId: r.style_id, threadId: r.thread_id, kind: r.kind, target: r.target,
    message: r.message, severity: r.severity, accepted: !!r.accepted,
    acceptedBy: r.accepted_by, acceptedAt: r.accepted_at,
  }))

export const readProposals = (db: DB): Proposal[] =>
  (db.prepare('SELECT * FROM proposals ORDER BY created_at DESC').all() as any[]).map(r => ({
    id: r.id, styleId: r.style_id, fieldId: r.field_id, fieldLabel: r.field_label,
    currentValue: r.current_value, proposedValue: r.proposed_value, rationale: r.rationale,
    source: r.source, createdBy: r.created_by, createdAt: r.created_at, state: r.state,
    decidedBy: r.decided_by, decidedAt: r.decided_at, decisionReason: r.decision_reason,
  }))

export const readInvocations = (db: DB): ModelInvocation[] =>
  (db.prepare('SELECT * FROM model_invocations ORDER BY at DESC').all() as any[]).map(r => ({
    id: r.id, at: r.at, provider: r.provider, model: r.model, feature: r.feature,
    latencyMs: r.latency_ms, costUsd: r.cost_usd, userAction: r.user_action,
    styleId: r.style_id ?? undefined,
  }))

/** Model spend already booked against one style — the input to the budget cap. */
export const spendForStyle = (db: DB, styleId: string): number =>
  ((db.prepare('SELECT COALESCE(SUM(cost_usd), 0) t FROM model_invocations WHERE style_id = ?')
    .get(styleId) as any).t as number)
