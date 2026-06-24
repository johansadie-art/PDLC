import type { Part } from "../types";

export const part2: Part = {
  index: "02",
  id: "part-agentic-pdlc",
  title: "The Agentic PDLC",
  subtitle:
    "Seven stages, Signal Detection through Optimization, wrapped around a context layer that compounds. Always-on signal detection, AI-generated hypotheses, assumption-first validation, and a specification written as a prompt.",
  sections: [
    {
      id: "agentic-pdlc-overview",
      marker: "2.1",
      title: "Overview — Signal Detection → Optimization",
      eyebrow: "Part 2 — The Agentic PDLC",
      blocks: [
        {
          type: "lead",
          text: "The Agentic PDLC compresses the standard nine stages into seven — not by removing stages, but by collapsing stages whose boundaries become fluid when AI operates continuously across them.",
        },
        {
          type: "table",
          highlightLast: true,
          headers: ["Agentic Stage", "Replaces", "Core shift"],
          rows: [
            ["Signal Detection (A1)", "Discover + Define (partially)", "Quarterly research → always-on synthesis"],
            ["Hypothesis Generation (A2)", "Define + early Validate", "Manual framing → AI options, human selects"],
            ["Validation (A3)", "Validate", "Prototype-heavy → assumption-first"],
            ["Specification (A4)", "Prioritize + Requirements", "PRD authoring → structured context generation"],
            ["Generation (A5)", "Build (PDLC wrapper)", "Sequential execution → parallel agentic SDLC"],
            ["Deployment (A6)", "Launch", "Manual release event → progressive signal system"],
            ["Autonomous Optimization (A7)", "Measure + Optimize + Retire", "Periodic review → continuous learning loop"],
          ],
        },
        {
          type: "prose",
          text: "The most important structural change is the **continuous learning loop**: Optimization feeds directly back into Signal Detection with enriched context. Every signal detected, every hypothesis committed or killed, every architecture decision, every deployment anomaly — all of it is written to the context layer and read by Optimization to generate the next cycle's intelligence. The system compounds.",
        },
        {
          type: "diagram",
          key: "agenticRing",
          caption:
            "Diagram 2.1 — The Agentic PDLC ring. The context layer pulses at the centre, receiving deposits from every stage. Click each stage to see what it contributes. Optimization reads everything, from every stage, across every cycle. The loop back to Signal Detection is what makes the system compound.",
        },
      ],
    },
    {
      id: "a1-signal-detection",
      marker: "2.2",
      title: "Signal Detection (A1)",
      blocks: [
        {
          type: "lead",
          text: "Signal Detection replaces the traditional Discovery phase — but the difference is not one of speed. It is one of structure. Traditional discovery is a project. Signal Detection is infrastructure: a continuous system that monitors, classifies, scores, and surfaces signals without waiting to be asked.",
        },
        { type: "heading", text: "The Four-Layer Architecture" },
        {
          type: "list",
          items: [
            { label: "Layer 1 — Signal Sources", text: "Eight source categories across Customer (tickets, NPS, recordings, transcripts), Market (competitor moves, reviews, news), Product behaviour (usage, drop-off, errors), and Internal (sales notes, CRM, Slack, bug reports)." },
            { label: "Layer 2 — Ingestion", text: "All sources normalised to a canonical format (structured .md) and stored in the context layer. Deduplication merges signals; freshness rules archive after 90 days; anomalies bypass and queue immediately." },
            { label: "Layer 3 — AI Processing", text: "Five steps: classification, pattern detection, opportunity scoring (frequency, breadth, novelty, urgency), draft insight, and alert typing (anomaly / trend / opportunity)." },
            { label: "Layer 4 — Human Review", text: "The PM receives a ranked signal feed — not a firehose. Three actions: Promote, Park, Dismiss. Dismissed signals and reasons are written back, making future classification more accurate." },
          ],
        },
        {
          type: "prose",
          text: "A single signal is noise. Intelligence emerges when multiple signals share overlapping dimensions across the 5W framework: **What, Who, When, Where, Why.** As shared W-dimensions increase, confidence and predictive power grow.",
        },
      ],
    },
    {
      id: "intelligent-signal",
      marker: "2.3",
      title: "Intelligent Signal — The 5W Fusion Model",
      blocks: [
        {
          type: "lead",
          text: "The leap from signal detection to signal intelligence is the difference between a notification system and a prediction engine. Signal Detection tells you what is happening. Intelligent Signal tells you what is about to happen — and what to do before it does.",
        },
        {
          type: "prose",
          text: "The model is built on a simple observation: **signals share context.** A support ticket about export failures, a sales call mentioning a competitor's export feature, and an analytics session showing failed exports before churn share Who (enterprise), What (export friction), and When (pre-renewal). That convergence is not coincidence. It is a predictive signal.",
        },
        {
          type: "list",
          items: [
            { label: "WHAT", text: "The signal content. What is the user trying to do? The easiest dimension — but alone, insufficient." },
            { label: "WHO", text: "Which segment, persona, tier, or role. A pain felt by enterprise at renewal is structurally different from the same pain at trial onboarding." },
            { label: "WHEN", text: "Timing patterns. Temporal correlation is where predictive power most often hides." },
            { label: "WHERE", text: "Product area, journey stage, channel. Friction in the payment flow differs from the same friction in onboarding." },
            { label: "WHY", text: "Inferred intent — AI's most uncertain axis. AI infers Why; humans confirm or correct it. This is where PM judgment becomes irreplaceable." },
          ],
        },
        {
          type: "diagram",
          key: "fiveWFusion",
          caption:
            "Diagram 2.3 — The 5W Fusion Model. Activate each W dimension. Watch the confidence meter rise and the intelligence level advance as dimensions converge. The jump from 3 Ws (Correlative) to 4–5 Ws (Predictive) is where the system shifts from describing the past to anticipating the future.",
        },
      ],
    },
    {
      id: "a2-hypothesis",
      marker: "2.4",
      title: "Hypothesis Generation (A2)",
      blocks: [
        {
          type: "lead",
          text: "Hypothesis Generation is the stage where a promoted signal becomes a testable bet. In PDLC 1.0, a PM writes a hypothesis over days. In the agentic model, AI generates four framings simultaneously within minutes. The PM's job becomes selection, enrichment, and commitment — not authorship.",
        },
        { type: "heading", text: "The Four Framing Models" },
        {
          type: "list",
          items: [
            { label: "Jobs To Be Done", text: "\"When [situation], I want to [motivation], so I can [outcome].\" Grounds the hypothesis in observed behaviour." },
            { label: "Lean Hypothesis", text: "\"We believe [X] for [user] will result in [outcome]. We'll know when [metric changes by Y].\" Forces explicit measurement." },
            { label: "How Might We", text: "\"How might we [solve X] for [who] so that [outcome]?\" Opens solution space. Best input for Validation prototyping." },
            { label: "Opportunity Statement", text: "\"[Who] need a way to [do X] because [Y].\" Solution-agnostic. Useful when the right approach is unknown." },
          ],
        },
        {
          type: "prose",
          text: "Every committed hypothesis carries assumptions ranked across four dimensions — **Desirability, Feasibility, Viability, Usability.** The highest-risk assumption is the first thing tested in Validation, before any specification begins.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "The PM's role at Hypothesis",
          text: "The PM does not write hypotheses. The PM selects the framing, enriches with what AI cannot know, sets success metrics, and commits or rejects. The PM is an editor, judge, and strategic filter — not an author.",
        },
      ],
    },
    {
      id: "a3-validation",
      marker: "2.5",
      title: "Validation (A3)",
      blocks: [
        {
          type: "lead",
          text: "Validation is where the riskiest assumption in the committed hypothesis is tested before any specification work begins. It is the cheapest point in the lifecycle to discover you are wrong.",
        },
        {
          type: "prose",
          text: "The cost of being wrong compounds at every downstream stage. A wrong assumption discovered at Validation costs the price of a prototype and a few user sessions. The same assumption discovered mid-engineering costs sprint disruption and rework. Discovered post-launch, it costs user trust and rollback risk.",
        },
        {
          type: "table",
          headers: ["Assumption", "Method", "AI role", "Human role"],
          rows: [
            ["Desirability", "User interviews, concept test", "Generates guide, synthesises findings", "Conducts sessions, interprets meaning"],
            ["Feasibility", "Technical spike, codebase review", "Analyses constraints, estimates effort", "Makes feasibility judgment"],
            ["Viability", "Business case model", "Builds ROI model from context", "Validates assumptions, signs off"],
            ["Usability", "Prototype test", "Generates prototype variants rapidly", "Conducts sessions, judges quality"],
          ],
        },
        {
          type: "list",
          items: [
            { label: "Commit", text: "All critical assumptions validated. Move to Specification." },
            { label: "Reframe", text: "An assumption failed but the signal remains strong. Return to Hypothesis with new understanding." },
            { label: "Kill", text: "The hypothesis doesn't hold. Archive with reasoning — critical for the context layer." },
          ],
        },
      ],
    },
    {
      id: "prototyping",
      marker: "2.6",
      title: "Prototyping as a De-risking Arc",
      blocks: [
        {
          type: "lead",
          text: "Prototyping is not a stage in the Agentic PDLC. It is a mechanism — a de-risking tool applied at any point where uncertainty is too high to proceed without evidence.",
        },
        {
          type: "callout",
          tone: "indigo",
          title: "The core principle",
          text: "Prototyping is inversely proportional to accumulated context. The more the context layer holds, the less prototyping a team needs. The context layer is the team's accumulated de-risking budget.",
        },
        {
          type: "table",
          headers: ["Stage", "Prototype type", "Purpose", "AI role"],
          rows: [
            ["Signal Detection", "Concept probe", "Is this signal real?", "Landing page / quick concept"],
            ["Hypothesis", "Hypothesis sketch", "Is this the right approach?", "Rough flow variants"],
            ["Validation", "Interactive prototype", "Does the solution work?", "Clickable prototype variants"],
            ["Specification", "Spec walkthrough", "Is the spec clear?", "Annotated mock"],
            ["Generative Design", "Hi-fidelity design", "Does it feel right?", "All states from design system"],
            ["Agentic Development", "Functional prototype", "Does the code solve it?", "Functional code prototype"],
          ],
        },
        {
          type: "prose",
          text: "In agentic teams, AI generates prototype variants in minutes. The threshold for \"is it worth prototyping?\" drops dramatically. The cost of being wrong is always higher than the cost of prototyping first.",
        },
      ],
    },
    {
      id: "a4-specification",
      marker: "2.7",
      title: "Specification (A4)",
      blocks: [
        {
          type: "lead",
          text: "Specification is the stage where the validated hypothesis becomes a structured artefact that both humans and AI agents can act on.",
        },
        {
          type: "cards",
          columns: 2,
          items: [
            { title: "Output A — Human stakeholders", body: "Problem statement, rationale, key decisions, user stories in plain language, scope boundaries, risks. Written for the CPO, design lead, and stakeholders who need strategic clarity." },
            { title: "Output B — AI agents", body: "Structured user stories as testable assertions, acceptance criteria as pass/fail conditions, edge cases as test scenarios, constraints, machine-readable DoD, design tokens, prior ADR links. Written to the context layer for Context-Driven Specification through Autonomous Testing." },
          ],
        },
        {
          type: "callout",
          tone: "indigo",
          title: "The key reframe",
          text: "The specification is now a prompt, not a document. Ambiguity is not just unhelpful — it is a breaking error. If a downstream AI agent needs to ask a clarifying question about the spec, the spec has failed.",
        },
      ],
    },
    {
      id: "a5-generation",
      marker: "2.8",
      title: "Generation (A5)",
      blocks: [
        {
          type: "lead",
          text: "Generation is the stage where the Agentic SDLC (Context-Driven Specification through Autonomous Operations) executes. It is the PDLC's wrapper for the entire engineering, design, testing, and deployment lifecycle. Once the validated, structured specification enters Generation, the PM's primary role becomes governance rather than direction.",
        },
        {
          type: "list",
          items: [
            { text: "UX design — all screens, all states, all responsive variants" },
            { text: "Architecture decisions and ADRs" },
            { text: "Implementation — code, PR, auto-review" },
            { text: "Test suite — unit, integration, E2E, regression" },
            { text: "Deployment orchestration — CI/CD, feature flags, rollout" },
            { text: "Documentation — generated from code and decisions, not written separately" },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "The token budget implication",
          text: "Generation is where the largest portion of the token budget is spent — and where ROI is highest. The quality of Generation outputs is directly proportional to the quality of Specification inputs. A precise spec means agents spend tokens solving the problem; an ambiguous spec means they spend tokens resolving ambiguity.",
        },
      ],
    },
  ],
};
