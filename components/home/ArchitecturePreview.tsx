import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { architectureFramework } from "@/content/architecture-framework";

export function ArchitecturePreview() {
  return (
    <section id="architecture" className="bg-ivory py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Architecture"
          title="A repeatable framework, not isolated tools."
          body="Successful AI implementations rarely begin with AI. They begin with a clearly defined operating problem, understood constraints, structured information, and intentional governance."
        />

        <Reveal className="mt-14 overflow-x-auto">
          <ol className="flex min-w-[720px] items-stretch gap-3 sm:min-w-0">
            {architectureFramework.map((node, i) => (
              <li key={node.id} className="flex flex-1 items-center gap-3">
                <div className="flex-1 rounded-sm border border-stone bg-cloud px-4 py-5 transition-colors hover:border-champagne">
                  <span className="font-display text-xl text-champagne">{node.index}</span>
                  <p className="mt-2 text-sm font-medium text-sage-dark">{node.title}</p>
                </div>
                {i < architectureFramework.length - 1 && (
                  <span aria-hidden className="h-px w-4 shrink-0 bg-stone" />
                )}
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="mt-10">
          <Button href="/architecture" variant="secondary">
            Explore My Approach
          </Button>
        </div>
      </Container>
    </section>
  );
}
