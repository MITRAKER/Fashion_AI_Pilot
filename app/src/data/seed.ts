import type {
  Collection, Style, PackField, PomRow, BomRow, TrimRow, Provenance,
} from '../../shared/types.ts'

// ---------------------------------------------------------------------------
// SYNTHETIC PILOT DATA. Every value here is invented for the demonstrator.
// Nothing in this file has been validated by a technical designer or a factory.
// Per PRD Appendix A, all output derived from this data must be labelled.
// ---------------------------------------------------------------------------

const now = '2026-07-27T09:00:00Z'

// Provenance defaults. Typed to Provenance only — never Partial<PackField> — so that
// spreading it cannot widen a field's own literal types (unit, approval, ...).
const p = (over: Partial<Provenance> = {}): Provenance => ({
  source: 'human' as const, createdBy: 'N. Walker', createdAt: now,
  aiInvolved: false, confidence: 'n/a' as const, approval: 'Human Edited' as const,
  critical: false, ...over,
})

const field = (
  id: string, section: string, label: string, value: string,
  over: Partial<PackField> = {},
): PackField => ({ id, section, label, value, ...p(over) } as PackField)

// --- DR-1041 : the pilot style, seeded with real, findable defects -----------

const dr1041Fields: PackField[] = [
  field('f-style-id', 'Cover', 'Style ID', 'DR-1041'),
  field('f-name', 'Cover', 'Style name', 'Bias Panel Denim Dress'),
  field('f-season', 'Cover', 'Season', 'Spring/Summer 2027'),
  field('f-cat', 'Cover', 'Category', 'Dress — woven denim'),
  field('f-base', 'Cover', 'Base size', '', {
    approval: 'Unresolved', critical: true,
    note: 'Not declared. Graded table cannot be read without it.',
  }),
  field('f-units', 'Cover', 'Pack units', 'cm', { critical: true }),
  field('f-designer', 'Cover', 'Designer', 'N. Walker'),
  field('f-techd', 'Cover', 'Technical designer', 'Unassigned', { approval: 'Unresolved' }),
  field('f-factory', 'Cover', 'Factory', 'Partner A — sample room'),

  field('f-fab-main', 'Fabric', 'Main fabric', '100% cotton denim, 10.5 oz, 148 cm width', {
    critical: true, source: 'imported', createdBy: 'Supplier sheet',
  }),
  field('f-fab-finish', 'Fabric', 'Finish', 'Enzyme wash, medium indigo', { critical: true }),
  field('f-fab-shrink', 'Fabric', 'Shrinkage', '', {
    approval: 'Unresolved', critical: true,
    note: 'Not supplied. Bias panels make shrinkage behaviour decisive.',
  }),
  field('f-fab-stretch', 'Fabric', 'Stretch / recovery', 'None — rigid', { critical: true }),

  field('f-con-seam', 'Construction', 'Side seam', 'Felled seam, 1.2 cm SA, 2 rows topstitch', {
    critical: true,
  }),
  field('f-con-spi', 'Construction', 'Stitch density', '8 SPI topstitch, 10 SPI construction', {
    critical: true,
  }),
  field('f-con-hem', 'Construction', 'Hem', 'Bias panel hem — 2 cm double turn', {
    critical: true, source: 'ai', aiInvolved: true, confidence: 'medium',
    approval: 'Suggested', createdBy: 'draft agent',
    note: 'AI-drafted. Bias hang time not specified — see validation.',
  }),
  field('f-con-cuff', 'Construction', 'Sleeve placket closure', '', {
    approval: 'Unresolved', critical: true,
    note: 'Sketch shows a placket. Button vs. snap not determinable from the sketch.',
  }),
  field('f-con-press', 'Construction', 'Pressing', 'Press seams toward centre back', {
    source: 'ai', aiInvolved: true, confidence: 'low', approval: 'Suggested',
    createdBy: 'draft agent', critical: true,
  }),

  field('f-grain', 'Construction', 'Grain — front panel', 'True bias 45°', { critical: true }),
  field('f-grain-hang', 'Construction', 'Bias hang time', '', {
    approval: 'Unresolved', critical: true,
    note: 'Bias-cut piece with no hang-time instruction. Hem will drop after wear.',
  }),

  field('f-pkg-bag', 'Packaging', 'Individual bagging', '', { approval: 'Unresolved' }),
  field('f-pkg-carton', 'Packaging', 'Carton spec', '', { approval: 'Unresolved' }),
  field('f-lead', 'Lead time', 'Production lead time', '90 days ex-factory'),
  field('f-samples', 'Lead time', 'Samples required', 'Proto x1, Fit x2, PPS x1'),
  field('f-cost', 'Costing', 'Target FOB', '38.00 USD'),
]

const dr1041Poms: PomRow[] = [
  {
    code: 'A', name: 'Chest, 2.5 cm below armhole', method: 'Garment flat, across, x2',
    tolerance: '± 1.0', unit: 'cm', sizes: { XS: 88, S: 92, M: 96, L: 101, XL: 106 },
    ...p({ critical: true, approval: 'Human Edited' }),
  },
  {
    code: 'B', name: 'Waist at natural', method: 'Garment flat, across, x2',
    tolerance: '± 1.0', unit: 'cm', sizes: { XS: 72, S: 76, M: 80, L: 84, XL: 88 },
    ...p({ critical: true }),
  },
  {
    code: 'C', name: 'Hip, 20 cm below waist', method: 'Garment flat, across, x2',
    tolerance: '± 1.0', unit: 'cm', sizes: { XS: 94, S: 98, M: 102, L: 101, XL: 112 },
    ...p({ critical: true, source: 'ai', aiInvolved: true, confidence: 'medium',
          approval: 'Suggested', createdBy: 'draft agent' }),
  },
  {
    code: 'D', name: 'Centre back length', method: 'From CB neck to hem',
    tolerance: '± 1.5', unit: 'cm', sizes: { XS: 104, S: 105.5, M: 107, L: 108.5, XL: 110 },
    ...p({ critical: true }),
  },
  {
    code: 'E', name: 'Armhole depth', method: 'Straight from shoulder point',
    tolerance: '± 0.6', unit: 'cm', sizes: { XS: 21, S: 21.6, M: 22.2, L: 22.8, XL: 23.4 },
    ...p({ critical: true }),
  },
  {
    code: 'F', name: 'Sleeve cap height', method: 'Cap apex to biceps line',
    tolerance: '', unit: 'in', sizes: { XS: 5.5, S: 5.6, M: 5.7, L: 5.8, XL: 5.9 },
    ...p({ critical: true, source: 'ai', aiInvolved: true, confidence: 'low',
          approval: 'Suggested', createdBy: 'draft agent',
          note: 'Unit differs from pack unit. Tolerance missing.' }),
  },
  {
    code: 'A', name: 'Chest — duplicate entry', method: 'Garment flat, across',
    tolerance: '± 1.0', unit: 'cm', sizes: { XS: 88, S: 92, M: 96, L: 101, XL: 106 },
    ...p({ critical: true, approval: 'Suggested', source: 'ai', aiInvolved: true,
          confidence: 'low', createdBy: 'draft agent' }),
  },
]

const dr1041Bom: BomRow[] = [
  { id: 'b1', material: 'Main denim', composition: '100% cotton', weight: '10.5 oz',
    placement: 'Body, sleeves', supplier: 'Mill A', qty: '2.4 m', ...p({ critical: true }) },
  { id: 'b2', material: 'Pocketing', composition: '100% cotton poplin', weight: '110 gsm',
    placement: 'Side pockets', supplier: 'Mill B', qty: '0.3 m', ...p({ critical: true }) },
  { id: 'b3', material: 'Thread', composition: 'Poly core spun, Tkt 40', weight: '—',
    placement: 'All construction', supplier: 'Coats equiv.', qty: '—', ...p({ critical: true }) },
  { id: 'b4', material: 'Interlining', composition: '', weight: '',
    placement: 'Collar stand', supplier: '', qty: '',
    ...p({ critical: true, approval: 'Unresolved', note: 'Row incomplete.' }) },
]

const dr1041Trims: TrimRow[] = [
  { id: 't1', item: 'Shell button', spec: '18L, corozo, indigo',
    placement: 'CF placket — 7 pcs, first at 4 cm below neckline, 9 cm apart',
    qty: '7', ...p({ critical: true }) },
  { id: 't2', item: 'Main label', spec: 'Woven, 30 x 20 mm',
    placement: 'Centre back neck, 1 cm below neckline seam', qty: '1', ...p({ critical: true }) },
  { id: 't3', item: 'Care label', spec: 'Satin, 4-fold',
    placement: 'Left side seam', qty: '1',
    ...p({ critical: true, approval: 'Unresolved',
          note: 'Placement not dimensioned — height from hem missing.' }) },
]

const dr1041: Style = {
  id: 'DR-1041',
  name: 'Bias Panel Denim Dress',
  category: 'Dress — woven denim',
  categoryKey: 'woven-dress',
  status: 'Draft',
  version: 3,
  baseSize: null,
  units: 'mixed',
  sizeRange: ['XS', 'S', 'M', 'L', 'XL'],
  owner: 'N. Walker',
  colorways: ['Medium Indigo', 'Ecru Overdye'],
  assets: {
    items: [
      { id: 'a1', mode: 'mood', title: 'SS27 — Sun-bleached, unhurried',
        caption: 'Atmosphere study. Light is single-source, late afternoon.',
        palette: ['#C8B49A', '#8FA3B0', '#E4DCCF', '#2F3A42'], synthetic: true },
      { id: 'a2', mode: 'mood', title: 'Textile behaviour — rigid denim, bias fall',
        caption: 'Drape reference for the bias front panel.',
        palette: ['#4A5A6B', '#93A4AF', '#D9CFC0'], synthetic: true },
      { id: 'a3', mode: 'presentation', title: 'Line-up figure 04 — DR-1041',
        caption: 'Presentation sketch. Proportion and styling only.',
        palette: ['#3A4654', '#C8B49A'], synthetic: true },
      { id: 'a4', mode: 'flat', title: 'DR-1041 front — orthographic',
        caption: 'Draft flat. 2 callouts unresolved.', palette: ['#E8E8EA'], synthetic: true },
      { id: 'a5', mode: 'flat', title: 'DR-1041 back — orthographic',
        caption: 'Draft flat. Awaiting technical review.', palette: ['#E8E8EA'], synthetic: true },
    ],
  },
  fields: dr1041Fields,
  poms: dr1041Poms,
  bom: dr1041Bom,
  trims: dr1041Trims,
  gates: [
    { key: 'concept', label: 'Concept green light', approver: 'N. Walker', approved: true,
      approvedAt: '2026-06-15T14:00:00Z' },
    { key: 'design', label: 'Design green light', approver: 'N. Walker', approved: true,
      approvedAt: '2026-07-06T11:30:00Z' },
    { key: 'technical', label: 'Technical package', approver: 'Unassigned', approved: false },
    { key: 'handoff', label: 'Production handoff', approver: 'Unassigned', approved: false },
  ],
  thread: [
    { id: 'm1', author: 'Partner A — sample room', role: 'factory',
      at: '2026-07-20T08:12:00Z', fieldRef: 'f-con-cuff',
      body: 'Placket shown on the flat but no closure specified. Button or snap? We have both in house but the placket width differs.',
      state: 'Open' },
    { id: 'm2', author: 'Partner A — sample room', role: 'factory',
      at: '2026-07-21T03:40:00Z', fieldRef: 'C',
      body: 'Hip measurement at L reads smaller than M. Please confirm which is correct before we cut.',
      state: 'Open',
      proposedRule: 'Blocker: non-monotonic measurement across size range' },
  ],
  exports: [],
}

// --- second style, cleaner, to show contrast --------------------------------

const TP2010: Style = {
  id: 'TP-2010',
  name: 'Cropped Poplin Shirt',
  category: 'Top — woven cotton',
  categoryKey: 'woven-top',
  status: 'Needs Review',
  version: 2,
  baseSize: 'M',
  units: 'cm',
  sizeRange: ['XS', 'S', 'M', 'L', 'XL'],
  owner: 'N. Walker',
  colorways: ['Optic White'],
  assets: {
    items: [
      { id: 'b1', mode: 'presentation', title: 'Line-up figure 07 — TP-2010',
        caption: 'Presentation sketch.', palette: ['#E4DCCF', '#8FA3B0'], synthetic: true },
      { id: 'b2', mode: 'flat', title: 'TP-2010 front — orthographic',
        caption: 'Draft flat.', palette: ['#E8E8EA'], synthetic: true },
    ],
  },
  fields: [
    field('g-style-id', 'Cover', 'Style ID', 'TP-2010'),
    field('g-base', 'Cover', 'Base size', 'M', { critical: true }),
    field('g-units', 'Cover', 'Pack units', 'cm', { critical: true }),
    field('g-fab', 'Fabric', 'Main fabric', '100% cotton poplin, 120 gsm, 145 cm', { critical: true }),
    field('g-con', 'Construction', 'Side seam', 'French seam, 1.0 cm SA', { critical: true }),
    field('g-pkg', 'Packaging', 'Individual bagging', 'Poly bag 25 x 35 cm, flat fold'),
    field('g-pkg2', 'Packaging', 'Carton spec', '60 x 40 x 40 cm, ratio 1-2-2-2-1'),
  ],
  poms: [
    { code: 'A', name: 'Chest, 2.5 cm below armhole', method: 'Garment flat, across, x2',
      tolerance: '± 1.0', unit: 'cm', sizes: { XS: 96, S: 100, M: 104, L: 109, XL: 114 },
      ...p({ critical: true, approval: 'Approved' }) },
    { code: 'B', name: 'Body length from HPS', method: 'HPS to hem',
      tolerance: '± 1.0', unit: 'cm', sizes: { XS: 48, S: 49, M: 50, L: 51, XL: 52 },
      ...p({ critical: true, approval: 'Approved' }) },
  ],
  bom: [
    { id: 'c1', material: 'Main poplin', composition: '100% cotton', weight: '120 gsm',
      placement: 'Body, sleeves', supplier: 'Mill C', qty: '1.6 m', ...p({ critical: true }) },
  ],
  trims: [
    { id: 'u1', item: 'Button', spec: '16L, 4-hole, white', placement: 'CF — 6 pcs, 8 cm apart',
      qty: '6', ...p({ critical: true }) },
  ],
  gates: [
    { key: 'concept', label: 'Concept green light', approver: 'N. Walker', approved: true,
      approvedAt: '2026-06-15T14:00:00Z' },
    { key: 'design', label: 'Design green light', approver: 'N. Walker', approved: true,
      approvedAt: '2026-07-06T11:30:00Z' },
    { key: 'technical', label: 'Technical package', approver: 'Unassigned', approved: false },
    { key: 'handoff', label: 'Production handoff', approver: 'Unassigned', approved: false },
  ],
  thread: [],
  exports: [],
}

const ST27011: Style = {
  id: 'ST-27-011',
  name: 'Belted Trench, Silk Faille',
  category: 'Outerwear — trench',
  categoryKey: 'woven-dress',
  status: 'Draft',
  version: 4,
  baseSize: '38',
  units: 'cm',
  sizeRange: ['36', '38', '40', '42'],
  owner: 'N. Walker',
  colorways: ['Bone'],
  assets: {
    flatSketch: '/flat_sketch_garment_A.png',
    items: [
      { id: 'st1', mode: 'flat', title: 'ST-27-011 front/back draft flat',
        caption: 'Draft flat for demo.', palette: ['#E8E8EA'], synthetic: true },
      { id: 'st2', mode: 'presentation', title: 'ST-27-011 presentation look',
        caption: 'Presentation sketch for silhouette direction.', palette: ['#D7CCBC', '#8A847A'], synthetic: true },
    ],
  },
  fields: [
    field('st-style-id', 'Cover', 'Style ID', 'ST-27-011'),
    field('st-name', 'Cover', 'Style name', 'Belted Trench, Silk Faille'),
    field('st-base', 'Cover', 'Base size', '38', { critical: true }),
    field('st-units', 'Cover', 'Pack units', 'cm', { critical: true }),
  ],
  poms: [],
  bom: [],
  trims: [],
  parsedSketch: {
    field_status: 'DRAFT',
    styleId: 'ST-27-011',
    sourceAsset: '/flat_sketch_garment_A.png',
    garment_category: 'Dress',
    silhouette: 'Asymmetric draped dress with fitted column body and dramatic balloon sleeves',
    key_design_features: {
      neckline: 'Asymmetric folded neckline with draped crossover panel',
      sleeves: 'Long voluminous balloon sleeves with deep cuffs',
      seams_darts: 'Fitted bodice shaping with long vertical seams and angled waist seam',
      pockets: 'None visible',
      closures: 'Draped overlap or concealed side entry not clearly shown',
      hem: 'Slim column hem with a soft asymmetric drape extension',
    },
    views_present: ['front'],
    views_missing: ['back'],
    symmetry: 'Mostly symmetric',
    rough_proportions: {
      shoulder: 'soft and slightly dropped',
      waist: 'fitted through the body',
      skirt_volume: 'slim column',
      length: 'midi impression',
    },
  },
  gates: [
    { key: 'concept', label: 'Concept green light', approver: 'N. Walker', approved: true,
      approvedAt: '2026-06-15T14:00:00Z' },
    { key: 'design', label: 'Design green light', approver: 'N. Walker', approved: true,
      approvedAt: '2026-07-06T11:30:00Z' },
    { key: 'technical', label: 'Technical package', approver: 'Unassigned', approved: false },
    { key: 'handoff', label: 'Production handoff', approver: 'Unassigned', approved: false },
  ],
  thread: [],
  exports: [],
}

export const STAGES = [
  { n: 1, name: 'Trend research and concept direction', weeks: '1–3', output: 'Season, customer, colour, silhouette, fabric themes', status: 'Complete' as const },
  { n: 2, name: 'Fabric procurement and sourcing review', weeks: '2–6', output: 'Candidate fabrics, trims, suppliers, constraints', status: 'Complete' as const },
  { n: 3, name: 'Mood sketches and presentation boards', weeks: '3–6', output: 'Creative boards and early sketch directions', status: 'Complete' as const },
  { n: 4, name: 'Concept green light', weeks: '6', output: 'Approved collection direction', status: 'Approved' as const, gate: 'concept' as const },
  { n: 5, name: 'Prototype presentation sketches', weeks: '6–10', output: 'Selected concepts with details and styling', status: 'Complete' as const },
  { n: 6, name: 'Design green light', weeks: '10', output: 'Approved designs for technical development', status: 'Approved' as const, gate: 'design' as const },
  { n: 7, name: 'Technical flats and specification draft', weeks: '10–14', output: 'Front/back flats, POMs, BOM, construction draft', status: 'In Progress' as const },
  { n: 8, name: 'First prototype', weeks: '14–20', output: 'Proto sample and factory questions', status: 'Blocked' as const },
  { n: 9, name: 'First fitting', weeks: '20–22', output: 'Fit notes, corrections, decision record', status: 'Not Started' as const },
  { n: 10, name: 'Second prototype', weeks: '22–26', output: 'Revised sample', status: 'Not Started' as const },
  { n: 11, name: 'Second fitting and final approval', weeks: '26–28', output: 'Approved fit and construction', status: 'Not Started' as const },
  { n: 12, name: 'Final technical package and handoff', weeks: '28–30', output: 'Locked pack, grading inputs, factory notes', status: 'Not Started' as const, gate: 'technical' as const },
  { n: 13, name: 'Production prep and costing', weeks: '30–34', output: 'Materials, quantities, costing, capacity, schedule', status: 'Not Started' as const, gate: 'handoff' as const },
  { n: 14, name: 'Bulk production', weeks: '34–44', output: 'Production status and exceptions', status: 'Not Started' as const },
  { n: 15, name: 'Quality control, packing, and delivery', weeks: '44–52', output: 'QC results, issue closure, shipment readiness', status: 'Not Started' as const },
]

export const seedCollection: Collection = {
  id: 'SS27-CORE',
  brand: 'Atelier Pilot',
  season: 'Spring/Summer',
  year: 2027,
  market: 'US wholesale + DTC',
  customer: '28–40, urban, 3–4 elevated pieces per season',
  shipWindow: 'Jan–Mar 2027',
  currency: 'USD',
  owner: 'N. Walker',
  stages: STAGES,
  styles: [dr1041, TP2010, ST27011],
}

export const seedInvocations = [
  { id: 'i1', at: '2026-07-19T10:02:00Z', provider: 'anthropic', model: 'claude-opus-5',
    feature: 'tech pack draft', latencyMs: 4120, costUsd: 0.084, userAction: 'pending' as const },
  { id: 'i2', at: '2026-07-19T10:06:00Z', provider: 'image-provider', model: 'flat-mode-v2',
    feature: 'technical flat', latencyMs: 18400, costUsd: 0.190, userAction: 'edited' as const },
  { id: 'i3', at: '2026-07-18T16:44:00Z', provider: 'image-provider', model: 'board-v3',
    feature: 'mood board', latencyMs: 22100, costUsd: 0.240, userAction: 'accepted' as const },
]
