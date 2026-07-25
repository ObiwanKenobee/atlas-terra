import { createFileRoute } from "@tanstack/react-router";
import { AtlasLayout } from "@/components/AtlasLayout";
import { Panel } from "@/components/atlas-ui";
import {
  Users,
  MapPin,
  Plus,
  Activity,
  Wallet,
  Handshake,
  HeartPulse,
  Leaf,
  Brain,
  Shield,
  Sparkles,
  Palette,
  Landmark,
  ChevronRight,
  Search,
  Download,
  Layers,
  Globe as GlobeIcon,
} from "lucide-react";

export const Route = createFileRoute("/communities")({
  head: () => ({
    meta: [
      { title: "My Communities — Atlas Sanctum" },
      {
        name: "description",
        content:
          "Thriving together — a living map of the communities you build, contribute to, and follow across the civilization graph.",
      },
      { property: "og:title", content: "My Communities — Atlas Sanctum" },
      {
        property: "og:description",
        content:
          "Thriving together. Building resilient, regenerative futures across the civilization graph.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CommunitiesPage,
});

const kpis = [
  { label: "Active Communities", value: "24", delta: "12% this year", icon: Users, tone: "text-cyan" },
  { label: "People Connected", value: "156K", delta: "8% this year", icon: Users, tone: "text-violet" },
  { label: "Projects Active", value: "312", delta: "18% this year", icon: Layers, tone: "text-emerald" },
  { label: "Resources Mobilized", value: "$2.4M", delta: "22% this year", icon: Wallet, tone: "text-gold" },
  { label: "Partners Engaged", value: "78", delta: "15% this year", icon: Handshake, tone: "text-rose" },
  { label: "Community Health Index", value: "82/100", delta: "Thriving", icon: HeartPulse, tone: "text-emerald" },
];

const communities = [
  { name: "Kibera Resilience Network", place: "Nairobi, Kenya", members: "4.2K", projects: 126, health: 88, tone: "border-emerald/50" },
  { name: "Green Nairobi Alliance", place: "Nairobi, Kenya", members: "3.1K", projects: 89, health: 91, tone: "border-emerald/50" },
  { name: "Coastal Communities Hub", place: "Mombasa, Kenya", members: "1.8K", projects: 47, health: 42, tone: "border-rose/60" },
  { name: "Youth Innovators Collective", place: "East Africa", members: "2.9K", projects: 68, health: 76, tone: "border-cyan/50" },
  { name: "Climate Adaptation Hub", place: "West Africa", members: "2.2K", projects: 55, health: 73, tone: "border-gold/50" },
  { name: "Rural Health Network", place: "Uganda", members: "3.6K", projects: 55, health: 79, tone: "border-violet/50" },
];

const insightsRight = [
  { label: "Most Active Community", name: "Kibera Resilience Network", note: "4.2K members", score: 88, tone: "text-emerald" },
  { label: "Fastest Growing", name: "Youth Innovators Collective", note: "▲ 35% growth", score: 76, tone: "text-cyan" },
  { label: "Most Impact Created", name: "Green Nairobi Alliance", note: "$560K mobilized", score: 91, tone: "text-gold" },
  { label: "Needs Support", name: "Coastal Communities Hub", note: "Health index 42", score: 42, tone: "text-rose" },
];

const feed = [
  { title: "Solar for Schools Initiative", meta: "Kibera Resilience Network", note: "Looking for education partners", when: "2h ago", icon: Sparkles, tone: "text-gold" },
  { title: "Urban Food Gardens Project", meta: "Green Nairobi Alliance", note: "Shared a new resource", when: "5h ago", icon: Leaf, tone: "text-emerald" },
  { title: "Climate Adaptation Workshop", meta: "Coastal Communities Hub", note: "New event announced", when: "1d ago", icon: Activity, tone: "text-cyan" },
  { title: "Youth Innovation Challenge", meta: "Youth Innovators Collective", note: "Seeking mentors", when: "2d ago", icon: Brain, tone: "text-violet" },
];

const healthOverview = [
  { label: "Trust & Governance", value: 85, status: "Strong", icon: Shield, tone: "text-trust" },
  { label: "Knowledge Sharing", value: 78, status: "Good", icon: Brain, tone: "text-knowledge" },
  { label: "Health & Well-being", value: 72, status: "Good", icon: HeartPulse, tone: "text-health" },
  { label: "Opportunity Access", value: 68, status: "Improving", icon: Landmark, tone: "text-opportunity" },
  { label: "Environmental Health", value: 81, status: "Strong", icon: Leaf, tone: "text-emerald" },
  { label: "Economic Vitality", value: 74, status: "Good", icon: Wallet, tone: "text-gold" },
  { label: "Social Cohesion", value: 83, status: "Strong", icon: Users, tone: "text-violet" },
  { label: "Cultural Strength", value: 77, status: "Good", icon: Palette, tone: "text-rose" },
];

function CommunitiesPage() {
  return (
    <AtlasLayout>
      {/* Header row */}
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-3xl font-semibold tracking-tight">My Communities</h1>
          <p className="text-sm text-muted-foreground">Thriving together. Building resilient, regenerative futures.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-md bg-violet/80 px-3 py-2 text-[12px] font-medium text-primary-foreground hover:bg-violet">
            <Plus className="h-4 w-4" /> Create Community
          </button>
          <button className="inline-flex items-center gap-2 rounded-md border border-hairline bg-surface-2 px-3 py-2 text-[12px]">
            All Communities <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* KPI strip */}
      <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-lg border border-hairline bg-surface/50 p-3">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
              <k.icon className={`h-3.5 w-3.5 ${k.tone}`} /> {k.label}
            </div>
            <div className={`mt-1 font-display text-2xl font-semibold ${k.tone}`}>{k.value}</div>
            <div className="text-[11px] text-emerald">▲ {k.delta}</div>
          </div>
        ))}
      </div>

      {/* Main split */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 xl:col-span-8">
          <Panel
            title="Community Map"
            action={
              <div className="flex items-center gap-1.5">
                <IconBtn icon={GlobeIcon} />
                <IconBtn icon={Download} />
                <IconBtn icon={Plus} />
              </div>
            }
          >
            <div className="mb-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-muted-foreground">
              <Legend color="oklch(0.76 0.19 155)" label="Thriving" />
              <Legend color="oklch(0.82 0.16 85)" label="Growing" />
              <Legend color="oklch(0.82 0.15 205)" label="Emerging" />
              <Legend color="oklch(0.72 0.19 20)" label="Needs Support" />
            </div>
            <CommunityMap />
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {["All Countries", "All Focus Areas", "All Capitals", "Health Index"].map((f) => (
                <button key={f} className="rounded-md border border-hairline bg-surface-2 px-2.5 py-1.5 text-[11px] text-foreground/80">
                  {f} ▾
                </button>
              ))}
              <button className="ml-auto rounded-md border border-hairline px-2.5 py-1.5 text-[11px] text-muted-foreground">
                Reset
              </button>
            </div>
          </Panel>

          {/* My communities strip */}
          <div className="mt-4 glass-panel p-5">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  My Communities
                </div>
                <div className="flex items-center gap-3 text-[12px]">
                  <span className="text-cyan text-glow">Active (24)</span>
                  <span className="text-muted-foreground">Contributing (18)</span>
                  <span className="text-muted-foreground">Following (12)</span>
                </div>
              </div>
              <a className="text-[11px] text-cyan hover:underline">View All Communities →</a>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
              {communities.map((c) => (
                <CommunityCard key={c.name} {...c} />
              ))}
            </div>
          </div>

          <div className="mt-4">
            <Panel title="Community Health Overview" action={<span className="text-[11px] text-muted-foreground">Across all your communities</span>}>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-8">
                {healthOverview.map((h) => (
                  <div key={h.label} className="rounded-md border border-hairline bg-surface/50 p-3">
                    <div className={`flex items-center gap-2 ${h.tone}`}>
                      <h.icon className="h-4 w-4" />
                      <span className="text-[10px] font-medium uppercase tracking-widest text-foreground/80">
                        {h.label}
                      </span>
                    </div>
                    <div className={`mt-1 font-display text-xl font-semibold ${h.tone}`}>
                      {h.value}
                      <span className="text-[11px] text-muted-foreground">/100</span>
                    </div>
                    <div className="text-[10px] text-foreground/70">{h.status}</div>
                    <Sparkline tone={h.tone} />
                  </div>
                ))}
              </div>
            </Panel>
          </div>
        </div>

        {/* Right column */}
        <div className="col-span-12 space-y-4 xl:col-span-4">
          <Panel title="Community Insights" action={<span className="text-[11px] text-muted-foreground">This Month</span>}>
            <div className="space-y-2">
              {insightsRight.map((i) => (
                <div key={i.name} className="flex items-center gap-3 rounded-md border border-hairline bg-surface/50 p-2.5">
                  <div className={`grid h-9 w-9 place-items-center rounded-full bg-surface-3 ${i.tone}`}>
                    <Users className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className={`text-[10px] uppercase tracking-widest ${i.tone}`}>{i.label}</div>
                    <div className="text-[12px] font-medium">{i.name}</div>
                    <div className="text-[10px] text-muted-foreground">{i.note}</div>
                  </div>
                  <ScoreBadge score={i.score} tone={i.tone} />
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="Community Collaboration Feed">
            <div className="space-y-2">
              {feed.map((f) => (
                <div key={f.title} className="flex items-start gap-3 rounded-md border border-hairline bg-surface/50 p-2.5">
                  <div className={`grid h-9 w-9 place-items-center rounded-md bg-surface-3 ${f.tone}`}>
                    <f.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-[12px] font-medium">{f.title}</div>
                      <div className="text-[10px] text-muted-foreground">{f.when}</div>
                    </div>
                    <div className="text-[11px] text-foreground/80">{f.meta}</div>
                    <div className="text-[10px] text-muted-foreground">{f.note}</div>
                  </div>
                </div>
              ))}
              <a className="block text-center text-[11px] text-cyan hover:underline">View all activity →</a>
            </div>
          </Panel>

          <Panel title="Community Impact Summary" action={<span className="text-[11px] text-muted-foreground">This Year</span>}>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Total Impact Created</div>
            <div className="font-display text-3xl font-semibold text-emerald text-glow">$2.4M</div>
            <div className="text-[11px] text-emerald">▲ 22% vs last year</div>
            <TrendLine />
            <div className="mt-3 space-y-1.5 text-[11px]">
              {[
                ["Financial Resources", "$1.2M"],
                ["In-kind Contributions", "$680K"],
                ["Volunteer Hours", "42K"],
                ["People Benefited", "156K"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-foreground/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> {k}
                  </span>
                  <span className="font-mono text-foreground">{v}</span>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </AtlasLayout>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="h-2 w-2 rounded-full" style={{ background: color }} />
      {label}
    </span>
  );
}

function IconBtn({ icon: Icon }: { icon: React.ComponentType<{ className?: string }> }) {
  return (
    <button className="grid h-8 w-8 place-items-center rounded-md border border-hairline bg-surface-2 text-muted-foreground hover:text-foreground">
      <Icon className="h-4 w-4" />
    </button>
  );
}

function CommunityMap() {
  const pins = [
    { x: 22, y: 42, color: "oklch(0.76 0.19 155)", label: "West Africa" },
    { x: 30, y: 60, color: "oklch(0.82 0.15 205)" },
    { x: 44, y: 48, color: "oklch(0.72 0.19 20)" },
    { x: 52, y: 55, color: "oklch(0.76 0.19 155)", label: "Kibera", featured: true },
    { x: 58, y: 40, color: "oklch(0.82 0.16 85)" },
    { x: 70, y: 30, color: "oklch(0.76 0.19 155)" },
    { x: 80, y: 65, color: "oklch(0.82 0.15 205)" },
    { x: 68, y: 70, color: "oklch(0.82 0.16 85)" },
    { x: 18, y: 32, color: "oklch(0.72 0.20 300)" },
    { x: 88, y: 44, color: "oklch(0.76 0.19 155)" },
  ];
  return (
    <div className="atlas-grid-bg relative h-72 overflow-hidden rounded-lg border border-hairline bg-gradient-to-b from-surface-2 to-surface">
      {/* stylized continents */}
      <svg viewBox="0 0 100 60" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-40">
        <g fill="oklch(0.35 0.06 200 / 0.6)" stroke="oklch(0.75 0.1 200 / 0.4)" strokeWidth="0.2">
          <path d="M6 20 Q 18 12 30 18 Q 34 30 24 38 Q 12 40 8 34 Z" />
          <path d="M38 22 Q 52 14 60 24 Q 62 40 50 46 Q 42 44 40 36 Z" />
          <path d="M62 18 Q 78 12 90 22 Q 92 34 82 40 Q 70 38 66 30 Z" />
          <path d="M74 44 Q 84 42 90 50 Q 86 56 78 54 Z" />
        </g>
      </svg>
      {/* arcs */}
      <svg className="absolute inset-0 h-full w-full">
        <g fill="none" stroke="oklch(0.82 0.15 205 / 0.35)" strokeWidth="1">
          {pins.slice(0, -1).map((p, i) => {
            const q = pins[i + 1];
            return (
              <path
                key={i}
                d={`M ${p.x}% ${p.y}% Q ${(p.x + q.x) / 2}% ${(p.y + q.y) / 2 - 8}% ${q.x}% ${q.y}%`}
              />
            );
          })}
        </g>
      </svg>
      {pins.map((p, i) => (
        <div
          key={i}
          className="absolute"
          style={{ left: `${p.x}%`, top: `${p.y}%`, transform: "translate(-50%,-50%)" }}
        >
          <span
            className="atlas-pulse block h-3 w-3 rounded-full"
            style={{ background: p.color, boxShadow: `0 0 14px ${p.color}` }}
          />
        </div>
      ))}
      {/* featured tooltip */}
      <div
        className="absolute rounded-md border border-hairline bg-surface-3/90 p-2.5 shadow-xl backdrop-blur"
        style={{ left: "52%", top: "55%", transform: "translate(8px, 8px)" }}
      >
        <div className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-md bg-emerald/20 text-emerald">
            <Users className="h-3.5 w-3.5" />
          </div>
          <div>
            <div className="text-[11px] font-medium">Kibera Resilience Network</div>
            <div className="text-[10px] text-muted-foreground">Nairobi, Kenya</div>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-3 text-[10px] text-foreground/80">
          <div>Health Index <span className="font-semibold text-emerald">88</span>/100</div>
        </div>
        <div className="text-[10px] text-muted-foreground">126 Projects · 4.2K Members</div>
        <button className="mt-2 w-full rounded-md bg-cyan/20 py-1 text-[11px] font-medium text-cyan hover:bg-cyan/30">
          View Community
        </button>
      </div>
    </div>
  );
}

function CommunityCard({
  name, place, members, projects, health, tone,
}: { name: string; place: string; members: string; projects: number; health: number; tone: string }) {
  const healthTone =
    health >= 80 ? "text-emerald" : health >= 60 ? "text-cyan" : health >= 45 ? "text-gold" : "text-rose";
  return (
    <div className={`overflow-hidden rounded-lg border bg-surface/50 ${tone}`}>
      <div className="atlas-grid-bg relative h-24 bg-gradient-to-br from-emerald/30 via-cyan/20 to-violet/25">
        <div className={`absolute left-2 top-2 grid h-8 w-8 place-items-center rounded-full border border-hairline bg-background/70 text-[11px] font-semibold ${healthTone}`}>
          {health}
        </div>
      </div>
      <div className="p-3">
        <div className="text-[12px] font-medium leading-tight">{name}</div>
        <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
          <MapPin className="h-3 w-3" /> {place}
        </div>
        <div className="mt-2 flex items-center justify-between text-[10px]">
          <span className="text-foreground/80">{members} Members</span>
          <span className="text-muted-foreground">{projects} Projects</span>
        </div>
        <div className="mt-1.5 h-1 rounded-full bg-surface-3">
          <div className={`h-full rounded-full ${healthTone.replace("text-", "bg-")}`} style={{ width: `${health}%` }} />
        </div>
      </div>
    </div>
  );
}

function ScoreBadge({ score, tone }: { score: number; tone: string }) {
  return (
    <div className={`grid h-9 w-9 place-items-center rounded-full border border-current ${tone} text-[11px] font-semibold`}>
      {score}
    </div>
  );
}

function Sparkline({ tone }: { tone: string }) {
  const points = [8, 10, 9, 12, 14, 13, 16, 18, 17, 21, 24, 26];
  const W = 100, H = 24;
  const step = W / (points.length - 1);
  const max = 30;
  const d = points.map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${H - (p / max) * H}`).join(" ");
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className={`mt-1.5 h-6 w-full ${tone}`}>
      <path d={d} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function TrendLine() {
  const p = [10, 14, 12, 20, 26, 22, 30, 38, 36, 44, 52, 60];
  const W = 260, H = 60;
  const step = W / (p.length - 1);
  const max = 70;
  const d = p.map((v, i) => `${i === 0 ? "M" : "L"} ${i * step} ${H - (v / max) * H}`).join(" ");
  const area = d + ` L ${W} ${H} L 0 ${H} Z`;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="mt-2 h-16 w-full">
      <defs>
        <linearGradient id="tl" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.76 0.19 155 / 0.5)" />
          <stop offset="100%" stopColor="oklch(0.76 0.19 155 / 0)" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#tl)" />
      <path d={d} fill="none" stroke="oklch(0.76 0.19 155)" strokeWidth="1.5" />
    </svg>
  );
}
