"use client";

import { useEffect, useRef, useState } from "react";
import { refreshScroll } from "@/components/providers/SmoothScroll";

/**
 * Mounts children only once the placeholder approaches the viewport, then keeps
 * them mounted. Keeps the very long single-page document light on first paint
 * and avoids running dozens of ScrollTriggers that are far offscreen.
 */
export function LazySection({
  children,
  minHeight = 600,
  id,
  dataPart,
}: {
  children: React.ReactNode;
  minHeight?: number;
  /** Stays on the wrapper even before mount so part anchors always resolve. */
  id?: string;
  dataPart?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || mounted) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setMounted(true);
          obs.disconnect();
        }
      },
      { rootMargin: "1200px 0px 1200px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [mounted]);

  // Mount immediately when navigation needs this (or any) section to exist.
  useEffect(() => {
    if (mounted) return;
    const onReveal = () => setMounted(true);
    window.addEventListener("reveal-all-sections", onReveal);
    return () => window.removeEventListener("reveal-all-sections", onReveal);
  }, [mounted]);

  useEffect(() => {
    if (mounted) {
      // Let layout settle, then re-sync Lenis's scroll limit + ScrollTrigger.
      // Without resizing Lenis, expanding content leaves a stale limit and
      // smooth scrolling hits a wall partway down the page.
      const t = setTimeout(refreshScroll, 120);
      const t2 = setTimeout(refreshScroll, 400);
      return () => {
        clearTimeout(t);
        clearTimeout(t2);
      };
    }
  }, [mounted]);

  return (
    <div
      ref={ref}
      id={id}
      data-part={dataPart}
      style={!mounted ? { minHeight } : undefined}
    >
      {mounted ? children : null}
    </div>
  );
}
