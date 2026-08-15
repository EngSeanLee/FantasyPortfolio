import { farClouds, nearClouds } from "./scene-data";

function Cloud({
  x,
  y,
  w,
  h,
  o,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  o: number;
}) {
  return (
    <div
      className="absolute rounded-full blur-2xl"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: w,
        height: h,
        opacity: o,
        background:
          "radial-gradient(closest-side, #ffffff 0%, #f7f6f1 70%, transparent 100%)",
      }}
    />
  );
}

export function CloudLayer({ depth = "far" }: { depth?: "far" | "near" }) {
  const clouds = depth === "far" ? farClouds : nearClouds;
  const animClass = depth === "far" ? "animate-drift-slower" : "animate-drift-slow";
  const opacityClass = depth === "far" ? "opacity-80" : "opacity-95";

  return (
    <div aria-hidden className={`absolute inset-0 overflow-hidden ${opacityClass}`}>
      <div className={`absolute inset-y-0 left-0 w-[200%] ${animClass}`}>
        <div className="relative h-full w-1/2">
          {clouds.map((c, i) => (
            <Cloud key={i} {...c} />
          ))}
        </div>
        <div className="relative h-full w-1/2" style={{ position: "absolute", top: 0, left: "50%" }}>
          {clouds.map((c, i) => (
            <Cloud key={`dupe-${i}`} {...c} />
          ))}
        </div>
      </div>
    </div>
  );
}
