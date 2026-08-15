"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { railNav, site } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Primary desktop navigation. A fixed left-edge rail — elegant location
 * wayfinding, not a corporate sidebar. Replaces the traditional top nav
 * per the interaction pivot: the persistent world stays visible, and this
 * is how the visitor chooses where in it to go.
 */
export function NavRail() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-44 flex-col justify-center py-24 pl-8 lg:flex">
      <Link
        href="/"
        className="mb-10 font-display text-base tracking-[0.06em] text-sage-dark"
      >
        {site.name}
      </Link>

      <ol className="relative flex flex-col gap-7">
        <span
          aria-hidden
          className="absolute top-1.5 bottom-1.5 left-[5px] w-px bg-stone"
        />
        {railNav.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(item.href + "/");

          return (
            <li key={item.href} className="relative">
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="group flex items-center gap-3"
              >
                <span
                  aria-hidden
                  className={cn(
                    "relative flex h-2.5 w-2.5 shrink-0 items-center justify-center rounded-full border transition-all duration-[350ms]",
                    active
                      ? "border-sage-dark bg-sage-dark"
                      : "border-stone-dark/50 bg-cloud group-hover:border-sage"
                  )}
                >
                  {active && (
                    <span
                      aria-hidden
                      className="absolute -inset-1.5 rounded-full border border-champagne/70"
                    />
                  )}
                </span>
                <span
                  className={cn(
                    "text-xs font-medium uppercase tracking-[0.16em] transition-colors duration-[350ms]",
                    active
                      ? "text-sage-dark"
                      : "text-stone-dark/60 group-hover:text-sage-dark"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}
