"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import heroArt from "@/public/environment/daylight-meadow-master.png";
import { AmbientLife } from "@/components/environment/AmbientLife";
import { getWaypoint, HOME_WAYPOINT } from "@/lib/environment-waypoints";

/**
 * The single, persistent world background. Mounted once in the root
 * layout — outside {children} — so it never remounts, restarts, or swaps
 * between routes. Every page reveals a window onto this exact same
 * painting; only the page content scrolling on top of it changes.
 *
 * The painting itself is never distorted or repainted — per Section 0.5,
 * the earlier SVG feTurbulence attempt warped the art and was rejected.
 * What moves here is restrained and additive only: a gentle per-route
 * reframe (scale/translate on the whole image, never a crop of its
 * content) and the ambient layer (birds, water shimmer, cloud-shadow)
 * composited on top in <AmbientLife />, which never touches the
 * painting's own pixels either.
 */
export function LivingEnvironment() {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const waypoint = prefersReducedMotion ? HOME_WAYPOINT : getWaypoint(pathname);

  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-cloud">
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: waypoint.scale,
          x: `${waypoint.xPercent}%`,
          y: `${waypoint.yPercent}%`,
        }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={heroArt}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <AmbientLife />
      </motion.div>
    </div>
  );
}
