"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DiagramFrame } from "./DiagramFrame";
import { cn } from "@/lib/cn";

const WS = [
  { tag: "WHAT", name: "Signal Content", example: "\"Export fails, compliance report blocked\"" },
  { tag: "WHO", name: "Segment & Persona", example: "\"Enterprise >500 seats, ops persona\"" },
  { tag: "WHEN", name: "Temporal Pattern", example: "\"Oct–Nov, 60 days pre-renewal\"" },
  { tag: "WHERE", name: "Product Location", example: "\"Reporting module, export flow\"" },
  { tag: "WHY", name: "Inferred Intent", example: "\"Compliance requirement — non-negotiable\"" },
];

const LEVELS = [
  { title: "Level 1 — Reactive", ws: "1–2 Ws", example: "\"A user complained about export.\"" },
  { title: "Level 2 — Correlative", ws: "3 Ws shared", example: "\"Enterprise + export + Q4 = trend.\"" },
  { title: "Level 3 — Predictive", ws: "4–5 Ws + history", example: "\"Pattern preceded Q3 churn. 84%.\"" },
  { title: "Level 4 — Prescriptive", ws: "All 5 Ws + model", example: "\"Ship fix by Oct 15. $240k at risk.\"" },
];

function compute(n: number) {
  if (n === 0) return { conf: 10, li: 0 };
  if (n <= 2) return { conf: 15 + n * 8, li: 0 };
  if (n === 3) return { conf: 45, li: 1 };
  if (n === 4) return { conf: 75, li: 2 };
  return { conf: 95, li: 3 };
}

export function FiveWFusion() {
  const [active, setActive] = useState<Set<number>>(new Set());
  const { conf, li } = compute(active.size);

  const toggle = (i: number) => {
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <DiagramFrame
      label="Diagram 2.3"
      title="The 5W Fusion Model"
      subtitle="Activate the W dimensions. Watch confidence rise as they converge — and the intelligence level advance from describing the past to anticipating the future."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_220px_1fr]">
        <div className="flex flex-col gap-2.5">
          {WS.map((w, i) => {
            const on = active.has(i);
            return (
              <button
                key={w.tag}
                onClick={() => toggle(i)}
                data-cursor=""
                className={cn(
                  "rounded-xl border p-3.5 text-left transition-all duration-300",
                  on ? "border-indigo-500/60 bg-indigo-500/15" : "border-white/10 bg-white/[0.03] hover:border-white/25",
                )}
              >
                <div className={cn("text-sm font-bold", on ? "text-indigo-300" : "text-fog-300")}>{w.tag}</div>
                <div className="text-xs text-fog-400">{w.name}</div>
                {on && <div className="mt-1.5 text-xs italic text-indigo-300/80">{w.example}</div>}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col items-center justify-center gap-5">
          <div className="w-full text-center">
            <div className="eyebrow mb-2">Signal confidence</div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-warn via-indigo-500 to-success"
                animate={{ width: `${conf}%` }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
            </div>
            <div className="mt-2 font-display text-3xl font-bold text-indigo-300">{conf}%</div>
          </div>
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={cn(
                  "h-12 w-12 rounded-full border-2 transition-all duration-500",
                  active.size > i ? "border-indigo-400 bg-indigo-500/30" : "border-white/15",
                )}
                style={{ marginLeft: i ? -18 : 0 }}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          {LEVELS.map((l, i) => (
            <div
              key={l.title}
              className={cn(
                "rounded-xl border p-3 transition-all duration-300",
                i === li ? "border-indigo-500/50 bg-indigo-500/10 opacity-100" : "border-white/10 bg-white/[0.02] opacity-50",
              )}
            >
              <div className="text-sm font-bold text-fog-100">{l.title}</div>
              <div className="text-[11px] text-fog-500">{l.ws}</div>
              <div className="mt-1 text-xs italic text-fog-400">{l.example}</div>
            </div>
          ))}
        </div>
      </div>
    </DiagramFrame>
  );
}
