"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { BirdLayer } from "./BirdLayer";
import { AtmosphereLayer } from "./AtmosphereLayer";
import heroArt from "@/public/environment/daylight-meadow-hero.jpg";

/**
 * The approved painterly reference — an original AI-illustrated daylight
 * meadow with the Observatory landmark — anchored right, per the approved
 * art direction: architecture dominates the right half, the left half stays
 * calm enough to carry the professional interface content. A thin
 * transparent SVG layer (birds, atmospheric motes) sits above it for
 * ambient motion; it never stands in for the landscape itself.
 */
export function HeroEnvironment({ children }: { children?: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const artY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 40]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -40]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.4]);

  return (
    <div ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-cloud">
      {/* Z-0 — approved painterly environment */}
      <motion.div style={{ y: artY }} className="absolute inset-0">
        <div className="absolute inset-y-0 right-0 w-full sm:w-[70%] lg:w-[62%]">
          <Image
            src={heroArt}
            alt=""
            fill
            priority
            sizes="(max-width: 640px) 100vw, 62vw"
            className="object-cover object-[68%_center] sm:object-right"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 22%)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 22%)",
            }}
          />
        </div>
        {/* soft scrim on mobile so stacked text stays legible over the art */}
        <div
          aria-hidden
          className="absolute inset-0 sm:hidden"
          style={{
            background:
              "linear-gradient(180deg, var(--color-cloud) 0%, rgba(247,246,241,0.55) 32%, rgba(247,246,241,0.15) 55%, rgba(247,246,241,0.65) 82%, var(--color-cloud) 100%)",
          }}
        />
      </motion.div>

      {/* Z-1 — transparent ambient motion overlay: birds + motes only */}
      <BirdLayer />
      <AtmosphereLayer />

      {/* Z-2 — content */}
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
