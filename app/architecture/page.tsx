import { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { ArchitectureToggle } from "@/components/architecture/ArchitectureToggle";

export const metadata: Metadata = {
  title: "Architecture",
  description: "The framework and capability map behind how EngSean Lee approaches intelligent systems.",
};

export default function ArchitecturePage() {
  return (
    <div className="py-28 lg:py-16">
      <Container>
        <GlassPanel className="p-7 sm:p-10 lg:p-14">
          <Eyebrow>Architecture</Eyebrow>
          <h1 className="mt-4 font-display text-4xl text-sage-dark sm:text-5xl">
            How I approach intelligent systems.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-dark">
            Successful AI implementations rarely begin with AI. They begin with a clearly defined
            operating problem, understood constraints, structured information, and intentional
            governance.
          </p>

          <div className="mt-14">
            <Suspense fallback={null}>
              <ArchitectureToggle />
            </Suspense>
          </div>
        </GlassPanel>
      </Container>
    </div>
  );
}
