// Hand-placed coordinates for ambient environment elements.
// Fixed (not random) so server and client render identically.

export const farClouds = [
  { x: 4, y: 12, w: 220, h: 60, o: 0.55 },
  { x: 30, y: 6, w: 260, h: 70, o: 0.4 },
  { x: 58, y: 16, w: 200, h: 55, o: 0.5 },
  { x: 82, y: 8, w: 240, h: 65, o: 0.35 },
];

export const nearClouds = [
  { x: 10, y: 22, w: 180, h: 50, o: 0.7 },
  { x: 46, y: 28, w: 220, h: 60, o: 0.55 },
  { x: 74, y: 18, w: 160, h: 45, o: 0.6 },
];

export const birds = [
  { x: 22, y: 18, s: 1, delay: 0 },
  { x: 26, y: 15, s: 0.8, delay: 0.6 },
  { x: 62, y: 24, s: 1.1, delay: 1.2 },
  { x: 70, y: 12, s: 0.7, delay: 2 },
];

export const flock = [
  { x: 8, y: 30 },
  { x: 10, y: 27 },
  { x: 12, y: 31 },
  { x: 6, y: 33 },
];

export const particles = [
  { x: 14, y: 55, s: 4, delay: 0 },
  { x: 28, y: 68, s: 3, delay: 1 },
  { x: 41, y: 50, s: 5, delay: 2 },
  { x: 55, y: 72, s: 3, delay: 0.5 },
  { x: 68, y: 58, s: 4, delay: 1.6 },
  { x: 80, y: 66, s: 3, delay: 2.4 },
  { x: 90, y: 52, s: 4, delay: 0.8 },
];

export const grassClusters = [
  { x: 2, scale: 1.1, delay: 0 },
  { x: 12, scale: 0.9, delay: 0.4 },
  { x: 22, scale: 1.2, delay: 0.8 },
  { x: 34, scale: 0.85, delay: 0.2 },
  { x: 47, scale: 1, delay: 0.6 },
  { x: 60, scale: 1.15, delay: 0.3 },
  { x: 72, scale: 0.9, delay: 0.9 },
  { x: 84, scale: 1.05, delay: 0.5 },
  { x: 94, scale: 1.1, delay: 0.1 },
];

export const wildflowers = [
  { x: 8, delay: 0 },
  { x: 18, delay: 0.5 },
  { x: 31, delay: 1 },
  { x: 44, delay: 0.3 },
  { x: 53, delay: 0.8 },
  { x: 65, delay: 0.2 },
  { x: 77, delay: 0.6 },
  { x: 88, delay: 0.4 },
];
