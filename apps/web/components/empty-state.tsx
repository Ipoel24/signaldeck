import type { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function EmptyState({ icon: Icon, title, description }: EmptyStateProps) {
  return (
    <div className="flex min-h-[48vh] flex-col items-center justify-center px-6 text-center">
      <div className="mb-5 flex size-12 items-center justify-center rounded-[var(--radius-md)] border border-border bg-bg-elevated">
        <Icon className="size-5 text-fg-muted" strokeWidth={1.75} />
      </div>
      <h2 className="font-serif text-2xl tracking-tight text-fg">{title}</h2>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-fg-muted">{description}</p>
    </div>
  );
}
