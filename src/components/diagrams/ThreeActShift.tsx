"use client";

import { DiagramFrame } from "./DiagramFrame";
import { useScrollAnimation } from "@/lib/animation/useScrollAnimation";

const ACTS = [
  {
    name: "PDLC 1.0",
    tag: "Human-Driven",
    human: 90,
    ai: 10,
    note: "Humans author everything. AI is a search engine at best.",
  },
  {
    name: "PDLC 2.0",
    tag: "AI-Assisted",
    human: 60,
    ai: 40,
    note: "AI accelerates tasks. Humans still own every stage.",
  },
  {
    name: "PDLC 3.0",
    tag: "Agentic",
    human: 25,
    ai: 75,
    note: "AI runs continuous processes. Humans govern and direct.",
  },
];

export function ThreeActShift() {
  const ref = useScrollAnimation<HTMLDivElement>(({ root, q, gsap, reduced }) => {
    const bars = q<HTMLElement>(".bar-ai, .bar-human");
    if (!bars.length) return;
    if (reduced) {
      bars.forEach((el) => (el.style.height = el.dataset.h || "0%"));
      return;
    }
    gsap.set(bars, { height: "0%" });
    bars.forEach((el) => {
      gsap.to(el, {
        height: el.dataset.h,
        duration: 1.4,
        ease: "expo.out",
        scrollTrigger: { trigger: root, start: "top 80%" },
      });
    });
  });

  return (
    <DiagramFrame
      label="Diagram 1.1"
      title="The Three-Act Shift"
      subtitle="Execution migrates from human to AI across three eras. Governance stays — and grows — in human hands."
    >
      <div ref={ref} className="grid grid-cols-3 gap-4 sm:gap-8">
        {ACTS.map((act) => (
          <div key={act.name} className="flex flex-col items-center">
            <div className="flex h-64 w-full items-end justify-center gap-2 sm:gap-3">
              <div className="flex h-full w-1/2 flex-col justify-end">
                <div
                  className="bar-human w-full rounded-t-lg bg-gradient-to-t from-fog-500/40 to-fog-300/60"
                  data-h={`${act.human}%`}
                />
              </div>
              <div className="flex h-full w-1/2 flex-col justify-end">
                <div
                  className="bar-ai w-full rounded-t-lg bg-gradient-to-t from-indigo-700 to-indigo-400 glow-indigo"
                  data-h={`${act.ai}%`}
                />
              </div>
            </div>
            <div className="mt-4 text-center">
              <div className="font-display text-lg font-bold text-fog-100">
                {act.name}
              </div>
              <div className="eyebrow mt-1">{act.tag}</div>
              <p className="mt-3 text-xs leading-relaxed text-fog-400">
                {act.note}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex items-center justify-center gap-6 text-xs">
        <span className="flex items-center gap-2 text-fog-400">
          <span className="h-2.5 w-2.5 rounded-sm bg-fog-300/60" /> Human execution
        </span>
        <span className="flex items-center gap-2 text-fog-400">
          <span className="h-2.5 w-2.5 rounded-sm bg-indigo-400" /> AI execution
        </span>
      </div>
    </DiagramFrame>
  );
}
