import type { ReactNode } from "react";

export function Panel({
  title,
  action,
  children,
  className = "",
  padded = true,
}: {
  title?: ReactNode;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
  padded?: boolean;
}) {
  return (
    <section className={`glass-panel ${padded ? "p-5" : ""} ${className}`}>
      {title && (
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            {title}
          </div>
          {action}
        </div>
      )}
      {children}
    </section>
  );
}

export function Stat({
  label,
  value,
  delta,
  tone = "cyan",
  icon,
}: {
  label: string;
  value: ReactNode;
  delta?: string;
  tone?: "cyan" | "emerald" | "gold" | "violet" | "rose" | "trust";
  icon?: ReactNode;
}) {
  const toneClass = {
    cyan: "text-cyan",
    emerald: "text-emerald",
    gold: "text-gold",
    violet: "text-violet",
    rose: "text-rose",
    trust: "text-trust",
  }[tone];
  return (
    <div className="rounded-lg border border-hairline bg-surface/50 p-3">
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {icon && <span className={toneClass}>{icon}</span>}
        {label}
      </div>
      <div className={`mt-1 font-display text-xl font-semibold ${toneClass}`}>{value}</div>
      {delta && <div className="mt-0.5 text-[11px] text-emerald">▲ {delta}</div>}
    </div>
  );
}

export function CapitalPill({
  name,
  score,
  tone,
  icon,
  sub,
}: {
  name: string;
  score?: string;
  tone: "trust" | "knowledge" | "health" | "opportunity" | "flourishing";
  icon: ReactNode;
  sub?: string;
}) {
  const bg = {
    trust: "from-trust/25 to-trust/5 border-trust/40",
    knowledge: "from-knowledge/25 to-knowledge/5 border-knowledge/40",
    health: "from-health/25 to-health/5 border-health/40",
    opportunity: "from-opportunity/25 to-opportunity/5 border-opportunity/40",
    flourishing: "from-flourishing/25 to-flourishing/5 border-flourishing/40",
  }[tone];
  const iconColor = {
    trust: "text-trust",
    knowledge: "text-knowledge",
    health: "text-health",
    opportunity: "text-opportunity",
    flourishing: "text-flourishing",
  }[tone];
  return (
    <div className={`flex items-center gap-3 rounded-lg border bg-gradient-to-b ${bg} px-3 py-2.5`}>
      <div className={`grid h-9 w-9 place-items-center rounded-md bg-background/40 ${iconColor}`}>
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/90">
          {name}
        </div>
        <div className="truncate text-[11px] text-muted-foreground">{sub}</div>
        {score && <div className="mt-0.5 text-[11px] text-foreground/70">Score {score}</div>}
      </div>
    </div>
  );
}
