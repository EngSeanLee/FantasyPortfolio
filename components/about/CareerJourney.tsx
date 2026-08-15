"use client";

import { motion, useReducedMotion } from "framer-motion";
import { careerJourney } from "@/content/site";
import { cn } from "@/lib/utils";

export function CareerJourney() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-stone sm:left-0 sm:right-0 sm:top-[7px] sm:bottom-auto sm:h-px sm:w-auto" />
      <ol className="relative flex flex-col gap-8 sm:flex-row sm:justify-between sm:gap-4">
        {careerJourney.map((step, i) => (
          <motion.li
            key={step.label}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="relative flex items-start gap-4 pl-8 sm:min-w-0 sm:flex-1 sm:flex-col sm:items-center sm:gap-3 sm:pl-0 sm:text-center"
          >
            <span
              className={cn(
                "absolute left-0 top-1 h-3.5 w-3.5 shrink-0 rounded-full border-2 sm:static",
                step.isCurrent ? "border-sage-dark bg-champagne" : "border-sage bg-cloud"
              )}
            />
            <p
              className={cn(
                "max-w-[10rem] text-sm leading-snug",
                step.isCurrent ? "font-medium text-sage-dark" : "text-stone-dark"
              )}
            >
              {step.label}
            </p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
