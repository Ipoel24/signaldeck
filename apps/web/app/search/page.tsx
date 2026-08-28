import { Search } from "lucide-react";
import { EmptyState } from "@/components/empty-state";
import { Input } from "@/components/ui/input";

export const metadata = { title: "Search" };

export default function SearchPage() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="font-serif text-3xl tracking-tight">Search</h1>
        <p className="mt-2 text-sm text-fg-muted">
          Full-text search over collected items. Indexing is not implemented yet.
        </p>
      </header>
      <form className="mb-10 max-w-xl" action="/search">
        <label htmlFor="q" className="sr-only">
          Search query
        </label>
        <Input id="q" name="q" placeholder="Search collected items" disabled />
      </form>
      <EmptyState
        icon={Search}
        title="Search is not live"
        description="The search provider interface exists in packages/search. Results will appear here once indexing is built."
      />
    </div>
  );
}
