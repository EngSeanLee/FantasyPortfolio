"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { SkyLayer } from "./SkyLayer";
import { CloudLayer } from "./CloudLayer";
import { MountainLayer } from "./MountainLayer";
import { ObservatoryLayer } from "./ObservatoryLayer";
import { TerraceLayer } from "./TerraceLayer";
import { MeadowLayer } from "./MeadowLayer";
import { ForegroundGrass } from "./ForegroundGrass";
import { BirdLayer } from "./BirdLayer";
import { AtmosphereLayer } from "./AtmosphereLayer";

/**
 * The full layered daylight-meadow hero. Scroll produces a very subtle
 * parallax push between layers — never enough to make reading difficult,
 * and disabled entirely under prefers-reduced-motion.
 */
export function HeroEnvironment({ children }: { children?: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const mountainY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 30]);
  const terraceY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 55]);
  const meadowY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 90]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -40]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.4]);

  return (
    <div ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <SkyLayer />
      <CloudLayer depth="far" />
      <motion.div style={{ y: mountainY }} className="absolute inset-0">
        <MountainLayer />
      </motion.div>
      <ObservatoryLayer distance="far" />
      <motion.div style={{ y: terraceY }} className="absolute inset-0">
        <TerraceLayer />
      </motion.div>
      <CloudLayer depth="near" />
      <motion.div style={{ y: meadowY }} className="absolute inset-0">
        <MeadowLayer />
      </motion.div>
      <ForegroundGrass />
      <BirdLayer />
      <AtmosphereLayer />

      {children && (
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-10 h-full"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}
