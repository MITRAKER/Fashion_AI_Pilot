import { useState } from 'react'
import { useStore } from '../store'

/**
 * Starting your own work — a season, and styles inside it.
 *
 * Until this existed the only collection in the system was the seeded synthetic
 * one, so there was nowhere to put anything real. Deliberately plain: the
 * frontend is being redesigned from the wireframe, so this is the affordance and
 * not the design. It uses the existing card and button classes so restyling it
 * is a CSS job, not a rewrite.
 */

const CAN_CREATE = ['owner', 'creative', 'technical']

/**
 * Seasons are a known set, so this is a select rather than a prefilled text box.
 * A prefilled free-text field is a trap: click into "Autumn/Winter", type, and
 * you get "Autumn/WinterPre-Fall" unless you remember to clear it first.
 */
const SEASONS = ['Spring/Summer', 'Autumn/Winter', 'Resort', 'Pre-Fall']

export function NewSeason() {
  const { createSeason, user, seasons, collection, openSeason } = useStore()
  const [open, setOpen] = useState(false)
  const [brand, setBrand] = useState('Two Rivers')
  const [season, setSeason] = useState('Autumn/Winter')
  const [year, setYear] = useState(String(new Date().getFullYear() + 1))

  if (!user || !CAN_CREATE.includes(user.role)) return null

  return (
    <div className="nav-group">
      <div className="nav-label">Seasons</div>
      {seasons.map(s => (
        <button
          key={s.id}
          className={`nav-item ${collection?.id === s.id ? 'active' : ''}`}
          onClick={() => void openSeason(s.id)}
        >
          <span className="dot" />
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {s.season} {s.year}
          </span>
        </button>
      ))}

      {!open && (
        <button className="nav-item" onClick={() => setOpen(true)}>
          <span className="dot" style={{ background: 'var(--gold)' }} />
          New season
        </button>
      )}

      {open && (
        <form
          className="start-form"
          onSubmit={async e => {
            e.preventDefault()
            const y = Number(year)
            if (!brand.trim() || !season.trim() || !Number.isInteger(y)) return
            await createSeason({ brand: brand.trim(), season: season.trim(), year: y })
            setOpen(false)
          }}
        >
          <input value={brand} onChange={e => setBrand(e.target.value)} placeholder="Brand"
            onFocus={e => e.target.select()} />
          <select value={season} onChange={e => setSeason(e.target.value)}>
            {SEASONS.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <input value={year} onChange={e => setYear(e.target.value.replace(/\D/g, '').slice(0, 4))}
            placeholder="Year" inputMode="numeric" onFocus={e => e.target.select()} />
          <div className="start-actions">
            <button className="btn gold sm" type="submit">Create</button>
            <button className="btn ghost sm" type="button" onClick={() => setOpen(false)}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export function NewStyle() {
  const { createStyle, user, collection, templates } = useStore()
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [key, setKey] = useState('')

  if (!user || !CAN_CREATE.includes(user.role) || !collection) return null
  const cats = templates.length ? templates : [{ key: 'woven-dress', label: 'Dress — woven' }] as any

  if (!open) {
    return (
      <button className="btn gold sm" onClick={() => setOpen(true)}>
        New style
      </button>
    )
  }

  return (
    <form
      className="start-form inline"
      onSubmit={async e => {
        e.preventDefault()
        if (!name.trim()) return
        await createStyle({
          collectionId: collection.id,
          name: name.trim(),
          categoryKey: key || cats[0].key,
        })
        setName('')
        setOpen(false)
      }}
    >
      <input autoFocus value={name} onChange={e => setName(e.target.value)}
        placeholder="Style name" />
      <select value={key || cats[0].key} onChange={e => setKey(e.target.value)}>
        {cats.map((c: any) => <option key={c.key} value={c.key}>{c.label}</option>)}
      </select>
      <button className="btn gold sm" type="submit">Create</button>
      <button className="btn ghost sm" type="button" onClick={() => setOpen(false)}>Cancel</button>
      <p className="start-note mono">
        Every required field starts empty and Unresolved. A new style tells you what it
        does not know rather than looking finished.
      </p>
    </form>
  )
}
