# EngSean Lee — AI Portfolio

A professional AI solutions architecture portfolio, presented as a journey through an
original, optimistic fantasy world. Built with Next.js (App Router), TypeScript, Tailwind CSS,
and Framer Motion.

Creative direction, information architecture, and content are governed by the two source
documents in this repo:

- [`01-master-portfolio-brief.md`](./01-master-portfolio-brief.md) — creative brief, brand
  positioning, design system, and content structure.
- [`02-claude-code-build-prompt.md`](./02-claude-code-build-prompt.md) — technical build spec.

Read those before making structural or design changes.

## Status

**Phase 1 (Foundation) is complete.** All MVP routes are implemented, data-driven, and pass
`next build` + `eslint` cleanly:

- `/` — cloud arrival, animated daylight-meadow hero, philosophy, featured systems,
  architecture preview, capability preview, about preview, closing CTA, section progress marker
- `/projects` — grouped editorial archive (Featured / Supporting / Experiments)
- `/projects/[slug]` — reusable 7-section case study template, driven by `content/projects.ts`
- `/architecture` — interactive framework explorer + full capability map
- `/about` — narrative, credentials, career journey, "beyond the work"
- `/resume` — deliberately restrained; download action is a labeled placeholder until a real
  PDF is wired up
- `/contact` — return to the meadow, with LinkedIn / email / resume links

**Not yet real:** `content/site.ts` → `links` holds placeholder LinkedIn/email URLs and a null
résumé file — wire these up before shipping. The environment art is original SVG/CSS (sky,
clouds, mountains, an Observatory landmark, ruins/terraces, meadow, foreground grass, birds,
atmosphere) rather than painted illustration — swap in real layered art per §25 of the brief
if/when it exists, using the same layer components in `components/environment/`.

**Phase 2/3** (deeper capability-map interaction, richer transitions, ambient audio, etc.) are
intentionally out of scope for now — see §28 of the brief.

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
  environment/          layered meadow scene (sky, clouds, mountains, Observatory, grass, birds...)
  navigation/            Nav, Footer, SectionProgress
  home/                  homepage sections
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
