"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";

const SESSION_KEY = "fp-arrival-seen";

// sessionStorage never fires same-tab change events, so this store has
// nothing to subscribe to — it only needs to report the value once,
// safely, on both server and client.
function subscribe() {
  return () => {};
}
function getSnapshot() {
  return window.sessionStorage.getItem(SESSION_KEY) !== "1";
}
function getServerSnapshot() {
  return false;
}

export function ArrivalReveal() {
  const notYetSeen = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [dismissed, setDismissed] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const visible = notYetSeen && !dismissed;

  const dismiss = () => {
    setDismissed(true);
    window.sessionStorage.setItem(SESSION_KEY, "1");
  };

  useEffect(() => {
    if (!visible) return;
    const timer = window.setTimeout(dismiss, prefersReducedMotion ? 900 : 2600);
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notYetSeen, prefersReducedMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Skip intro"
          onClick={dismiss}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.04 }}
          transition={{ duration: prefersReducedMotion ? 0.2 : 1.1, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex cursor-pointer flex-col items-center justify-center gap-4 text-center"
          style={{
            background:
              "radial-gradient(ellipse at 50% 45%, #ffffff 0%, #f7f6f1 45%, #efe7db 100%)",
          }}
        >
          <span className="font-display text-3xl tracking-[0.2em] text-sage-dark sm:text-4xl">
            {site.name.toUpperCase()}
          </span>
          <span className="text-xs font-medium tracking-[0.35em] text-stone-dark sm:text-sm">
            AI · SYSTEMS · STRATEGY
          </span>
          <span className="mt-8 text-[11px] uppercase tracking-[0.2em] text-stone-dark/60">
            Click to skip
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
