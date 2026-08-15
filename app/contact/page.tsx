import type { Metadata } from "next";
import { SceneBackdrop } from "@/components/environment/SceneBackdrop";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { closingCta, links } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about AI solutions architecture, process design, and enterprise transformation.",
};

export default function ContactPage() {
  return (
    <>
      <SceneBackdrop distance="far" className="h-[62vh] min-h-[480px]" />
      <div className="relative -mt-40 pb-32 sm:-mt-48">
        <Container className="text-center">
          <Divider className="mx-auto justify-center" />
          <h1 className="mx-auto mt-8 max-w-2xl font-display text-4xl leading-tight text-sage-dark text-balance sm:text-5xl">
            {closingCta.heading}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-stone-dark text-balance">
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
        </Container>
      </div>
    </>
  );
}
