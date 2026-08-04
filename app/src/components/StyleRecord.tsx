import { useState } from 'react'
import { useStore } from '../store'
import { summarise } from '../../shared/rules.ts'
import {
  ApprovalBadge, Badge, FlatCanvas, MoodCanvas, PackBadge, PresentationCanvas, fmt,
} from './ui'
import type { GateKey, PackField, SketchMode, Style, ValidationFinding } from '../../shared/types.ts'
import type { DraftResult } from '../../server/ai/provider.ts'

import { StyleSheetEmbed } from './StyleSheetEmbed'
import { MuseumSearch } from './MuseumSearch'

type Tab = 'stylesheet' | 'creative' | 'pack' | 'preflight' | 'approvals' | 'factory' | 'export'

export function StyleRecord({ styleId, onBack }: { styleId: string; onBack: () => void }) {
  const { collection, preflight } = useStore()
  const [tab, setTab] = useState<Tab>('stylesheet')
  const style = collection?.styles.find(s => s.id === styleId)
  const findings = preflight[styleId] ?? []
  const { blockers, warnings } = summarise(findings)
  if (!style) return null

  return (
    <>
      <button className="btn ghost sm" onClick={onBack} style={{ marginBottom: 18 }}>
        ← All styles
      </button>

      <div className="page-head" style={{ display: 'flex', alignItems: 'flex-end', gap: 20 }}>
        <div style={{ flex: 1 }}>
          <div style={{
            fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--gold-ink)', letterSpacing: '.06em',
          }}>
            {style.id} · version {style.version}
          </div>
          <h2>{style.name}</h2>
          <p>
            {style.category} · sizes {style.sizeRange.join(' / ')} · base size{' '}
            {style.baseSize ?? <span style={{ color: 'var(--blocker)' }}>not declared</span>} ·
            units {style.units} · owner {style.owner}
          </p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <PackBadge v={style.status} />
        </div>
      </div>

      <div className="tabs">
        {([
          ['stylesheet', '3D Style sheet', 'LIVE'],
          ['creative', 'Creative modes', style.assets.items.length],
          ['pack', 'Tech pack', style.fields.length + style.poms.length],
          ['preflight', 'Preflight', blockers || warnings],
          ['approvals', 'Approvals', style.gates.filter(g => g.approved).length + '/4'],
          ['factory', 'Factory thread', style.thread.length],
          ['export', 'Export', ''],
        ] as const).map(([k, label, count]) => (
          <button key={k} className={`tab ${tab === k ? 'active' : ''}`} onClick={() => setTab(k as Tab)}>
            {label}
            {count !== '' && count !== 0 && (
              <span className={`count ${k === 'preflight' && blockers ? 'blocker' : k === 'stylesheet' ? 'ai' : ''}`}>{count}</span>
            )}
          </button>
        ))}
      </div>

      {tab === 'stylesheet' && (
        <>
          <StyleSheetEmbed style={style} />
          <MuseumSearch />
        </>
      )}
      {tab === 'creative' && <Creative style={style} />}
      {tab === 'pack' && <TechPack style={style} />}
      {tab === 'preflight' && <Preflight findings={findings} />}
      {tab === 'approvals' && <Approvals style={style} blockers={blockers} />}
      {tab === 'factory' && <Factory style={style} />}
      {tab === 'export' && <Export style={style} blockers={blockers} findings={findings} />}
    </>
  )
}

/* ---------------------------------------------------------------- creative */

const MODE_META: Record<SketchMode, { title: string; note: string; cls: string }> = {
  mood: {
    title: 'Mood sketch',
    note: 'Creative reference. Communicates atmosphere and direction, not construction. Output from this mode can attach to the style record and can never attach to a tech-pack field.',
    cls: 'creative',
  },
  presentation: {
    title: 'Presentation sketch',
    note: 'Design communication. Proportion, flow, and styling. Never a technical flat, never dimensionally reliable, never a production input.',
    cls: 'creative',
  },
  flat: {
    title: 'Technical flat',
    note: 'The only creative mode that may attach to a tech pack, and only as a Draft asset with provenance. Unresolved construction details are labelled, never inferred.',
    cls: 'technical',
  },
}

function Creative({ style }: { style: Style }) {
  const [mode, setMode] = useState<SketchMode>('mood')
  const assets = style.assets.items.filter(a => a.mode === mode)
  const meta = MODE_META[mode]

  return (
    <>
      <div style={{ display: 'flex', gap: 8, marginBottom: 18 }}>
        {(['mood', 'presentation', 'flat'] as SketchMode[]).map(m => (
          <button key={m} className={`btn sm ${mode === m ? 'gold' : ''}`} onClick={() => setMode(m)}>
            {MODE_META[m].title}
          </button>
        ))}
      </div>

      <div className={`mode-note ${meta.cls}`}>
        <b>{meta.title} mode.</b> {meta.note}
      </div>

      <div className="grid c3">
        {assets.map((a, i) => (
          <div className="asset" key={a.id}>
            <div className="canvas">
              <div className="label">
                <Badge tone={a.mode === 'flat' ? 'warn' : 'ai'}>
                  {a.mode === 'flat' ? 'Draft flat' : meta.title}
                </Badge>
              </div>
              {a.mode === 'mood' ? <MoodCanvas palette={a.palette} />
                : a.mode === 'presentation' ? <PresentationCanvas palette={a.palette} />
                : <FlatCanvas back={i % 2 === 1} />}
            </div>
            <div className="meta">
              <h5>{a.title}</h5>
              <p>{a.caption}</p>
              {a.palette.length > 1 && (
                <div className="swatches">
                  {a.palette.map(c => <span key={c} className="swatch" style={{ background: c }} />)}
                </div>
              )}
              <div style={{ display: 'flex', gap: 6, marginTop: 11 }}>
                <Badge tone="draft">Synthetic</Badge>
                {a.mode !== 'flat' && <Badge tone="blocker">Not production input</Badge>}
              </div>
            </div>
          </div>
        ))}
        {assets.length === 0 && <div className="empty-state">No assets in this mode yet.</div>}
      </div>
    </>
  )
}

/* ---------------------------------------------------------------- tech pack */

function TechPack({ style }: { style: Style }) {
  const { resolveField, approveField } = useStore()
  const [editing, setEditing] = useState<string | null>(null)
  const [draft, setDraft] = useState('')

  const sections = [...new Set(style.fields.map(f => f.section))]

  const approve = (f: PackField) => void approveField(style.id, f.id)

  const resolve = async (f: PackField) => {
    await resolveField(style.id, f.id, draft)
    setEditing(null); setDraft('')
  }

  return (
    <>
      <div className="mode-note technical" style={{ marginBottom: 20 }}>
        <b>Eleven required sections.</b> Every production-critical field carries source,
        author, timestamp, AI involvement, confidence, and approval state. AI-drafted
        critical fields stay <i>Suggested</i> until a named human approves them.
      </div>

      <DraftPanel style={style} />

      <div className="card" style={{ padding: 0, marginBottom: 20 }}>
        {sections.map(sec => (
          <div key={sec}>
            <div className="section-head">{sec}</div>
            {style.fields.filter(f => f.section === sec).map(f => (
              <div className="field-row" key={f.id}>
                <div className="fk">
                  {f.label}
                  {f.critical && <span style={{ color: 'var(--blocker)', marginLeft: 5 }}>*</span>}
                </div>
                <div>
                  {editing === f.id ? (
                    <div style={{ display: 'flex', gap: 8 }}>
                      <input
                        className="field-input" autoFocus value={draft}
                        onChange={e => setDraft(e.target.value)}
                        placeholder="Enter the confirmed value"
                      />
                      <button className="btn gold sm" disabled={!draft.trim()} onClick={() => resolve(f)}>
                        Save
                      </button>
                      <button className="btn sm" onClick={() => setEditing(null)}>Cancel</button>
                    </div>
                  ) : (
                    <>
                      <div className={`fv ${f.value ? '' : 'empty'}`}>
                        {f.value || 'unresolved — no value'}
                      </div>
                      {f.note && <div className="fnote">{f.note}</div>}
                    </>
                  )}
                </div>
                <div className="fp">
                  {f.aiInvolved && <Badge tone="ai">AI · {f.confidence}</Badge>}
                  <ApprovalBadge v={f.approval} />
                  {f.approval === 'Suggested' && (
                    <button className="btn sm" onClick={() => approve(f)}>Approve</button>
                  )}
                  {f.approval === 'Unresolved' && editing !== f.id && (
                    <button className="btn sm" onClick={() => { setEditing(f.id); setDraft(f.value) }}>
                      Resolve
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="card" style={{ marginBottom: 20 }}>
        <h3>Measurements — points of measure</h3>
        <p className="sub">
          Graded across {style.sizeRange.join(' / ')}. Cells flagged red failed a deterministic
          check. Measurement method is mandatory: two people measuring differently is the most
          common cause of a rejected sample.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Code</th><th>Point of measure</th><th>Method</th><th>Tol.</th><th>Unit</th>
                {style.sizeRange.map(s => <th key={s} style={{ textAlign: 'right' }}>{s}</th>)}
                <th>Provenance</th>
              </tr>
            </thead>
            <tbody>
              {style.poms.map((pm, i) => {
                const vals = style.sizeRange.map(s => pm.sizes[s])
                return (
                  <tr key={`${pm.code}-${i}`}>
                    <td className="mono">{pm.code}</td>
                    <td>{pm.name}</td>
                    <td className="muted" style={{ fontSize: 11.5 }}>{pm.method || '—'}</td>
                    <td className={pm.tolerance ? 'mono' : 'flag mono'}>{pm.tolerance || 'missing'}</td>
                    <td className={pm.unit === style.units ? 'mono' : 'flag mono'}>{pm.unit}</td>
                    {vals.map((v, j) => {
                      const prev = vals[j - 1]
                      const bad = v != null && prev != null && v < prev
                      return <td key={j} className={`num ${bad ? 'flag' : ''}`}>{v ?? '—'}</td>
                    })}
                    <td>
                      {pm.aiInvolved
                        ? <Badge tone="ai">AI · {pm.confidence}</Badge>
                        : <ApprovalBadge v={pm.approval} />}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid c2">
        <div className="card">
          <h3>Bill of materials</h3>
          <p className="sub">Every material with composition, weight, placement, supplier, quantity.</p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th>Material</th><th>Composition</th><th>Weight</th><th>Placement</th><th>Qty</th></tr>
              </thead>
              <tbody>
                {style.bom.map(b => (
                  <tr key={b.id}>
                    <td>{b.material || <span className="muted">unnamed</span>}</td>
                    <td className={b.composition ? '' : 'flag'}>{b.composition || 'missing'}</td>
                    <td className="mono">{b.weight || '—'}</td>
                    <td className="muted">{b.placement || '—'}</td>
                    <td className={b.qty ? 'mono' : 'flag mono'}>{b.qty || 'missing'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <h3>Trims &amp; labels</h3>
          <p className="sub">Placement must be dimensioned from a named reference point.</p>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Item</th><th>Spec</th><th>Placement</th><th>Qty</th></tr></thead>
              <tbody>
                {style.trims.map(t => (
                  <tr key={t.id}>
                    <td>{t.item}</td>
                    <td className="muted">{t.spec}</td>
                    <td className={/\d/.test(t.placement) ? '' : 'flag'}>{t.placement}</td>
                    <td className="mono">{t.qty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

/* ------------------------------------------------------------- AI drafting */

function DraftPanel({ style }: { style: Style }) {
  const { draftPack, user, invocations } = useStore()
  const [busy, setBusy] = useState(false)
  const [result, setResult] = useState<DraftResult | null>(null)

  const allowed = user?.role === 'technical' || user?.role === 'owner'
  const spent = invocations
    .filter(i => i.styleId === style.id)
    .reduce((n, i) => n + i.costUsd, 0)

  const run = async (confirm?: boolean) => {
    setBusy(true)
    setResult(await draftPack(style.id, confirm))
    setBusy(false)
  }

  return (
    <div className="card" style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 280 }}>
          <h3>Draft with AI</h3>
          <p className="sub" style={{ marginBottom: 0 }}>
            Fills fields the trade already agrees on. It will not invent a measurement,
            and it will not make a decision that belongs to a person — those come back as
            refusals with the reason. Nothing it writes is authoritative: every field
            lands as <i>Suggested</i> and still needs your approval.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
          <button
            className="btn gold" disabled={!allowed || busy}
            title={allowed ? '' : 'Only a technical designer or owner may run drafting'}
            onClick={() => void run()}
          >
            {busy ? 'Drafting…' : 'Draft missing fields'}
          </button>
          <span className="muted mono" style={{ fontSize: 11 }}>
            ${spent.toFixed(4)} spent on this style
          </span>
        </div>
      </div>

      {result && (
        <div style={{ marginTop: 18, display: 'grid', gap: 14 }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
            <Badge tone="ai">{result.provider} / {result.model}</Badge>
            <Badge tone="draft">{(result.latencyMs / 1000).toFixed(1)}s</Badge>
            <Badge tone="draft">${result.costUsd.toFixed(4)}</Badge>
            <button className="btn sm ghost" onClick={() => void run(true)}>Run again</button>
          </div>

          {result.suggestions.length > 0 && (
            <div>
              <div className="section-head" style={{ paddingLeft: 0, borderBottom: 'none' }}>
                Drafted — {result.suggestions.length} suggested
              </div>
              {result.suggestions.map(s => (
                <div key={s.label} className="finding" style={{ borderLeft: '3px solid var(--ai)' }}>
                  <div>
                    <Badge tone="ai">AI · {s.confidence}</Badge>
                    <div className="ref" style={{ marginTop: 7 }}>{s.section} · {s.label}</div>
                  </div>
                  <div>
                    <div className="msg">{s.value}</div>
                    <div className="detail">{s.rationale}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {result.declined.length > 0 && (
            <div>
              <div className="section-head" style={{ paddingLeft: 0, borderBottom: 'none' }}>
                Refused — {result.declined.length}, and this is the point
              </div>
              {result.declined.map(d => (
                <div key={d.label} className="finding blocker">
                  <div>
                    <Badge tone="blocker">Refused</Badge>
                    <div className="ref" style={{ marginTop: 7 }}>{d.label}</div>
                  </div>
                  <div><div className="detail" style={{ fontSize: 12.5 }}>{d.reason}</div></div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

/* ---------------------------------------------------------------- preflight */

function Preflight({ findings }: { findings: ValidationFinding[] }) {
  const { blockers, warnings } = summarise(findings)
  const families = [...new Set(findings.map(f => f.family))]

  return (
    <>
      <div className="grid c3" style={{ marginBottom: 22 }}>
        <div className="card tight"><div className="stat">
          <span className="k">Blockers</span>
          <span className={`v ${blockers ? 'blocker' : 'ok'}`}>{blockers}</span>
          <span className="n">Prevent Approved for Factory</span>
        </div></div>
        <div className="card tight"><div className="stat">
          <span className="k">Warnings</span>
          <span className={`v ${warnings ? 'warn' : 'ok'}`}>{warnings}</span>
          <span className="n">Reviewable, non-blocking</span>
        </div></div>
        <div className="card tight"><div className="stat">
          <span className="k">Rule source</span>
          <span className="v" style={{ fontSize: 21 }}>Deterministic</span>
          <span className="n">Arithmetic and presence checks only — no model judgement</span>
        </div></div>
      </div>

      <div className="mode-note technical">
        <b>Model-based review may add warnings. It may never clear a blocker.</b> Every finding
        below is reproducible from the pack itself, which is what makes it trustworthy enough
        to stop an export.
      </div>

      {families.map(fam => (
        <div key={fam} style={{ marginBottom: 24 }}>
          <div className="section-head" style={{ paddingLeft: 0, borderBottom: 'none' }}>{fam}</div>
          {findings.filter(f => f.family === fam).map(f => (
            <div className={`finding ${f.severity}`} key={f.id}>
              <div>
                <Badge tone={f.severity === 'blocker' ? 'blocker' : 'warn'}>{f.severity}</Badge>
                <div className="ref" style={{ marginTop: 7 }}>{f.ref}</div>
              </div>
              <div>
                <div className="msg">{f.message}</div>
                <div className="detail">{f.detail}</div>
              </div>
            </div>
          ))}
        </div>
      ))}

      {findings.length === 0 && (
        <div className="empty-state">Preflight clean. All deterministic checks passed.</div>
      )}
    </>
  )
}

/* ---------------------------------------------------------------- approvals */

function Approvals({ style, blockers }: { style: Style; blockers: number }) {
  const { approveGate } = useStore()
  const approve = (key: GateKey) => void approveGate(style.id, key)

  return (
    <>
      <div className="mode-note technical">
        <b>Approvals are immutable events, not toggles.</b> Concept and design gates fire at
        stages 4 and 6, long before a tech pack exists. The technical gate cannot be satisfied
        while deterministic blockers remain.
      </div>

      {style.gates.map(g => (
        <div className={`gate ${g.approved ? 'done' : ''}`} key={g.key}>
          <div className="g-mark">{g.approved ? '✓' : '·'}</div>
          <div className="g-body">
            <h5>{g.label}</h5>
            <p>
              {g.approved
                ? `Approved by ${g.approver} · ${fmt(g.approvedAt)}`
                : g.approver === 'Unassigned'
                  ? 'No named approver assigned'
                  : `Awaiting ${g.approver}`}
            </p>
          </div>
          {g.approved
            ? <Badge tone="ok">Approved</Badge>
            : (
              <button
                className="btn gold sm"
                disabled={g.key === 'technical' && blockers > 0}
                title={g.key === 'technical' && blockers > 0
                  ? `${blockers} blockers must be cleared first` : ''}
                onClick={() => approve(g.key)}
              >
                {g.key === 'technical' && blockers > 0
                  ? `Blocked — ${blockers} failures` : 'Approve'}
              </button>
            )}
        </div>
      ))}
    </>
  )
}

/* ------------------------------------------------------------------ factory */

function Factory({ style }: { style: Style }) {
  const { resolveThread } = useStore()

  // Resolving the hip question also promotes it to a rule that will fire on every
  // future style — that promotion is the whole point of FAC-002.
  const resolveMsg = (id: string, promote?: boolean) => void resolveThread(style.id, id,
    promote
      ? {
          kind: 'require_field', target: 'Shrinkage', severity: 'blocker',
          message: 'Shrinkage must be stated — the factory cannot cut bias panels without it',
        }
      : undefined)

  return (
    <>
      <div className="mode-note technical">
        <b>This loop is the product.</b> A resolved factory correction is classified and
        proposed as a reusable validation rule, so the same ambiguity cannot reach a second
        style. Everything above this panel is table stakes; this is the part that compounds.
      </div>

      <div className="card">
        <h3>Factory thread — Partner A sample room</h3>
        <p className="sub">Questions anchored to a specific field, page, asset, or measurement.</p>
        {style.thread.map(m => (
          <div className={`msg ${m.role}`} key={m.id}>
            <div className="av">{m.role === 'factory' ? 'FA' : 'NW'}</div>
            <div className="m-body">
              <div className="m-head">
                <b>{m.author}</b>
                <time>{fmt(m.at)}</time>
                {m.fieldRef && <Badge tone="gold">→ {m.fieldRef}</Badge>}
                <Badge tone={m.state === 'Resolved' ? 'ok' : 'warn'}>{m.state}</Badge>
              </div>
              <div className="m-text">{m.body}</div>
              {m.proposedRule && (
                <div className="m-rule">
                  Proposed reusable rule → <b>{m.proposedRule}</b>
                  <span className="muted"> · already active in the deterministic engine</span>
                </div>
              )}
              {m.state !== 'Resolved' && (
                <div style={{ display: 'flex', gap: 8, marginTop: 11 }}>
                  <button className="btn sm" onClick={() => resolveMsg(m.id)}>
                    Mark resolved
                  </button>
                  <button className="btn sm gold" onClick={() => resolveMsg(m.id, true)}>
                    Resolve &amp; promote to a rule
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
        {style.thread.length === 0 && <div className="empty-state">No factory questions yet.</div>}
      </div>
    </>
  )
}

/* ------------------------------------------------------------------- export */

function Export({ style, blockers, findings }: {
  style: Style; blockers: number; findings: ValidationFinding[]
}) {
  const { createExport } = useStore()
  const techGate = style.gates.find(g => g.key === 'technical')!
  // Advisory only — the server recomputes authorization and is the authority.
  const authorized = blockers === 0 && techGate.approved

  const doExport = () => void createExport(style.id)

  return (
    <>
      <div className={`export-state ${authorized ? 'ready' : 'blocked'}`} style={{ marginBottom: 22 }}>
        <h4>{authorized ? 'Cleared for factory handoff' : 'Export blocked'}</h4>
        <p>
          {authorized
            ? 'All deterministic checks pass and the technical gate carries a named approval. The export will be marked Production Authorized.'
            : `${blockers} critical validation failure${blockers === 1 ? '' : 's'} and ${techGate.approved ? 'an approved' : 'an unapproved'} technical gate. Any export produced now is watermarked DRAFT and omits Production Authorized status.`}
        </p>
        <button className="btn gold" onClick={doExport}>
          {authorized ? 'Generate authorized package' : 'Generate DRAFT package anyway'}
        </button>
      </div>

      <div className="grid split">
        <div className="card">
          <h3>Package preview</h3>
          <p className="sub">What the factory receives. Version identity travels with the document.</p>
          <div className="watermark">
            <h4>{style.name}</h4>
            <div className="wm-meta">
              {style.id} · v{style.version} · {style.category} · generated {fmt(new Date().toISOString())}
            </div>
            <div className="wm-grid">
              <div className="wm-cell"><b>Base size</b><span>{style.baseSize ?? '— not declared'}</span></div>
              <div className="wm-cell"><b>Units</b><span>{style.units}</span></div>
              <div className="wm-cell"><b>Sizes</b><span>{style.sizeRange.join(' / ')}</span></div>
              <div className="wm-cell"><b>Approvers</b><span>
                {style.gates.filter(g => g.approved).map(g => g.approver).join(', ') || 'none'}
              </span></div>
              <div className="wm-cell"><b>Validation</b><span>
                {blockers} blockers · {findings.length - blockers} warnings
              </span></div>
              <div className="wm-cell"><b>Status</b><span>
                {authorized ? 'Production Authorized' : 'DRAFT'}
              </span></div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gap: 18, alignContent: 'start' }}>
          <div className="card">
            <h3>Export manifest</h3>
            <p className="sub">EXP-002 — what was included and who signed it.</p>
            <div className="manifest">
              <div><span className="k">Style</span>{style.id}</div>
              <div><span className="k">Version</span>v{style.version}</div>
              <div><span className="k">Units</span>{style.units}</div>
              <div><span className="k">Blockers</span>{blockers}</div>
              <div><span className="k">Technical gate</span>{techGate.approved ? 'approved' : 'not approved'}</div>
              <div><span className="k">Authorization</span>{authorized ? 'Production Authorized' : 'DRAFT only'}</div>
            </div>
          </div>

          <div className="card">
            <h3>Export history</h3>
            <p className="sub">Every package the factory has ever received.</p>
            {style.exports.length === 0
              ? <div className="empty-state" style={{ padding: 22 }}>Nothing exported yet.</div>
              : style.exports.map(e => (
                <div key={e.id} style={{
                  display: 'flex', alignItems: 'center', gap: 10, padding: '9px 0',
                  borderBottom: '1px solid var(--line)',
                }}>
                  <Badge tone={e.authorized ? 'ok' : 'warn'}>
                    {e.authorized ? 'Authorized' : 'Draft'}
                  </Badge>
                  <span className="mono">v{e.version}</span>
                  <span className="muted" style={{ marginLeft: 'auto', fontSize: 11.5 }}>{fmt(e.at)}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}
