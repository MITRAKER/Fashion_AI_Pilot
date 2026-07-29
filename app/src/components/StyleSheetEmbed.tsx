import { useState } from 'react'
import { StyleSheet3DCanvas } from './StyleSheet3DCanvas'

export function StyleSheetEmbed({ styleId = 'ST-27-011' }: { styleId?: string }) {
  const [viewMode, setViewMode] = useState<'front' | 'side' | 'back'>('front')

  const switchView = (mode: 'front' | 'side' | 'back') => {
    setViewMode(mode)
  }

  return (
    <div className="stylesheet-container" style={{ margin: '10px 0 30px' }}>
      <div style={{
        background: '#fff', border: '1.5px solid var(--ink)', borderRadius: 6, padding: '24px 28px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
      }}>
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          borderBottom: '2px solid var(--ink)', paddingBottom: 12, marginBottom: 20
        }}>
          <div>
            <div style={{ fontFamily: 'var(--display)', fontSize: 24, letterSpacing: '.01em' }}>
              Two Rivers <span style={{ fontSize: 13, fontFamily: 'var(--mono)', color: 'var(--text-3)' }}>Style Sheet</span>
            </div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.18em', color: 'var(--graphite)', textTransform: 'uppercase', marginTop: 2 }}>
              Fashion AI · Collection Development
            </div>
          </div>
          <div style={{ textAlign: 'right', fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--graphite)', lineHeight: 1.8 }}>
            <div>STYLE <b style={{ color: 'var(--ink)' }}>{styleId}</b> &nbsp; SEASON <b style={{ color: 'var(--ink)' }}>SS27</b></div>
            <div>BASE SIZE <b style={{ color: 'var(--ink)' }}>38</b> &nbsp; UNITS <b style={{ color: 'var(--ink)' }}>cm</b> &nbsp; V<b style={{ color: 'var(--ink)' }}>4</b></div>
          </div>
        </div>

        {/* 3-Column Grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: '260px minmax(0, 1fr) 280px', gap: 20, alignItems: 'start'
        }}>
          {/* LEFT COLUMN */}
          <div style={{ display: 'grid', gap: 16 }}>
            <div className="card" style={{ background: '#FAF9F6', border: '1px solid var(--line)', padding: 16, borderRadius: 4 }}>
              <h3 style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--graphite)', paddingBottom: 8, borderBottom: '1px solid var(--line)', marginBottom: 10 }}>
                Fabric
              </h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, padding: '5px 0', borderBottom: '1px dotted var(--line)' }}>
                <span style={{ color: 'var(--graphite)' }}>Shell</span>
                <span style={{ fontWeight: 600 }}>Silk faille 19mm</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, padding: '5px 0', borderBottom: '1px dotted var(--line)' }}>
                <span style={{ color: 'var(--graphite)' }}>Lining</span>
                <span style={{ fontWeight: 600 }}>Cupro twill</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, padding: '5px 0' }}>
                <span style={{ color: 'var(--graphite)' }}>Interlining</span>
                <span style={{ fontWeight: 600 }}>Silk organza</span>
              </div>
              <p style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--graphite)', lineHeight: 1.5, marginTop: 10 }}>
                Name only. Swatches are gathered by hand and recorded below.
              </p>
            </div>

            <div className="card" style={{ background: '#FAF9F6', border: '1px solid var(--line)', padding: 16, borderRadius: 4 }}>
              <h3 style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--graphite)', paddingBottom: 8, borderBottom: '1px solid var(--line)', marginBottom: 10 }}>
                Swatch Handling
              </h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, padding: '5px 0', borderBottom: '1px dotted var(--line)' }}>
                <span style={{ color: 'var(--graphite)' }}>Gathered by</span>
                <span style={{ fontWeight: 600 }}>N. Walker</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, padding: '5px 0', borderBottom: '1px dotted var(--line)' }}>
                <span style={{ color: 'var(--graphite)' }}>Samples issued</span>
                <span style={{ fontWeight: 600 }}>4 of 4</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, padding: '5px 0' }}>
                <span style={{ color: 'var(--graphite)' }}>Embroidery sample</span>
                <span className="chip c-approved" style={{ fontSize: 10, padding: '2px 6px' }}>In Hand</span>
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN: LIVE 3D DRESS FORM STAGE */}
          <div style={{
            background: '#fff', border: '1.5px solid var(--ink)', borderRadius: 4, overflow: 'hidden',
            display: 'flex', flexDirection: 'column', minHeight: 520
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px',
              borderBottom: '1px solid var(--line)', background: '#F5F5F7'
            }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--graphite)', fontWeight: 600 }}>
                Garment on Form · Live 3D Simulation
              </span>
              <div style={{ display: 'flex', gap: 6 }}>
                {(['front', 'side', 'back'] as const).map(m => (
                  <button
                    key={m}
                    className={`btn sm ${viewMode === m ? 'gold' : 'ghost'}`}
                    onClick={() => switchView(m)}
                    style={{ fontSize: 10, padding: '4px 10px', textTransform: 'uppercase', letterSpacing: '.1em' }}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ flex: 1, position: 'relative', background: '#FAFAFB', height: 440 }}>
              <StyleSheet3DCanvas viewMode={viewMode} />
            </div>

            <div style={{
              padding: '8px 14px', borderTop: '1px solid var(--line)', fontFamily: 'var(--mono)',
              fontSize: 9.5, color: 'var(--graphite)', display: 'flex', justifyContent: 'space-between', background: '#F5F5F7'
            }}>
              <span>SIDE VIEW DISCLOSES CLOSURE PLACEMENT</span>
              <span>CLOTH SIMULATED · LIVE PHYSICS</span>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div style={{ display: 'grid', gap: 16 }}>
            <div className="card" style={{ background: '#FAF9F6', border: '1px solid var(--line)', padding: 16, borderRadius: 4 }}>
              <h3 style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--graphite)', paddingBottom: 8, borderBottom: '1px solid var(--line)', marginBottom: 10 }}>
                Embroidery · External
              </h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, padding: '5px 0', borderBottom: '1px dotted var(--line)' }}>
                <span style={{ color: 'var(--graphite)' }}>Placement</span>
                <span style={{ fontWeight: 600 }}>CF panel, cuff</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, padding: '5px 0', borderBottom: '1px dotted var(--line)' }}>
                <span style={{ color: 'var(--graphite)' }}>Supplier</span>
                <span style={{ fontWeight: 600 }}>Atelier Lesage</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, padding: '5px 0' }}>
                <span style={{ color: 'var(--graphite)' }}>Est. cost</span>
                <span style={{ fontWeight: 600, color: 'var(--gold-ink)' }}>$42.00 / gmt</span>
              </div>
              <p style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--graphite)', lineHeight: 1.5, marginTop: 10 }}>
                External spend requirement. <span className="chip c-human" style={{ fontSize: 9, padding: '1px 5px' }}>Typed by Person</span>
              </p>
            </div>

            <div className="card" style={{ background: '#FAF9F6', border: '1px solid var(--line)', padding: 16, borderRadius: 4 }}>
              <h3 style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--graphite)', paddingBottom: 8, borderBottom: '1px solid var(--line)', marginBottom: 10 }}>
                Closure
              </h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, padding: '5px 0', borderBottom: '1px dotted var(--line)' }}>
                <span style={{ color: 'var(--graphite)' }}>Type</span>
                <span style={{ fontWeight: 600 }}>Invisible zip</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, padding: '5px 0' }}>
                <span style={{ color: 'var(--graphite)' }}>Placement</span>
                <span style={{ fontWeight: 600 }}>Left side seam</span>
              </div>
              <p style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--graphite)', lineHeight: 1.5, marginTop: 10 }}>
                Not centre back. Side view discloses zip location.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM TRIMS TABLE */}
        <div style={{ marginTop: 22, paddingTop: 18, borderTop: '1.5px solid var(--line)' }}>
          <h3 style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 12 }}>
            Trims · Size, Type &amp; Colour Specified (Never Implied)
          </h3>
          <table style={{ width: '100%', fontSize: 12.5 }}>
            <thead>
              <tr style={{ background: '#F5F5F7' }}>
                <th style={{ padding: '8px 10px', textAlign: 'left', fontFamily: 'var(--mono)', fontSize: 10 }}>Item</th>
                <th style={{ padding: '8px 10px', textAlign: 'left', fontFamily: 'var(--mono)', fontSize: 10 }}>Type</th>
                <th style={{ padding: '8px 10px', textAlign: 'left', fontFamily: 'var(--mono)', fontSize: 10 }}>Size</th>
                <th style={{ padding: '8px 10px', textAlign: 'left', fontFamily: 'var(--mono)', fontSize: 10 }}>Colour</th>
                <th style={{ padding: '8px 10px', textAlign: 'left', fontFamily: 'var(--mono)', fontSize: 10 }}>Placement</th>
                <th style={{ padding: '8px 10px', textAlign: 'left', fontFamily: 'var(--mono)', fontSize: 10 }}>Supplier</th>
                <th style={{ padding: '8px 10px', textAlign: 'right', fontFamily: 'var(--mono)', fontSize: 10 }}>Source</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: 10, fontWeight: 600 }}>Sequin</td>
                <td style={{ padding: 10 }}>Cup</td>
                <td style={{ padding: 10, fontFamily: 'var(--mono)' }}>5 mm</td>
                <td style={{ padding: 10 }}>Gold</td>
                <td style={{ padding: 10 }}>CF panel</td>
                <td style={{ padding: 10 }}>Atelier Lesage</td>
                <td style={{ padding: 10, textAlign: 'right' }}><span className="chip c-human" style={{ fontSize: 9 }}>Typed</span></td>
              </tr>
              <tr>
                <td style={{ padding: 10, fontWeight: 600 }}>Sequin</td>
                <td style={{ padding: 10 }}>Cup</td>
                <td style={{ padding: 10, fontFamily: 'var(--mono)' }}>4 mm</td>
                <td style={{ padding: 10 }}>Purple</td>
                <td style={{ padding: 10 }}>CF panel, shadow</td>
                <td style={{ padding: 10 }}>Atelier Lesage</td>
                <td style={{ padding: 10, textAlign: 'right' }}><span className="chip c-human" style={{ fontSize: 9 }}>Typed</span></td>
              </tr>
              <tr>
                <td style={{ padding: 10, fontWeight: 600 }}>Sequin</td>
                <td style={{ padding: 10 }}>Cup</td>
                <td style={{ padding: 10, fontFamily: 'var(--mono)' }}>6 mm</td>
                <td style={{ padding: 10 }}>Gold</td>
                <td style={{ padding: 10 }}>Cuff border</td>
                <td style={{ padding: 10 }}>Atelier Lesage</td>
                <td style={{ padding: 10, textAlign: 'right' }}><span className="chip c-human" style={{ fontSize: 9 }}>Typed</span></td>
              </tr>
              <tr>
                <td style={{ padding: 10, fontWeight: 600 }}>Thread</td>
                <td style={{ padding: 10 }}>Silk, Tkt 50</td>
                <td style={{ padding: 10, fontFamily: 'var(--mono)' }}>—</td>
                <td style={{ padding: 10 }}>Bone</td>
                <td style={{ padding: 10 }}>All construction</td>
                <td style={{ padding: 10 }}>Au Ver à Soie</td>
                <td style={{ padding: 10, textAlign: 'right' }}><span className="chip c-human" style={{ fontSize: 9 }}>Typed</span></td>
              </tr>
              <tr>
                <td style={{ padding: 10, fontWeight: 600 }}>Zip</td>
                <td style={{ padding: 10 }}>Invisible</td>
                <td style={{ padding: 10, fontFamily: 'var(--mono)' }}>56 cm</td>
                <td style={{ padding: 10 }}>Bone</td>
                <td style={{ padding: 10 }}>Left side seam</td>
                <td style={{ padding: 10 }}><span className="chip c-blocker" style={{ fontSize: 9 }}>Missing</span></td>
                <td style={{ padding: 10, textAlign: 'right' }}><span className="chip c-blocker" style={{ fontSize: 9 }}>Required</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
