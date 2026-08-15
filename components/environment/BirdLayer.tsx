import { birds, flock } from "./scene-data";

function Bird({ scale = 1 }: { scale?: number }) {
  return (
    <svg viewBox="0 0 24 12" width={16 * scale} height={8 * scale} aria-hidden>
      <path
        d="M0,6 Q6,0 12,6 Q18,0 24,6"
        fill="none"
        stroke="#6f716b"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BirdLayer() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      {birds.map((b, i) => (
        <div
          key={i}
          className="absolute animate-bob"
          style={{
            left: `${b.x}%`,
            top: `${b.y}%`,
            animationDelay: `${b.delay}s`,
            animationDuration: "6s",
          }}
        >
          <Bird scale={b.s} />
        </div>
      ))}

      {/* occasional small flock drifting slowly across */}
      <div className="absolute inset-y-0 left-0 w-[220%] animate-drift-slower" style={{ animationDuration: "140s" }}>
        <div className="absolute" style={{ left: "0%", top: "24%" }}>
          {flock.map((f, i) => (
            <div
              key={i}
              className="absolute"
              style={{ left: `${f.x * 3}px`, top: `${f.y}px` }}
            >
              <Bird scale={0.7} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
