export function TerraceLayer() {
  return (
    <div aria-hidden className="absolute inset-x-0 bottom-[18%] h-[16%] overflow-hidden">
      <svg viewBox="0 0 1600 200" preserveAspectRatio="none" className="h-full w-full">
        {/* reflective water terrace */}
        <rect x="0" y="120" width="1600" height="50" fill="#c9d6cd" opacity="0.4" />
        <rect x="0" y="120" width="1600" height="50" fill="url(#water-shimmer)" className="animate-shimmer" />
        <defs>
          <linearGradient id="water-shimmer" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f3e6c8" stopOpacity="0" />
            <stop offset="50%" stopColor="#f3e6c8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#f3e6c8" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* scattered ruin columns */}
        {[80, 220, 980, 1180, 1400].map((x, i) => (
          <g key={i} opacity="0.5">
            <rect x={x} y={60} width="10" height="70" fill="#d6d1c4" />
            <rect x={x - 6} y={54} width="22" height="8" fill="#d6d1c4" />
          </g>
        ))}
        {/* broken arch */}
        <path
          d="M600 130 L600 90 Q630 60 660 90 L660 130"
          fill="none"
          stroke="#c9c2b2"
          strokeWidth="6"
          opacity="0.45"
        />
      </svg>
    </div>
  );
}
