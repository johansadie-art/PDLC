"use client";

import { cn } from "@/lib/cn";
import { useScrollAnimation } from "@/lib/animation/useScrollAnimation";

/** Consistent dark "device" frame around every ported diagram. */
export function DiagramFrame({
  label,
  title,
  subtitle,
  children,
  className,
}: {
  label?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useScrollAnimation<HTMLDivElement>(({ root, gsap, reduced }) => {
    if (reduced) return;
    gsap.from(root, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: { trigger: root, start: "top 85%" },
    });
  });

  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/10 bg-ink-950/80 p-6 backdrop-blur-sm sm:p-10",
        className,
      )}
    >
      <div className="radial-fade pointer-events-none absolute -right-32 -top-32 h-80 w-80" />
      <div className="relative mb-8 text-center">
        {label && <div className="eyebrow mb-2">{label}</div>}
        <h3 className="display-lg font-display text-fog-100">{title}</h3>
        {subtitle && (
          <p className="mx-auto mt-3 max-w-2xl text-sm text-fog-400">{subtitle}</p>
        )}
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
