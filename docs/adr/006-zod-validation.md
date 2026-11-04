# ADR-006: Zod for input validation

- **Status:** Accepted
- **Date:** 2026-06-22

## Context

Input must be validated both on the server and in client forms, ideally with one shared schema.

## Decision

Use Zod. Its schemas also produce TypeScript types, which removes the duplication between validation and typing.

## Consequences

- **Pros:** one schema for both types and validation, shared between client and server, with good React Hook Form integration.
- **Cons:** additional JavaScript in the client bundle.
