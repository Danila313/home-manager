# ADR-005: Document storage

- **Status:** Proposed
- **Date:** 2026-06-22
- **Amended:** 2026-11-04

## Context

Users upload documents such as contracts, warranties and manuals, as PDFs or images. Many of these contain personal data, so they must stay private.

Options evaluated: local filesystem, AWS S3 and Cloudinary.

## Decision

Not final. Cloudinary was originally proposed for its free tier and simple SDK. The choice will be made at the start of the document storage work, comparing it with private object storage that supports signed URLs, such as Supabase Storage or Cloudflare R2.

The chosen option must:

- keep files private by default and serve them through short-lived signed URLs
- handle PDF files on the free tier
- be usable on Vercel, which has no persistent local filesystem

## Consequences

Any hosted option adds an external dependency and has free-tier limits. Keeping storage access behind a small internal module limits the cost of changing provider later.
