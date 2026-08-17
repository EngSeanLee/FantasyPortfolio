"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import heroArt from "@/public/environment/daylight-meadow-master.png";
import { useCoverRect } from "@/lib/use-cover-rect";
import { cn } from "@/lib/utils";

/**
 * PROTOTYPE — not part of the shipped site. Testing whether a real
 * dramatic camera push into a specific spot in the painting, revealing
 * a living vignette there, is the right direction before building the
 * full system. See motion-plan.html for context.
 *
 * There's no blacksmith painted at this coordinate yet — it's a stand-in
 * point near the small ruin structure in the meadow mid-ground, purely
 * to test whether the push-in *motion* itself feels right against the
 * real art. The actual vignette (a short looping video) gets composited
 * in once generated; this shows a placeholder card in its place so the
 * mechanic can be judged on its own before that exists.
 */
const TEST_POINT = { x: 600, y: 560 };
const ZOOM_SCALE = 4.5;

export function VignetteZoomDemo() {
  const [active, setActive] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { rect, toViewport, toViewportLength } = useCoverRect();

  if (!rect.renderedWidth || typeof window === "undefined") return null;

  const point = toViewport(TEST_POINT.x, TEST_POINT.y);
  const radius = toViewportLength(70);
  const originXPercent = (point.left / window.innerWidth) * 100;
  const originYPercent = (point.top / window.innerHeight) * 100;

  return (
    <>
      {/* Hotspot marker — a visible pulsing dot for this prototype (not
          the invisible-until-hover pattern the real hotspots use), so
          it's easy to find while testing. */}
      <button
        type="button"
        onClick={() => setActive(true)}
        aria-label="Preview: camera push-in prototype"
        className="pointer-events-auto fixed z-10 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center lg:flex"
        style={{ left: point.left, top: point.top, width: radius * 2, height: radius * 2 }}
      >
        {/* Loud test-only marker color (magenta) so it's unmissable
            against the sky while judging the push-in motion — has no
            bearing on the final hotspot's appearance. */}
        <span className="absolute h-8 w-8 animate-ping rounded-full bg-fuchsia-500/70" />
        <span className="absolute h-5 w-5 rounded-full bg-fuchsia-500 shadow-[0_0_24px_8px_rgba(217,70,239,0.8)]" />
      </button>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 overflow-hidden bg-cloud"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0"
              style={{ transformOrigin: `${originXPercent}% ${originYPercent}%` }}
              initial={{ scale: 1 }}
              animate={{ scale: prefersReducedMotion ? ZOOM_SCALE : ZOOM_SCALE }}
              exit={{ scale: 1 }}
              transition={{ duration: prefersReducedMotion ? 0 : 1.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image src={heroArt} alt="" fill priority sizes="100vw" className="object-cover" />
            </motion.div>

            <motion.div
              className="absolute inset-0 flex items-center justify-center p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: prefersReducedMotion ? 0.1 : 1.3, duration: 0.5 }}
            >
              <div className="max-w-sm rounded-lg border border-champagne/50 bg-ivory/90 p-6 text-center shadow-[0_24px_70px_-28px_rgba(78,107,87,0.5)] backdrop-blur-xl">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-sage">
                  Prototype
                </p>
                <p className="mt-3 text-sm leading-relaxed text-stone-dark">
                  This is the camera push-in only — judge the motion itself. The real
                  vignette (a short looping video of a scene happening here) composites
                  into this space next, once generated.
                </p>
              </div>
            </motion.div>

            <button
              type="button"
              onClick={() => setActive(false)}
              aria-label="Close preview"
              className={cn(
                "absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full",
                "border border-champagne/60 bg-ivory/80 text-sage-dark backdrop-blur-xl transition-colors hover:bg-ivory"
              )}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
