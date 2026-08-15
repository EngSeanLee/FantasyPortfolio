import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { philosophy } from "@/content/site";

export function SystemsBeforeSolutions() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <Divider className="mx-auto justify-center" />
          <h2 className="mt-8 font-display text-3xl leading-tight text-sage-dark text-balance sm:text-4xl">
            {philosophy.heading}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-sage-dark/85 text-balance">
            {philosophy.primary}
          </p>
          <p className="mt-4 text-base font-medium text-sage text-balance">
            {philosophy.secondary}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
