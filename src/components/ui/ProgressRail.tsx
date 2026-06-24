"use client";

import { useEffect, useState } from "react";
import { navigateTo } from "@/components/providers/SmoothScroll";
import { cn } from "@/lib/cn";

export type RailItem = { id: string; label: string; part: string };

/**
 * Fixed left rail: a vertical scroll-progress bar plus a tick per Part that
 * doubles as navigation. The active Part highlights as you scroll.
 */
export function ProgressRail({ items }: { items: RailItem[] }) {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? h.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = items
      .map((it) => document.getElementById(it.id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = items.findIndex((it) => it.id === e.target.id);
            if (idx >= 0) setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [items]);

  return (
    <>
      {/* Desktop rail */}
      <div className="fixed left-0 top-0 z-50 hidden h-screen w-[var(--rail-w)] flex-col items-center justify-center lg:flex">
        <div className="relative flex h-[60vh] flex-col items-center">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />
          <div
            className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-indigo-400"
            style={{ height: `${progress * 100}%` }}
          />
          <div className="relative flex h-full flex-col justify-between py-1">
            {items.map((it, i) => (
              <button
                key={it.id}
                onClick={() => navigateTo(it.id, -40)}
                data-cursor=""
                className="group relative flex items-center"
                aria-label={it.label}
              >
                <span
                  className={cn(
                    "block h-2 w-2 rounded-full border transition-all duration-300",
                    i === active
                      ? "scale-125 border-indigo-300 bg-indigo-400"
                      : "border-white/30 bg-transparent group-hover:border-indigo-300",
                  )}
                />
                <span
                  className={cn(
                    "pointer-events-none absolute left-5 whitespace-nowrap rounded-md border border-white/10 bg-ink-800 px-2.5 py-1 text-[11px] font-medium text-fog-200 opacity-0 transition-opacity duration-200 group-hover:opacity-100",
                  )}
                >
                  {it.label}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 -rotate-90 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.3em] text-fog-500">
          {Math.round(progress * 100)}%
        </div>
      </div>

      {/* Mobile top progress bar */}
      <div className="fixed left-0 top-0 z-50 h-0.5 w-full bg-white/5 lg:hidden">
        <div
          className="h-full bg-indigo-400"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </>
  );
}
