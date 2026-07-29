import { useState } from 'react'

const STAGES = [
  { id: '1', title: 'Trend + concept', wks: '1-3', gate: false, desc: 'Season, customer, color, silhouette, fabric themes', status: 'done' },
  { id: '2', title: 'Fabric sourcing', wks: '2-6', gate: false, desc: 'Candidate fabrics, trims, suppliers, constraints', status: 'done' },
  { id: '3', title: 'Mood + boards', wks: '3-6', gate: false, desc: 'Creative boards and early sketch directions', status: 'done' },
  { id: '4', title: 'Concept green light', wks: '6', gate: true, desc: 'Approved collection direction signed off', status: 'done' },
  { id: '5', title: 'Presentation sketches', wks: '6-10', gate: false, desc: 'Selected concepts with details and styling', status: 'now' },
  { id: '6', title: 'Design green light', wks: '10', gate: true, desc: 'Approved designs for technical development', status: 'now' },
  { id: '7', title: 'Flats + spec draft', wks: '10-14', gate: false, desc: 'Front/back flats, POMs, BOM, construction draft', status: '' },
  { id: '8', title: 'First prototype', wks: '14-20', gate: false, desc: 'Proto sample and factory questions', status: '' },
  { id: '9', title: 'First fitting', wks: '20-22', gate: false, desc: 'Fit notes, corrections, decision record', status: '' },
  { id: '10', title: 'Second prototype', wks: '22-26', gate: false, desc: 'Revised sample', status: '' },
  { id: '11', title: 'Second fitting + final', wks: '26-28', gate: false, desc: 'Approved fit and construction', status: '' },
  { id: '12', title: 'Final pack + handoff', wks: '28-30', gate: true, desc: 'Locked pack, grading inputs, factory notes', status: '' },
  { id: '13', title: 'Production prep', wks: '30-34', gate: false, desc: 'Materials, quantities, costing, capacity', status: '' },
  { id: '14', title: 'Bulk production', wks: '34-44', gate: false, desc: 'Production status and exceptions', status: '' },
  { id: '15', title: 'QC + delivery', wks: '44-52', gate: false, desc: 'QC results, issue closure, shipment readiness', status: '' },
]

export function SeasonCalendar() {
  const [selected, setSelected] = useState(STAGES[4])

  return (
    <div className="card" style={{ marginBottom: 20 }}>
      <h3>Season Calendar · 15-Stage Tape Measure Timeline</h3>
      <p className="sub">
        Deterministic timeline tracking collection progress from concept to bulk production delivery.
      </p>

      <div style={{ overflowX: 'auto', paddingBottom: 10, margin: '16px 0' }}>
        <div style={{ display: 'flex', minWidth: 1040, border: '1.5px solid var(--ink)', background: '#fff' }}>
          {STAGES.map(s => {
            const isSel = selected.id === s.id
            return (
              <div
                key={s.id}
                onClick={() => setSelected(s)}
                style={{
                  flex: 1, minWidth: 64, borderRight: '1px dashed var(--line)', padding: '10px 8px 12px',
                  position: 'relative', cursor: 'pointer', background: isSel ? '#E7ECFA' : s.status === 'now' ? '#FAFAFC' : '#fff'
                }}
              >
                {s.gate && (
                  <span style={{
                    position: 'absolute', top: -9, left: 6, fontFamily: 'var(--mono)', fontSize: 8,
                    letterSpacing: '.18em', background: 'var(--ink)', color: '#fff', padding: '1px 5px'
                  }}>
                    GATE
                  </span>
                )}
                <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--graphite)', letterSpacing: '.08em' }}>
                  WK {s.wks}
                </div>
                <div style={{ fontSize: 10.5, fontWeight: 600, lineHeight: 1.35, marginTop: 4 }}>
                  {s.id}. {s.title}
                </div>
                <div style={{
                  height: 5, marginTop: 8,
                  background: s.status === 'done' ? 'var(--ink)' : s.status === 'now' ? 'var(--chalk)' : '#e6e6ea'
                }} />
              </div>
            )
          })}
        </div>
      </div>

      {selected && (
        <div style={{
          background: '#FAF9F6', border: '1px solid var(--line)', padding: 14, borderRadius: 4,
          fontSize: 12.5, lineHeight: 1.8
        }}>
          <div style={{ display: 'flex', gap: 20 }}>
            <div><span style={{ fontFamily: 'var(--mono)', color: 'var(--graphite)', width: 120, display: 'inline-block' }}>Stage:</span><b>{selected.id} · {selected.title}</b></div>
            <div><span style={{ fontFamily: 'var(--mono)', color: 'var(--graphite)', width: 80, display: 'inline-block' }}>Weeks:</span>{selected.wks}</div>
          </div>
          <div><span style={{ fontFamily: 'var(--mono)', color: 'var(--graphite)', width: 120, display: 'inline-block' }}>Primary output:</span>{selected.desc}</div>
          <div><span style={{ fontFamily: 'var(--mono)', color: 'var(--graphite)', width: 120, display: 'inline-block' }}>Rule:</span>Starts only when upstream approvals are satisfied or an authorized override is recorded.</div>
        </div>
      )}
    </div>
  )
}
