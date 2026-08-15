"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeroEnvironment } from "@/components/environment/HeroEnvironment";
import { ArrivalReveal } from "@/components/environment/ArrivalReveal";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="home" className="relative">
      <ArrivalReveal />
      <HeroEnvironment>
        <Container className="flex h-full items-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: prefersReducedMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl rounded-lg bg-cloud/40 p-2 backdrop-blur-[2px] sm:bg-transparent sm:p-0 sm:backdrop-blur-0"
          >
            <Eyebrow className="text-sage-dark/80">{site.name}</Eyebrow>
            <h1 className="mt-4 font-display text-4xl leading-[1.08] text-sage-dark text-balance sm:text-5xl lg:text-6xl">
              {site.headline}
            </h1>
            <p className="mt-5 text-sm font-medium tracking-wide text-stone-dark sm:text-base">
              {site.descriptor}
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-sage-dark/85">
              {site.supportingCopy}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/projects" variant="primary">
                Explore My Work
              </Button>
              <Button href="/about" variant="secondary">
                About Me
              </Button>
            </div>
          </motion.div>
        </Container>
      </HeroEnvironment>
    </section>
  );
}
