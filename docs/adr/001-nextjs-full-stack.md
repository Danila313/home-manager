# ADR-001: Next.js as full-stack framework

- **Status:** Accepted
- **Date:** 2026-06-22
- **Amended:** 2026-11-04

## Context

The project needs a modern frontend with routing and server-side rendering, plus a backend for business logic. With prior experience in both React and Angular, I evaluated which framework best suited a personal project.

Alternatives considered: Angular, Vite with React, and separate backends with Spring Boot, NestJS or Express.

## Decision

Use Next.js with the App Router. It handles the frontend, routing and API in a single project through Server Components and Route Handlers, so there is no separate Express service.

## Consequences

- **Pros:** less boilerplate, a simpler deployment and one language across the stack. Server Components also reduce the JavaScript sent to the browser.
- **Cons:** business logic is tied to the framework unless kept in separate modules, and App Router patterns are still evolving.

## Amendments

**2026-11-04:** The original decision named Next.js 14. Since no code had been written yet, the project starts on the latest stable major version, Next.js 16, to avoid an immediate upgrade.
