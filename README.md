# EngSean Lee — AI Portfolio

A professional AI solutions architecture portfolio, presented as an explorable interface that
exists inside a persistent, original fantasy world. Built with Next.js (App Router),
TypeScript, Tailwind CSS, and Framer Motion.

Creative direction, information architecture, and interaction model are governed by the source
documents in this repo, **in order** — later documents supersede earlier ones where they
conflict:

1. [`01-master-portfolio-brief.md`](./01-master-portfolio-brief.md) — creative brief, brand
   positioning, design system, and content structure.
2. [`02-claude-code-build-prompt.md`](./02-claude-code-build-prompt.md) — technical build spec.
3. [`04-approved-art-direction.md`](./04-approved-art-direction.md) — the painterly reference
   is the visual source of truth; do not reinterpret it into flat vector art.
4. [`05-interaction-experience-pivot.md`](./05-interaction-experience-pivot.md) — **current**
   interaction model: persistent world + left nav rail + single-viewport panels, not a
   traditional scrolling website. Read this one first when touching navigation or page layout.

Read the relevant ones before making structural or design changes.

## Status

**Interaction pivot, Phase 1 (global shell) is complete.** Per §34 of the pivot doc:

- Top navigation removed; **`NavRail`** (`components/navigation/NavRail.tsx`) is the primary
  desktop nav — fixed left edge, labeled wayfinding nodes, active-state halo. `Nav.tsx` is now
  mobile-only (top bar + drawer, `lg:hidden`).
- **Home (`/`) is a single viewport** — just `Hero`, no stacked sections below it. The old
  homepage sections (Systems Before Solutions, Featured Projects preview, Architecture preview,
  Capability preview, About preview, Closing CTA) are unmounted from `/` but their component
  files are still in `components/home/` — likely source material for Phases 2–4 below, not dead
  code to delete casually.
- Footer moved off the global layout; it now renders **only on `/resume`**, the one
  intentionally conventional, fully-scrolling page.
- Environment motion is clouds-only now (`daylight-meadow-clouds-only.svg`) — no birds/motes/
  water shimmer/meadow wind. The painting is the star; see §3 of the pivot doc before adding
  motion back.

**Not yet built (Phases 2–4 of the pivot):** `/projects` is still the old scrolling archive
list, not the System Map; the project case study is still a stacked-section article, not a
chapter viewer; `/architecture` still stacks Framework + Capability Map instead of toggling
between them in one viewport; `/about` still scrolls instead of using selectable panels. These
routes work and look correct with the new shell (rail, persistent art), they just haven't had
their *own* interaction model converted yet. Do that incrementally, one phase at a time, per
§34 — each is a meaningfully sized unit of work on its own.

**Also not yet real:** `content/site.ts` → `links` holds placeholder LinkedIn/email URLs and a
null résumé file — wire these up before shipping.

## Environment art

The world background is the approved painterly reference
(`public/environment/daylight-meadow-master.png`), animated via
`public/environment/daylight-meadow-clouds-only.svg` (slow cloud drift only, respects
`prefers-reduced-motion`). It's mounted **once**, in `app/layout.tsx`, via
`<LivingEnvironment />` — outside `{children}` — so it persists across every route without
remounting or swapping. This matters: an earlier pass rendered different art per page, which
read as a bug (the world visibly changing on navigation). Don't reintroduce that.

Pages don't render their own art; they open a transparent window onto the fixed background
(`HeroEnvironment` on `/`, `SceneBackdrop` elsewhere) that fades into solid content below. If
you add a new page with a header band, follow the same pattern: transparent window at the top,
then give the content wrapper below it an explicit `bg-cloud` (or similar) — otherwise that
page's content renders transparently over the fixed art. See `app/projects/page.tsx` for the
reference pattern. `main` carries `lg:pl-44` globally to clear the fixed rail's width — the
persistent art is still visible through that gap on every page, which is intentional.

The SVG is inlined server-side (`readFileSync` + `dangerouslySetInnerHTML`) rather than loaded
via `<img src>` — browsers don't fetch external resources (the `<image href>` master PNG) or
run SMIL inside an img-sourced SVG.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

Requires Node.js 20+.

## Project structure

```
app/                    routes (App Router)
components/
  environment/          LivingEnvironment (persistent world), HeroEnvironment/SceneBackdrop
                         (transparent windows onto it), ArrivalReveal (cloud intro)
  navigation/            NavRail (desktop), Nav (mobile top bar + drawer), Footer (resume only)
  home/                  homepage sections — currently only Hero is mounted on `/`
  projects/              archive row, featured card, architecture diagram
  case-study/             reusable case-study section wrapper + impact metric
  architecture/          framework explorer + capability map
  about/                  career journey
  ui/                     Button, Container, Tag, Insignia, SectionHeading
  motion/                 Reveal (scroll-in-view wrapper, reduced-motion aware)
content/                 all copy + project/capability/framework data (no hardcoded page content)
```

Design tokens (sage / champagne / ivory / stone palette, fonts) live in `app/globals.css` under
`@theme`. Motion respects `prefers-reduced-motion` globally.
