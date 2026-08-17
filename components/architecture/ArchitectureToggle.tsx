"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { FrameworkExplorer } from "@/components/architecture/FrameworkExplorer";
import { CapabilityMap } from "@/components/architecture/CapabilityMap";
import { cn } from "@/lib/utils";

type View = "framework" | "capability-map";

const views: { id: View; label: string }[] = [
  { id: "framework", label: "Framework" },
  { id: "capability-map", label: "Capability Map" },
];

/**
 * One panel, two lenses. A segmented control swaps between the Framework
 * and Capability Map views without leaving the page — panel chrome stays
 * put, only the content crossfades. Active view lives in the URL so it's
 * linkable/shareable and survives back/forward, per Section 5/9.
 */
export function ArchitectureToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const prefersReducedMotion = useReducedMotion();

  const requested = searchParams.get("view");
  const view: View = requested === "capability-map" ? "capability-map" : "framework";

  function setView(next: View) {
    const params = new URLSearchParams(searchParams.toString());
    if (next === "framework") {
      params.delete("view");
    } else {
      params.set("view", next);
    }
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="Architecture view"
        className="inline-flex gap-1 rounded-full border border-stone bg-cloud/70 p-1"
      >
        {views.map((v) => (
          <button
            key={v.id}
            role="tab"
            aria-selected={view === v.id}
            onClick={() => setView(v.id)}
            className={cn(
              "rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] transition-colors duration-300",
              view === v.id
                ? "bg-sage-dark text-cloud"
                : "text-sage-dark/70 hover:text-sage-dark"
            )}
          >
            {v.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -10 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          {view === "framework" && (
            <div>
              <Eyebrow>Framework</Eyebrow>
              <h2 className="mt-3 font-display text-3xl text-sage-dark sm:text-4xl">
                A consistent way to think through a system.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-dark">
                Select a node to see the question it answers, why it matters, and where it's
                been proven on real work.
              </p>
              <div className="mt-10">
                <FrameworkExplorer />
              </div>
            </div>
          )}

          {view === "capability-map" && (
            <div>
              <Eyebrow>Capability Map</Eyebrow>
              <h2 className="mt-3 font-display text-3xl text-sage-dark sm:text-4xl">
                Skills proven through project evidence.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-dark">
                Every capability links back to a project that demonstrates it — not a
                self-assigned proficiency score.
              </p>
              <div className="mt-10">
                <CapabilityMap />
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
