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

**Interaction pivot Phase 1 (global shell) is done, plus part of Phase 2 (the case-study
viewer) done ahead of schedule** after direct user feedback that the case study had "too much
scrolling."

- `NavRail` (desktop, fixed left) + `Nav` (mobile top bar/drawer) — no top nav on desktop.
- Home (`/`) is a single viewport — just `Hero`.
- Footer renders **only on `/resume`**.
- **The environment background is a static image, no SVG, no motion, no distortion filters.**
  An earlier pass used an SVG wrapper (feTurbulence-driven cloud displacement) around the
  master painting; the user disliked what it did to the photo, so it's gone —
  `LivingEnvironment` now renders `daylight-meadow-master.png` directly via `next/image`.
  Don't reintroduce SVG-driven distortion on this image without asking first.
- **Content panels are frosted glass**, not opaque cards: `components/ui/GlassPanel.tsx`
  (translucent ivory + `backdrop-blur-xl` + champagne border + soft shadow) is used on
  Projects, Architecture, About, Contact, and the case-study viewer. The world stays visible
  and blurred behind every panel — never fully hidden behind opaque color.
- **The project case-study page is a chapter viewer, not a scrolling article**
  (`components/case-study/CaseStudyViewer.tsx`). Numbered chapter tabs (Problem → Related
  Systems, chapters without content just don't render) swap the content region in place —
  effectively no vertical scrolling per project. `CaseSection.tsx` (the old stacked-section
  approach) is gone.

**Not yet built (rest of Phase 2 + Phases 3–4 of the pivot):** `/projects` is still a scrolling
archive list inside a glass panel, not the interactive System Map the pivot doc describes;
`/architecture` still stacks Framework + Capability Map in one scrollable panel instead of
toggling between two views; `/about` still scrolls inside its panel instead of using selectable
areas. These all look and behave correctly with the new shell + glass treatment, they just
haven't had their own deeper interaction-model conversion yet.

**Also not yet real:** `content/site.ts` → `links` holds placeholder LinkedIn/email URLs and a
null résumé file — wire these up before shipping.

## Environment art

The world background is the approved painterly reference
(`public/environment/daylight-meadow-master.png`), rendered statically — no animation. It's
mounted **once**, in `app/layout.tsx`, via `<LivingEnvironment />` — outside `{children}` — so
it persists across every route without remounting or swapping. This matters: an earlier pass
rendered different art per page, which read as a bug (the world visibly changing on
navigation). Don't reintroduce that.

Pages don't render their own art; they open a transparent window onto the fixed background
(`HeroEnvironment` on `/`) or sit in a translucent `GlassPanel` over it (every other page) —
never an opaque full-bleed section. If you add a new page, follow one of those two patterns;
an opaque `bg-cloud` wrapper with no transparency defeats the entire persistent-world premise.
`main` carries `lg:pl-44` globally to clear the fixed rail's width — the persistent art is
still visible through that gap on every page, which is intentional.

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
  environment/          LivingEnvironment (persistent world, static image),
                         HeroEnvironment (transparent window, home only), ArrivalReveal
  navigation/            NavRail (desktop), Nav (mobile top bar + drawer), Footer (resume only)
  home/                  homepage sections — currently only Hero is mounted on `/`
  projects/              archive row, featured card, architecture diagram
  case-study/             CaseStudyViewer (chapter tabs) + ImpactMetric
  architecture/          framework explorer + capability map
  about/                  career journey
  ui/                     Button, Container, Tag, Insignia, SectionHeading, GlassPanel
  motion/                 Reveal (scroll-in-view wrapper, reduced-motion aware)
content/                 all copy + project/capability/framework data (no hardcoded page content)
```

Design tokens (sage / champagne / ivory / stone palette, fonts) live in `app/globals.css` under
`@theme`. Motion respects `prefers-reduced-motion` globally.
