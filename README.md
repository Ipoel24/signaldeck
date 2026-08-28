# SignalDeck

> Your personal intelligence feed for the open web.

**Status:** Stage 2 — monorepo and application foundation. Early-stage / MVP in development.

SignalDeck will collect information from sources you choose (RSS, GitHub repositories, blogs, and more), then structure, rank, summarize, and make it searchable.

This repository currently contains a working Next.js application shell, shared TypeScript packages, and a PostgreSQL schema. Ingestion, AI analysis, search indexing, and notifications are **not implemented yet** — only their interfaces exist.

## Current status

| Area | Status |
| --- | --- |
| Monorepo (pnpm workspaces) | Done |
| Next.js app shell (Dashboard, Sources, Search, Settings) | Done |
| Database schema + Drizzle client | Done (runtime requires Postgres) |
| Ingestion pipeline | Interface only |
| AI analysis | Interface only |
| Search | Interface only |
| Alerts / notifications | Interface only |
| Auth | Users table reserved; not wired |

## Architecture overview

```
Sources (RSS / GitHub / Web)     ← planned
        ↓
Ingestion Worker                 ← interface in packages/ingestion
        ↓
Normalize + Deduplicate
        ↓
AI Analysis + Ranking            ← interface in packages/ai
        ↓
PostgreSQL + Search              ← schema in packages/db; search interface in packages/search
        ↓
Web Dashboard + Alerts           ← UI shell in apps/web; alerts interface in packages/notifications
```

The web app builds and runs without a database. Database operations fail fast at runtime if `DATABASE_URL` is missing.

## Repository structure

```
signaldeck/
├── apps/
│   └── web/                 Next.js App Router UI
├── packages/
│   ├── ai/                  AIProvider interface
│   ├── config/              shared env validation
│   ├── db/                  Drizzle schema + lazy client
│   ├── ingestion/           SourceConnector interface
│   ├── notifications/       NotificationProvider interface
│   └── search/              SearchProvider interface
├── docker-compose.yml       local PostgreSQL
├── pnpm-workspace.yaml
└── package.json
```

## Local setup

Requirements: Node.js 20+, pnpm 9.15.0 (pinned via `packageManager`).

```bash
corepack enable
corepack prepare pnpm@9.15.0 --activate
pnpm install
```

### Environment

```bash
cp .env.example .env
```

`.env` is gitignored. Only `DATABASE_URL` and `NEXT_PUBLIC_APP_URL` are used in this stage.

### Database (optional for UI / build)

```bash
docker compose up -d
pnpm db:migrate
```

### Development commands

```bash
pnpm dev          # Next.js app at http://localhost:3000
pnpm typecheck
pnpm lint
pnpm build
pnpm db:generate  # drizzle-kit generate
pnpm db:migrate   # drizzle-kit migrate
```

## Roadmap

1. Repository foundation — done
2. Monorepo + Next.js + database schema — **this stage**
3. Core ingestion pipeline
4. Dashboard wired to real items
5. AI analysis layer
6. Search
7. Alerts
8. Tests
9. CI/CD
10. Documentation polish
11. MVP deployment

## License

[MIT](LICENSE)
