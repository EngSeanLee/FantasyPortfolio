import { Hero } from "@/components/home/Hero";
import { SectionProgress } from "@/components/navigation/SectionProgress";
import { SystemsBeforeSolutions } from "@/components/home/SystemsBeforeSolutions";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ArchitecturePreview } from "@/components/home/ArchitecturePreview";
import { CapabilityPreview } from "@/components/home/CapabilityPreview";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ClosingCta } from "@/components/home/ClosingCta";

export default function Home() {
  return (
    <>
      <SectionProgress />
      <Hero />
      <SystemsBeforeSolutions />
      <FeaturedProjects />
      <ArchitecturePreview />
      <CapabilityPreview />
      <AboutPreview />
      <ClosingCta />
    </>
  );
}
