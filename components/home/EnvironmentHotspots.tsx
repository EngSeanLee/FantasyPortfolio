"use client";

import Link from "next/link";
import { useCoverRect } from "@/lib/use-cover-rect";

type Hotspot = {
  href: string;
  label: string;
  /** Center and radius in painting-space (0–1672 × 0–941). */
  x: number;
  y: number;
  radius: number;
};

const hotspots: Hotspot[] = [
  {
    href: "/architecture",
    label: "Explore the Architecture — the Observatory",
    x: 1340,
    y: 260,
    radius: 170,
  },
  {
    href: "/projects",
    label: "Explore the Systems Archive — the ruins",
    x: 1520,
    y: 690,
    radius: 150,
  },
];

/**
 * Clickable regions over features already in the painting — the
 * Observatory and the foreground ruins. Home-only: it's the one route
 * where the painting is fully visible and unobstructed by a GlassPanel,
 * and its camera waypoint is always at rest (scale 1, no translate), so
 * painting-space coordinates map directly onto the viewport without
 * needing to account for a reframe transform.
 *
 * No new art — these link into existing routes/data via the invisible
 * region + soft glow pattern, matching Section 6's "restrained glow"
 * preferred vocabulary rather than a literal clickable illustration.
 */
export function EnvironmentHotspots() {
  const { rect, toViewport, toViewportLength } = useCoverRect();

  if (!rect.renderedWidth) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 hidden lg:block">
      {hotspots.map((spot) => {
        const center = toViewport(spot.x, spot.y);
        const radius = toViewportLength(spot.radius);
        return (
          <Link
            key={spot.href}
            href={spot.href}
            aria-label={spot.label}
            className="group pointer-events-auto absolute flex items-center justify-center rounded-full outline-none"
            style={{
              left: center.left - radius,
              top: center.top - radius,
              width: radius * 2,
              height: radius * 2,
            }}
          >
            <span
              aria-hidden
              className="h-full w-full rounded-full opacity-0 shadow-[0_0_60px_28px_rgba(231,215,184,0.35)] transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-visible:opacity-100"
            />
            <span
              aria-hidden
              className="absolute h-3 w-3 rounded-full border border-champagne/0 bg-champagne/0 transition-colors duration-300 group-hover:border-champagne group-hover:bg-champagne/40 group-focus-visible:border-champagne group-focus-visible:bg-champagne/40"
            />
          </Link>
        );
      })}
    </div>
  );
}
