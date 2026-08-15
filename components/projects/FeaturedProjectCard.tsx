"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Insignia } from "@/components/ui/Insignia";
import { Project } from "@/content/projects";
import { getCapabilityById } from "@/content/capabilities";

export function FeaturedProjectCard({ project, index }: { project: Project; index: number }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group relative flex h-full flex-col justify-between overflow-hidden border border-stone/70 bg-cloud/80 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-champagne hover:shadow-[0_0_0_1px_var(--color-champagne),0_18px_40px_-24px_rgba(78,107,87,0.35)]"
      >
        <div>
          <div className="flex items-center justify-between">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-champagne/70 text-sage transition-colors group-hover:border-champagne group-hover:text-sage-dark">
              <Insignia id={project.insignia} className="h-5 w-5" />
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-stone-dark/70">
              {project.category}
            </span>
          </div>

          <h3 className="mt-6 font-display text-xl leading-snug text-sage-dark sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-stone-dark">
            {project.summary}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {project.capabilities.slice(0, 3).map((id) => {
            const cap = getCapabilityById(id);
            if (!cap) return null;
            return (
              <span
                key={id}
                className="rounded-full border border-stone px-2.5 py-1 text-[10px] uppercase tracking-wider text-stone-dark"
              >
                {cap.label}
              </span>
            );
          })}
        </div>

        <span
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-champagne transition-transform duration-500 group-hover:scale-x-100"
        />
      </Link>
    </motion.div>
  );
}
