"use client";

import { cn } from "@/lib/cn";
import { useScrollAnimation } from "@/lib/animation/useScrollAnimation";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger children that carry the `data-reveal` attribute. */
  stagger?: boolean;
  y?: number;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
};

/**
 * Generic scroll-reveal wrapper. Either fades/slides itself in, or — when
 * `stagger` is set — sequences any descendants tagged with [data-reveal].
 */
export function Reveal({
  children,
  className,
  stagger = false,
  y = 40,
  delay = 0,
  as = "div",
}: RevealProps) {
  const ref = useScrollAnimation<HTMLDivElement>(
    ({ root, gsap, q, reduced }) => {
      const targets = stagger ? q("[data-reveal]") : [root];
      if (!targets.length) return;

      if (reduced) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(targets, { opacity: 0, y });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay,
        ease: "expo.out",
        stagger: stagger ? 0.09 : 0,
        scrollTrigger: {
          trigger: root,
          start: "top 82%",
        },
      });
    },
    [stagger, y, delay],
  );

  const Tag = as as React.ElementType;
  return (
    <Tag ref={ref} className={cn(className)}>
      {children}
    </Tag>
  );
}
