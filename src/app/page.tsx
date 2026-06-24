import { playbook, railItems } from "@/content/playbook";
import { ProgressRail } from "@/components/ui/ProgressRail";
import { PartDivider } from "@/components/ui/PartDivider";
import { LazySection } from "@/components/ui/LazySection";
import { Hero } from "@/components/sections/Hero";
import { IndexOverview } from "@/components/sections/IndexOverview";
import { Section } from "@/components/sections/Section";

export default function Home() {
  return (
    <main className="relative">
      <ProgressRail items={railItems} />

      <Hero />

      <IndexOverview />

      {playbook.map((part, pi) => {
        const inner = (
          <>
            {pi > 0 && (
              <PartDivider
                index={part.index}
                title={part.title}
                subtitle={part.subtitle}
              />
            )}
            {part.sections.map((section) => (
              <Section
                key={section.id}
                section={section}
                part={`Part ${part.index} — ${part.title}`}
              />
            ))}
          </>
        );

        // Eagerly render the first two parts; lazy-mount the rest. The part id
        // stays on the outer wrapper so part-level anchors always resolve.
        return pi < 2 ? (
          <div key={part.id} id={part.id} data-part={`Part ${part.index}`}>
            {inner}
          </div>
        ) : (
          <LazySection
            key={part.id}
            id={part.id}
            dataPart={`Part ${part.index}`}
            minHeight={1400}
          >
            {inner}
          </LazySection>
        );
      })}

      <footer className="relative border-t border-white/10 px-6 py-20 text-center sm:px-10 lg:pl-[var(--rail-w)]">
        <div className="mx-auto max-w-3xl">
          <div className="eyebrow mb-4">The Agentic PDLC</div>
          <p className="display-lg font-display text-fog-100">
            AI generates. Humans decide.
          </p>
          <p className="body-base mx-auto mt-6 max-w-xl text-fog-400">
            Execution is no longer the bottleneck. Judgment is. Build the context
            layer, govern the gates, and let the loop compound.
          </p>
        </div>
      </footer>
    </main>
  );
}
