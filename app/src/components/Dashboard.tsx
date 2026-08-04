import { useStore } from '../store'
import { summarise } from '../../shared/rules.ts'
import { Badge, FlatCanvas, MoodCanvas, PackBadge, PresentationCanvas, StageBadge } from './ui'
import { SeasonCalendar } from './SeasonCalendar'
import type { Style, ValidationFinding } from '../../shared/types.ts'

export function Dashboard({ onOpen }: { onOpen: (id: string) => void }) {
  const { collection, preflight } = useStore()
  if (!collection) return null
  const done = collection.stages.filter(s => s.status === 'Complete' || s.status === 'Approved').length
  const blocked = collection.stages.filter(s => s.status === 'Blocked')
  const openQs = collection.styles.flatMap(s => s.thread).filter(m => m.state === 'Open').length
  const allFindings = collection.styles.flatMap(s => preflight[s.id] ?? [])
  const { blockers, warnings } = summarise(allFindings)

  return (
    <>
      <div className="page-head">
        <h2>{collection.season} {collection.year}</h2>
        <p>
          {collection.brand} · {collection.market} · ship {collection.shipWindow} ·
          owner {collection.owner}. Customer: {collection.customer}.
        </p>
      </div>

      <SeasonCalendar />

      <div className="grid c4" style={{ marginBottom: 22 }}>
        <div className="card tight">
          <div className="stat">
            <span className="k">Stage progress</span>
            <span className="v">{done}<span style={{ fontSize: 17, color: 'var(--text-3)' }}>/15</span></span>
            <span className="n">Currently at stage 7 — technical development</span>
          </div>
          <div className="track"><i style={{ width: `${(done / 15) * 100}%` }} /></div>
        </div>
        <div className="card tight">
          <div className="stat">
            <span className="k">Export blockers</span>
            <span className={`v ${blockers ? 'blocker' : 'ok'}`}>{blockers}</span>
            <span className="n">Critical failures across {collection.styles.length} styles</span>
          </div>
        </div>
        <div className="card tight">
          <div className="stat">
            <span className="k">Warnings</span>
            <span className={`v ${warnings ? 'warn' : 'ok'}`}>{warnings}</span>
            <span className="n">Non-blocking, reviewable</span>
          </div>
        </div>
        <div className="card tight">
          <div className="stat">
            <span className="k">Open factory questions</span>
            <span className={`v ${openQs ? 'warn' : 'ok'}`}>{openQs}</span>
            <span className="n">Awaiting brand response</span>
          </div>
        </div>
      </div>

      <div className="grid split">
        <div className="card">
          <h3>Season calendar</h3>
          <p className="sub">
            15 stages across a 52-week Spring/Summer template. Gold rows are approval gates —
            a stage cannot start until its upstream gate is satisfied or an override is recorded.
          </p>
          <div>
            {collection.stages.map(s => (
              <div key={s.n} className={`stage-row ${s.gate ? 'gate' : ''}`}>
                <div className="stage-n">{s.n}</div>
                <div>
                  <div className="stage-name">{s.name}</div>
                  <div className="stage-out">{s.output}</div>
                </div>
                <div className="stage-weeks">wk {s.weeks}</div>
                <div style={{ textAlign: 'right' }}><StageBadge v={s.status} /></div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gap: 18, alignContent: 'start' }}>
          {blocked.length > 0 && (
            <div className="card">
              <h3>Blocked work</h3>
              <p className="sub">Downstream stages held by an unsatisfied gate.</p>
              {blocked.map(s => (
                <div key={s.n} style={{ marginBottom: 12 }}>
                  <div style={{ display: 'flex', gap: 9, alignItems: 'center', marginBottom: 4 }}>
                    <Badge tone="blocker">Stage {s.n}</Badge>
                    <span style={{ fontSize: 13 }}>{s.name}</span>
                  </div>
                  <p className="muted" style={{ fontSize: 12 }}>
                    Held by stage 7 — the technical package has unresolved production-critical
                    fields, so no prototype can be cut.
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="card">
            <h3>Collection record</h3>
            <p className="sub">Fields captured at collection creation (COL-001).</p>
            <div className="manifest">
              <div><span className="k">Collection ID</span>{collection.id}</div>
              <div><span className="k">Brand</span>{collection.brand}</div>
              <div><span className="k">Season</span>{collection.season} {collection.year}</div>
              <div><span className="k">Market</span>{collection.market}</div>
              <div><span className="k">Ship window</span>{collection.shipWindow}</div>
              <div><span className="k">Currency</span>{collection.currency}</div>
              <div><span className="k">Template</span>52-week SS (configurable)</div>
            </div>
          </div>
        </div>
      </div>

      <h3 style={{ fontFamily: 'var(--serif)', fontSize: 23, fontWeight: 400, margin: '34px 0 4px' }}>
        Styles
      </h3>
      <p className="muted" style={{ fontSize: 12.5, marginBottom: 18 }}>
        One record per garment, carrying creative assets, technical package, approvals, and
        factory history through the whole lifecycle.
      </p>
      <div className="grid c3">
        {collection.styles.map(s => (
          <StyleCard key={s.id} style={s} findings={preflight[s.id] ?? []} onOpen={onOpen} />
        ))}
      </div>
    </>
  )
}

function StyleCard({ style, findings, onOpen }: {
  style: Style; findings: ValidationFinding[]; onOpen: (id: string) => void
}) {
  const { blockers, warnings } = summarise(findings)
  const hero = style.assets.items.find(a => a.mode === 'flat')
    ?? style.assets.items.find(a => a.mode === 'presentation') ?? style.assets.items[0]

  return (
    <button className="style-card" onClick={() => onOpen(style.id)}>
      <div className="thumb">
        {hero?.mode === 'flat' ? <FlatCanvas />
          : hero?.mode === 'presentation' ? <PresentationCanvas palette={hero.palette} />
          : <MoodCanvas palette={hero?.palette ?? []} />}
      </div>
      <div className="body">
        <div className="id">{style.id} · v{style.version}</div>
        <h4>{style.name}</h4>
        <div className="row">
          <PackBadge v={style.status} />
          {blockers > 0 && <Badge tone="blocker">{blockers} blockers</Badge>}
          {warnings > 0 && <Badge tone="warn">{warnings} warnings</Badge>}
          {blockers === 0 && warnings === 0 && <Badge tone="ok">Preflight clean</Badge>}
        </div>
        <p className="muted" style={{ fontSize: 11.5, marginTop: 10 }}>
          {style.category} · sizes {style.sizeRange.join('/')} · base {style.baseSize ?? '—'}
        </p>
      </div>
    </button>
  )
}
