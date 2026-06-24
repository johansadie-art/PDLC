"use client";

import { useScrollAnimation } from "@/lib/animation/useScrollAnimation";
import { scrollToTarget } from "@/components/providers/SmoothScroll";

export function Hero() {
  const ref = useScrollAnimation<HTMLDivElement>(({ root, q, gsap, reduced }) => {
    const lines = q(".hero-line .hero-inner");
    const meta = q(".hero-meta");
    const orb = q(".hero-orb");
    const scroll = q(".hero-scroll");

    if (reduced) {
      gsap.set([...lines, ...meta, ...scroll], { opacity: 1, yPercent: 0 });
      return;
    }

    gsap.set(lines, { yPercent: 120 });
    const tl = gsap.timeline({ delay: 0.2 });
    tl.to(lines, {
      yPercent: 0,
      duration: 1.2,
      ease: "expo.out",
      stagger: 0.12,
    })
      .from(
        meta,
        { opacity: 0, y: 24, duration: 0.9, ease: "expo.out", stagger: 0.12 },
        "-=0.6",
      )
      .from(scroll, { opacity: 0, duration: 0.8 }, "-=0.4");

    if (orb.length) {
      gsap.to(orb, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  });

  return (
    <div
      ref={ref}
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden px-6 py-28 sm:px-10 lg:pl-[var(--rail-w)]"
    >
      <div className="hero-orb radial-fade pointer-events-none absolute -right-40 top-10 h-[700px] w-[700px]" />
      <div className="hero-orb radial-fade pointer-events-none absolute -left-52 bottom-0 h-[500px] w-[500px] opacity-60" />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="hero-meta eyebrow mb-8 flex items-center gap-3">
          <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-400" />
          The Complete Playbook · v2
        </div>

        <h1 className="display-hero font-display text-fog-100">
          <span className="hero-line block overflow-hidden">
            <span className="hero-inner block">The end of the</span>
          </span>
          <span className="hero-line block overflow-hidden">
            <span className="hero-inner block accent-gradient text-glow">
              pipeline.
            </span>
          </span>
        </h1>

        <p className="hero-meta body-lg mt-10 max-w-2xl text-fog-300">
          AI has collapsed the distance between an insight and working software.
          This is the operating system for product teams in that new
          reality — the{" "}
          <span className="font-semibold text-fog-100">
            Agentic Product Development Lifecycle
          </span>
          , Signal Detection through Optimization.
        </p>

        <div className="hero-meta mt-12 flex flex-wrap items-center gap-x-10 gap-y-5">
          {[
            ["12", "Parts"],
            ["7", "Agentic stages"],
            ["19", "Interactive diagrams"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-2xl font-bold text-indigo-300">
                {n}
              </div>
              <div className="text-xs uppercase tracking-wider text-fog-500">
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => scrollToTarget("#overview", -10)}
        data-cursor="Begin"
        className="hero-scroll group absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 lg:left-[calc(50%+var(--rail-w)/2)]"
        aria-label="Scroll to begin"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-fog-500 transition-colors group-hover:text-indigo-300">
          Scroll
        </span>
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <span className="h-2 w-1 animate-float rounded-full bg-indigo-400" />
        </span>
      </button>
    </div>
  );
}
