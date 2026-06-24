"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "./gsap";

type SetupFn = (ctx: {
  root: HTMLElement;
  gsap: typeof gsap;
  ScrollTrigger: typeof ScrollTrigger;
  q: <T extends Element = HTMLElement>(selector: string) => T[];
  reduced: boolean;
}) => void;

/**
 * Scopes a GSAP context to a ref'd element. Cleans up all tweens and
 * ScrollTriggers on unmount. Respects prefers-reduced-motion: when reduced,
 * the setup is still called with `reduced: true` so callers can render a
 * static state instead of animating.
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  setup: SetupFn,
  deps: unknown[] = [],
) {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    const reduced = prefersReducedMotion();

    const ctx = gsap.context(() => {
      const q = <E extends Element = HTMLElement>(selector: string): E[] =>
        Array.from(root.querySelectorAll<E>(selector));
      setup({ root, gsap, ScrollTrigger, q, reduced });
    }, root);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}
