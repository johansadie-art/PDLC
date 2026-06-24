"use client";

import { cn } from "@/lib/cn";

/** A pill button that signals "click to open more" (modal / detail). */
export function DeepDiveTrigger({
  label = "Explore",
  onClick,
  className,
}: {
  label?: string;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      data-cursor="Open"
      className={cn(
        "group inline-flex items-center gap-2 rounded-full border border-indigo-400/40 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-100 transition-all duration-300 hover:border-indigo-300 hover:bg-indigo-500/20",
        className,
      )}
    >
      {label}
      <span className="grid h-5 w-5 place-items-center rounded-full bg-indigo-400/20 transition-transform duration-300 group-hover:translate-x-0.5">
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
          <path
            d="M2 6h8M6 2l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
}
