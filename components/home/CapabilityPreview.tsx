"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { capabilities } from "@/content/capabilities";

const preview = capabilities.filter((c) => c.tier === "primary").slice(0, 6);

export function CapabilityPreview() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-cloud py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Capability Map"
          title="Skills proven through project evidence."
          body="Not a proficiency score — a map of capability grounded in what was actually built."
        />

        <div className="mt-12 flex flex-wrap gap-3">
          {preview.map((cap, i) => (
            <button
              key={cap.id}
              onClick={() => setActive(i)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === i
                  ? "border-sage-dark bg-sage-dark text-cloud"
                  : "border-stone text-sage-dark hover:border-sage"
              }`}
            >
              {cap.label}
            </button>
          ))}
        </div>

        <div className="mt-8 min-h-[3.5rem] max-w-2xl border-l-2 border-champagne pl-5">
          <p className="text-base leading-relaxed text-stone-dark">{preview[active].definition}</p>
        </div>

        <div className="mt-10">
          <Button href="/architecture?view=capability-map" variant="secondary">
            View Capability Map
          </Button>
        </div>
      </Container>
    </section>
  );
}
