import type { FieldApproval, PackStatus, StageStatus } from '../../shared/types.ts'

type Tone = 'blocker' | 'warn' | 'ok' | 'draft' | 'ai' | 'gold'

export function Badge({ tone, children }: { tone: Tone; children: React.ReactNode }) {
  return <span className={`badge ${tone}`}>{children}</span>
}

const approvalTone: Record<FieldApproval, Tone> = {
  Suggested: 'ai', Unverified: 'draft', 'Human Edited': 'gold',
  Approved: 'ok', Overridden: 'warn', Unresolved: 'blocker',
}
export const ApprovalBadge = ({ v }: { v: FieldApproval }) =>
  <Badge tone={approvalTone[v]}>{v}</Badge>

const packTone: Record<PackStatus, Tone> = {
  Draft: 'draft', 'Needs Review': 'warn', 'Changes Requested': 'blocker',
  'Approved for Factory': 'ok', Superseded: 'draft',
}
export const PackBadge = ({ v }: { v: PackStatus }) => <Badge tone={packTone[v]}>{v}</Badge>

const stageTone: Record<StageStatus, Tone> = {
  'Not Started': 'draft', 'In Progress': 'gold', Blocked: 'blocker',
  'In Review': 'warn', Approved: 'ok', Complete: 'ok',
}
export const StageBadge = ({ v }: { v: StageStatus }) => <Badge tone={stageTone[v]}>{v}</Badge>

export const fmt = (iso?: string) =>
  iso ? new Date(iso).toLocaleString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
  }) : '—'

/* -------------------------------------------------------------------------
   Placeholder artwork. Drawn as SVG rather than shipped as images so the
   demonstrator has no external asset dependency and nothing here can be mistaken
   for a real generated garment. Each mode renders in a visually distinct
   language — that separation is the point (PRD CRE-002).
   ------------------------------------------------------------------------- */

export function MoodCanvas({ palette }: { palette: string[] }) {
  const [a, b, c, d] = [palette[0] ?? '#C8B49A', palette[1] ?? '#8FA3B0',
                        palette[2] ?? '#E4DCCF', palette[3] ?? '#2F3A42']
  return (
    <svg viewBox="0 0 320 190" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <defs>
        <radialGradient id="m1" cx="30%" cy="35%">
          <stop offset="0%" stopColor={a} stopOpacity=".95" />
          <stop offset="100%" stopColor={a} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="m2" cx="72%" cy="60%">
          <stop offset="0%" stopColor={b} stopOpacity=".85" />
          <stop offset="100%" stopColor={b} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="m3" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor={d} />
          <stop offset="100%" stopColor={c} stopOpacity=".35" />
        </linearGradient>
      </defs>
      <rect width="320" height="190" fill="url(#m3)" />
      <ellipse cx="96" cy="66" rx="130" ry="96" fill="url(#m1)" />
      <ellipse cx="230" cy="114" rx="118" ry="86" fill="url(#m2)" />
      <g opacity=".28" stroke={c} fill="none" strokeWidth=".8">
        {Array.from({ length: 9 }, (_, i) => (
          <path key={i} d={`M ${-20 + i * 42} 190 Q ${10 + i * 42} 96 ${-6 + i * 42} 0`} />
        ))}
      </g>
    </svg>
  )
}

export function PresentationCanvas({ palette }: { palette: string[] }) {
  const ink = palette[0] ?? '#3A4654'
  const accent = palette[1] ?? '#C8B49A'
  return (
    <svg viewBox="0 0 320 190" preserveAspectRatio="xMidYMid meet" width="100%" height="100%">
      <rect width="320" height="190" fill="#f2efe9" />
      <g transform="translate(160 6) scale(.97)" fill="none" strokeLinecap="round">
        {/* croquis: elongated figure, weight on one leg, shoulders/hips opposed */}
        <g stroke={ink} strokeWidth="1.5">
          <circle cx="0" cy="16" r="9" />
          <path d="M0 25 L0 40" />
          <path d="M-17 44 L18 40" />           {/* shoulder line, tilted */}
          <path d="M-13 96 L15 99" />           {/* hip line, opposed */}
          <path d="M-1 40 L1 98" />             {/* balance line */}
          <path d="M-13 96 L-16 140 L-14 178" />
          <path d="M15 99 L19 141 L17 178" />
          <path d="M-17 44 L-26 78 L-24 92" />
          <path d="M18 40 L27 76 L25 90" />
        </g>
        {/* garment: bias panel dress, drape following the figure */}
        <path d="M-19 44 Q0 36 20 40 L27 74 Q30 108 24 150 Q0 160 -24 150 Q-30 106 -26 74 Z"
              fill={accent} fillOpacity=".55" stroke={ink} strokeWidth="1.2" />
        <path d="M-14 62 Q2 96 20 128" stroke={ink} strokeWidth=".7" strokeDasharray="3 3" opacity=".7" />
        <path d="M-24 150 Q0 158 24 150" stroke={ink} strokeWidth="1" />
      </g>
      <g opacity=".5" stroke={ink} strokeWidth=".6">
        <path d="M20 178 L300 178" strokeDasharray="2 5" />
      </g>
    </svg>
  )
}

export function FlatCanvas({ back = false }: { back?: boolean }) {
  return (
    <svg viewBox="0 0 320 190" preserveAspectRatio="xMidYMid meet" width="100%" height="100%">
      <rect width="320" height="190" fill="#fbfbfa" />
      <g transform="translate(160 14)" fill="none" stroke="#1c1c1e">
        {/* silhouette: heaviest weight */}
        <path d="M-30 12 L-46 26 L-38 46 L-33 38 L-36 132 Q0 141 36 132 L33 38 L38 46 L46 26 L30 12
                 Q18 3 0 3 Q-18 3 -30 12 Z" strokeWidth="2" />
        {/* neckline */}
        <path d={back ? 'M-13 5 Q0 12 13 5' : 'M-13 5 Q0 20 13 5'} strokeWidth="2" />
        {/* structural seams: medium */}
        <path d="M-30 12 L-27 128" strokeWidth="1.1" />
        <path d="M30 12 L27 128" strokeWidth="1.1" />
        {/* topstitch: light dashed */}
        <path d="M-33 16 L-30 126" strokeWidth=".6" strokeDasharray="3 2.5" />
        <path d="M33 16 L30 126" strokeWidth=".6" strokeDasharray="3 2.5" />
        <path d="M-35 133 Q0 142 35 133" strokeWidth=".6" strokeDasharray="3 2.5" />
        {back
          ? <path d="M0 8 L0 128" strokeWidth="1.1" />
          : <>
              <path d="M0 10 L0 128" strokeWidth="1.1" />
              {[26, 42, 58, 74, 90, 106].map(y => (
                <circle key={y} cx="6" cy={y} r="2" strokeWidth=".9" />
              ))}
            </>}
        {/* bias panel indication (front only) */}
        {!back && <path d="M-24 54 L20 112" strokeWidth=".7" strokeDasharray="6 3" opacity=".8" />}
      </g>
      {/* callout to the unresolved detail */}
      <g fontFamily="monospace" fontSize="7.5" fill="#e5484d">
        <path d="M196 60 L232 46" stroke="#e5484d" strokeWidth=".7" />
        <circle cx="196" cy="60" r="2.4" fill="#e5484d" />
        <text x="235" y="45">UNRESOLVED</text>
        <text x="235" y="55" fill="#8a8a86">placket closure</text>
      </g>
      <g fontFamily="monospace" fontSize="7.5" fill="#8a8a86">
        <text x="14" y="176">{back ? 'BACK — ORTHOGRAPHIC' : 'FRONT — ORTHOGRAPHIC'}</text>
        <text x="14" y="166">SCALE 1:8 · NOT DIMENSIONALLY VERIFIED</text>
      </g>
    </svg>
  )
}
