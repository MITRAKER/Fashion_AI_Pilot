import { useEffect, useState } from 'react'

/**
 * The runway runs on the showroom dev server, not this one.
 *
 * A plain <a> to localhost:5174 dead-ends on a browser error page when that
 * server is not running, which says nothing about the cause. It has bitten us
 * twice — once pointing at 5174 while it was stopped, and before that at 5190,
 * a port nothing ever listened on. So ask the dev server (which can reach it
 * cross-origin) and say plainly what to run when it is down.
 */
export function RunwayLink() {
  const [state, setState] = useState<'checking' | 'up' | 'down'>('checking')
  const [url, setUrl] = useState('http://localhost:5174/runway.html')
  const [showHelp, setShowHelp] = useState(false)

  const check = () =>
    fetch('/showroom-status')
      .then(r => r.json())
      .then((d: { up: boolean; url: string }) => { setUrl(d.url); setState(d.up ? 'up' : 'down') })
      .catch(() => setState('down'))

  useEffect(() => { void check() }, [])

  if (state === 'up') {
    return (
      <a href={url} target="_blank" rel="noreferrer" className="nav-item"
        style={{ textDecoration: 'none', color: 'inherit' }}>
        <span className="dot" style={{ background: 'var(--gold)' }} />
        Runway Game ↗
      </a>
    )
  }

  return (
    <>
      <button className="nav-item" onClick={() => { setShowHelp(h => !h); void check() }}>
        <span className="dot" style={{ background: state === 'checking' ? 'var(--text-3)' : 'var(--blocker)' }} />
        Runway Game
        <span className="meta" style={state === 'down' ? { color: 'var(--blocker)' } : undefined}>
          {state === 'checking' ? '…' : 'off'}
        </span>
      </button>
      {showHelp && state === 'down' && (
        <div className="runway-help">
          <p>The runway runs on the showroom dev server, which is not running.</p>
          <code>npm --prefix showroom run dev</code>
          <button className="btn ghost sm" onClick={() => void check()}>Check again</button>
        </div>
      )}
    </>
  )
}
