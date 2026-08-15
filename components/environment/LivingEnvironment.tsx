import Image from "next/image";
import heroArt from "@/public/environment/daylight-meadow-master.png";

/**
 * The single, persistent world background. Mounted once in the root
 * layout — outside {children} — so it never remounts, restarts, or swaps
 * between routes. Every page reveals a window onto this exact same fixed
 * image; only the page content scrolling on top of it changes.
 *
 * Static — no SVG, no motion, no distortion filters. The painterly
 * reference is the visual source of truth; nothing should warp it.
 */
export function LivingEnvironment() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 bg-cloud">
      <Image
        src={heroArt}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}
