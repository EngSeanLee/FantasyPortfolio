import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Footer } from "@/components/navigation/Footer";
import { site, credentials, links, experience, earlierRoles } from "@/content/site";
import { capabilities } from "@/content/capabilities";
import { getFeaturedProjects, projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Resume",
  description: "Professional summary, education, certifications, and capabilities.",
};

const tools = Array.from(
  new Set(
    projects.flatMap((p) => [
      ...(p.technology.platform ?? []),
      ...(p.technology.integrations ?? []),
    ])
  )
);

export default function ResumePage() {
  const featured = getFeaturedProjects();
  const primaryCapabilities = capabilities.filter((c) => c.tier === "primary");

  return (
    <div className="py-28 lg:py-16">
      <Container>
        <GlassPanel className="p-7 sm:p-10 lg:p-14">
          <div className="flex flex-col gap-6 border-b border-champagne/40 pb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="font-display text-4xl text-sage-dark">{site.name}</h1>
              <p className="mt-2 text-base text-stone-dark">{site.descriptor}</p>
            </div>
            <div className="flex flex-col items-start gap-2 sm:items-end">
              {links.resumeFile ? (
                <Button href={links.resumeFile} variant="primary">
                  Download Resume
                </Button>
              ) : (
                <>
                  <span
                    aria-disabled
                    className="inline-flex cursor-not-allowed items-center justify-center rounded-sm border border-stone px-7 py-3.5 text-sm font-medium text-stone-dark/60"
                  >
                    Download Resume
                  </span>
                  <span className="text-xs text-stone-dark/70">PDF coming soon</span>
                </>
              )}
            </div>
          </div>

          <section className="mt-14">
            <h2 className="text-xs font-medium uppercase tracking-[0.24em] text-sage">
              Professional Summary
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-sage-dark/90">
              PMP-certified enterprise strategy and business analysis professional with a track
              record of project delivery, governance, and cross-functional planning across
              financial services and health insurance. Skilled at translating strategic
              priorities into actionable roadmaps, business cases, and initiatives — and,
              hands-on, at building Generative AI agents and LLM-based automation that remove
              friction from planning and delivery workflows. Currently pursuing an MBA in IT
              Management.
            </p>
          </section>

          <section className="mt-14 grid gap-10 sm:grid-cols-2">
            <div>
              <h2 className="text-xs font-medium uppercase tracking-[0.24em] text-sage">
                Education & Certifications
              </h2>
              <ul className="mt-4 space-y-2.5">
                {credentials.map((c) => (
                  <li key={c} className="text-sm leading-relaxed text-sage-dark/90">
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-medium uppercase tracking-[0.24em] text-sage">
                Technology / Tools
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {tools.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-stone px-3 py-1 text-xs text-sage-dark/90"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="text-xs font-medium uppercase tracking-[0.24em] text-sage">
              Core Capabilities
            </h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {primaryCapabilities.map((c) => (
                <li key={c.id} className="text-sm leading-relaxed text-sage-dark/90">
                  {c.label}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14">
            <h2 className="text-xs font-medium uppercase tracking-[0.24em] text-sage">
              Selected Projects
            </h2>
            <ul className="mt-4 space-y-5">
              {featured.map((p) => (
                <li key={p.slug} className="border-b border-champagne/40 pb-5">
                  <Link href={`/projects/${p.slug}`} className="text-base font-medium text-sage-dark hover:text-sage">
                    {p.title}
                  </Link>
                  <p className="mt-1 text-sm text-stone-dark">{p.summary}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14">
            <h2 className="text-xs font-medium uppercase tracking-[0.24em] text-sage">
              Experience
            </h2>
            <ul className="mt-6 space-y-8">
              {experience.map((role) => (
                <li key={`${role.company}-${role.role}`} className="border-b border-champagne/40 pb-8 last:border-b-0 last:pb-0">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <p className="text-base font-medium text-sage-dark">
                      {role.role} <span className="font-normal text-stone-dark">— {role.company}</span>
                    </p>
                    <p className="text-xs text-stone-dark/70">{role.dates}</p>
                  </div>
                  <p className="mt-0.5 text-xs text-stone-dark/70">{role.location}</p>
                  <ul className="mt-3 space-y-2">
                    {role.highlights.map((h) => (
                      <li key={h} className="border-l-2 border-champagne pl-4 text-sm leading-relaxed text-stone-dark">
                        {h}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-stone-dark/70">
              Earlier roles: {earlierRoles}
            </p>
          </section>
        </GlassPanel>
      </Container>
      <Footer />
    </div>
  );
}
