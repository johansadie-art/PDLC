"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";

export type TabItem = {
  key: string;
  icon?: string;
  label: string;
  title: string;
  body: string;
  tags?: string[];
  meta?: { label: string; value: string }[];
};

/**
 * Reusable "select a chip → reveal a detail panel" explorer. Powers the many
 * ported dark diagrams that share this interaction (ProductOps, KPIs, quality
 * dimensions, documentation, etc.).
 */
export function TabExplorer({
  items,
  columns = 5,
}: {
  items: TabItem[];
  columns?: number;
}) {
  const [active, setActive] = useState(0);
  const cur = items[active];

  return (
    <div>
      <div
        className="mb-6 grid gap-2.5"
        style={{ gridTemplateColumns: `repeat(${Math.min(columns, items.length)}, minmax(0, 1fr))` }}
      >
        {items.map((it, i) => (
          <button
            key={it.key}
            onClick={() => setActive(i)}
            data-cursor=""
            className={cn(
              "rounded-xl border px-3 py-3.5 text-center transition-all duration-300",
              i === active
                ? "border-indigo-500/60 bg-indigo-500/15"
                : "border-white/10 bg-white/[0.03] hover:border-white/25",
            )}
          >
            {it.icon && <div className="mb-1.5 text-2xl">{it.icon}</div>}
            <div
              className={cn(
                "text-[11px] font-semibold uppercase tracking-[0.06em]",
                i === active ? "text-indigo-300" : "text-fog-400",
              )}
            >
              {it.label}
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={cur.key}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl border border-indigo-500/25 bg-indigo-500/[0.06] p-6 sm:p-7"
        >
          <h4 className="display-lg text-xl font-display font-semibold text-fog-100">
            {cur.title}
          </h4>
          {cur.meta && (
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {cur.meta.map((m) => (
                <div key={m.label}>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-fog-500">
                    {m.label}
                  </div>
                  <div className="mt-1 text-sm font-medium text-indigo-200">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          )}
          <p className="mt-4 body-base text-fog-300">{cur.body}</p>
          {cur.tags && (
            <div className="mt-5 flex flex-wrap gap-2">
              {cur.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-medium text-indigo-200"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
