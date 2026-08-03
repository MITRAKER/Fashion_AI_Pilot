import type { Analysis, Fabric } from '@engine/fabric-engine.js'
import type { Swatch } from '@engine/palette.js'
import type { Finding } from '@engine/specialists.js'
import type { Detail } from '@engine/details.js'
import type { Spec } from '@engine/garment-spec.js'
import { FlatCanvas } from './ui'

/**
 * The concept plate, composed rather than generated whole.
 *
 * The reference boards are generated in one shot, and it shows: one of the
 * handwritten headings on the Sunflowers board reads "Dpnded ccenteisttnd".
 * The model could not spell it. Typography is the part image models break.
 *
 * So the model draws only the photograph. Everything else here is real data
 * rendered as HTML — the swatch fills are the measured hexes, the colour names
 * come from the palette vocabulary, the annotations are the specialists' own
 * findings with their citations, and the source is the actual source image with
 * its actual attribution. Nothing is garbled and nothing is invented, which is
 * strictly better than the thing being imitated.
 */

export interface PlateData {
  figure: string | null          // data: URL of the generated photograph
  sourceUrl: string
  sourceName: string
  analysis: Analysis | null
  palette: Swatch[]
  fabric?: Fabric
  details: Detail[]
  findings: Finding[]
  spec: Spec
}

/** "Sunflowers, Vincent van Gogh, 1888" -> title + attribution lines. */
function splitTitle(name: string) {
  const parts = name.split(',').map(s => s.trim())
  return { title: parts[0] ?? name, attribution: parts.slice(1).join(', ') }
}

/**
 * Two clusters can land on the same vocabulary name — a plate showing
 * "Smoky blue-grey" twice at different hexes reads as a mistake. Number the
 * repeats so each swatch is still nameable out loud.
 */
function disambiguate(palette: Swatch[]) {
  const seen = new Map<string, number>()
  const total = new Map<string, number>()
  for (const c of palette) total.set(c.name, (total.get(c.name) ?? 0) + 1)
  return palette.map(c => {
    if ((total.get(c.name) ?? 0) < 2) return { ...c, label: c.name }
    const n = (seen.get(c.name) ?? 0) + 1
    seen.set(c.name, n)
    return { ...c, label: `${c.name} ${n}` }
  })
}

export function Plate(d: PlateData) {
  const { title, attribution } = splitTitle(d.sourceName)
  const skirt = d.spec.components.find(c => c.id === 'skirt') as any
  const notes = d.findings.filter(f => f.finding).slice(0, 3)

  return (
    <div className="pl">
      <div className="pl-head">
        <div>
          <h2>{title}</h2>
          {attribution && <div className="pl-attr">{attribution}</div>}
        </div>
        <div className="pl-brief">
          {d.fabric && (
            <p>
              A couture interpretation in <b>{d.fabric.name}</b> — {d.fabric.hand}.
              {' '}{d.fabric.behaviour}
            </p>
          )}
          {d.analysis && (
            <p className="pl-meas">
              Measured from the source · edge {d.analysis.edge} · texture {d.analysis.texture}
              {' '}· contrast {d.analysis.contrast} · chroma {d.analysis.chroma}
            </p>
          )}
        </div>
      </div>

      <div className="pl-body">
        <aside className="pl-left">
          <figure className="pl-src">
            {d.sourceUrl && <img src={d.sourceUrl} alt={d.sourceName} />}
            <figcaption>
              <b>{title}</b>
              {attribution && <span>{attribution}</span>}
              <span className="pl-pd">Public domain or own upload</span>
            </figcaption>
          </figure>

          {/* Line flats, drawn as vectors rather than asked of the model. The
              reference board's flats are generated and their labels garble; a
              front and back that are actually legible beat a prettier guess. */}
          <div className="pl-flats">
            <h3>Flats</h3>
            <div className="pl-flat-pair">
              <figure><FlatCanvas /><figcaption>Front</figcaption></figure>
              <figure><FlatCanvas back /><figcaption>Back</figcaption></figure>
            </div>
            <p className="pl-cap">
              Category schematic, not drawn from this style's spec yet — the line art
              is the same for every garment in the category. Not to scale, and a
              schematic is not a spec sheet.
            </p>
          </div>

          {d.details.length > 0 && (
            <div className="pl-notes">
              {d.details.map(x => (
                <div className="pl-note" key={x.n}>
                  <b>{x.name}</b>
                  <span>{x.construction}</span>
                </div>
              ))}
            </div>
          )}
        </aside>

        <div className="pl-figure">
          {d.figure
            ? <img src={d.figure} alt={`Garment interpreted from ${d.sourceName}`} />
            : <div className="pl-figure-none">The photograph has not been rendered yet.</div>}
        </div>

        <aside className="pl-right">
          {/* The swatch fills are the measured hexes. A model asked to paint
              these would approximate them and mislabel them. */}
          <div className="pl-pal">
            <h3>Palette</h3>
            <div className="pl-sw">
              {disambiguate(d.palette.slice(0, 7)).map((c, i) => (
                <div className="pl-swatch" key={c.hex + i}>
                  <i style={{ background: c.hex }} />
                  <b>{c.label}</b>
                  <span>{c.hex}</span>
                </div>
              ))}
            </div>
            <p className="pl-cap">Clusters of the source's own pixels, named in the studio vocabulary.</p>
          </div>

          {skirt && (
            <div className="pl-spec">
              <h3>Garment</h3>
              <div><span>Type</span><b>{d.spec.garmentType.replace(/_/g, ' ')}</b></div>
              <div><span>Skirt length</span><b>{skirt.length} {d.spec.units}</b></div>
              <div><span>Flare</span><b>{skirt.flare}</b></div>
              {d.spec.unresolved.length > 0 && (
                <p className="pl-unres">
                  Unresolved: {d.spec.unresolved.join(', ')} — decisions for a technical designer.
                </p>
              )}
            </div>
          )}
        </aside>
      </div>

      {notes.length > 0 && (
        <div className="pl-foot">
          {notes.map((f, i) => (
            <div className="pl-fnote" key={i}>
              <b>{f.specialist}</b>
              <p>{f.finding}</p>
              {f.cites?.[0] && <cite>{f.cites[0]}</cite>}
            </div>
          ))}
        </div>
      )}

      <p className="pl-legal">
        SYNTHETIC · The photograph is machine-generated. Every measurement, colour and
        citation on this plate is produced by the engine from the source itself. Not a
        technical document and never a factory input.
      </p>
    </div>
  )
}
