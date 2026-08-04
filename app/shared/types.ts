// Domain types mirror PRD §7 (Data Model). Names match the PRD entity list deliberately
// so the demonstrator schema can migrate to the real backend without renaming.

export type StageStatus =
  | 'Not Started' | 'In Progress' | 'Blocked' | 'In Review' | 'Approved' | 'Complete'

export type PackStatus =
  | 'Draft' | 'Needs Review' | 'Changes Requested' | 'Approved for Factory' | 'Superseded'

export type FieldApproval =
  | 'Suggested' | 'Unverified' | 'Human Edited' | 'Approved' | 'Overridden' | 'Unresolved'

export type FieldSource = 'ai' | 'human' | 'imported'
export type Confidence = 'low' | 'medium' | 'high' | 'n/a'
export type Severity = 'blocker' | 'warning'
export type GateKey = 'concept' | 'design' | 'technical' | 'handoff'
export type SketchMode = 'mood' | 'presentation' | 'flat'

export interface Provenance {
  source: FieldSource
  createdBy: string
  createdAt: string
  aiInvolved: boolean
  confidence: Confidence
  approval: FieldApproval
  critical: boolean
  note?: string
}

export interface PackField extends Provenance {
  id: string
  section: string
  label: string
  value: string
  unit?: string
}

export interface PomRow extends Provenance {
  code: string
  name: string
  method: string
  tolerance: string
  unit: 'cm' | 'in'
  sizes: Record<string, number | null>
}

export interface BomRow extends Provenance {
  id: string
  material: string
  composition: string
  weight: string
  placement: string
  supplier: string
  qty: string
}

export interface TrimRow extends Provenance {
  id: string
  item: string
  spec: string
  placement: string
  qty: string
}

export interface Stage {
  n: number
  name: string
  weeks: string
  output: string
  status: StageStatus
  gate?: GateKey
}

export interface Gate {
  key: GateKey
  label: string
  approver: string
  approved: boolean
  approvedAt?: string
  reason?: string
}

export interface Asset {
  id: string
  mode: SketchMode
  title: string
  caption: string
  palette: string[]
  synthetic: boolean
}

export interface StyleAssets {
  items: Asset[]
  flatSketch?: string
}

export interface FactoryMessage {
  id: string
  author: string
  role: 'factory' | 'brand'
  at: string
  body: string
  fieldRef?: string
  state: 'Open' | 'Answered' | 'Accepted' | 'Requires Revision' | 'Resolved'
  proposedRule?: string
}

export type ParsedSketch = {
  field_status: 'DRAFT' | 'APPROVED'
  styleId: string
  sourceAsset: string
  garment_category: string
  silhouette: string
  key_design_features: {
    neckline: string
    sleeves: string
    seams_darts: string
    pockets: string
    closures: string
    hem: string
  }
  views_present: string[]
  views_missing: string[]
  symmetry: string
  rough_proportions: {
    shoulder: string
    waist: string
    skirt_volume: string
    length: string
  }
}

// --- Category templates (D-01) --------------------------------------------

export interface CategoryTemplate {
  key: string
  label: string
  /** Null until the pilot technical designer signs the schema off. */
  signedOffBy: string | null
  requiredFields: { section: string; label: string; critical: boolean }[]
  requiredPoms: { code: string; name: string }[]
}

// --- Factory corrections promoted to rules (FAC-002) -----------------------

export type CorrectionKind =
  | 'require_field'              // a named field must be non-empty
  | 'require_pom_tolerance'      // a named POM code must carry a tolerance
  | 'require_dimensioned_placement' // a named trim's placement must contain a number

export interface FactoryCorrection {
  id: string
  styleId: string
  threadId: string
  kind: CorrectionKind
  target: string
  message: string
  severity: Severity
  /** A correction only governs future work once a human accepts it. */
  accepted: boolean
  acceptedBy: string | null
  acceptedAt: string | null
}

// --- Auth ------------------------------------------------------------------

export type Role = 'owner' | 'creative' | 'technical' | 'factory' | 'viewer'

export interface User {
  id: string
  username: string
  name: string
  role: Role
}

export interface Style {
  id: string
  name: string
  category: string
  /** Key into CATEGORY_TEMPLATES. Drives which fields and POMs are required. */
  categoryKey: string
  status: PackStatus
  version: number
  baseSize: string | null
  units: 'cm' | 'in' | 'mixed'
  sizeRange: string[]
  owner: string
  colorways: string[]
  assets: StyleAssets
  fields: PackField[]
  poms: PomRow[]
  bom: BomRow[]
  trims: TrimRow[]
  gates: Gate[]
  thread: FactoryMessage[]
  exports: ExportRecord[]
  parsedSketch?: ParsedSketch
}

export interface ExportRecord {
  id: string
  version: number
  at: string
  authorized: boolean
  manifest: string[]
}

export interface Collection {
  id: string
  brand: string
  season: string
  year: number
  market: string
  customer: string
  shipWindow: string
  currency: string
  owner: string
  stages: Stage[]
  styles: Style[]
}

export interface ValidationFinding {
  id: string
  severity: Severity
  family: string
  ref: string
  message: string
  detail: string
  source: 'deterministic'
}

export interface AuditEvent {
  id: string
  at: string
  actor: string
  action: string
  target: string
  from?: string
  to?: string
  reason?: string
}

export interface ModelInvocation {
  id: string
  at: string
  provider: string
  model: string
  feature: string
  latencyMs: number
  costUsd: number
  userAction: 'accepted' | 'discarded' | 'edited' | 'pending'
  styleId?: string
}
