import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
  as: Tag = "div",
  id,
}: {
  className?: string;
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  id?: string;
}) {
  return (
    <Tag id={id} className={cn("mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12", className)}>
      {children}
    </Tag>
  );
}
