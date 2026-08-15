import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FeaturedProjectCard } from "@/components/projects/FeaturedProjectCard";
import { getFeaturedProjects } from "@/content/projects";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section id="work" className="bg-cloud py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Featured Systems"
            title="A working archive of applied systems."
            body="Selected projects spanning process design, applied AI, and documentation automation — each built around a defined operating problem."
          />
          <Button href="/projects" variant="secondary" className="shrink-0">
            View All Projects
          </Button>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {featured.map((project, i) => (
            <FeaturedProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
