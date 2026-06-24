"use client";

import { cn } from "@/lib/cn";

type Props = {
  id?: string;
  /** Part label shown in the eyebrow, e.g. "Part 2 — The Agentic PDLC". */
  part?: string;
  /** Section index marker, e.g. "2.3". */
  marker?: string;
  className?: string;
  children: React.ReactNode;
  /** Optional decorative variant for background treatment. */
  tone?: "default" | "deep" | "panel";
};

/**
 * Standard section container: consistent max-width, vertical rhythm, side
 * gutter for the progress rail, and an optional background tone.
 */
export function SectionShell({
  id,
  part,
  marker,
  className,
  children,
  tone = "default",
}: Props) {
  return (
    <section
      id={id}
      data-section
      data-part={part}
      className={cn(
        "relative w-full scroll-mt-24 px-6 py-24 sm:px-10 md:py-32 lg:pl-[var(--rail-w)]",
        tone === "deep" && "bg-ink-950",
        tone === "panel" && "bg-ink-850",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">
        {(part || marker) && (
          <div className="mb-10 flex items-center gap-4">
            {marker && (
              <span className="font-display text-sm font-semibold text-indigo-400">
                {marker}
              </span>
            )}
            {part && (
              <>
                <span className="h-px w-10 bg-indigo-500/40" />
                <span className="eyebrow">{part}</span>
              </>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
