import type { Metadata } from "next";
import { SceneBackdrop } from "@/components/environment/SceneBackdrop";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { ArchiveRow } from "@/components/projects/ArchiveRow";
import { getProjectsByGroup } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Archive of Applied Systems — process design, applied AI, and documentation automation.",
};

const groups: { group: "featured" | "supporting" | "experiments"; label: string; description: string }[] = [
  {
    group: "featured",
    label: "Featured Systems",
    description: "The core body of work — process, governance, and applied AI, end to end.",
  },
  {
    group: "supporting",
    label: "Supporting AI & Automation Systems",
    description: "Focused agents built to remove specific, recurring friction.",
  },
  {
    group: "experiments",
    label: "Applied Tools & Experiments",
    description: "Independent tools built to test ideas and develop technical capability.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <SceneBackdrop distance="mid" className="h-[40vh] min-h-[320px]" />
      <div className="relative -mt-16 sm:-mt-20">
        <Container>
          <Eyebrow>Projects</Eyebrow>
          <h1 className="mt-4 font-display text-4xl text-sage-dark sm:text-5xl">
            Archive of Applied Systems
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-dark">
            Each system began with an operating problem, not a tool. Browse by category, or open
            any project for the full case study.
          </p>
        </Container>

        {groups.map((g) => {
          const items = getProjectsByGroup(g.group);
          if (items.length === 0) return null;
          return (
            <Container key={g.group} className="mt-20 sm:mt-24">
              <div className="flex flex-col gap-2 border-b border-stone pb-6 sm:flex-row sm:items-baseline sm:justify-between">
                <h2 className="font-display text-2xl text-sage-dark">{g.label}</h2>
                <p className="text-sm text-stone-dark">{g.description}</p>
              </div>
              <div className="mt-2">
                {items.map((project, i) => (
                  <ArchiveRow key={project.slug} project={project} index={i} />
                ))}
              </div>
            </Container>
          );
        })}

        <div className="h-24" />
      </div>
    </>
  );
}
