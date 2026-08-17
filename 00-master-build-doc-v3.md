# EngSean Lee — AI Portfolio: MASTER BUILD DOCUMENT (v3)
## Interactive Daylight Meadow World

This is the single source of truth for Claude Code. It **supersedes v2** (`00-master-build-doc.md`, never pushed to the repo) and, through it, the four original source docs it already consolidated:

- `01-master-portfolio-brief.md`
- `02-claude-code-build-prompt.md`
- `04-approved-art-direction.md`
- `05-interaction-experience-pivot.md`

Where an older doc conflicts with this one, **this document wins.** Where this document is silent on a detail, defer to v2, then to the four source docs, in that order.

**What changed from v2:** this version reconciles the spec with what's actually shipped (Phase 1 done, part of Phase 2 done early), calls out one open contradiction between the original plan and a real decision made mid-build, and replaces the terse Projects/Architecture/About bullets with full implementation specs for the three interaction-pivot pieces that are still outstanding — see Section 0 and Section 5.

---

# 0. Status — What's Actually Built

Read this before anything else below; it tells you what's real vs. aspirational in the rest of the document.

**Done:**
- Global shell: `NavRail` (desktop, fixed left) + `Nav` (mobile top bar/drawer). No top nav on desktop.
- Home (`/`) is a single viewport — just `Hero`, per Section 5.
- `Footer` renders only on `/resume`, per Section 5's "deliberate exception."
- Project case-study viewer is a chapter tab UI (`components/case-study/CaseStudyViewer.tsx`), not a scrolling article — done ahead of schedule after direct feedback that the case study had "too much scrolling." `ImpactMetric` ships alongside it. The old stacked-section `CaseSection.tsx` approach is gone.
- Content panels use `components/ui/GlassPanel.tsx` (translucent ivory + `backdrop-blur-xl` + champagne border + soft shadow) on Projects, Architecture, About, Contact, and the case-study viewer. World stays visible and blurred behind every panel.
- Environment background is `public/environment/daylight-meadow-master.png`, mounted once in `app/layout.tsx` via `<LivingEnvironment />`, outside `{children}` — persists across every route without remounting.
- `/projects` is now the interactive System Map described in Section 5 (`components/projects/SystemMap.tsx` + `lib/system-map-layout.ts`) — nodes clustered by category, connected by theme, cross-category links derived from `relatedProjects`. Hover/focus preview panel, click-through to the existing case-study route, `lg:hidden` fallback reuses `ArchiveRow` grouped by category. The old scrolling archive list is gone from `/projects` (component file left in place — still used for the mobile fallback). The mobile fallback's narrow-viewport check flagged in the previous revision is now done: `ArchiveRow` used `sm:items-center` on its `sm:flex-row` layout, which vertically centered the fixed-size index number and icon against the full height of a wrapped multi-line title (visible in the 640–1024px range, before the System Map itself takes over at `lg`) — icon ends up floating mid-text instead of aligned with it. Changed to `sm:items-start` so the index, icon, title, and category tag all align to the row's top regardless of title length.
- `/architecture` is now the two-view toggle described in Section 5 (`components/architecture/ArchitectureToggle.tsx`), wrapping the existing `FrameworkExplorer` and `CapabilityMap` components as-is (both were already click-to-reveal, not scroll lists, so neither needed rebuilding). A segmented control crossfades between the two; active view is tracked via `?view=framework` / `?view=capability-map` (`framework` is the default and omits the param) using `router.replace(..., { scroll: false })` so toggling doesn't spam browser history, while the URL stays linkable/shareable and deep-links correctly on load. Panel chrome (border, blur, position) stays fixed across the swap. The old `#capability-map` anchor link from the (currently unused) `CapabilityPreview` home component was updated to the new query-param URL.
- `/about` is now the selectable-areas layout described in Section 5 (`components/about/AboutAreas.tsx`) — Background · Journey · Credentials · Beyond the Work. Deliberately not a copy of the case-study chapter tabs or the Architecture pill toggle: a small 2×2/1×4 in-panel menu using the nav rail's dot-marker wayfinding language, each entry showing a label plus a one-line teaser. Same URL-state mechanism as Architecture (`?area=...`, `background` is the default and omits the param, `router.replace(..., { scroll: false })`). The page's H1 statement stays static outside the toggle (mirroring Architecture's static intro) so there's always exactly one on-page heading regardless of which area or deep link is active; `CareerJourney` is reused as-is inside the Journey area rather than duplicated.

**Not yet built (Phases 3–4 of the interaction pivot):**
- The three Phase 2 interaction pieces (System Map, Architecture toggle, About areas) are now all shipped — see Section 12 for what's next.

**Also outstanding (not a design problem, a data problem):** `content/site.ts → links` — LinkedIn, email, and `resumeFile` are all real now. See Section 15.

---

# 0.5 Motion & the Section 8 3D Pivot — TRIED, REVERTED, SHELVED

**Current status: the site is intentionally static again.** `LivingEnvironment` renders `daylight-meadow-master.png` directly via `next/image` — no SVG, no ambient motion, no camera reframe, no hotspots. This was a deliberate decision after actually building and testing the alternative, not an unexamined default — see below for what was tried and why it didn't stay. Treat Sections 6 and 8 as **reference material, not a current build target.**

**Round one (pre-Phase-2):** an early pass wrapped the environment art in an SVG `feTurbulence` cloud-displacement filter for ambient motion. EngSean disliked what it did to the painting, so it was removed. The README says not to reintroduce SVG-driven distortion on this image without asking first.

**Round two (post-Phase-2, tried properly):** once Phase 2 was done, this was revisited for real — a hybrid build, not a full R3F scene: `AmbientLife.tsx` (birds on CSS-animated loops, a water-shimmer highlight traveling the river, a faint cloud-shadow), per-route camera reframe waypoints (`lib/environment-waypoints.ts`), and clickable Observatory/ruins hotspots (`EnvironmentHotspots.tsx`). Iterated through several real bugs along the way — a hydration mismatch, a hit-testing bug where hotspots visually rendered above content but z-index lost the paint order so clicks silently fell through to the text underneath, and a genuine `next/image` gotcha where its responsive `sizes` system picks a resolution variant based on pre-transform CSS size, so a CSS-scaled zoom can stay pixelated no matter how high-res the source file is.

**Why it was reverted:** even fully debugged, the birds read as flat 2D sprites sliding across the screen, not living motion — the actual vision (confirmed directly): *"a view from a hillside in a live video game where you can zoom into specific parts of the map and watch live things happen — a man floating down a river, a blacksmith pounding away at an anvil."* That's a fundamentally different thing than ambient particle motion on a static image: it needs either dedicated video/animation content composited in at specific locations behind a real dramatic camera push (prototyped on the separate `vignette-prototype` branch, not merged — got as far as a working push-in mechanic with a placeholder card, no real vignette content yet), or an actual 3D/game-engine build. Decision: leave the shipped site at its Phase 2 state (System Map, Architecture toggle, About areas, real contact links — solid and reviewed) rather than ship a motion layer that didn't deliver the vision it was chasing.

**If this gets revisited later:** the `vignette-prototype` branch has the push-in-camera mechanic already working, plus a written plan and generation prompts (bird sprites, a blacksmith test vignette, a verified-good 5x-resolution upscale technique for the master painting) — worth reading before starting over. The real open question isn't technique anymore, it's whether to pursue dedicated video vignettes (stays in this stack) or a genuine 3D/game engine (a much bigger, separate undertaking) — see that branch's chat history for the fuller breakdown.

---

# 1. Product Summary

**EngSean Lee** — *Designing Intelligent Systems for Operational Change*
**AI Solutions Architecture • Process Strategy • Applied AI**

Not a résumé with fantasy decoration. Not a game. A premium professional AI/systems portfolio, presented as an explorable journey through an original, optimistic fantasy world (**the Daylight Meadow**), built with AAA-game art direction and enterprise-grade professional content.

Positioning: systems-minded professional (finance, healthcare, PM, enterprise planning, applied AI) who designs workflows, automations, governance, and AI-enabled solutions that reduce operational friction. AI is a tool layered onto existing process discipline — never the whole identity.

**Desired reaction arc:**
1. First seconds: "Holy shit, this is different."
2. First minute: "This is not just visual polish — there's real systems thinking underneath it."
3. By the end: "This person is creative, technically curious, process-oriented, and willing to build unusual things with care."

**Primary audience:** recruiters, hiring managers, AI/technology leaders, enterprise transformation and solution architecture leaders.

---

# 2. Design Principles

1. **Professional first.** Understandable with zero knowledge of Final Fantasy / Clair Obscur. Fantasy elevates, never gatekeeps.
2. **Systems before solutions.** Repeatedly reinforce: *"My approach to AI begins with the operating problem — not the tool."*
3. **Interactivity must reveal information.** Every interactive element reveals data, relationships, navigation, or atmosphere — never motion for its own sake.
4. **Visual boldness, behavioral restraint.** Visual intensity target 7/10. Interaction intensity target 5–5.5/10.
5. **AI is method, not identity.** Never "I discovered GenAI and now I'm an AI expert." Always "I've solved operational problems for years; AI is a powerful new layer of tooling for that."

**Avoid entirely:** anime clichés, glowing runes, quest/XP/stat language, medieval parchment, neon, gothic fantasy, generic SaaS card grids, autoplay audio, particle spam.

---

# 3. Approved Visual Reference (Source of Truth)

Reference image: `/references/approved/daylight-meadow-approved-art-direction.png` (1536×1024px)

This image controls: atmosphere, painterly realism, palette, environmental scale, architecture, meadow density, cloud scale, typography placement, interface restraint, overall sophistication. **It is not inspiration — it is the visual target.** If implementation conflicts with it, implementation changes, not the reference.

**Current implementation status:** the shipped environment (`daylight-meadow-master.png`) is a static render of this reference with no ambient overlay layer — the "Z-1 Ambient SVG motion overlay" described below does not currently exist. See Section 0.5.

## Environment must remain painterly

Do **not** simplify into flat SVG mountains, cartoon clouds, generic castle icons, or icon-based scenery. SVG is permitted only for: ambient birds, pollen/motes, subtle wind accents, interface ornament, architecture diagrams, capability-map line work — never as the primary landscape.

## World composition

- **Sky:** bright pale blue, large luminous clouds, warm sunlight, no storm atmosphere.
- **Meadow:** sage-dominant, white/champagne wildflowers, layered vegetation, natural unevenness — not a flat lawn.
- **Architecture (the Observatory):** pale ivory/white stone, circular + vertical geometry, monumental but peaceful, classical influence without gothic styling, integrated into the landscape. Visible at different apparent distances from different sections (Home: far; Projects: closer; Architecture: adjacent/within; About: overlook near it; Contact: horizon beyond it).
- **Mountains:** cool distant blue-gray, atmospheric haze, strong sense of scale.
- **Water:** quiet, reflective, terrace-like — supports depth, isn't the focal point.
- **Lighting:** warm champagne sunlight, bright daytime, soft bloom, no neon, no harsh game lighting.

## Palette

```text
Dark Sage        #4E6B57
Sage              #6F8872
Soft Sage        #A7BFA6
Warm Ivory       #EFE7DB
Champagne         #E7D7B8
Pale Champagne   #F3E6C8
Soft Stone       #D6D1C4
Stone Dark        #6F716B
Cloud White      #F7F6F1
```
Guides, not a mechanical recolor instruction — the painting stays natural and nuanced.

## Layer order (base 2D/CSS implementation)

```text
Z-0   Painterly environment (approved-art-derived background)          — LIVE
Z-1   Ambient SVG motion overlay (birds, motes, haze — transparent)    — NOT BUILT, see 0.5
Z-2   Optional subtle light/contrast gradient                          — NOT BUILT
Z-10  React/HTML professional interface                                — LIVE
```

## Art Drift Test — check before committing any visual change

1. As sophisticated as the reference?
2. Painterly depth preserved?
3. Architecture feels monumental?
4. Environment feels premium, not illustrated?
5. Clouds large enough to create scale?
6. Sage present without becoming cartoon green?
7. Champagne used subtly?
8. Interface still professional?
9. Enough negative space?
10. Credible in front of a senior hiring manager?

If several answers are "no" — revert or refine.

---

# 4. Persistent World Shell (App-Model Pivot) — LIVE

The site behaves like an **interactive professional application layered over a persistent fantasy world**, not a scrolling website. This is built and working.

```text
Persistent world → choose destination → interface changes around the user → explore content → close/return to world
```
NOT: `Homepage → scroll → new page → scroll → new page`

The Daylight Meadow stays visible (in some framing) through nearly the entire experience via `LivingEnvironment`, mounted once outside `{children}` in `app/layout.tsx` — it does not remount or swap per route.

## Shell components — status

1. Daylight Meadow environment (persistent) — **LIVE**, static
2. Left-side navigation rail (`NavRail`, desktop) / `Nav` (mobile top bar + drawer) — **LIVE**
3. Primary content viewport — **LIVE**
4. Contextual overlays/panels (`GlassPanel`) — **LIVE**
5. Close/back control — **LIVE** (case-study viewer); needs equivalent in System Map / Architecture toggle, see Section 5
6. Transition system — **PARTIAL** — page-level transitions exist; the richer spatial-reframe behavior in Section 6 is not built (ties to Section 0.5)

## Left navigation rail

```text
│
●  HOME
│
○  PROJECTS
│
○  ARCHITECTURE
│
○  ABOUT
│
○  RESUME
│
○  CONTACT
│
```
Fixed left edge, thin champagne/stone vertical connector, labeled nodes (no unlabeled dots), clear active state (sage center + subtle champagne halo + stronger text, ~300–450ms transition), inactive = hollow node + thin outline + lower-opacity text. Reads as elegant wayfinding, not a corporate sidebar. `main` carries `lg:pl-44` globally to clear the fixed rail's width — persistent art stays visible through that gap on every page; keep this.

## Panel treatment (content over world) — LIVE, this is `GlassPanel.tsx`

Translucent warm ivory, subtle backdrop blur, champagne borders, low-opacity stone/sage line work, soft shadow, generous padding, restrained ornament. Environment stays visible through the panel. Avoid heavy/dark glassmorphism, glowing borders, thick fantasy frames, or opaque rectangles that erase the artwork — it should read as refined architectural glass, not a SaaS modal. **Reuse this component** for the System Map, Architecture toggle, and About areas below — don't build a second panel treatment.

## Environmental presence budget (conceptual, not literal opacity)

```text
Home:               100%
Projects:            60–75%
Architecture:         45–65%
About:                50–70%
Case Study Viewer:    30–50%
Resume:               minimal
```

---

# 5. Page-by-Page Behavior

## Home — one viewport, no scrolling — **LIVE**
Daylight Meadow full-width, name, headline, positioning statement, one or two CTAs, nav rail. Nothing else stacked below. The world *is* the homepage. Only `Hero` is mounted on `/`.

## Projects — interactive System Map (not an archive list) — **LIVE**

**Shipped as:** `components/projects/SystemMap.tsx` + `lib/system-map-layout.ts`, wired into `app/projects/page.tsx`. Matches the spec below with two implementation notes:
- Clustering uses `content/projects.ts`'s existing `category` field as-is (five categories emerged from the real data: Process Systems, Applied AI, Documentation Automation, Program Discipline, Applied Tools & Experiments) rather than the illustrative category list originally sketched below — no new content metadata was needed.
- Node/label positions are computed by a small deterministic relaxation pass (anchor pull + mutual repulsion with a minimum spacing) rather than fixed per-cluster angle math — the first version without it produced real label/node overlaps once a cluster had more than one member. Worth knowing if this ever needs to move to a different rendering approach (e.g. Section 8's R3F scene).
- The `lg:hidden` mobile fallback (reusing `ArchiveRow` grouped by category) is built but not yet verified on an actual narrow viewport — worth a check before considering this fully done.

**Original brief, preserved for the categories/interaction intent it still describes accurately:**

**Categories (grouping, not literal folders):**
- Governance & Process
- Applied AI
- Documentation Automation
- Operational Systems
- Technical Experimentation

**Layout:**
- A `GlassPanel` (reuse existing component) hosts an SVG/canvas node-and-line diagram — same visual language as the existing `architecture-diagram` component in `components/projects/`, extended into the primary navigation surface rather than a decorative aside.
- Nodes are positioned in loose thematic clusters, not a rigid grid — connecting lines (thin, champagne/stone, low-opacity, matching Section 3 palette) group same-category nodes and can cross categories where a project genuinely spans two (e.g., an Applied AI project that's also Documentation Automation).
- Each node: small circular/diamond marker (consistent with the Insignia/node visual language already used elsewhere in `components/ui/`), project title beneath or beside it. No thumbnails-as-icons — keep it diagrammatic, not a card grid, or it collapses back into "generic SaaS."
- Meadow stays visible behind the map, softened per the 60–75% presence budget, optionally lightly blurred (`GlassPanel`'s existing `backdrop-blur-xl` already does this — don't add a second blur layer).

**Interaction:**
- Hover/focus on a node reveals (in a small adjacent or fixed-position detail panel, not a tooltip that obscures the map): title, one-line value statement, category tag, 2–3 key capabilities, a small architecture-preview thumbnail.
- Click opens the case-study viewer (`CaseStudyViewer.tsx`) — already built, reuse as-is. Closing returns to the System Map in its prior state (scroll/zoom position, if any), not a reset.
- Keyboard: nodes must be tab-focusable in a sensible reading order (roughly: cluster by cluster), Enter/Space opens the case study, matching Section 10's accessibility requirements.
- Mobile equivalent (Section 9 forbids the 3D camera system on mobile, but this map isn't 3D — it's SVG/DOM): the node map can still work at small viewport sizes if it collapses to a simpler stacked-cluster layout, or falls back to a clean list grouped by category with the same detail-on-select behavior. Don't force a cramped zoomable diagram onto a phone screen.

**Motion budget for this page:** hover reveal 200–350ms (Section 6), node highlight on hover/focus, connecting-line highlight for the hovered node's cluster. No panning/zooming camera unless it's genuinely needed to fit all nodes — prefer a layout that fits without requiring pan/zoom interaction just to read it.

**Data source:** drive from `content/projects.ts` (already exists, data-driven per Section 9's principles) plus whatever category/theme metadata needs to be added to that file to support clustering — don't hardcode node positions/categories in the component.

**Done when:** a recruiter can look at `/projects` for 5 seconds and understand there are several distinct systems grouped by kind of problem solved, before reading a single word of case-study copy.

## Project Case Study Viewer — chaptered, not scrolled — **LIVE**
`components/case-study/CaseStudyViewer.tsx`. Numbered chapters replace vertical scroll:
```text
01 Problem · 02 Overview · 03 Architecture · 04 AI & Technology · 05 Business Impact · 06 Lessons Learned
```
Selecting a chapter swaps the content region. Chapters without content just don't render — keep this behavior when adding new case studies; don't pad empty chapters. Executive-level density per section (fits viewport); offer "View Detail / Expand" for anyone who wants more. Always provide a clear close/back control ("×" or "Back to Systems") that returns to the System Map without resetting the broader experience.

## Architecture — interactive framework, two-view toggle — **LIVE**

**Shipped as:** `components/architecture/ArchitectureToggle.tsx`, wired into `app/architecture/page.tsx` (the page's intro copy stays static outside the toggle; the toggle owns everything below it). Matches the spec below with one implementation note: URL state uses `router.replace`, not `router.push`, so clicking between the two views doesn't create a browser-history entry per click — the page's single history entry always carries whatever view was last active, so back/forward from elsewhere (e.g. a case study) returns you to the page in the state you left it, rather than stepping back through view toggles one click at a time.

**Original brief, preserved below for reference:**

**Target:** a single `GlassPanel` region with two views and a lightweight toggle between them — not two panels stacked, not two separate routes.

**Toggle mechanism:**
- A small segmented control (two labeled options, e.g. **Framework** / **Capability Map**) at the top of the panel, styled consistently with the nav rail's restraint — champagne/stone, sage active state, no heavy tab-bar chrome.
- Switching views crossfades the panel content (Section 6 timing: 200–350ms hover-class speed is too fast for a full view swap; use the 500–800ms "section reveal" band instead) — content changes, panel chrome (border, blur, position) stays put so it doesn't feel like a page navigation.
- URL should reflect the active view (e.g. `/architecture?view=framework` / `?view=capability-map`, or a route segment) so it's linkable/shareable and survives back/forward — Section 9 requires preserved usable URLs even inside the app-shell model.

**Framework view:** selectable framework nodes rather than scroll-through prose (this part is closer to already matching intent — verify the existing implementation is click-to-reveal rather than a scroll list before rebuilding it). Environment reframes/crops toward the Observatory per the presence budget, if that reframing exists yet; if not, static framing is fine for now (ties to Section 0.5 — don't add camera movement to satisfy this).

**Capability Map view:** node hover → branch highlight → evidence panel → project navigation (link into a relevant case study via the System Map's data, not a duplicate content source). **No scores, XP, or proficiency percentages** — corporate vocabulary only (Capability Map, Business Impact, Lessons Learned — never Quests, Skills, Stats, Inventory, Codex). This vocabulary rule applies to the toggle labels too — "Capability Map" is correct, avoid anything gamified even as a joke/easter egg.

**Done when:** the page never requires scrolling past one viewport to see either view in full (Section 5's scrolling budget: "none / minimal — selectable nodes"), and switching views feels like changing a lens on the same content, not leaving the page.

## About — selectable areas — **LIVE**

**Shipped as:** `components/about/AboutAreas.tsx`, wired into `app/about/page.tsx` (the H1 statement stays static outside the toggle, same pattern as Architecture's static intro). Matches the spec below.

**Original brief, preserved below for reference:**

**Target:** one main panel with selectable areas, matching the pattern the case-study viewer already proved out. Reuse the *mechanism*, not necessarily an identical tab UI — About is shorter content than a case study, so a lighter treatment (e.g., four labeled selectable areas laid out as a small in-panel menu rather than numbered chapter tabs) can avoid feeling like a copy-paste of `CaseStudyViewer`.

**Areas:**
```text
Background · Journey · Credentials · Beyond the Work
```
- Selecting an area swaps the content region (same crossfade timing as the Architecture toggle: 500–800ms).
- Small amount of scrolling acceptable within a single selected area if unavoidable (per Section 5's original scrolling budget: "~one short viewport max") — the goal is eliminating the long stacked-scroll-through-everything pattern, not guaranteeing zero scroll under all content lengths.
- Stays visually integrated with the Meadow, reframed toward a quieter overlook composition if/when reframing exists (see Section 0.5 note above — don't build new camera movement to satisfy this now).
- `career-journey` component already exists per the repo structure (`components/about/`) — the "Journey" area should be built around it rather than duplicating its content.

**Done when:** landing on `/about` shows one panel with four clear entry points, not a wall of text you scroll through top to bottom.

## Resume — no longer a styling exception — **LIVE**
Was originally a deliberate exception: opaque ivory/white background, no `GlassPanel`, no persistent world visible — meant to give recruiters a familiar, conventional safe space. Reversed on direct instruction after it read as "a big white box crowding the background" rather than restful — the empty full-bleed white space looked broken next to every other page's fuller composition, not intentionally minimal. `/resume` now uses `GlassPanel` like every other content page; the world is visible behind it same as elsewhere. Traditional (non-chaptered) scrolling within the panel is still fine here — this page doesn't need the selectable-area/toggle treatment the other content pages got. `Footer` still renders only here, by design — that part of the exception wasn't in question.

Content is now data-driven from `content/site.ts` (`experience`, `earlierRoles`, `credentials`) and reflects the actual current résumé (`public/resume/engsean-lee-resume.pdf`, downloadable via `links.resumeFile`) — real employers (Blue Cross Blue Shield of Kansas, Capitol Federal Savings Bank), real titles and dates, the actual named Generative AI agents built on the job. The on-page content is deliberately the *concrete, literal* version — unlike the rest of the site's polished narrative framing, this page's job is specifically to prove traditional corporate credibility with verifiable specifics, alongside the rest of the site's demonstration of applied AI/creative work.

## Contact — **LIVE** (verify against placeholder-link status in Section 15)
Minimal, one viewport, open-horizon framing. Email / LinkedIn / Resume actions.

## Scrolling budget
```text
Home:                none          — met
Projects:             none/minimal — met (System Map)
Case Study Viewer:    none — chapter selection instead — met
Architecture:          none/minimal — met (two-view toggle)
Capability Map:        none if practical — met (toggle view)
About:                 ~one short viewport max — met (selectable areas)
Contact:               none — met
Resume:                normal scrolling allowed — met, by design
```
Never force content into unreadably tiny spaces to hit these targets — allow graceful scrolling on smaller displays.

---

# 6. Motion & Interaction Rules (target model — see Section 0.5 for current status)

**Ambient motion** (constant, subtle): cloud drift, wind through grass/flowers (foreground vs. midground moving differently), distant birds coasting, faint atmospheric particles, slight water shimmer, extremely subtle light variation.

**Occasional motion**: small bird flock crossing, isolated petals/seed particles, a cloud shadow passing over the meadow, soft light shimmer.

**Scroll-based motion** (where scrolling exists): slight camera push toward the landscape, subtle parallax between foreground/meadow/ruins/mountains/sky, growing prominence of the Observatory, gentle depth transitions between sections. The visitor should never feel like they're "driving a character."

**Spatial navigation transitions** (Home ↔ Projects ↔ Architecture ↔ About): scene reframes/softens/pushes toward the relevant focal area — see Section 8 for how this becomes a true camera move rather than a CSS crop. **Not currently built; do not build ahead of the Section 0.5 decision.**

**Motion intensity targets:**
```text
Ambient background:     3/10
Hero movement:           4/10
Hover interactions:      5/10
Section/route transition: 6/10
Case-study transition:   6/10
```

**Timing:**
```text
Micro interaction:   150–250ms
Hover reveal:        200–350ms
Section reveal:      500–800ms
Route/spatial transition: 600–1000ms
Cinematic transition: 1500–3000ms
```

**Preferred motion vocabulary:** fade, crossfade, line draw, slow parallax, focus shift, scale 0.98→1.00, restrained glow, masked reveal.
**Never:** bounce, elastic/spring overshoot, rapid zoom, spin, shake, dramatic camera flying, large cursor-following effects, constant camera drift while text is being read.

**Reduced motion (`prefers-reduced-motion: reduce`)** — mandatory: disable cinematic cloud reveal/camera push/pointer parallax, reduce bird and cloud animation, use simple opacity fades, keep all content and navigation fully functional and unaffected in substance. `motion/Reveal.tsx` is already reduced-motion aware per the repo structure — extend that pattern to any new motion, don't build a parallel system.

---

# 7. Arrival Sequence

Brief opening (2–4s max, skippable, plays once per session): ivory/cloud-filled viewport with faint atmospheric movement and minimal text (**ENGSEAN LEE** / **AI • SYSTEMS • STRATEGY**) → clouds part → meadow resolves → hero content and nav become active. Do not replay aggressively on internal route changes.

**Status:** `components/environment/ArrivalReveal.tsx` exists in the repo structure — verify its current behavior against this spec before assuming it's fully implemented or that it's a leftover from an earlier pass.

---

# 8. 3D World Pivot (Moving Parts + Zoom-to-Location) — ON HOLD, see Section 0.5

Everything in this section is preserved from v2 as reference material. **Do not build against it** until the Section 0.5 decision is made — it directly conflicts with the current, deliberate static-image implementation.

## 8.1 What this is (and isn't)

It **is**: a depth-layered scene, positioned and animated in real 3D space, that a virtual camera can smoothly dolly/pan/zoom between a small set of named waypoints — tied directly to the left-nav destinations already defined in Section 4/5.

It **is not**: a fully free-roam 3D game world, a literal Blender-rendered diorama replacing the approved painting, or anything requiring WebGL as a hard dependency for the site to function.

## 8.2 Recommended approach — depth-layered 3D camera scene (Path A)

Take the layer stack already planned in the source docs (sky / cloud bank / distant mountains / Observatory / ruins & terraces / meadow / foreground grass & flowers / birds / atmospheric particles) and, instead of stacking them as flat CSS-positioned `<div>`s, place each as a **textured plane inside a React Three Fiber scene**, spaced along the Z axis to match their real depth in the painting.

- Use the **existing approved painterly art**, sliced into these depth layers — do not repaint anything as 3D geometry.
- A single camera (narrow-FOV perspective, or orthographic for a flatter "storybook" feel) can then **dolly and reframe** between predefined **waypoints**:
  - `home-overview` — wide valley, Observatory distant
  - `projects-map` — reframed toward the meadow mid-ground where the System Map panel sits
  - `architecture-observatory` — pushed in toward the Observatory
  - `about-overlook` — quieter framing near the structure
  - `contact-horizon` — pulled back toward open sky/horizon
- Each nav-rail click or route change animates the camera between waypoints (600–1000ms, matching Section 6 timing) instead of a CSS crop/opacity trick.
- "Moving parts" live inside the same scene as lightweight elements layered near their matching depth plane: drifting cloud sprites, a coasting bird, gently swaying foreground grass, a subtle water-shimmer shader, slow-drifting motes.
- Depth parallax on mouse-move/scroll becomes a natural byproduct of true 3D placement rather than something faked with transforms.

**Why this was the right default in v2:** it preserves the painterly art direction, keeps DOM/GPU load small, and turns "zoom into an area" into something the site was already halfway designed to do. **Whether it's still the right default is exactly the open question in Section 0.5** — the one motion technique actually tried (SVG turbulence over the flat image) is not this technique, so the rejection doesn't automatically disprove Path A. But it hasn't been tried, either.

## 8.3 Optional heavier path — true Blender-built diorama (Path B)

If EngSean wants a genuinely free-camera, walk-around feel later: model a stylized, hand-painted-texture diorama in Blender (low-to-mid poly, baked/painted textures — not flat-shaded low-poly game art), export as optimized `.glb`, load via React Three Fiber + `drei`. Real orbit/dolly camera movement through actual geometry rather than flat depth planes.

**Tradeoffs to flag before committing to this path:**
- Meaningfully larger asset pipeline (3D modeling + texture baking) and file sizes.
- Real performance budget work (draw calls, LOD, texture compression) to keep it feeling premium on mid-range laptops, per Section 9.
- Real risk of failing the Art Drift Test (Section 3) — most Blender output reads as "game art," not "painterly fantasy realism," unless texture work is unusually careful.

**Recommendation:** treat Path B as a **Phase 6+ stretch goal**, and only for one or two accent focal objects — not the whole scene. Path A, if pursued at all, remains the backbone.

## 8.4 Guardrails (apply Section 2 / Section 6 rules here too)

- Camera moves stay within the same restrained timing and easing rules as any other transition (Section 6) — no swooping game-camera flythroughs.
- WebGL/3D is progressive enhancement: if it fails to initialize, fall back gracefully to the Section 3 2D layered-image implementation. The site must never depend on 3D to function.
- `prefers-reduced-motion` disables camera dolly animation entirely — waypoint changes become a simple crossfade between static camera positions.
- Mobile does **not** get the 3D camera system by default — simplified static or lightly-animated framing per breakpoint.
- Every new "moving part" must pass Section 2 Principle 3: does it reveal information, aid navigation, or build atmosphere — or is it motion for its own sake?

## 8.5 Suggested technical addition to the stack (if pursued)

```text
three
@react-three/fiber
@react-three/drei      (camera helpers, glTF loading if/when Path B is used)
```
Load the 3D scene component client-side and lazily; keep initial page weight dominated by the existing optimized image layers, not the 3D bundle.

---

# 9. Technical Stack & Structure

**Stack:** Next.js (App Router), React, TypeScript, Tailwind CSS, Framer Motion (+ optional lazy-loaded React Three Fiber per Section 8, if the Section 0.5 decision goes that way).

**Principles:** semantic HTML, responsive components, data-driven project content, reusable section components, optimized images (AVIF/WebP), SVG for ambient/ornament only, progressive enhancement, preserve usable URLs/routes even inside the app-shell model (direct linking, recruiter sharing, browser history all still work).

**Actual repo structure (as shipped):**
```text
/
├── app/                          routes (App Router)
├── components/
│   ├── environment/              LivingEnvironment (persistent world, static image),
│   │                             HeroEnvironment (transparent window, home only), ArrivalReveal
│   ├── navigation/                NavRail (desktop), Nav (mobile top bar + drawer), Footer (resume only)
│   ├── home/                      homepage sections — currently only Hero mounted on `/`
│   ├── projects/                  archive row, featured card, architecture diagram → becomes System Map, Section 5
│   ├── case-study/                CaseStudyViewer (chapter tabs) + ImpactMetric
│   ├── architecture/              framework explorer + capability map → gains toggle, Section 5
│   ├── about/                     career journey → gains selectable areas, Section 5
│   ├── ui/                        Button, Container, Tag, Insignia, SectionHeading, GlassPanel
│   └── motion/                    Reveal (scroll-in-view wrapper, reduced-motion aware)
├── content/                       all copy + project/capability/framework data (no hardcoded page content)
├── lib/
├── public/
├── docs/                          concept-mockup.png
└── 00-master-build-doc-v3.md      this file, once committed
```

**Design tokens** (sage / champagne / ivory / stone palette, fonts) live in `app/globals.css` under `@theme`. Motion respects `prefers-reduced-motion` globally.

**Typography:** body/UI = Inter; display = Marcellus or Cormorant Garamond, reserved for major headings only. No fantasy novelty fonts.

**Development:**
```text
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```
Requires Node.js 20+.

---

# 10. Performance & Accessibility

**Performance:** *fake depth intelligently instead of rendering everything in 3D* remains the default philosophy if/when Section 8 is revisited. Optimize hero assets, lazy-load below-the-fold imagery, minimize client JS, avoid huge autoplay video, keep animation on `transform`/`opacity` wherever possible.

**Accessibility (mandatory):** semantic headings, full keyboard navigation, visible focus states, sufficient contrast, meaningful alt text, `prefers-reduced-motion` support everywhere, no information conveyed by color alone, accessible interactive controls, touch equivalents for any hover-only interaction. This applies directly to the new Projects System Map and Architecture toggle — both introduce hover-dependent reveals that need keyboard/touch equivalents (see Section 5 for specifics).

**Mobile:** deliberate alternate composition, not a shrunk desktop. Simplified/static hero framing, no 3D camera system, drawer navigation (already built via `Nav`), stacked project content, simplified Capability Map, no complex camera movement, no heavy 3D.

---

# 11. Content Voice

Strategic, business-literate, concise, outcome-focused. Use: operational change, governance, workflow, consistency, scalability, process design, architecture, visibility, structured information, execution, decision support, AI enablement, controls, auditability, standardization, transformation, operating model, business impact.

Avoid: revolutionary, game-changing, visionary, world-class, disruptive, thought leader, AI guru, ninja, rockstar. The work should create the impression — not the adjectives.

**Meta note (footer or About section):**
> *Built as an Experiment in Applied AI* — "This portfolio was conceived, designed, iterated, and developed using AI-assisted creative and technical workflows." Credits: Concept Development — ChatGPT · Implementation — Claude Code · Creative Direction — EngSean Lee.

---

# 12. Phased Build Order

## Phase 1 — Foundation — **DONE**
Global shell, persistent environment, remove top nav, left nav rail, minimize Home to one viewport, base responsive layout, reduced-motion support. 2D layered implementation only.

## Phase 2 — Projects & Interaction Layer — **PARTIAL**
- ✅ Chaptered case-study viewer (done ahead of schedule, direct user feedback).
- ✅ `GlassPanel` treatment rolled out across Projects/Architecture/About/Contact/case-study.
- ✅ **Projects System Map** — full spec in Section 5. Shipped; mobile fallback still wants a real narrow-viewport check.
- ✅ **Architecture two-view toggle** — full spec in Section 5. Shipped.
- ✅ **About selectable areas** — full spec in Section 5. Shipped. All three Phase 2 interaction pieces are now done.
- ⬜ Richer route transitions (still using page-level transitions, not the spatial-reframe behavior in Section 6 — leave as-is pending Section 0.5).

## Phase 3 — Architecture & Depth
Career-journey animation refinement, Capability Map evidence-panel interactions, deeper architecture framework content. Builds on the Phase 2 toggle rather than replacing it.

## Phase 4 — About & Contact
Any remaining conversion of About/Contact into the full persistent-shell interaction model beyond the Phase 2 selectable-areas work.

## Phase 5 — Motion & Interactivity — **TRIED, REVERTED, SHELVED (see Section 0.5)**
A hybrid (non-R3F) version of this shipped, was iterated on, and was reverted — the site is back to fully static. Not on hold pending a decision; the decision was made after actually testing it. Don't restart this without direct instruction — see Section 0.5 for the full history and what's worth reading first (`vignette-prototype` branch) if it does come back.

## Phase 6 — Premium Polish / Stretch
Optional ambient music (default off, explicit opt-in), one or two Blender-built accent objects per Section 8.3 (Path B) if budget allows, richer page transitions, recruiter-focused resume mode.

**Do not rewrite all working content at once — implement incrementally and preserve working functionality at each phase.**

---

# 13. Quality Gate (run before considering any phase "done")

**Visual:** premium? fantasy influence obvious but restrained? sage/champagne intentional? enough negative space? avoids generic SaaS aesthetics?
**Motion:** background feels alive without distorting the source art (see Section 0.5)? camera/hover moves subtle enough? can the user read without distraction?
**Professional:** recruiter understands it immediately? project outcomes clear? claims supported? résumé conventional enough?
**Technical:** works on mobile? reduced motion works? animations performant? routes accessible and linkable (URL reflects state, e.g. Architecture's active view)? content data-driven?
**Tone:** avoids cosplay? still feels personal and creative? work remains the hero?

**System Map / Architecture toggle / About specific gate (new):**
- Does the System Map read as data/relationships at a glance, or does it still feel like a list wearing a diagram costume?
- Does the Architecture toggle feel like changing a lens on one page, or like two pages stitched together?
- Does About's selectable-area menu avoid feeling like a copy-paste of the case-study chapter tabs?

**Critical design test:**
> If I remove the content text, does this still feel like a distinctive interactive world?
> If I remove the fantasy artwork, is the content still professionally credible?

Must answer **yes** to both.

---

# 14. Claude Code Instruction — Use This to Kick Off Work

```text
Read 00-master-build-doc-v3.md in full before making any implementation or design
decisions. This document supersedes 00-master-build-doc.md (v2) and, through it, the
four original source docs — treat it as the single source of truth.

Start with Section 0 (Status) to know what's actually built vs. aspirational, then
Section 0.5 (Open Decision) — do NOT implement anything from Sections 6 or 8 (ambient
motion, 3D camera pivot) until that decision is explicitly made by EngSean. Treat those
sections as reference material, not a current build target.

The next concrete work is the three outstanding Phase 2 pieces, fully specified in
Section 5: the Projects System Map, the Architecture two-view toggle, and About's
selectable areas. Build in that order unless told otherwise — Projects is highest
leverage since it's the first thing a visitor interacts with after Home.

Reuse existing components (GlassPanel, CaseStudyViewer's chapter-tab pattern, the
existing architecture-diagram component) rather than inventing parallel patterns.
Drive all three from their existing content/ data files, adding metadata to those
files as needed rather than hardcoding structure in components.

The image at /references/approved/daylight-meadow-approved-art-direction.png remains
the authoritative visual reference. Do not reinterpret it into flatter vector/game art,
and do not add motion/distortion to the live environment render without asking first.

Preserve existing working functionality at every phase. Keep all motion within the
timing and restraint rules in Section 6. When in doubt between spectacle and clarity,
choose clarity.

When finished with a phase, list the exact files changed and check the result against
the Quality Gate in Section 13, including the new System Map / toggle / About gates.
```

---

# 15. Launch Readiness Checklist (not a design phase — a punch list)

Flagging so it doesn't get lost while the interaction-pivot work above is in progress:

- `content/site.ts → links` — ✅ LinkedIn (`https://www.linkedin.com/in/engseanlee`), email (`lee.aisolutions@gmail.com` — deliberately distinct from the résumé's own contact email, a separate portfolio inbox), and `resumeFile` (`/resume/engsean-lee-resume.pdf`) are all wired and real.
- `components/ui/Button.tsx` and `Footer`'s LinkedIn link now open external (`http`) links in a new tab with `rel="noopener noreferrer"` — added alongside the real URL so a recruiter clicking LinkedIn doesn't navigate away from the portfolio tab entirely. `mailto:` links stay same-tab.
- Verified `/contact`, `/resume`, and the Footer/`ClosingCta` links resolve correctly with the real values.
- No SEO/analytics/deploy-pipeline decisions have been made yet in any doc — out of scope for this revision, but worth a dedicated pass before public launch.
