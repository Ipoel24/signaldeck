import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-2xl pt-6 md:pt-16">
      <p className="text-xs uppercase tracking-[0.18em] text-fg-subtle">Open source · early stage</p>
      <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-fg md:text-5xl">
        SignalDeck
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-fg-muted md:text-lg">
        Your personal intelligence feed for the open web.
      </p>
      <p className="mt-6 max-w-xl text-sm leading-relaxed text-fg-subtle">
        The application shell is in place. Sources, ingestion, ranking, and search
        land in later stages. Use the navigation to inspect the empty product surfaces.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/dashboard"
          className="inline-flex h-11 items-center gap-2 rounded-[var(--radius-sm)] bg-accent px-4 text-sm font-medium text-accent-fg transition-colors hover:bg-fg"
        >
          Open dashboard
          <ArrowRight className="size-4" />
        </Link>
        <Link
          href="/sources"
          className="inline-flex h-11 items-center rounded-[var(--radius-sm)] border border-border px-4 text-sm text-fg hover:bg-bg-subtle"
        >
          Manage sources
        </Link>
      </div>
    </section>
  );
}
