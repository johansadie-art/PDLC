"use client";

import { useScrollAnimation } from "@/lib/animation/useScrollAnimation";
import { cn } from "@/lib/cn";

/** Counts up to `value` once scrolled into view. */
export function StatCounter({
  value,
  prefix = "",
  suffix = "",
  label,
  decimals = 0,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  decimals?: number;
  className?: string;
}) {
  const ref = useScrollAnimation<HTMLDivElement>(({ root, gsap, reduced }) => {
    const num = root.querySelector<HTMLSpanElement>(".count-num");
    if (!num) return;
    const obj = { v: 0 };
    const render = () => {
      num.textContent = obj.v.toFixed(decimals);
    };
    if (reduced) {
      obj.v = value;
      render();
      return;
    }
    gsap.to(obj, {
      v: value,
      duration: 1.8,
      ease: "power2.out",
      onUpdate: render,
      scrollTrigger: { trigger: root, start: "top 85%" },
    });
  }, [value]);

  return (
    <div ref={ref} className={cn("flex flex-col", className)}>
      <div className="display-xl font-display text-fog-100">
        <span className="text-indigo-400">{prefix}</span>
        <span className="count-num">0</span>
        <span className="text-indigo-400">{suffix}</span>
      </div>
      <div className="mt-2 text-sm text-fog-400">{label}</div>
    </div>
  );
}
