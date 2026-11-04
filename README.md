# Home Manager

A web application that brings the management of a household into one place: expenses, documents, deadlines, notes and maintenance.

> **Status:** early development. The project foundation is in place, and the features below are being built according to the [roadmap](#roadmap).

## Why

Running a home scatters information across spreadsheets, paper folders and separate apps. Home Manager replaces them with one simple interface, accessible from any device.

## Planned features

- **Dashboard:** an overview of monthly spending, upcoming deadlines and recent documents.
- **Expenses:** tracking with customisable categories, filters and monthly reports.
- **Documents:** private storage for contracts, warranties and manuals, with tags and search.
- **Deadlines:** recurring due dates with reminders.
- **Notes:** free-form notes about the house.
- **Maintenance:** a log of work done, including date, cost and supplier.

## Tech stack

- **Application:** Next.js 16 (App Router), React 19 and TypeScript
- **Data:** PostgreSQL and Prisma
- **Validation:** Zod and React Hook Form
- **UI:** Tailwind CSS, shadcn/ui and Recharts
- **Quality:** ESLint, Prettier, Vitest, Playwright and GitHub Actions

Authentication and document storage are still being evaluated. The reasons behind each choice are recorded in the [Architecture Decision Records](docs/adr/README.md), and the [architecture overview](docs/architecture.md) shows how the parts fit together.

## Getting started

You need [Node.js](https://nodejs.org/) 24 or later.

```bash
git clone https://github.com/Danila313/home-manager.git
cd home-manager
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Scripts

| Command                | Description                  |
| ---------------------- | ---------------------------- |
| `npm run dev`          | Start the development server |
| `npm run build`        | Create a production build    |
| `npm run start`        | Serve the production build   |
| `npm run lint`         | Run ESLint                   |
| `npm run format`       | Format the code              |
| `npm run format:check` | Check formatting             |
| `npm run typecheck`    | Run the TypeScript compiler  |
| `npm test`             | Run unit tests               |

## Roadmap

- [x] Project setup, code quality tools and CI
- [ ] Database, authentication and application layout
- [ ] Expenses, categories and first dashboard widgets
- [ ] Documents, notes and expense charts
- [ ] Deadlines and maintenance log
- [ ] Polish and public demo

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the branch and commit conventions.

## License

[MIT](LICENSE)
