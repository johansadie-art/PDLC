import type { Part } from "../types";

export const part5: Part = {
  index: "05",
  id: "part-infrastructure",
  title: "Enabling Infrastructure",
  subtitle:
    "Two pieces of infrastructure make the whole model work: the context layer that AI reads from and writes to, and the token-ROI discipline that routes each task to human or AI.",
  sections: [
    {
      id: "context-layer",
      marker: "5.1",
      title: "The Context Layer",
      eyebrow: "Part 5 — Enabling Infrastructure",
      blocks: [
        {
          type: "lead",
          text: "The context layer is the single most important piece of infrastructure in the Agentic PDLC. It is not a tool, a platform, or a feature. It is a discipline: the practice of structuring business knowledge in a way that AI agents can query, use, and build upon.",
        },
        {
          type: "callout",
          tone: "indigo",
          title: "The core principle",
          text: "AI agents are only as good as the context they receive. Context layer quality is the primary determinant of AI output quality — not the model, not the tooling, not the prompt.",
        },
        {
          type: "prose",
          text: "The context layer must be **business-owned, not vendor-locked.** Third-party tools (Jira, Slack, Notion, Figma) are operational data stores — valuable inputs but not the canonical source of truth. The canonical format is Markdown .md files, Git-versioned, with CLAUDE.md / context files that AI tools recognise.",
        },
        {
          type: "cards",
          columns: 2,
          items: [
            { title: "Product context", body: "Strategy, OKRs, roadmap, personas, JTBDs, HMWs, hypotheses, acceptance criteria, Definition of Done." },
            { title: "Engineering context", body: "Architecture overview, ADRs, system patterns, API contracts, data models, CI/CD config, deployment rules, test standards." },
            { title: "Customer context", body: "Research syntheses, interview themes, feedback patterns, segment insights, NPS/CSAT trends." },
            { title: "Org & process context", body: "Team structure, ways of working, governance rules, AI policy, licence boundaries, escalation paths." },
          ],
        },
        {
          type: "prose",
          text: "Without a context layer, knowledge is locked in vendor tools, context is lost at every handoff, agents reinvent solved problems, and no institutional memory means no compounding. With it, every agent starts every task with the right context, decisions compound, and token costs per feature decrease over time.",
        },
      ],
    },
    {
      id: "token-roi",
      marker: "5.2",
      title: "Token ROI — Human vs AI Routing",
      blocks: [
        {
          type: "lead",
          text: "Story points measure human effort. Token budgets measure AI effort. In a hybrid human-AI team, both must be planned — and allocating the right resource to the right task is the new sprint-planning capability.",
        },
        {
          type: "cards",
          columns: 3,
          items: [
            { title: "Route to human when", body: "Judgment depends on political/organisational context · the task takes under five minutes · it requires emotional intelligence or empathy · output cannot be verified against explicit criteria (taste, strategy, ethics)." },
            { title: "Route to AI when", body: "The task is generation, synthesis, transformation, or pattern detection · it would take a human more than 30 minutes · input can be structured precisely · output can be verified against acceptance criteria." },
            { title: "Hybrid when", body: "The task needs novel judgment AND substantial generation: architecture decisions, complex specs, strategic roadmaps. Human directs; AI executes." },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "Context quality is the efficiency multiplier",
          text: "Bad context: AI pays a 3–5× token tax on every task to reconstruct context it should have been given. Good context: every token goes toward the actual problem, and cost per feature decreases with every cycle.",
        },
      ],
    },
  ],
};
