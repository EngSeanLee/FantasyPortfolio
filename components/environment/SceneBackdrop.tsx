import { SkyLayer } from "./SkyLayer";
import { CloudLayer } from "./CloudLayer";
import { MountainLayer } from "./MountainLayer";
import { ObservatoryLayer } from "./ObservatoryLayer";
import { MeadowLayer } from "./MeadowLayer";
import { AtmosphereLayer } from "./AtmosphereLayer";

/**
 * A lighter-weight ambient backdrop for interior page headers. No scroll
 * parallax — just quiet ambient motion — so it never competes with content.
 * `distance` places the Observatory landmark closer as the visitor moves
 * deeper into the site (see brief §5.2).
 */
export function SceneBackdrop({
  distance = "mid",
  className = "h-[46vh] min-h-[380px]",
}: {
  distance?: "far" | "mid" | "near";
  className?: string;
}) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <SkyLayer />
      <CloudLayer depth="far" />
      <MountainLayer />
      <ObservatoryLayer distance={distance} />
      <MeadowLayer />
      <AtmosphereLayer />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 55%, var(--color-cloud) 100%)",
        }}
      />
    </div>
  );
}
