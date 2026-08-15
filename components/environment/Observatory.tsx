type ObservatoryProps = {
  className?: string;
  style?: React.CSSProperties;
  detail?: "distant" | "near";
};

/**
 * The recurring architectural landmark referenced throughout the brief —
 * pale stone, circular forms, elegant arches. Rendered as line-art SVG so
 * it stays crisp at any distance/scale and is easy to recolor per page.
 */
export function Observatory({ className, style, detail = "distant" }: ObservatoryProps) {
  return (
    <svg
      viewBox="0 0 400 420"
      className={className}
      style={style}
      aria-hidden
    >
      <defs>
        <radialGradient id="observatory-glow" cx="50%" cy="38%" r="55%">
          <stop offset="0%" stopColor="#f3e6c8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#f3e6c8" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ambient glow behind the ring */}
      <circle cx="200" cy="150" r="140" fill="url(#observatory-glow)" />

      {/* base structure */}
      <path
        d="M110 340 L130 260 Q200 230 270 260 L290 340 Z"
        fill="#efe7db"
        stroke="#d6d1c4"
        strokeWidth="2"
      />

      {/* colonnade arches */}
      {detail === "near" &&
        [0, 1, 2, 3, 4].map((i) => {
          const x = 130 + i * 35;
          return (
            <path
              key={i}
              d={`M${x} 340 L${x} 300 Q${x + 17} 285 ${x + 34} 300 L${x + 34} 340`}
              fill="none"
              stroke="#c9c2b2"
              strokeWidth="2"
            />
          );
        })}

      {/* central spire */}
      <line x1="200" y1="230" x2="200" y2="120" stroke="#d6d1c4" strokeWidth="3" />
      <circle cx="200" cy="108" r="10" fill="#f3e6c8" stroke="#e7d7b8" strokeWidth="2" />

      {/* great ring */}
      <circle
        cx="200"
        cy="150"
        r="95"
        fill="none"
        stroke="#e7d7b8"
        strokeWidth="3"
      />
      <circle
        cx="200"
        cy="150"
        r="78"
        fill="none"
        stroke="#d6d1c4"
        strokeWidth="1.5"
        opacity="0.8"
      />

      {/* radiating support lines within the ring, astrolabe-like */}
      {[0, 30, 60, 90, 120, 150].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 200 + 78 * Math.cos(rad);
        const y1 = 150 + 78 * Math.sin(rad);
        const x2 = 200 - 78 * Math.cos(rad);
        const y2 = 150 - 78 * Math.sin(rad);
        return (
          <line
            key={deg}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#e7d7b8"
            strokeWidth="1"
            opacity="0.5"
          />
        );
      })}

      {/* small flanking pillars */}
      <line x1="130" y1="260" x2="130" y2="340" stroke="#d6d1c4" strokeWidth="2" />
      <line x1="270" y1="260" x2="270" y2="340" stroke="#d6d1c4" strokeWidth="2" />
    </svg>
  );
}
