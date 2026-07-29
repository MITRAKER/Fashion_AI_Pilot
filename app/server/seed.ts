import { randomUUID } from 'node:crypto'
import type { DB } from './db.ts'
import { audit, hashPassword } from './db.ts'
import { seedCollection, seedInvocations } from '../src/data/seed.ts'
import type { Provenance, Role } from '../shared/types.ts'

// Demonstrator accounts. Passwords are fixed and published in the README on purpose —
// this workspace holds synthetic data only. Real brand data does not get loaded until
// the security checklist in PRD §12 passes.
const USERS: { username: string; name: string; role: Role; pw: string }[] = [
  { username: 'natalie', name: 'N. Walker', role: 'technical', pw: 'pilot' },
  { username: 'mitra', name: 'M. Kermanian', role: 'owner', pw: 'pilot' },
  { username: 'factory', name: 'Partner A — sample room', role: 'factory', pw: 'pilot' },
  { username: 'viewer', name: 'Read-only viewer', role: 'viewer', pw: 'pilot' },
]

const provCols = (p: Provenance) => [
  p.source, p.createdBy, p.createdAt, p.aiInvolved ? 1 : 0,
  p.confidence, p.approval, p.critical ? 1 : 0, p.note ?? null,
]

export function seedIfEmpty(db: DB) {
  const n = db.prepare('SELECT COUNT(*) c FROM collections').get() as any
  if (n.c > 0) return false

  db.exec('BEGIN')
  try {
    for (const u of USERS) {
      const { salt, hash } = hashPassword(u.pw)
      db.prepare('INSERT INTO users (id, username, name, role, salt, hash) VALUES (?,?,?,?,?,?)')
        .run(randomUUID(), u.username, u.name, u.role, salt, hash)
    }

    const c = seedCollection
    db.prepare(`INSERT INTO collections
      (id, brand, season, year, market, customer, ship_window, currency, owner)
      VALUES (?,?,?,?,?,?,?,?,?)`)
      .run(c.id, c.brand, c.season, c.year, c.market, c.customer, c.shipWindow,
           c.currency, c.owner)

    for (const s of c.stages) {
      db.prepare(`INSERT INTO stages (collection_id, n, name, weeks, output, status, gate)
                  VALUES (?,?,?,?,?,?,?)`)
        .run(c.id, s.n, s.name, s.weeks, s.output, s.status, s.gate ?? null)
    }

    for (const st of c.styles) {
      db.prepare(`INSERT INTO styles
        (id, collection_id, name, category, category_key, status, version, base_size,
         units, size_range, owner, colorways) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`)
        .run(st.id, c.id, st.name, st.category, st.categoryKey, st.status, st.version,
             st.baseSize, st.units, JSON.stringify(st.sizeRange), st.owner,
             JSON.stringify(st.colorways))

      st.fields.forEach((f, i) => db.prepare(`INSERT INTO style_fields
        (id, style_id, section, label, value, unit, source, created_by, created_at,
         ai_involved, confidence, approval, critical, note, ord)
        VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`)
        .run(f.id, st.id, f.section, f.label, f.value, f.unit ?? null, ...provCols(f), i))

      st.poms.forEach((pm, i) => db.prepare(`INSERT INTO poms
        (row_id, style_id, code, name, method, tolerance, unit, sizes, source, created_by,
         created_at, ai_involved, confidence, approval, critical, note, ord)
        VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`)
        .run(randomUUID(), st.id, pm.code, pm.name, pm.method, pm.tolerance, pm.unit,
             JSON.stringify(pm.sizes), ...provCols(pm), i))

      for (const b of st.bom) {
        db.prepare(`INSERT INTO bom
          (id, style_id, material, composition, weight, placement, supplier, qty,
           source, created_by, created_at, ai_involved, confidence, approval, critical, note)
          VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`)
          .run(b.id, st.id, b.material, b.composition, b.weight, b.placement, b.supplier,
               b.qty, ...provCols(b))
      }

      for (const t of st.trims) {
        db.prepare(`INSERT INTO trims
          (id, style_id, item, spec, placement, qty,
           source, created_by, created_at, ai_involved, confidence, approval, critical, note)
          VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`)
          .run(t.id, st.id, t.item, t.spec, t.placement, t.qty, ...provCols(t))
      }

      for (const a of st.assets) {
        db.prepare(`INSERT INTO assets (id, style_id, mode, title, caption, palette, synthetic)
                    VALUES (?,?,?,?,?,?,?)`)
          .run(a.id, st.id, a.mode, a.title, a.caption, JSON.stringify(a.palette),
               a.synthetic ? 1 : 0)
      }

      for (const g of st.gates) {
        db.prepare(`INSERT INTO gates (key, style_id, label, approver, approved, approved_at, reason)
                    VALUES (?,?,?,?,?,?,?)`)
          .run(g.key, st.id, g.label, g.approver, g.approved ? 1 : 0, g.approvedAt ?? null, null)
      }

      for (const m of st.thread) {
        db.prepare(`INSERT INTO thread
          (id, style_id, author, role, at, body, field_ref, state, proposed_rule)
          VALUES (?,?,?,?,?,?,?,?,?)`)
          .run(m.id, st.id, m.author, m.role, m.at, m.body, m.fieldRef ?? null, m.state,
               m.proposedRule ?? null)
      }
    }

    for (const i of seedInvocations) {
      db.prepare(`INSERT INTO model_invocations
        (id, at, provider, model, feature, latency_ms, cost_usd, user_action)
        VALUES (?,?,?,?,?,?,?,?)`)
        .run(i.id, i.at, i.provider, i.model, i.feature, i.latencyMs, i.costUsd, i.userAction)
    }

    db.exec('COMMIT')
  } catch (e) {
    db.exec('ROLLBACK')
    throw e
  }

  audit(db, { actor: 'system', action: 'Workspace seeded with synthetic pilot data', target: seedCollection.id })
  return true
}
