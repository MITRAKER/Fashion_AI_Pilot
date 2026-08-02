import { useState } from 'react'
import { StoreProvider, useStore } from './store'
import { Dashboard } from './components/Dashboard'
import { StyleRecord } from './components/StyleRecord'
import { Governance } from './components/Governance'
import { Login } from './components/Login'
import { IntroSplash } from './components/IntroSplash'
import { ConceptStudio } from './components/ConceptStudio'
import { summarise } from '../shared/rules.ts'
import { Badge } from './components/ui'

type View =
  | { page: 'collection' }
  | { page: 'style'; id: string }
  | { page: 'governance' }
  | { page: 'concept' }

function Shell() {
  const { collection, user, preflight, loading, error, clearError, logout } = useStore()
  const [view, setView] = useState<View>({ page: 'collection' })
  const [showSplash, setShowSplash] = useState(true)

  if (loading) return <div className="empty-state" style={{ paddingTop: 120 }}>Loading workspace…</div>
  if (!user || !collection) return <Login />

  const totals = summarise(collection.styles.flatMap(s => preflight[s.id] ?? []))

  return (
    <>
      {showSplash && <IntroSplash onEnter={() => setShowSplash(false)} />}
      <div className="app-frame">
      <div className="app">
        <aside className="sidebar">
          <div className="brand">
            <h1>Atelier</h1>
            <div className="rule" />
            <p>Collection Development</p>
          </div>

          <div className="nav-group">
            <div className="nav-label">Collection</div>
            <button
              className={`nav-item ${view.page === 'collection' ? 'active' : ''}`}
              onClick={() => setView({ page: 'collection' })}
            >
              <span className="dot" />
              {collection.season} {collection.year}
              <span className="meta">{collection.styles.length}</span>
            </button>
          </div>

          <div className="nav-group">
            <div className="nav-label">Styles</div>
            {collection.styles.map(s => {
              const { blockers } = summarise(preflight[s.id] ?? [])
              return (
                <button
                  key={s.id}
                  className={`nav-item ${view.page === 'style' && view.id === s.id ? 'active' : ''}`}
                  onClick={() => setView({ page: 'style', id: s.id })}
                >
                  <span className="dot" />
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {s.id}
                  </span>
                  <span className="meta" style={blockers ? { color: 'var(--blocker)' } : undefined}>
                    {blockers ? `${blockers}✕` : '✓'}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="nav-group">
            <div className="nav-label">Workspace</div>
            <button
              className={`nav-item ${view.page === 'concept' ? 'active' : ''}`}
              onClick={() => setView({ page: 'concept' })}
            >
              <span className="dot" style={{ background: 'var(--gold)' }} />
              Concept Studio
            </button>
            <button
              className={`nav-item ${view.page === 'governance' ? 'active' : ''}`}
              onClick={() => setView({ page: 'governance' })}
            >
              <span className="dot" />
              Governance
            </button>
            <a
              href="http://localhost:5174/runway.html"
              target="_blank"
              rel="noreferrer"
              className="nav-item"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <span className="dot" style={{ background: '#f4d03a' }} />
              Runway Game ↗
            </a>
          </div>

          <div style={{ marginTop: 'auto', padding: '0 8px' }}>
            <div style={{
              paddingTop: 16, borderTop: '1px solid var(--line)', display: 'grid', gap: 10,
            }}>
              <div style={{ fontSize: 12 }}>
                {user.name}
                <div style={{ fontSize: 10.5, color: 'var(--text-3)', letterSpacing: '.1em',
                              textTransform: 'uppercase' }}>
                  {user.role}
                </div>
              </div>
              <button className="btn sm ghost" onClick={() => void logout()}>Sign out</button>
              <div style={{ fontSize: 10.5, color: 'var(--text-3)', lineHeight: 1.6 }}>
                One-week demonstrator · synthetic data<br />Not a production pilot
              </div>
            </div>
          </div>
        </aside>

        <main className="main">
          <div className="synthetic-banner">
            <strong>SYNTHETIC</strong>
            <span>
              Every style, measurement, and factory message in this build is invented for
              demonstration. Nothing here has been validated by a technical designer or a factory.
            </span>
            <span style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
              {totals.blockers > 0 && <Badge tone="blocker">{totals.blockers} export blockers</Badge>}
            </span>
          </div>

          {error && (
            <div className="synthetic-banner" style={{
              background: 'var(--blocker-bg)', borderColor: 'rgba(229,72,77,.3)', color: 'var(--blocker)',
            }}>
              <strong style={{ color: 'var(--blocker)' }}>REFUSED</strong>
              <span>{error}</span>
              <button className="btn sm ghost" style={{ marginLeft: 'auto' }} onClick={clearError}>
                Dismiss
              </button>
            </div>
          )}

          <div className="topbar">
            <div className="crumb">
              <b>{collection.brand}</b> / {collection.season} {collection.year}
              {view.page === 'style' && <> / <b>{view.id}</b></>}
              {view.page === 'governance' && <> / <b>Governance</b></>}
              {view.page === 'concept' && <> / <b>Concept Studio</b></>}
            </div>
            <div className="spacer" />
            <Badge tone="gold">Pilot workspace</Badge>
          </div>

          <div className="content">
            {view.page === 'collection' &&
              <Dashboard onOpen={id => setView({ page: 'style', id })} />}
            {view.page === 'style' &&
              <StyleRecord styleId={view.id} onBack={() => setView({ page: 'collection' })} />}
            {view.page === 'governance' && <Governance />}
            {view.page === 'concept' && <ConceptStudio />}
          </div>
        </main>
      </div>
    </div>
    </>
  )
}

export default function App() {
  return <StoreProvider><Shell /></StoreProvider>
}
