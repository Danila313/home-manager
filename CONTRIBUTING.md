# Contributing

This is a personal project, but it follows the workflow of a team project so that the history stays readable.

## Branches

`main` is always deployable. All work happens on a short-lived branch and reaches `main` through a pull request.

| Prefix      | Use for                                  | Example                  |
| ----------- | ---------------------------------------- | ------------------------ |
| `feat/`     | User-facing functionality                | `feat/expense-crud`      |
| `fix/`      | Bug fixes                                | `fix/expense-date-range` |
| `chore/`    | Setup, configuration, dependencies       | `chore/project-setup`    |
| `docs/`     | Documentation only                       | `docs/adr-storage`       |
| `refactor/` | Code changes with no change in behaviour | `refactor/expense-forms` |

## Commits

Commits follow [Conventional Commits](https://www.conventionalcommits.org/):

```text
<type>(<optional scope>): <imperative summary, lowercase, no final period>

<optional body explaining why the change is needed>
```

- **Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`.
- **Scopes:** the affected area, such as `expenses`, `documents`, `deadlines`, `notes`, `maintenance`, `auth`, `db` or `ui`.
- **One commit, one change:** each commit should build and pass the checks on its own.
- **Language:** commits, code, comments and documentation are in English. The app's interface is in Italian.

## Pull requests

- Keep each pull request focused on one topic.
- Explain what changes and why, and link the related ADR when there is one.
- Make sure the CI checks pass before merging.

## Local checks

Run these before opening a pull request. CI runs the same checks.

```bash
npm run lint
npm run format:check
npm run typecheck
npm test
npm run build
```

## Architecture decisions

Significant technical decisions are recorded in [`docs/adr/`](docs/adr/README.md). To change an accepted decision, add a new ADR that supersedes it, or amend the existing one with a dated note explaining what changed and why.
