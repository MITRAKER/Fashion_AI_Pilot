import { useState } from 'react'
import { useStore } from '../store'

const ACCOUNTS = [
  { u: 'natalie', role: 'Technical designer — may edit and approve production-critical work' },
  { u: 'mitra', role: 'Owner — may edit and approve' },
  { u: 'factory', role: 'Factory reviewer — may comment, may not approve' },
  { u: 'viewer', role: 'Viewer — read only' },
]

export function Login() {
  const { login, error } = useStore()
  const [username, setUsername] = useState('natalie')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setBusy(true)
    await login(username, password)
    setBusy(false)
  }

  const input = { width: '100%', marginTop: 6, padding: '11px 14px' } as const

  return (
    <div className="login-shell">
      <div style={{ width: '100%', maxWidth: 940, display: 'grid', gap: 22,
                    gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)' }}>
        <div className="card" style={{ padding: 34 }}>
          <div className="brand" style={{ padding: 0, marginBottom: 26 }}>
            <h1 style={{ fontSize: 34 }}>Atelier</h1>
            <div className="rule" />
            <p>Collection Development</p>
          </div>

          <form onSubmit={submit}>
            <label style={{ fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase',
                            color: 'var(--text-3)' }}>
              Username
              <input className="field-input" style={input} value={username} onChange={e => setUsername(e.target.value)}
                     autoComplete="username" />
            </label>
            <label style={{ fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase',
                            color: 'var(--text-3)', display: 'block', marginTop: 16 }}>
              Password
              <input className="field-input" style={input} type="password" value={password}
                     onChange={e => setPassword(e.target.value)} autoComplete="current-password" />
            </label>

            {error && (
              <div style={{ marginTop: 16, padding: '10px 13px', borderRadius: 8,
                            background: 'var(--blocker-bg)', color: 'var(--blocker)', fontSize: 12.5 }}>
                {error}
              </div>
            )}

            <button className="btn gold block" style={{ marginTop: 22 }} disabled={busy}>
              {busy ? 'Signing in…' : 'Sign in'}
            </button>
          </form>
        </div>

        <div className="card" style={{ padding: 30 }}>
          <h3>Demonstrator accounts</h3>
          <p className="sub">
            Roles are enforced on the server, not in the interface. Sign in as the factory
            reviewer or the viewer and watch the approval actions get refused.
          </p>
          {ACCOUNTS.map(a => (
            <div key={a.u} style={{ padding: '11px 0', borderBottom: '1px solid var(--line)' }}>
              <button className="btn sm" onClick={() => setUsername(a.u)}
                      style={{ marginBottom: 6 }}>{a.u}</button>
              <div className="muted" style={{ fontSize: 11.5 }}>{a.role}</div>
            </div>
          ))}
          <p className="muted" style={{ fontSize: 11.5, marginTop: 16, lineHeight: 1.6 }}>
            Password for every demonstrator account is <b>pilot</b>. This workspace holds
            synthetic data only; real brand data is not loaded until the PRD §12 security
            checklist passes.
          </p>
        </div>
      </div>
    </div>
  )
}
