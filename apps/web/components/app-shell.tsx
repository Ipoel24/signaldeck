"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, Radio, Search, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutGrid },
  { href: "/sources", label: "Sources", icon: Radio },
  { href: "/search", label: "Search", icon: Search },
  { href: "/settings", label: "Settings", icon: Settings },
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-56 border-r border-border bg-bg-elevated md:flex md:flex-col">
        <Link href="/" className="flex items-baseline gap-2 px-5 py-6">
          <span className="font-serif text-xl tracking-tight">SignalDeck</span>
        </Link>
        <nav className="flex flex-1 flex-col gap-1 px-3">
          {NAV.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex h-11 items-center gap-3 rounded-[var(--radius-sm)] px-3 text-sm transition-colors",
                  active
                    ? "bg-bg-subtle text-fg"
                    : "text-fg-muted hover:bg-bg-subtle/60 hover:text-fg",
                )}
              >
                <Icon className="size-4" strokeWidth={1.75} />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <p className="px-5 py-4 text-xs text-fg-subtle">MVP foundation</p>
      </aside>

      <div className="md:pl-56">
        <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b border-border bg-bg/90 px-4 backdrop-blur md:hidden">
          <Link href="/" className="font-serif text-lg tracking-tight">
            SignalDeck
          </Link>
        </header>
        <main className="px-4 py-6 pb-24 md:px-8 md:py-8 md:pb-8">{children}</main>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-20 grid grid-cols-4 border-t border-border bg-bg-elevated md:hidden">
        {NAV.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex min-h-14 flex-col items-center justify-center gap-1 text-[11px]",
                active ? "text-fg" : "text-fg-muted",
              )}
            >
              <Icon className="size-4" strokeWidth={1.75} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
