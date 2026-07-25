import { createFileRoute } from "@tanstack/react-router";
import { AtlasLayout } from "@/components/AtlasLayout";
import { Panel, CapitalPill } from "@/components/atlas-ui";
import { Globe } from "@/components/Globe";
import {
  Shield,
  Brain,
  HeartPulse,
  Compass,
  Flower2,
  Leaf,
  Users,
  BookOpen,
  Landmark,
  Building2,
  Sparkles,
  Clock,
  Wallet,
  Palette,
  Eye,
  Cpu,
  AlertTriangle,
  Zap,
  Radio,
  Satellite,
  Database,
  Lock,
  Fingerprint,
  ShieldCheck,
  Cloud,
  Server,
  Layers,
  Activity,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atlas Sanctum — Civilization Operating System" },
      {
        name: "description",
        content:
          "The Civilizational Allocation Engine. A planetary operating system that continuously models, understands, and optimizes civilization across every form of capital.",
      },
      { property: "og:title", content: "Atlas Sanctum — Civilization Operating System" },
      {
        property: "og:description",
        content:
          "The planetary coordination system for people, ecosystems, institutions, and future generations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Overview,
});

const capitalOS = [
  { name: "Trust OS", sub: "Transparency · Accountability · Confidence", tone: "trust" as const, icon: <Shield className="h-4 w-4" /> },
  { name: "Knowledge OS", sub: "Collective Intelligence · Evidence · Context", tone: "knowledge" as const, icon: <Brain className="h-4 w-4" /> },
  { name: "Health OS", sub: "Wellness of People and Planet", tone: "health" as const, icon: <HeartPulse className="h-4 w-4" /> },
  { name: "Opportunity OS", sub: "Unlock Potential · Expand Possibilities", tone: "opportunity" as const, icon: <Compass className="h-4 w-4" /> },
  { name: "Flourishing OS", sub: "Well-being · Belonging · Purpose", tone: "flourishing" as const, icon: <Flower2 className="h-4 w-4" /> },
];

const agents = [
  { name: "Health Agent", sub: "Monitoring public health", tone: "text-emerald", ok: true, icon: HeartPulse },
  { name: "Education Agent", sub: "Optimizing learning pathways", tone: "text-violet", ok: true, icon: BookOpen },
  { name: "Climate Agent", sub: "Analyzing climate risks", tone: "text-cyan", ok: true, icon: Cloud },
  { name: "Economic Agent", sub: "Modeling economic signals", tone: "text-gold", ok: true, icon: Wallet },
  { name: "Agriculture Agent", sub: "Monitoring food systems", tone: "text-emerald", ok: true, icon: Leaf },
  { name: "Governance Agent", sub: "Assessing policy impact", tone: "text-trust", ok: true, icon: Landmark },
  { name: "Infrastructure Agent", sub: "Optimizing infrastructure", tone: "text-cyan", ok: true, icon: Building2 },
  { name: "Emergency Agent", sub: "Monitoring emergencies", tone: "text-rose", ok: false, icon: AlertTriangle },
];

const capitals = [
  { name: "Natural", icon: Leaf, tone: "text-emerald" },
  { name: "Human", icon: Users, tone: "text-cyan" },
  { name: "Social", icon: Users, tone: "text-violet" },
  { name: "Knowledge", icon: Brain, tone: "text-knowledge" },
  { name: "Institutional", icon: Landmark, tone: "text-trust" },
  { name: "Cultural", icon: Palette, tone: "text-rose" },
  { name: "Spiritual", icon: Sparkles, tone: "text-violet" },
  { name: "Time", icon: Clock, tone: "text-gold" },
  { name: "Infrastructure", icon: Building2, tone: "text-cyan" },
  { name: "Economic", icon: Wallet, tone: "text-emerald" },
];

const insights = [
  { tone: "text-rose", label: "Flood risk rising in 3 regions" },
  { tone: "text-cyan", label: "12 new funding opportunities" },
  { tone: "text-gold", label: "Health alert in your area" },
  { tone: "text-violet", label: "Policy change detected" },
];

const feedback = ["Observe", "Understand", "Recommend", "Act", "Measure", "Learn", "Improve", "Observe Again"];

function Overview() {
  return (
    <AtlasLayout>
      {/* Hero */}
      <section className="mb-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-cyan">
              Civilizational Allocation Engine
            </div>
            <h1 className="mt-1 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Five Capitals. <span className="text-glow text-cyan">One Intelligence.</span>{" "}
              <span className="text-gold">Infinite Impact.</span>
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              A living operating system that continuously models, decodes, and stewards civilization
              across every form of capital — for people, ecosystems, and future generations.
            </p>
          </div>
          <div className="glass-panel px-4 py-3">
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Trust Score
            </div>
            <div className="flex items-baseline gap-2">
              <div className="font-display text-3xl font-semibold text-cyan text-glow">92</div>
              <div className="text-[11px] text-emerald">▲ 4 this month</div>
            </div>
          </div>
        </div>
      </section>

      {/* Five OS pillars */}
      <section className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-5">
        {capitalOS.map((c) => (
          <CapitalPill key={c.name} name={c.name} sub={c.sub} tone={c.tone} icon={c.icon} />
        ))}
      </section>

      {/* Main grid */}
      <section className="grid grid-cols-12 gap-4">
        {/* Left: Digital Twin */}
        <div className="col-span-12 xl:col-span-8">
          <Panel
            title="Civilization Digital Twin"
            action={
              <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald atlas-pulse" />
                Live · 4.2s ago
              </div>
            }
          >
            <div className="relative grid grid-cols-3 gap-4">
              {/* Left column: Trust OS + Health OS */}
              <div className="space-y-4 pt-4">
                <SubdomainCard
                  title="TRUST OS"
                  tone="trust"
                  icon={<Shield className="h-4 w-4" />}
                  items={["Identity", "Reputation", "Provenance", "Governance", "Transparency", "Accountability"]}
                />
                <SubdomainCard
                  title="HEALTH OS"
                  tone="health"
                  icon={<HeartPulse className="h-4 w-4" />}
                  items={["Individual Health", "Mental Health", "Environment", "Food & Water", "Housing", "Public Health", "Climate Risks"]}
                />
              </div>

              {/* Center: globe */}
              <div className="flex flex-col items-center justify-start">
                <Globe size={340} />
                <div className="mt-2 text-center">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Flourishing OS
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-0.5 text-left text-[11px] text-foreground/80">
                    {["Belonging", "Purpose", "Safety", "Education", "Economic Security", "Environmental Quality", "Civic Participation", "Well-being"].map((x) => (
                      <div key={x} className="flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-flourishing" />
                        {x}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column: Knowledge + Opportunity */}
              <div className="space-y-4 pt-4">
                <SubdomainCard
                  title="KNOWLEDGE OS"
                  tone="knowledge"
                  icon={<Brain className="h-4 w-4" />}
                  items={["Knowledge Graph", "Research Repository", "AI Reasoning", "Simulation Engine", "Scenario Generator", "Learning Platform"]}
                  align="right"
                />
                <SubdomainCard
                  title="OPPORTUNITY OS"
                  tone="opportunity"
                  icon={<Compass className="h-4 w-4" />}
                  items={["Talent Graph", "Skills Mapping", "Funding Engine", "Jobs & Gigs", "Mentorship", "Innovation Challenges", "Grant Discovery"]}
                  align="right"
                />
              </div>
            </div>

            {/* Shared Intelligence Fabric */}
            <div className="mt-6 rounded-lg border border-hairline bg-surface/60 p-3">
              <div className="text-center text-[10px] uppercase tracking-[0.28em] text-cyan">
                Shared Intelligence Fabric
              </div>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[11px] text-muted-foreground">
                {["Identity", "Knowledge Graph", "AI Agents", "Simulation Engine", "Spatial Intelligence", "Digital Twins", "Open APIs", "Security", "Data Governance"].map((f) => (
                  <span key={f} className="flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-cyan" />
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Regenerative feedback loop */}
            <div className="mt-4 rounded-lg border border-hairline bg-surface/40 p-3">
              <div className="mb-2 text-center text-[10px] uppercase tracking-[0.28em] text-gold">
                Regenerative Feedback Loop
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-[11px]">
                {feedback.map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="rounded-md border border-hairline bg-surface-2 px-2.5 py-1 text-foreground/90">
                      {step}
                    </span>
                    {i < feedback.length - 1 && <span className="text-cyan">→</span>}
                  </div>
                ))}
              </div>
            </div>
          </Panel>
        </div>

        {/* Right: Atlas Intelligence + Impact preview */}
        <div className="col-span-12 space-y-4 xl:col-span-4">
          <Panel title="Atlas Intelligence Layer" action={<span className="text-[10px] text-muted-foreground">Specialized AI agents working together</span>}>
            <div className="space-y-2">
              {agents.map((a) => (
                <div key={a.name} className="flex items-center gap-3 rounded-md border border-hairline bg-surface/50 p-2.5">
                  <div className={`grid h-8 w-8 place-items-center rounded-md bg-surface-3 ${a.tone}`}>
                    <a.icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[12px] font-medium">{a.name}</div>
                    <div className="truncate text-[10px] text-muted-foreground">{a.sub}</div>
                  </div>
                  <span
                    className={`h-2 w-2 rounded-full ${a.ok ? "bg-emerald atlas-pulse" : "bg-rose atlas-pulse"}`}
                  />
                </div>
              ))}
              <div className="pt-1 text-center text-[10px] italic text-muted-foreground">
                All agents aligned to human values and ethical governance.
              </div>
            </div>
          </Panel>

          <Panel title="Impact Preview">
            <div className="grid grid-cols-2 items-center gap-3">
              <RadarChart />
              <div className="space-y-1.5 text-[11px]">
                {[
                  ["Trust", "text-trust", "92"],
                  ["Knowledge", "text-knowledge", "88"],
                  ["Health", "text-health", "90"],
                  ["Opportunity", "text-opportunity", "87"],
                  ["Flourishing", "text-flourishing", "91"],
                ].map(([k, cls, v]) => (
                  <div key={k} className="flex items-center justify-between">
                    <span className={`flex items-center gap-1.5 ${cls}`}>
                      <span className="h-1.5 w-1.5 rounded-full bg-current" /> {k}
                    </span>
                    <span className="font-mono text-foreground/80">{v}/100</span>
                  </div>
                ))}
              </div>
            </div>
          </Panel>

          <Panel title="Active Insights">
            <div className="space-y-2">
              {insights.map((i) => (
                <div key={i.label} className="flex items-center gap-2 rounded-md border border-hairline bg-surface/50 px-3 py-2">
                  <span className={`text-lg ${i.tone}`}>●</span>
                  <div className="flex-1 text-[12px]">{i.label}</div>
                  <button className="text-[11px] text-cyan hover:underline">View</button>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </section>

      {/* Civilization Capital Layer */}
      <section className="mt-4">
        <Panel title="Civilization Capital Layer">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5 lg:grid-cols-10">
            {capitals.map((c) => (
              <div key={c.name} className="flex flex-col items-center gap-1.5 rounded-md border border-hairline bg-surface/40 p-3 text-center">
                <c.icon className={`h-5 w-5 ${c.tone}`} />
                <div className="text-[11px] font-medium">{c.name}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Capital</div>
              </div>
            ))}
          </div>
        </Panel>
      </section>

      {/* Bottom bands */}
      <section className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-4">
        <Panel title="Data Sources">
          <IconRow items={[
            { icon: Database, l: "Gov Data" },
            { icon: Satellite, l: "Satellites" },
            { icon: Radio, l: "Sensors" },
            { icon: Cpu, l: "IoT Devices" },
            { icon: Users, l: "Community" },
            { icon: BookOpen, l: "Research" },
            { icon: Building2, l: "Enterprises" },
            { icon: Eye, l: "Open Data" },
          ]} />
        </Panel>
        <Panel title="Security & Privacy by Design">
          <IconRow items={[
            { icon: Lock, l: "End-to-End Encryption" },
            { icon: Fingerprint, l: "Decentralized Identity" },
            { icon: ShieldCheck, l: "Consent & Control" },
            { icon: Shield, l: "Zero Trust" },
          ]} />
        </Panel>
        <Panel title="Open Ecosystem">
          <IconRow items={[
            { icon: Zap, l: "Open APIs" },
            { icon: Cpu, l: "Developer Tools" },
            { icon: Users, l: "Partner Network" },
            { icon: Layers, l: "Plug & Play Modules" },
          ]} />
        </Panel>
        <Panel title="Deployment Layer">
          <IconRow items={[
            { icon: Cloud, l: "Cloud" },
            { icon: Server, l: "Edge" },
            { icon: Activity, l: "Hybrid" },
            { icon: Database, l: "Offline-First" },
          ]} />
        </Panel>
      </section>
    </AtlasLayout>
  );
}

function SubdomainCard({
  title,
  tone,
  icon,
  items,
  align = "left",
}: {
  title: string;
  tone: "trust" | "knowledge" | "health" | "opportunity";
  icon: React.ReactNode;
  items: string[];
  align?: "left" | "right";
}) {
  const toneMap = {
    trust: "border-trust/40 from-trust/20 to-transparent text-trust",
    knowledge: "border-knowledge/40 from-knowledge/20 to-transparent text-knowledge",
    health: "border-health/40 from-health/20 to-transparent text-health",
    opportunity: "border-opportunity/40 from-opportunity/20 to-transparent text-opportunity",
  }[tone];
  return (
    <div className={`rounded-lg border bg-gradient-to-b p-3 ${toneMap}`}>
      <div className={`flex items-center gap-2 ${align === "right" ? "justify-end" : ""}`}>
        <span className="grid h-7 w-7 place-items-center rounded-md bg-background/40">{icon}</span>
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground">
          {title}
        </div>
      </div>
      <ul className={`mt-2 space-y-0.5 text-[11px] text-foreground/80 ${align === "right" ? "text-right" : ""}`}>
        {items.map((i) => (
          <li key={i} className="flex items-center gap-1.5" style={{ justifyContent: align === "right" ? "flex-end" : "flex-start" }}>
            {align === "left" && <span className="h-1 w-1 rounded-full bg-current opacity-70" />}
            <span className="text-foreground/80">{i}</span>
            {align === "right" && <span className="h-1 w-1 rounded-full bg-current opacity-70" />}
          </li>
        ))}
      </ul>
    </div>
  );
}

function IconRow({ items }: { items: { icon: React.ComponentType<{ className?: string }>; l: string }[] }) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {items.map((it) => (
        <div key={it.l} className="flex flex-col items-center gap-1 rounded-md border border-hairline bg-surface/40 p-2 text-center">
          <it.icon className="h-4 w-4 text-cyan" />
          <div className="text-[10px] leading-tight text-foreground/80">{it.l}</div>
        </div>
      ))}
    </div>
  );
}

function RadarChart() {
  const points = [0.9, 0.85, 0.88, 0.82, 0.92, 0.86];
  const labels = ["Trust", "Knowledge", "Health", "Opportunity", "Flourishing", "Ethics"];
  const cx = 90;
  const cy = 90;
  const R = 70;
  const angles = points.map((_, i) => (Math.PI * 2 * i) / points.length - Math.PI / 2);
  const path = points
    .map((p, i) => {
      const x = cx + Math.cos(angles[i]) * R * p;
      const y = cy + Math.sin(angles[i]) * R * p;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ") + " Z";
  return (
    <svg viewBox="0 0 180 180" className="h-40 w-40">
      {[0.25, 0.5, 0.75, 1].map((k, i) => (
        <polygon
          key={i}
          points={angles.map((a) => `${cx + Math.cos(a) * R * k},${cy + Math.sin(a) * R * k}`).join(" ")}
          fill="none"
          stroke="oklch(0.5 0.05 260 / 0.35)"
          strokeWidth="0.6"
        />
      ))}
      {angles.map((a, i) => (
        <line key={i} x1={cx} y1={cy} x2={cx + Math.cos(a) * R} y2={cy + Math.sin(a) * R} stroke="oklch(0.5 0.05 260 / 0.35)" strokeWidth="0.5" />
      ))}
      <path d={path} fill="oklch(0.75 0.15 200 / 0.25)" stroke="oklch(0.85 0.16 195)" strokeWidth="1.5" />
      {angles.map((a, i) => (
        <text
          key={i}
          x={cx + Math.cos(a) * (R + 12)}
          y={cy + Math.sin(a) * (R + 12)}
          fontSize="7"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="oklch(0.8 0.02 240)"
        >
          {labels[i]}
        </text>
      ))}
    </svg>
  );
}
