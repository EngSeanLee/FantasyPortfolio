"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * A transparent window onto the single, persistent <LivingEnvironment />
 * background (mounted in the root layout). This component owns no art of
 * its own — it just reserves hero-sized space and fades into the page's
 * solid content below, so the world underneath stays visible and never
 * differs page to page.
 */
export function HeroEnvironment({ children }: { children?: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* fade into the page's solid background at the bottom edge */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, transparent 62%, var(--color-cloud) 100%)",
        }}
      />

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
