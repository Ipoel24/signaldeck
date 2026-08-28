import { Newspaper } from "lucide-react";
import { EmptyState } from "@/components/empty-state";

export const metadata = { title: "Dashboard" };

export default function DashboardPage() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="font-serif text-3xl tracking-tight">Dashboard</h1>
        <p className="mt-2 text-sm text-fg-muted">
          Ranked feed of items from your sources. Nothing to show until ingestion is wired.
        </p>
      </header>
      <EmptyState
        icon={Newspaper}
        title="No items yet"
        description="The feed will appear here after sources are added and the ingestion pipeline is implemented."
      />
    </div>
  );
}
