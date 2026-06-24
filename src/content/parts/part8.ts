import type { Part } from "../types";

export const part8: Part = {
  index: "08",
  id: "part-governance",
  title: "Operational Governance",
  subtitle:
    "Generation without governance degrades. Two functions sit above the cycle: ProductOps keeps the machine healthy; Value Realisation proves the machine builds the right things.",
  sections: [
    {
      id: "productops",
      marker: "8.1",
      title: "ProductOps — The Operational Backbone",
      eyebrow: "Part 8 — Operational Governance",
      blocks: [
        {
          type: "lead",
          text: "Every stage has a named owner. But who keeps the machine itself running? The signal pipelines, the token dashboards, the prompt version control, the context review cycles. This is ProductOps. In an Agentic PDLC, it is not optional.",
        },
        {
          type: "prose",
          text: "ProductOps is the operational function that ensures the Agentic PDLC operates consistently, measurably, and at scale. It is the difference between a framework that works for one high-performing team and one that works across twelve teams of varying maturity.",
        },
        {
          type: "diagram",
          key: "productOpsDomains",
          caption:
            "Diagram 8.1 — ProductOps: five operational domains. ProductOps sits within the CoP as a shared capability — not a full-time seat on every team. It is to product delivery what Platform Engineering is to software delivery.",
        },
        {
          type: "table",
          headers: ["Cadence", "Activity"],
          rows: [
            ["Daily", "Pipeline health dashboard review — flag anomalies"],
            ["Weekly", "Context layer currency check — identify stale files"],
            ["Bi-weekly", "Token ROI review per team — escalate outliers"],
            ["Monthly", "Prompt library review — retire and promote patterns"],
            ["Quarterly", "Context layer deep review with Context Architect"],
            ["Per-engagement", "New team onboarding into the framework"],
          ],
        },
      ],
    },
    {
      id: "value-realisation",
      marker: "8.2",
      title: "Value Realisation Framework",
      blocks: [
        {
          type: "lead",
          text: "Optimization asks: is the product performing better than it was? Value Realisation asks: did this product deliver the business outcome that justified building it? These are different questions, on different timeframes, requiring different evidence.",
        },
        {
          type: "table",
          headers: ["Field", "Description"],
          rows: [
            ["Business outcome", "The specific, measurable result the organisation expects"],
            ["Baseline", "The current state before deployment — the \"before\" measurement"],
            ["Target", "The numeric target and the direction of change"],
            ["Timeframe", "When measured (30 / 60 / 90 days post-deployment)"],
            ["Attribution model", "How you distinguish this feature's effect from other changes"],
            ["Owner", "The Outcome Director accountable for realisation, not just delivery"],
          ],
        },
        {
          type: "diagram",
          key: "valueRealisation",
          caption:
            "Diagram 8.2 — The Value Realisation Framework. From Benefits Register at Specification to Value Verdict at 90 days, then feeding Signal Detection. A specification without a benefits entry is incomplete.",
        },
        {
          type: "callout",
          tone: "error",
          title: "Realisation debt",
          text: "When teams skip the measurement windows, they accumulate realisation debt — the gap between outcomes promised and outcomes measured. In an agentic team that ships faster, it accumulates faster too.",
        },
      ],
    },
    {
      id: "closed-loop",
      marker: "8.3",
      title: "The Closed Loop — Optimization to Signal Detection",
      blocks: [
        {
          type: "lead",
          text: "The Agentic PDLC is not a linear pipeline. It is a cycle. The most important design decision is not any individual stage — it is the connection between Optimization and Signal Detection that makes the entire system self-improving over time.",
        },
        {
          type: "diagram",
          key: "closedLoop",
          caption:
            "Diagram 8.3 — The closed loop. Two signal streams: the product stream (Optimization → Signal Detection, continuous, tactical) and the business stream (Value Realisation → Signal Detection, milestone-based, strategic). Both must be explicitly wired into Signal Detection.",
        },
        {
          type: "prose",
          text: "A failed hypothesis is not a loss to be filed away. It is a constraint that narrows the hypothesis space for the next cycle. Over time, a mature context layer carries not just what the team validated but what it ruled out. This negative knowledge is as valuable as positive knowledge.",
        },
        {
          type: "quote",
          text: "The organisations that will lead in an agentic world are not those that ship the fastest. They are those that learn the fastest. The closed loop is the mechanism of that learning.",
        },
        {
          type: "cards",
          columns: 3,
          items: [
            { title: "Stage governance", body: "Part 6 — Human accountability at every AI generation step. The decision points that cannot be delegated." },
            { title: "Operational governance", body: "Part 8 — ProductOps keeps the machine healthy; Value Realisation measures whether it builds the right things." },
            { title: "Strategic governance", body: "The CoP — standards, patterns, and learning propagated across teams. Remove any layer and the system degrades." },
          ],
        },
      ],
    },
  ],
};
