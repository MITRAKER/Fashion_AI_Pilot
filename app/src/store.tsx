import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type {
  AuditEvent, CategoryTemplate, Collection, FactoryCorrection, ModelInvocation, User,
  ValidationFinding,
} from '../shared/types.ts'
// Type-only import: erased at build, so no server code reaches the browser bundle.
import type { DraftResult } from '../server/ai/provider.ts'

// ---------------------------------------------------------------------------
// API client. There is no local persistence any more: every mutation is an
// authenticated request that commits inside a database transaction on the server,
// and the server is the only place preflight is computed. If a route is missing,
// the UI breaks loudly here rather than pretending the change was saved.
// ---------------------------------------------------------------------------

interface State {
  user: User | null
  collection: Collection | null
  audit: AuditEvent[]
  invocations: ModelInvocation[]
  corrections: FactoryCorrection[]
  templates: CategoryTemplate[]
  preflight: Record<string, ValidationFinding[]>
}

const EMPTY: State = {
  user: null, collection: null, audit: [], invocations: [],
  corrections: [], templates: [], preflight: {},
}

interface Ctx extends State {
  loading: boolean
  error: string | null
  clearError: () => void
  login: (username: string, password: string) => Promise<void>
  logout: () => Promise<void>
  resolveField: (styleId: string, fieldId: string, value: string) => Promise<void>
  approveField: (styleId: string, fieldId: string) => Promise<void>
  approveGate: (styleId: string, key: string) => Promise<void>
  resolveThread: (styleId: string, msgId: string, promote?: PromoteInput) => Promise<void>
  createExport: (styleId: string) => Promise<void>
  draftPack: (styleId: string, confirm?: boolean) => Promise<DraftResult | null>
  signOffCategory: (key: string) => Promise<void>
}

export interface PromoteInput {
  kind: 'require_field' | 'require_pom_tolerance' | 'require_dimensioned_placement'
  target: string
  message: string
  severity: 'blocker' | 'warning'
}

const StoreContext = createContext<Ctx | null>(null)

async function api(method: string, path: string, body?: unknown) {
  const res = await fetch(path, {
    method,
    headers: { 'content-type': 'application/json' },
    body: method === 'GET' ? undefined : JSON.stringify(body ?? {}),
  })
  const payload = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(payload?.error ?? `${res.status} ${res.statusText}`)
  return payload
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<State>(EMPTY)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const refresh = useCallback(async () => {
    try {
      const s = await api('GET', '/api/state')
      setState({
        user: s.user, collection: s.collection, audit: s.audit,
        invocations: s.invocations, corrections: s.corrections,
        templates: s.templates, preflight: s.preflight,
      })
    } catch (e) {
      // 401 is the normal unauthenticated case, not an error worth showing.
      if (!/Authentication required/.test((e as Error).message)) {
        setError((e as Error).message)
      }
      setState(EMPTY)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { void refresh() }, [refresh])

  const mutate = useCallback(async (fn: () => Promise<unknown>) => {
    setError(null)
    try {
      await fn()
      await refresh()
    } catch (e) {
      setError((e as Error).message)
    }
  }, [refresh])

  const value = useMemo<Ctx>(() => ({
    ...state, loading, error,
    clearError: () => setError(null),

    async login(username, password) {
      setError(null)
      try {
        await api('POST', '/api/login', { username, password })
        await refresh()
      } catch (e) { setError((e as Error).message) }
    },
    async logout() {
      await api('POST', '/api/logout').catch(() => {})
      setState(EMPTY)
    },

    resolveField: (styleId, fieldId, value) =>
      mutate(() => api('POST', `/api/styles/${styleId}/fields/${fieldId}`, { value })),
    approveField: (styleId, fieldId) =>
      mutate(() => api('POST', `/api/styles/${styleId}/fields/${fieldId}/approve`)),
    approveGate: (styleId, key) =>
      mutate(() => api('POST', `/api/styles/${styleId}/gates/${key}/approve`)),
    resolveThread: (styleId, msgId, promote) =>
      mutate(() => api('POST', `/api/styles/${styleId}/thread/${msgId}/resolve`,
        promote ? { promote } : {})),
    createExport: styleId =>
      mutate(() => api('POST', `/api/styles/${styleId}/exports`)),

    async draftPack(styleId, confirm) {
      setError(null)
      try {
        const r = await api('POST', `/api/styles/${styleId}/draft`, { confirm })
        await refresh()
        return r.result as DraftResult
      } catch (e) {
        setError((e as Error).message)
        return null
      }
    },
    signOffCategory: key =>
      mutate(() => api('POST', `/api/categories/${key}/signoff`)),
  }), [state, loading, error, mutate, refresh])

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used inside StoreProvider')
  return ctx
}

/** Findings for one style, as computed by the server. */
export const useFindings = (styleId: string) => useStore().preflight[styleId] ?? []
