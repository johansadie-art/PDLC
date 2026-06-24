import type { Part } from "../types";

export const part10: Part = {
  index: "10",
  id: "part-practices",
  title: "Practices & Adoption",
  subtitle:
    "Getting the framework right is necessary but not sufficient. Release cadence becomes a quality threshold, documentation inverts from output to input, and adoption is a behaviour-change discipline.",
  sections: [
    {
      id: "release-cycle",
      marker: "10.1",
      title: "Release Cycle in the Agentic PDLC",
      eyebrow: "Part 10 — Practices & Adoption",
      blocks: [
        {
          type: "lead",
          text: "The two-week sprint is a planning construct designed for human-speed execution. In an Agentic PDLC, the sprint's function as a release container breaks down. Release cadence transforms from a calendar rhythm into a quality threshold model: you release when the signal is right, not when the sprint ends.",
        },
        {
          type: "diagram",
          key: "releaseCycle",
          caption:
            "Diagram 10.1 — Release cycle: from calendar to quality threshold. Gate clearance becomes the release trigger. The human role shifts from \"deciding when to release\" to \"setting the success threshold\" — accountability for the bar, not the button.",
        },
        {
          type: "prose",
          text: "Token spend becomes a release signal: if spend is accelerating but the override rate has plateaued, further iteration is unlikely to close the gap. Ship what is ready, observe real signals through Optimization, and let the deployed product inform the next iteration.",
        },
      ],
    },
    {
      id: "documentation",
      marker: "10.2",
      title: "Documentation as Infrastructure",
      blocks: [
        {
          type: "lead",
          text: "In a traditional organisation, documentation is an output — written after the work, deprioritised, quickly outdated, rarely read. This model is incompatible with the Agentic PDLC. Documentation moves from output to infrastructure: maintained as a condition of the work being done well.",
        },
        {
          type: "diagram",
          key: "documentation",
          caption:
            "Diagram 10.2 — Three types of documentation. Context docs (AI reads before generating), Decision docs (human gate choices), and Artifact docs (AI generates, humans verify). Each has a different owner, cadence, and reader.",
        },
        {
          type: "callout",
          tone: "indigo",
          title: "The new habit",
          text: "Update the context layer before closing the task. Minutes added per task. Over a quarter this compounds into a generation pipeline that consistently needs minimal human correction.",
        },
      ],
    },
    {
      id: "change-management",
      marker: "10.3",
      title: "Change Management & Adoption",
      blocks: [
        {
          type: "lead",
          text: "Every organisation that has attempted to adopt the Agentic PDLC discovers the same truth: the framework is not the hard part. The hard part is getting experienced, capable people to change how they work — when the old way still feels faster and more controllable.",
        },
        {
          type: "diagram",
          key: "changeManagement",
          caption:
            "Diagram 10.3 — Change management. Resistance concentrates at two stages: Signal Detection (PMs resisting AI signal synthesis) and Generation (engineers resisting AI-generated code). Click a resistance pattern to see the reframe. The J-curve is real — brief the leadership before adoption, not after the dip.",
        },
        {
          type: "prose",
          text: "The most effective adoption mechanism is not training, documentation, or mandate. It is building the context layer together. The act of making tacit knowledge explicit — in a format the whole team and the AI can access — is the moment the Agentic PDLC stops being a framework and starts being how the team works.",
        },
        {
          type: "cards",
          columns: 3,
          items: [
            { title: "Shadow", body: "Observe AI-assisted work. Participate in context updates. Review output without owning the decision." },
            { title: "Co-lead", body: "Joint ownership of one stage. Gate decisions with a safety net. Build prompt familiarity and review discipline." },
            { title: "Lead", body: "Full accountability for one or more stages. Set gate criteria. Make override decisions. Onboard the next cohort." },
          ],
        },
      ],
    },
  ],
};
