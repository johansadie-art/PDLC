import type { Part } from "../types";

export const part1: Part = {
  index: "01",
  id: "part-foundation",
  title: "Foundation",
  subtitle:
    "Before the agentic model changes anything, the ground must be clear: the nine-stage PDLC, the SDLC nested inside it, the boundary between them, and the arc along which every human role transforms.",
  sections: [
    {
      id: "introduction",
      marker: "1.1",
      title: "The End of the Pipeline",
      eyebrow: "Part 1 — Foundation",
      blocks: [
        {
          type: "lead",
          text: "The traditional product development lifecycle was designed for a human-speed world. Quarterly discovery cycles. Weeks spent writing PRDs. Months from insight to working software. The pipeline metaphor made sense: information flowed in one end, product came out the other, and humans were the processors at every stage.",
        },
        { type: "prose", text: "AI doesn't just make that pipeline faster. It restructures it entirely." },
        {
          type: "prose",
          text: "The shift is not about automating tasks. It's about changing where value is created, who creates it, and how the system learns. When AI can synthesise a thousand customer signals overnight, generate four hypothesis framings before the PM's morning coffee, and write a test suite from acceptance criteria in minutes — the bottleneck moves. The constraint is no longer execution speed. It's the quality of the decisions that direct the execution.",
        },
        {
          type: "prose",
          text: "This playbook defines the Agentic PDLC: a model built from first principles and grounded in evidence from eight-plus client engagements across financial services, healthcare, manufacturing, and SaaS. It is not theoretical. Every claim in this document has a client pattern behind it.",
        },
        { type: "heading", text: "The Three-Act Shift" },
        {
          type: "cards",
          columns: 3,
          items: [
            {
              title: "PDLC 1.0 — Human-Driven",
              body: "Humans author everything. AI, if present at all, is a search engine or spell-checker. Discovery takes weeks. Spec writing takes days. Build takes sprints. Measurement takes quarters. The entire lifecycle is gated by human availability.",
            },
            {
              title: "PDLC 2.0 — AI-Assisted",
              body: "AI accelerates specific tasks: summarising research, drafting PRDs, generating code suggestions. Humans still own every stage. The pipeline is faster but structurally the same. Most organisations are here today, or aspiring to be.",
            },
            {
              title: "PDLC 3.0 — Agentic",
              body: "AI runs continuous processes across the lifecycle: always-on signal detection, hypothesis generation, specification decomposition, code generation, test execution, deployment orchestration, outcome optimisation. Humans provide direction, governance, and judgment. The pipeline becomes a learning loop.",
            },
          ],
        },
        {
          type: "diagram",
          key: "threeActShift",
          caption:
            "Diagram 1.1 — The Three-Act Shift. Execution transfers progressively from humans to AI, while governance — the judgment layer — remains and grows in human hands. PDLC 3.0 is not about removing humans. It is about elevating them.",
        },
        {
          type: "quote",
          text: "AI compresses the distance between insight and working software — and the teams that get there first will have a structural advantage that compounds with every cycle.",
        },
      ],
    },
    {
      id: "standard-pdlc",
      marker: "1.2",
      title: "The Standard PDLC — 9 Stages",
      blocks: [
        {
          type: "lead",
          text: "Before understanding what the agentic model changes, the foundation must be clear. Most organisations converge on a similar product development lifecycle, whether they name it or not. The nine stages below represent the current state of practice — drawn from Lean Startup, Agile Product Management, Design Thinking, and enterprise product operating models.",
        },
        {
          type: "diagram",
          key: "standardPdlc",
          caption:
            "Diagram 1.2 — The Standard PDLC. Click any stage to expand detail. Build (05) is the only stage that contains its own sub-lifecycle — the SDLC. This asymmetry is what makes the transition to an agentic model so significant: the SDLC expands and transforms while every other stage is compressed.",
        },
      ],
    },
    {
      id: "standard-sdlc",
      marker: "1.3",
      title: "The Standard SDLC — 6 Stages Inside Build",
      blocks: [
        {
          type: "lead",
          text: "The Software Development Lifecycle is nested inside Stage 05 of the PDLC. Understanding it as a sub-lifecycle — not a separate system — is critical to understanding how the agentic model transforms it. Every SDLC stage inherits the quality of what the PDLC stages above it produced.",
        },
        {
          type: "prose",
          text: "If the problem was badly defined, the requirements will be ambiguous. If the hypothesis was never validated, the system design will solve the wrong problem. This is the fundamental thesis of Symphony's AI in SDLC engagement model: **if story quality is poor going into engineering, AI-generated code against bad requirements is still bad code.**",
        },
        {
          type: "diagram",
          key: "sdlcNested",
          caption:
            "Diagram 1.3 — The SDLC nested inside PDLC stage 05. The progressive darkening represents increasing technical depth as you move through the SDLC. The feedback arrow at S6 represents the signal loop back to PDLC measurement stages — a loop that agentic teams make continuous.",
        },
      ],
    },
    {
      id: "pdlc-vs-sdlc",
      marker: "1.4",
      title: "PDLC vs SDLC — What's the Difference?",
      blocks: [
        {
          type: "lead",
          text: "This is the most commonly misunderstood boundary in product and engineering practice. The two lifecycles are not versions of the same thing. They operate at different levels of abstraction, answer different questions, involve different disciplines, and measure success differently.",
        },
        {
          type: "callout",
          tone: "indigo",
          title: "The one-sentence version",
          text: "The PDLC asks: \"Are we building the right thing?\" — The SDLC asks: \"Are we building the thing right?\"",
        },
        {
          type: "prose",
          text: "The **PDLC** governs the full arc of a product from idea to retirement. Its scope is strategic and customer-facing: it starts with signals from the real world, moves through problem definition and validation, produces something that is built, and then measures whether it achieved the intended outcome.",
        },
        {
          type: "prose",
          text: "The **SDLC** governs the execution of a specific build decision. Its scope is technical and delivery-focused: it starts from a committed specification, moves through design, implementation, testing, and deployment, and ends with working software in production.",
        },
        {
          type: "prose",
          text: "This nesting relationship has a critical implication: **the SDLC inherits the quality of the PDLC stages above it.** Symphony's central thesis: adding AI to the SDLC without fixing the PDLC above it accelerates the delivery of the wrong thing.",
        },
        {
          type: "diagram",
          key: "pdlcVsSdlc",
          caption:
            "Diagram 1.4 — PDLC vs SDLC. Two questions, two owners, one nested relationship. The specification is the bridge — the handoff point where product direction becomes engineering instruction. SDLC quality is a function of PDLC quality.",
        },
        {
          type: "quote",
          text: "A common mistake in organisations is focusing heavily on SDLC (delivery) while neglecting PDLC (discovery and validation). Teams become very efficient at building features that customers may not actually need.",
        },
      ],
    },
    {
      id: "transformation-matrix",
      marker: "1.5",
      title: "The Transformation Matrix",
      blocks: [
        {
          type: "lead",
          text: "Every PDLC stage is transformed by AI. Not replaced — transformed. The primary question at each stage remains the same. What changes is who answers it, how long it takes, and what the human's contribution becomes.",
        },
        {
          type: "callout",
          tone: "indigo",
          title: "The human role arc",
          text: "Author → Director → Curator → Orchestrator → Governor → Strategist",
        },
        {
          type: "table",
          highlightLast: true,
          headers: ["Stage", "Traditional", "AI Role", "Human Role Shift"],
          rows: [
            ["01 Discover", "Quarterly research projects", "Always-on signal detection, transcript synthesis", "Author → Signal governor"],
            ["02 Define", "PM writes problem statement", "AI generates framing options from signals", "Author → Frame selector"],
            ["03 Validate", "Designer builds prototypes manually", "AI generates variants in minutes", "Creator → Judgment layer"],
            ["04 Prioritize", "PM scores items in spreadsheet", "AI scores + ranks with strategic cross-reference", "Scorer → Strategic filter"],
            ["05 Build", "Engineers write code", "AI writes code, tests, docs", "Executor → Agent orchestrator"],
            ["06 Launch", "Manual release + comms", "AI-orchestrated progressive rollout", "Release manager → Policy setter"],
            ["07 Measure", "Analyst builds dashboards", "AI detects patterns, anomalies, causal signals", "Dashboard builder → Insight director"],
            ["08 Optimize", "Team runs experiments", "AI generates + runs experiments autonomously", "Experimenter → Outcome governor"],
            ["09 Retire", "PM reviews and decides", "AI flags deprecation candidates with evidence", "Decider → Ethics and strategy"],
          ],
        },
        {
          type: "prose",
          text: "The compression is not uniform. Front-end stages (01–04) compress the most. Execution stages (05–06) compress fastest in token-time but require the most human governance. Continuous stages (07–09) shift the most fundamentally: from reactive human measurement to proactive AI optimisation with human oversight.",
        },
      ],
    },
  ],
};
