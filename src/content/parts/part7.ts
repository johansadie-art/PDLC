import type { Part } from "../types";

export const part7: Part = {
  index: "07",
  id: "part-implementation",
  title: "Implementation",
  subtitle:
    "Organisations move through five maturity levels — not in one leap. The Symphony engagement model maps Discovery, Bootcamp, and Post-Bootcamp onto that journey.",
  sections: [
    {
      id: "maturity",
      marker: "7.1",
      title: "Maturity Model — PDLC 1.0 → 2.0 → 3.0",
      eyebrow: "Part 7 — Implementation",
      blocks: [
        {
          type: "lead",
          text: "Organisations do not jump from PDLC 1.0 to 3.0. They move through identifiable stages, each with characteristic patterns, gaps, and leverage points — grounded in eight-plus Symphony client engagements.",
        },
        {
          type: "cards",
          columns: 3,
          items: [
            { title: "Pre-Adoption", from: "Vesta pattern", body: "No AI in any workflow step. Requirements flow client to execution. Start: establish any AI touchpoint in Signal or Decide before Build." },
            { title: "Fragmented", from: "CINC, GLG pattern", body: "AI used informally by individuals. No shared prompts, context, or governance. Start: a shared context layer and minimum viable prompt library." },
            { title: "Structured", from: "Dyno pattern", body: "Phased adoption with proof before commitment. Centralised .claudemd context. Metrics tracked bi-weekly. Start: parallel product/design AI track with CoP support." },
            { title: "Advanced", from: "Metrobank, Trend Health", body: "AI mandatory or formally governed. Deliberate Git-based knowledge architecture. Start: build Signal Detection (A1) and instrument Optimization (A7) feedback loops." },
            { title: "Agentic", from: "aspirational", body: "Optimization reads signals from all stages across all cycles. Context layer compounds. Hypothesis accuracy exceeds 85%. Human-governed intelligence." },
          ],
        },
        {
          type: "callout",
          tone: "indigo",
          title: "What moves organisations forward",
          text: "The primary bottleneck is almost never tooling. It is context layer quality and human role clarity. The reliable progression: establish canonical context format → add AI to Signal → add AI to Specify → add AI to Build → instrument Learn.",
        },
      ],
    },
    {
      id: "symphony-model",
      marker: "7.2",
      title: "The Symphony Engagement Model",
      blocks: [
        {
          type: "lead",
          text: "The Symphony engagement model maps directly onto the Agentic PDLC. Discovery assesses where the client sits. Bootcamp builds capability. Post-Bootcamp embeds it.",
        },
        {
          type: "steps",
          items: [
            { id: "1–2", title: "Discovery (Weeks 1–2)", text: "Is this client ready to accelerate with AI, and where do we start? Outputs: AI maturity score per practice, knowledge base recommendation, governance checklist, workflow map, enablement roadmap, and a demonstrable AI artefact." },
            { id: "GATE", title: "Decision Gate (End of Week 2)", text: "A 45–60 min session presenting findings, scorecard, toolchain map, Go/No-Go, and Bootcamp roadmap. Conditional Go is common." },
            { id: "3–8", title: "Bootcamp (Weeks 3–8)", text: "Hands-on enablement across engineering, product, and QA. Product track: backlog refinement, hypothesis co-creation, research synthesis, prompt libraries, story quality scoring. Runs alongside engineering, not after." },
            { id: "∞", title: "Post-Bootcamp (Ongoing)", text: "Embedding practices so the team can sustain them without Symphony. Advisory sessions, retrospectives, metrics review against baselines, case study documentation." },
          ],
        },
        {
          type: "list",
          style: "number",
          items: [
            { text: "Formalise pre-discovery intake — governance, compliance, maturity before Day 1." },
            { text: "Build the Product–Engineering Handoff Map — Research → Hypothesis → Spec → Stories → Engineering → QA." },
            { text: "Define Product & Design Enablement Blueprints — separate from engineering." },
            { text: "Standardise context layer architecture at discovery close." },
            { text: "Close the AI-first perception gap with a demonstrable artefact every engagement." },
          ],
        },
        {
          type: "quote",
          text: "The competitive moat is not AI capability. It is accumulated context. And that can only be built cycle by cycle, engagement by engagement, decision by decision.",
          attribution: "Closing — The Compounding Bet",
        },
      ],
    },
  ],
};
