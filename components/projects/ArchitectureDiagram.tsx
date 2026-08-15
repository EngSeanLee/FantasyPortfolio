"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArchitectureNode } from "@/content/projects";

export function ArchitectureDiagram({ nodes }: { nodes: ArchitectureNode[] }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative pl-8">
      <motion.span
        aria-hidden
        className="absolute left-[7px] top-2 w-px bg-champagne"
        style={{ bottom: 8 }}
        initial={{ scaleY: prefersReducedMotion ? 1 : 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <ul className="space-y-6">
        {nodes.map((node, i) => (
          <motion.li
            key={node.label}
            className="relative"
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
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
  );
}
