"use client";

import type { Block } from "@/content/types";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";
import { ProseBlock, RichText } from "@/components/ui/Prose";
import { Callout } from "@/components/ui/Callout";
import { PullQuote } from "@/components/ui/PullQuote";
import { StatCounter } from "@/components/ui/StatCounter";
import { DataTable } from "@/components/ui/DataTable";
import { KineticHeading } from "@/components/ui/KineticHeading";
import { Diagram } from "@/components/diagrams";

export function BlockRenderer({
  block,
  sectionTitle,
}: {
  block: Block;
  sectionTitle?: string;
}) {
  switch (block.type) {
    case "lead":
      return <ProseBlock paragraphs={[block.text]} lead />;

    case "prose":
      return <ProseBlock paragraphs={[block.text]} />;

    case "heading":
      return (
        <KineticHeading
          as="h3"
          text={block.text}
          className="display-lg max-w-4xl font-display text-fog-100"
        />
      );

    case "list":
      return <ListBlock style={block.style} items={block.items} />;

    case "table":
      return (
        <DataTable
          data={{ headers: block.headers, rows: block.rows }}
          caption={block.caption}
          highlightLast={block.highlightLast}
          title={sectionTitle}
        />
      );

    case "callout":
      return (
        <Callout tone={block.tone} title={block.title}>
          {block.text}
        </Callout>
      );

    case "quote":
      return <PullQuote attribution={block.attribution}>{block.text}</PullQuote>;

    case "stats":
      return (
        <Reveal
          stagger
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {block.items.map((s, i) => (
            <div data-reveal key={i}>
              <StatCounter
                value={s.value}
                prefix={s.prefix}
                suffix={s.suffix}
                label={s.label}
                decimals={s.decimals}
              />
            </div>
          ))}
        </Reveal>
      );

    case "cards":
      return <CardsBlock items={block.items} columns={block.columns} />;

    case "steps":
      return <StepsBlock items={block.items} />;

    case "diagram":
      return <Diagram diagramKey={block.key} caption={block.caption} />;

    default:
      return null;
  }
}

function ListBlock({
  style = "bullet",
  items,
}: {
  style?: "bullet" | "number";
  items: { label?: string; text: string }[];
}) {
  return (
    <Reveal stagger className="max-w-3xl space-y-3">
      {items.map((it, i) => (
        <div
          data-reveal
          key={i}
          className="flex gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
        >
          <span
            className={cn(
              "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold",
              style === "number"
                ? "bg-indigo-500/15 text-indigo-300"
                : "bg-indigo-500/10 text-indigo-400",
            )}
          >
            {style === "number" ? i + 1 : "·"}
          </span>
          <p className="body-base pt-0.5 text-fog-300">
            {it.label && (
              <span className="font-semibold text-fog-100">{it.label}: </span>
            )}
            <RichText>{it.text}</RichText>
          </p>
        </div>
      ))}
    </Reveal>
  );
}

function CardsBlock({
  items,
  columns = 3,
}: {
  items: {
    title: string;
    badge?: string;
    from?: string;
    owns?: string;
    body: string;
    accent?: string;
  }[];
  columns?: 2 | 3;
}) {
  return (
    <Reveal
      stagger
      className={cn(
        "grid grid-cols-1 gap-4",
        columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3",
      )}
    >
      {items.map((c, i) => (
        <div
          data-reveal
          key={i}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-indigo-400/40"
        >
          <span
            className="absolute left-0 top-0 h-full w-1"
            style={{ background: c.accent ?? "var(--color-indigo-500)" }}
          />
          <div className="flex items-start justify-between gap-3">
            <h4 className="text-lg font-bold text-fog-100">{c.title}</h4>
            {c.badge && (
              <span className="shrink-0 rounded-full bg-indigo-500/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-indigo-300">
                {c.badge}
              </span>
            )}
          </div>
          {c.from && (
            <div className="mt-1 text-[11px] text-fog-500">From: {c.from}</div>
          )}
          {c.owns && (
            <div className="mt-2 text-sm font-semibold text-indigo-300">
              Owns: {c.owns}
            </div>
          )}
          <p className="mt-2 text-sm leading-relaxed text-fog-400">
            <RichText>{c.body}</RichText>
          </p>
        </div>
      ))}
    </Reveal>
  );
}

function StepsBlock({
  items,
}: {
  items: { id: string; title: string; text: string }[];
}) {
  return (
    <Reveal stagger className="relative max-w-3xl space-y-0">
      <span className="absolute bottom-6 left-[19px] top-6 w-px bg-gradient-to-b from-indigo-500/60 via-indigo-500/30 to-transparent" />
      {items.map((s) => (
        <div data-reveal key={s.id} className="relative flex gap-5 pb-8 last:pb-0">
          <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-indigo-400/40 bg-ink-900 text-xs font-bold text-indigo-300">
            {s.id}
          </span>
          <div className="pt-1">
            <h4 className="text-base font-bold text-fog-100">{s.title}</h4>
            <p className="mt-1.5 body-base text-fog-300">
              <RichText>{s.text}</RichText>
            </p>
          </div>
        </div>
      ))}
    </Reveal>
  );
}
