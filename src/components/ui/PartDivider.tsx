"use client";

import { useScrollAnimation } from "@/lib/animation/useScrollAnimation";

/**
 * Full-bleed cinematic transition between Parts. A huge ghost numeral scrubs
 * across as you scroll, with the part title masking up over it.
 */
export function PartDivider({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  const ref = useScrollAnimation<HTMLDivElement>(({ root, gsap, q, reduced }) => {
    const ghost = q(".pd-ghost")[0];
    const title = q(".pd-title")[0];
    const line = q(".pd-line")[0];
    if (reduced) return;

    gsap.fromTo(
      ghost,
      { xPercent: -8, opacity: 0.06 },
      {
        xPercent: 8,
        opacity: 0.16,
        ease: "none",
        scrollTrigger: { trigger: root, start: "top bottom", end: "bottom top", scrub: true },
      },
    );
    gsap.from(title, {
      yPercent: 120,
      opacity: 0,
      duration: 1.1,
      ease: "expo.out",
      scrollTrigger: { trigger: root, start: "top 70%" },
    });
    gsap.fromTo(
      line,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: { trigger: root, start: "top 70%" },
      },
    );
  });

  return (
    <div
      ref={ref}
      data-section
      data-part={`Part ${index}`}
      className="relative flex min-h-[70vh] w-full items-center overflow-hidden bg-ink-950 px-6 py-32 sm:px-10 lg:pl-[var(--rail-w)]"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="pd-ghost font-display text-[40vw] font-bold leading-none text-white/[0.05]">
          {index}
        </span>
      </div>
      <div className="radial-fade pointer-events-none absolute -left-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2" />
      <div className="relative mx-auto w-full max-w-6xl">
        <div className="eyebrow mb-5">Part {index}</div>
        <div className="overflow-hidden">
          <h2 className="pd-title display-hero accent-gradient">{title}</h2>
        </div>
        <div className="pd-line mt-8 h-px w-full max-w-xl origin-left bg-gradient-to-r from-indigo-500 to-transparent" />
        {subtitle && (
          <p className="body-lg mt-8 max-w-2xl text-fog-300">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
