"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DiagramFrame } from "./DiagramFrame";
import { useScrollAnimation } from "@/lib/animation/useScrollAnimation";
import { Modal } from "@/components/ui/Modal";
import { DeepDiveTrigger } from "@/components/ui/DeepDiveTrigger";

const STAGES = [
  { id: "A1", name: "Signal Detection", detail: "Always-on monitoring, classification, and scoring of signals from eight source categories. Replaces quarterly discovery with continuous infrastructure.", ai: "Monitors eight signal categories 24/7, classifies and scores each, clusters themes across thousands of inputs, and surfaces the highest-confidence opportunities.", human: "Curates which signals matter, owns dismissal decisions, and protects against single-source bias. Wrong dismissals are judgment failures." },
  { id: "A2", name: "Hypothesis", detail: "AI generates four framings (JTBD, Lean, HMW, Opportunity) simultaneously. The PM selects, enriches, and commits the bet.", ai: "Generates four competing framings of the problem, scores each against OKRs and prior context, and surfaces the assumption map behind each bet.", human: "Selects the framing that fits strategy, adds organisational and political knowledge, and commits or kills — owning the bet regardless of which framing AI produced." },
  { id: "A3", name: "Validation", detail: "The riskiest assumption is tested before any spec work — the cheapest point in the lifecycle to discover you are wrong.", ai: "Generates test scripts from the assumption map, synthesises session findings into themes, and computes a validation confidence score.", human: "Runs the actual user sessions, interprets what failure means, and holds the ethical bar for what counts as sufficient evidence." },
  { id: "A4", name: "Specification", detail: "The validated hypothesis becomes a dual-audience artefact: narrative for humans, structured assertions for agents. The spec is now a prompt.", ai: "Drafts the dual-audience spec — narrative for humans, structured assertions for agents — and a complete Benefits Register entry.", human: "Signs off on completeness. Ambiguity that causes downstream rework is a sign-off failure, not an AI failure." },
  { id: "A5", name: "Generation", detail: "The Agentic SDLC (Context-Driven Specification → Autonomous Operations) executes: design, code, tests, deployment orchestration, docs. The PM shifts to governance.", ai: "Runs the full Agentic SDLC: design, code, tests, deployment orchestration, and documentation — generating at machine speed.", human: "Governs rather than executes: approves architecture, reviews PRs, and watches the override rate as the primary quality signal." },
  { id: "A6", name: "Deployment", detail: "The richest signal source in the lifecycle. Progressive rollout doubles as a structured signal-collection programme.", ai: "Orchestrates dark launches, canary rollouts, and automated rollback, while instrumenting the release as a structured signal-collection programme.", human: "Owns irreversible decisions and sets the success threshold above which full rollout proceeds — accountability for the bar, not the button." },
  { id: "A7", name: "Optimization", detail: "The only stage that reads from every other stage across every cycle. Optimises the product — and the process of building it. Feeds Signal Detection.", ai: "Reads from every other stage, runs continuous A/B and performance analysis, and surfaces actionable optimisation opportunities back into Signal Detection.", human: "Owns strategic direction. AI cannot commit bets autonomously — the human decides what the optimisation signals mean for the roadmap." },
];

export function AgenticRing() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const R = 150;
  const C = 200;

  const ref = useScrollAnimation<HTMLDivElement>(({ root, q, gsap, reduced }) => {
    const nodes = q(".ring-node");
    if (!nodes.length) return;
    if (reduced) {
      gsap.set(nodes, { scale: 1, opacity: 1 });
      return;
    }
    gsap.set(nodes, { scale: 0, opacity: 0, transformOrigin: "center" });
    gsap.to(nodes, {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      ease: "back.out(1.7)",
      stagger: 0.08,
      transformOrigin: "center",
      scrollTrigger: { trigger: root, start: "top 80%" },
    });
  });

  return (
    <DiagramFrame
      label="Diagram 2.1"
      title="The Agentic PDLC — Signal Detection → Optimization"
      subtitle="Click any stage. The context layer at the centre receives a deposit from every stage and feeds the next cycle."
    >
      <div ref={ref} className="grid items-center gap-8 lg:grid-cols-[minmax(0,400px)_1fr]">
        <div className="relative mx-auto w-full max-w-[400px]">
          <svg className="ring-svg h-auto w-full" width="400" height="400" viewBox="0 0 400 400">
            <circle cx={C} cy={C} r={R} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            {/* loop-back arc highlight A7 -> A1 */}
            <circle
              cx={C}
              cy={C}
              r={R}
              fill="none"
              stroke="url(#ringGrad)"
              strokeWidth="2"
              strokeDasharray="6 8"
              className="animate-spin-slow"
              style={{ transformOrigin: "center" }}
            />
            <defs>
              <radialGradient id="coreGrad">
                <stop offset="0%" stopColor="#8c89ff" />
                <stop offset="100%" stopColor="#4441d9" />
              </radialGradient>
              <linearGradient id="ringGrad">
                <stop offset="0%" stopColor="#6c69ff" />
                <stop offset="100%" stopColor="#45e0e0" />
              </linearGradient>
            </defs>

            {/* pulsing context core */}
            <circle cx={C} cy={C} r="52" fill="rgba(108,105,255,0.12)">
              <animate attributeName="r" values="48;58;48" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx={C} cy={C} r="40" fill="url(#coreGrad)" opacity="0.9" />
            <text x={C} y={C - 4} textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">Context</text>
            <text x={C} y={C + 10} textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="11" fontWeight="700">Layer</text>

            {STAGES.map((s, i) => {
              const angle = (i / STAGES.length) * Math.PI * 2 - Math.PI / 2;
              const x = C + R * Math.cos(angle);
              const y = C + R * Math.sin(angle);
              const on = i === active;
              const lines = s.name.split(" ");
              return (
                <g
                  key={s.id}
                  className="ring-node"
                  style={{ cursor: "pointer" }}
                  onClick={() => setActive(i)}
                >
                  <line x1={C} y1={C} x2={x} y2={y} stroke={on ? "#6c69ff" : "rgba(255,255,255,0.07)"} strokeWidth={on ? 2 : 1} />
                  <circle cx={x} cy={y} r={on ? 42 : 36} fill={on ? "#6c69ff" : "#14141f"} stroke={on ? "#a5a2ff" : "rgba(255,255,255,0.2)"} strokeWidth="1.5" />
                  <text
                    x={x}
                    y={y}
                    textAnchor="middle"
                    fill="#fff"
                    fontSize="8.5"
                    fontWeight="600"
                    style={{ pointerEvents: "none" }}
                  >
                    {lines.map((ln, li) => (
                      <tspan
                        key={li}
                        x={x}
                        dy={li === 0 ? (lines.length > 1 ? -2 : 3) : 10}
                      >
                        {ln}
                      </tspan>
                    ))}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={STAGES[active].id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="eyebrow text-indigo-300">
                Stage {STAGES[active].id} · The Agentic PDLC
              </div>
              <div className="mt-2 font-display text-4xl font-bold text-fog-100">
                {STAGES[active].name}
              </div>
              <p className="mt-4 body-base text-fog-300">{STAGES[active].detail}</p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {STAGES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors ${i === active ? "bg-indigo-500 text-white" : "bg-white/5 text-fog-400 hover:bg-white/10"}`}
              >
                {s.name}
              </button>
            ))}
          </div>
          <div className="mt-5">
            <DeepDiveTrigger
              label={`Deep dive: ${STAGES[active].name}`}
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        eyebrow={`Stage ${STAGES[active].id}`}
        title={STAGES[active].name}
      >
        <p className="body-base text-fog-300">{STAGES[active].detail}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-indigo-500/25 bg-indigo-500/[0.06] p-5">
            <div className="eyebrow mb-2">AI executes</div>
            <p className="text-sm leading-relaxed text-fog-300">{STAGES[active].ai}</p>
          </div>
          <div className="rounded-2xl border border-success/25 bg-success/[0.05] p-5">
            <div className="eyebrow mb-2 text-success">Human decides</div>
            <p className="text-sm leading-relaxed text-fog-300">{STAGES[active].human}</p>
          </div>
        </div>
      </Modal>
    </DiagramFrame>
  );
}
