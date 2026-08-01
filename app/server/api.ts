import type { IncomingMessage, ServerResponse } from 'node:http'
import { randomUUID } from 'node:crypto'
import {
  audit, createSession, dropSession, readAudit, readCollection, readCorrections,
  readInvocations, readProposals, readStyle, spendForStyle, userForToken, verifyPassword,
  type DB,
} from './db.ts'
import { stubProvider, type DraftProvider } from './ai/provider.ts'
import { runPreflight, summarise } from '../shared/rules.ts'
import { CATEGORY_TEMPLATES } from '../shared/categories.ts'
import type { CategoryTemplate, GateKey, Role, Style, User } from '../shared/types.ts'

const COLLECTION_ID = 'SS27-CORE'

/**
 * The single place a model vendor is chosen (D-05, still open). Everything else in
 * the server treats drafting as an interface, so swapping this for a real provider
 * changes one line and no safety rule.
 */
const provider: DraftProvider = stubProvider

/** PRD §4.1 step 2 — gates are a sequence, not four independent switches. */
const GATE_ORDER: GateKey[] = ['concept', 'design', 'technical', 'handoff']

/** AI-002 — hard cap per style. Exceeding it requires explicit confirmation. */
const BUDGET_PER_STYLE = 0.05

// Plain field assignment, not a parameter property: Node runs these .ts files with
// type stripping only, which requires erasable syntax throughout the server.
class HttpError extends Error {
  status: number
  constructor(status: number, message: string) {
    super(message)
    this.status = status
  }
}

/* ------------------------------------------------------------- permissions */
// Least privilege (SEC-001). Roles are checked on the server, every time. The UI
// hides what a role cannot do; the server is what actually enforces it.

const EDIT_CRITICAL: Role[] = ['owner', 'technical']
const EDIT_ANY: Role[] = ['owner', 'technical', 'creative']
const APPROVE: Role[] = ['owner', 'technical']
const COMMENT: Role[] = ['owner', 'technical', 'creative', 'factory']

const require_ = (user: User | null, roles: Role[], what: string) => {
  if (!user) throw new HttpError(401, 'Authentication required')
  if (!roles.includes(user.role)) {
    throw new HttpError(403, `Role "${user.role}" may not ${what}`)
  }
  return user
}

/* --------------------------------------------------------------- templates */

export function readTemplates(db: DB): CategoryTemplate[] {
  const signed = new Map(
    (db.prepare('SELECT * FROM category_signoff').all() as any[])
      .map(r => [r.key as string, r.signed_by as string]))
  return CATEGORY_TEMPLATES.map(t => ({ ...t, signedOffBy: signed.get(t.key) ?? null }))
}

/** Single source of truth for preflight — the same rules the browser renders. */
export function preflight(db: DB, style: Style) {
  return runPreflight(style, {
    template: readTemplates(db).find(t => t.key === style.categoryKey) ?? null,
    corrections: readCorrections(db),
  })
}

/* ------------------------------------------------------------------ helpers */

const mustStyle = (db: DB, id: string) => {
  const s = readStyle(db, id)
  if (!s) throw new HttpError(404, `No style ${id}`)
  return s
}

/**
 * PRD §4.1 rule 4: a change after approval creates a new version and returns the
 * affected gate to Changes Requested. This is what stops an approved pack from
 * silently drifting away from what the factory was told.
 */
function bumpIfApproved(db: DB, style: Style, actor: string, reason: string) {
  const tech = style.gates.find(g => g.key === 'technical')
  if (!tech?.approved) return false
  db.prepare('UPDATE styles SET version = version + 1, status = ? WHERE id = ?')
    .run('Changes Requested', style.id)
  db.prepare('UPDATE gates SET approved = 0, approved_at = NULL WHERE style_id = ? AND key = ?')
    .run(style.id, 'technical')
  audit(db, {
    actor, action: 'Approved pack changed — new version created',
    target: `${style.id} v${style.version} → v${style.version + 1}`,
    from: 'Approved for Factory', to: 'Changes Requested', reason,
  })
  return true
}

/* ------------------------------------------------------------------- routes */

type Handler = (ctx: {
  db: DB; user: User | null; body: any; params: string[]; setCookie: (v: string) => void
}) => unknown | Promise<unknown>

const ROUTES: [string, RegExp, Handler][] = [

  ['POST', /^\/api\/login$/, ({ db, body, setCookie }) => {
    const u = db.prepare('SELECT * FROM users WHERE username = ?')
      .get(String(body?.username ?? '')) as any
    if (!u || !verifyPassword(String(body?.password ?? ''), u.salt, u.hash)) {
      throw new HttpError(401, 'Incorrect username or password')
    }
    const token = createSession(db, u.id)
    setCookie(`sid=${token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=86400`)
    audit(db, { actor: u.name, action: 'Signed in', target: u.username })
    return { user: { id: u.id, username: u.username, name: u.name, role: u.role } }
  }],

  ['POST', /^\/api\/logout$/, ({ db, user, body, setCookie }) => {
    if (body?.token) dropSession(db, body.token)
    setCookie('sid=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0')
    if (user) audit(db, { actor: user.name, action: 'Signed out', target: user.username })
    return { ok: true }
  }],

  ['GET', /^\/api\/me$/, ({ user }) => ({ user })],

  ['GET', /^\/api\/state$/, ({ db, user }) => {
    require_(user, ['owner', 'technical', 'creative', 'factory', 'viewer'], 'read')
    const collection = readCollection(db, COLLECTION_ID)
    if (!collection) throw new HttpError(404, 'No collection')
    return {
      user, collection,
      audit: readAudit(db),
      invocations: readInvocations(db),
      corrections: readCorrections(db),
      proposals: readProposals(db),
      templates: readTemplates(db),
      preflight: Object.fromEntries(
        collection.styles.map(s => [s.id, preflight(db, s)])),
    }
  }],

  ['GET', /^\/api\/styles\/([^/]+)\/preflight$/, ({ db, user, params }) => {
    require_(user, ['owner', 'technical', 'creative', 'factory', 'viewer'], 'read')
    return { findings: preflight(db, mustStyle(db, params[0])) }
  }],

  // Edit or resolve a pack field.
  ['POST', /^\/api\/styles\/([^/]+)\/fields\/([^/]+)$/, ({ db, user, params, body }) => {
    const [styleId, fieldId] = params
    const style = mustStyle(db, styleId)
    const field = style.fields.find(f => f.id === fieldId)
    if (!field) throw new HttpError(404, `No field ${fieldId}`)
    require_(user, field.critical ? EDIT_CRITICAL : EDIT_ANY,
      `edit ${field.critical ? 'production-critical ' : ''}fields`)

    const value = String(body?.value ?? '').trim()
    if (!value) throw new HttpError(400, 'A value is required')

    db.exec('BEGIN')
    try {
      bumpIfApproved(db, style, user!.name, `Edited ${field.label}`)
      db.prepare(`UPDATE style_fields SET value = ?, approval = 'Human Edited', source = 'human',
                  ai_involved = 0, created_by = ?, created_at = ?, note = NULL
                  WHERE style_id = ? AND id = ?`)
        .run(value, user!.name, new Date().toISOString(), styleId, fieldId)
      if (field.label === 'Base size') {
        db.prepare('UPDATE styles SET base_size = ? WHERE id = ?').run(value, styleId)
      }
      audit(db, {
        actor: user!.name, action: 'Field resolved', target: `${styleId} · ${field.label}`,
        from: field.value || '(empty)', to: value,
      })
      db.exec('COMMIT')
    } catch (e) { db.exec('ROLLBACK'); throw e }

    return { style: readStyle(db, styleId) }
  }],

  // Approve an AI-drafted production-critical field (TEC-003).
  ['POST', /^\/api\/styles\/([^/]+)\/fields\/([^/]+)\/approve$/, ({ db, user, params }) => {
    const [styleId, fieldId] = params
    require_(user, APPROVE, 'approve production-critical fields')
    const style = mustStyle(db, styleId)
    const field = style.fields.find(f => f.id === fieldId)
    if (!field) throw new HttpError(404, `No field ${fieldId}`)
    if (field.approval === 'Unresolved') {
      throw new HttpError(409, 'An unresolved field must be given a value before approval')
    }
    db.prepare(`UPDATE style_fields SET approval = 'Approved' WHERE style_id = ? AND id = ?`)
      .run(styleId, fieldId)
    audit(db, {
      actor: user!.name, action: 'Approved production-critical field',
      target: `${styleId} · ${field.label}`, from: field.approval, to: 'Approved',
    })
    return { style: readStyle(db, styleId) }
  }],

  // Approval gate. Refuses while deterministic blockers remain (VAL-003).
  ['POST', /^\/api\/styles\/([^/]+)\/gates\/([^/]+)\/approve$/, ({ db, user, params, body }) => {
    const [styleId, key] = params
    require_(user, APPROVE, 'approve gates')
    const style = mustStyle(db, styleId)
    const gate = style.gates.find(g => g.key === key)
    if (!gate) throw new HttpError(404, `No gate ${key}`)
    if (gate.approved) throw new HttpError(409, 'Gate is already approved')

    // Upstream gates must be satisfied first. Without this, a handoff can be signed
    // off while the technical package is still open — which is precisely the
    // ambiguity the gates exist to prevent.
    const position = GATE_ORDER.indexOf(key as GateKey)
    const unmet = GATE_ORDER.slice(0, position)
      .filter(k => !style.gates.find(g => g.key === k)?.approved)
    if (unmet.length) {
      throw new HttpError(409,
        `Upstream gate${unmet.length > 1 ? 's' : ''} not satisfied: ${unmet.join(', ')}`)
    }

    const { blockers } = summarise(preflight(db, style))
    const override = body?.override === true
    if (key === 'technical' && blockers > 0 && !override) {
      throw new HttpError(409,
        `${blockers} critical validation failures must be cleared before this gate can be approved`)
    }
    if (override && !body?.reason) {
      throw new HttpError(400, 'An override requires a recorded reason')
    }

    db.exec('BEGIN')
    try {
      db.prepare(`UPDATE gates SET approved = 1, approver = ?, approved_at = ?, reason = ?
                  WHERE style_id = ? AND key = ?`)
        .run(user!.name, new Date().toISOString(), body?.reason ?? null, styleId, key)
      if (key === 'technical') {
        db.prepare('UPDATE styles SET status = ? WHERE id = ?')
          .run('Approved for Factory', styleId)
      }
      audit(db, {
        actor: user!.name,
        action: override ? 'Gate approved by AUTHORIZED OVERRIDE' : 'Approval gate satisfied',
        target: `${styleId} · ${gate.label}`, from: 'In Review', to: 'Approved',
        reason: body?.reason ?? undefined,
      })
      db.exec('COMMIT')
    } catch (e) { db.exec('ROLLBACK'); throw e }

    return { style: readStyle(db, styleId) }
  }],

  // Factory posts a question.
  ['POST', /^\/api\/styles\/([^/]+)\/thread$/, ({ db, user, params, body }) => {
    require_(user, COMMENT, 'comment')
    const styleId = params[0]
    mustStyle(db, styleId)
    const id = randomUUID()
    db.prepare(`INSERT INTO thread (id, style_id, author, role, at, body, field_ref, state)
                VALUES (?,?,?,?,?,?,?, 'Open')`)
      .run(id, styleId, user!.name, user!.role === 'factory' ? 'factory' : 'brand',
           new Date().toISOString(), String(body?.body ?? ''), body?.fieldRef ?? null)
    audit(db, { actor: user!.name, action: 'Factory question raised', target: `${styleId} · ${id}` })
    return { style: readStyle(db, styleId) }
  }],

  // Resolve a question, optionally promoting the correction to a reusable rule (FAC-002).
  ['POST', /^\/api\/styles\/([^/]+)\/thread\/([^/]+)\/resolve$/, ({ db, user, params, body }) => {
    const [styleId, msgId] = params
    require_(user, APPROVE, 'resolve factory questions')
    const style = mustStyle(db, styleId)
    const msg = style.thread.find(m => m.id === msgId)
    if (!msg) throw new HttpError(404, `No message ${msgId}`)

    db.exec('BEGIN')
    try {
      db.prepare(`UPDATE thread SET state = 'Resolved' WHERE style_id = ? AND id = ?`)
        .run(styleId, msgId)
      audit(db, {
        actor: user!.name, action: 'Factory question resolved',
        target: `${styleId} · ${msgId}`, from: msg.state, to: 'Resolved',
      })

      if (body?.promote) {
        const { kind, target, message, severity } = body.promote
        if (!kind || !target || !message) {
          throw new HttpError(400, 'A promoted rule needs kind, target, and message')
        }
        db.prepare(`INSERT INTO corrections
          (id, style_id, thread_id, kind, target, message, severity,
           accepted, accepted_by, accepted_at) VALUES (?,?,?,?,?,?,?,1,?,?)`)
          .run(randomUUID(), styleId, msgId, kind, target, message,
               severity ?? 'blocker', user!.name, new Date().toISOString())
        audit(db, {
          actor: user!.name, action: 'Factory correction promoted to a validation rule',
          target, reason: message,
        })
      }
      db.exec('COMMIT')
    } catch (e) { db.exec('ROLLBACK'); throw e }

    return { style: readStyle(db, styleId) }
  }],

  // Export. Authorization is computed here, not sent by the client.
  ['POST', /^\/api\/styles\/([^/]+)\/exports$/, ({ db, user, params }) => {
    require_(user, ['owner', 'technical'], 'generate exports')
    const style = mustStyle(db, params[0])
    const { blockers } = summarise(preflight(db, style))
    const tech = style.gates.find(g => g.key === 'technical')!
    const authorized = blockers === 0 && tech.approved

    const manifest = ['Cover', 'Flats', 'Fabric', 'BOM', 'POM', 'Colourways', 'Trims',
                      'Construction', 'Packaging', 'Lead time', 'Revision history']
    db.prepare(`INSERT INTO exports (id, style_id, version, at, authorized, manifest)
                VALUES (?,?,?,?,?,?)`)
      .run(randomUUID(), style.id, style.version, new Date().toISOString(),
           authorized ? 1 : 0, JSON.stringify(manifest))
    audit(db, {
      actor: user!.name,
      action: authorized ? 'Production-authorized export generated' : 'DRAFT export generated',
      target: `${style.id} v${style.version}`,
    })
    return { style: readStyle(db, style.id), authorized }
  }],

  // AI drafting (AI-001 provider abstraction, AI-002 cost control, TEC-003 draft restriction).
  ['POST', /^\/api\/styles\/([^/]+)\/draft$/, async ({ db, user, params, body }) => {
    require_(user, EDIT_CRITICAL, 'run AI drafting')
    const style = mustStyle(db, params[0])
    const template = readTemplates(db).find(t => t.key === style.categoryKey) ?? null

    const result = await provider.draft(style, template)

    // AI-002: a high-cost action needs explicit confirmation. The draft is computed
    // first so the user is quoted a real number rather than an estimate, and nothing
    // is persisted until they accept it.
    const spent = spendForStyle(db, style.id)
    if (spent + result.costUsd > BUDGET_PER_STYLE && body?.confirm !== true) {
      throw new HttpError(409,
        `This run costs $${result.costUsd.toFixed(4)} and would take ${style.id} to ` +
        `$${(spent + result.costUsd).toFixed(4)}, over the $${BUDGET_PER_STYLE.toFixed(2)} ` +
        `per-style cap. Confirm to proceed.`)
    }

    const applied: string[] = []
    const proposed: string[] = []
    const declined = [...result.declined]

    db.exec('BEGIN')
    try {
      for (const s of result.suggestions) {
        const existing = style.fields.find(f => f.section === s.section && f.label === s.label)

        // §6: AI may not change a value a human owns. There is no silent overwrite
        // path — a change to an approved value would need a proposed-change workflow,
        // which the pilot does not have yet, so the agent declines instead.
        if (existing && (existing.approval === 'Approved' || existing.approval === 'Human Edited')) {
          // PRD §6: no silent overwrite — but refusing outright throws the
          // suggestion away. Park it as a proposal for a human to rule on.
          if (existing.value.trim() !== s.value.trim()) {
            const dupe = db.prepare(
              `SELECT id FROM proposals WHERE style_id = ? AND field_id = ? AND state = 'Open'`)
              .get(style.id, existing.id)
            if (!dupe) {
              db.prepare(`INSERT INTO proposals
                (id, style_id, field_id, field_label, current_value, proposed_value,
                 rationale, source, created_by, created_at, state)
                VALUES (?,?,?,?,?,?,?,?,?,?, 'Open')`)
                .run(randomUUID(), style.id, existing.id, existing.label,
                     existing.value, s.value, s.rationale,
                     `${provider.name}/${provider.model}`,
                     `${provider.name}/${provider.model}`, new Date().toISOString())
              proposed.push(s.label)
            }
          }
          declined.push({
            label: s.label,
            reason: `Already ${existing.approval.toLowerCase()} by a person. AI may not change an approved value — raised as a proposed change instead.`,
          })
          continue
        }

        const id = existing?.id ?? `ai-${s.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
        const now = new Date().toISOString()
        if (existing) {
          db.prepare(`UPDATE style_fields SET value = ?, approval = 'Suggested', source = 'ai',
                      ai_involved = 1, confidence = ?, created_by = ?, created_at = ?, note = ?
                      WHERE style_id = ? AND id = ?`)
            .run(s.value, s.confidence, `${provider.name}/${provider.model}`, now,
                 s.rationale, style.id, id)
        } else {
          const ord = (db.prepare('SELECT COALESCE(MAX(ord), 0) m FROM style_fields WHERE style_id = ?')
            .get(style.id) as any).m as number
          db.prepare(`INSERT INTO style_fields
            (id, style_id, section, label, value, unit, source, created_by, created_at,
             ai_involved, confidence, approval, critical, note, ord)
            VALUES (?,?,?,?,?,NULL,'ai',?,?,1,?, 'Suggested', ?, ?, ?)`)
            .run(id, style.id, s.section, s.label, s.value,
                 `${provider.name}/${provider.model}`, now, s.confidence,
                 template?.requiredFields.find(r => r.label === s.label)?.critical ? 1 : 0,
                 s.rationale, ord + 1)
        }
        applied.push(s.label)
      }

      db.prepare(`INSERT INTO model_invocations
        (id, at, provider, model, feature, latency_ms, cost_usd, user_action, style_id)
        VALUES (?,?,?,?,?,?,?, 'pending', ?)`)
        .run(randomUUID(), new Date().toISOString(), result.provider, result.model,
             'tech pack draft', result.latencyMs, result.costUsd, style.id)

      audit(db, {
        actor: user!.name, action: 'AI drafted tech-pack fields',
        target: `${style.id} · ${applied.length} suggested, ${declined.length} declined`,
        reason: `${result.provider}/${result.model} · $${result.costUsd.toFixed(4)}`,
      })
      db.exec('COMMIT')
    } catch (e) { db.exec('ROLLBACK'); throw e }

    return {
      style: readStyle(db, style.id), result: { ...result, declined },
      applied, proposed, proposals: readProposals(db),
    }
  }],

  // Raise a proposed change by hand (e.g. off the back of a factory correction).
  ['POST', /^\/api\/styles\/([^/]+)\/proposals$/, ({ db, user, params, body }) => {
    require_(user, EDIT_CRITICAL, 'raise proposed changes')
    const style = mustStyle(db, params[0])
    const field = style.fields.find(f => f.id === body?.fieldId)
    if (!field) throw new HttpError(404, `No field ${body?.fieldId}`)
    const value = String(body?.proposedValue ?? '').trim()
    if (!value) throw new HttpError(400, 'A proposed value is required')

    const id = randomUUID()
    db.prepare(`INSERT INTO proposals
      (id, style_id, field_id, field_label, current_value, proposed_value,
       rationale, source, created_by, created_at, state)
      VALUES (?,?,?,?,?,?,?,?,?,?, 'Open')`)
      .run(id, style.id, field.id, field.label, field.value, value,
           String(body?.rationale ?? ''), String(body?.source ?? 'manual'),
           user!.name, new Date().toISOString())
    audit(db, {
      actor: user!.name, action: 'Proposed change raised',
      target: `${style.id} · ${field.label}`, from: field.value || '(empty)', to: value,
    })
    return { proposals: readProposals(db), style: readStyle(db, style.id) }
  }],

  // Accept — applies the value and creates a new version. Never edits in place.
  ['POST', /^\/api\/styles\/([^/]+)\/proposals\/([^/]+)\/accept$/, ({ db, user, params, body }) => {
    const [styleId, pid] = params
    require_(user, APPROVE, 'accept proposed changes')
    const style = mustStyle(db, styleId)
    const p = readProposals(db).find(x => x.id === pid && x.styleId === styleId)
    if (!p) throw new HttpError(404, `No proposal ${pid}`)
    if (p.state !== 'Open') throw new HttpError(409, `Proposal is already ${p.state.toLowerCase()}`)

    db.exec('BEGIN')
    try {
      // Accepting an approved pack's value is a change after approval, so the
      // version bumps and the technical gate reopens (PRD §4.1 rule 4).
      bumpIfApproved(db, style, user!.name, `Accepted proposed change to ${p.fieldLabel}`)
      db.prepare(`UPDATE style_fields SET value = ?, approval = 'Human Edited', source = 'human',
                  ai_involved = 0, created_by = ?, created_at = ?, note = ?
                  WHERE style_id = ? AND id = ?`)
        .run(p.proposedValue, user!.name, new Date().toISOString(),
             `Accepted proposal from ${p.source}`, styleId, p.fieldId)
      if (p.fieldLabel === 'Base size') {
        db.prepare('UPDATE styles SET base_size = ? WHERE id = ?').run(p.proposedValue, styleId)
      }
      db.prepare(`UPDATE proposals SET state = 'Accepted', decided_by = ?, decided_at = ?,
                  decision_reason = ? WHERE id = ?`)
        .run(user!.name, new Date().toISOString(), body?.reason ?? null, pid)
      audit(db, {
        actor: user!.name, action: 'Proposed change accepted',
        target: `${styleId} · ${p.fieldLabel}`, from: p.currentValue || '(empty)',
        to: p.proposedValue, reason: p.rationale,
      })
      db.exec('COMMIT')
    } catch (e) { db.exec('ROLLBACK'); throw e }

    return { style: readStyle(db, styleId), proposals: readProposals(db) }
  }],

  // Dismiss — the approved value is untouched; the decision is recorded.
  ['POST', /^\/api\/styles\/([^/]+)\/proposals\/([^/]+)\/dismiss$/, ({ db, user, params, body }) => {
    const [styleId, pid] = params
    require_(user, APPROVE, 'dismiss proposed changes')
    mustStyle(db, styleId)
    const p = readProposals(db).find(x => x.id === pid && x.styleId === styleId)
    if (!p) throw new HttpError(404, `No proposal ${pid}`)
    if (p.state !== 'Open') throw new HttpError(409, `Proposal is already ${p.state.toLowerCase()}`)

    db.prepare(`UPDATE proposals SET state = 'Dismissed', decided_by = ?, decided_at = ?,
                decision_reason = ? WHERE id = ?`)
      .run(user!.name, new Date().toISOString(), body?.reason ?? null, pid)
    audit(db, {
      actor: user!.name, action: 'Proposed change dismissed',
      target: `${styleId} · ${p.fieldLabel}`, reason: body?.reason ?? undefined,
    })
    return { style: readStyle(db, styleId), proposals: readProposals(db) }
  }],

  // D-01: a technical designer signs off the category schema.
  ['POST', /^\/api\/categories\/([^/]+)\/signoff$/, ({ db, user, params }) => {
    require_(user, ['technical'], 'sign off a category schema')
    const key = params[0]
    if (!CATEGORY_TEMPLATES.some(t => t.key === key)) throw new HttpError(404, `No template ${key}`)
    db.prepare(`INSERT INTO category_signoff (key, signed_by, signed_at) VALUES (?,?,?)
                ON CONFLICT(key) DO UPDATE SET signed_by = excluded.signed_by,
                signed_at = excluded.signed_at`)
      .run(key, user!.name, new Date().toISOString())
    audit(db, { actor: user!.name, action: 'Category schema signed off', target: key })
    return { templates: readTemplates(db) }
  }],
]

/* ------------------------------------------------------------------ plumbing */

const readBody = (req: IncomingMessage) => new Promise<any>(resolve => {
  const chunks: Buffer[] = []
  req.on('data', c => chunks.push(c as Buffer))
  req.on('end', () => {
    const raw = Buffer.concat(chunks).toString('utf8')
    try { resolve(raw ? JSON.parse(raw) : {}) } catch { resolve({}) }
  })
})

const cookie = (req: IncomingMessage, name: string) =>
  (req.headers.cookie ?? '').split(';').map(s => s.trim())
    .find(s => s.startsWith(name + '='))?.slice(name.length + 1) ?? null

export async function handleApi(req: IncomingMessage, res: ServerResponse, db: DB) {
  const url = new URL(req.url ?? '/', 'http://localhost')
  const route = ROUTES.find(([m, re]) => m === req.method && re.test(url.pathname))
  const send = (status: number, payload: unknown, cookies: string[]) => {
    res.writeHead(status, {
      'content-type': 'application/json',
      ...(cookies.length ? { 'set-cookie': cookies } : {}),
    })
    res.end(JSON.stringify(payload))
  }

  if (!route) return send(404, { error: 'Not found' }, [])

  const cookies: string[] = []
  try {
    const [, re, handler] = route
    const params = (re.exec(url.pathname) ?? []).slice(1).map(decodeURIComponent)
    const body = req.method === 'GET' ? {} : await readBody(req)
    const token = cookie(req, 'sid') ?? body?.token ?? null
    const user = userForToken(db, token)
    const result = await handler({ db, user, body, params, setCookie: v => cookies.push(v) })
    send(200, result ?? { ok: true }, cookies)
  } catch (e) {
    if (e instanceof HttpError) return send(e.status, { error: e.message }, cookies)
    console.error(e)
    send(500, { error: 'Internal error' }, cookies)
  }
}
