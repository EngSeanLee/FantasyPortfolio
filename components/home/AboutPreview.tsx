import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { credentials } from "@/content/site";

export function AboutPreview() {
  return (
    <section id="about" className="bg-ivory py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
        <Reveal>
          <Eyebrow>About</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-tight text-sage-dark text-balance sm:text-4xl">
            Operational problems, turned into structured, executable solutions.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-dark">
            My career has centered on understanding complex operational problems and turning
            them into structured, executable solutions. AI has become a new layer in that
            work—expanding what can be automated, analyzed, standardized, and redesigned.
          </p>
          <div className="mt-8">
            <Button href="/about" variant="secondary">
              More About Me
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="grid gap-3 sm:grid-cols-2">
            {credentials.map((c) => (
              <li
                key={c}
                className="border border-stone bg-cloud px-4 py-4 text-sm leading-snug text-sage-dark"
              >
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
