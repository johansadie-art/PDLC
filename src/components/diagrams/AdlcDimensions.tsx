"use client";

import { useState } from "react";
import { DiagramFrame } from "./DiagramFrame";
import { cn } from "@/lib/cn";

/** The Manual → Agentic maturity scale, colour-coded L1–L5. */
const SCALE = [
  { label: "Manual", color: "#ff5470" },
  { label: "Tool-assisted", color: "#ff9f45" },
  { label: "AI-augmented", color: "#ffd23f" },
  { label: "AI-integrated", color: "#29d27e" },
  { label: "Agentic", color: "#a78bfa" },
];

const INDIGO = "#8c89ff";

type Kind = "strategic" | "pillar" | "handover" | "governance";

type Dim = {
  key: string;
  n: number;
  title: string;
  role?: string;
  subtitle?: string;
  items?: string[];
  scale: string[];
  notes: string[];
  kind: Kind;
  selected: number;
};

const STRATEGIC: Dim = {
  key: "strategic",
  n: 1,
  title: "Strategic AI Solution",
  role: "AI Solution Strategist (Journey)",
  subtitle:
    "How strategically the solution drives client value — delivering a business-level AI journey, not just point automation.",
  scale: ["No AI", "AI Augmented", "AI Integrated", "Agentic"],
  notes: [
    "Value comes from conventional software; AI plays no role.",
    "AI features bolted onto a traditional solution as point automations.",
    "AI is woven through the journey, delivering business-level value end to end.",
    "The solution is an autonomous AI journey that pursues client outcomes on its own.",
  ],
  kind: "strategic",
  selected: 3,
};

const PDLC: Dim = {
  key: "pdlc",
  n: 2,
  title: "PDLC",
  role: "AI Value Creator",
  subtitle: "What & why → up to user stories",
  items: [
    "Market research",
    "Ideation & brainstorming",
    "Discovery & validation",
    "Roadmap & prioritization",
    "User stories",
  ],
  scale: SCALE.map((s) => s.label),
  notes: [
    "Periodic, hand-run discovery; PMs author every artefact.",
    "Analytics and survey tools speed research; humans synthesise.",
    "AI drafts summaries and framings; humans direct each step.",
    "Continuous discovery, AI synthesizes signals into roadmap input.",
    "Always-on signal detection autonomously proposes and ranks opportunities.",
  ],
  kind: "pillar",
  selected: 4,
};

const HANDOVER_PS: Dim = {
  key: "h-ps",
  n: 3,
  title: "PDLC → SDLC handover",
  scale: ["Informal", "Templated", "Enriched", "Automated", "Seamless"],
  notes: [
    "Specs cross as docs or tickets; tribal context is lost in transit.",
    "Standard spec templates make handovers consistent but still manual.",
    "Specs carry structured context and acceptance criteria agents can read.",
    "The spec freeze automatically generates engineering-ready artefacts.",
    "Product intent flows into build with no lossy handoff at all.",
  ],
  kind: "handover",
  selected: 3,
};

const SDLC: Dim = {
  key: "sdlc",
  n: 4,
  title: "SDLC",
  role: "Builders (Multi-dimensional)",
  subtitle: "User stories → production deployment",
  items: [
    "Planning & design",
    "Implementation",
    "Testing & QA",
    "Code review",
    "CI/CD & release",
  ],
  scale: SCALE.map((s) => s.label),
  notes: [
    "Engineers write, review, and ship all code by hand.",
    "Autocomplete, linters, and CI assist; humans own each stage.",
    "AI generates code and tests under close human review.",
    "Multi-step agents own features end-to-end with human gates.",
    "Agents plan, build, test, and deploy within earned policy bounds.",
  ],
  kind: "pillar",
  selected: 4,
};

const HANDOVER_SI: Dim = {
  key: "h-si",
  n: 5,
  title: "SDLC → Infra handover",
  scale: ["Manual", "AI-assisted", "AI-generated", "Auto-inferred", "Agentic"],
  notes: [
    "Release config and infra wiring handcrafted per deploy.",
    "AI suggests pipeline and config changes for human approval.",
    "Deployment manifests and IaC generated from the build.",
    "Release requirements inferred automatically from the service.",
    "Build-to-release crossing is fully autonomous within policy.",
  ],
  kind: "handover",
  selected: 5,
};

const INFRA: Dim = {
  key: "infra",
  n: 6,
  title: "Infrastructure",
  subtitle: "Cloud production integration",
  items: [
    "Provisioning & IaC",
    "Pipeline automation",
    "Monitoring & observability",
    "Incident response",
    "Security & compliance",
  ],
  scale: SCALE.map((s) => s.label),
  notes: [
    "Provisioning and incident response handled by hand.",
    "Scripts and dashboards assist ops; humans operate them.",
    "AI flags anomalies and suggests scaling for human action.",
    "Predictive operations, autonomous remediation with approval.",
    "Self-healing infrastructure provisions and remediates autonomously.",
  ],
  kind: "pillar",
  selected: 4,
};

const GOVERNANCE: Dim = {
  key: "gov",
  n: 7,
  title: "ADLC Governance",
  scale: SCALE.map((s) => s.label),
  notes: [
    "Oversight is ad hoc; quality depends on individuals.",
    "Checklists and tools structure governance; humans enforce.",
    "Eval gates in CI surface risk; humans decide.",
    "Agents own work end to end with human gates and audit trails.",
    "Zero-touch within earned classes; the gate self-expands as the record grows.",
  ],
  kind: "governance",
  selected: 4,
};

const PILLARS = [PDLC, HANDOVER_PS, SDLC, HANDOVER_SI, INFRA];
const ALL = [STRATEGIC, ...PILLARS, GOVERNANCE];

function colorFor(dim: Dim, level: number) {
  if (dim.kind === "strategic") return INDIGO;
  return SCALE[Math.min(level - 1, SCALE.length - 1)].color;
}

function RoleTag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-indigo-300">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-4.2 0-7 2.1-7 5v1h14v-1c0-2.9-2.8-5-7-5z" />
      </svg>
      {children}
    </span>
  );
}

type ScaleProps = {
  dim: Dim;
  value: number;
  onSelect: (level: number) => void;
};

function noteFor(dim: Dim, lv: number) {
  return `L${lv} · ${dim.scale[lv - 1]} — ${dim.notes[lv - 1]}`;
}

/** Horizontal chip scale (strategic + governance). */
function ChipScale({ dim, value, onSelect }: ScaleProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {dim.scale.map((label, i) => {
        const level = i + 1;
        const on = value === level;
        const c = colorFor(dim, level);
        return (
          <button
            key={label}
            onClick={() => onSelect(level)}
            data-cursor=""
            className={cn(
              "rounded-md border px-3 py-1.5 text-xs font-semibold transition-colors",
              on
                ? "text-fog-100"
                : "border-white/12 bg-white/[0.03] text-fog-400 hover:border-white/25",
            )}
            style={on ? { borderColor: c, background: `${c}22`, color: c } : undefined}
          >
            {level} · {label}
          </button>
        );
      })}
    </div>
  );
}

/** Vertical labelled scale (handovers). */
function VerticalScale({ dim, value, onSelect }: ScaleProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {dim.scale.map((label, i) => {
        const level = i + 1;
        const on = value === level;
        const c = colorFor(dim, level);
        return (
          <button
            key={label}
            onClick={() => onSelect(level)}
            data-cursor=""
            className={cn(
              "flex items-center gap-2 rounded-md border px-2.5 py-1.5 text-left text-[11px] font-medium transition-colors",
              on
                ? "text-fog-100"
                : "border-white/12 bg-white/[0.03] text-fog-400 hover:border-white/25",
            )}
            style={on ? { borderColor: c, background: `${c}1f`, color: c } : undefined}
          >
            <span className="font-bold opacity-80">{level}</span>
            {label}
          </button>
        );
      })}
    </div>
  );
}

/** Numbered 1–5 boxes (pillars). */
function NumberScale({ dim, value, onSelect }: ScaleProps) {
  return (
    <div className="flex gap-1.5">
      {dim.scale.map((_, i) => {
        const level = i + 1;
        const on = value === level;
        const c = colorFor(dim, level);
        return (
          <button
            key={level}
            onClick={() => onSelect(level)}
            data-cursor=""
            className={cn(
              "flex h-8 flex-1 items-center justify-center rounded-md border text-xs font-bold transition-colors",
              on
                ? "text-fog-100"
                : "border-white/12 bg-white/[0.03] text-fog-500 hover:border-white/25",
            )}
            style={on ? { borderColor: c, background: `${c}22`, color: c } : undefined}
          >
            {level}
          </button>
        );
      })}
    </div>
  );
}

function Pillar({ dim, value, onSelect }: ScaleProps) {
  return (
    <div className="flex flex-col rounded-xl border border-white/10 bg-ink-900/70 p-4">
      <div className="flex items-start justify-between gap-2">
        <h4 className="font-display text-lg font-bold text-fog-100">{dim.title}</h4>
        {dim.role && <RoleTag>{dim.role}</RoleTag>}
      </div>
      {dim.subtitle && (
        <div className="mt-1 text-xs font-semibold text-indigo-300">
          {dim.subtitle}
        </div>
      )}
      <ul className="mt-3 space-y-1">
        {dim.items?.map((it) => (
          <li key={it} className="flex items-center gap-2 text-xs text-fog-400">
            <span className="h-1 w-1 rounded-full bg-indigo-400/70" />
            {it}
          </li>
        ))}
      </ul>
      <div className="mt-4 text-[9px] font-bold uppercase tracking-wider text-fog-600">
        Dimension {dim.n} — {dim.title} maturity
      </div>
      <div className="mt-1.5">
        <NumberScale dim={dim} value={value} onSelect={onSelect} />
      </div>
      <p className="mt-3 text-[11px] leading-snug text-fog-400">
        {noteFor(dim, value)}
      </p>
    </div>
  );
}

function Handover({ dim, value, onSelect }: ScaleProps) {
  return (
    <div className="flex flex-col rounded-xl border border-white/10 bg-ink-900/40 p-3">
      <div className="text-center text-lg text-fog-500">→</div>
      <div className="mt-1 text-center text-xs font-bold leading-tight text-fog-200">
        {dim.title}
      </div>
      <div className="mb-2 mt-0.5 text-center text-[9px] font-bold uppercase tracking-wider text-fog-600">
        Dimension {dim.n}
      </div>
      <VerticalScale dim={dim} value={value} onSelect={onSelect} />
    </div>
  );
}

export function AdlcDimensions() {
  const [levels, setLevels] = useState<Record<string, number>>(
    Object.fromEntries(ALL.map((d) => [d.key, d.selected])),
  );
  const set = (key: string, level: number) =>
    setLevels((p) => ({ ...p, [key]: level }));

  return (
    <DiagramFrame
      label="The Delivery Chain"
      title="The Seven Dimensions of the ADLC"
      subtitle="PDLC and SDLC are two pillars inside a larger chain — strategy on top, the delivery pillars and handovers in the middle, all wrapped by ADLC governance. Click any level to score a dimension."
    >
      {/* Governance wrapper */}
      <div className="relative rounded-2xl border-2 border-indigo-500/40 bg-indigo-500/[0.03] p-4 sm:p-5">
        <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <span className="w-fit rounded-full border border-indigo-500/50 bg-ink-900 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-300">
            ADLC Governance — Dimension 7
          </span>
          <span className="text-[11px] italic text-fog-500">
            End-to-end management of the ADLC across human and agentic components
          </span>
        </div>

        {/* Dimension 1 — Strategic */}
        <div className="rounded-xl border border-white/10 bg-ink-900/70 p-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <div className="flex items-center gap-2">
                <h4 className="font-display text-lg font-bold text-fog-100">
                  {STRATEGIC.title}
                </h4>
                <RoleTag>{STRATEGIC.role!}</RoleTag>
                <span className="ml-auto text-[9px] font-bold uppercase tracking-wider text-fog-600 lg:hidden">
                  Dimension 1
                </span>
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-fog-400">
                {STRATEGIC.subtitle}
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 lg:items-end">
              <span className="hidden text-[9px] font-bold uppercase tracking-wider text-fog-600 lg:block">
                Dimension 1
              </span>
              <ChipScale
                dim={STRATEGIC}
                value={levels[STRATEGIC.key]}
                onSelect={(lv) => set(STRATEGIC.key, lv)}
              />
            </div>
          </div>
          <p className="mt-3 text-[11px] leading-snug text-fog-400">
            {noteFor(STRATEGIC, levels[STRATEGIC.key])}
          </p>
        </div>

        {/* Delivery chain: pillars + handovers */}
        <div className="mt-3 grid gap-3 lg:grid-cols-[1fr_0.72fr_1fr_0.72fr_1fr]">
          {PILLARS.map((dim) =>
            dim.kind === "pillar" ? (
              <Pillar
                key={dim.key}
                dim={dim}
                value={levels[dim.key]}
                onSelect={(lv) => set(dim.key, lv)}
              />
            ) : (
              <Handover
                key={dim.key}
                dim={dim}
                value={levels[dim.key]}
                onSelect={(lv) => set(dim.key, lv)}
              />
            ),
          )}
        </div>

        {/* Dimension 7 — Governance scale */}
        <div className="mt-3 rounded-xl border border-white/10 bg-ink-900/70 p-4">
          <div className="mb-2 text-[9px] font-bold uppercase tracking-wider text-fog-600">
            Dimension 7 — ADLC Governance
          </div>
          <ChipScale
            dim={GOVERNANCE}
            value={levels[GOVERNANCE.key]}
            onSelect={(lv) => set(GOVERNANCE.key, lv)}
          />
          <p className="mt-3 text-[11px] leading-snug text-fog-400">
            {noteFor(GOVERNANCE, levels[GOVERNANCE.key])}
          </p>
        </div>
      </div>

      {/* Scale legend */}
      <div className="mt-5 flex flex-wrap items-center gap-2.5">
        <span className="text-[10px] font-bold uppercase tracking-wider text-fog-600">
          Scale
        </span>
        {SCALE.map((s, i) => (
          <span
            key={s.label}
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold"
            style={{ borderColor: `${s.color}55`, color: s.color, background: `${s.color}12` }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: s.color }}
            />
            {i + 1} · {s.label}
          </span>
        ))}
      </div>
    </DiagramFrame>
  );
}
