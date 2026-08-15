"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { capabilities } from "@/content/capabilities";
import { getProjectBySlug } from "@/content/projects";
import { cn } from "@/lib/utils";

const primary = capabilities.filter((c) => c.tier === "primary");
const secondary = capabilities.filter((c) => c.tier === "secondary");

export function CapabilityMap() {
  const [activeId, setActiveId] = useState(primary[0].id);
  const active = capabilities.find((c) => c.id === activeId)!;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
      <div>
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-sage">
          Core Capabilities
        </p>
        <div className="flex flex-wrap gap-2.5">
          {primary.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveId(c.id)}
              aria-pressed={activeId === c.id}
              className={cn(
                "rounded-full border px-4 py-2.5 text-sm font-medium transition-all",
                activeId === c.id
                  ? "border-sage-dark bg-sage-dark text-cloud"
                  : "border-stone text-sage-dark hover:border-sage"
              )}
            >
              {c.label}
            </button>
          ))}
        </div>

        <p className="mt-8 mb-4 text-xs font-medium uppercase tracking-[0.24em] text-sage">
          Supporting Capabilities
        </p>
        <div className="flex flex-wrap gap-2.5">
          {secondary.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveId(c.id)}
              aria-pressed={activeId === c.id}
              className={cn(
                "rounded-full border px-3.5 py-2 text-xs font-medium tracking-wide transition-all",
                activeId === c.id
                  ? "border-champagne bg-champagne-light text-sage-dark"
                  : "border-stone/80 text-stone-dark hover:border-champagne"
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        key={active.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="h-fit border border-stone bg-cloud p-7 lg:sticky lg:top-28"
      >
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage">
          {active.tier === "primary" ? "Core Capability" : "Supporting Capability"}
        </p>
        <h3 className="mt-2 font-display text-2xl text-sage-dark">{active.label}</h3>
        <p className="mt-4 text-sm leading-relaxed text-stone-dark">{active.definition}</p>

        <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-sage">
          Evidence
        </p>
        <ul className="mt-3 space-y-2.5">
          {active.relatedProjects.map((slug) => {
            const project = getProjectBySlug(slug);
            if (!project) return null;
            return (
              <li key={slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group flex items-center justify-between border-b border-stone/60 pb-2 text-sm text-sage-dark transition-colors hover:text-sage"
                >
                  {project.title}
                  <span className="text-sage opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}
