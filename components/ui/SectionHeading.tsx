import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "block text-xs font-medium uppercase tracking-[0.28em] text-sage",
        className
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <h2 className="font-display text-3xl leading-tight text-sage-dark text-balance sm:text-4xl">
        {title}
      </h2>
      {body && <p className="mt-5 text-base leading-relaxed text-stone-dark">{body}</p>}
    </div>
  );
}

export function Divider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)} aria-hidden>
      <span className="h-px w-10 bg-champagne" />
      <span className="h-1.5 w-1.5 rotate-45 bg-champagne" />
      <span className="h-px w-10 bg-champagne" />
    </div>
  );
}
