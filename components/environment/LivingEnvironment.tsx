import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * The single, persistent world background. Mounted once in the root
 * layout — outside {children} — so it never remounts, restarts, or swaps
 * between routes. Every page reveals a window onto this exact same fixed
 * image; only the page content scrolling on top of it changes.
 *
 * The SVG is inlined (not loaded via <img src>) because it references an
 * external master PNG via <image href>, and SMIL-driven motion — browsers
 * refuse to fetch external resources or run SMIL for SVGs loaded as a
 * plain image source. Inlining gives it a real document context so both
 * work.
 *
 * Motion is intentionally restrained to clouds only, per the interaction
 * pivot — no birds, motes, water shimmer, or meadow wind. The painting
 * itself is the star.
 */
const svgMarkup = readFileSync(
  join(process.cwd(), "public/environment/daylight-meadow-clouds-only.svg"),
  "utf-8"
);

export function LivingEnvironment() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 bg-cloud [&_svg]:h-full [&_svg]:w-full"
      dangerouslySetInnerHTML={{ __html: svgMarkup }}
    />
  );
}
