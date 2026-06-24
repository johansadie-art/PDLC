"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/animation/gsap";

/**
 * Wraps the app in a Lenis smooth-scroll instance and binds it to GSAP's
 * ScrollTrigger so scroll-driven timelines stay perfectly in sync.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      // Skip smoothing entirely; native scroll + ScrollTrigger still works.
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Expose for anchor navigation.
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    // Allow late-mounting content to settle.
    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 400);

    return () => {
      gsap.ticker.remove(raf);
      window.removeEventListener("resize", onResize);
      clearTimeout(refreshTimer);
      lenis.destroy();
      lenisRef.current = null;
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  return <>{children}</>;
}

/**
 * Recompute scroll geometry. Lenis caches its scroll limit and does not
 * reliably detect body growth from lazy-mounted content (its ResizeObserver
 * watches the document element, whose box often stays viewport-sized), so we
 * resize it explicitly and then refresh ScrollTrigger.
 */
export function refreshScroll() {
  if (typeof window === "undefined") return;
  const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
  lenis?.resize();
  ScrollTrigger.refresh();
}

/** Programmatic scroll that respects the active Lenis instance. */
export function scrollToTarget(target: string | number, offset = 0) {
  const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
  if (lenis) {
    lenis.scrollTo(target, { offset, duration: 1.3 });
  } else if (typeof target === "string") {
    document
      .querySelector(target)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    window.scrollTo({ top: target + offset, behavior: "smooth" });
  }
}

/**
 * Navigate to a section/part by id. If the target lives inside a lazy-mounted
 * part that hasn't rendered yet, reveal all lazy sections first, wait for the
 * element to exist and the layout to settle, then scroll precisely to it.
 */
export function navigateTo(targetId: string, offset = -10) {
  if (typeof document === "undefined") return;
  const sel = `#${targetId}`;

  if (document.getElementById(targetId)) {
    scrollToTarget(sel, offset);
    return;
  }

  window.dispatchEvent(new Event("reveal-all-sections"));

  let tries = 0;
  const tick = () => {
    if (document.getElementById(targetId)) {
      refreshScroll();
      scrollToTarget(sel, offset);
      return;
    }
    if (tries++ < 120) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
