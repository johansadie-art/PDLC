"use client";

import { playbook } from "@/content/playbook";
import type { Block, Section } from "@/content/types";
import { navigateTo } from "@/components/providers/SmoothScroll";
import { SectionShell } from "@/components/ui/SectionShell";
import { KineticHeading } from "@/components/ui/KineticHeading";
import { Reveal } from "@/components/ui/Reveal";

/** Pull a short, plain-text description from a section's first prose-like block. */
function describe(section: Section): string {
  const textBlock = section.blocks.find(
    (b): b is Extract<Block, { text: string }> =>
      b.type === "lead" || b.type === "prose",
  );
  const raw = textBlock?.text ?? "";
  const clean = raw.replace(/\*\*/g, "");
  if (clean.length <= 170) return clean;
  const cut = clean.slice(0, 170);
  return cut.slice(0, cut.lastIndexOf(" ")).trimEnd() + "…";
}

export function IndexOverview() {
  return (
    <SectionShell id="overview" tone="deep">
      <div className="mb-14">
        <div className="eyebrow mb-5 flex items-center gap-3">
          <span className="h-px w-10 bg-indigo-500/50" />
          Index · 12 Parts
        </div>
        <KineticHeading
          as="h2"
          text="The complete playbook, at a glance"
          className="display-xl max-w-4xl font-display text-fog-100"
        />
        <p className="body-lg mt-6 max-w-2xl text-fog-400">
          The full arc — from why the pipeline ends to the market evidence that
          proves it. Jump to any part or section below.
        </p>
      </div>

      <div className="space-y-px overflow-hidden rounded-3xl border border-white/10">
        {playbook.map((part) => (
          <Reveal
            key={part.id}
            stagger
            className="group/part bg-ink-900/60 backdrop-blur-sm"
          >
            <button
              data-reveal
              onClick={() => navigateTo(part.id)}
              data-cursor="Go"
              className="flex w-full items-baseline gap-5 border-b border-white/[0.06] px-5 py-6 text-left transition-colors hover:bg-indigo-500/[0.05] sm:px-8"
            >
              <span className="font-display text-2xl font-bold text-indigo-500/70 tabular-nums transition-colors group-hover/part:text-indigo-400">
                {part.index}
              </span>
              <span className="flex-1">
                <span className="block font-display text-xl font-semibold text-fog-100 sm:text-2xl">
                  {part.title}
                </span>
                {part.subtitle && (
                  <span className="mt-1.5 block max-w-3xl text-sm leading-relaxed text-fog-400">
                    {part.subtitle}
                  </span>
                )}
              </span>
            </button>

            <ul className="divide-y divide-white/[0.04] px-5 sm:px-8">
              {part.sections.map((section) => (
                <li data-reveal key={section.id}>
                  <button
                    onClick={() => navigateTo(section.id)}
                    data-cursor="Read"
                    className="group/sec flex w-full gap-4 py-4 pl-9 text-left transition-colors hover:bg-white/[0.02] sm:gap-6"
                  >
                    <span className="mt-0.5 w-10 shrink-0 font-display text-xs font-semibold text-indigo-400/80 tabular-nums">
                      {section.marker}
                    </span>
                    <span className="flex-1">
                      <span className="block text-sm font-semibold text-fog-200 transition-colors group-hover/sec:text-indigo-200 sm:text-base">
                        {section.title}
                      </span>
                      <span className="mt-1 block max-w-2xl text-xs leading-relaxed text-fog-500 sm:text-[13px]">
                        {describe(section)}
                      </span>
                    </span>
                    <span className="mt-1 shrink-0 text-fog-600 transition-all group-hover/sec:translate-x-0.5 group-hover/sec:text-indigo-300">
                      <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
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
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
