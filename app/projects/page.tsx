import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SystemMap } from "@/components/projects/SystemMap";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A system map of applied AI, governance, and process work, grouped by the kind of problem each one solves.",
};

export default function ProjectsPage() {
  return (
    <div className="py-28 lg:py-16">
      <Container>
        <GlassPanel className="p-7 sm:p-10 lg:p-14">
          <Eyebrow>Projects</Eyebrow>
          <h1 className="mt-4 font-display text-4xl text-sage-dark sm:text-5xl">System Map</h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-dark">
            Each system began with an operating problem, not a tool. Hover or focus any node to
            preview it — the map groups them by the kind of problem they solve, not by chronology.
            Open a node for the full case study.
          </p>

          <div className="mt-14">
            <SystemMap projects={projects} />
          </div>
        </GlassPanel>
      </Container>
    </div>
  );
}
