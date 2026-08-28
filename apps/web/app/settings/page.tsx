import { getEnv } from "@signaldeck/config";

export const metadata = { title: "Settings" };

export default function SettingsPage() {
  const env = getEnv();
  const databaseConfigured = Boolean(env.DATABASE_URL);

  return (
    <div className="max-w-xl">
      <header className="mb-8">
        <h1 className="font-serif text-3xl tracking-tight">Settings</h1>
        <p className="mt-2 text-sm text-fg-muted">
          Runtime configuration for this environment. Secrets are never displayed.
        </p>
      </header>

      <dl className="divide-y divide-border rounded-[var(--radius-md)] border border-border bg-bg-elevated">
        <div className="flex items-center justify-between gap-4 px-4 py-4">
          <dt className="text-sm text-fg-muted">Environment</dt>
          <dd className="text-sm tabular-nums text-fg">{env.NODE_ENV}</dd>
        </div>
        <div className="flex items-center justify-between gap-4 px-4 py-4">
          <dt className="text-sm text-fg-muted">Database URL</dt>
          <dd className="text-sm text-fg">{databaseConfigured ? "Configured" : "Not set"}</dd>
        </div>
        <div className="flex items-center justify-between gap-4 px-4 py-4">
          <dt className="text-sm text-fg-muted">App URL</dt>
          <dd className="truncate text-sm text-fg">{env.NEXT_PUBLIC_APP_URL ?? "Not set"}</dd>
        </div>
        <div className="flex items-center justify-between gap-4 px-4 py-4">
          <dt className="text-sm text-fg-muted">Ingestion / AI / Search</dt>
          <dd className="text-sm text-fg-subtle">Not implemented</dd>
        </div>
      </dl>
    </div>
  );
}
