import type { Part } from "../types";

export const part3: Part = {
  index: "03",
  id: "part-agentic-sdlc",
  title: "The Agentic SDLC",
  subtitle:
    "Inside Generation (A5), six stages — Context-Driven Specification to Autonomous Operations — turn a frozen spec into running, monitored software. AI generates and executes; humans direct, judge, and govern.",
  sections: [
    {
      id: "agentic-sdlc-overview",
      marker: "3.1",
      title: "Overview — Context-Driven Specification → Autonomous Operations",
      eyebrow: "Part 3 — The Agentic SDLC",
      blocks: [
        {
          type: "lead",
          text: "The Agentic SDLC is the six-stage sub-lifecycle that executes inside Generation (A5). Each stage transforms its standard equivalent in the same way: AI handles generation and execution; humans provide direction, judgment, and governance. Once the spec enters Context-Driven Specification, the question of what is settled — every SDLC stage is an execution question.",
        },
        {
          type: "table",
          highlightLast: true,
          headers: ["Agentic Stage", "Standard Equivalent", "Human Role", "Token ROI"],
          rows: [
            ["Context-Driven Spec (S-A1)", "S1 Requirements", "Review + approve", "High"],
            ["Generative Design (S-A2)", "S2 System Design", "Curate + direct", "Very high"],
            ["Agentic Development (S-A3)", "S3 Implementation", "Orchestrate agents", "Highest"],
            ["Autonomous Testing (S-A4)", "S4 Testing & QA", "Govern quality", "High"],
            ["Continuous Deployment (S-A5)", "S5 Deployment", "Set policy", "High"],
            ["Autonomous Operations (S-A6)", "S6 Maintenance", "Strategy + ethics", "Medium"],
          ],
        },
      ],
    },
    {
      id: "a4-vs-sa1",
      marker: "3.2",
      title: "Specification (A4) vs Context-Driven Specification (S-A1) — The Critical Distinction",
      blocks: [
        {
          type: "lead",
          text: "The most commonly confused boundary in the agentic model. Both Specification (A4) and Context-Driven Specification (S-A1) involve the word \"specification.\" Both involve AI-generated structured artefacts. They are not the same stage.",
        },
        {
          type: "callout",
          tone: "indigo",
          title: "The one-sentence distinction",
          text: "Specification asks: \"Are we building the right thing?\" — Context-Driven Specification asks: \"Are we building the thing right?\"",
        },
        {
          type: "cards",
          columns: 2,
          items: [
            { title: "Specification — Product level", body: "Owned by the PM. Inputs: the validated hypothesis and the context layer's product, customer, and governance knowledge. Outputs: human-readable narrative and structured product assertions. It does not name files or choose implementation approaches." },
            { title: "Context-Driven Specification — Implementation level", body: "Owned by engineers. Input: the Specification output plus codebase patterns, ADRs, infra context. Outputs name specific files, classes, services. It chooses the implementation approach, drafts the API contract, models schema changes, and generates the coding-agent prompt." },
          ],
        },
        {
          type: "prose",
          text: "Specification story: *\"As an enterprise ops user, I want to schedule a nightly bulk export so I can meet compliance deadlines without manual intervention.\"* — Context-Driven Specification translation: *\"Extend ExportService with async SQS job. Add scheduled_at, format, notify_on_failure to exports table. Raise enterprise rate limit to 1000 req/min. 5 story points.\"*",
        },
        {
          type: "prose",
          text: "Specification is expensive in **human judgment time**. Context-Driven Specification is expensive in **tokens**. The quality of the Specification output determines the token efficiency of Context-Driven Specification.",
        },
      ],
    },
    {
      id: "sa1",
      marker: "3.3",
      title: "Context-Driven Specification (S-A1)",
      blocks: [
        {
          type: "lead",
          text: "Context-Driven Specification takes the committed Specification (A4) artefact from the context layer and translates it into engineering-ready implementation artifacts — with enough precision that a coding agent can act on it without asking a single clarifying question.",
        },
        {
          type: "list",
          items: [
            { label: "Implementation approach", text: "Which existing services, classes, and patterns to extend." },
            { label: "Sub-tasks", text: "Specification stories decomposed into migration, service change, API endpoint, test scaffold, docs." },
            { label: "API contract", text: "Endpoint paths, methods, request/response schemas, error codes." },
            { label: "Data model changes", text: "Specific schema alterations, indexes, migration scripts." },
            { label: "Sequence diagram", text: "Which services call which, in what order, with what data." },
            { label: "Security & performance notes", text: "Auth, rate limits, compliance (HIPAA, GDPR), timeouts, cost estimates." },
          ],
        },
        {
          type: "callout",
          tone: "indigo",
          title: "ADRs as institutional memory",
          text: "Every architecture decision at Context-Driven Specification is documented as an ADR and written to the context layer. ADRs are the compounding mechanism — each one makes every future AI agent task cheaper by preventing the same architectural debate from recurring.",
        },
      ],
    },
    {
      id: "sa2-ux",
      marker: "3.4",
      title: "Generative Design: UX (S-A2)",
      blocks: [
        {
          type: "lead",
          text: "Generative Design is the stage where the specified feature becomes visual, interactive, and human-usable. AI generates from the design system; designers curate, direct, and govern.",
        },
        {
          type: "list",
          items: [
            { label: "L1 — Flow Architecture", text: "AI derives the complete set of screens and states from the user stories and maps how they connect." },
            { label: "L2 — Component Selection", text: "AI maps each story to design-system components. The design system is the AI's primary vocabulary." },
            { label: "L3 — Layout & Responsive", text: "AI composes screens across breakpoints applying grid, spacing, and typography tokens." },
            { label: "L4 — Copy & Microcopy", text: "AI generates all UI text from spec and brand voice — for every state on day one." },
            { label: "L5 — State Coverage", text: "Default, Loading, Error, Empty, Success, Partial, Disabled — generated systematically from documented edge cases." },
          ],
        },
        {
          type: "callout",
          tone: "indigo",
          title: "The critical dependency",
          text: "The design system must be in the context layer, current, and well-structured. The most strategic design investment is not learning Figma AI — it is making the design system AI-consumable.",
        },
        {
          type: "prose",
          text: "What AI cannot do in design: feel whether it is right, understand brand soul, know what a frustrated user at 11pm needs, break the system intentionally, or judge experiential quality. These are the designer's permanent territory.",
        },
      ],
    },
    {
      id: "sa2-arch",
      marker: "3.5",
      title: "Generative Architecture & Tech Spec (S-A2)",
      blocks: [
        {
          type: "lead",
          text: "The architecture layer generates system-level decisions and technical specifications. It is where the highest-cost human activity in traditional engineering — senior architect time — is most dramatically compressed.",
        },
        {
          type: "prose",
          text: "AI generates three architecture options for every significant decision, each scored against context constraints:",
        },
        {
          type: "cards",
          columns: 3,
          items: [
            { title: "Option A — Extend existing", body: "Least change, least risk, often fastest." },
            { title: "Option B — New bounded service", body: "Clean isolation, more operational overhead." },
            { title: "Option C — Event-driven", body: "Most scalable, highest complexity — appropriate only with existing event infrastructure." },
          ],
        },
        {
          type: "prose",
          text: "The engineer selects. AI writes the ADR. The decision, its context, the alternatives, and the reasoning are all written to the context layer. **ADRs are not documentation overhead. In the agentic model, they are infrastructure.**",
        },
      ],
    },
    {
      id: "sa3",
      marker: "3.6",
      title: "Agentic Development (S-A3)",
      blocks: [
        {
          type: "lead",
          text: "Agentic Development is where coding agents consume the Context-Driven Specification and Generative Design artifacts to generate production-ready code. Engineers stop writing code as their primary activity. They start orchestrating agents that write code.",
        },
        {
          type: "steps",
          items: [
            { id: "1", title: "Input", text: "Context-Driven Specification coding-agent prompt: structured spec, approach, API contract, data model." },
            { id: "2", title: "Context reading", text: "Agent reads codebase context, ADRs, existing patterns." },
            { id: "3", title: "Generation", text: "Agent writes feature code in the style of the existing codebase." },
            { id: "4", title: "PR creation", text: "Agent opens a PR with descriptive commits and summary." },
            { id: "5", title: "Self-review", text: "Agent reviews its own PR against acceptance criteria and DoD." },
            { id: "6", title: "Flagging", text: "Agent flags anything uncertain or requiring human judgment." },
            { id: "7", title: "Engineer review", text: "Engineer approves, requests changes, or escalates." },
          ],
        },
        {
          type: "callout",
          tone: "indigo",
          title: "The context layer as guardrail",
          text: "If an agent generates code introducing a pattern the team decided against in ADR-14, the context layer is failing. If it follows the existing service structure exactly, it is working. Toolchain: Claude Code, Cursor, GitHub Copilot.",
        },
      ],
    },
    {
      id: "sa4",
      marker: "3.7",
      title: "Autonomous Testing (S-A4)",
      blocks: [
        {
          type: "lead",
          text: "Autonomous Testing generates the test suite from acceptance criteria and edge cases documented in Context-Driven Specification, executes it, and writes failure patterns back to the context layer. QA engineers govern quality standards rather than execute tests.",
        },
        {
          type: "prose",
          text: "Test scaffolds are generated from acceptance criteria *before* production code is written. This shifts quality left. When coding agents generate code, they do so against a pre-existing test suite — and self-correct before the PR is opened.",
        },
        {
          type: "list",
          items: [
            { label: "Unit tests", text: "One per acceptance criterion. Coverage is structural, not incidental." },
            { label: "Integration tests", text: "From the sequence diagram, one per service boundary." },
            { label: "End-to-end tests", text: "From the flow architecture, one per user journey." },
            { label: "Regression suite", text: "From prior bug reports and failure patterns in the context layer." },
            { label: "Edge case tests", text: "From edge cases surfaced in Context-Driven Specification — the most valuable set." },
          ],
        },
        {
          type: "callout",
          tone: "error",
          title: "The AI drift risk",
          text: "When AI generates code, AI generates tests, and no human reviews either at a granular level, tests pass because both were generated from the same (occasionally incorrect) model. Mitigation: QA governs quality standards, the DoD requires human sign-off on the edge-case set, and failures are reviewed by a human.",
        },
      ],
    },
    {
      id: "sa5",
      marker: "3.8",
      title: "Continuous Deployment (S-A5)",
      blocks: [
        {
          type: "lead",
          text: "Continuous Deployment is where working, tested code moves to production through an AI-orchestrated pipeline — from an anxiety-laden manual event to a continuous, policy-governed process.",
        },
        {
          type: "list",
          items: [
            { label: "0.1%", text: "Internal team. Smoke test. Catches obvious failures before any user is affected." },
            { label: "1%", text: "Beta cohort. Performance and error-rate gate." },
            { label: "10%", text: "First real user segment. Business metric gate activated." },
            { label: "50%", text: "All segments. Adoption rate gate. Feature discovery assessed." },
            { label: "100%", text: "Full rollout. All gates passed. Feature flags retired." },
          ],
        },
        {
          type: "callout",
          tone: "indigo",
          title: "Human gate for irreversible decisions",
          text: "Data migrations, external API contract changes, and user-visible removals require human approval — regardless of automated thresholds. The policy decision is human; the execution decision is AI.",
        },
      ],
    },
    {
      id: "sa6",
      marker: "3.9",
      title: "Autonomous Operations (S-A6)",
      blocks: [
        {
          type: "lead",
          text: "Autonomous Operations is where the deployed system is monitored, maintained, and optimised — continuously rather than reactively.",
        },
        {
          type: "cards",
          columns: 2,
          items: [
            { title: "What AI does autonomously", body: "Anomaly detection from baseline deviation · root-cause suggestion correlated with recent changes · self-healing within policy (restart, cache invalidation, pool reset) · performance optimisation recommendations." },
            { title: "What requires human decision", body: "Novel anomaly types · data integrity concerns · all security events · architecture-level remediation that changes system structure rather than configuration." },
          ],
        },
        {
          type: "prose",
          text: "Every incident, anomaly, resolution, and operational learning is written to the context layer and read by Deployment and Optimization. This is the operational intelligence loop: what the system learns from running informs how the next version is designed, specified, and deployed.",
        },
      ],
    },
  ],
};
