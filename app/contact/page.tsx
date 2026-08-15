import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { closingCta, links } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about AI solutions architecture, process design, and enterprise transformation.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-svh items-center justify-center py-28 lg:py-16">
      <Container className="flex justify-center">
        <GlassPanel className="max-w-2xl px-8 py-14 text-center sm:px-16 sm:py-16">
          <Divider className="mx-auto justify-center" />
          <h1 className="mx-auto mt-8 max-w-xl font-display text-4xl leading-tight text-sage-dark text-balance sm:text-5xl">
            {closingCta.heading}
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-stone-dark text-balance">
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
        </GlassPanel>
      </Container>
    </div>
  );
}
