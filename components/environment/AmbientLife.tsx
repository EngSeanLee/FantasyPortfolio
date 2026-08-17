"use client";

import { useReducedMotion } from "framer-motion";

const VB_W = 1672;
const VB_H = 941;

/** Rough trace of the river's course through the painting, left lake to
 *  the Observatory's cliff base. Deliberately generous/approximate — the
 *  shimmer is a soft blurred stroke, not a hard edge, so it doesn't need
 *  to hug the water precisely. */
const RIVER_PATH =
  "M 20,560 C 160,590 300,610 420,628 C 560,648 700,652 840,636 " +
  "C 960,622 1040,600 1120,560 C 1190,524 1240,486 1290,436";

type Bird = {
  src: string;
  /** Start position in painting-space (image can drift off-canvas). */
  x: number;
  y: number;
  width: number;
  /** Loop duration; longer = slower, more distant-feeling. */
  duration: number;
  /** Negative delay staggers birds within an already-running loop. */
  delay: number;
  /** How far right + how far up/down the bird travels over one loop. */
  driftX: number;
  driftY: number;
};

const birds: Bird[] = [
  { src: "/environment/sprites/bird-glide.png", x: -160, y: 90, width: 130, duration: 36, delay: -4, driftX: VB_W + 320, driftY: -60 },
  { src: "/environment/sprites/bird-climb-a.png", x: -100, y: 210, width: 74, duration: 27, delay: -14, driftX: VB_W + 240, driftY: 30 },
  { src: "/environment/sprites/bird-pair-distant.png", x: -90, y: 150, width: 68, duration: 44, delay: -30, driftX: VB_W + 200, driftY: -25 },
];

/**
 * The ambient life layer: drifting birds, a slow water-shimmer highlight
 * traveling along the river, and a faint cloud-shadow passing over the
 * meadow. Everything here is additive (opacity/blend-mode effects and
 * new sprite elements) — nothing displaces or warps the painting's own
 * pixels, per the Section 0.5 rule against reintroducing distortion.
 *
 * Fully disabled under prefers-reduced-motion: the painting alone still
 * reads as a complete, distinctive scene without any of this.
 */
export function AmbientLife() {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) return null;

  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <defs>
        <filter id="softBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
        <radialGradient id="cloudShadowGradient">
          <stop offset="0%" stopColor="#2c3830" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#2c3830" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Water shimmer: a soft highlight traveling along the river's course. */}
      <path
        d={RIVER_PATH}
        fill="none"
        stroke="#fffaf0"
        strokeWidth={22}
        strokeLinecap="round"
        filter="url(#softBlur)"
        style={{ mixBlendMode: "screen", opacity: 0.4 }}
        strokeDasharray="60 910"
        className="water-shimmer"
      />

      {/* Cloud shadow: a faint blob drifting across the meadow. */}
      <ellipse
        cx={-260}
        cy={640}
        rx={260}
        ry={95}
        fill="url(#cloudShadowGradient)"
        style={{ mixBlendMode: "multiply" }}
        className="cloud-shadow"
      />

      {birds.map((bird, i) => (
        <image
          key={i}
          href={bird.src}
          x={bird.x}
          y={bird.y}
          width={bird.width}
          className={`bird bird-${i}`}
        />
      ))}

      <style>{`
        .water-shimmer {
          animation: waterShimmer 9s linear infinite;
        }
        @keyframes waterShimmer {
          from { stroke-dashoffset: 970; }
          to { stroke-dashoffset: 0; }
        }

        .cloud-shadow {
          animation: cloudDrift 48s linear infinite;
        }
        @keyframes cloudDrift {
          from { transform: translateX(0); }
          to { transform: translateX(${VB_W + 560}px); }
        }

        ${birds
          .map(
            (bird, i) => `
          .bird-${i} {
            animation: birdFly${i} ${bird.duration}s linear infinite;
            animation-delay: ${bird.delay}s;
          }
          @keyframes birdFly${i} {
            from { transform: translate(0, 0); }
            to { transform: translate(${bird.driftX}px, ${bird.driftY}px); }
          }
        `
          )
          .join("\n")}
      `}</style>
    </svg>
  );
}
