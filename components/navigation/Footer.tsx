import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { metaCredits, links, nav, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-stone bg-ivory">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <span className="font-display text-lg text-sage-dark">{site.name}</span>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-stone-dark">
            {site.descriptor}
          </p>
        </div>

        <div>
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-sage">
            Navigate
          </span>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-stone-dark transition-colors hover:text-sage-dark"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-sage">
            Connect
          </span>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-stone-dark transition-colors hover:text-sage-dark"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={links.email}
                className="text-sm text-stone-dark transition-colors hover:text-sage-dark"
              >
                Email
              </a>
            </li>
            <li>
              <Link
                href="/resume"
                className="text-sm text-stone-dark transition-colors hover:text-sage-dark"
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-stone/70">
        <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage-dark">
              {metaCredits.heading}
            </p>
            <p className="mt-2 max-w-md text-xs leading-relaxed text-stone-dark">
              {metaCredits.body}
            </p>
          </div>
          <div className="flex gap-8">
            {metaCredits.credits.map((c) => (
              <div key={c.role}>
                <p className="text-[10px] uppercase tracking-[0.16em] text-stone-dark/70">
                  {c.role}
                </p>
                <p className="text-xs font-medium text-sage-dark">{c.name}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
