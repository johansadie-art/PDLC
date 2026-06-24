"use client";

import type { Section as SectionType } from "@/content/types";
import { SectionShell } from "@/components/ui/SectionShell";
import { KineticHeading } from "@/components/ui/KineticHeading";
import { BlockRenderer } from "./blocks";

export function Section({
  section,
  part,
}: {
  section: SectionType;
  part: string;
}) {
  return (
    <SectionShell
      id={section.id}
      marker={section.marker}
      part={section.eyebrow ?? part}
      tone={section.tone}
    >
      <KineticHeading
        as="h2"
        text={section.title}
        className="display-xl mb-12 max-w-4xl font-display text-fog-100"
      />
      <div className="space-y-12">
        {section.blocks.map((block, i) => (
          <BlockRenderer key={i} block={block} sectionTitle={section.title} />
        ))}
      </div>
    </SectionShell>
  );
}
