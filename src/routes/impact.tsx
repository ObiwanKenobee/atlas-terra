import { createFileRoute } from "@tanstack/react-router";
import { AtlasLayout } from "@/components/AtlasLayout";
import { Panel } from "@/components/atlas-ui";
import { Globe } from "@/components/Globe";
import {
  Shield,
  Brain,
  HeartPulse,
  Compass,
  Flower2,
  Leaf,
  Users,
  Landmark,
  Building2,
  Sparkles,
  Clock,
  Wallet,
  BookOpen,
  Palette,
  TrendingUp,
  Quote,
  Droplets,
  GraduationCap,
  Sprout,
  Lightbulb,
} from "lucide-react";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "My Impact — Atlas Sanctum" },
      {
        name: "description",
        content:
          "Track your contribution across the ten forms of capital: natural, human, social, knowledge, cultural, spiritual, time, infrastructure, institutional, and economic.",
      },
      { property: "og:title", content: "My Impact — Atlas Sanctum" },
      {
        property: "og:description",
        content:
          "Your personal contribution to a thriving civilization, measured across every form of capital.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ImpactPage,
});

const osScores = [
  { name: "Trust OS", score: 92, tone: "trust", icon: Shield, sub: "Transparency · Accountability" },
  { name: "Knowledge OS", score: 88, tone: "knowledge", icon: Brain, sub: "Evidence · Insight · Learning" },
  { name: "Health OS", score: 90, tone: "health", icon: HeartPulse, sub: "Well-being · Resilience" },
  { name: "Opportunity OS", score: 87, tone: "opportunity", icon: Compass, sub: "Access · Growth · Dignity" },
  { name: "Flourishing OS", score: 91, tone: "flourishing", icon: Flower2, sub: "Purpose · Harmony · Legacy" },
] as const;

const capitalRows = [
  { name: "Natural Capital", value: "12.4K", unit: "kg CO₂e avoided", delta: "18%", icon: Leaf, tone: "text-emerald" },
  { name: "Human Capital", value: "320", unit: "People empowered", delta: "24%", icon: Users, tone: "text-cyan" },
  { name: "Social Capital", value: "48", unit: "Community connections", delta: "16%", icon: Users, tone: "text-violet" },
  { name: "Knowledge Capital", value: "15", unit: "Resources shared", delta: "30%", icon: Brain, tone: "text-knowledge" },
  { name: "Institutional Capital", value: "6", unit: "Policies influenced", delta: "12%", icon: Landmark, tone: "text-trust" },
];

const capitalRowsRight = [
  { name: "Economic Capital", value: "$3.2K", unit: "Value created", delta: "22%", icon: Wallet, tone: "text-emerald" },
  { name: "Infrastructure Capital", value: "3", unit: "Projects supported", delta: "15%", icon: Building2, tone: "text-cyan" },
  { name: "Cultural Capital", value: "12", unit: "Heritage initiatives", delta: "14%", icon: Palette, tone: "text-rose" },
  { name: "Spiritual Capital", value: "21", unit: "Meaningful actions", delta: "17%", icon: Sparkles, tone: "text-violet" },
  { name: "Time Capital", value: "156", unit: "Hours contributed", delta: "20%", icon: Clock, tone: "text-gold" },
];

const bigStats = [
  { label: "Overall Impact Score", value: "89", suffix: "/100", sub: "Great impact! Keep it up." },
  { label: "People Positively Impacted", value: "5,231", sub: "▲ 26% vs last year", tone: "text-cyan" },
  { label: "Communities Strengthened", value: "17", sub: "▲ 31% vs last year", tone: "text-emerald" },
  { label: "Countries Reached", value: "8", sub: "▲ 31% vs last year", tone: "text-gold" },
  { label: "SDGs Advanced", value: "12", suffix: "/17", sub: "Goals contributing to", tone: "text-violet" },
];

const contributions = [
  { title: "Climate Action", sub: "Planted 120 trees", place: "Nairobi, Kenya", impact: "+120", when: "2 hours ago", icon: Sprout, tone: "text-emerald" },
  { title: "Education", sub: "Mentored a student online", place: "", impact: "+60", when: "Yesterday", icon: GraduationCap, tone: "text-violet" },
  { title: "Health", sub: "Supported maternal health initiative", place: "Kisumu, Kenya", impact: "+80", when: "2 days ago", icon: HeartPulse, tone: "text-rose" },
  { title: "Knowledge", sub: "Shared research on clean energy", place: "", impact: "+40", when: "3 days ago", icon: BookOpen, tone: "text-knowledge" },
];

const activeProjects = [
  { title: "Mathare River Revival", sub: "Water & Sanitation", progress: 75, raised: "$12,450", goal: "$16,500", left: "12 days left", tone: "text-cyan" },
  { title: "Solar for Schools", sub: "Education", progress: 60, raised: "$8,300", goal: "$14,000", left: "18 days left", tone: "text-gold" },
  { title: "Women in Tech", sub: "Empowerment", progress: 45, raised: "$6,750", goal: "$15,000", left: "25 days left", tone: "text-rose" },
  { title: "Urban Food Gardens", sub: "Food Security", progress: 80, raised: "$9,200", goal: "$11,500", left: "8 days left", tone: "text-emerald" },
];

const journey = [
  { when: "Today", what: "Supported solar installation in Kisumu", delta: "+120" },
  { when: "Yesterday", what: "Mentored 3 young innovators", delta: "+60" },
  { when: "2 days ago", what: "Shared climate adaptation resource", delta: "+40" },
  { when: "5 days ago", what: "Contributed to clean water project", delta: "+80" },
  { when: "1 week ago", what: "Joined community clean up", delta: "+30" },
];

const nextActions = [
  { title: "Join a community working on clean water", tag: "High Impact", tone: "text-cyan", icon: Droplets },
  { title: "Mentor a learner in your field", tag: "Medium Impact", tone: "text-violet", icon: GraduationCap },
  { title: "Share your knowledge on climate solutions", tag: "High Impact", tone: "text-emerald", icon: Leaf },
  { title: "Support a local innovation", tag: "Medium Impact", tone: "text-gold", icon: Lightbulb },
];

const topAreas = [
  { name: "Health & Well-being", pct: 28, color: "oklch(0.72 0.19 20)" },
  { name: "Education", pct: 22, color: "oklch(0.72 0.20 300)" },
  { name: "Climate Action", pct: 18, color: "oklch(0.76 0.19 155)" },
  { name: "Clean Water", pct: 14, color: "oklch(0.82 0.15 205)" },
  { name: "Livelihoods", pct: 10, color: "oklch(0.82 0.16 85)" },
  { name: "Other", pct: 8, color: "oklch(0.60 0.02 260)" },
];

function ImpactPage() {
  return (
    <AtlasLayout>
      {/* OS score bar */}
      <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-5">
        {osScores.map((o) => (
          <div
            key={o.name}
            className={`rounded-lg border border-hairline bg-gradient-to-b from-${o.tone}/20 to-transparent p-3`}
            style={{ borderColor: `color-mix(in oklab, var(--${o.tone}) 40%, transparent)` }}
          >
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/90">
              <o.icon className={`h-4 w-4 text-${o.tone}`} />
              {o.name}
            </div>
            <div className="mt-0.5 text-[10px] text-muted-foreground">{o.sub}</div>
            <div className={`mt-1 font-display text-lg font-semibold text-${o.tone}`}>Score {o.score}/100</div>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 xl:col-span-9">
          <Panel
            title="My Impact Overview"
            action={
              <div className="flex items-center gap-2 text-[11px]">
                <Chip label="All Capitals" />
                <Chip label="This Year" />
                <Chip label="Global" />
              </div>
            }
          >
            <div className="grid grid-cols-12 items-center gap-4">
              <div className="col-span-12 space-y-2 md:col-span-3">
                {capitalRows.map((c) => (
                  <CapitalRow key={c.name} {...c} />
                ))}
              </div>
              <div className="col-span-12 flex flex-col items-center md:col-span-6">
                <Globe size={320} />
                <div className="mt-2 text-center text-[11px] text-muted-foreground">
                  You are contributing to
                </div>
                <div className="text-glow text-center font-display text-lg text-cyan">
                  A Thriving Civilization
                </div>
              </div>
              <div className="col-span-12 space-y-2 md:col-span-3">
                {capitalRowsRight.map((c) => (
                  <CapitalRow key={c.name} {...c} align="right" />
                ))}
              </div>
            </div>

            {/* Big stats row */}
            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-5">
              {bigStats.map((s) => (
                <div key={s.label} className="rounded-lg border border-hairline bg-surface/50 p-3">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </div>
                  <div className={`mt-1 font-display text-3xl font-semibold ${s.tone ?? "text-foreground"}`}>
                    {s.value}
                    {s.suffix && <span className="text-base text-muted-foreground">{s.suffix}</span>}
                  </div>
                  <div className="text-[11px] text-emerald">{s.sub}</div>
                </div>
              ))}
            </div>
          </Panel>

          {/* My Contributions */}
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <Panel title="My Contributions" action={<a className="text-[11px] text-cyan hover:underline">View All</a>}>
              <div className="grid grid-cols-2 gap-2">
                {contributions.map((c) => (
                  <div key={c.title} className="rounded-md border border-hairline bg-surface/50 p-3">
                    <div className={`flex items-center gap-2 ${c.tone}`}>
                      <c.icon className="h-4 w-4" />
                      <div className="text-[12px] font-medium text-foreground">{c.title}</div>
                    </div>
                    <div className="mt-1 text-[11px] text-foreground/80">{c.sub}</div>
                    {c.place && <div className="text-[10px] text-muted-foreground">{c.place}</div>}
                    <div className="mt-2 flex items-center justify-between">
                      <div className={`text-[11px] font-semibold ${c.tone}`}>{c.impact} Impact</div>
                      <div className="text-[10px] text-muted-foreground">{c.when}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Panel>

            <Panel title="Active Projects" action={<a className="text-[11px] text-cyan hover:underline">View All</a>}>
              <div className="grid grid-cols-2 gap-2">
                {activeProjects.map((p) => (
                  <div key={p.title} className="rounded-md border border-hairline bg-surface/50 p-3">
                    <div className="text-[12px] font-medium">{p.title}</div>
                    <div className="text-[10px] text-muted-foreground">{p.sub}</div>
                    <div className="my-2">
                      <RingProgress pct={p.progress} tone={p.tone} />
                    </div>
                    <div className="text-[10px] text-foreground/80">{p.raised} / {p.goal}</div>
                    <div className="text-[10px] text-muted-foreground">{p.left}</div>
                  </div>
                ))}
              </div>
            </Panel>
          </div>
        </div>

        {/* Right column */}
        <div className="col-span-12 space-y-4 xl:col-span-3">
          <Panel title="Impact Insights" action={<Chip label="This Year" />}>
            <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
              Your Top Impact Areas
            </div>
            <div className="mt-3 flex items-center gap-3">
              <Donut segments={topAreas} />
              <div className="space-y-1 text-[11px]">
                {topAreas.map((t) => (
                  <div key={t.name} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full" style={{ background: t.color }} />
                    <span className="min-w-[110px] text-foreground/80">{t.name}</span>
                    <span className="font-mono text-muted-foreground">{t.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </Panel>

          <Panel title="Impact Trend">
            <MiniTrend />
            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-muted-foreground">
              {["Natural","Human","Social","Economic","Flourishing"].map((k, i) => (
                <span key={k} className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: ["oklch(0.76 0.19 155)","oklch(0.82 0.15 205)","oklch(0.72 0.20 300)","oklch(0.82 0.16 85)","oklch(0.72 0.19 20)"][i] }} />
                  {k}
                </span>
              ))}
            </div>
          </Panel>

          <Panel title="Your Impact Journey">
            <div className="space-y-2">
              {journey.map((j) => (
                <div key={j.when} className="flex items-center gap-3 rounded-md border border-hairline bg-surface/50 p-2.5">
                  <TrendingUp className="h-4 w-4 text-cyan" />
                  <div className="flex-1">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{j.when}</div>
                    <div className="text-[11px]">{j.what}</div>
                  </div>
                  <span className="rounded-full bg-emerald/15 px-2 py-0.5 text-[10px] font-semibold text-emerald">
                    {j.delta} Impact
                  </span>
                </div>
              ))}
              <a className="block text-center text-[11px] text-cyan hover:underline">View all activity →</a>
            </div>
          </Panel>
        </div>
      </div>

      {/* Bottom band */}
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="glass-panel p-4 md:col-span-2">
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
            Recommended next actions for greater impact
          </div>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            {nextActions.map((a) => (
              <div key={a.title} className="rounded-md border border-hairline bg-surface/50 p-3">
                <a.icon className={`h-5 w-5 ${a.tone}`} />
                <div className="mt-2 text-[12px] leading-tight">{a.title}</div>
                <div className={`mt-1 text-[10px] font-semibold uppercase tracking-widest ${a.tone}`}>▲ {a.tag}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-panel relative overflow-hidden p-5">
          <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Impact Reflection</div>
          <Quote className="absolute right-4 top-4 h-6 w-6 text-gold/50" />
          <blockquote className="mt-3 font-display text-[15px] italic leading-snug text-foreground/90">
            "The best way to find yourself is to lose yourself in the service of others."
          </blockquote>
          <div className="mt-2 text-right text-[11px] text-gold">— Mahatma Gandhi</div>
          <div className="mt-3 text-[11px] text-muted-foreground">
            Your actions today shape generations tomorrow.
          </div>
          <button className="mt-3 rounded-md border border-gold/50 bg-gold/10 px-3 py-1.5 text-[12px] font-medium text-gold hover:bg-gold/20">
            Explore Opportunities
          </button>
        </div>
      </div>
    </AtlasLayout>
  );
}

function Chip({ label }: { label: string }) {
  return (
    <span className="rounded-md border border-hairline bg-surface-2 px-2 py-1 text-[11px] text-foreground/80">
      {label}
    </span>
  );
}

function CapitalRow({
  name, value, unit, delta, icon: Icon, tone, align = "left",
}: {
  name: string; value: string; unit: string; delta: string;
  icon: React.ComponentType<{ className?: string }>;
  tone: string; align?: "left" | "right";
}) {
  return (
    <div className={`flex items-center gap-3 rounded-md border border-hairline bg-surface/50 p-2.5 ${align === "right" ? "flex-row-reverse text-right" : ""}`}>
      <div className={`grid h-9 w-9 place-items-center rounded-md bg-surface-3 ${tone}`}>
        <Icon className="h-4 w-4" />
      </div>
      <div className="flex-1">
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{name}</div>
        <div className="flex items-baseline gap-1.5" style={{ justifyContent: align === "right" ? "flex-end" : "flex-start" }}>
          <span className={`font-display text-lg font-semibold ${tone}`}>{value}</span>
          <span className="text-[10px] text-muted-foreground">{unit}</span>
        </div>
      </div>
      <div className="text-[11px] font-medium text-emerald">▲ {delta}</div>
    </div>
  );
}

function RingProgress({ pct, tone }: { pct: number; tone: string }) {
  const R = 22;
  const C = 2 * Math.PI * R;
  return (
    <div className="relative grid place-items-center">
      <svg viewBox="0 0 60 60" className="h-14 w-14 -rotate-90">
        <circle cx="30" cy="30" r={R} fill="none" stroke="oklch(0.3 0.03 260)" strokeWidth="5" />
        <circle
          cx="30" cy="30" r={R} fill="none"
          stroke="currentColor" strokeWidth="5" strokeLinecap="round"
          className={tone}
          strokeDasharray={C}
          strokeDashoffset={C * (1 - pct / 100)}
        />
      </svg>
      <div className={`absolute text-[12px] font-semibold ${tone}`}>{pct}%</div>
    </div>
  );
}

function Donut({ segments }: { segments: { name: string; pct: number; color: string }[] }) {
  const R = 40;
  const C = 2 * Math.PI * R;
  let offset = 0;
  return (
    <svg viewBox="0 0 110 110" className="h-28 w-28 -rotate-90">
      <circle cx="55" cy="55" r={R} fill="none" stroke="oklch(0.25 0.03 260)" strokeWidth="14" />
      {segments.map((s) => {
        const len = (s.pct / 100) * C;
        const el = (
          <circle
            key={s.name}
            cx="55" cy="55" r={R}
            fill="none" stroke={s.color} strokeWidth="14"
            strokeDasharray={`${len} ${C - len}`}
            strokeDashoffset={-offset}
          />
        );
        offset += len;
        return el;
      })}
    </svg>
  );
}

function MiniTrend() {
  const series = [
    { color: "oklch(0.76 0.19 155)", points: [10, 14, 18, 22, 20, 28, 34, 40, 46, 52, 60, 68] },
    { color: "oklch(0.82 0.15 205)", points: [12, 12, 14, 20, 24, 30, 32, 38, 44, 50, 55, 62] },
    { color: "oklch(0.72 0.20 300)", points: [8, 10, 12, 16, 22, 24, 28, 32, 38, 42, 48, 54] },
    { color: "oklch(0.82 0.16 85)",  points: [6, 8, 10, 14, 18, 22, 26, 30, 34, 38, 42, 48] },
    { color: "oklch(0.72 0.19 20)",  points: [4, 6, 8, 10, 14, 18, 22, 24, 28, 32, 36, 42] },
  ];
  const W = 300, H = 120, pad = 8;
  const max = 80;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-28 w-full">
      <line x1={pad} y1={H - pad} x2={W - pad} y2={H - pad} stroke="oklch(0.4 0.03 260 / 0.4)" />
      {series.map((s) => {
        const step = (W - pad * 2) / (s.points.length - 1);
        const d = s.points
          .map((p, i) => `${i === 0 ? "M" : "L"} ${pad + i * step} ${H - pad - (p / max) * (H - pad * 2)}`)
          .join(" ");
        return <path key={s.color} d={d} fill="none" stroke={s.color} strokeWidth="1.5" strokeLinecap="round" />;
      })}
    </svg>
  );
}
