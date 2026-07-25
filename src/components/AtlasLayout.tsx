import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  LayoutDashboard,
  Sparkles,
  Users,
  Compass,
  BookOpen,
  Store,
  GraduationCap,
  Settings,
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";

const navItems = [
  { to: "/", label: "Overview", icon: LayoutDashboard, disabled: false },
  { to: "/impact", label: "My Impact", icon: Sparkles, disabled: false },
  { to: "/communities", label: "My Communities", icon: Users, disabled: false },
  { to: "/", label: "Opportunities", icon: Compass, disabled: true },
  { to: "/", label: "Resources", icon: BookOpen, disabled: true },
  { to: "/", label: "Atlas Marketplace", icon: Store, disabled: true },
  { to: "/", label: "Learning Hub", icon: GraduationCap, disabled: true },
  { to: "/", label: "Settings", icon: Settings, disabled: true },
] as const;

function AtlasMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <radialGradient id="atlasGrad" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="oklch(0.85 0.14 195)" stopOpacity="0.9" />
          <stop offset="60%" stopColor="oklch(0.55 0.18 260)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="oklch(0.35 0.1 260)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="url(#atlasGrad)" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI * 2;
        const x1 = 32 + Math.cos(a) * 10;
        const y1 = 32 + Math.sin(a) * 10;
        const x2 = 32 + Math.cos(a) * 26;
        const y2 = 32 + Math.sin(a) * 26;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="oklch(0.85 0.14 195)" strokeWidth="1.2" opacity="0.7" />;
      })}
      <circle cx="32" cy="32" r="10" fill="none" stroke="oklch(0.9 0.12 195)" strokeWidth="1.3" />
      <circle cx="32" cy="32" r="20" fill="none" stroke="oklch(0.8 0.14 260)" strokeWidth="1" opacity="0.6" />
      <circle cx="32" cy="32" r="3" fill="oklch(0.92 0.15 85)" />
    </svg>
  );
}

export function AtlasLayout({
  children,
  pageTitle,
}: {
  children: ReactNode;
  pageTitle?: string;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen text-foreground">
      {/* Top command bar */}
      <header className="sticky top-0 z-40 border-b border-hairline glass-panel !rounded-none">
        <div className="mx-auto flex h-16 max-w-[1800px] items-center gap-4 px-4 md:px-6">
          <Link to="/" className="flex items-center gap-3">
            <AtlasMark className="h-9 w-9" />
            <div className="leading-tight">
              <div className="font-display text-[15px] font-semibold tracking-[0.14em]">
                ATLAS SANCTUM
              </div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Civilization Operating System
              </div>
            </div>
          </Link>

          <nav className="ml-8 hidden items-center gap-1 lg:flex">
            {navItems.slice(0, 5).map((item) => {
              const active = item.to === pathname;
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`group flex items-center gap-2 rounded-md px-3 py-2 text-[12px] font-medium uppercase tracking-[0.14em] transition-colors ${
                    active
                      ? "text-cyan text-glow"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                  {active && (
                    <span className="absolute -bottom-[1px] left-2 right-2 h-[2px] rounded-full bg-cyan" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-md border border-hairline bg-surface/60 px-3 py-1.5 text-[12px] text-muted-foreground md:flex">
              <Search className="h-3.5 w-3.5" />
              <span>Search civilization graph…</span>
              <kbd className="ml-6 rounded border border-hairline bg-surface-2 px-1.5 py-0.5 text-[10px]">⌘K</kbd>
            </div>
            <button className="relative rounded-md border border-hairline p-2 hover:bg-surface-2">
              <Bell className="h-4 w-4" />
              <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-rose atlas-pulse" />
            </button>
            <div className="flex items-center gap-2 rounded-md border border-hairline bg-surface/60 px-2 py-1.5">
              <div className="h-7 w-7 overflow-hidden rounded-full bg-gradient-to-br from-emerald/70 to-cyan/70" />
              <div className="hidden text-right leading-tight md:block">
                <div className="text-[12px] font-medium">Amina Okello</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Change Maker
                </div>
              </div>
              <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1800px] gap-6 px-4 py-6 md:px-6">
        {/* Sidebar */}
        <aside className="hidden w-[260px] shrink-0 lg:block">
          <div className="glass-panel p-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-emerald/60 to-violet/50 ring-2 ring-cyan/40">
                <div className="absolute inset-0 grid place-items-center text-sm font-semibold">A</div>
              </div>
              <div>
                <div className="text-sm font-semibold">Amina Okello</div>
                <div className="text-[11px] text-muted-foreground">Nairobi, Kenya</div>
                <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-opportunity/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-gold">
                  ● Change Maker
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                <span>12,540 XP</span>
                <span>Level 7</span>
              </div>
              <div className="mt-1 h-1.5 rounded-full bg-surface-3">
                <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-emerald via-cyan to-violet" />
              </div>
              <div className="mt-1 text-right text-[10px] text-muted-foreground">
                Next level in 2,460 XP
              </div>
            </div>
          </div>

          <nav className="mt-4 glass-panel p-2">
            <div className="px-3 pb-2 pt-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              My Dashboard
            </div>
            {navItems.map((item) => {
              const active = item.to === pathname;
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`flex items-center gap-3 rounded-md px-3 py-2 text-[13px] transition ${
                    active
                      ? "bg-surface-3 text-foreground shadow-[inset_2px_0_0_0_var(--cyan)]"
                      : "text-muted-foreground hover:bg-surface-2 hover:text-foreground"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 glass-panel p-4">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald atlas-pulse" />
              Live System Pulse
            </div>
            <div className="mt-1 text-[12px] text-emerald">All Systems Operational</div>
            <div className="atlas-grid-bg mt-3 h-24 rounded-md border border-hairline" />
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          {pageTitle && (
            <div className="mb-4">
              <h1 className="font-display text-2xl font-semibold tracking-tight">{pageTitle}</h1>
            </div>
          )}
          {children}
        </main>
      </div>
    </div>
  );
}
