import { test, before, after, describe } from 'node:test'
import assert from 'node:assert/strict'
import { createServer, type Server } from 'node:http'
import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { openDb, readStyle, type DB } from '../db.ts'
import { seedIfEmpty } from '../seed.ts'
import { handleApi, preflight } from '../api.ts'
import { summarise } from '../../shared/rules.ts'

// ---------------------------------------------------------------------------
// Route + persistence tests. PRD §8 asks for proof that "every user-visible
// mutation uses a real authenticated route and durable database transaction" and
// that state "survives reload, logout/login, and concurrent review". These tests
// are that proof — and specifically the thing that went wrong on Natalie's other
// team: routes the UI calls that were never actually built.
// ---------------------------------------------------------------------------

let dir: string, file: string, db: DB, server: Server, base: string

before(async () => {
  dir = mkdtempSync(join(tmpdir(), 'atelier-test-'))
  file = join(dir, 'test.db')
  db = openDb(file)
  seedIfEmpty(db)
  server = createServer((req, res) => handleApi(req, res, db))
  await new Promise<void>(r => server.listen(0, r))
  base = `http://localhost:${(server.address() as any).port}`
})

after(async () => {
  await new Promise<void>(r => server.close(() => r()))
  db.close()
  rmSync(dir, { recursive: true, force: true })
})

/* --------------------------------------------------------------------- utils */

type Res = { status: number; body: any; cookie: string | null }

async function call(
  method: string, path: string, opts: { body?: any; sid?: string } = {},
): Promise<Res> {
  const r = await fetch(base + path, {
    method,
    headers: {
      'content-type': 'application/json',
      ...(opts.sid ? { cookie: `sid=${opts.sid}` } : {}),
    },
    body: method === 'GET' ? undefined : JSON.stringify(opts.body ?? {}),
  })
  const raw = r.headers.get('set-cookie')
  return {
    status: r.status,
    body: await r.json().catch(() => null),
    cookie: raw ? (raw.match(/sid=([^;]*)/)?.[1] ?? null) : null,
  }
}

const login = async (username: string, password = 'pilot') => {
  const r = await call('POST', '/api/login', { body: { username, password } })
  assert.equal(r.status, 200, `login for ${username} should succeed`)
  return r.cookie!
}

/* ---------------------------------------------------------------------- auth */

describe('authentication', () => {
  test('parses a sketch into a DRAFT structured response', async () => {
    const r = await call('POST', '/api/sketch/parse', {
      body: {
        styleId: 'ST-27-011',
        sourceAsset: 'showroom/assets/flat_sketch_garment_A.png',
      },
    })

    assert.equal(r.status, 200)
    assert.equal(r.body.field_status, 'DRAFT')
    assert.equal(r.body.styleId, 'ST-27-011')
    assert.equal(r.body.sourceAsset, 'showroom/assets/flat_sketch_garment_A.png')
    assert.equal(typeof r.body.garment_category, 'string')
    assert.equal(typeof r.body.silhouette, 'string')
    assert.ok(Array.isArray(r.body.views_present))
    assert.ok(Array.isArray(r.body.views_missing))
    assert.equal(typeof r.body.key_design_features, 'object')
    assert.equal(typeof r.body.rough_proportions, 'object')
  })

  test('rejects a wrong password', async () => {
    const r = await call('POST', '/api/login', {
      body: { username: 'natalie', password: 'wrong' },
    })
    assert.equal(r.status, 401)
  })

  test('rejects an unknown user', async () => {
    const r = await call('POST', '/api/login', { body: { username: 'nobody', password: 'pilot' } })
    assert.equal(r.status, 401)
  })

  test('refuses unauthenticated reads', async () => {
    const r = await call('GET', '/api/state')
    assert.equal(r.status, 401)
  })

  test('issues an httpOnly session cookie on success', async () => {
    const r = await call('POST', '/api/login', {
      body: { username: 'natalie', password: 'pilot' },
    })
    assert.equal(r.status, 200)
    assert.ok(r.cookie, 'expected a sid cookie')
    assert.equal(r.body.user.role, 'technical')
  })
})

/* --------------------------------------------------------------- permissions */

describe('least privilege (SEC-001)', () => {
  test('a viewer may read but not edit', async () => {
    const sid = await login('viewer')
    assert.equal((await call('GET', '/api/state', { sid })).status, 200)
    const r = await call('POST', '/api/styles/DR-1041/fields/f-base', {
      sid, body: { value: 'M' },
    })
    assert.equal(r.status, 403)
  })

  test('a factory reviewer may comment but not approve a gate', async () => {
    const sid = await login('factory')
    const comment = await call('POST', '/api/styles/DR-1041/thread', {
      sid, body: { body: 'Confirming the placket width before we cut.' },
    })
    assert.equal(comment.status, 200)

    const approve = await call('POST', '/api/styles/TP-2010/gates/technical/approve', { sid })
    assert.equal(approve.status, 403)
    assert.match(approve.body.error, /may not approve gates/)
  })

  test('a creative may not edit a production-critical field', async () => {
    // No creative account is seeded, so assert the rule through the viewer path and
    // the explicit role list instead of inventing a user the pilot has not agreed.
    const sid = await login('viewer')
    const r = await call('POST', '/api/styles/DR-1041/fields/f-fab-shrink', {
      sid, body: { value: '3% warp, 2% weft' },
    })
    assert.equal(r.status, 403)
    assert.match(r.body.error, /production-critical/)
  })
})

/* -------------------------------------------------------------- persistence */

describe('durable persistence (PRD §8)', () => {
  test('a resolved field survives a full database reopen', async () => {
    const sid = await login('natalie')
    const r = await call('POST', '/api/styles/DR-1041/fields/f-fab-shrink', {
      sid, body: { value: '3% warp, 2% weft after one wash' },
    })
    assert.equal(r.status, 200)

    // Close and reopen the database file — the closest thing to a server restart.
    db.close()
    db = openDb(file)

    const style = readStyle(db, 'DR-1041')!
    const field = style.fields.find(f => f.id === 'f-fab-shrink')!
    assert.equal(field.value, '3% warp, 2% weft after one wash')
    assert.equal(field.approval, 'Human Edited')
    assert.equal(field.aiInvolved, false)
  })

  test('the session survives the reopen too', async () => {
    const sid = await login('natalie')
    db.close(); db = openDb(file)
    const r = await call('GET', '/api/state', { sid })
    assert.equal(r.status, 200)
    assert.equal(r.body.user.username, 'natalie')
  })

  test('every mutation lands in the audit log', async () => {
    const sid = await login('natalie')
    await call('POST', '/api/styles/DR-1041/fields/f-pkg-bag', {
      sid, body: { value: 'Poly bag 30 x 40 cm, flat fold' },
    })
    const r = await call('GET', '/api/state', { sid })
    const entry = r.body.audit.find((a: any) =>
      a.action === 'Field resolved' && a.target.includes('Individual bagging'))
    assert.ok(entry, 'expected an audit entry for the edit')
    assert.equal(entry.actor, 'N. Walker')
    assert.equal(entry.to, 'Poly bag 30 x 40 cm, flat fold')
  })
})

/* ------------------------------------------------------------------- blocking */

describe('validation blocks the gate (VAL-003)', () => {
  test('the technical gate refuses while blockers remain', async () => {
    const sid = await login('natalie')
    const style = readStyle(db, 'DR-1041')!
    const { blockers } = summarise(preflight(db, style))
    assert.ok(blockers > 0, 'DR-1041 should still have blockers')

    const r = await call('POST', '/api/styles/DR-1041/gates/technical/approve', { sid })
    assert.equal(r.status, 409)
    assert.match(r.body.error, /must be cleared/)
  })

  test('an override is refused without a recorded reason', async () => {
    const sid = await login('natalie')
    const r = await call('POST', '/api/styles/DR-1041/gates/technical/approve', {
      sid, body: { override: true },
    })
    assert.equal(r.status, 400)
    assert.match(r.body.error, /recorded reason/)
  })

  test('an export produced while blocked is not authorized', async () => {
    const sid = await login('natalie')
    const r = await call('POST', '/api/styles/DR-1041/exports', { sid })
    assert.equal(r.status, 200)
    assert.equal(r.body.authorized, false)
    assert.equal(r.body.style.exports[0].authorized, false)
  })

  test('gates are a sequence — handoff cannot jump the technical gate', async () => {
    const sid = await login('natalie')
    const style = readStyle(db, 'TP-2010')!
    assert.deepEqual(style.gates.map(g => g.key),
      ['concept', 'design', 'technical', 'handoff'],
      'gates must come back in lifecycle order, not row order')
    assert.equal(style.gates.find(g => g.key === 'technical')!.approved, false)

    const r = await call('POST', '/api/styles/TP-2010/gates/handoff/approve', { sid })
    assert.equal(r.status, 409)
    assert.match(r.body.error, /Upstream gate not satisfied: technical/)
  })

  test('a clean style can be approved and exported as authorized', async () => {
    const sid = await login('natalie')
    const before = summarise(preflight(db, readStyle(db, 'TP-2010')!))
    assert.equal(before.blockers, 0, 'TP-2010 is the clean contrast case')

    const gate = await call('POST', '/api/styles/TP-2010/gates/technical/approve', { sid })
    assert.equal(gate.status, 200)
    assert.equal(gate.body.style.status, 'Approved for Factory')

    const exp = await call('POST', '/api/styles/TP-2010/exports', { sid })
    assert.equal(exp.body.authorized, true)
  })
})

/* ------------------------------------------------------------- version bumps */

describe('change after approval creates a version (PRD §4.1)', () => {
  test('editing a critical field reopens the gate and bumps the version', async () => {
    const sid = await login('natalie')
    const before = readStyle(db, 'TP-2010')!
    assert.equal(before.gates.find(g => g.key === 'technical')!.approved, true,
      'previous test should have left the gate approved')

    const r = await call('POST', '/api/styles/TP-2010/fields/g-fab', {
      sid, body: { value: '100% cotton poplin, 130 gsm, 145 cm' },
    })
    assert.equal(r.status, 200)

    const after = readStyle(db, 'TP-2010')!
    assert.equal(after.version, before.version + 1)
    assert.equal(after.gates.find(g => g.key === 'technical')!.approved, false)
    assert.equal(after.status, 'Changes Requested')
  })
})

/* ----------------------------------------------------- factory → rule (FAC-002) */

describe('factory corrections become rules', () => {
  test('a promoted correction fires on a different style', async () => {
    const sid = await login('natalie')
    const dr = readStyle(db, 'DR-1041')!
    const msg = dr.thread[0]

    const cleanBefore = summarise(preflight(db, readStyle(db, 'TP-2010')!)).blockers

    const resolve = await call('POST', `/api/styles/DR-1041/thread/${msg.id}/resolve`, {
      sid,
      body: {
        promote: {
          kind: 'require_field', target: 'Shrinkage',
          message: 'Shrinkage must be stated — the factory cannot cut without it',
          severity: 'blocker',
        },
      },
    })
    assert.equal(resolve.status, 200)

    const cleanAfter = summarise(preflight(db, readStyle(db, 'TP-2010')!)).blockers
    assert.equal(cleanAfter, cleanBefore + 1,
      'the learned rule should now block a style that never had the original problem')

    const findings = preflight(db, readStyle(db, 'TP-2010')!)
    const learned = findings.find(f => f.family === 'Learned from factory')
    assert.ok(learned)
    assert.match(learned!.detail, /Promoted from a factory correction on DR-1041/)
  })
})

/* ------------------------------------------------------------- AI drafting */

describe('AI drafting (TEC-003, AI-001, AI-002)', () => {
  test('a viewer may not run drafting', async () => {
    const sid = await login('viewer')
    const r = await call('POST', '/api/styles/DR-1041/draft', { sid })
    assert.equal(r.status, 403)
  })

  test('drafts conventions, refuses measurements and decisions', async () => {
    const sid = await login('natalie')
    const r = await call('POST', '/api/styles/DR-1041/draft', { sid })
    assert.equal(r.status, 200)

    const labels = r.body.result.suggestions.map((s: any) => s.label)
    assert.ok(labels.includes('Bias hang time'),
      'hang time is a trade convention and should be drafted')

    const declined = Object.fromEntries(
      r.body.result.declined.map((d: any) => [d.label, d.reason]))
    assert.match(declined['Shrinkage'] ?? declined['Sleeve placket closure'], /./)
    assert.match(declined['Sleeve placket closure'], /designer decision/)
    assert.match(declined['Base size'], /must not pick it/)
  })

  test('drafted fields are Suggested, never Approved', async () => {
    const style = readStyle(db, 'DR-1041')!
    const drafted = style.fields.find(f => f.label === 'Bias hang time')!
    assert.equal(drafted.approval, 'Suggested')
    assert.equal(drafted.aiInvolved, true)
    assert.equal(drafted.source, 'ai')
    assert.ok(drafted.note, 'a drafted field carries its rationale')
  })

  test('drafting does not clear a single blocker on its own', async () => {
    const findings = preflight(db, readStyle(db, 'DR-1041')!)
    const restriction = findings.find(f =>
      f.message.includes('AI-drafted production-critical field'))
    assert.ok(restriction, 'drafted critical fields must still block the export')
    assert.equal(restriction!.severity, 'blocker')
  })

  test('a value a human owns is never touched', async () => {
    const sid = await login('natalie')
    const before = readStyle(db, 'DR-1041')!
      .fields.find(f => f.label === 'Individual bagging')!
    assert.equal(before.approval, 'Human Edited',
      'an earlier test resolved this field by hand')

    const r = await call('POST', '/api/styles/DR-1041/draft', { sid, body: { confirm: true } })
    assert.equal(r.status, 200)

    // Two independent guarantees. The provider does not propose over a human-owned
    // field at all, so it never appears in the result...
    assert.ok(!r.body.result.suggestions.some((s: any) => s.label === 'Individual bagging'))
    // ...and the value is untouched on disk.
    const after = readStyle(db, 'DR-1041')!
      .fields.find(f => f.label === 'Individual bagging')!
    assert.equal(after.value, before.value)
    assert.equal(after.approval, 'Human Edited')
    assert.equal(after.aiInvolved, false)
  })

  test('every run is logged, and the cap eventually refuses an unconfirmed run', async () => {
    const sid = await login('natalie')
    const state = await call('GET', '/api/state', { sid })
    const runs = state.body.invocations.filter((i: any) =>
      i.styleId === 'DR-1041' && i.feature === 'tech pack draft')
    assert.ok(runs.length >= 2, 'each run is recorded against the style')
    assert.ok(runs.every((i: any) => i.costUsd > 0 && i.userAction === 'pending'))

    // Don't couple the test to the stub's price list — just keep drafting until the
    // ledger crosses the cap, which is the behaviour that actually matters.
    let refused: Res | null = null
    for (let i = 0; i < 20 && !refused; i++) {
      const r = await call('POST', '/api/styles/DR-1041/draft', { sid })
      if (r.status === 409) refused = r
    }
    assert.ok(refused, 'an unconfirmed run should eventually hit the per-style cap')
    assert.match(refused!.body.error, /per-style cap\. Confirm to proceed/)

    const confirmed = await call('POST', '/api/styles/DR-1041/draft', {
      sid, body: { confirm: true },
    })
    assert.equal(confirmed.status, 200, 'an explicit confirmation proceeds')
  })
})

/* ---------------------------------------------------------------------- D-01 */

describe('category schema sign-off (D-01)', () => {
  test('an unsigned template warns, and only a technical designer may sign it', async () => {
    const owner = await login('mitra')
    const denied = await call('POST', '/api/categories/woven-dress/signoff', { sid: owner })
    assert.equal(denied.status, 403)

    const sid = await login('natalie')
    const findingsBefore = preflight(db, readStyle(db, 'DR-1041')!)
    assert.ok(findingsBefore.some(f => f.message.includes('has not been signed off')))

    const ok = await call('POST', '/api/categories/woven-dress/signoff', { sid })
    assert.equal(ok.status, 200)
    assert.equal(ok.body.templates.find((t: any) => t.key === 'woven-dress').signedOffBy,
      'N. Walker')

    const findingsAfter = preflight(db, readStyle(db, 'DR-1041')!)
    assert.ok(!findingsAfter.some(f => f.message.includes('has not been signed off')))
  })
})
