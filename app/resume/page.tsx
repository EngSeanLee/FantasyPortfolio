import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site, credentials, links } from "@/content/site";
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
    <div className="bg-white">
      <Container className="pt-32 pb-24 sm:pt-40">
        <div className="flex flex-col gap-6 border-b border-stone pb-10 sm:flex-row sm:items-end sm:justify-between">
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
            Systems-minded professional with experience in finance, healthcare, project
            management, enterprise planning, process design, and applied AI. Focused on
            identifying operational friction and designing structured systems, workflows,
            automations, and AI-enabled solutions that improve clarity, consistency,
            governance, and execution.
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
              <li key={p.slug} className="border-b border-stone pb-5">
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
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone-dark">
            Detailed role-by-role experience is available on request and will be added here as
            this page is wired up to a finished résumé. Industry experience spans financial
            services and healthcare — see the Career Journey on the About page for the broader
            trajectory.
          </p>
        </section>
      </Container>
    </div>
  );
}
