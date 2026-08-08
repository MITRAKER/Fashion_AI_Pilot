/**
 * Types for the engine in `showroom/src`, imported here through the `@engine`
 * alias (app/vite.config.ts). The engine itself is plain JS and is shared by
 * both the showroom board and this dashboard — deliberately not copied, because
 * the copy is what let the dashboard's style sheet drift into hardcoded strings.
 */

declare module '@engine/fabric-engine.js' {
  /** Four measurements taken off the source image's actual pixels. */
  export interface Analysis {
    edge: number      // hard boundaries — structure vs fall
    texture: number   // surface energy — woven interest vs flat
    contrast: number  // tonal range — light along a fold
    chroma: number    // saturation — dye depth
  }
  export interface Fabric {
    name: string
    hand: string
    behaviour: string
    why: string
    use: string
    drape?: { bend: number; gravity: number; damp: number; flare: number }
    mat?: Record<string, number>
  }
  export interface Silhouette { name: string; note: string }
  export function analyseImage(img: HTMLImageElement | HTMLCanvasElement): Analysis
  export function suggestFabrics(a: Analysis, limit?: number): Fabric[]
  export function suggestSilhouettes(a: Analysis): Silhouette[]
  export const CATALOGUE: Fabric[]
  /**
   * Null when the text matches nothing — the caller must say so, not guess.
   * `matchedOn: 'weave'` means the nearest entry by weave, not the same cloth
   * (silk faille → Cotton faille); the caller must show that it is approximate.
   */
  export function findFabric(
    text: string | null | undefined,
  ): (Fabric & { matchedOn: 'name' | 'weave' }) | null
}

declare module '@engine/palette.js' {
  export interface Swatch {
    hex: string
    name: string
    lightness: number
    share?: number
  }
  export function extractPalette(img: HTMLImageElement | HTMLCanvasElement, k?: number): Swatch[]
  export function nameColour(r: number, g: number, b: number): string
  /**
   * Name → colour, against the same vocabulary nameColour emits. Null when the
   * name is not in the vocabulary; `matchedOn: 'word'` means nearest term.
   */
  export function hexForName(
    text: string | null | undefined,
  ): { name: string; hex: string; matchedOn: 'name' | 'word' } | null
}

declare module '@engine/specialists.js' {
  import type { Analysis } from '@engine/fabric-engine.js'
  import type { Swatch } from '@engine/palette.js'
  /** Every finding names who said it, the rule applied, and what backs it. */
  export interface Finding {
    specialist: string
    title: string
    principle: string
    finding: string
    cites: string[]
    confidence: 'high' | 'medium' | 'low'
    blocks?: string
  }
  export function consultSpecialists(a: Analysis, palette: Swatch[]): Finding[]
}

declare module '@engine/details.js' {
  import type { Analysis } from '@engine/fabric-engine.js'
  export interface Detail {
    n: number
    name: string
    construction: string
    note: string
    prefers?: string[]
  }
  export const SHOULDER: Detail[]
  export const BUST: Detail[]
  export const SLEEVE: Detail[]
  export function recommend(a: Analysis): {
    why: string
    shoulder: number[]
    bust: number[]
    sleeve: number[]
  }
}

declare module '@engine/garment-spec.js' {
  export interface SpecComponent { id: string; [k: string]: any }
  export interface Spec {
    specVersion: number
    garmentType: string
    baseSize: string | null
    units: string
    components: SpecComponent[]
    unresolved: string[]
    history: { said: string; changes: string[] }[]
  }
  export interface Change { path: string; from: any; to: any; [k: string]: any }
  export const UNITS: string
  export const SCHEMA: Record<string, any>
  export function defaultSpec(): Spec
  export function get(spec: Spec, path: string): any
  export function set(spec: Spec, path: string, value: any): void
  export function toDressOptions(spec: Spec): Record<string, any>
  export function describe(change: Change): string
}

declare module '@engine/correct.js' {
  import type { Spec, Change } from '@engine/garment-spec.js'
  export interface CorrectionResult {
    applied: Change[]
    refused: { text: string; why: string }[]
    unknown?: boolean
  }
  /** Deterministic parser. Returns intents, so a model can replace it later. */
  export function correct(spec: Spec, text: string): CorrectionResult
  export function undo(spec: Spec, lastChanges: Change[]): void
  export const EXAMPLES: string[]
}

declare module '@engine/board-3d.js' {
  import type { Fabric } from '@engine/fabric-engine.js'
  import type { Spec } from '@engine/garment-spec.js'
  export interface BodyPreview {
    dress(fabric: Fabric, hex: string, mode: 'solid' | 'print' | 'mixed'): void
    setSource(img: HTMLImageElement): void
    necklines: { key: string; name: string }[]
    setNeckline(k: string): void
    setDetail(kind: 'shoulder' | 'bust' | 'sleeve', n: number): void
    setSpec(s: Spec): void
    setView(azimuth: number): void
    setPair(on: boolean): void
    isPair(): boolean
    /** Exact settled silhouette — pixels are ambiguous, geometry is not. */
    measure(): { width: number; depth: number; hemY: number } | null
  }
  export function createBodyPreview(mount: HTMLElement): BodyPreview
}
