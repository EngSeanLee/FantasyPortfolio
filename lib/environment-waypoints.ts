/**
 * Per-route "camera" framing for the persistent Daylight Meadow background.
 * Not a real camera — a restrained CSS scale/translate on the single
 * existing painting, reframing toward the area each route is thematically
 * closest to. See Section 8.2 of the master build doc for the waypoint
 * concept this implements a lightweight (non-3D) version of.
 *
 * Values are deliberately subtle (Section 6: "avoid dramatic camera
 * flying") — a gentle settle, not a zoom.
 */
export type Waypoint = {
  scale: number;
  /** Percent shift of the image; negative x pans the view toward the
   *  right side of the painting (the Observatory), etc. */
  xPercent: number;
  yPercent: number;
};

export const HOME_WAYPOINT: Waypoint = { scale: 1, xPercent: 0, yPercent: 0 };

const waypoints: { test: (pathname: string) => boolean; waypoint: Waypoint }[] = [
  {
    // architecture-observatory: push in toward the Observatory (right side)
    test: (p) => p.startsWith("/architecture"),
    waypoint: { scale: 1.14, xPercent: -8, yPercent: -4 },
  },
  {
    // projects-map: gentle settle toward the meadow mid-ground
    test: (p) => p.startsWith("/projects"),
    waypoint: { scale: 1.06, xPercent: -2, yPercent: -3 },
  },
  {
    // about-overlook: quieter framing near the structure, less than Architecture
    test: (p) => p.startsWith("/about"),
    waypoint: { scale: 1.08, xPercent: -5, yPercent: -2 },
  },
  {
    // contact-horizon: pull back toward open sky
    test: (p) => p.startsWith("/contact"),
    waypoint: { scale: 1, xPercent: 3, yPercent: 2 },
  },
];

export function getWaypoint(pathname: string): Waypoint {
  return waypoints.find((w) => w.test(pathname))?.waypoint ?? HOME_WAYPOINT;
}
