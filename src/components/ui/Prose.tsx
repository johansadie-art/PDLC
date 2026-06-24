"use client";

import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

/** Renders **bold** inline emphasis inside otherwise plain paragraph text. */
export function RichText({ children }: { children: string }) {
  const parts = children.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("**") && p.endsWith("**") ? (
          <strong key={i} className="font-semibold text-fog-100">
            {p.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
}

export function Paragraph({
  children,
  className,
  lead = false,
}: {
  children: string;
  className?: string;
  lead?: boolean;
}) {
  return (
    <p
      data-reveal
      className={cn(
        lead ? "body-lg text-fog-200" : "body-base",
        "max-w-3xl text-pretty",
        className,
      )}
    >
      <RichText>{children}</RichText>
    </p>
  );
}

/** A block of paragraphs that reveal with a stagger. */
export function ProseBlock({
  paragraphs,
  className,
  lead,
}: {
  paragraphs: string[];
  className?: string;
  lead?: boolean;
}) {
  return (
    <Reveal stagger className={cn("space-y-6", className)}>
      {paragraphs.map((p, i) => (
        <Paragraph key={i} lead={lead && i === 0}>
          {p}
        </Paragraph>
      ))}
    </Reveal>
  );
}
