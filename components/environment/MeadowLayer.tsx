import { wildflowers } from "./scene-data";

export function MeadowLayer() {
  return (
    <div aria-hidden className="absolute inset-x-0 bottom-0 h-[26%]">
      <svg viewBox="0 0 1600 260" preserveAspectRatio="none" className="h-full w-full">
        <path
          d="M0,70 C300,10 600,110 900,50 C1150,0 1400,80 1600,40 L1600,260 0,260 Z"
          fill="#a7bfa6"
        />
        <path
          d="M0,120 C320,70 620,150 940,100 C1180,60 1420,130 1600,100 L1600,260 0,260 Z"
          fill="#8fa88f"
        />
        <path
          d="M0,180 C300,150 700,210 1000,170 C1250,140 1420,190 1600,170 L1600,260 0,260 Z"
          fill="#6f8872"
        />

        {wildflowers.map((f, i) => (
          <g
            key={i}
            transform={`translate(${(f.x / 100) * 1600}, ${190 + (i % 3) * 12})`}
            opacity="0.85"
          >
            <circle r="4" fill="#f3e6c8" />
            <circle cx="6" cy="-2" r="3" fill="#efe7db" />
            <circle cx="-5" cy="-3" r="3" fill="#efe7db" />
          </g>
        ))}
      </svg>
    </div>
  );
}
