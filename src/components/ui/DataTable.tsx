"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/lib/animation/useScrollAnimation";
import { cn } from "@/lib/cn";
import { RichText } from "./Prose";
import { Modal } from "./Modal";
import { DeepDiveTrigger } from "./DeepDiveTrigger";

export type TableData = {
  headers: string[];
  rows: string[][];
};

function TableMarkup({
  data,
  highlightLast,
  compact,
}: {
  data: TableData;
  highlightLast: boolean;
  compact?: boolean;
}) {
  const last = data.headers.length - 1;
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-white/10">
            {data.headers.map((h, i) => (
              <th
                key={i}
                className={cn(
                  "px-4 text-xs font-semibold uppercase tracking-[0.12em] text-fog-400",
                  compact ? "py-3" : "py-4",
                  i === 0 && "pl-6",
                  highlightLast && i === last && "text-indigo-300",
                )}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, ri) => (
            <tr
              key={ri}
              className="border-b border-white/[0.06] transition-colors hover:bg-indigo-500/[0.06]"
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={cn(
                    "px-4 align-top text-fog-300",
                    compact ? "py-3" : "py-4",
                    ci === 0 && "pl-6 font-semibold text-fog-100",
                    highlightLast && ci === last && "font-medium text-indigo-200",
                  )}
                >
                  <RichText>{cell}</RichText>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Editorial data table with rows that slide + fade in on scroll. The first
 * column is emphasised as a row label.
 */
export function DataTable({
  data,
  caption,
  className,
  highlightLast = false,
  title,
}: {
  data: TableData;
  caption?: string;
  className?: string;
  /** Tint the last column (often the "human role shift" / outcome column). */
  highlightLast?: boolean;
  /** Title used for the expanded-overlay modal heading. */
  title?: string;
}) {
  const [expanded, setExpanded] = useState(false);

  // Large tables get a "view full table" overlay so the page stays readable.
  const isLarge = data.rows.length > 7 || data.headers.length > 4;
  const preview: TableData = isLarge
    ? { headers: data.headers, rows: data.rows.slice(0, 6) }
    : data;

  const ref = useScrollAnimation<HTMLDivElement>(({ root, gsap, q, reduced }) => {
    const rows = q<HTMLTableRowElement>("tbody tr");
    if (reduced) {
      gsap.set(rows, { opacity: 1, x: 0 });
      return;
    }
    gsap.set(rows, { opacity: 0, x: -28 });
    gsap.to(rows, {
      opacity: 1,
      x: 0,
      duration: 0.7,
      ease: "expo.out",
      stagger: 0.07,
      scrollTrigger: { trigger: root, start: "top 80%" },
    });
  });

  return (
    <div ref={ref} className={cn("w-full", className)}>
      <div className="relative">
        <TableMarkup data={preview} highlightLast={highlightLast} />
        {isLarge && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-24 items-end justify-center rounded-b-2xl bg-gradient-to-t from-ink-900 to-transparent">
            <div className="pointer-events-auto mb-4">
              <DeepDiveTrigger
                label={`View all ${data.rows.length} rows`}
                onClick={() => setExpanded(true)}
              />
            </div>
          </div>
        )}
      </div>
      {caption && (
        <p className="mt-4 text-xs italic leading-relaxed text-fog-500">
          {caption}
        </p>
      )}

      <Modal
        open={expanded}
        onClose={() => setExpanded(false)}
        eyebrow="Full table"
        title={title ?? "Detailed breakdown"}
      >
        <TableMarkup data={data} highlightLast={highlightLast} compact />
        {caption && (
          <p className="mt-2 text-xs italic leading-relaxed text-fog-500">
            {caption}
          </p>
        )}
      </Modal>
    </div>
  );
}
