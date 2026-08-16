"use client";

import { useState } from "react";
import Link from "next/link";
import { Insignia } from "@/components/ui/Insignia";
import { Tag } from "@/components/ui/Tag";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { ArchiveRow } from "@/components/projects/ArchiveRow";
import { cn } from "@/lib/utils";
import { Project } from "@/content/projects";
import { getCapabilityById } from "@/content/capabilities";
import { layoutSystemMap, toPct, MapNode } from "@/lib/system-map-layout";

/**
 * Projects — System Map. Replaces the scrolling archive list with a
 * diagrammatic node map: projects clustered by category, connected by
 * theme, with cross-category lines where a project genuinely spans two.
 * See 00-master-build-doc-v3.md Section 5.
 *
 * Desktop/tablet: SVG connective lines + absolutely positioned node links
 * over the same coordinate space, plus a preview panel that fills in on
 * hover/focus. Below `lg`: a plain list grouped by category — no diagram,
 * no hover-dependent state, still fully keyboard/touch usable.
 */
export function SystemMap({ projects }: { projects: Project[] }) {
  const { clusters, crossLinks, nodesBySlug } = layoutSystemMap(projects);
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const activeNode = activeSlug ? nodesBySlug.get(activeSlug) : undefined;
  const activeCategory = activeNode?.project.category;

  return (
    <div>
      <div className="hidden gap-8 lg:grid lg:grid-cols-[1fr_320px]">
        <div
          className="relative w-full"
          style={{ aspectRatio: "1000 / 760" }}
          onMouseLeave={() => setActiveSlug(null)}
        >
          <svg
            viewBox="0 0 1000 760"
            className="absolute inset-0 h-full w-full"
            aria-hidden
            focusable="false"
          >
            {clusters.map((cluster) =>
              cluster.nodes.length > 1
                ? cluster.nodes.map((node) => (
                    <line
                      key={`hub-${node.project.slug}`}
                      x1={cluster.cx}
                      y1={cluster.cy}
                      x2={node.x}
                      y2={node.y}
                      stroke="var(--color-sage-dark)"
                      strokeWidth={activeCategory === cluster.category ? 1.75 : 1.25}
                      opacity={activeCategory === cluster.category ? 0.7 : 0.4}
                      className="transition-opacity duration-300"
                    />
                  ))
                : null
            )}
            {crossLinks.map((link) => {
              const from = nodesBySlug.get(link.fromSlug);
              const to = nodesBySlug.get(link.toSlug);
              if (!from || !to) return null;
              const isActive = activeSlug === link.fromSlug || activeSlug === link.toSlug;
              return (
                <line
                  key={`${link.fromSlug}-${link.toSlug}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="var(--color-stone-dark)"
                  strokeWidth={isActive ? 1.75 : 1.25}
                  strokeDasharray="3 5"
                  opacity={isActive ? 0.75 : 0.38}
                  className="transition-opacity duration-300"
                />
              );
            })}
          </svg>

          {clusters.map((cluster) => (
            <span
              key={cluster.category}
              aria-hidden
              style={{ left: `${toPct(cluster.labelX, "x")}%`, top: `${toPct(cluster.labelY, "y")}%` }}
              className="pointer-events-none absolute max-w-[9rem] -translate-x-1/2 -translate-y-1/2 text-center text-[10px] font-medium uppercase leading-tight tracking-[0.18em] text-sage/70"
            >
              {cluster.category}
            </span>
          ))}

          {clusters.flatMap((cluster) =>
            cluster.nodes.map((node) => (
              <SystemMapNode
                key={node.project.slug}
                node={node}
                isActive={activeSlug === node.project.slug}
                onActivate={() => setActiveSlug(node.project.slug)}
                onDeactivate={() => setActiveSlug(null)}
              />
            ))
          )}
        </div>

        <NodeDetailPanel project={activeNode?.project ?? null} />
      </div>

      <div className="lg:hidden">
        {clusters.map((cluster) => (
          <div key={cluster.category} className="mt-10 first:mt-0">
            <h3 className="border-b border-champagne/40 pb-3 font-display text-lg text-sage-dark">
              {cluster.category}
            </h3>
            <div>
              {cluster.nodes.map((node, i) => (
                <ArchiveRow key={node.project.slug} project={node.project} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SystemMapNode({
  node,
  isActive,
  onActivate,
  onDeactivate,
}: {
  node: MapNode;
  isActive: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
}) {
  return (
    <Link
      href={`/projects/${node.project.slug}`}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onBlur={onDeactivate}
      style={{ left: `${toPct(node.x, "x")}%`, top: `${toPct(node.y, "y")}%` }}
      className={cn(
        "group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 rounded-lg outline-none",
        isActive && "z-10"
      )}
    >
      <span
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-full border-2 bg-cloud shadow-sm transition-all duration-300 motion-safe:group-hover:scale-110 motion-safe:group-focus-visible:scale-110",
          isActive
            ? "border-champagne text-sage-dark shadow-md"
            : "border-sage/50 text-sage group-hover:border-champagne group-focus-visible:border-champagne"
        )}
      >
        <Insignia id={node.project.insignia} className="h-5 w-5" />
      </span>
      <span
        className={cn(
          "max-w-[6rem] text-center text-[11px] font-medium leading-tight transition-colors duration-300",
          isActive ? "text-sage-dark" : "text-stone-dark"
        )}
      >
        {node.project.title}
      </span>
    </Link>
  );
}

function NodeDetailPanel({ project }: { project: Project | null }) {
  if (!project) {
    return (
      <GlassPanel className="hidden h-fit p-6 lg:sticky lg:top-28 lg:block">
        <Eyebrow>System Preview</Eyebrow>
        <p className="mt-4 text-sm leading-relaxed text-stone-dark">
          Hover or focus any node to preview it here — open a node for the full case study.
        </p>
      </GlassPanel>
    );
  }

  const topCapabilities = project.capabilities
    .slice(0, 3)
    .map((id) => getCapabilityById(id)?.label ?? id);

  return (
    <GlassPanel className="hidden h-fit p-6 lg:sticky lg:top-28 lg:block">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-champagne text-sage-dark">
          <Insignia id={project.insignia} className="h-4.5 w-4.5" />
        </span>
        <Tag>{project.category}</Tag>
      </div>

      <h3 className="mt-4 font-display text-xl text-sage-dark">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-stone-dark">{project.summary}</p>

      {topCapabilities.length > 0 && (
        <div className="mt-5">
          <Eyebrow className="mb-2 text-[10px]">Key Capabilities</Eyebrow>
          <ul className="flex flex-wrap gap-1.5">
            {topCapabilities.map((label) => (
              <li
                key={label}
                className="rounded-full border border-stone px-2.5 py-1 text-[10px] text-stone-dark"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.architecture.nodes.length > 0 && (
        <div className="mt-5">
          <Eyebrow className="mb-2 text-[10px]">Architecture Preview</Eyebrow>
          <ul className="space-y-1.5">
            {project.architecture.nodes.slice(0, 2).map((n) => (
              <li key={n.label} className="flex items-center gap-2 text-xs text-stone-dark">
                <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                {n.label}
              </li>
            ))}
          </ul>
        </div>
      )}

      <Link
        href={`/projects/${project.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-sage-dark transition-colors hover:text-sage"
      >
        View full case study
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Link>
    </GlassPanel>
  );
}
