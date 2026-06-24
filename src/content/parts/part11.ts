import type { Part } from "../types";

export const part11: Part = {
  index: "11",
  id: "part-adlc",
  title: "The ADLC Context",
  subtitle:
    "The Agentic PDLC is Dimension 2 of a larger operating model — Symphony's Agentic Delivery Lifecycle. Here is where it fits in the seven-dimension chain.",
  sections: [
    {
      id: "adlc-chain",
      marker: "11.1",
      title: "From Product Lifecycle to Delivery Chain",
      eyebrow: "Part 11 — The ADLC Context",
      blocks: [
        {
          type: "lead",
          text: "The Agentic PDLC described in Parts 1–10 is the product end of a larger operating model: Symphony's ADLC — the Agentic Delivery Lifecycle. The ADLC runs the whole value chain end to end.",
        },
        {
          type: "callout",
          tone: "indigo",
          title: "The chain",
          text: "Strategy → Product (PDLC) → [handover] → Software (SDLC) → [handover] → Infrastructure, all wrapped by ADLC governance.",
        },
        {
          type: "prose",
          text: "The Agentic PDLC is **Dimension 2** of that chain. It owns \"what & why → up to user stories\" — discovery, definition, and the spec that becomes the contract for everything downstream.",
        },
      ],
    },
    {
      id: "seven-dimensions",
      marker: "11.2",
      title: "The Seven Dimensions",
      blocks: [
        {
          type: "lead",
          text: "The ADLC is scored across seven dimensions. The PDLC (Dimension 2) and the SDLC (Dimension 4) are two of the delivery pillars, joined by handovers and wrapped by end-to-end governance. This is how the product and software lifecycles sit inside the larger chain.",
        },
        {
          type: "diagram",
          key: "adlcDimensions",
          caption:
            "Diagram 11.1 — The seven dimensions of the ADLC delivery chain. PDLC and SDLC are pillars 2 and 4; Dimensions 3 and 5 are the handovers between them; Dimension 1 sets strategic direction and Dimension 7 wraps everything in governance. Each dimension is scored independently on the L1 Manual → L5 Agentic scale — click any level to explore it.",
        },
        {
          type: "table",
          highlightLast: true,
          headers: ["#", "Dimension", "Scope", "Scale"],
          rows: [
            ["1", "Strategic AI Solution", "How strategically the solution drives client value", "No AI → Agentic"],
            ["2", "PDLC maturity", "What & why → user stories (this playbook)", "Manual → Agentic"],
            ["3", "PDLC → SDLC handover", "How requirements/specs cross into build", "Informal → Seamless"],
            ["4", "SDLC maturity", "User stories → production deployment", "Manual → Agentic"],
            ["5", "SDLC → Infra handover", "How build crosses into release/ops", "Manual → Agentic"],
            ["6", "Infrastructure maturity", "Cloud production: pipelines, monitoring, security", "Manual → Agentic"],
            ["7", "ADLC governance", "End-to-end management across human + agentic", "Manual → Agentic"],
          ],
        },
        {
          type: "prose",
          text: "Each dimension is scored independently 1–5; a team can be L4 in build and L2 in discovery. Levels are **earned per stage by a record** — eval coverage, incident history, calibrated thresholds — never declared company-wide.",
        },
      ],
    },
    {
      id: "adlc-mapping",
      marker: "11.3",
      title: "How Signal Detection → Optimization Maps onto the Chain",
      blocks: [
        {
          type: "list",
          items: [
            { label: "Signal Detection–Specification → Dimension 2 (PDLC)", text: "The product front: discovery to a frozen spec." },
            { label: "Specification → Generation → Dimension 3", text: "The spec freeze is the handoff; the spec is the contract." },
            { label: "Generation → Dimension 4 (SDLC)", text: "Wraps the agentic SDLC (Context-Driven Specification → Autonomous Operations)." },
            { label: "Deployment → Dimensions 5–6", text: "Release + Infrastructure / operate." },
            { label: "Optimization → Dimension 7 + loop to Signal Detection", text: "The continuous learning loop is the governance discipline that keeps the chain honest." },
          ],
        },
        {
          type: "callout",
          tone: "indigo",
          title: "The maturity scale — L1 to L5",
          text: "L1 Manual · L2 Tool-assisted · L3 AI-augmented (eval gate in CI) · L4 AI-integrated (agents own work with human gates) · L5 Agentic (zero-touch within earned classes; the gate self-expands as the record grows). \"People decide, agents do\" — the same principle the ADLC calls the Dark Factory.",
        },
      ],
    },
  ],
};
