"use client";

import { useEffect, useState } from "react";

/**
 * Maps coordinates in the painting's native space (1672×941, matching
 * daylight-meadow-master.png) to real viewport pixels, replicating the
 * same `object-cover` crop math the background <Image> uses. Needed
 * anywhere a UI element (a hotspot, an effect) must line up with a
 * specific feature in the painting regardless of viewport size/aspect —
 * plain viewport percentages drift out of alignment the moment the
 * crop isn't exactly 1672:941.
 */
const IMAGE_W = 1672;
const IMAGE_H = 941;
const IMAGE_ASPECT = IMAGE_W / IMAGE_H;

type CoverRect = {
  renderedWidth: number;
  renderedHeight: number;
  offsetX: number;
  offsetY: number;
};

function computeRect(): CoverRect {
  if (typeof window === "undefined") {
    return { renderedWidth: 0, renderedHeight: 0, offsetX: 0, offsetY: 0 };
  }
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const viewportAspect = vw / vh;

  let renderedWidth: number;
  let renderedHeight: number;
  if (viewportAspect > IMAGE_ASPECT) {
    renderedWidth = vw;
    renderedHeight = vw / IMAGE_ASPECT;
  } else {
    renderedHeight = vh;
    renderedWidth = vh * IMAGE_ASPECT;
  }

  return {
    renderedWidth,
    renderedHeight,
    offsetX: (vw - renderedWidth) / 2,
    offsetY: (vh - renderedHeight) / 2,
  };
}

const EMPTY_RECT: CoverRect = { renderedWidth: 0, renderedHeight: 0, offsetX: 0, offsetY: 0 };

export function useCoverRect() {
  // Starts empty on both server and the client's first render so they
  // match for hydration; the real, window-derived rect is only computed
  // after mount, client-side only.
  const [rect, setRect] = useState<CoverRect>(EMPTY_RECT);

  useEffect(() => {
    function onResize() {
      setRect(computeRect());
    }
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /** Convert a point in painting-space (0–1672, 0–941) to fixed-position viewport pixels. */
  function toViewport(xImage: number, yImage: number) {
    return {
      left: rect.offsetX + (xImage / IMAGE_W) * rect.renderedWidth,
      top: rect.offsetY + (yImage / IMAGE_H) * rect.renderedHeight,
    };
  }

  /** Convert a length in painting-space to viewport pixels (for radii, etc.). */
  function toViewportLength(imageLength: number) {
    return (imageLength / IMAGE_W) * rect.renderedWidth;
  }

  return { rect, toViewport, toViewportLength };
}
