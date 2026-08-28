# SignalDeck

> Your personal intelligence feed for the open web.

**Status:** Early-stage / MVP in active development

SignalDeck is an open-source personal intelligence dashboard that collects information from sources you choose (RSS, GitHub repositories, blogs, and more), then structures, ranks, summarizes, and makes it searchable.

This project is currently in the foundation stage. Core features (ingestion pipeline, dashboard, AI analysis, search, and alerts) are planned and will be implemented incrementally.

## Current State

- Repository foundation complete
- MIT licensed
- Ready for monorepo setup

## Planned Architecture (High Level)

```
Sources (RSS / GitHub / Web)
        ↓
Ingestion Worker
        ↓
Normalize + Deduplicate
        ↓
AI Analysis + Ranking
        ↓
PostgreSQL + Search
        ↓
Web Dashboard + Alerts
```

## Tech Stack (Planned)

- **Frontend:** Next.js, TypeScript, Tailwind CSS, shadcn/ui
- **Backend:** Next.js server actions / API routes + background workers
- **Database:** PostgreSQL + Drizzle ORM
- **Search:** PostgreSQL full-text + pgvector (later)
- **AI:** Provider-agnostic (OpenAI-compatible API)
- **Infra:** Docker, pnpm monorepo, GitHub Actions

## Getting Started

Coming soon. The monorepo and application structure are the next steps.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening issues or pull requests.

## License

[MIT](LICENSE)

## Security

See [SECURITY.md](SECURITY.md) for responsible disclosure guidelines.
