import { particles } from "./scene-data";

export function AtmosphereLayer() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-champagne-light animate-shimmer"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.s,
            height: p.s,
            animationDelay: `${p.delay}s`,
            animationDuration: "6s",
          }}
        />
      ))}
    </div>
  );
}
