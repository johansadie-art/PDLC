"use client";

import { cn } from "@/lib/cn";
import { useScrollAnimation } from "@/lib/animation/useScrollAnimation";

type Props = {
  text: string;
  className?: string;
  /** Reveal granularity. */
  by?: "word" | "char";
  as?: "h1" | "h2" | "h3" | "p";
};

/**
 * Splits text into words (or chars) and reveals them with a mask-up motion as
 * the element scrolls into view — the signature awwwards kinetic-type effect.
 */
export function KineticHeading({
  text,
  className,
  by = "word",
  as = "h2",
}: Props) {
  const ref = useScrollAnimation<HTMLHeadingElement>(({ root, gsap, q, reduced }) => {
    const units = q<HTMLSpanElement>(".kin-unit");
    if (!units.length) return;
    if (reduced) {
      gsap.set(units, { yPercent: 0, opacity: 1 });
      return;
    }
    gsap.set(units, { yPercent: 115, opacity: 0 });
    gsap.to(units, {
      yPercent: 0,
      opacity: 1,
      duration: 1,
      ease: "expo.out",
      stagger: by === "char" ? 0.02 : 0.055,
      scrollTrigger: { trigger: root, start: "top 85%" },
    });
  }, [text, by]);

  const tokens = by === "char" ? splitChars(text) : text.split(/(\s+)/);
  const Tag = as as React.ElementType;

  return (
    <Tag ref={ref} className={cn(className)} aria-label={text}>
      {tokens.map((tok, i) =>
        tok.trim() === "" ? (
          <span key={i} aria-hidden> </span>
        ) : (
          <span
            key={i}
            aria-hidden
            className="inline-flex overflow-hidden align-bottom"
          >
            <span className="kin-unit inline-block will-change-transform">
              {tok}
            </span>
          </span>
        ),
      )}
    </Tag>
  );
}

function splitChars(text: string): string[] {
  return text.split("");
}
