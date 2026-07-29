import { useStore } from '../store'
import { Badge, fmt } from './ui'

export function Governance() {
  const { audit, invocations, corrections, templates, user, signOffCategory } = useStore()
  const total = invocations.reduce((n, i) => n + i.costUsd, 0)
  const accepted = corrections.filter(c => c.accepted)

  return (
    <>
      <div className="page-head">
        <h2>Governance</h2>
        <p>
          Audit trail, learned rules, category schemas, and the model-cost ledger. Every
          stage transition, field edit, approval, override, export, and model action is
          recorded server-side with an actor and a timestamp (AUD-001, AI-002).
        </p>
      </div>

      <div className="grid c4" style={{ marginBottom: 24 }}>
        <div className="card tight"><div className="stat">
          <span className="k">Audit events</span>
          <span className="v">{audit.length}</span>
          <span className="n">Append-only, server-side</span>
        </div></div>
        <div className="card tight"><div className="stat">
          <span className="k">Learned rules</span>
          <span className={`v ${accepted.length ? 'ok' : ''}`}>{accepted.length}</span>
          <span className="n">Factory corrections now enforced everywhere</span>
        </div></div>
        <div className="card tight"><div className="stat">
          <span className="k">Model cost</span>
          <span className="v">${total.toFixed(3)}</span>
          <span className="n">Across {invocations.length} invocations</span>
        </div></div>
        <div className="card tight"><div className="stat">
          <span className="k">Signed-off schemas</span>
          <span className={`v ${templates.every(t => t.signedOffBy) ? 'ok' : 'warn'}`}>
            {templates.filter(t => t.signedOffBy).length}/{templates.length}
          </span>
          <span className="n">D-01 — category rule sets</span>
        </div></div>
      </div>

      <div className="grid split">
        <div style={{ display: 'grid', gap: 18, alignContent: 'start' }}>
          <div className="card">
            <h3>Learned from the factory</h3>
            <p className="sub">
              Corrections promoted to deterministic rules (FAC-002). These run against every
              style, including ones that never had the original problem. This is the only part
              of the system that gets harder to copy over time.
            </p>
            {accepted.length === 0
              ? <div className="empty-state" style={{ padding: 26 }}>
                  No corrections promoted yet. Resolve a factory question with
                  “Resolve &amp; promote to a rule”.
                </div>
              : accepted.map(c => (
                <div key={c.id} style={{ padding: '12px 0', borderBottom: '1px solid var(--line)' }}>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 5 }}>
                    <Badge tone={c.severity === 'blocker' ? 'blocker' : 'warn'}>{c.severity}</Badge>
                    <span className="mono" style={{ fontSize: 11.5 }}>{c.kind} → {c.target}</span>
                  </div>
                  <div style={{ fontSize: 12.5 }}>{c.message}</div>
                  <div className="muted" style={{ fontSize: 11 }}>
                    From {c.styleId} · accepted by {c.acceptedBy} · {fmt(c.acceptedAt ?? undefined)}
                  </div>
                </div>
              ))}
          </div>

          <div className="card">
            <h3>Audit log</h3>
            <p className="sub">Written inside the same transaction as the change it records.</p>
            {audit.map(a => (
              <div className="audit-row" key={a.id}>
                <time>{fmt(a.at)}</time>
                <span className="actor">{a.actor}</span>
                <span>
                  {a.action}
                  {a.target && <span className="muted"> · {a.target}</span>}
                  {a.from && a.to && <span className="muted"> · {a.from} → {a.to}</span>}
                  {a.reason && <span className="muted"> · “{a.reason}”</span>}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gap: 18, alignContent: 'start' }}>
          <div className="card">
            <h3>Category schemas</h3>
            <p className="sub">
              D-01. Required fields and POMs are data, not code — changing the pilot category
              is an entry in the template table. A schema governs real work only once a
              technical designer signs it off.
            </p>
            {templates.map(t => (
              <div key={t.key} style={{ padding: '13px 0', borderBottom: '1px solid var(--line)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 5 }}>
                  <b style={{ fontSize: 13, fontWeight: 500 }}>{t.label}</b>
                  <span className="mono muted" style={{ fontSize: 11 }}>{t.key}</span>
                  {t.signedOffBy
                    ? <Badge tone="ok">Signed off</Badge>
                    : <Badge tone="warn">Unsigned</Badge>}
                </div>
                <div className="muted" style={{ fontSize: 11.5 }}>
                  {t.requiredFields.length} required fields · {t.requiredPoms.length} required POMs
                  {t.signedOffBy && <> · by {t.signedOffBy}</>}
                </div>
                {!t.signedOffBy && (
                  <button
                    className="btn sm" style={{ marginTop: 9 }}
                    disabled={user?.role !== 'technical'}
                    title={user?.role !== 'technical'
                      ? 'Only a technical designer may sign off a category schema' : ''}
                    onClick={() => void signOffCategory(t.key)}
                  >
                    Sign off schema
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="card">
            <h3>Model invocations</h3>
            <p className="sub">Provider, model, latency, and cost recorded per artifact.</p>
            {invocations.map(i => (
              <div key={i.id} style={{ padding: '11px 0', borderBottom: '1px solid var(--line)' }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 4 }}>
                  <span style={{ fontSize: 12.5 }}>{i.feature}</span>
                  <Badge tone={i.userAction === 'pending' ? 'warn' : 'draft'}>{i.userAction}</Badge>
                  <span className="mono" style={{ marginLeft: 'auto' }}>${i.costUsd.toFixed(3)}</span>
                </div>
                <div className="muted mono" style={{ fontSize: 11 }}>
                  {i.provider} / {i.model} · {(i.latencyMs / 1000).toFixed(1)}s · {fmt(i.at)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
