"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { railNav, site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

/**
 * Mobile-only top bar (brand + drawer trigger). Desktop navigation is the
 * left NavRail instead — see components/navigation/NavRail.tsx.
 */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500 lg:hidden",
        scrolled
          ? "bg-cloud/90 shadow-[0_1px_0_0_var(--color-stone)] backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg tracking-[0.08em] text-sage-dark"
        >
          {site.name}
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
        >
          <span
            className={cn(
              "h-px w-6 bg-sage-dark transition-transform",
              open && "translate-y-[3.5px] rotate-45"
            )}
          />
          <span
            className={cn(
              "h-px w-6 bg-sage-dark transition-transform",
              open && "-translate-y-[3.5px] -rotate-45"
            )}
          />
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-stone bg-cloud"
          >
            <Container className="flex flex-col gap-1 py-4">
              {railNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex flex-col gap-0.5 rounded-sm px-2 py-3 hover:bg-ivory"
                >
                  <span className="text-sm font-medium text-sage-dark">{item.label}</span>
                  <span className="text-xs text-stone-dark">{item.descriptor}</span>
                </Link>
              ))}
              <button
                type="button"
                aria-disabled
                className="mt-2 self-start px-2 text-xs font-medium uppercase tracking-[0.2em] text-stone-dark/50"
              >
                Ambient — coming soon
              </button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
