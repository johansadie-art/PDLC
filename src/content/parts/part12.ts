import type { Part } from "../types";

export const part12: Part = {
  index: "12",
  id: "part-market",
  title: "Market Evidence & the Product Bottleneck",
  subtitle:
    "As AI collapses the cost of building software, the binding constraint moves upstream — to deciding what to build. The 2026 evidence base for why the foundations in this playbook are the dividing line.",
  sections: [
    {
      id: "bottleneck",
      marker: "12.1",
      title: "The Bottleneck Has Moved to Product",
      eyebrow: "Part 12 — Market Evidence",
      blocks: [
        {
          type: "lead",
          text: "As AI collapses the cost of building software, the binding constraint moves upstream — from writing code to deciding what to build, validating it, and defining it well. That is product work, and it is the case for investing in Dimension 2.",
        },
        {
          type: "stats",
          items: [
            { value: 1, suffix: ":1", label: "Engineer-to-PM ratio inverting from ~6:1 — Andrew Ng calls PM \"AI's new bottleneck\" (2026)" },
            { value: 80, suffix: "%", label: "of product features are rarely or never used — a product decision (Pendo)" },
            { value: 3, prefix: "1 in ", label: "AI-spend dollars attributable to a business outcome (CloudBees 2026)" },
          ],
        },
        {
          type: "quote",
          text: "Writing code is no longer the bottleneck; governing it — and deciding what's worth building — is.",
          attribution: "CloudBees, 2026 State of Code Abundance",
        },
      ],
    },
    {
      id: "convergence",
      marker: "12.2",
      title: "The Convergence — and Why Most Will Stall",
      blocks: [
        {
          type: "lead",
          text: "The model in this playbook is where the industry is converging; the dividing line is foundations.",
        },
        {
          type: "list",
          items: [
            { label: "EY + 8090", text: "Launched an AI-native PDLC (March 2026): an agent \"mesh\" with human oversight across the full lifecycle (vendor figures: 70% productivity gains, 80× faster delivery)." },
            { label: "IBM", text: "Formalised the Agent Development Lifecycle (ADLC): governance, evals, progressive rollout, and audit trails replace pass/fail unit tests." },
            { label: "Anthropic 2026", text: "The engineer becomes an orchestrator; teams use AI in ~60% of work but can fully delegate only 0–20%." },
            { label: "Miyagami", text: "Compresses discovery → design → delivery to ~12 weeks (from 12+ months) on the back of a context layer." },
            { label: "Gartner", text: "AI agents will augment/automate ~50% of business decisions by 2027 — but 40%+ of agentic AI projects will be cancelled by end of 2027." },
          ],
        },
        {
          type: "callout",
          tone: "indigo",
          title: "The dividing line",
          text: "The foundations this playbook builds — context-layer quality, governance, autonomy earned per stage — are what separate the two outcomes.",
        },
      ],
    },
    {
      id: "evidence-base",
      marker: "12.3",
      title: "The Evidence Base for \"Acceleration is Engineered\"",
      blocks: [
        {
          type: "lead",
          text: "The thesis that a quality system, not tools, is what makes speed survive production rests on independent evidence.",
        },
        {
          type: "list",
          items: [
            { label: "METR RCT (2025)", text: "Experienced developers on mature codebases were 19% slower with AI while believing they were 20% faster — the perception gap is the durable finding." },
            { label: "Faros (2026)", text: "In the highest AI-adoption quarters, production incidents per PR more than tripled (+243%) and median review time rose +441%." },
            { label: "PwC (2026)", text: "Over half of CEOs report no realised AI benefit yet; the minority with gains built the foundations before they scaled." },
            { label: "Veracode (2025)", text: "~45% of AI-generated code samples carried an OWASP Top-10 flaw — and bigger models didn't score better. Security must sit in the gate." },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "Honest-numbers discipline",
          text: "Sustained organisation-level gain is 1.5–2× with the operating model in place. Bigger multipliers are real but belong to named workflows with known baselines — never company-level claims like the unverified \"80×\" now circulating. Three outcomes — workflow throughput, SDLC velocity, enablement — are measured separately and never summed.",
        },
        {
          type: "quote",
          text: "This playbook is a living document. Every client engagement, every hypothesis tested, every deployment analysed contributes to the next version. The playbook itself compounds with every cycle.",
          attribution: "Agentic PDLC · Symphony Community of Practice · 2026",
        },
      ],
    },
  ],
};
