# Fashion AI Pilot

Working repository for the Fashion AI Collection Development Platform pilot.

**Product owners:** Natalie Walker (fashion workflow, technical-design rules, factory
interpretation) and Mitra Kermanian (architecture, application, AI orchestration, release).

> **Private repository.** It contains an unreleased product plan, competitive analysis, and
> commercial positioning. Do not make it public without both owners agreeing.

## What's here

| Path | What it is |
|---|---|
| [`Fashion_AI_Pilot_PRD_v0.1.docx`](Fashion_AI_Pilot_PRD_v0.1.docx) | The PRD. Source of truth for scope, priorities, and open decisions |
| [`app/`](app/README.md) | The demonstrator — React front end, zero-dependency Node API, deterministic rule engine |
| [`app/docs/`](app/docs/) | Tech-pack template and the two data asks for Natalie |
| [`.claude/skills/`](.claude/skills/) | Eight domain skills encoding the fashion knowledge the rules are built on |

## The thesis, in one paragraph

The valuable product is not another fashion-image generator. It is a controlled workflow
that stops ambiguity reaching a factory. Creative generation helps adoption; **production
validation is what creates defensible value.** Everything in this repository is organised
around one release standard: *no AI-generated production-critical value is authoritative
until a qualified human approves it.*

## Quick start

```bash
npm --prefix app install
```

Two processes — API first, then the UI. See [`app/README.md`](app/README.md) for the full
demo path and the account list.

```bash
npm --prefix app run server
```

```bash
npm --prefix app run dev
```

```bash
npm --prefix app test
```

## Status

Built and tested: authenticated routes, durable persistence, deterministic preflight
(19 rules), approval gates with sequencing, versioning, controlled export, the
factory-correction → rule pipeline, category schemas as data, and AI drafting behind a
provider interface with a cost cap. 24 route and persistence tests.

Not built: any real model call, creative generation, pattern or grading automation.

**The data is synthetic.** Every style, measurement, and factory message in the
demonstrator is invented. Nothing has been validated by a technical designer or a factory.

## Before this touches real brand data

1. **Rotate the demo accounts.** `app/server/seed.ts` seeds four users with the password
   `pilot`, published in the README. They exist for a synthetic workspace and must not
   survive contact with a real brand.
2. **Pass the PRD §12 security checklist** — tenant isolation, encryption, backup/restore,
   retention.
3. **Resolve D-06** — rights status for every book, archive, and image before any reference
   content is used as model context.

## Open decisions blocking real work

| ID | Decision | Owner |
|---|---|---|
| D-01 | Which garment category defines the pilot schema and rule set | Natalie |
| D-03 | Which existing tech-pack format is the export authority | Natalie |
| D-05 | Which model providers are permitted for private brand data | Mitra |
| D-06 | Which books, archives, and datasets are licensed or user-owned | Shared + counsel |

See [`app/docs/data-request.md`](app/docs/data-request.md) for what's needed to unblock.
