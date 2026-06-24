"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DiagramFrame } from "./DiagramFrame";
import { useScrollAnimation } from "@/lib/animation/useScrollAnimation";
import { cn } from "@/lib/cn";

/* ---------------- PDLC vs SDLC ---------------- */
export function PdlcVsSdlc() {
  const cols = [
    {
      tone: "indigo" as const,
      label: "Product Development Lifecycle",
      q: "\u201cAre we building the right thing?\u201d",
      rows: [
        ["Scope", "Strategic + customer-facing"],
        ["Starts with", "Signals from the real world"],
        ["Ends with", "A measured business outcome"],
        ["Owner", "Product Manager"],
        ["Success", "Did the target metric move?"],
      ],
    },
    {
      tone: "success" as const,
      label: "Software Development Lifecycle",
      q: "\u201cAre we building the thing right?\u201d",
      rows: [
        ["Scope", "Technical + delivery-focused"],
        ["Starts with", "A committed specification"],
        ["Ends with", "Working software in production"],
        ["Owner", "Engineering Lead"],
        ["Success", "Does it meet acceptance criteria?"],
      ],
    },
  ];
  const card = (c: (typeof cols)[number]) => (
    <div className={cn("h-full rounded-2xl border p-5", c.tone === "indigo" ? "border-indigo-500/40 bg-indigo-500/[0.06]" : "border-success/40 bg-success/[0.05]")}>
      <div className={cn("eyebrow", c.tone === "success" && "text-success")}>{c.label}</div>
      <div className={cn("mt-3 rounded-lg p-3 text-sm font-bold italic", c.tone === "indigo" ? "bg-indigo-500/10 text-indigo-200" : "bg-success/10 text-success")}>{c.q}</div>
      <dl className="mt-4 space-y-2.5">
        {c.rows.map(([k, v]) => (
          <div key={k} className="flex gap-3 text-sm">
            <dt className="w-24 shrink-0 text-[11px] font-semibold uppercase tracking-wide text-fog-500">{k}</dt>
            <dd className="text-fog-300">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
  return (
    <DiagramFrame label="Diagram 1.4" title="PDLC vs SDLC — The Fundamental Distinction" subtitle="Two lifecycles. Two questions. One nested inside the other. The specification is the bridge.">
      <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr]">
        {card(cols[0])}
        <div className="flex flex-row items-center justify-center gap-2 md:flex-col">
          <div className="h-px w-full bg-white/10 md:h-full md:w-px" />
          <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400">Spec Bridge</span>
          <div className="h-px w-full bg-white/10 md:h-full md:w-px" />
        </div>
        {card(cols[1])}
      </div>
      <div className="mt-5 rounded-2xl border border-white/10 bg-ink-900 p-5">
        <div className="eyebrow mb-1">The specification bridge</div>
        <p className="text-sm text-fog-300">The SDLC is nested inside PDLC Stage 05. Specification (A4) writes to the context layer; Context-Driven Specification (S-A1) reads from it and translates into engineering-ready artifacts. SDLC quality is a function of PDLC quality — you cannot fix a bad hypothesis with excellent code.</p>
      </div>
    </DiagramFrame>
  );
}

/* ---------------- Design Thinking table ---------------- */
const DT_ROWS = [
  { dt: "Empathize", maps: "→ Signal Detection", ai: ["Synthesises transcripts overnight", "Clusters themes across thousands of signals", "Detects patterns across all channels"], human: ["Actual human-to-human connection", "Understanding what feelings drive behaviour", "Reading what people mean, not just say"] },
  { dt: "Define", maps: "→ Hypothesis", ai: ["Generates HMW / JTBD / Lean framings", "Scores against OKRs and prior context", "Surfaces the assumption map"], human: ["Selects the framing that fits strategy", "Adds political and org knowledge", "Commits or kills — owns the bet"] },
  { dt: "Ideate", maps: "→ Hypothesis + Validation fan-out", ai: ["Generates many variants simultaneously", "Surfaces what has been tried before", "Cross-references prior patterns"], human: ["Divergent judgment on direction", "Creative direction beyond pattern matching", "Deciding when none of the options are right"] },
  { dt: "Prototype", maps: "→ Validation + de-risking arc", ai: ["Generates clickable prototypes in minutes", "Produces all states and edge-case screens", "Drops the cost threshold to a reflex"], human: ["Judges which prototype to test and with whom", "Reads the room during sessions", "Decides when it's good enough to test"] },
  { dt: "Test", maps: "→ Validation + Autonomous Testing", ai: ["Generates test scripts from the assumption map", "Synthesises session findings into themes", "Monitors live deployments for signal"], human: ["Conducts the actual user sessions", "Interprets what failure means", "Holds the ethical bar for sufficient evidence"] },
];

export function DesignThinking() {
  const ref = useScrollAnimation<HTMLDivElement>(({ root, q, gsap, reduced }) => {
    const rows = q(".dt-row");
    if (!rows.length) return;
    if (reduced) {
      gsap.set(rows, { opacity: 1, x: 0 });
      return;
    }
    gsap.set(rows, { opacity: 0, x: -24 });
    gsap.to(rows, { opacity: 1, x: 0, duration: 0.6, ease: "expo.out", stagger: 0.08, scrollTrigger: { trigger: root, start: "top 85%" } });
  });
  return (
    <DiagramFrame label="Diagram 6.3" title="Design Thinking in the Agentic PDLC" subtitle="AI accelerates the mechanics. The human mindset is what makes it work.">
      <div ref={ref} className="overflow-hidden rounded-2xl border border-white/10">
        <div className="grid grid-cols-[120px_1fr_1fr] bg-white/[0.03] text-[10px] font-bold uppercase tracking-wider">
          <div className="p-3" />
          <div className="p-3 text-indigo-300">AI accelerates</div>
          <div className="p-3 text-success">Human must still do</div>
        </div>
        {DT_ROWS.map((r) => (
          <div key={r.dt} className="dt-row grid grid-cols-[120px_1fr_1fr] border-t border-white/[0.06]">
            <div className="border-r border-white/[0.06] p-3">
              <div className="text-sm font-bold text-fog-100">{r.dt}</div>
              <div className="mt-1 text-[10px] text-fog-500">{r.maps}</div>
            </div>
            <div className="border-r border-white/[0.06] p-3">
              {r.ai.map((t) => <div key={t} className="mb-1 text-xs text-fog-400">· {t}</div>)}
            </div>
            <div className="p-3">
              {r.human.map((t) => <div key={t} className="mb-1 text-xs font-medium text-fog-300">· {t}</div>)}
            </div>
          </div>
        ))}
      </div>
    </DiagramFrame>
  );
}

/* ---------------- Future Team role grid ---------------- */
const ROLES = [
  { title: "Outcome Director", badge: "PM evolved", from: "PM + PO merged", owns: "the bet", desc: "Signal governance, hypothesis commits, success metrics, validation sign-off, deployment gates.", accent: "#8c89ff" },
  { title: "Experience Director", badge: "Design evolved", from: "UX + UI merged", owns: "design quality", desc: "Creative direction, design system governance, curation of AI-generated UX across all surfaces and states.", accent: "#6c69ff" },
  { title: "Agent Orchestrators ×2", badge: "Eng evolved", from: "Engineers", owns: "implementation correctness", desc: "Direct coding agents, review AI PRs, make architecture decisions, maintain engineering context.", accent: "#29d27e" },
  { title: "Quality Governor", badge: "QA evolved", from: "QA Engineer", owns: "the quality standard", desc: "Governs AI test coverage, monitors quality metrics, signs off DoD, watches for AI drift.", accent: "#ffb547" },
];

export function FutureTeam() {
  return (
    <DiagramFrame label="Diagram 6.4" title="The Future Product Team" subtitle="5 core roles. The CoP above as a shared capability layer. Every role is a judgment role — execution belongs to AI.">
      <div className="mb-4 rounded-2xl border border-indigo-500/30 bg-ink-900 p-4">
        <div className="text-sm font-bold text-indigo-300">Community of Practice — Product &amp; Design</div>
        <div className="mt-1 text-xs text-fog-400">Shared capability layer. Prompt libraries · context standards · AI governance · role playbooks · maturity assessment. Standards flow down; learnings flow up.</div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {ROLES.map((r) => (
          <div key={r.title} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <span className="absolute left-0 top-0 h-1 w-full" style={{ background: r.accent }} />
            <div className="flex items-start justify-between gap-3">
              <div className="text-base font-bold text-fog-100">{r.title}</div>
              <span className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold text-white" style={{ background: r.accent }}>{r.badge}</span>
            </div>
            <div className="mt-1 text-[11px] text-fog-500">From: {r.from}</div>
            <div className="mt-2 text-sm font-semibold" style={{ color: r.accent }}>Owns: {r.owns}</div>
            <p className="mt-1.5 text-xs leading-relaxed text-fog-400">{r.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-2xl border border-indigo-500/40 bg-indigo-500/[0.08] p-5">
        <div className="flex items-center gap-2">
          <span className="text-base font-bold text-fog-100">Context Architect</span>
          <span className="rounded-full bg-indigo-500 px-2 py-0.5 text-[10px] font-bold text-white">NEW ROLE</span>
        </div>
        <div className="mt-1 text-[11px] text-fog-500">Does not exist today. Highest-leverage role in the team.</div>
        <p className="mt-2 text-sm text-fog-300">Structures and maintains the context layer across all four knowledge domains. Determines the quality ceiling of every AI agent the team runs. The natural CoP connection point.</p>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
        {[["5", "Core roles, down from 10–12"], ["1", "Genuinely new role"], ["0", "Pure execution roles"]].map(([n, l]) => (
          <div key={l} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <div className="font-display text-3xl font-bold text-indigo-400">{n}</div>
            <div className="mt-1 text-[11px] text-fog-400">{l}</div>
          </div>
        ))}
      </div>
    </DiagramFrame>
  );
}

/* ---------------- Accountability chain ---------------- */
const CHAIN = [
  { id: "A1", name: "Signal Detection", dp: "Signal curation", owner: "Outcome Director", owns: "Signal quality. Wrong dismissals are judgment failures." },
  { id: "A2", name: "Hypothesis Gen.", dp: "Hypothesis commit / kill", owner: "Outcome Director", owns: "The bet — regardless of which framing AI generated." },
  { id: "A3", name: "Validation", dp: "Validation sufficiency", owner: "Outcome Director", owns: "Whether validation was thorough enough." },
  { id: "A4", name: "Specification", dp: "Spec sign-off", owner: "Outcome Director", owns: "Spec completeness. Ambiguity that causes rework is a sign-off failure." },
  { id: "S-A1", name: "Context-Driven Spec", dp: "Architecture decision", owner: "Agent Orchestrator", owns: "Architecture decisions — consequences last years." },
  { id: "S-A2", name: "Generative Design", dp: "Design + arch approval", owner: "Exp. Dir + Orchestrator", owns: "Design quality and architecture fit — co-owned." },
  { id: "S-A3", name: "Agentic Dev.", dp: "PR approval", owner: "Agent Orchestrator", owns: "Code correctness. Approving a PR transfers full accountability." },
  { id: "S-A4", name: "Autonomous Testing", dp: "Quality sign-off", owner: "Quality Governor", owns: "Quality standard. If tests pass but product fails, the standard failed." },
  { id: "A6", name: "Deployment", dp: "Irreversible decisions", owner: "Outcome Director", owns: "Rollout decisions. Humans own irreversibles." },
  { id: "A7", name: "Optimization", dp: "Strategic action", owner: "Outcome Director", owns: "Strategic direction. AI cannot commit bets autonomously." },
];

export function AccountabilityChain() {
  const ref = useScrollAnimation<HTMLDivElement>(({ root, q, gsap, reduced }) => {
    const rows = q(".chain-row");
    if (!rows.length) return;
    if (reduced) {
      gsap.set(rows, { opacity: 1, x: 0 });
      return;
    }
    gsap.set(rows, { opacity: 0, x: -20 });
    gsap.to(rows, { opacity: 1, x: 0, duration: 0.5, ease: "expo.out", stagger: 0.05, scrollTrigger: { trigger: root, start: "top 88%" } });
  });
  return (
    <DiagramFrame label="Diagram 6.5" title="The Accountability Chain" subtitle="AI generates. Humans decide. Accountability follows the decision point, not the artefact.">
      <div ref={ref} className="overflow-hidden rounded-2xl border border-white/10">
        {CHAIN.map((r) => (
          <div key={r.id} className="chain-row grid grid-cols-[88px_1fr_150px] items-center gap-3 border-b border-white/[0.06] bg-white/[0.02] p-3 last:border-0 hover:bg-indigo-500/[0.05]">
            <div>
              <div className="text-xs font-bold text-fog-100">{r.name}</div>
              <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-indigo-400">{r.id}</div>
            </div>
            <div className="inline-flex w-fit items-center gap-1.5 rounded-md bg-indigo-500/10 px-2 py-1 text-xs font-semibold text-indigo-300">◆ {r.dp}</div>
            <div>
              <div className="text-[9px] font-bold uppercase tracking-wide text-fog-500">Accountable</div>
              <div className="text-xs font-bold text-fog-100">{r.owner}</div>
              <div className="mt-0.5 text-[10px] leading-snug text-fog-400">{r.owns}</div>
            </div>
          </div>
        ))}
      </div>
    </DiagramFrame>
  );
}

/* ---------------- Value Realisation timeline ---------------- */
const VR = [
  { node: "Spec", label: "Benefits Register", title: "Benefits Register Created", desc: "Before any code, the Outcome Director documents the expected outcome, baseline, target, timeframe, and attribution. A spec without a benefits entry is incomplete." },
  { node: "Deploy", label: "Deploy Gate", title: "Benefits Register Reviewed", desc: "Baseline measurements locked in. The measurement window clock starts at go-live." },
  { node: "D30", label: "30-Day Check", title: "Adoption Tracking Review", desc: "Leading indicator. Is it being used? Tracking toward target? Any negative signals? A warning system, not a verdict." },
  { node: "D60", label: "60-Day Trend", title: "Course Correction Point", desc: "The last inexpensive intervention point. Continue, adjust, or sunset." },
  { node: "D90", label: "Value Verdict", title: "Formal Realisation Review", desc: "Did the feature deliver the promised outcome? Benefits Register measured against actuals." },
  { node: "Loop", label: "Feeds Signal Detection", title: "Closing the Loop", desc: "The verdict — positive or negative — becomes a first-class input to Signal Detection's next cycle. Failed outcomes are the most valuable signals." },
];

export function ValueRealisation() {
  const [active, setActive] = useState(0);
  return (
    <DiagramFrame label="Diagram 8.2" title="Value Realisation Framework" subtitle="From Benefits Register at Specification to Value Verdict at 90 days — then feeding Signal Detection.">
      <div className="mb-6 flex items-center justify-between gap-1 overflow-x-auto pb-2">
        {VR.map((s, i) => (
          <button key={s.node} onClick={() => setActive(i)} className="flex shrink-0 flex-col items-center gap-2" data-cursor="">
            <span className={cn("flex h-12 w-12 items-center justify-center rounded-full border-2 px-1 text-center text-[9px] font-bold leading-tight transition-all", i === active ? "border-indigo-400 bg-indigo-500 text-white" : "border-indigo-500/40 bg-indigo-500/10 text-indigo-300")}>{s.node}</span>
            <span className="text-[10px] text-fog-400">{s.label}</span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="rounded-2xl border border-indigo-500/25 bg-indigo-500/[0.06] p-6">
          <div className="eyebrow mb-1">{VR[active].label}</div>
          <div className="text-lg font-bold text-fog-100">{VR[active].title}</div>
          <p className="mt-2 body-base text-fog-300">{VR[active].desc}</p>
        </motion.div>
      </AnimatePresence>
    </DiagramFrame>
  );
}

/* ---------------- Release cycle comparison ---------------- */
export function ReleaseCycle() {
  const trad = ["2-week sprint = release container", "Sprint review = release decision", "Feature freeze = stabilisation", "Calendar date drives the ship", "\u201cWhat shipped this sprint?\u201d"];
  const agentic = ["Gate clearance = release trigger", "Quality threshold = release decision", "Signal maturity bar = stabilisation", "Token ROI crossover drives the ship", "\u201cGate throughput rate\u201d"];
  const pipeline = ["Spec Gate", "Generate", "🌑 Dark Launch", "🐦 Canary 1–5%", "Deploy Gate ◆", "🚀 Full Release"];
  return (
    <DiagramFrame label="Diagram 10.1" title="Release Cycle — From Calendar to Quality Threshold" subtitle="How release cadence changes when AI generates continuously.">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-error/25 bg-error/[0.06] p-5">
          <div className="eyebrow mb-3 text-error">Traditional Model</div>
          {trad.map((t) => <div key={t} className="mb-2 flex items-center gap-2 text-sm text-fog-300"><span className="h-1.5 w-1.5 rounded-full bg-error" />{t}</div>)}
        </div>
        <div className="rounded-2xl border border-indigo-500/30 bg-indigo-500/[0.06] p-5">
          <div className="eyebrow mb-3">Agentic Model</div>
          {agentic.map((t) => <div key={t} className="mb-2 flex items-center gap-2 text-sm text-fog-300"><span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />{t}</div>)}
        </div>
      </div>
      <div className="mt-4 rounded-2xl border border-white/10 bg-ink-900 p-5">
        <div className="eyebrow mb-3">The Agentic Release Pipeline</div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {pipeline.map((p, i) => (
            <div key={p} className="flex items-center gap-2">
              <span className="shrink-0 rounded-full border border-indigo-500/40 bg-indigo-500/10 px-3 py-1.5 text-[11px] font-semibold text-indigo-200">{p}</span>
              {i < pipeline.length - 1 && <span className="text-fog-600">→</span>}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 rounded-xl border-l-2 border-indigo-500 bg-indigo-500/[0.06] p-4 text-sm text-fog-300">
        <strong className="text-fog-100">The human role shift:</strong> from &ldquo;deciding when to release&rdquo; to &ldquo;setting the success threshold above which full rollout proceeds.&rdquo; Accountability for the bar — not the button.
      </div>
    </DiagramFrame>
  );
}

/* ---------------- Closed loop SVG ---------------- */
export function ClosedLoop() {
  return (
    <DiagramFrame label="Diagram 8.3" title="The Closed Loop — Optimization → Signal Detection" subtitle="Two signal streams. One compounding advantage.">
      <div className="flex justify-center">
        <svg viewBox="0 0 600 260" className="w-full max-w-2xl">
          <defs>
            <marker id="aP" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#6c69ff" /></marker>
            <marker id="aG" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#29d27e" /></marker>
          </defs>
          <circle cx="100" cy="130" r="48" fill="rgba(108,105,255,0.15)" stroke="#6c69ff" strokeWidth="2" />
          <text x="100" y="127" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">Signal</text>
          <text x="100" y="141" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">Detection</text>
          <circle cx="500" cy="130" r="48" fill="rgba(108,105,255,0.15)" stroke="#6c69ff" strokeWidth="2" />
          <text x="500" y="134" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">Optimization</text>
          <path d="M 148 110 Q 300 30 452 110" fill="none" stroke="#6c69ff" strokeWidth="2" markerEnd="url(#aP)" strokeDasharray="6,3" opacity="0.6" />
          <text x="300" y="50" textAnchor="middle" fill="#6c69ff" fontSize="10" fontWeight="600">Agentic PDLC stages: Signal Detection → Optimization</text>
          <path d="M 452 148 Q 300 220 148 148" fill="none" stroke="#6c69ff" strokeWidth="2.5" markerEnd="url(#aP)" />
          <text x="300" y="216" textAnchor="middle" fill="#a5a2ff" fontSize="10" fontWeight="600">Product signal stream (continuous)</text>
          <rect x="230" y="90" width="140" height="50" rx="8" fill="rgba(41,210,126,0.15)" stroke="#29d27e" strokeWidth="1.5" />
          <text x="300" y="109" textAnchor="middle" fill="#29d27e" fontSize="10" fontWeight="700">Value Realisation</text>
          <text x="300" y="124" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="9">30 / 60 / 90-day windows</text>
          <path d="M 230 118 L 152 125" fill="none" stroke="#29d27e" strokeWidth="2" markerEnd="url(#aG)" />
          <text x="188" y="106" textAnchor="middle" fill="#29d27e" fontSize="9" fontWeight="600">Business signals</text>
        </svg>
      </div>
      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {[
          ["Product Signal Stream", "Optimization → Signal Detection continuously. High frequency. Optimisation signals, usage patterns, A/B results. Tactical intelligence for micro-opportunities."],
          ["Business Signal Stream", "Value Realisation → Signal Detection at milestones. Strategy-scoped. Outcome verdicts, hypothesis validation records. Strategic intelligence."],
          ["Failure Signal Value", "Failed hypotheses are first-class inputs. They narrow the hypothesis space and prevent repeating expensive failures across quarters."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <div className="eyebrow mb-2">{t}</div>
            <p className="text-xs leading-relaxed text-fog-400">{d}</p>
          </div>
        ))}
      </div>
    </DiagramFrame>
  );
}

/* ---------------- Change Management ---------------- */
const RESISTANCE = [
  { stage: "Signal Detection", who: "Product Managers", fear: "\u201cAI can't understand our customers the way I do. Synthesising signals myself is how I build intuition.\u201d", reframe: "AI does the clustering; you do the judgment. The intuition you fear losing is exactly what you're now freed to apply — on 10× the signal volume, instead of drowning in transcripts." },
  { stage: "Generation", who: "Engineers", fear: "\u201cI don't trust AI-generated code. Reviewing it is slower than writing it myself, and my craft is being devalued.\u201d", reframe: "Your craft moves up a layer: from typing the code to governing its correctness. Override rate is your new signal. The architecture decisions — the part that actually compounds — are still yours, and now they're all you do." },
];

export function ChangeManagement() {
  const [active, setActive] = useState(0);
  const jcurve = [
    { label: "Before", h: 60, tone: "fog" },
    { label: "Week 1–2", h: 40, tone: "warn" },
    { label: "The Dip", h: 24, tone: "error" },
    { label: "Week 6–8", h: 50, tone: "warn" },
    { label: "Steady state", h: 92, tone: "success" },
  ];
  const toneBg: Record<string, string> = { fog: "bg-fog-600", warn: "bg-warn", error: "bg-error", success: "bg-success" };
  return (
    <DiagramFrame label="Diagram 10.3" title="Change Management & Adoption" subtitle="Resistance concentrates at two stages. The productivity J-curve is real — brief leadership before the dip, not after.">
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <div className="eyebrow mb-3">Where resistance concentrates</div>
          <div className="flex gap-2">
            {RESISTANCE.map((r, i) => (
              <button key={r.stage} onClick={() => setActive(i)} className={cn("flex-1 rounded-xl border p-3 text-left transition-colors", i === active ? "border-indigo-500 bg-indigo-500/15" : "border-white/12 bg-white/[0.03] hover:border-white/25")} data-cursor="">
                <div className="text-sm font-bold text-indigo-300">{r.stage}</div>
                <div className="text-[11px] text-fog-400">{r.who}</div>
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.22 }} className="mt-3 space-y-3">
              <div className="rounded-xl border border-error/25 bg-error/[0.06] p-4">
                <div className="text-[10px] font-bold uppercase tracking-wide text-error">The resistance</div>
                <p className="mt-1 text-sm italic text-fog-300">{RESISTANCE[active].fear}</p>
              </div>
              <div className="rounded-xl border border-success/25 bg-success/[0.06] p-4">
                <div className="text-[10px] font-bold uppercase tracking-wide text-success">The reframe</div>
                <p className="mt-1 text-sm text-fog-200">{RESISTANCE[active].reframe}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div>
          <div className="eyebrow mb-3">The productivity J-curve</div>
          <div className="flex h-48 items-end justify-between gap-2 rounded-xl border border-white/10 bg-ink-900 p-4">
            {jcurve.map((b) => (
              <div key={b.label} className="flex flex-1 flex-col items-center gap-2">
                <div className={cn("w-full rounded-t", toneBg[b.tone])} style={{ height: `${b.h}%` }} />
                <span className="text-center text-[9px] leading-tight text-fog-500">{b.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs leading-relaxed text-fog-400">Productivity dips before it climbs. Teams that quit do so in the dip — usually because no one warned them it was coming. Name the J-curve up front and it becomes an expected milestone instead of evidence of failure.</p>
        </div>
      </div>
    </DiagramFrame>
  );
}

/* ---------------- KPI Transition Map ---------------- */
const KPI_MAP: Record<string, { old: string; status: "retired" | "retained"; replacement: string; why: string }[]> = {
  Discovery: [
    { old: "PRDs written per quarter", status: "retired", replacement: "Spec acceptance rate", why: "AI generates PRDs in minutes. Count is no longer a quality signal." },
    { old: "User interviews conducted", status: "retired", replacement: "Signal source diversity", why: "Activity count. Doesn't capture insight quality or source bias." },
    { old: "Backlog size", status: "retired", replacement: "Hypothesis validation rate", why: "A large backlog is not valuable — a validated one is." },
  ],
  Delivery: [
    { old: "Story points", status: "retired", replacement: "Token ROI", why: "Measures human effort. Irrelevant when AI executes." },
    { old: "Sprint velocity", status: "retired", replacement: "Gate throughput rate", why: "Inflates with AI without reflecting value increase." },
    { old: "On-time delivery rate", status: "retired", replacement: "Benefits Register hit rate", why: "Rewards sandbagging and scope cuts over outcome delivery." },
  ],
  Quality: [
    { old: "Test coverage %", status: "retired", replacement: "First-pass acceptance rate", why: "Inflates when AI auto-generates tests. Coverage of wrong things is not quality." },
    { old: "MTTR", status: "retained", replacement: "MTTR (unchanged)", why: "Still a meaningful operational health signal." },
    { old: "Code review turnaround", status: "retired", replacement: "Override / context age correlation", why: "Measures speed, not quality. Fast reviews are not good reviews." },
  ],
  Product: [
    { old: "Feature adoption rate", status: "retired", replacement: "Benefits Register hit rate", why: "Usage ≠ value. Wide adoption that doesn't change behaviour is failure." },
    { old: "NPS / CSAT", status: "retained", replacement: "NPS/CSAT as Signal Detection input", why: "Sentiment remains valid — repositioned as discovery input." },
    { old: "Churn rate", status: "retired", replacement: "Optimization velocity + hit rate", why: "Lagging by months. Optimization detects precursors before churn surfaces." },
  ],
  Team: [
    { old: "Capacity utilisation", status: "retired", replacement: "Human decision cycle time", why: "AI absorbs execution capacity. Measuring utilisation optimises the wrong layer." },
    { old: "eNPS", status: "retained", replacement: "eNPS + ladder progression", why: "Wellbeing remains valid. Augmented with adoption ladder position." },
  ],
};

export function KpiTransition() {
  const cats = Object.keys(KPI_MAP);
  const [cat, setCat] = useState(cats[0]);
  return (
    <DiagramFrame label="Diagram 9.3" title="The KPI Transition Map" subtitle="Every traditional metric — retired, replaced, or retained.">
      <div className="mb-5 flex flex-wrap justify-center gap-2">
        {cats.map((c) => (
          <button key={c} onClick={() => setCat(c)} className={cn("rounded-lg border px-3.5 py-1.5 text-xs font-semibold transition-colors", c === cat ? "border-indigo-500 bg-indigo-500/20 text-fog-100" : "border-white/15 bg-white/[0.03] text-fog-400 hover:border-white/30")}>{c}</button>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {KPI_MAP[cat].map((r) => (
          <div key={r.old} className={cn("grid grid-cols-[1fr_20px_1fr_1.1fr] items-center gap-3 rounded-xl border p-3", r.status === "retired" ? "border-error/25 bg-error/[0.06]" : "border-success/25 bg-success/[0.05]")}>
            <div>
              <div className={cn("text-[9px] font-bold uppercase tracking-wide", r.status === "retired" ? "text-error" : "text-success")}>{r.status}</div>
              <div className="text-xs font-semibold text-fog-200">{r.old}</div>
            </div>
            <div className="text-center text-fog-600">→</div>
            <div>
              <div className="text-[9px] font-bold uppercase tracking-wide text-indigo-400">Replacement</div>
              <div className="text-xs font-semibold text-indigo-200">{r.replacement}</div>
            </div>
            <div className="text-[11px] leading-snug text-fog-400">{r.why}</div>
          </div>
        ))}
      </div>
    </DiagramFrame>
  );
}
