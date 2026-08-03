import { useCallback, useEffect, useRef, useState } from 'react'
import { extractPalette, type Swatch } from '@engine/palette.js'
import { analyseImage, suggestFabrics, suggestSilhouettes,
         type Analysis, type Fabric, type Silhouette } from '@engine/fabric-engine.js'
import { consultSpecialists, type Finding } from '@engine/specialists.js'
import { SHOULDER, BUST, SLEEVE, recommend, type Detail } from '@engine/details.js'
import { defaultSpec, describe, type Spec } from '@engine/garment-spec.js'
import { correct, undo, EXAMPLES } from '@engine/correct.js'
import { createBodyPreview, type BodyPreview } from '@engine/board-3d.js'
import { Plate } from './Plate'

/**
 * The object → garment engine, inside the dashboard.
 *
 * Every number and every sentence on this page is produced by the engine
 * modules above at run time. Nothing here is a hardcoded recommendation — that
 * was the rule set for this feature: an idea has to come from a specialist and
 * cite something, or it does not belong on screen.
 */

type Mode = 'solid' | 'print' | 'mixed'
type DetailKind = 'shoulder' | 'bust' | 'sleeve'

interface Reply {
  applied: string[]
  refused: { text: string; why: string }[]
  unknown: boolean
}

const MET_SEARCH = 'https://collectionapi.metmuseum.org/public/collection/v1'

export function ConceptStudio() {
  const mountRef = useRef<HTMLDivElement | null>(null)
  const previewRef = useRef<BodyPreview | null>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)
  const specRef = useRef<Spec>(defaultSpec())
  const lastChanges = useRef<any[]>([])

  const [sourceName, setSourceName] = useState('')
  const [sourceUrl, setSourceUrl] = useState('')
  const [status, setStatus] = useState('')
  const [analysis, setAnalysis] = useState<Analysis | null>(null)
  const [palette, setPalette] = useState<Swatch[]>([])
  const [fabrics, setFabrics] = useState<Fabric[]>([])
  const [shapes, setShapes] = useState<Silhouette[]>([])
  const [findings, setFindings] = useState<Finding[]>([])
  const [rec, setRec] = useState<ReturnType<typeof recommend> | null>(null)

  const [fabricI, setFabricI] = useState(0)
  const [colourI, setColourI] = useState(0)
  const [mode, setMode] = useState<Mode>('solid')
  const [detail, setDetailState] = useState<Record<DetailKind, number>>(
    { shoulder: 0, bust: 0, sleeve: 0 })

  const [said, setSaid] = useState('')
  const [reply, setReply] = useState<Reply | null>(null)
  const [specTick, setSpecTick] = useState(0)   // spec is a ref; this redraws it
  const [measured, setMeasured] = useState<{ width: number; depth: number; hemY: number } | null>(null)

  const [plate, setPlate] = useState<string | null>(null)
  const [plateErr, setPlateErr] = useState<string | null>(null)
  const [plateBusy, setPlateBusy] = useState(false)
  const [platePrompt, setPlatePrompt] = useState<string | null>(null)
  const [composed, setComposed] = useState(false)

  const [query, setQuery] = useState('')
  const [hits, setHits] = useState<{ id: number; title: string; thumb: string; full: string }[]>([])
  const [searching, setSearching] = useState(false)

  /** Put the current fabric + colour + spec on the form. */
  const wear = useCallback(() => {
    const f = fabrics[fabricI]
    const c = palette[colourI]
    if (!f || !c || !mountRef.current) return
    if (!previewRef.current) previewRef.current = createBodyPreview(mountRef.current)
    const p = previewRef.current

    // The fabric card writes into the spec, so a later correction edits the
    // same document rather than fighting it.
    const fab = specRef.current.components.find(x => x.id === 'fabric')
    if (fab) {
      fab.name = f.name
      if (f.drape) { fab.bend = f.drape.bend; fab.weight = Math.abs(f.drape.gravity) }
    }
    p.setSpec(specRef.current)
    if (imgRef.current) p.setSource(imgRef.current)
    p.setDetail('shoulder', detail.shoulder)
    p.setDetail('bust', detail.bust)
    p.setDetail('sleeve', detail.sleeve)
    p.dress(f, c.hex, imgRef.current ? mode : 'solid')
    setSpecTick(t => t + 1)
    // Geometry, not eyeballing: read the settled silhouette back off the mesh.
    setTimeout(() => setMeasured(p.measure()), 900)
  }, [fabrics, fabricI, palette, colourI, mode, detail])

  useEffect(() => { wear() }, [wear])

  /** Run the whole engine over one image. */
  const run = useCallback((img: HTMLImageElement, name: string) => {
    imgRef.current = img
    setSourceName(name)
    const pal = extractPalette(img, 10)
    const a = analyseImage(img)
    setPalette(pal)
    setAnalysis(a)
    setFabrics(suggestFabrics(a, 5))
    setShapes(suggestSilhouettes(a))
    setFindings(consultSpecialists(a, pal))
    setRec(recommend(a))
    setFabricI(0)
    const firstLit = pal.findIndex(c => c.lightness > 25)
    setColourI(firstLit < 0 ? 0 : firstLit)
    setStatus('')
  }, [])

  const loadFrom = useCallback((url: string, name: string) => {
    setStatus('Measuring the source…')
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => { setSourceUrl(url); run(img, name) }
    img.onerror = () => setStatus(`Could not load ${name}.`)
    img.src = url
  }, [run])

  const onUpload = (file: File) => {
    const url = URL.createObjectURL(file)
    loadFrom(url, file.name)
  }

  const searchMet = async () => {
    if (!query.trim()) return
    setSearching(true); setHits([])
    try {
      const r = await fetch(`${MET_SEARCH}/search?hasImages=true&q=${encodeURIComponent(query)}`)
      const ids: number[] = (await r.json()).objectIDs?.slice(0, 8) ?? []
      const found = []
      for (const id of ids) {
        const o = await (await fetch(`${MET_SEARCH}/objects/${id}`)).json()
        // Rights first: only public-domain objects are usable as a source here.
        if (!o.isPublicDomain || !o.primaryImageSmall) continue
        found.push({
          id,
          title: o.title || 'Untitled',
          // Images must go through the proxy — the browser cannot reach the
          // Met's image host directly, only their API host.
          thumb: `/museum-image?url=${encodeURIComponent(o.primaryImageSmall)}`,
          full: `/museum-image?url=${encodeURIComponent(o.primaryImage || o.primaryImageSmall)}`,
        })
        if (found.length >= 6) break
      }
      setHits(found)
      if (!found.length) setStatus('No public-domain images for that search.')
    } catch (e: any) {
      setStatus(`Met search failed: ${e?.message ?? e}`)
    } finally { setSearching(false) }
  }

  const say = (text: string) => {
    const res = correct(specRef.current, text)
    lastChanges.current = res.applied
    setReply({
      applied: res.applied.map(describe),
      refused: res.refused,
      unknown: !!res.unknown && !res.applied.length && !res.refused.length,
    })
    if (res.applied.length) wear()
    else setSpecTick(t => t + 1)
  }

  const revert = () => {
    if (!lastChanges.current.length) return
    undo(specRef.current, lastChanges.current)
    lastChanges.current = []
    setReply({ applied: ['Reverted — last instruction undone.'], refused: [], unknown: false })
    wear()
  }

  const setDetail = (kind: DetailKind, n: number) =>
    setDetailState(d => ({ ...d, [kind]: n }))

  /** Re-encode the source at a bounded size so the request stays sane. */
  const sourceAsBase64 = () => {
    const img = imgRef.current
    if (!img) return null
    const max = 768
    const s = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight))
    const c = document.createElement('canvas')
    c.width = Math.round(img.naturalWidth * s)
    c.height = Math.round(img.naturalHeight * s)
    c.getContext('2d')!.drawImage(img, 0, 0, c.width, c.height)
    return { mime: 'image/jpeg', data: c.toDataURL('image/jpeg', 0.9).split(',')[1] }
  }

  const makePlate = async (provider: 'gemini' | 'pollinations') => {
    setPlateBusy(true); setPlateErr(null)
    const chosen = [
      SHOULDER.find(d => d.n === detail.shoulder),
      BUST.find(d => d.n === detail.bust),
      SLEEVE.find(d => d.n === detail.sleeve),
    ].filter(Boolean)
    try {
      const r = await fetch('/plate', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          provider,
          sourceName, analysis, palette, findings,
          fabric: fabrics[fabricI],
          details: chosen,
          spec: specRef.current,
          sourceImage: sourceAsBase64(),
        }),
      })
      const j = await r.json()
      setPlatePrompt(j.prompt ?? null)
      if (j.ok) {
        setPlate(`data:${j.mime};base64,${j.data}`)
        // Gemini returns the whole board; the free path returns the figure only
        // and we compose the board around it.
        setComposed(!!j.figureOnly)
      } else { setPlate(null); setPlateErr(j.error ?? `Failed (${r.status}).`) }
    } catch (e: any) {
      setPlate(null); setPlateErr(String(e?.message ?? e))
    } finally { setPlateBusy(false) }
  }

  const spec = specRef.current
  const ready = !!analysis

  return (
    <div className="cs">
      <div className="card tight">
        <h3>Source</h3>
        <p className="sub">
          Any object — a painting, a flower, a garment photograph. The engine measures
          its pixels and reasons from those numbers to cloth. It does not look up the
          object by name.
        </p>
        <div className="cs-src">
          <label className="btn dark">
            Upload an image
            <input type="file" accept="image/*" hidden
              onChange={e => e.target.files?.[0] && onUpload(e.target.files[0])} />
          </label>
          <span className="muted mono">or search the Met (public domain only)</span>
          <input className="cs-q" value={query} placeholder="peony, embroidery, kimono…"
            onChange={e => setQuery(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && searchMet()} />
          <button className="btn sm" onClick={searchMet} disabled={searching}>
            {searching ? 'Searching…' : 'Search'}
          </button>
        </div>
        {hits.length > 0 && (
          <div className="cs-hits">
            {hits.map(h => (
              <button key={h.id} onClick={() => loadFrom(h.full, h.title)}>
                <img src={h.thumb} alt="" />
                <span>{h.title}</span>
              </button>
            ))}
          </div>
        )}
        {status && <p className="cs-status mono">{status}</p>}
      </div>

      {!ready && (
        <div className="card cs-empty">
          <p>Nothing measured yet. Load a source above and the engine runs on it.</p>
        </div>
      )}

      {ready && (
        <>
          {/* THE GARMENT — full width, because the two panes are meant to be
              compared and 328px each is not a comparison. */}
          <div className="card tight cs-stage-card">
              <h3>Worn — {sourceName}</h3>
              <p className="sub">
                The fabric choice drives the simulation, not just the label: bend and
                weight come from the chosen cloth and change how the skirt falls.
              </p>
              {/* Simulation and render, side by side and on the same garment.
                  They answer different questions: the mesh is the measured drape
                  of the chosen cloth and can be interrogated; the photograph is
                  what the look reads as. Seeing them together is how you catch a
                  render that has drifted from the spec. */}
              <div className="cs-two">
                <figure className="cs-pane">
                  <div className="cs-stage" ref={mountRef} />
                  <figcaption>
                    <b>Simulated</b>
                    <span>measured drape · {fabrics[fabricI]?.name}</span>
                  </figcaption>
                </figure>
                <figure className="cs-pane">
                  <div className="cs-shot">
                    {plate
                      ? <img src={plate} alt={`Rendered garment from ${sourceName}`} />
                      : (
                        <div className="cs-shot-none">
                          {plateBusy
                            ? <span className="cs-spin">Rendering the photograph…</span>
                            : <span>Not rendered yet.</span>}
                        </div>
                      )}
                  </div>
                  <figcaption>
                    <b>Rendered</b>
                    <span>{plate ? 'generated photograph' : 'press Render below'}</span>
                  </figcaption>
                </figure>
              </div>
              <div className="cs-worn">
                <b>{fabrics[fabricI]?.name}</b>
                <span className="mono">{palette[colourI]?.name} · {palette[colourI]?.hex}</span>
                <span className="mono muted">
                  bend {fabrics[fabricI]?.drape?.bend ?? '—'} ·
                  weight {Math.abs(fabrics[fabricI]?.drape?.gravity ?? 0).toFixed(1)}
                </span>
                <div className="cs-modes">
                  {(['solid', 'print', 'mixed'] as Mode[]).map(m => (
                    <button key={m} className={`btn sm${mode === m ? ' dark' : ''}`}
                      onClick={() => setMode(m)}>
                      {m === 'solid' ? 'Solid colour' : m === 'print' ? 'Source as cloth' : 'Mixed'}
                    </button>
                  ))}
                </div>
              </div>
              <div className="cs-sw">
                {palette.map((c, i) => (
                  <i key={c.hex + i} className={i === colourI ? 'on' : ''}
                    style={{ background: c.hex }} title={`${c.name} ${c.hex}`}
                    onClick={() => setColourI(i)} />
                ))}
              </div>
              {measured && (
                <p className="cs-meas mono muted">
                  Measured off the settled mesh — width {measured.width} ·
                  depth {measured.depth} · hem {measured.hemY}
                </p>
              )}
              <div className="cs-plate-bar" style={{ marginTop: 12 }}>
                <button className="btn gold" onClick={() => void makePlate('pollinations')}
                  disabled={plateBusy}>
                  {plateBusy ? 'Rendering…' : plate ? 'Render again — free' : 'Render the photograph — free'}
                </button>
                <button className="btn" onClick={() => void makePlate('gemini')} disabled={plateBusy}>
                  Use Gemini
                </button>
              </div>
              {plateErr && (
                <div className="cs-no" style={{ marginTop: 10 }}>
                  <em>Not rendered</em><span>{plateErr}</span>
                </div>
              )}
            </div>

          {/* MEASUREMENTS + SPEC */}
          <div className="grid c2">
              <div className="card tight">
                <h3>Measured from the source</h3>
                {([
                  ['Edge', analysis.edge, 'hard boundaries — structure vs fall'],
                  ['Texture', analysis.texture, 'surface energy — woven interest vs flat'],
                  ['Contrast', analysis.contrast, 'tonal range — light along a fold'],
                  ['Chroma', analysis.chroma, 'saturation — dye depth'],
                ] as const).map(([k, v, note]) => (
                  <div className="cs-m" key={k}>
                    <b>{k}</b><span className="mono">{v}</span>
                    <div className="cs-bar">
                      <i style={{ width: `${Math.min(100, v * 100 * (k === 'Texture' ? 1.6 : 1)).toFixed(0)}%` }} />
                    </div>
                    <small>{note}</small>
                  </div>
                ))}
                {sourceUrl && <img className="cs-thumb" src={sourceUrl} alt={sourceName} />}
              </div>

              <div className="card tight">
                <h3>Garment spec</h3>
                <p className="sub">
                  The dress is this document. Corrections edit it, so every change is
                  diffable and undoable.
                </p>
                <pre className="cs-json" key={specTick}>
{JSON.stringify({
  garmentType: spec.garmentType, units: spec.units, baseSize: spec.baseSize,
  components: spec.components, unresolved: spec.unresolved }, null, 1)}
                </pre>
              </div>
          </div>

          {/* CORRECTION PANEL */}
          <div className="card tight">
            <h3>Tell it what to change</h3>
            <p className="sub">
              It edits the spec, shows what it understood, and refuses what an
              instruction cannot decide — with the reason.
            </p>
            <form className="cs-say" onSubmit={e => { e.preventDefault(); if (said.trim()) { say(said); setSaid('') } }}>
              <input value={said} onChange={e => setSaid(e.target.value)}
                placeholder="make it a lot longer" />
              <button className="btn dark sm" type="submit">Send</button>
              <button className="btn sm" type="button" onClick={revert}>Undo</button>
            </form>
            <div className="cs-ex">
              {EXAMPLES.map(x => (
                <button key={x} className="btn ghost sm" onClick={() => say(x)}>{x}</button>
              ))}
            </div>
            {reply && (
              <div className="cs-reply">
                {reply.applied.length > 0 && (
                  <div className="cs-ok"><em>Applied</em>
                    {reply.applied.map((c, i) => <span key={i}>{c}</span>)}</div>
                )}
                {reply.refused.map((r, i) => (
                  <div className="cs-no" key={i}>
                    <em>Refused: {r.text}</em><span>{r.why}</span>
                  </div>
                ))}
                {reply.unknown && (
                  <div className="cs-huh"><em>Not understood</em>
                    <span>Nothing in that maps to a parameter I hold.</span></div>
                )}
              </div>
            )}
            {spec.history.length > 0 && (
              <ul className="cs-hist">
                {[...spec.history].reverse().slice(0, 6).map((e, i) => (
                  <li key={i}><b>{e.said}</b>{e.changes.map((c, j) => <span key={j}>{c}</span>)}</li>
                ))}
              </ul>
            )}
          </div>

          {/* THE PLATE */}
          <div className="card tight">
            <h3>Concept plate</h3>
            <p className="sub">
              The board, rendered. The prompt is written from the measurements and the
              specialists' findings above — the fabric on the plate is the fabric the
              analysis chose, and the colours are clusters of this source's own pixels.
              The plate and the spec cannot drift apart, because one writes the other.
            </p>
            <div className="cs-plate-bar">
              <button className="btn gold" onClick={() => void makePlate('pollinations')} disabled={plateBusy}>
                {plateBusy ? 'Rendering…' : 'Render the plate — free'}
              </button>
              <button className="btn" onClick={() => void makePlate('gemini')} disabled={plateBusy}>
                Render with Gemini
              </button>
              {platePrompt && (
                <button className="btn ghost sm"
                  onClick={() => void navigator.clipboard.writeText(platePrompt)}>
                  Copy the prompt
                </button>
              )}
            </div>
            <p className="cs-plate-note mono muted">
              The free path generates only the photograph and composes the board around it
              from this page's data — the swatch fills are the measured hexes and the
              citations are the specialists' own, so nothing on the plate is a model's guess
              at text. Gemini renders the whole board in one shot and needs billing enabled.
            </p>
            {plateErr && (
              <div className="cs-no" style={{ marginTop: 12 }}>
                <em>Plate not rendered</em><span>{plateErr}</span>
              </div>
            )}
            {plate && composed && (
              <Plate
                figure={plate}
                sourceUrl={sourceUrl}
                sourceName={sourceName}
                analysis={analysis}
                palette={palette}
                fabric={fabrics[fabricI]}
                details={[
                  SHOULDER.find(d => d.n === detail.shoulder),
                  BUST.find(d => d.n === detail.bust),
                  SLEEVE.find(d => d.n === detail.sleeve),
                ].filter(Boolean) as Detail[]}
                findings={findings}
                spec={specRef.current}
              />
            )}
            {plate && !composed && (
              <figure className="cs-plate">
                <img src={plate} alt={`Concept plate for ${sourceName}`} />
                <figcaption className="mono muted">
                  Synthetic. Interprets “{sourceName}” — a public-domain source or your own
                  upload. Nothing here has been validated by a technical designer.
                </figcaption>
              </figure>
            )}
          </div>

          {/* SPECIALISTS */}
          <div className="card tight">
            <h3>What the specialists say</h3>
            <p className="sub">
              Each finding names who said it, the principle applied, and what backs it.
            </p>
            <div className="grid c2">
              {findings.map((f, i) => (
                <div className={`cs-fnd${f.blocks ? ' blocks' : ''}`} key={i}>
                  <div className="cs-fnd-h">
                    <span className="cs-who">{f.specialist}</span>
                    <b>{f.title}</b>
                    <span className={`cs-cf ${f.confidence}`}>{f.confidence} confidence</span>
                  </div>
                  <p className="cs-rule"><em>Principle</em> {f.principle}</p>
                  <p>{f.finding}</p>
                  {f.blocks && <p className="cs-blk">{f.blocks}</p>}
                  <div className="cs-cites">{f.cites.map((c, j) => <span key={j}>{c}</span>)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* FABRICS */}
          <div className="card tight">
            <h3>Fabric, with the reason</h3>
            <div className="grid c3">
              {fabrics.map((f, i) => (
                <button className={`cs-fab${i === fabricI ? ' on' : ''}`} key={f.name}
                  onClick={() => setFabricI(i)}>
                  <div className="cs-fab-h">
                    <span className="cs-rank">{i + 1}</span>
                    <div><b>{f.name}</b><small>{f.hand}</small></div>
                  </div>
                  <p className="cs-beh">{f.behaviour}</p>
                  <p><em>Chosen because</em> {f.why}</p>
                  <p className="muted"><em>Use for</em> {f.use}</p>
                </button>
              ))}
            </div>
          </div>

          {/* DETAIL LIBRARY */}
          <div className="card tight">
            <h3>Detail library</h3>
            <p className="sub">{rec?.why}</p>
            {([
              ['shoulder', 'Shoulder', SHOULDER],
              ['bust', 'Bodice', BUST],
              ['sleeve', 'Sleeve & cuff', SLEEVE],
            ] as [DetailKind, string, Detail[]][]).map(([kind, label, lib]) => (
              <div className="cs-lib" key={kind}>
                <h4>{label}</h4>
                <div className="cs-tiles">
                  <button className={`cs-dtl none${detail[kind] === 0 ? ' on' : ''}`}
                    onClick={() => setDetail(kind, 0)}><b>None</b></button>
                  {lib.map(d => (
                    <button key={d.n}
                      className={`cs-dtl${detail[kind] === d.n ? ' on' : ''}${rec?.[kind].includes(d.n) ? ' rec' : ''}`}
                      onClick={() => setDetail(kind, d.n)}>
                      <span className="cs-dn">{d.n}</span><b>{d.name}</b>
                      <small>{d.construction}</small><em>{d.note}</em>
                      {rec?.[kind].includes(d.n) && <span className="cs-tag">suits this source</span>}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* SILHOUETTES */}
          <div className="card tight">
            <h3>Silhouettes this source supports</h3>
            <div className="grid c3">
              {shapes.map(s => (
                <div className="cs-shape" key={s.name}><b>{s.name}</b><p>{s.note}</p></div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
