import type { Metadata } from "next";
import { SceneBackdrop } from "@/components/environment/SceneBackdrop";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { FrameworkExplorer } from "@/components/architecture/FrameworkExplorer";
import { CapabilityMap } from "@/components/architecture/CapabilityMap";

export const metadata: Metadata = {
  title: "Architecture",
  description: "The framework and capability map behind how EngSean Lee approaches intelligent systems.",
};

export default function ArchitecturePage() {
  return (
    <>
      <SceneBackdrop distance="near" className="h-[42vh] min-h-[340px]" />
      <div className="relative -mt-16 sm:-mt-20">
        <Container>
          <Eyebrow>Architecture</Eyebrow>
          <h1 className="mt-4 font-display text-4xl text-sage-dark sm:text-5xl">
            How I approach intelligent systems.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-dark">
            Successful AI implementations rarely begin with AI. They begin with a clearly defined
            operating problem, understood constraints, structured information, and intentional
            governance.
          </p>
        </Container>

        <Container className="mt-20 sm:mt-24">
          <FrameworkExplorer />
        </Container>

        <Container id="capability-map" className="mt-24 scroll-mt-28 sm:mt-32">
          <Eyebrow>Capability Map</Eyebrow>
          <h2 className="mt-4 font-display text-3xl text-sage-dark sm:text-4xl">
            Skills proven through project evidence.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-dark">
            Every capability links back to a project that demonstrates it — not a self-assigned
            proficiency score.
          </p>
          <div className="mt-12">
            <CapabilityMap />
          </div>
        </Container>

        <div className="h-24" />
      </div>
    </>
  );
}
