import { useEffect, useRef, useState } from 'react'
import { findFabric } from '@engine/fabric-engine.js'
import { hexForName } from '@engine/palette.js'
import { defaultSpec } from '@engine/garment-spec.js'
import { createBodyPreview, type BodyPreview } from '@engine/board-3d.js'
import { ApprovalBadge } from './ui'
import type { PackField, Style, TrimRow } from '../../shared/types.ts'

/**
 * The style sheet, read off the style record.
 *
 * Everything here was hardcoded once — "Silk faille 19mm" was a string literal,
 * the trims were five invented rows, and the form was a second copy of the
 * dress geometry that had drifted from the real one. All three are now the
 * record's own data and the shared engine.
 *
 * The rule that shapes this file: a field with no value is shown as missing.
 * It is never filled with something plausible, because a plausible value on a
 * style sheet is indistinguishable from a decided one.
 */

const VIEWS = [
  { key: 'front', label: 'Front', az: 0 },
  { key: 'side', label: 'Side', az: Math.PI / 2 },
  { key: 'back', label: 'Back', az: Math.PI },
] as const

const Missing = ({ what = 'Missing' }: { what?: string }) =>
  <span className="ss-missing">{what}</span>

/** One label/value row, carrying the provenance the record holds for it. */
function Row({ f }: { f: PackField }) {
  const empty = !f.value.trim()
  // An empty Unresolved field would otherwise print "Unresolved" twice — once
  // as the value marker, once as the approval badge. Say it once.
  const dupe = empty && f.approval === 'Unresolved'
  return (
    <div className={`ss-row${empty ? ' empty' : ''}`}>
      <span className="ss-k">{f.label}</span>
      <span className="ss-v">
        {empty ? <Missing what={f.approval === 'Unresolved' ? 'Unresolved' : 'Missing'} />
               : <>{f.value}{f.unit ? ` ${f.unit}` : ''}</>}
      </span>
      {!dupe && <ApprovalBadge v={f.approval} />}
    </div>
  )
}

function Section({ title, fields, note }: { title: string; fields: PackField[]; note?: string }) {
  if (!fields.length) return null
  return (
    <div className="ss-sec">
      <h3>{title}</h3>
      {fields.map(f => <Row key={f.id} f={f} />)}
      {note && <p className="ss-note">{note}</p>}
    </div>
  )
}

export function StyleSheetEmbed({ style }: { style: Style }) {
  const [view, setView] = useState<typeof VIEWS[number]['key']>('front')
  const mountRef = useRef<HTMLDivElement | null>(null)
  const previewRef = useRef<BodyPreview | null>(null)
  const [shot, setShot] = useState<string | null>(null)
  const [shotErr, setShotErr] = useState<string | null>(null)
  const [shotBusy, setShotBusy] = useState(false)

  const by = (section: string) => style.fields.filter(f => f.section === section)

  // The form wears this style's own fabric and its first colourway — not a
  // default cloth in a placeholder grey.
  const fabricField = style.fields.find(f => f.section === 'Fabric' && /main fabric/i.test(f.label))
  const matched = findFabric(fabricField?.value)
  const colour = hexForName(style.colorways[0])

  useEffect(() => {
    if (!mountRef.current || !matched) return
    if (!previewRef.current) previewRef.current = createBodyPreview(mountRef.current)
    const p = previewRef.current
    const spec = defaultSpec()
    const fab = spec.components.find(c => c.id === 'fabric')
    if (fab) {
      fab.name = matched.name
      if (matched.drape) { fab.bend = matched.drape.bend; fab.weight = Math.abs(matched.drape.gravity) }
    }
    p.setSpec(spec)
    // Undyed calico is the honest stand-in when the colourway name is not in
    // the vocabulary — it reads as a toile, which is what an unresolved
    // colourway actually is.
    p.dress(matched, colour?.hex ?? '#d8d2c4', 'solid')
  }, [matched, colour?.hex])

  useEffect(() => {
    previewRef.current?.setView(VIEWS.find(v => v.key === view)!.az)
  }, [view])

  const trims: TrimRow[] = style.trims

  /**
   * The rendered photograph, beside the simulated form.
   *
   * The prompt is built from THIS RECORD — its fabric field, its colourway, its
   * construction rows — not from a concept analysis. So the render is of the
   * style as specified, and a render that disagrees with the form beside it is
   * showing you a real disagreement between the spec and how it reads.
   */
  const render = async () => {
    setShotBusy(true); setShotErr(null)
    try {
      const r = await fetch('/plate', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          provider: 'pollinations',
          sourceName: style.name,
          fabric: matched ?? { name: fabricField?.value ?? 'unspecified cloth', hand: '', behaviour: '' },
          palette: colour ? [{ name: colour.name, hex: colour.hex }] : [],
          details: by('Construction')
            .filter(f => f.value.trim())
            .slice(0, 4)
            .map(f => ({ name: f.label, construction: f.value })),
          spec: {
            garmentType: style.category.split('—')[0].trim().toLowerCase().replace(/\s+/g, '_'),
            components: [],
          },
        }),
      })
      const j = await r.json()
      if (j.ok) setShot(`data:${j.mime};base64,${j.data}`)
      else { setShot(null); setShotErr(j.error ?? `Failed (${r.status}).`) }
    } catch (e: any) {
      setShot(null); setShotErr(String(e?.message ?? e))
    } finally { setShotBusy(false) }
  }

  return (
    <div className="ss">
      <header className="ss-head">
        <div className="ss-brand">
          Two Rivers
          <small>Fashion AI · collection development</small>
        </div>
        <div className="ss-title">Style Sheet</div>
        <div className="ss-meta">
          <div>STYLE <b>{style.id}</b> &nbsp; SEASON <b>
            {by('Cover').find(f => /season/i.test(f.label))?.value || <Missing />}</b></div>
          <div>BASE SIZE <b>{style.baseSize ?? <Missing what="Not declared" />}</b> &nbsp;
            UNITS <b>{style.units}</b> &nbsp; V<b>{style.version}</b></div>
        </div>
      </header>

        <div className="ss-stage-wrap">
        <div className="ss-stage-h">
          <span>Garment on form</span>
          {VIEWS.map(v => (
            <button key={v.key} className={`btn sm${view === v.key ? ' dark' : ''}`}
              onClick={() => setView(v.key)}>{v.label}</button>
          ))}
          <button className="btn sm gold" onClick={() => void render()} disabled={shotBusy}>
            {shotBusy ? 'Rendering…' : shot ? 'Render again' : 'Render photograph'}
          </button>
        </div>
        {matched ? (
          <div className="ss-two">
            <div className="ss-stage" ref={mountRef} />
            {/* The render sits beside the form, not instead of it. The form is
                the measured drape of the cloth on record; the photograph is how
                that spec reads. Disagreement between them is information. */}
            <div className="ss-shot">
              {shot
                ? <img src={shot} alt={`${style.name} rendered`} />
                : (
                  <div className="ss-shot-none">
                    {shotErr
                      ? <><b>Not rendered.</b><span>{shotErr}</span></>
                      : <span>Press “Render photograph” to see the style beside its form.</span>}
                  </div>
                )}
            </div>
          </div>
        ) : (
          <div className="ss-stage ss-stage-none">
            <p><b>No simulated form.</b></p>
            <p>
              {fabricField?.value
                ? <>“{fabricField.value}” is not in the drape catalogue, so there is no
                    measured bend or weight to simulate.</>
                : <>This style has no main fabric on record.</>}
            </p>
            <p className="ss-note">
              The sheet shows a form only when the cloth's behaviour is known. A default
              cloth would draw a drape this style has no basis for.
            </p>
          </div>
        )}
        <div className="ss-stage-f">
          <span>SIDE VIEW DISCLOSES CLOSURE PLACEMENT</span>
          {matched && (
            <span>
              SIMULATED AS {matched.name.toUpperCase()}
              {matched.matchedOn === 'weave' && ' — NEAREST CATALOGUE ENTRY, NOT THIS FIBRE'}
              {colour
                ? ` IN ${colour.name.toUpperCase()}${colour.matchedOn === 'word' ? ' (NEAREST TERM)' : ''}`
                : ' — COLOURWAY NOT RESOLVED, SHOWN AS TOILE'}
              {' · NOT DIMENSIONALLY VERIFIED'}
            </span>
          )}
          {shot && <span>PHOTOGRAPH IS MACHINE-GENERATED · NOT A FACTORY INPUT</span>}
        </div>
      </div>

      <div className="ss-grid">
        <div className="ss-col">
          <Section title="Fabric" fields={by('Fabric')}
            note="Name only. Swatches are not carried on the sheet — gathering them and putting a physical sample in every hand is a person's job." />
          <Section title="Cover" fields={by('Cover')} />
        </div>

        <div className="ss-col">
          <Section title="Construction" fields={by('Construction')} />
          <Section title="Costing" fields={by('Costing')} />
          <Section title="Lead time" fields={by('Lead time')} />
          <Section title="Packaging" fields={by('Packaging')} />
        </div>
      </div>

      <div className="ss-sec ss-trims">
        <h3>Trims · size, type and colour are specified, never implied</h3>
        {trims.length ? (
          <div className="ss-tablewrap">
            <table>
              <thead>
                <tr>
                  <th>Item</th><th>Spec</th><th>Placement</th><th>Qty</th><th>Source</th>
                </tr>
              </thead>
              <tbody>
                {trims.map(t => (
                  <tr key={t.id}>
                    <td>{t.item}</td>
                    <td>{t.spec.trim() || <Missing />}</td>
                    <td>{t.placement.trim() || <Missing />}</td>
                    <td className="mono">{t.qty.trim() || <Missing />}</td>
                    <td><ApprovalBadge v={t.approval} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : <p className="ss-note">No trims on this style record yet.</p>}
        <p className="ss-note">
          “Sequins” is not a spec — a 5 mm gold cup and a 4 mm purple cup are different
          orders from the same supplier. Size, type and colour are separate fields, and
          the drafting agent refuses them rather than inventing a plausible value.
        </p>
      </div>

      {style.bom.length > 0 && (
        <div className="ss-sec ss-trims">
          <h3>Bill of materials</h3>
          <div className="ss-tablewrap">
            <table>
              <thead>
                <tr>
                  <th>Material</th><th>Composition</th><th>Weight</th>
                  <th>Placement</th><th>Supplier</th><th>Source</th>
                </tr>
              </thead>
              <tbody>
                {style.bom.map(b => (
                  <tr key={b.id}>
                    <td>{b.material}</td>
                    <td>{b.composition.trim() || <Missing />}</td>
                    <td className="mono">{b.weight.trim() || <Missing />}</td>
                    <td>{b.placement.trim() || <Missing />}</td>
                    <td>{b.supplier.trim() || <Missing />}</td>
                    <td><ApprovalBadge v={b.approval} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <p className="ss-foot">
        STYLE SHEET · INTERNAL. Not manufacturable on its own — the factory works from the
        SPEC SHEET (flat sketch, arrows, measurements) and makes its own paper pattern; the
        SCHEMATIC carries the true-to-size layout. Synthetic data. Nothing on this sheet has
        been validated by a factory.
      </p>
    </div>
  )
}
