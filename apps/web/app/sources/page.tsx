import { Radio } from "lucide-react";
import { EmptyState } from "@/components/empty-state";

export const metadata = { title: "Sources" };

export default function SourcesPage() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="font-serif text-3xl tracking-tight">Sources</h1>
        <p className="mt-2 text-sm text-fg-muted">
          RSS, GitHub repositories, and site feeds you want SignalDeck to watch.
        </p>
      </header>
      <EmptyState
        icon={Radio}
        title="No sources configured"
        description="Source management will connect to the database in a later stage. Connectors are defined, but not implemented."
      />
    </div>
  );
}
