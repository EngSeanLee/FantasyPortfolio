"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArchitectureNode } from "@/content/projects";

export function ArchitectureDiagram({ nodes }: { nodes: ArchitectureNode[] }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative border border-stone bg-cloud p-8 sm:p-10">
      <div className="relative pl-8">
        <motion.span
          aria-hidden
          className="absolute left-[7px] top-2 w-px bg-champagne"
          style={{ bottom: 8 }}
          initial={{ scaleY: prefersReducedMotion ? 1 : 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <ul className="space-y-8">
          {nodes.map((node, i) => (
            <motion.li
              key={node.label}
              className="relative"
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span
                aria-hidden
                className="absolute -left-8 top-1 h-3.5 w-3.5 rounded-full border-2 border-sage bg-cloud"
              />
              <p className="text-sm font-medium tracking-wide text-sage-dark">{node.label}</p>
              {node.detail && (
                <p className="mt-1 text-sm text-stone-dark">{node.detail}</p>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
