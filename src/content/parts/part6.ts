import type { Part } from "../types";

export const part6: Part = {
  index: "06",
  id: "part-human",
  title: "The Human Dimension",
  subtitle:
    "The agentic model does not eliminate human roles. It elevates them — from execution to judgment. Five roles, one new, and an accountability chain that concentrates rather than diffuses.",
  sections: [
    {
      id: "human-role",
      marker: "6.1",
      title: "The Evolving Human Role",
      eyebrow: "Part 6 — The Human Dimension",
      blocks: [
        {
          type: "lead",
          text: "The Agentic PDLC does not eliminate human roles. It elevates them. The most fundamental shift is in where human value is created: away from execution, toward judgment. This is not a gradual transition — it is structural and irreversible.",
        },
        {
          type: "table",
          headers: ["Stage", "Traditional human role", "Agentic human role"],
          rows: [
            ["Signal Detection (A1)", "Author of research plans", "Director: defines signal quality; promotes, parks, dismisses"],
            ["Hypothesis (A2)", "Writes the hypothesis from scratch", "Selector: chooses framing, enriches, commits or kills"],
            ["Validation (A3)", "Builds prototypes, conducts sessions", "Judgment layer: interprets, decides commit/reframe/kill"],
            ["Specification (A4)", "Writes PRD over days", "Quality gate: reviews AI spec, adds context, approves"],
            ["Generative Design (S-A2)", "Pixels, flows, copy — all manual", "Curator: selects, overrides, directs creative decisions"],
            ["Agentic Development (S-A3)", "Writes code", "Orchestrator: defines scope, reviews, handles escalations"],
            ["Autonomous Testing (S-A4)", "Writes test cases", "Governor: sets standards, reviews coverage, signs off DoD"],
            ["Deployment (A6)", "Manual rollout", "Policy setter: defines thresholds, approves irreversibles"],
            ["Optimization (A7)", "Reviews dashboards quarterly", "Strategic filter: decides what to act on"],
          ],
        },
        { type: "heading", text: "What AI Structurally Cannot Do" },
        {
          type: "list",
          items: [
            { label: "Feel whether it is right", text: "Aesthetic judgment and emotional resonance require embodied human experience." },
            { label: "Know organisational history", text: "Decisions made in hallways, commitments made verbally, undocumented failures." },
            { label: "Weigh political context", text: "What is technically correct is frequently not what is strategically possible." },
            { label: "Own the bet", text: "Committing a hypothesis stakes resources on a claim about the future. That accountability is irreducibly human." },
            { label: "Set ethical boundaries", text: "What AI may do autonomously, what needs approval, what cannot be done at all." },
          ],
        },
      ],
    },
    {
      id: "new-team",
      marker: "6.2",
      title: "The New Team Model",
      blocks: [
        {
          type: "lead",
          text: "The Agentic PDLC changes team composition, role definitions, and the nature of cross-functional collaboration.",
        },
        {
          type: "list",
          items: [
            { label: "Product Managers", text: "Become signal governors and hypothesis directors. PMs who only write PRDs become structurally redundant." },
            { label: "Designers", text: "Become design system curators and creative directors, scaling taste across far more surface area." },
            { label: "Engineers", text: "Become agent orchestrators. The highest-value skill becomes context layer architecture." },
            { label: "QA Engineers", text: "Become quality governors — defining standards and reviewing AI coverage for gaps." },
            { label: "The CoP", text: "Becomes the enablement layer maintaining playbooks, context standards, and AI literacy." },
          ],
        },
      ],
    },
    {
      id: "design-thinking",
      marker: "6.3",
      title: "Design Thinking in the Agentic PDLC",
      blocks: [
        {
          type: "lead",
          text: "Design Thinking does not fit into the Agentic PDLC. It is the philosophical DNA of the front end — already embedded in Signal Detection through Validation. AI does not replace Design Thinking. It accelerates its mechanics, freeing practitioners to do more of the genuinely human work.",
        },
        {
          type: "diagram",
          key: "designThinking",
          caption:
            "Diagram 6.3 — Design Thinking mapped onto the Agentic PDLC. The AI column shows what is accelerated. The human column shows what remains irreducibly human — and always will.",
        },
        {
          type: "callout",
          tone: "error",
          title: "The critical risk",
          text: "Speed makes teams tempted to skip the Empathize stage. Signals tell you what people did. Only genuine empathy tells you what they meant. Teams that reduce empathy work because AI handles synthesis will build faster toward the wrong thing.",
        },
        {
          type: "prose",
          text: "The Double Diamond maps cleanly: **Discover** → Signal Detection; **Define** → Hypothesis–Specification; **Develop** → Context-Driven Specification to Agentic Development; **Deliver** → Deployment + Optimization. AI makes the diverge phase cheaper. It does not change the fact that convergence — the commit — is always a human judgment call.",
        },
      ],
    },
    {
      id: "future-team",
      marker: "6.4",
      title: "The Future Product Team",
      blocks: [
        {
          type: "lead",
          text: "The traditional team was designed around human execution capacity. That model is structurally obsolete. The new constraint is judgment quality, not execution capacity. AI provides effectively unlimited generation capacity. What limits it is the quality of the direction it receives.",
        },
        {
          type: "diagram",
          key: "futureTeam",
          caption:
            "Diagram 6.4 — The Future Product Team. The CoP sits above the team as a shared capability layer. Five core roles each own a distinct judgment domain. The Context Architect is the only genuinely new role — and the highest-leverage one.",
        },
        {
          type: "prose",
          text: "No role exists in the future team solely to produce artefacts. What remains is every role that requires judgment that cannot be structured into a prompt: selecting the right direction, committing the right hypothesis, governing the right quality standard, owning the right context.",
        },
      ],
    },
    {
      id: "accountability",
      marker: "6.5",
      title: "Accountability in the Agentic PDLC",
      blocks: [
        {
          type: "lead",
          text: "Accountability in the agentic model does not diffuse. It concentrates — on the human decision points that remain at every stage. The fact that AI produced an artefact does not transfer accountability to the AI.",
        },
        {
          type: "callout",
          tone: "indigo",
          title: "The core principle",
          text: "Accountability follows the decision, not the generation. AI generates. Humans decide. Whoever commits, approves, or governs a decision owns the consequence.",
        },
        {
          type: "diagram",
          key: "accountabilityChain",
          caption:
            "Diagram 6.5 — The accountability chain. Every stage has a named human decision point and a named accountable role. The four gap cards are the failures most organisations experience first — and must design solutions for before going agentic, not after.",
        },
        {
          type: "quote",
          text: "The product is still a human responsibility. The tools that build it have changed. The accountability has not. The Outcome Director owns the bet — regardless of which AI generated the options.",
        },
      ],
    },
  ],
};
