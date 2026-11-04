# ADR-002: PostgreSQL as relational database

- **Status:** Accepted
- **Date:** 2026-06-22

## Context

The application's data has clear relationships: a user owns a house, and a house has expenses, categories, documents and deadlines. A document-based approach was also evaluated.

Alternatives considered: MongoDB and SQLite.

## Decision

Use PostgreSQL. The relationships between entities are known and structured, so the schema flexibility of MongoDB offers little benefit.

## Consequences

- **Pros:** guaranteed referential integrity, efficient complex queries and wide use in industry.
- **Cons:** less flexibility during early design, and schema changes require migrations.
