import { Observatory } from "./Observatory";

export function ObservatoryLayer({
  distance = "far",
}: {
  distance?: "far" | "mid" | "near";
}) {
  const size = distance === "far" ? "18%" : distance === "mid" ? "30%" : "48%";
  const right = distance === "far" ? "10%" : distance === "mid" ? "6%" : "-2%";
  const bottom = distance === "far" ? "30%" : distance === "mid" ? "24%" : "14%";

  return (
    <div
      aria-hidden
      className="absolute"
      style={{ right, bottom, width: size }}
    >
      <Observatory
        className="w-full opacity-90 animate-bob"
        style={{ animationDuration: "12s" }}
        detail={distance === "near" ? "near" : "distant"}
      />
    </div>
  );
}
