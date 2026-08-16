import { Project } from "@/content/projects";

/**
 * Deterministic layout for the Projects System Map. Positions are derived
 * from the project data (category, count, relatedProjects) — nothing here
 * is a hand-placed coordinate. Re-running with the same content/projects.ts
 * always produces the same map, and the layout keeps working correctly if
 * projects or categories are added or removed later.
 *
 * Two passes:
 *  1. Cluster anchors (one per category) are spread evenly around a circle.
 *  2. Nodes start at their cluster's anchor (with a tiny deterministic
 *     jitter so coincident points can separate) and settle via a cheap
 *     relaxation: a gentle pull back toward their anchor, plus mutual
 *     repulsion from every other node — in any cluster — closer than the
 *     minimum spacing a node's icon + title needs. This is what actually
 *     prevents overlap; the pentagon math alone can't guarantee it once a
 *     cluster has more than one or two members.
 * Cluster labels are placed after nodes settle, above each cluster's own
 * topmost node, then relaxed against the finished nodes the same way.
 */

export const MAP_VIEW = { width: 1000, height: 760 };

const CENTER_X = MAP_VIEW.width / 2;
const CENTER_Y = MAP_VIEW.height / 2;
const ANCHOR_RADIUS = 220;
const NODE_MIN_DIST = 175;
const LABEL_GAP = 90;
const LABEL_MIN_DIST_FROM_NODE = 150;
const LABEL_MIN_DIST_FROM_LABEL = 170;
const EDGE_MARGIN = 44;

export type MapNode = {
  project: Project;
  x: number;
  y: number;
};

export type MapCluster = {
  category: string;
  cx: number;
  cy: number;
  labelX: number;
  labelY: number;
  nodes: MapNode[];
};

export type CrossLink = {
  fromSlug: string;
  toSlug: string;
};

export type SystemMapLayout = {
  clusters: MapCluster[];
  crossLinks: CrossLink[];
  nodesBySlug: Map<string, MapNode>;
};

/** Small string hash → deterministic pseudo-random float in [0, 1). Not
 * cryptographic — just enough to spread anchors and jitter starting
 * positions without hand-placing anything. */
function seeded(seed: string): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h << 5) - h + seed.charCodeAt(i);
    h |= 0;
  }
  return (((h % 1000) + 1000) % 1000) / 1000;
}

type Point = { x: number; y: number };
type Anchored = Point & { anchorX: number; anchorY: number };

/** Pulls each movable point toward its own anchor while pushing it away
 * from every other movable point and every fixed point closer than the
 * given minimum distances. Deterministic given deterministic inputs. */
function relax<T extends Anchored>(
  movable: T[],
  fixed: Point[],
  { minDistSelf, minDistFixed, iterations = 220, pull = 0.05 }: { minDistSelf: number; minDistFixed: number; iterations?: number; pull?: number }
) {
  for (let iter = 0; iter < iterations; iter++) {
    for (const p of movable) {
      p.x += (p.anchorX - p.x) * pull;
      p.y += (p.anchorY - p.y) * pull;
    }
    for (let i = 0; i < movable.length; i++) {
      for (let j = i + 1; j < movable.length; j++) {
        pushApart(movable[i], movable[j], minDistSelf, true);
      }
      for (const f of fixed) {
        pushApart(movable[i], f, minDistFixed, false);
      }
    }
  }
}

/** Nudges `a` (and `b`, if `moveBoth`) apart so they're at least `minDist`
 * apart. Falls back to a deterministic direction when two points start
 * exactly coincident (distance 0), since a zero-length vector has no
 * direction to push along. */
function pushApart(a: Point, b: Point, minDist: number, moveBoth: boolean) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const dist = Math.hypot(dx, dy) || 0.0001;
  if (dist >= minDist) return;
  const overlap = minDist - dist;
  const ux = dx / dist;
  const uy = dy / dist;
  if (moveBoth) {
    a.x -= (ux * overlap) / 2;
    a.y -= (uy * overlap) / 2;
    b.x += (ux * overlap) / 2;
    b.y += (uy * overlap) / 2;
  } else {
    a.x -= ux * overlap;
    a.y -= uy * overlap;
  }
}

export function layoutSystemMap(projects: Project[]): SystemMapLayout {
  const categories = Array.from(new Set(projects.map((p) => p.category)));
  const n = categories.length;

  const anchors = categories.map((category, i) => {
    const angle = (2 * Math.PI * i) / n - Math.PI / 2;
    const radiusScale = 0.85 + seeded(category) * 0.3;
    return {
      category,
      cx: CENTER_X + Math.cos(angle) * ANCHOR_RADIUS * radiusScale,
      cy: CENTER_Y + Math.sin(angle) * ANCHOR_RADIUS * radiusScale,
    };
  });

  const nodes = projects.map((project) => {
    const anchor = anchors.find((a) => a.category === project.category)!;
    // Tiny deterministic jitter off the shared anchor so same-cluster
    // nodes don't all start stacked exactly on top of each other.
    return {
      project,
      anchorX: anchor.cx,
      anchorY: anchor.cy,
      x: anchor.cx + (seeded(`${project.slug}:x`) - 0.5) * 24,
      y: anchor.cy + (seeded(`${project.slug}:y`) - 0.5) * 24,
    };
  });

  relax(nodes, [], { minDistSelf: NODE_MIN_DIST, minDistFixed: 0 });
  nodes.forEach((n) => {
    n.x = clampX(n.x);
    n.y = clampY(n.y);
  });

  const nodesBySlug = new Map<string, MapNode>();
  nodes.forEach((n) => nodesBySlug.set(n.project.slug, { project: n.project, x: n.x, y: n.y }));

  const labels = anchors.map((anchor) => {
    const clusterNodes = nodes.filter((n) => n.project.category === anchor.category);
    // How far this cluster's nodes actually spread from their shared
    // anchor (auto-scales with cluster size) — the label sits above that
    // whole footprint, centered on the anchor itself rather than on node
    // positions that cross-cluster repulsion may have skewed sideways.
    const spread = Math.max(...clusterNodes.map((n) => Math.hypot(n.x - anchor.cx, n.y - anchor.cy)));
    const labelAnchorY = anchor.cy - spread - LABEL_GAP;
    return {
      category: anchor.category,
      anchorX: anchor.cx,
      anchorY: labelAnchorY,
      x: anchor.cx,
      y: labelAnchorY,
    };
  });

  relax(labels, nodes, { minDistSelf: LABEL_MIN_DIST_FROM_LABEL, minDistFixed: LABEL_MIN_DIST_FROM_NODE });

  const clusters: MapCluster[] = anchors.map((anchor) => {
    const label = labels.find((l) => l.category === anchor.category)!;
    const clusterNodes = nodes
      .filter((n) => n.project.category === anchor.category)
      .map((n) => nodesBySlug.get(n.project.slug)!);
    return {
      category: anchor.category,
      cx: anchor.cx,
      cy: anchor.cy,
      labelX: clampX(label.x),
      labelY: clampY(label.y),
      nodes: clusterNodes,
    };
  });

  // Cross-category links: derived from relatedProjects, deduped by pair.
  const seenPairs = new Set<string>();
  const crossLinks: CrossLink[] = [];
  for (const project of projects) {
    for (const relatedSlug of project.relatedProjects ?? []) {
      const related = projects.find((p) => p.slug === relatedSlug);
      if (!related || related.category === project.category) continue;
      const pairKey = [project.slug, related.slug].sort().join("|");
      if (seenPairs.has(pairKey)) continue;
      seenPairs.add(pairKey);
      crossLinks.push({ fromSlug: project.slug, toSlug: related.slug });
    }
  }

  return { clusters, crossLinks, nodesBySlug };
}

function clampX(value: number, margin = EDGE_MARGIN) {
  return Math.min(MAP_VIEW.width - margin, Math.max(margin, value));
}

function clampY(value: number, margin = EDGE_MARGIN) {
  return Math.min(MAP_VIEW.height - margin, Math.max(margin, value));
}

export function toPct(value: number, axis: "x" | "y"): number {
  return (value / (axis === "x" ? MAP_VIEW.width : MAP_VIEW.height)) * 100;
}
