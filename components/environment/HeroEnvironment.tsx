"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * A transparent window onto the single, persistent <LivingEnvironment />
 * background (mounted in the root layout). Home is a single viewport with
 * nothing below it — full environmental presence, no fade into a solid
 * panel — so this owns no art and no bottom gradient of its own.
 */
export function HeroEnvironment({ children }: { children?: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative h-svh min-h-[560px] w-full overflow-hidden">
      {children && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: prefersReducedMotion ? 0.3 : 0.8 }}
          className="relative z-10 h-full"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}
