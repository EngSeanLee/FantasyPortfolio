"use client";

import { useEffect, useState } from "react";
import { sectionProgress } from "@/content/site";
import { cn } from "@/lib/utils";

export function SectionProgress() {
  const [active, setActive] = useState(sectionProgress[0].id);

  useEffect(() => {
    const elements = sectionProgress
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden
      className="fixed left-8 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-4 xl:flex"
    >
      {sectionProgress.map((s) => (
        <div key={s.id} className="group relative flex items-center">
          <span
            className={cn(
              "block h-1.5 w-1.5 rounded-full border transition-all duration-300",
              active === s.id
                ? "scale-125 border-sage-dark bg-champagne"
                : "border-stone-dark/40 bg-transparent"
            )}
          />
          <span className="pointer-events-none absolute left-5 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.2em] text-stone-dark opacity-0 transition-opacity group-hover:opacity-100">
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}
