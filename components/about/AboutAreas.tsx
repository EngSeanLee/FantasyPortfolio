"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Divider } from "@/components/ui/SectionHeading";
import { CareerJourney } from "@/components/about/CareerJourney";
import { credentials } from "@/content/site";
import { cn } from "@/lib/utils";

type AreaId = "background" | "journey" | "credentials" | "beyond-the-work";

const areas: { id: AreaId; label: string; teaser: string }[] = [
  { id: "background", label: "Background", teaser: "Where the work started" },
  { id: "journey", label: "Journey", teaser: "How it got here" },
  { id: "credentials", label: "Credentials", teaser: "Formal grounding" },
  { id: "beyond-the-work", label: "Beyond the Work", teaser: "Outside the day job" },
];

/**
 * About's selectable-area menu — the same "select, don't scroll" mechanism
 * the case-study chapter tabs proved out, but a lighter in-panel menu
 * rather than a numbered tab bar, since About is shorter content and
 * shouldn't read as a copy of that pattern. Active area lives in the URL
 * (?area=...), consistent with the Architecture toggle.
 */
export function AboutAreas() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const prefersReducedMotion = useReducedMotion();

  const requested = searchParams.get("area");
  const area: AreaId = areas.some((a) => a.id === requested)
    ? (requested as AreaId)
    : "background";

  function setArea(next: AreaId) {
    const params = new URLSearchParams(searchParams.toString());
    if (next === "background") {
      params.delete("area");
    } else {
      params.set("area", next);
    }
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="About areas"
        className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-champagne/40 bg-champagne/40 sm:grid-cols-4"
      >
        {areas.map((a) => (
          <button
            key={a.id}
            role="tab"
            aria-selected={area === a.id}
            onClick={() => setArea(a.id)}
            className={cn(
              "flex flex-col items-start gap-1.5 bg-cloud/70 px-5 py-4 text-left transition-colors duration-300",
              area === a.id ? "bg-ivory" : "hover:bg-ivory/60"
            )}
          >
            <span
              aria-hidden
              className={cn(
                "h-2 w-2 rounded-full border transition-colors duration-300",
                area === a.id ? "border-sage-dark bg-sage-dark" : "border-stone-dark/50 bg-transparent"
              )}
            />
            <span
              className={cn(
                "text-sm font-medium transition-colors duration-300",
                area === a.id ? "text-sage-dark" : "text-stone-dark/70"
              )}
            >
              {a.label}
            </span>
            <span className="text-xs leading-snug text-stone-dark/60">{a.teaser}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={area}
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -10 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          {area === "background" && (
            <div>
              <h2 className="font-display text-2xl text-sage-dark">Background</h2>
              <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:gap-16">
                <p className="text-base leading-relaxed text-stone-dark">
                  Experience in financial services and healthcare reinforced the importance of
                  governance, consistency, stakeholder alignment, and operational clarity.
                </p>
                <p className="text-base leading-relaxed text-stone-dark">
                  AI gave me a new set of tools for solving the kinds of problems I have always
                  been drawn to.
                </p>
              </div>
            </div>
          )}

          {area === "journey" && (
            <div>
              <h2 className="mb-12 font-display text-2xl text-sage-dark">Journey</h2>
              <CareerJourney />
            </div>
          )}

          {area === "credentials" && (
            <div>
              <h2 className="font-display text-2xl text-sage-dark">Credentials</h2>
              <Divider className="mt-6" />
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {credentials.map((c) => (
                  <li
                    key={c}
                    className="border border-champagne/40 bg-cloud/50 px-4 py-4 text-sm leading-snug text-sage-dark"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {area === "beyond-the-work" && (
            <div>
              <h2 className="font-display text-2xl text-sage-dark">Beyond the Work</h2>
              <div className="mt-6 grid gap-10 sm:grid-cols-3">
                <div>
                  <h3 className="font-display text-xl text-sage-dark">Building</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-dark">
                    Experimenting with AI, automation, and independent technical projects.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl text-sage-dark">Learning</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-dark">
                    Exploring where AI can materially reshape enterprise operations.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl text-sage-dark">Outside Work</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-dark">
                    Technology, games, creative projects, and figuring out how things work.
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
