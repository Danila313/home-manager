# ADR-004: Better Auth for authentication

- **Status:** Accepted
- **Date:** 2026-06-22
- **Amended:** 2026-11-04

## Context

The application requires email and password login with a persistent session. External services were evaluated against self-hosted libraries.

Alternatives considered: NextAuth.js (Auth.js), Auth0 and Supabase Auth.

## Decision

Use Better Auth with email and password login. Users and sessions are stored in PostgreSQL through its Prisma adapter, so the project does not depend on a paid third-party service.

Access is checked on the server in each protected page and Route Handler. Any cookie-only check in `proxy.ts` is limited to redirects and is not treated as authorization.

## Consequences

- **Pros:** no cost, open source and full control over user data. Sessions stored in the database can be revoked immediately, which stateless JWT sessions cannot do without extra work.
- **Cons:** more responsibility for security than a managed service, and each session check needs a database read unless caching is added.
- **Constraint:** Better Auth 1.7 supports Prisma 5 to 7, so the project must use a compatible Prisma version rather than a Prisma 8 release candidate.

## Amendments

**2026-11-04:** Replaced NextAuth.js, the original decision, before any authentication code was written:

- Auth.js (NextAuth.js) is now part of Better Auth. Version 4 is in maintenance mode, version 5 is still published as a beta, and the maintainers point new projects to Better Auth.
- Next.js 16 replaces the `middleware` file convention with `proxy`, which affects the route protection setup documented for Auth.js v5.

Sources: [Auth.js is now part of Better Auth](https://github.com/nextauthjs/next-auth/discussions/13252), [Auth.js integrations](https://authjs.dev/getting-started/integrations), [Better Auth Next.js integration](https://better-auth.com/docs/integrations/next).
