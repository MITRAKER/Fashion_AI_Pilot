# Atelier — Fashion AI pilot

Front end and API for the Fashion AI Collection Development Platform pilot
([Fashion_AI_Pilot_PRD_v0.1.docx](../Fashion_AI_Pilot_PRD_v0.1.docx)).

## Run it

Two processes. API first.

```bash
npm --prefix app run server
```

```bash
npm --prefix app run dev
```

Then open http://localhost:5173 and sign in as `natalie` / `pilot`.

```bash
npm --prefix app test
```

## Accounts

| User | Role | Can |
|---|---|---|
| `natalie` | technical | Edit and approve production-critical work, sign off category schemas |
| `mitra` | owner | Edit and approve |
| `factory` | factory | Comment on a style. **Cannot** approve or edit |
| `viewer` | viewer | Read only |

Password is `pilot` for all four. Roles are enforced server-side — sign in as `factory`,
try to approve a gate, and watch the route refuse it.

## What's real

- **Authenticated routes.** Session cookie, scrypt-hashed passwords, every mutation
  behind a role check.
- **Durable persistence.** SQLite via `node:sqlite`, mutations inside transactions.
  State survives reload, sign-out, and process restart — there is a test for exactly that.
- **Deterministic preflight** computed server-side, so the browser cannot talk its way
  past a blocker.
- **Approval gates** that refuse while blockers remain, with an override path that
  requires a recorded reason.
- **Versioning:** editing a critical field on an approved pack bumps the version and
  reopens the technical gate.
- **Factory corrections → rules.** Resolve a question with "promote to a rule" and it
  fires on every style from then on.
- **Category schemas as data**, signed off by a technical designer (D-01).
- **Gate sequencing** — handoff cannot be signed off while the technical gate is open.
- **AI drafting** behind a provider interface, with a per-style budget cap. The agent
  fills trade conventions and *refuses* measurements and decisions, with the reason.
- **Append-only audit log**, written in the same transaction as the change.

Zero runtime dependencies on the server: `node:http`, `node:sqlite`, `node:crypto`, and
Node's native TypeScript execution.

## What's still not real

- **The data is synthetic.** Every style, measurement, and factory message is invented.
  Say this out loud in any demo.
- **No model is called.** Drafting runs through a local stub provider so the workflow
  — provenance, approval, refusals, cost ledger — could be built and tested before a
  vendor is chosen (D-05, still open). `server/ai/provider.ts` is the only file that
  changes when a real model is wired in.
- **No creative generation.** The three sketch modes render placeholder SVG.
- **Not a pilot.** It is the Appendix A demonstrator with a real backend under it.

## Layout

| Path | Role |
|---|---|
| `shared/types.ts` | Domain types, named to match PRD §7 entities |
| `shared/rules.ts` | Deterministic preflight — shared verbatim by client and server |
| `shared/categories.ts` | Category schemas (D-01). Edit here to change what's required |
| `server/db.ts` | Schema, password hashing, readers |
| `server/api.ts` | Routes, permissions, gate sequencing, version bumps, export authorization |
| `server/ai/provider.ts` | Draft provider interface + local stub. Swap point for a real model |
| `server/test/api.test.ts` | 24 route, persistence, and drafting tests |
| `src/store.tsx` | API client. No local persistence |
| `src/components/` | Login, Dashboard, StyleRecord, Governance, shared UI |
| `docs/` | Tech-pack template and data asks for Natalie |

## Seeded defects

DR-1041 carries deliberate faults so preflight has something real to catch: mixed cm/in
units, a duplicate POM code, a hip measurement that shrinks from M to L, a bias panel with
no hang time, an unspecified placket closure, an undimensioned care-label placement,
missing shrinkage, and AI-drafted critical fields awaiting approval. Together they hold the
technical gate shut and force the export to DRAFT.

TP-2010 is the clean contrast — it can be approved and exported as authorized.

## Demo path

1. Sign in as `factory`. Try to approve a gate. Watch the server refuse it.
2. Sign in as `natalie`. Dashboard — calendar, gates, blocked stage 8.
3. DR-1041 → Creative modes → toggle mood / presentation / flat. Note the labels.
4. Tech pack → provenance column, red cells in the POM table.
5. Preflight → findings grouped by rule family.
6. Approvals → technical gate disabled, and it says why.
7. Tech pack → **Draft missing fields**. Read the refusals, not the suggestions:
   shrinkage comes from the mill, the placket closure is a designer's decision, and
   the base size governs the whole graded table. It fills the conventions and says no
   to the rest.
8. Factory thread → **Resolve & promote to a rule**.
9. Governance → the rule is now listed under "Learned from the factory", and TP-2010 —
   which never had that problem — now has a blocker it didn't have a minute ago.
10. Export → blocked, watermarked DRAFT.
11. Resolve fields, approve, export again — now authorized.
12. Reload. Restart the server. Everything survives.

Steps 7 and 9 are the ones to spend time on. Everything else is table stakes.
