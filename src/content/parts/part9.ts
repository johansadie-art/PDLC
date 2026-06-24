import type { Part } from "../types";

export const part9: Part = {
  index: "09",
  id: "part-measuring",
  title: "Measuring the Agentic PDLC",
  subtitle:
    "Traditional KPIs measure output. The agentic question is different: how well were humans directing the AI, and did it produce business value? Output metrics retired; decision-quality and outcome metrics in.",
  sections: [
    {
      id: "kpi-framework",
      marker: "9.1",
      title: "The KPI Framework — What Changes and Why",
      eyebrow: "Part 9 — Measuring",
      blocks: [
        {
          type: "lead",
          text: "When AI generates code in minutes, \"story points completed\" tells you nothing. When test suites are auto-generated, \"coverage %\" stops correlating with quality. Velocity dashboards look spectacular while business outcomes stay flat. That gap is the measurement problem.",
        },
        {
          type: "prose",
          text: "The root cause is category confusion. Traditional KPIs measure **output** — what the team made. In an agentic model, output is no longer the constraint. The constraint is the quality of decisions that direct generation, and whether those decisions produced value.",
        },
        {
          type: "diagram",
          key: "kpiFramework",
          caption:
            "Diagram 9.1 — The Agentic PDLC KPI framework. Select a stage to explore what gets measured and why. Story points, sprint velocity, lines of code, test coverage %, and PRDs/quarter are actively retired.",
        },
      ],
    },
    {
      id: "quality-dimensions",
      marker: "9.2",
      title: "Quality Dimensions & the Governance Dashboard",
      blocks: [
        {
          type: "lead",
          text: "In a traditional SDLC, quality is mostly single-axis: does the code work? In the Agentic PDLC, quality has five distinct dimensions that interact but require separate measurement. Collapsing them into one score produces a number that is easy to game and provides no actionable guidance.",
        },
        {
          type: "diagram",
          key: "qualityDimensions",
          caption:
            "Diagram 9.2 — Five quality dimensions and the six-indicator governance dashboard. Together they answer the question no traditional dashboard can: is the system getting smarter, or just running faster?",
        },
        {
          type: "prose",
          text: "The five dimensions form a flywheel: good **signal quality** → better hypotheses → better **decision quality** → accurate specs → with good **context** and **prompt quality**, generation needs fewer overrides → better **outcome quality** → which feeds back as high-quality signals. Break any part and degradation propagates.",
        },
      ],
    },
    {
      id: "kpi-transition",
      marker: "9.3",
      title: "From Traditional KPIs to Agentic KPIs",
      blocks: [
        {
          type: "lead",
          text: "Every traditional KPI has a reason it was adopted and a reason it fails in the Agentic PDLC. This is the reference for teams transitioning their measurement framework — and for the stakeholder conversations about why the old dashboard no longer tells the right story.",
        },
        {
          type: "diagram",
          key: "kpiTransition",
          caption:
            "Diagram 9.3 — The KPI Transition Map. Every traditional metric — retired, replaced, or retained. Filter by category to see the direct-replacement guide.",
        },
        {
          type: "cards",
          columns: 3,
          items: [
            { title: "Retired", accent: "error", body: "Story points · Sprint velocity · Lines of code · Test coverage % · PRDs/quarter · Capacity utilisation · Planned vs. actual." },
            { title: "Retained", accent: "success", body: "NPS/CSAT (as Signal Detection input) · MTTR · Deployment frequency · Rollback rate · Conversion rate · Revenue/ARPU." },
            { title: "Genuinely new", accent: "indigo", body: "Token ROI · Human override rate · Gate throughput · Signal diversity · Context staleness · Benefits Register hit rate · Business case accuracy · Realisation debt." },
          ],
        },
      ],
    },
    {
      id: "dfv",
      marker: "9.4",
      title: "Desirability · Feasibility · Viability",
      blocks: [
        {
          type: "lead",
          text: "The stage-based KPI framework is operationally useful but flat. It does not answer the question leadership asks most: are we building the right thing, can we build it well, and is it worth building? In the Agentic PDLC, DxFxV becomes a continuous evaluation framework — every KPI belongs to at least one lens.",
        },
        {
          type: "diagram",
          key: "dfv",
          caption:
            "Diagram 9.4 — Desirability, Feasibility, Viability as cross-cutting lenses. Each lens has leading and lagging indicators; the intersections (Spec acceptance, Benefits Register quality, Token ROI) are the most diagnostic signals in the framework.",
        },
        {
          type: "prose",
          text: "This dashboard answers the three questions that matter at every board review and client QBR: are people going to want this, can we build it well, and will it return the investment? The Agentic PDLC now has a measurement framework that answers all three.",
        },
      ],
    },
  ],
};
