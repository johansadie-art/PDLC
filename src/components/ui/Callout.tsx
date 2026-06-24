"use client";

import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";
import { RichText } from "./Prose";

const TONES = {
  indigo: "border-indigo-500/40 bg-indigo-500/[0.07] text-indigo-100",
  success: "border-success/40 bg-success/[0.06] text-fog-100",
  warn: "border-warn/40 bg-warn/[0.06] text-fog-100",
  error: "border-error/40 bg-error/[0.06] text-fog-100",
} as const;

export function Callout({
  title,
  children,
  tone = "indigo",
  className,
}: {
  title?: string;
  children: string;
  tone?: keyof typeof TONES;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "rounded-2xl border p-6 backdrop-blur-sm sm:p-8",
        TONES[tone],
        className,
      )}
    >
      {title && (
        <div className="eyebrow mb-3 text-current opacity-80">{title}</div>
      )}
      <p className="body-base text-current/90">
        <RichText>{children}</RichText>
      </p>
    </Reveal>
  );
}
