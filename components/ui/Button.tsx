import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants = {
  primary:
    "bg-sage-dark text-cloud border border-sage-dark hover:bg-sage hover:shadow-[0_0_0_1px_var(--color-champagne)] hover:-translate-y-0.5",
  secondary:
    "bg-transparent text-sage-dark border border-stone hover:border-sage-dark hover:-translate-y-0.5",
};

export function Button({ href, variant = "primary", className, children, onClick, type = "button" }: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
