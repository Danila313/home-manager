# ADR-003: Prisma as ORM

- **Status:** Accepted
- **Date:** 2026-06-22

## Context

The project needs a database layer that provides type safety in TypeScript and simplifies migrations.

Alternatives considered: TypeORM and Drizzle.

## Decision

Use Prisma. The schema is the single source of truth, the types are generated from it and migrations are straightforward to manage.

## Consequences

- **Pros:** full type safety, Prisma Studio for visually inspecting data and thorough documentation.
- **Cons:** some overhead compared with raw SQL for very complex queries, and a larger bundle.
