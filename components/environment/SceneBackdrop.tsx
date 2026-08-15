import { Observatory } from "./Observatory";

/**
 * Interior-page backdrop. Per the approved art direction, inner pages
 * should not repeat the hero's painterly landscape — they should feel like
 * the visitor has moved toward warm ivory surfaces and restrained
 * architectural line work, with the Observatory motif carried through as
 * quiet continuity rather than a full scene.
 */
export function SceneBackdrop({
  distance = "mid",
  className = "h-[40vh] min-h-[320px]",
}: {
  distance?: "far" | "mid" | "near";
  className?: string;
}) {
  const size = distance === "far" ? "20%" : distance === "mid" ? "30%" : "42%";

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, var(--color-cloud) 0%, var(--color-ivory) 55%, var(--color-champagne-light) 130%)",
        }}
      />
      <div
        aria-hidden
        className="absolute right-[6%] bottom-[8%]"
        style={{ width: size }}
      >
        <Observatory className="w-full text-sage-dark opacity-70" detail={distance === "near" ? "near" : "distant"} />
      </div>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, transparent 60%, var(--color-cloud) 100%)",
        }}
      />
    </div>
  );
}
