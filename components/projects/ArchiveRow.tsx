import Link from "next/link";
import { Insignia } from "@/components/ui/Insignia";
import { Project } from "@/content/projects";

export function ArchiveRow({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col gap-4 border-b border-stone py-8 transition-colors first:pt-0 hover:bg-ivory/50 sm:flex-row sm:items-start sm:gap-8 sm:px-4"
    >
      <span className="w-10 shrink-0 font-display text-lg text-champagne">
        {String(index + 1).padStart(2, "0")}
      </span>

      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-stone text-sage transition-colors group-hover:border-champagne group-hover:text-sage-dark">
        <Insignia id={project.insignia} className="h-4.5 w-4.5" />
      </span>

      <div className="flex-1">
        <h3 className="font-display text-xl text-sage-dark transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-1 max-w-xl text-sm text-stone-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {project.summary}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-4">
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-stone-dark/70">
          {project.category}
        </span>
        <span
          aria-hidden
          className="hidden text-sage transition-transform duration-300 group-hover:translate-x-1 sm:inline"
        >
          →
        </span>
      </div>
    </Link>
  );
}
