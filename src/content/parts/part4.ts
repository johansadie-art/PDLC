import type { Part } from "../types";

export const part4: Part = {
  index: "04",
  id: "part-deployment-loop",
  title: "Deployment & the Full Signal Loop",
  subtitle:
    "Deployment is the richest signal source in the lifecycle. Optimization reads everything, across every cycle, and feeds Signal Detection — turning the pipeline into a compounding learning loop.",
  sections: [
    {
      id: "a6",
      marker: "4.1",
      title: "Deployment as a Signal System (A6)",
      eyebrow: "Part 4 — Deployment & the Full Signal Loop",
      blocks: [
        {
          type: "lead",
          text: "Deployment is the richest single signal source in the entire Agentic PDLC. Every stage before it de-risks based on proxies — interviews, prototypes, staging, synthetic tests. Deployment is ground truth: real users, real load, real business stakes.",
        },
        {
          type: "table",
          highlightLast: true,
          headers: ["Stage", "Signal produced", "To context layer"],
          rows: [
            ["Signal Detection", "Ranked signal clusters, dismissed signals", "Yes"],
            ["Hypothesis", "Committed hypotheses, killed bets with reasoning", "Yes"],
            ["Validation", "Validated/invalidated assumptions, prototype findings", "Yes"],
            ["Specification", "Structured spec, scope decisions, success metrics", "Yes"],
            ["Generation / SDLC", "Code patterns, design decisions, ADRs, test results", "Yes"],
            ["Deployment", "Adoption curves, performance, behaviour, business metrics", "Yes — richest deposit"],
            ["Optimization", "Next cycle seeds, process improvements", "Yes"],
          ],
        },
        { type: "heading", text: "Four Deployment Signal Types" },
        {
          type: "list",
          items: [
            { label: "Performance signals", text: "Latency, error rates, throughput, memory, CPU. Staging never fully replicates production load." },
            { label: "Adoption signals", text: "Did users find the feature? The discovery gap reveals UX and launch execution quality." },
            { label: "Behaviour signals", text: "How users actually used it versus predicted. Deviations from prediction are the highest-value Optimization input." },
            { label: "Business metric signals", text: "Did it move churn, revenue, NPS, activation — measured against the Specification baseline?" },
          ],
        },
      ],
    },
    {
      id: "a7",
      marker: "4.2",
      title: "Autonomous Optimization (A7)",
      blocks: [
        {
          type: "lead",
          text: "Optimization is the most strategically important stage because it is the only stage that reads signals from every other stage across every cycle. It does not just optimise the product — it optimises the process of building the product.",
        },
        {
          type: "list",
          items: [
            { label: "Next Signal Detection feed", text: "Users who adopted are a new segment; users who didn't are a signal; production edge cases become inputs." },
            { label: "Process tuning recommendations", text: "If validation keeps failing, that's a hypothesis-quality problem back at the Hypothesis stage. Optimization surfaces these cross-stage correlations." },
            { label: "Next bet recommendations", text: "Optimization suggests the highest-probability next hypothesis. The PM decides; AI does not commit autonomously." },
          ],
        },
        {
          type: "cards",
          columns: 3,
          items: [
            { title: "Cycle 1", body: "Thin context. Broad, cautious suggestions. Prototyping at every stage. Hypothesis accuracy ~50%. Deployment surprises frequent." },
            { title: "Cycle 5", body: "Substantial context. AI generates within established constraints. Stage skipping possible. Hypothesis accuracy ~70%." },
            { title: "Cycle N", body: "Rich context. AI predicts accurately from strong prior patterns. Most features take the fast path. Accuracy exceeds 85%. Surprises rare." },
          ],
        },
        {
          type: "quote",
          text: "The context layer is not just memory. It is the compounding mechanism that makes every subsequent cycle faster, cheaper, and more accurate than the last. You cannot buy this advantage. It must be built, cycle by cycle.",
        },
      ],
    },
    {
      id: "compounding",
      marker: "4.3",
      title: "The Compounding Advantage",
      blocks: [
        {
          type: "lead",
          text: "The single most important strategic implication of the Agentic PDLC is that the system compounds. Unlike tooling upgrades which provide a fixed gain, the Agentic PDLC gets more valuable with every cycle because every cycle enriches the context layer.",
        },
        {
          type: "callout",
          tone: "indigo",
          title: "Why this is a competitive moat",
          text: "A competitor can buy the same AI tools. They cannot buy your context layer. The decisions, patterns, hypotheses, ADRs, validated assumptions, and deployment learnings represent institutional intelligence tested against reality. The gap widens with every sprint.",
        },
        {
          type: "list",
          items: [
            { label: "Context layer quality", text: "Structured, complete, current documentation in canonical format. Git-based .md files compound fastest." },
            { label: "Hypothesis accuracy improvement", text: "Documenting why hypotheses were killed builds pattern recognition that prevents repeats." },
            { label: "ADR completeness", text: "Every documented decision makes every future agent task cheaper." },
            { label: "Deployment signal richness", text: "Thorough instrumentation gives Optimization more evidence, so Signal Detection surfaces higher-quality opportunities." },
          ],
        },
      ],
    },
  ],
};
