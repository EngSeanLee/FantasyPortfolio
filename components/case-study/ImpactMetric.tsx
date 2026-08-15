export function ImpactMetric({ metric }: { metric: string }) {
  return (
    <p className="font-display text-4xl leading-tight text-sage-dark text-balance sm:text-5xl lg:text-6xl">
      {metric}
    </p>
  );
}
