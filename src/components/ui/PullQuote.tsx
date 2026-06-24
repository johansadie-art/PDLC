"use client";

import { useScrollAnimation } from "@/lib/animation/useScrollAnimation";
import { cn } from "@/lib/cn";

/**
 * Large editorial pull-quote. Words fade from dim to bright as the block
 * scrolls through the viewport (scrubbed), echoing the "reveal of meaning".
 */
export function PullQuote({
  children,
  attribution,
  className,
}: {
  children: string;
  attribution?: string;
  className?: string;
}) {
  const ref = useScrollAnimation<HTMLDivElement>(({ root, gsap, q, reduced }) => {
    const words = q<HTMLSpanElement>(".pq-word");
    if (!words.length) return;
    if (reduced) {
      gsap.set(words, { opacity: 1 });
      return;
    }
    gsap.set(words, { opacity: 0.16 });
    gsap.to(words, {
      opacity: 1,
      stagger: 0.06,
      ease: "none",
      scrollTrigger: {
        trigger: root,
        start: "top 75%",
        end: "bottom 55%",
        scrub: true,
      },
    });
  });

  return (
    <div ref={ref} className={cn("py-8", className)}>
      <blockquote className="display-lg max-w-4xl text-balance font-display text-fog-100">
        <span className="text-indigo-400">&ldquo;</span>
        {children.split(" ").map((w, i) => (
          <span key={i} className="pq-word">
            {w}{" "}
          </span>
        ))}
        <span className="text-indigo-400">&rdquo;</span>
      </blockquote>
      {attribution && (
        <div className="mt-6 eyebrow text-fog-400">{attribution}</div>
      )}
    </div>
  );
}
