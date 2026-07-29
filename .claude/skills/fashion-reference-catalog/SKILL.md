---
name: fashion-reference-catalog
description: Look up fashion reference books by discipline, use case, or era, and check whether their content may legally be used as model context. Use when the user asks which book covers a technique, wants citations for a technique decision, or is deciding what to license. Required gate before any book content is ingested.
---

# Fashion Reference Catalog

Rights-aware metadata catalog of the illustration, patternmaking, draping, and grading
references behind the other `fashion-*` skills.

**Data:** `references/catalog.json`

## The rule this skill exists to enforce

Per PRD §5.1 REF-002 and open decision D-06:

> Metadata does not authorize content. A Google Books API key returns title, author, ISBN,
> publisher, and description. It does **not** grant the right to ingest, quote at length,
> reproduce, or train on the book.

So:

- **Always allowed:** cite a book by title/author as *where a human can verify this*.
- **Allowed after rights check:** quoting, paraphrasing at length, or loading excerpts as
  model context — only when `rights_status` is `licensed`, `public_domain`, or `user_owned`.
- **Never:** treating a book's presence in this catalog as permission. Every entry ships as
  `unverified` until someone resolves it and records who decided and when.

If a task would require book *content* and the entry is `unverified`, say so and stop.
Name the book, name the rights question, and let Natalie or counsel resolve D-06.

## How to use it

1. Filter `catalog.json` by `discipline` (`illustration`, `patternmaking`, `draping`,
   `grading`) and `use_case` (e.g. `mood_sketch`, `grade_rules`, `dart_manipulation`).
2. Return 2–4 titles, not the whole list. Say what each one is *good for* and why it fits
   the request.
3. Include `rights_status` in the answer whenever the user's intent is ingestion rather
   than citation.

## Google Books enrichment

To fill in ISBN, publisher, and publication date for an entry, query:

```bash
curl "https://www.googleapis.com/books/v1/volumes?q=intitle:9+Heads+inauthor:Riegelman&key=$GOOGLE_BOOKS_API_KEY"
```

Write back only `isbn_13`, `publisher`, `published_date`, `google_volume_id`. Do **not**
copy `description` or `textSnippet` into the catalog — that is publisher copy, and it
starts the rights problem over again.

## Related

Consumed by [[fashion-mood-sketch]], [[fashion-presentation-sketch]],
[[fashion-technical-flat]], [[fashion-patternmaking]], [[fashion-draping]],
[[fashion-grading]].
