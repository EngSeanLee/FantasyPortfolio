# EngSean Lee — AI Portfolio

A professional AI solutions architecture portfolio, presented as an explorable interface that
exists inside a persistent, original fantasy world. Built with Next.js (App Router),
TypeScript, Tailwind CSS, and Framer Motion.

**Live:** [fantasy-portfolio-sigma.vercel.app](https://fantasy-portfolio-sigma.vercel.app)

Deploys to Vercel — GitHub-connected, so every push to `main` auto-deploys to production.

Creative direction, information architecture, and interaction model are governed by
[`00-master-build-doc-v3.md`](./00-master-build-doc-v3.md) — the current single source of
truth. It supersedes v2 (`00-master-build-doc.md`, never pushed) and, through it, the four
original source docs it consolidated:

1. [`01-master-portfolio-brief.md`](./01-master-portfolio-brief.md) — creative brief, brand
   positioning, design system, and content structure.
2. [`02-claude-code-build-prompt.md`](./02-claude-code-build-prompt.md) — technical build spec.
3. [`04-approved-art-direction.md`](./04-approved-art-direction.md) — the painterly reference
   is the visual source of truth; do not reinterpret it into flat vector art.
4. [`05-interaction-experience-pivot.md`](./05-interaction-experience-pivot.md) — the
   interaction model: persistent world + left nav rail + single-viewport panels, not a
   traditional scrolling website.

**Read `00-master-build-doc-v3.md` first, before the other four**, and before making
structural or design changes — it tells you what's actually built vs. aspirational, and where
it conflicts with an older doc, it wins.

## Status

**The interaction pivot is done.** All of Phase 1 (global shell) and Phase 2 (the per-page
interaction-model conversion) have shipped:

- `NavRail` (desktop, fixed left) + `Nav` (mobile top bar/drawer) — no top nav on desktop.
- Home (`/`) is a single viewport — just `Hero`.
- Footer renders **only on `/resume`**.
- **The environment background is a static image, no SVG, no motion, no distortion filters.**
  This was tried properly once — ambient motion (birds, water shimmer), per-route camera
  reframing, and clickable hotspots all shipped, got debugged, and were then deliberately
  reverted after direct user feedback that it didn't deliver the intended feeling. See
  `00-master-build-doc-v3.md` Section 0.5 for the full history — what was built, the real bugs
  found along the way, and why it didn't stay. Don't reintroduce motion on this image without
  asking first; the abandoned attempt (further along than round one) lives on the
  `vignette-prototype` branch if it's ever worth revisiting.
- **Content panels are frosted glass**, not opaque cards: `components/ui/GlassPanel.tsx`
  (translucent ivory + `backdrop-blur-xl` + champagne border + soft shadow) is used on
  Projects, Architecture, About, Contact, and the case-study viewer. The world stays visible
  and blurred behind every panel — never fully hidden behind opaque color.
- **The project case-study page is a chapter viewer, not a scrolling article**
  (`components/case-study/CaseStudyViewer.tsx`). Numbered chapter tabs swap the content region
  in place — effectively no vertical scrolling per project.
- **`/projects` is an interactive System Map** (`components/projects/SystemMap.tsx`), not a
  scrolling archive list — nodes clustered by category, hover/focus preview, click into the
  case-study viewer. Mobile falls back to a grouped list (`ArchiveRow`).
- **`/architecture` is a two-view toggle** (`components/architecture/ArchitectureToggle.tsx`)
  between Framework and Capability Map, URL-driven (`?view=...`), not a stacked scrolling panel.
- **`/about` is a selectable-area menu** (`components/about/AboutAreas.tsx`) — Background,
  Journey, Credentials, Beyond the Work — not a stacked scrolling panel.

**Not yet real:** `content/site.ts → links.resumeFile` is still `null` — `/resume`'s download
button correctly shows "PDF coming soon" instead of a broken link in the meantime. LinkedIn and
email are wired to real values.

**Remaining phases** (deeper Architecture/About content, richer route transitions) are optional
polish, not required for the site to be shareable — see `00-master-build-doc-v3.md` Section 12
for the phase breakdown.

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

## Deploy

```bash
vercel            # preview deployment
vercel --prod     # production — fantasy-portfolio-sigma.vercel.app
```

Linked Vercel project: `lee-ai-solutions/fantasy-portfolio`. GitHub-connected, so pushing to
`main` also triggers an automatic production deploy independent of the CLI.

## Project structure

```
app/                    routes (App Router)
components/
  environment/          LivingEnvironment (persistent world, static image),
                         HeroEnvironment (transparent window, home only), ArrivalReveal
  navigation/            NavRail (desktop), Nav (mobile top bar + drawer), Footer (resume only)
  home/                  homepage sections — currently only Hero is mounted on `/`
  projects/              SystemMap (interactive node map), ArchiveRow (mobile fallback),
                         featured card, architecture diagram
  case-study/             CaseStudyViewer (chapter tabs) + ImpactMetric
  architecture/          ArchitectureToggle (Framework / Capability Map views),
                         FrameworkExplorer, CapabilityMap
  about/                  AboutAreas (selectable-area menu), CareerJourney
  ui/                     Button, Container, Tag, Insignia, SectionHeading, GlassPanel
  motion/                 Reveal (scroll-in-view wrapper, reduced-motion aware)
content/                 all copy + project/capability/framework data (no hardcoded page content)
lib/                     system-map-layout.ts (node clustering/positioning)
```

Design tokens (sage / champagne / ivory / stone palette, fonts) live in `app/globals.css` under
`@theme`. Motion respects `prefers-reduced-motion` globally.
