@AGENTS.md

# Home Manager

Personal web app for managing a household: expenses, documents, deadlines, notes and maintenance. It is also a portfolio project, so code quality and a clean git history matter as much as the features.

## Key references

- [Contribution workflow](CONTRIBUTING.md): branches, commits and pull requests.
- [Architecture](docs/architecture.md): system overview, data model and project structure.
- [ADRs](docs/adr/README.md): technical decisions and their reasons.
- [Notion Project Hub](https://app.notion.com/p/Home-Manager-Project-Hub-3877e8556d2280a9924ed56861de5010): the owner's working notes and task board. Read it for planning context, and do not edit it unless asked.

The repository must explain itself without Notion, because readers of the code may not have access to it. Copy settled information into `docs/`, rewritten for that audience.

## Conventions

- Never commit directly to `main`.
- Write commits, code, comments and docs in English. Write all user-facing text in Italian.
- Validate input on the server with Zod, sharing schemas with forms where possible.
- Scope every database query to the authenticated user's house.
- Store amounts as `Decimal`, never as floating-point numbers.
- Never commit secrets. Add new environment variables to `.env.example`.
- Add tests with any logic you change, and describe only what actually exists in the docs.

## Commands

```bash
npm run dev            # start the development server
npm run lint           # run ESLint
npm run format         # format the code with Prettier
npm run format:check   # check formatting without writing
npm run typecheck      # run the TypeScript compiler
npm test               # run unit tests once
npm run build          # create a production build
```
