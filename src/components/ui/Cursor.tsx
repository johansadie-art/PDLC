"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom dual-ring cursor. A small dot tracks the pointer instantly while a
 * larger ring eases behind it. Grows + labels itself when hovering elements
 * marked with [data-cursor] or interactive tags.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [active, setActive] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      setHidden(false);

      const el = (e.target as HTMLElement)?.closest<HTMLElement>(
        "[data-cursor], a, button, [role='button']",
      );
      if (el) {
        setActive(true);
        setLabel(el.getAttribute("data-cursor") || "");
      } else {
        setActive(false);
        setLabel("");
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    const onLeave = () => setHidden(true);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      <div
        ref={dotRef}
        className="absolute -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-indigo-300 transition-opacity duration-300"
        style={{ opacity: hidden ? 0 : 1 }}
      />
      <div
        ref={ringRef}
        className="absolute flex items-center justify-center rounded-full border border-indigo-300/60 transition-[width,height,background-color,opacity] duration-300 ease-out"
        style={{
          width: active ? 64 : 30,
          height: active ? 64 : 30,
          marginLeft: active ? -32 : -15,
          marginTop: active ? -32 : -15,
          backgroundColor: active ? "rgba(108,105,255,0.12)" : "transparent",
          opacity: hidden ? 0 : 1,
        }}
      >
        {label && (
          <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-indigo-100">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
