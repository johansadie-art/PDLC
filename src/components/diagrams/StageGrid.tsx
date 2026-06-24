"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DiagramFrame } from "./DiagramFrame";
import { useScrollAnimation } from "@/lib/animation/useScrollAnimation";
import { cn } from "@/lib/cn";

export type Stage = {
  num: string;
  name: string;
  q: string;
  detail: string;
};

export function StageGrid({
  label,
  title,
  subtitle,
  stages,
  columns = 3,
}: {
  label: string;
  title: string;
  subtitle?: string;
  stages: Stage[];
  columns?: number;
}) {
  const [open, setOpen] = useState<number | null>(0);

  const ref = useScrollAnimation<HTMLDivElement>(({ root, q, gsap, reduced }) => {
    const cards = q(".stage-card");
    if (!cards.length) return;
    if (reduced) {
      gsap.set(cards, { opacity: 1, y: 0 });
      return;
    }
    gsap.set(cards, { opacity: 0, y: 28 });
    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "expo.out",
      stagger: 0.06,
      scrollTrigger: { trigger: root, start: "top 85%" },
    });
  });

  return (
    <DiagramFrame label={label} title={title} subtitle={subtitle}>
      <div
        ref={ref}
        className="grid gap-3"
        style={{
          gridTemplateColumns: `repeat(var(--cols), minmax(0,1fr))`,
          ["--cols" as string]: columns,
        }}
      >
        {stages.map((s, i) => (
          <button
            key={s.num}
            onClick={() => setOpen(open === i ? null : i)}
            data-cursor=""
            className={cn(
              "stage-card group relative overflow-hidden rounded-xl border p-4 text-left transition-colors duration-300",
              open === i
                ? "border-indigo-500/60 bg-indigo-500/12"
                : "border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.05]",
            )}
          >
            <span className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-indigo-500 to-indigo-300 opacity-60" />
            <div className="text-[11px] font-bold text-fog-500">{s.num}</div>
            <div className="mt-1 text-sm font-bold text-fog-100">{s.name}</div>
            <div className="mt-1.5 text-xs leading-snug text-fog-400">{s.q}</div>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {open !== null && (
          <motion.div
            key={open}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 rounded-2xl border border-indigo-500/25 bg-indigo-500/[0.06] p-6">
              <div className="text-sm font-bold text-indigo-300">
                {stages[open].num} — {stages[open].name}
              </div>
              <p className="mt-2 body-base text-fog-300">{stages[open].detail}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </DiagramFrame>
  );
}
