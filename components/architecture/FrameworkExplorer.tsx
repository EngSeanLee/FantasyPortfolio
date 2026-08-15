"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { architectureFramework } from "@/content/architecture-framework";
import { getProjectBySlug } from "@/content/projects";
import { cn } from "@/lib/utils";

export function FrameworkExplorer() {
  const [active, setActive] = useState(0);
  const node = architectureFramework[active];

  return (
    <div>
      <div className="overflow-x-auto pb-2">
        <ol className="flex min-w-[760px] items-stretch gap-2 sm:min-w-0">
          {architectureFramework.map((n, i) => (
            <li key={n.id} className="flex flex-1 items-center gap-2">
              <button
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={cn(
                  "w-full rounded-sm border px-4 py-5 text-left transition-all duration-300",
                  active === i
                    ? "border-sage-dark bg-sage-dark text-cloud shadow-[0_10px_30px_-16px_rgba(78,107,87,0.5)]"
                    : "border-stone bg-cloud text-sage-dark hover:border-champagne"
                )}
              >
                <span
                  className={cn(
                    "font-display text-lg",
                    active === i ? "text-champagne-light" : "text-champagne"
                  )}
                >
                  {n.index}
                </span>
                <p className="mt-2 text-sm font-medium">{n.title}</p>
              </button>
              {i < architectureFramework.length - 1 && (
                <span
                  aria-hidden
                  className={cn(
                    "h-px w-4 shrink-0 transition-colors duration-500",
                    i < active ? "bg-champagne" : "bg-stone"
                  )}
                />
              )}
            </li>
          ))}
        </ol>
      </div>

      <motion.div
        key={node.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 grid gap-10 border border-stone bg-ivory p-8 sm:p-10 lg:grid-cols-[1.4fr_1fr]"
      >
        <div>
          <p className="font-display text-2xl leading-snug text-sage-dark text-balance">
            {node.question}
          </p>
          <p className="mt-5 text-base leading-relaxed text-stone-dark">{node.explanation}</p>
          <p className="mt-5 border-l-2 border-champagne pl-4 text-sm font-medium text-sage-dark">
            {node.principle}
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-sage">
            Evidence
          </p>
          <ul className="mt-4 space-y-3">
            {node.relatedProjects.map((slug) => {
              const project = getProjectBySlug(slug);
              if (!project) return null;
              return (
                <li key={slug}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group flex items-center justify-between border-b border-stone/70 pb-2 text-sm text-sage-dark transition-colors hover:text-sage"
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
        </div>
      </motion.div>
    </div>
  );
}
