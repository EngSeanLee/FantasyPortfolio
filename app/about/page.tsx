import type { Metadata } from "next";
import { SceneBackdrop } from "@/components/environment/SceneBackdrop";
import { Container } from "@/components/ui/Container";
import { Eyebrow, Divider } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { CareerJourney } from "@/components/about/CareerJourney";
import { credentials } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: "Background, journey, and credentials.",
};

export default function AboutPage() {
  return (
    <>
      <SceneBackdrop distance="mid" className="h-[42vh] min-h-[340px]" />
      <div className="relative -mt-16 sm:-mt-20">
        <Container>
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-sage-dark text-balance sm:text-5xl">
            My career has centered on understanding complex operational problems and turning
            them into structured, executable solutions.
          </h1>
        </Container>

        <Container className="mt-16 grid gap-6 sm:mt-20 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-base leading-relaxed text-stone-dark">
              Experience in financial services and healthcare reinforced the importance of
              governance, consistency, stakeholder alignment, and operational clarity.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-stone-dark">
              AI gave me a new set of tools for solving the kinds of problems I have always been
              drawn to.
            </p>
          </Reveal>
        </Container>

        <Container className="mt-20 sm:mt-24">
          <Divider />
          <p className="mt-8 text-xs font-medium uppercase tracking-[0.24em] text-sage">
            Credentials
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {credentials.map((c) => (
              <li
                key={c}
                className="border border-stone bg-ivory px-4 py-4 text-sm leading-snug text-sage-dark"
              >
                {c}
              </li>
            ))}
          </ul>
        </Container>

        <Container className="mt-24 sm:mt-28">
          <p className="mb-12 text-xs font-medium uppercase tracking-[0.24em] text-sage">
            Career Journey
          </p>
          <CareerJourney />
        </Container>

        <section className="mt-24 bg-ivory py-20 sm:mt-28">
          <Container className="grid gap-10 sm:grid-cols-3">
            <Reveal>
              <h3 className="font-display text-xl text-sage-dark">Building</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-dark">
                Experimenting with AI, automation, and independent technical projects.
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h3 className="font-display text-xl text-sage-dark">Learning</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-dark">
                Exploring where AI can materially reshape enterprise operations.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <h3 className="font-display text-xl text-sage-dark">Outside Work</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-dark">
                Technology, games, creative projects, and figuring out how things work.
              </p>
            </Reveal>
          </Container>
        </section>
      </div>
    </>
  );
}
