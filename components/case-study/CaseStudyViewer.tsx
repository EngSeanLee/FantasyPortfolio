"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Tag } from "@/components/ui/Tag";
import { Insignia } from "@/components/ui/Insignia";
import { Button } from "@/components/ui/Button";
import { ArchitectureDiagram } from "@/components/projects/ArchitectureDiagram";
import { ImpactMetric } from "@/components/case-study/ImpactMetric";
import { FeaturedProjectCard } from "@/components/projects/FeaturedProjectCard";
import { getCapabilityById } from "@/content/capabilities";
import { getRelatedProjects, Project } from "@/content/projects";
import { cn } from "@/lib/utils";

const techLabels: Record<string, string> = {
  platform: "Platform",
  model: "Model / AI Environment",
  agentArchitecture: "Agent Architecture",
  promptStrategy: "Prompt / Instruction Strategy",
  dataLayer: "Data Layer",
  integrations: "Integrations",
  controls: "Controls / Guardrails",
};

export function CaseStudyViewer({ project }: { project: Project }) {
  const [active, setActive] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const related = getRelatedProjects(project);
  const techEntries = Object.entries(project.technology).filter(
    ([, v]) => Array.isArray(v) && v.length > 0
  ) as [string, string[]][];

  const chapters = [
    { id: "problem", label: "Problem" },
    { id: "overview", label: "Project Overview" },
    { id: "architecture", label: "Architecture" },
    ...(techEntries.length ? [{ id: "technology", label: "AI & Technology Layer" }] : []),
    { id: "impact", label: "Business Impact" },
    ...(project.lessons.length ? [{ id: "lessons", label: "Lessons Learned" }] : []),
    ...(related.length ? [{ id: "related", label: "Related Systems" }] : []),
  ];

  const chapter = chapters[active];

  return (
    <div className="mx-auto w-full max-w-5xl">
      <Link
        href="/projects"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-sage-dark/80 transition-colors hover:text-sage-dark"
      >
        ← Back to Projects
      </Link>

      <GlassPanel className="overflow-hidden">
        <div className="flex flex-col gap-5 border-b border-champagne/40 p-7 sm:flex-row sm:items-start sm:gap-6 sm:p-9">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-champagne/70 bg-cloud/60 text-sage-dark">
            <Insignia id={project.insignia} className="h-6 w-6" />
          </span>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage">
              {project.category}
            </p>
            <h1 className="mt-2 font-display text-2xl leading-tight text-sage-dark sm:text-3xl">
              {project.title}
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-stone-dark">
              {project.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.capabilities.map((id) => {
                const cap = getCapabilityById(id);
                if (!cap) return null;
                return <Tag key={id}>{cap.label}</Tag>;
              })}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[200px_1fr]">
          <nav
            aria-label="Case study chapters"
            className="flex gap-1 overflow-x-auto border-b border-champagne/30 p-3 lg:flex-col lg:gap-0.5 lg:overflow-visible lg:border-b-0 lg:border-r lg:p-5"
          >
            {chapters.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setActive(i)}
                aria-current={active === i ? "step" : undefined}
                className={cn(
                  "flex shrink-0 items-baseline gap-2 rounded-sm px-3 py-2.5 text-left transition-colors lg:w-full lg:shrink lg:px-3",
                  active === i
                    ? "bg-sage-dark/90 text-cloud"
                    : "text-sage-dark/70 hover:bg-cloud/50 hover:text-sage-dark"
                )}
              >
                <span
                  className={cn(
                    "font-display text-sm",
                    active === i ? "text-champagne-light" : "text-champagne"
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-xs font-medium uppercase tracking-wider whitespace-nowrap lg:whitespace-normal">
                  {c.label}
                </span>
              </button>
            ))}
          </nav>

          <div className="min-h-[360px] p-7 sm:p-9 lg:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                {chapter.id === "problem" && (
                  <div>
                    {project.problem.headline && (
                      <p className="font-display text-xl leading-snug text-sage-dark text-balance sm:text-2xl">
                        {project.problem.headline}
                      </p>
                    )}
                    <p className="mt-4 text-base leading-relaxed text-stone-dark">
                      {project.problem.body}
                    </p>
                  </div>
                )}

                {chapter.id === "overview" && (
                  <p className="text-base leading-relaxed text-stone-dark">{project.overview}</p>
                )}

                {chapter.id === "architecture" && (
                  <div>
                    <p className="mb-6 text-base leading-relaxed text-stone-dark">
                      {project.architecture.description}
                    </p>
                    <ArchitectureDiagram nodes={project.architecture.nodes} />
                  </div>
                )}

                {chapter.id === "technology" && (
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
                )}

                {chapter.id === "impact" && (
                  <div>
                    {project.impact.metric && (
                      <div className="mb-6">
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
                  </div>
                )}

                {chapter.id === "lessons" && (
                  <ul className="space-y-4">
                    {project.lessons.map((l) => (
                      <li key={l} className="text-base leading-relaxed text-stone-dark">
                        {l}
                      </li>
                    ))}
                  </ul>
                )}

                {chapter.id === "related" && (
                  <div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      {related.map((p, i) => (
                        <FeaturedProjectCard key={p.slug} project={p} index={i} />
                      ))}
                    </div>
                    <div className="mt-8">
                      <Button href="/projects" variant="secondary">
                        Back to All Projects
                      </Button>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </GlassPanel>
    </div>
  );
}
