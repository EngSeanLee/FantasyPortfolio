import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/SectionHeading";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center bg-cloud">
      <Container className="text-center">
        <Divider className="mx-auto justify-center" />
        <h1 className="mt-8 font-display text-4xl text-sage-dark">
          This path doesn&apos;t lead anywhere yet.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-stone-dark">
          The page you&apos;re looking for may have moved, or the journey hasn&apos;t reached
          this part of the map yet.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/" variant="primary">
            Return Home
          </Button>
          <Button href="/projects" variant="secondary">
            View Projects
          </Button>
        </div>
      </Container>
    </div>
  );
}
