# ADR-004: Authentication library

- **Status:** Proposed
- **Date:** 2026-06-22
- **Amended:** 2026-11-04

## Context

The application requires email and password login with a persistent session. External services were evaluated against self-hosted libraries.

Alternatives considered: Auth0 and Supabase Auth.

## Decision

The original decision was NextAuth.js, to stay within the Next.js ecosystem without depending on paid third-party services. It is under review, as described in the amendment below, and must be confirmed before authentication work starts.

## Consequences

- **Pros:** no cost, open source and full control over user data.
- **Cons:** more responsibility for security and more initial configuration than a managed service.

## Amendments

**2026-11-04:** Status moved from Accepted to Proposed, because the project's situation has changed since the original decision:

- Auth.js (NextAuth.js) is now part of Better Auth. Version 4 is in maintenance mode, version 5 is still published as a beta, and the maintainers point new projects to Better Auth.
- Next.js 16 replaces the `middleware` file convention with `proxy`, which affects the route protection setup documented for Auth.js v5.

Sources: [Auth.js is now part of Better Auth](https://github.com/nextauthjs/next-auth/discussions/13252), [Auth.js integrations](https://authjs.dev/getting-started/integrations).
