/**
 * Interior-page header band. A transparent window onto the single,
 * persistent <LivingEnvironment /> background (mounted once in the root
 * layout) — the same fixed image visible on every route, never a
 * different or simplified scene per page. Fades into the page's solid
 * content below.
 */
export function SceneBackdrop({
  className = "h-[40vh] min-h-[320px]",
}: {
  distance?: "far" | "mid" | "near";
  className?: string;
}) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, transparent 55%, var(--color-cloud) 100%)",
        }}
      />
    </div>
  );
}
