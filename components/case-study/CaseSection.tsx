import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export function CaseSection({
  index,
  label,
  children,
  className,
  tone = "cloud",
}: {
  index: string;
  label: string;
  children: React.ReactNode;
  className?: string;
  tone?: "cloud" | "ivory";
}) {
  return (
    <section className={cn("py-16 sm:py-20", tone === "ivory" ? "bg-ivory" : "bg-cloud", className)}>
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-8">
        <Reveal>
          <div className="mb-8 flex items-baseline gap-3">
            <span className="font-display text-lg text-champagne">{index}</span>
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-sage">
              {label}
            </span>
          </div>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
