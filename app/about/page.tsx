import { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { AboutAreas } from "@/components/about/AboutAreas";

export const metadata: Metadata = {
  title: "About",
  description: "Background, journey, and credentials.",
};

export default function AboutPage() {
  return (
    <div className="py-28 lg:py-16">
      <Container>
        <GlassPanel className="p-7 sm:p-10 lg:p-14">
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-sage-dark text-balance sm:text-5xl">
            My career has centered on understanding complex operational problems and turning
            them into structured, executable solutions.
          </h1>

          <div className="mt-14">
            <Suspense fallback={null}>
              <AboutAreas />
            </Suspense>
          </div>
        </GlassPanel>
      </Container>
    </div>
  );
}
