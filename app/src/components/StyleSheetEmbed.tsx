import { useState } from 'react'
import { StyleSheet3DCanvas } from './StyleSheet3DCanvas'

export function StyleSheetEmbed({ styleId = 'ST-27-011' }: { styleId?: string }) {
  const [viewMode, setViewMode] = useState<'front' | 'side' | 'back'>('front')

  return (
    <div style={{
      fontFamily: "'Manrope', sans-serif", background: '#F5F5F7', color: '#0E0D0C',
      padding: '24px 28px 48px', borderRadius: 6, margin: '16px 0 32px', border: '1px solid #DDDDE1',
      boxShadow: '0 4px 24px rgba(0,0,0,0.06)'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'flex-end', gap: 24, borderBottom: '2px solid #0E0D0C',
        paddingBottom: 14, marginBottom: 20
      }}>
        <div style={{ fontFamily: "'Bodoni Moda', serif", fontSize: 26, letterSpacing: '.01em' }}>
          Two Rivers
          <small style={{
            display: 'block', fontFamily: "'IBM Plex Mono', monospace", fontSize: 10,
            letterSpacing: '.18em', color: '#4A4844', textTransform: 'uppercase', marginTop: 2
          }}>
            Fashion AI · collection development
          </small>
        </div>
        <div style={{ flex: 1 }} />
        <div style={{
          fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: '.2em',
          textTransform: 'uppercase', color: '#4A4844'
        }}>
          Style Sheet
        </div>
        <div style={{
          fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#4A4844', lineHeight: 1.9, textAlign: 'right'
        }}>
          <div>STYLE <b style={{ color: '#0E0D0C', fontWeight: 500 }}>{styleId}</b> &nbsp; SEASON <b style={{ color: '#0E0D0C', fontWeight: 500 }}>SS27</b></div>
          <div>BASE SIZE <b style={{ color: '#0E0D0C', fontWeight: 500 }}>38</b> &nbsp; UNITS <b style={{ color: '#0E0D0C', fontWeight: 500 }}>cm</b> &nbsp; V<b style={{ color: '#0E0D0C', fontWeight: 500 }}>4</b></div>
        </div>
      </div>

      {/* 3-Column Grid */}
      <div style={{
        display: 'grid', gridTemplateColumns: '250px minmax(0, 1fr) 300px', gap: 20
      }}>
        {/* LEFT COLUMN */}
        <div style={{ display: 'grid', gap: 20, alignContent: 'start' }}>
          <div style={{ background: '#FFFFFF', border: '1px solid #DDDDE1', borderRadius: 4, padding: '16px 18px' }}>
            <h3 style={{
              fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, letterSpacing: '.16em',
              textTransform: 'uppercase', color: '#4A4844', paddingBottom: 9, marginBottom: 11, borderBottom: '1px solid #DDDDE1'
            }}>
              Fabric
            </h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, padding: '7px 0', fontSize: 13, borderBottom: '1px dotted #DDDDE1' }}>
              <span style={{ color: '#4A4844' }}>Shell</span>
              <span style={{ fontWeight: 500 }}>Silk faille 19mm</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, padding: '7px 0', fontSize: 13, borderBottom: '1px dotted #DDDDE1' }}>
              <span style={{ color: '#4A4844' }}>Lining</span>
              <span style={{ fontWeight: 500 }}>Cupro twill</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, padding: '7px 0', fontSize: 13 }}>
              <span style={{ color: '#4A4844' }}>Interlining</span>
              <span style={{ fontWeight: 500 }}>Silk organza</span>
            </div>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10.5, color: '#4A4844', lineHeight: 1.6, marginTop: 9 }}>
              Name only. Swatches are not carried on the sheet — gathering them and putting a physical sample in every hand is a person's job, recorded below.
            </p>
          </div>

          <div style={{ background: '#FFFFFF', border: '1px solid #DDDDE1', borderRadius: 4, padding: '16px 18px' }}>
            <h3 style={{
              fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, letterSpacing: '.16em',
              textTransform: 'uppercase', color: '#4A4844', paddingBottom: 9, marginBottom: 11, borderBottom: '1px solid #DDDDE1'
            }}>
              Swatch handling
            </h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, padding: '7px 0', fontSize: 13, borderBottom: '1px dotted #DDDDE1' }}>
              <span style={{ color: '#4A4844' }}>Gathered by</span>
              <span style={{ fontWeight: 500 }}>N. Walker</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, padding: '7px 0', fontSize: 13, borderBottom: '1px dotted #DDDDE1' }}>
              <span style={{ color: '#4A4844' }}>Samples issued</span>
              <span style={{ fontWeight: 500 }}>4 of 4</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, padding: '7px 0', fontSize: 13 }}>
              <span style={{ color: '#4A4844' }}>Embroidery sample</span>
              <span style={{
                display: 'inline-block', fontFamily: "'IBM Plex Mono', monospace", fontSize: 9.5, letterSpacing: '.12em',
                textTransform: 'uppercase', padding: '2px 7px', borderRadius: 2, background: '#E6F2EC', color: '#2E7D5B'
              }}>
                In hand
              </span>
            </div>
          </div>
        </div>

        {/* CENTRE: THE MODEL STAGE */}
        <div style={{
          background: '#FFFFFF', border: '1px solid #DDDDE1', borderRadius: 4, overflow: 'hidden',
          display: 'flex', flexDirection: 'column', minHeight: 640
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', borderBottom: '1px solid #DDDDE1'
          }}>
            <span style={{
              fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, letterSpacing: '.16em',
              textTransform: 'uppercase', color: '#4A4844', marginRight: 'auto'
            }}>
              Garment on form
            </span>
            {(['front', 'side', 'back'] as const).map(m => (
              <button
                key={m}
                onClick={() => setViewMode(m)}
                style={{
                  fontFamily: "'IBM Plex Mono', monospace", fontSize: 10.5, letterSpacing: '.12em',
                  textTransform: 'uppercase', padding: '7px 14px', border: '1px solid #DDDDE1',
                  borderRadius: 3, cursor: 'pointer',
                  background: viewMode === m ? '#0E0D0C' : '#FFFFFF',
                  color: viewMode === m ? '#FFFFFF' : '#4A4844',
                  borderColor: viewMode === m ? '#0E0D0C' : '#DDDDE1'
                }}
              >
                {m.charAt(0).toUpperCase() + m.slice(1)}
              </button>
            ))}
          </div>

          <div style={{ flex: 1, position: 'relative', background: 'linear-gradient(180deg, #FAFAFB, #EFEFF2)', minHeight: 520 }}>
            <StyleSheet3DCanvas viewMode={viewMode} />
          </div>

          <div style={{
            padding: '9px 14px', borderTop: '1px solid #DDDDE1', fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 10, color: '#4A4844', display: 'flex', gap: 16, flexWrap: 'wrap'
          }}>
            <span>SIDE VIEW DISCLOSES CLOSURE PLACEMENT</span>
            <span>CLOTH SIMULATED · NOT DIMENSIONALLY VERIFIED</span>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ display: 'grid', gap: 20, alignContent: 'start' }}>
          <div style={{ background: '#FFFFFF', border: '1px solid #DDDDE1', borderRadius: 4, padding: '16px 18px' }}>
            <h3 style={{
              fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, letterSpacing: '.16em',
              textTransform: 'uppercase', color: '#4A4844', paddingBottom: 9, marginBottom: 11, borderBottom: '1px solid #DDDDE1'
            }}>
              Embroidery · external
            </h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, padding: '7px 0', fontSize: 13, borderBottom: '1px dotted #DDDDE1' }}>
              <span style={{ color: '#4A4844' }}>Placement</span>
              <span style={{ fontWeight: 500 }}>CF panel, cuff</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, padding: '7px 0', fontSize: 13, borderBottom: '1px dotted #DDDDE1' }}>
              <span style={{ color: '#4A4844' }}>Supplier</span>
              <span style={{ fontWeight: 500 }}>Atelier Lesage</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, padding: '7px 0', fontSize: 13 }}>
              <span style={{ color: '#4A4844' }}>Est. cost</span>
              <span style={{ fontWeight: 500 }}>$42.00 / gmt</span>
            </div>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10.5, color: '#4A4844', lineHeight: 1.6, marginTop: 9 }}>
              Goes outside the organisation, so the supplier and an estimated cost sit on the style sheet itself.{' '}
              <span style={{
                display: 'inline-block', fontFamily: "'IBM Plex Mono', monospace", fontSize: 9.5, letterSpacing: '.12em',
                textTransform: 'uppercase', padding: '2px 7px', borderRadius: 2, background: '#E7ECFA', color: '#3757B8'
              }}>
                Typed by a person
              </span>
            </p>
          </div>

          <div style={{ background: '#FFFFFF', border: '1px solid #DDDDE1', borderRadius: 4, padding: '16px 18px' }}>
            <h3 style={{
              fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, letterSpacing: '.16em',
              textTransform: 'uppercase', color: '#4A4844', paddingBottom: 9, marginBottom: 11, borderBottom: '1px solid #DDDDE1'
            }}>
              Closure
            </h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, padding: '7px 0', fontSize: 13, borderBottom: '1px dotted #DDDDE1' }}>
              <span style={{ color: '#4A4844' }}>Type</span>
              <span style={{ fontWeight: 500 }}>Invisible zip</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, padding: '7px 0', fontSize: 13 }}>
              <span style={{ color: '#4A4844' }}>Placement</span>
              <span style={{ fontWeight: 500 }}>Left side seam</span>
            </div>
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10.5, color: '#4A4844', lineHeight: 1.6, marginTop: 9 }}>
              Not centre back. This is why the sheet has a side view.
            </p>
          </div>
        </div>
      </div>

      {/* TRIMS TABLE */}
      <div style={{ background: '#FFFFFF', border: '1px solid #DDDDE1', borderRadius: 4, padding: '16px 18px', marginTop: 20 }}>
        <h3 style={{
          fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, letterSpacing: '.16em',
          textTransform: 'uppercase', color: '#4A4844', paddingBottom: 9, marginBottom: 11, borderBottom: '1px solid #DDDDE1'
        }}>
          Trims · size, type and colour are specified, never implied
        </h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12.5 }}>
          <thead>
            <tr>
              <th style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9.5, letterSpacing: '.14em', textTransform: 'uppercase', color: '#4A4844', textAlign: 'left', padding: '8px 10px', borderBottom: '1px solid #DDDDE1' }}>Item</th>
              <th style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9.5, letterSpacing: '.14em', textTransform: 'uppercase', color: '#4A4844', textAlign: 'left', padding: '8px 10px', borderBottom: '1px solid #DDDDE1' }}>Type</th>
              <th style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9.5, letterSpacing: '.14em', textTransform: 'uppercase', color: '#4A4844', textAlign: 'left', padding: '8px 10px', borderBottom: '1px solid #DDDDE1' }}>Size</th>
              <th style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9.5, letterSpacing: '.14em', textTransform: 'uppercase', color: '#4A4844', textAlign: 'left', padding: '8px 10px', borderBottom: '1px solid #DDDDE1' }}>Colour</th>
              <th style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9.5, letterSpacing: '.14em', textTransform: 'uppercase', color: '#4A4844', textAlign: 'left', padding: '8px 10px', borderBottom: '1px solid #DDDDE1' }}>Placement</th>
              <th style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9.5, letterSpacing: '.14em', textTransform: 'uppercase', color: '#4A4844', textAlign: 'left', padding: '8px 10px', borderBottom: '1px solid #DDDDE1' }}>Supplier</th>
              <th style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9.5, letterSpacing: '.14em', textTransform: 'uppercase', color: '#4A4844', textAlign: 'right', padding: '8px 10px', borderBottom: '1px solid #DDDDE1' }}>Est. cost</th>
              <th style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9.5, letterSpacing: '.14em', textTransform: 'uppercase', color: '#4A4844', textAlign: 'left', padding: '8px 10px', borderBottom: '1px solid #DDDDE1' }}>Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '9px 10px', borderBottom: '1px solid #DDDDE1' }}>Sequin</td>
              <td style={{ padding: '9px 10px', borderBottom: '1px solid #DDDDE1' }}>Cup</td>
              <td style={{ padding: '9px 10px', borderBottom: '1px solid #DDDDE1', fontFamily: "'IBM Plex Mono', monospace", textAlign: 'right' }}>5 mm</td>
              <td style={{ padding: '9px 10px', borderBottom: '1px solid #DDDDE1' }}>Gold</td>
              <td style={{ padding: '9px 10px', borderBottom: '1px solid #DDDDE1' }}>CF panel</td>
              <td style={{ padding: '9px 10px', borderBottom: '1px solid #DDDDE1' }}>Atelier Lesage</td>
              <td style={{ padding: '9px 10px', borderBottom: '1px solid #DDDDE1', fontFamily: "'IBM Plex Mono', monospace", textAlign: 'right' }}>—</td>
              <td style={{ padding: '9px 10px', borderBottom: '1px solid #DDDDE1' }}>
                <span style={{ display: 'inline-block', fontFamily: "'IBM Plex Mono', monospace", fontSize: 9.5, letterSpacing: '.12em', textTransform: 'uppercase', padding: '2px 7px', borderRadius: 2, background: '#E7ECFA', color: '#3757B8' }}>Typed</span>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '9px 10px', borderBottom: '1px solid #DDDDE1' }}>Sequin</td>
              <td style={{ padding: '9px 10px', borderBottom: '1px solid #DDDDE1' }}>Cup</td>
              <td style={{ padding: '9px 10px', borderBottom: '1px solid #DDDDE1', fontFamily: "'IBM Plex Mono', monospace", textAlign: 'right' }}>4 mm</td>
              <td style={{ padding: '9px 10px', borderBottom: '1px solid #DDDDE1' }}>Purple</td>
              <td style={{ padding: '9px 10px', borderBottom: '1px solid #DDDDE1' }}>CF panel, shadow</td>
              <td style={{ padding: '9px 10px', borderBottom: '1px solid #DDDDE1' }}>Atelier Lesage</td>
              <td style={{ padding: '9px 10px', borderBottom: '1px solid #DDDDE1', fontFamily: "'IBM Plex Mono', monospace", textAlign: 'right' }}>—</td>
              <td style={{ padding: '9px 10px', borderBottom: '1px solid #DDDDE1' }}>
                <span style={{ display: 'inline-block', fontFamily: "'IBM Plex Mono', monospace", fontSize: 9.5, letterSpacing: '.12em', textTransform: 'uppercase', padding: '2px 7px', borderRadius: 2, background: '#E7ECFA', color: '#3757B8' }}>Typed</span>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '9px 10px', borderBottom: '1px solid #DDDDE1' }}>Sequin</td>
              <td style={{ padding: '9px 10px', borderBottom: '1px solid #DDDDE1' }}>Cup</td>
              <td style={{ padding: '9px 10px', borderBottom: '1px solid #DDDDE1', fontFamily: "'IBM Plex Mono', monospace", textAlign: 'right' }}>6 mm</td>
              <td style={{ padding: '9px 10px', borderBottom: '1px solid #DDDDE1' }}>Gold</td>
              <td style={{ padding: '9px 10px', borderBottom: '1px solid #DDDDE1' }}>Cuff border</td>
              <td style={{ padding: '9px 10px', borderBottom: '1px solid #DDDDE1' }}>Atelier Lesage</td>
              <td style={{ padding: '9px 10px', borderBottom: '1px solid #DDDDE1', fontFamily: "'IBM Plex Mono', monospace", textAlign: 'right' }}>—</td>
              <td style={{ padding: '9px 10px', borderBottom: '1px solid #DDDDE1' }}>
                <span style={{ display: 'inline-block', fontFamily: "'IBM Plex Mono', monospace", fontSize: 9.5, letterSpacing: '.12em', textTransform: 'uppercase', padding: '2px 7px', borderRadius: 2, background: '#E7ECFA', color: '#3757B8' }}>Typed</span>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '9px 10px', borderBottom: '1px solid #DDDDE1' }}>Thread</td>
              <td style={{ padding: '9px 10px', borderBottom: '1px solid #DDDDE1' }}>Silk, Tkt 50</td>
              <td style={{ padding: '9px 10px', borderBottom: '1px solid #DDDDE1', fontFamily: "'IBM Plex Mono', monospace", textAlign: 'right' }}>—</td>
              <td style={{ padding: '9px 10px', borderBottom: '1px solid #DDDDE1' }}>Bone</td>
              <td style={{ padding: '9px 10px', borderBottom: '1px solid #DDDDE1' }}>All construction</td>
              <td style={{ padding: '9px 10px', borderBottom: '1px solid #DDDDE1' }}>Au Ver à Soie</td>
              <td style={{ padding: '9px 10px', borderBottom: '1px solid #DDDDE1', fontFamily: "'IBM Plex Mono', monospace", textAlign: 'right' }}>—</td>
              <td style={{ padding: '9px 10px', borderBottom: '1px solid #DDDDE1' }}>
                <span style={{ display: 'inline-block', fontFamily: "'IBM Plex Mono', monospace", fontSize: 9.5, letterSpacing: '.12em', textTransform: 'uppercase', padding: '2px 7px', borderRadius: 2, background: '#E7ECFA', color: '#3757B8' }}>Typed</span>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '9px 10px' }}>Zip</td>
              <td style={{ padding: '9px 10px' }}>Invisible</td>
              <td style={{ padding: '9px 10px', fontFamily: "'IBM Plex Mono', monospace", textAlign: 'right' }}>56 cm</td>
              <td style={{ padding: '9px 10px' }}>Bone</td>
              <td style={{ padding: '9px 10px' }}>Left side seam</td>
              <td style={{ padding: '9px 10px' }}>
                <span style={{ display: 'inline-block', fontFamily: "'IBM Plex Mono', monospace", fontSize: 9.5, letterSpacing: '.12em', textTransform: 'uppercase', padding: '2px 7px', borderRadius: 2, background: '#F8E9E9', color: '#B3272D' }}>Missing</span>
              </td>
              <td style={{ padding: '9px 10px', fontFamily: "'IBM Plex Mono', monospace", textAlign: 'right' }}>
                <span style={{ display: 'inline-block', fontFamily: "'IBM Plex Mono', monospace", fontSize: 9.5, letterSpacing: '.12em', textTransform: 'uppercase', padding: '2px 7px', borderRadius: 2, background: '#F8E9E9', color: '#B3272D' }}>Missing</span>
              </td>
              <td style={{ padding: '9px 10px' }}>
                <span style={{ display: 'inline-block', fontFamily: "'IBM Plex Mono', monospace", fontSize: 9.5, letterSpacing: '.12em', textTransform: 'uppercase', padding: '2px 7px', borderRadius: 2, background: '#F8E9E9', color: '#B3272D' }}>Required</span>
              </td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10.5, color: '#4A4844', lineHeight: 1.6, marginTop: 9 }}>
          Sequin size, type and colour are separate fields. “Sequins” is not a spec — a 5 mm gold cup and a 4 mm purple cup are different orders from the same supplier. These are commercial facts and human decisions, so the drafting agent refuses them rather than inventing a plausible value.
        </p>
      </div>

      <p style={{
        marginTop: 22, fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#4A4844',
        lineHeight: 1.8, borderTop: '1px solid #DDDDE1', paddingTop: 12
      }}>
        STYLE SHEET · INTERNAL. Not manufacturable on its own — the factory works from the SPEC SHEET (flat sketch, arrows, measurements) and makes its own paper pattern; the SCHEMATIC carries the true-to-size layout. Synthetic data. Nothing on this sheet has been validated by a factory.
      </p>
    </div>
  )
}
