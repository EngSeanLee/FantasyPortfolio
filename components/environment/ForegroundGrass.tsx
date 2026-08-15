import { grassClusters } from "./scene-data";

function GrassCluster({ delay }: { delay: number }) {
  return (
    <svg
      viewBox="0 0 60 90"
      className="h-full w-full origin-bottom animate-sway"
      style={{ animationDelay: `${delay}s` }}
    >
      <path d="M10,90 Q4,50 14,10" fill="none" stroke="#4e6b57" strokeWidth="3" strokeLinecap="round" />
      <path d="M22,90 Q18,40 26,4" fill="none" stroke="#6f8872" strokeWidth="3" strokeLinecap="round" />
      <path d="M34,90 Q40,45 32,8" fill="none" stroke="#4e6b57" strokeWidth="3" strokeLinecap="round" />
      <path d="M46,90 Q52,50 44,16" fill="none" stroke="#6f8872" strokeWidth="3" strokeLinecap="round" />
      <path d="M54,90 Q58,55 50,22" fill="none" stroke="#a7bfa6" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function ForegroundGrass() {
  return (
    <div aria-hidden className="absolute inset-x-0 bottom-0 h-[12%] flex items-end overflow-hidden">
      {grassClusters.map((g, i) => (
        <div
          key={i}
          className="absolute bottom-0 h-full"
          style={{ left: `${g.x}%`, width: `${9 * g.scale}%` }}
        >
          <GrassCluster delay={g.delay} />
        </div>
      ))}
    </div>
  );
}
