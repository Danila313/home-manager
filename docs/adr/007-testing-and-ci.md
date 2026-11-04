# ADR-007: Testing and CI strategy

- **Status:** Accepted
- **Date:** 2026-11-04

## Context

The project should remain safe to change as it grows, and it has only one developer to catch regressions. The checks should be proportionate to a personal project.

## Decision

- **Continuous integration:** GitHub Actions runs linting, formatting, type checking, tests and a production build on every pull request.
- **Unit and component tests:** Vitest with Testing Library, focused on business logic and validation.
- **End-to-end tests:** Playwright for a small number of critical flows, such as login and adding an expense. It will be introduced once those flows exist.

## Consequences

- **Pros:** regressions surface before merging, and `main` stays deployable.
- **Cons:** tests and CI need ongoing maintenance, and CI time grows with the project.
