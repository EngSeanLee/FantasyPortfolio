import { cn } from "@/lib/utils";

/**
 * The panel treatment for content sitting over the persistent world —
 * "a refined piece of architectural glass, not a SaaS modal." Translucent
 * warm ivory, backdrop blur, a thin champagne edge, soft shadow. The
 * environment should stay visible (softened) through it, never fully
 * hidden behind an opaque rectangle.
 */
export function GlassPanel({
  as: Tag = "div",
  className,
  children,
}: {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Tag
      className={cn(
        "rounded-lg border border-champagne/50 bg-ivory/55 shadow-[0_24px_70px_-28px_rgba(78,107,87,0.35)] backdrop-blur-xl",
        className
      )}
    >
      {children}
    </Tag>
  );
}
