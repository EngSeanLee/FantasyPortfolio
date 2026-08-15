import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { closingCta, links } from "@/content/site";

export function ClosingCta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28 sm:py-36"
      style={{
        background:
          "linear-gradient(180deg, var(--color-cloud) 0%, var(--color-ivory) 60%, var(--color-champagne-light) 130%)",
      }}
    >
      <Container className="relative text-center">
        <Reveal className="mx-auto max-w-2xl">
          <Divider className="mx-auto justify-center" />
          <h2 className="mt-8 font-display text-3xl leading-tight text-sage-dark text-balance sm:text-4xl lg:text-5xl">
            {closingCta.heading}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-dark text-balance">
            {closingCta.body}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href={links.linkedin} variant="primary">
              LinkedIn
            </Button>
            <Button href={links.email} variant="secondary">
              Email
            </Button>
            <Button href="/resume" variant="secondary">
              Resume
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
