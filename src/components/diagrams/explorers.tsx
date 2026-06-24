"use client";

import { DiagramFrame } from "./DiagramFrame";
import { TabExplorer, type TabItem } from "./TabExplorer";
import { StageGrid, type Stage } from "./StageGrid";

const PDLC_STAGES: Stage[] = [
  { num: "01", name: "Discover", q: "What is actually happening out there?", detail: "Teams gather signals from customers, markets, and analytics. Often compressed or skipped under delivery pressure — the most common root cause of building the wrong thing." },
  { num: "02", name: "Define", q: "What exactly are we solving and for whom?", detail: "Raw signals synthesised into a clear problem statement. Affinity mapping, JTBD, HMW framing, personas. The quality of this stage determines quality downstream." },
  { num: "03", name: "Validate", q: "Is our approach correct before we commit?", detail: "Testing assumptions before committing resources. The most commonly skipped stage — and the most expensive to skip." },
  { num: "04", name: "Prioritize", q: "What should we build next and why?", detail: "Deciding what to build and in what order. RICE, MoSCoW, Kano, OKR alignment. Output: a committed roadmap item with a business case." },
  { num: "05", name: "Build", q: "How do we design and engineer it?", detail: "Where the SDLC operates — its own six stages. The only PDLC stage containing a sub-lifecycle. See Section 1.3." },
  { num: "06", name: "Launch", q: "How do we get this to the right users?", detail: "Release strategy, feature flags, staged rollout. In agentic teams, launch becomes continuous rather than an event." },
  { num: "07", name: "Measure", q: "Did it work? What actually happened?", detail: "Outcomes measured against the original hypothesis. Requires baseline metrics established at Stage 04." },
  { num: "08", name: "Optimize", q: "How do we make it better?", detail: "A/B testing, refinement, performance. The transition from Measure to Optimize is where most teams lose discipline." },
  { num: "09", name: "Retire", q: "When and how do we stop?", detail: "Sunsetting features that no longer serve users. In agentic systems, clear deprecation criteria are essential — AI generates at speed." },
];

const SDLC_STAGES: Stage[] = [
  { num: "S1", name: "Requirements", q: "What are we building and what does done look like?", detail: "User stories, acceptance criteria, Definition of Done. Context lost here is never recovered downstream — the root cause of most rework." },
  { num: "S2", name: "System Design", q: "How is the system structured?", detail: "Architecture, UX, API contracts, data model. Decisions here are hardest to change and least often documented. ADRs are critical." },
  { num: "S3", name: "Implementation", q: "How do we write and review the code?", detail: "Feature branches, PRs, code review. Most tooled for AI today. Also most at risk of amplifying upstream errors at speed." },
  { num: "S4", name: "Testing & QA", q: "Does it meet the acceptance criteria?", detail: "Unit, integration, E2E, regression. In agentic teams, test scaffolds are generated from ACs before production code — shifting quality left." },
  { num: "S5", name: "Deployment", q: "How do we safely get this to production?", detail: "CI/CD, staging, feature flags, rollback. In most teams: highest-anxiety, lowest-automated. In agentic teams: the richest signal collection point." },
  { num: "S6", name: "Maintenance", q: "How do we keep it healthy and learn?", detail: "Monitoring, bug fixing, optimisation. Traditional: reactive. Agentic: proactive — AI detects anomalies before users report them." },
];

export function StandardPdlc() {
  return (
    <StageGrid
      label="Diagram 1.2"
      title="The Standard PDLC — 9 Stages"
      subtitle="Click any stage. Build (05) is the only stage that contains its own sub-lifecycle."
      stages={PDLC_STAGES}
      columns={3}
    />
  );
}

export function SdlcNested() {
  return (
    <StageGrid
      label="Diagram 1.3"
      title="The Standard SDLC — Nested Inside Build"
      subtitle="The SDLC is a sub-lifecycle inside PDLC stage 05. Every stage inherits the quality of the PDLC above it."
      stages={SDLC_STAGES}
      columns={3}
    />
  );
}

const PRODUCTOPS: TabItem[] = [
  { key: "pipeline", icon: "📡", label: "Pipeline Health", title: "Pipeline Health Monitoring", body: "Tracks operational signals across all AI stages — cycle time, human override rate, token ROI, and context staleness. Flags anomalies before they become systemic failures. Asks: is the machine running correctly?", tags: ["Stage cycle time", "Human override rate", "Token ROI per stage", "Context staleness score"] },
  { key: "context", icon: "📚", label: "Context Ops", title: "Context Layer Governance", body: "Operates the day-to-day processes within the architecture the Context Architect defines. Schedules reviews, monitors file access, enforces Git commit discipline, runs context onboarding.", tags: ["Quarterly deep reviews", "Monthly currency checks", "Access pattern monitoring", "Git commit discipline"] },
  { key: "tooling", icon: "🔧", label: "Tooling", title: "Tooling & Prompt Standardisation", body: "Maintains the approved toolchain and prompt library. Versions prompts, retires underperforming patterns, promotes validated ones, partners with the CoP to propagate best-in-class approaches.", tags: ["Approved model registry", "Prompt versioning", "Pattern library", "Deprecation protocol"] },
  { key: "loop", icon: "🔄", label: "Feedback Loop", title: "Feedback Loop Integrity", body: "Verifies on a cadence that Optimization signals are feeding into Signal Detection. Resists the pull toward 'next feature' on behalf of the team. Owns the mechanism that makes the PDLC self-improving.", tags: ["Optimization → Signal Detection verification", "Signal traceability", "Loop cadence review", "Learning capture"] },
  { key: "crossteam", icon: "🤝", label: "Cross-Team", title: "Cross-Team Coordination", body: "Translates between CoP strategy and team operations in both directions. Surfaces team-specific patterns for CoP investigation. Operationalises CoP standards. The connective tissue of the framework.", tags: ["CoP escalation path", "Standards operationalisation", "Portfolio patterns", "Team health dashboard"] },
];

export function ProductOpsDomains() {
  return (
    <DiagramFrame label="Diagram 8.1" title="ProductOps — Five Operational Domains" subtitle="Click any domain. ProductOps sits within the CoP as a shared capability — Platform Engineering for product delivery.">
      <TabExplorer items={PRODUCTOPS} columns={5} />
    </DiagramFrame>
  );
}

const KPI: TabItem[] = [
  { key: "a1", icon: "📡", label: "Signal Detection", title: "Signal Detection (A1)", body: "Signal-to-hypothesis conversion rate (20–40%): too high = over-permissive filter, too low = noise. Signal source diversity (≥4): single-source dominance creates blind spots. Signal freshness (<14 days): stale signals produce outdated hypotheses.", tags: ["Conversion rate 20–40%", "Source diversity ≥4", "Freshness <14 days"] },
  { key: "a2", icon: "🧠", label: "Hypothesis", title: "Hypothesis Generation (A2)", body: "Hypothesis validation rate (40–60%, not higher-is-better): 90% pass = validation too lenient. Kill rate (trending up early): a rising kill rate is a positive governance signal. Generation cost: should decrease as the context layer matures.", tags: ["Validation rate 40–60%", "Kill rate ↑", "Generation cost ↓"] },
  { key: "a3", icon: "🔬", label: "Validation", title: "Validation (A3)", body: "Validation confidence score (≥ team threshold). Validation cycle time (↓): long cycles despite AI = process friction. False positive rate post-90-day (<20%): the quality metric for validation itself.", tags: ["Confidence ≥ threshold", "Cycle time ↓", "False positive <20%"] },
  { key: "a4", icon: "📝", label: "Specification", title: "Specification (A4)", body: "Spec acceptance rate (>80%): low = context gap or Validation → Specification handoff loss. Benefits Register completion (100%, non-negotiable). Spec-to-outcome alignment: tightens over cycles as the team learns.", tags: ["Acceptance >80%", "Benefits 100%", "Alignment ↑"] },
  { key: "a5", icon: "⚙️", label: "Generation", title: "Generation (A5)", body: "Human override rate (<20%, ↓): the single most important generation quality signal. Token ROI (↑): value at 90-day verdict per token. First-pass acceptance (>70%): quality of the initial generation.", tags: ["Override <20%", "Token ROI ↑", "First-pass >70%"] },
  { key: "a67", icon: "🚀", label: "Deploy & Optimise", title: "Deployment & Optimisation (A6–A7)", body: "Deployment frequency (↑). Rollback rate (<5%): more important in agentic — AI deployments fail less predictably. Optimization signal velocity (↑): how quickly Optimization surfaces actionable opportunities.", tags: ["Deploy frequency ↑", "Rollback <5%", "Optimization velocity ↑"] },
  { key: "vr", icon: "🎯", label: "Value", title: "Value Realisation", body: "Benefits Register hit rate (>60%): the headline outcome metric. Realisation debt (→ zero): deployed features never reviewed. Business case accuracy (↑): a team whose accuracy improves is a team that is learning.", tags: ["Hit rate >60%", "Realisation debt → 0", "Case accuracy ↑"] },
  { key: "ctx", icon: "📚", label: "Context", title: "Context Layer Health", body: "Context staleness score (<30 days weighted). Context coverage (↑). Override rate / context age correlation: the most powerful diagnostic — proves the link between context quality and generation quality.", tags: ["Staleness <30 days", "Coverage ↑", "Override/age correlation"] },
];

export function KpiFramework() {
  return (
    <DiagramFrame label="Diagram 9.1" title="The Agentic PDLC KPI Framework" subtitle="Select a stage. Retired: story points · sprint velocity · lines of code · test coverage % · PRDs/quarter.">
      <TabExplorer items={KPI} columns={4} />
    </DiagramFrame>
  );
}

const QUALITY: TabItem[] = [
  { key: "context", icon: "📚", label: "Context", title: "Context Quality", body: "Whether the information feeding the AI is accurate, current, and comprehensive. The upstream dimension — everything downstream is only as good as the context. Poor context quality is invisible until it surfaces as generation failures.", meta: [{ label: "Owner", value: "Context Architect" }, { label: "Monitored by", value: "ProductOps" }, { label: "Signal", value: "Context staleness" }] },
  { key: "prompt", icon: "💬", label: "Prompt", title: "Prompt Quality", body: "Whether stage-level AI instructions produce consistent outputs across users and contexts. Diagnostic: variance in override rate across team members. If one person accepts and another overrides, the problem may be prompting.", meta: [{ label: "Owner", value: "ProductOps" }, { label: "Signal", value: "Override variance by user" }] },
  { key: "decision", icon: "⚖️", label: "Decision", title: "Decision Quality", body: "Whether human gate decisions are made with the right information, by the right person, at the right moment. Approving under time pressure without reviewing is not decision quality. Proxy: accountability gap rate.", meta: [{ label: "Owner", value: "Outcome Director" }, { label: "Signal", value: "Accountability gap rate" }] },
  { key: "signal", icon: "📡", label: "Signal", title: "Signal Quality", body: "Whether Signal Detection inputs are representative, unbiased, and fresh. Single-source dominance produces skewed discovery. Signal quality issues compound silently — the product optimises for a subset while Optimization shows positive numbers.", meta: [{ label: "Owner", value: "Outcome Director" }, { label: "Signal", value: "Source diversity score" }] },
  { key: "outcome", icon: "🎯", label: "Outcome", title: "Outcome Quality", body: "The terminal dimension. Did the things we built achieve what we said they would? Measured through Value Realisation. The only dimension that cannot be gamed by improving a proxy — it measures the actual business result.", meta: [{ label: "Owner", value: "Outcome Director" }, { label: "Signal", value: "Benefits Register hit rate" }] },
];

export function QualityDimensions() {
  return (
    <DiagramFrame label="Diagram 9.2" title="Five Quality Dimensions" subtitle="Each needs its own measurement. Together they answer: is the system getting smarter, or just running faster?">
      <TabExplorer items={QUALITY} columns={5} />
    </DiagramFrame>
  );
}

const DOCS: TabItem[] = [
  { key: "context", icon: "📁", label: "Context Docs", title: "Context Documentation", body: "Product vision, ADRs, persona summaries, design principles, constraint catalogues. Version-controlled in Git. The quality of every AI generation depends on this layer. Failure mode: context drift — accurate when written, misleading six months later.", meta: [{ label: "Owner", value: "Context Architect" }, { label: "Cadence", value: "Continuous" }, { label: "Reader", value: "AI agents" }] },
  { key: "decision", icon: "⚖️", label: "Decision Docs", title: "Decision Documentation", body: "Records options considered, information available, and reasoning at each human gate point. Proves accountability was exercised. Two paragraphs is enough — but it must be written at the moment of decision. Failure mode: verbal decisions leave no trace.", meta: [{ label: "Owner", value: "Decision maker" }, { label: "Cadence", value: "At each gate" }, { label: "Reader", value: "Humans / audit" }] },
  { key: "artifact", icon: "📋", label: "Artifact Docs", title: "Artifact Documentation", body: "API refs, component specs, test reports, runbooks. AI generates most automatically; the human role shifts from writing to verifying. Failure mode: unreviewed AI artifact docs create false confidence and misdirect anyone who relies on them.", meta: [{ label: "Owner", value: "Quality Governor" }, { label: "Cadence", value: "Post-generation" }, { label: "Reader", value: "Developers" }] },
];

export function Documentation() {
  return (
    <DiagramFrame label="Diagram 10.2" title="Documentation as Infrastructure" subtitle="From output to input — the inversion that changes everything. Update the context layer before closing the task.">
      <TabExplorer items={DOCS} columns={3} />
    </DiagramFrame>
  );
}

const DFV: TabItem[] = [
  { key: "d", icon: "💙", label: "Desirability", title: "Desirability — Are we building something people genuinely want?", body: "Leading: signal source diversity (Signal Detection), hypothesis validation rate (Validation), Validation false positive rate. Lagging: NPS/CSAT as Signal Detection input, D30 adoption vs target, outcome quality score. A feature can pass every internal gate and still fail the desirability test.", tags: ["Signal diversity", "Validation rate", "NPS/CSAT", "D30 adoption", "Outcome quality"] },
  { key: "f", icon: "⚙️", label: "Feasibility", title: "Feasibility — Can we build it well?", body: "Leading: human override rate, first-pass acceptance, context staleness (engineering). Lagging: rollback rate, MTTR. A rising override rate is an early warning that the gap between spec and what AI can generate is widening.", tags: ["Override rate", "First-pass acceptance", "Context staleness", "Rollback rate", "MTTR"] },
  { key: "v", icon: "📈", label: "Viability", title: "Viability — Is it worth building?", body: "Leading: Benefits Register completion, token ROI, gate throughput. Lagging: Benefits Register hit rate, business case accuracy, realisation debt. Token ROI connects the cost of the operation to its commercial return.", tags: ["Benefits completion", "Token ROI", "Hit rate", "Business case accuracy", "Realisation debt"] },
];

export function Dfv() {
  return (
    <DiagramFrame label="Diagram 9.4" title="Desirability · Feasibility · Viability" subtitle="A cross-cutting lens across the entire KPI framework. Intersections — Spec acceptance (D×F), Benefits quality (D×V), Token ROI (F×V) — are the most diagnostic.">
      <TabExplorer items={DFV} columns={3} />
    </DiagramFrame>
  );
}
