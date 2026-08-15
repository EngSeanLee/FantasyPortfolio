import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SceneBackdrop } from "@/components/environment/SceneBackdrop";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { Insignia } from "@/components/ui/Insignia";
import { Button } from "@/components/ui/Button";
import { CaseSection } from "@/components/case-study/CaseSection";
import { ArchitectureDiagram } from "@/components/projects/ArchitectureDiagram";
import { ImpactMetric } from "@/components/case-study/ImpactMetric";
import { FeaturedProjectCard } from "@/components/projects/FeaturedProjectCard";
import { getCapabilityById } from "@/content/capabilities";
import { getProjectBySlug, getRelatedProjects, projects } from "@/content/projects";

const techLabels: Record<string, string> = {
  platform: "Platform",
  model: "Model / AI Environment",
  agentArchitecture: "Agent Architecture",
  promptStrategy: "Prompt / Instruction Strategy",
  dataLayer: "Data Layer",
  integrations: "Integrations",
  controls: "Controls / Guardrails",
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project);
  const techEntries = Object.entries(project.technology).filter(
    ([, v]) => Array.isArray(v) && v.length > 0
  ) as [string, string[]][];

  return (
    <>
      <SceneBackdrop distance="near" className="h-[46vh] min-h-[380px]" />
      <div className="relative -mt-24 bg-cloud sm:-mt-28">
        <Container>
          <Eyebrow>{project.category}</Eyebrow>
          <div className="mt-4 flex items-start gap-5">
            <span className="mt-1 hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-champagne bg-cloud text-sage-dark sm:flex">
              <Insignia id={project.insignia} className="h-7 w-7" />
            </span>
            <div>
              <h1 className="font-display text-4xl leading-tight text-sage-dark sm:text-5xl">
                {project.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-dark">
                {project.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.capabilities.map((id) => {
                  const cap = getCapabilityById(id);
                  if (!cap) return null;
                  return <Tag key={id}>{cap.label}</Tag>;
                })}
              </div>
            </div>
          </div>
        </Container>

        <CaseSection index="01" label="Problem">
          {project.problem.headline && (
            <p className="font-display text-2xl leading-snug text-sage-dark text-balance sm:text-3xl">
              {project.problem.headline}
            </p>
          )}
          <p className="mt-5 text-base leading-relaxed text-stone-dark">{project.problem.body}</p>
        </CaseSection>

        <CaseSection index="02" label="Project Overview" tone="ivory">
          <p className="text-base leading-relaxed text-stone-dark">{project.overview}</p>
        </CaseSection>

        <CaseSection index="03" label="Architecture">
          <p className="mb-8 text-base leading-relaxed text-stone-dark">
            {project.architecture.description}
          </p>
          <ArchitectureDiagram nodes={project.architecture.nodes} />
        </CaseSection>

        {techEntries.length > 0 && (
          <CaseSection index="04" label="AI & Technology Layer" tone="ivory">
            <div className="grid gap-6 sm:grid-cols-2">
              {techEntries.map(([key, values]) => (
                <div key={key}>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage">
                    {techLabels[key] ?? key}
                  </p>
                  <ul className="mt-2 space-y-1">
                    {values.map((v) => (
                      <li key={v} className="text-sm text-stone-dark">
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CaseSection>
        )}

        <CaseSection index="05" label="Business Impact">
          {project.impact.metric && (
            <div className="mb-8">
              <ImpactMetric metric={project.impact.metric} />
            </div>
          )}
          <ul className="grid gap-3 sm:grid-cols-2">
            {project.impact.outcomes.map((o) => (
              <li
                key={o}
                className="border-l-2 border-champagne pl-4 text-sm leading-relaxed text-stone-dark"
              >
                {o}
              </li>
            ))}
          </ul>
        </CaseSection>

        {project.lessons.length > 0 && (
          <CaseSection index="06" label="Lessons Learned" tone="ivory">
            <ul className="space-y-4">
              {project.lessons.map((l) => (
                <li key={l} className="text-base leading-relaxed text-stone-dark">
                  {l}
                </li>
              ))}
            </ul>
          </CaseSection>
        )}

        {related.length > 0 && (
          <CaseSection index="07" label="Related Systems">
            <div className="grid gap-5 sm:grid-cols-2">
              {related.map((p, i) => (
                <FeaturedProjectCard key={p.slug} project={p} index={i} />
              ))}
            </div>
            <div className="mt-10">
              <Button href="/projects" variant="secondary">
                Back to All Projects
              </Button>
            </div>
          </CaseSection>
        )}
      </div>
    </>
  );
}
