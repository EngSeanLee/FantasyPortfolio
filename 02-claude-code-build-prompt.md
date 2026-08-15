# Claude Code Build Prompt — EngSean Lee AI Portfolio

## Role

Act as a senior front-end engineer, interaction designer, and design-system implementation partner.

You are building a professional AI portfolio for **EngSean Lee**.

This is not a generic personal website and not a game.

It is a premium corporate portfolio with the environmental atmosphere and interaction polish of a high-end fantasy RPG.

Read the companion file:

`01-master-portfolio-brief.md`

Treat that document as the source of truth for art direction, product intent, content structure, project definitions, interaction principles, and creative guardrails.

Do not improvise a different theme.

---

# 1. Core Product

Build a portfolio centered on this identity:

**EngSean Lee**

# Designing Intelligent Systems for Operational Change

**AI Solutions Architecture • Process Strategy • Applied AI**

The site should demonstrate:

- systems thinking
- process design
- AI solutions architecture
- governance
- operational AI
- technical curiosity
- business fluency
- design taste
- creative ambition

The desired audience is primarily:

- recruiters
- hiring managers
- AI / technology leaders
- enterprise transformation leaders
- architecture leaders

The emotional target is:

> “Holy shit, this is different.”

followed quickly by:

> “There is real professional substance underneath the visual presentation.”

---

# 2. Experience Direction

The site should feel like a journey through a bright, optimistic fantasy environment.

Primary visual inspiration:

- daylight meadow
- pale sage grass
- wildflowers
- large clouds
- distant mountains
- white-stone ruins
- water terraces
- warm champagne sunlight
- monumental observatory-like architecture

The reference mood is similar in emotional tone to:

- Final Fantasy X
- Final Fantasy IX
- Clair Obscur

Do not reproduce copyrighted characters, logos, locations, or recognizable game assets.

Create an original world with similar emotional qualities:

- openness
- wonder
- spring
- optimism
- scale
- painterly fantasy
- elegant architecture

---

# 3. Non-Negotiable Creative Rules

## Keep

- light corporate language
- clear project structure
- generous whitespace
- elegant typography
- sage + champagne palette
- living environmental background
- subtle fantasy ornament
- slow atmospheric motion
- restrained interaction
- high-end editorial composition

## Avoid

- literal RPG UI
- XP bars
- character stats
- quest language
- glowing sword imagery
- anime styling
- neon cyberpunk
- dark gothic fantasy
- parchment-heavy UI
- excessive gold
- aggressive motion
- constant camera movement
- low-quality game-like 3D
- generic SaaS card grids
- unnecessary particle spam
- autoplay audio

The site should feel like a corporate design team worked with a AAA game UI art director.

---

# 4. Technical Stack

Preferred stack:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion

Use:

- semantic HTML
- responsive components
- data-driven project content
- reusable section components
- optimized images
- SVG where appropriate
- CSS transforms for environmental animation
- progressive enhancement

Do not use Three.js or React Three Fiber in the MVP unless there is a specific justified visual requirement that cannot be achieved more cleanly with layered 2D assets.

Do not make the entire site dependent on WebGL.

---

# 5. Suggested Project Structure

Use a clean structure similar to:

```text
/
├── app/
│   ├── page.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── architecture/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── resume/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
│
├── components/
│   ├── navigation/
│   ├── environment/
│   ├── hero/
│   ├── projects/
│   ├── architecture/
│   ├── capability-map/
│   ├── about/
│   ├── ui/
│   └── motion/
│
├── content/
│   ├── projects.ts
│   ├── capabilities.ts
│   └── architecture-framework.ts
│
├── public/
│   ├── environment/
│   ├── project-art/
│   ├── diagrams/
│   └── icons/
│
├── styles/
│   └── globals.css
│
└── 01-master-portfolio-brief.md
```

If an existing repository structure already exists, adapt rather than restructuring destructively.

---

# 6. Design Tokens

Create centralized design tokens.

Suggested palette:

```ts
export const colors = {
  sageDark: "#4E6B57",
  sage: "#6F8872",
  sageLight: "#A7BFA6",
  champagne: "#E7D7B8",
  champagneLight: "#F3E6C8",
  cloud: "#F7F6F1",
  ivory: "#EFE7DB",
  stone: "#D6D1C4",
  stoneDark: "#6F716B",
}
```

Use CSS custom properties or Tailwind theme extension.

Do not scatter arbitrary color values throughout components.

---

# 7. Typography

Use a restrained two-font system.

Recommended:

- body/UI: Inter
- display: Marcellus or Cormorant Garamond

Rules:

- body text remains sans-serif
- technical diagrams remain sans-serif
- serif is reserved for major headings or editorial moments
- no fantasy novelty fonts
- maintain high readability
- use comfortable line-height
- avoid unnecessary all-caps blocks

If custom fonts create performance or licensing complications, use a high-quality system fallback and preserve the hierarchy.

---

# 8. Global Layout

Use an editorial desktop composition.

Hero text should be left aligned.

Avoid centered movie-poster layouts.

Maintain:

- strong negative space
- intentional asymmetry
- readable max-widths
- large environmental breathing room
- premium spacing

Navigation:

```text
EngSean Lee | Projects | Architecture | About | Resume | Contact | Ambient
```

Ambient may remain hidden or disabled until audio is implemented.

---

# 9. Environmental Hero System

The hero must feel alive.

Do not use a single completely static background image as the final implementation.

Build the environment using layered assets.

Suggested layers:

1. sky
2. cloud bank
3. distant mountains
4. observatory / landmark
5. ruins / terraces
6. meadow
7. foreground grass / flowers
8. bird layer
9. particle / pollen layer
10. content UI

Use relative positioning, absolute layers, CSS transforms, and Framer Motion where useful.

---

# 10. Ambient Motion Requirements

## Clouds

- slow horizontal drift
- very low amplitude
- long animation cycle
- slight variation between cloud layers

## Birds

- small distant silhouettes
- slow coast across screen
- occasional flock
- avoid constant dense movement
- vary timing so loops are not obvious

## Grass / Meadow

Do not attempt to animate every blade.

Use one or more of:

- animated foreground grass SVG
- subtle masked distortion
- gently translating layered grass silhouettes
- wind-sway transform on selected foreground groups
- slight variation between near and midground vegetation

The effect should read as wind moving through the meadow, not as a waving GIF.

## Atmospheric Particles

- minimal
- slow
- low opacity
- very small number
- optional on lower-performance devices

## Camera / Parallax

Mouse movement may create extremely subtle parallax.

Scroll may create:

- mild forward drift
- layer translation
- focus shift

Never make text harder to read.

---

# 11. Reduced Motion

Honor:

```css
@media (prefers-reduced-motion: reduce)
```

When reduced motion is enabled:

- disable cinematic cloud reveal
- reduce cloud movement
- disable camera push
- remove pointer parallax
- reduce bird animation
- use simple opacity transitions
- keep all content and navigation fully functional

This is mandatory.

---

# 12. Arrival Sequence

Create a brief opening sequence.

Initial state:

- ivory/cloud-filled viewport
- faint atmospheric movement
- minimal text

Possible text:

**ENGSEAN LEE**

**AI • SYSTEMS • STRATEGY**

Then:

- clouds part
- meadow becomes visible
- hero content resolves
- nav becomes active

Rules:

- 2–4 seconds maximum
- skippable
- do not block navigation for long
- do not replay aggressively on every internal route
- consider session state so it only plays once per session

---

# 13. Homepage Hero

Content:

**ENGSEAN LEE**

# Designing Intelligent Systems for Operational Change

**AI Solutions Architecture • Process Strategy • Applied AI**

Body:

> I design intelligent workflows, decision-support tools, and operational systems that improve visibility, consistency, and execution.

Buttons:

- Explore My Work
- About Me

Primary button:

- sage fill
- ivory text
- subtle border
- very restrained hover lift or glow

Secondary button:

- transparent or ivory surface
- sage/stone border
- clean hover transition

Do not use exaggerated game-like button framing.

---

# 14. Homepage Section — Systems Before Solutions

Heading:

# Systems Before Solutions

Body:

> Technology creates value when it reduces friction, improves decision-making, or fundamentally changes how work gets done.

Supporting line:

> My approach to AI begins with the operating problem—not the tool.

Visual direction:

- quieter than hero
- light ivory surface
- generous whitespace
- one restrained line or ornamental divider

---

# 15. Featured Projects

Feature these four first:

1. Enterprise Estimate Intake System
2. Process Build Coach Agent
3. Project Documentation Generator
4. PMO Tracking Assistant

Create a reusable `FeaturedProjectCard`.

Each card supports:

- title
- one-line value statement
- category
- tags
- icon / insignia
- optional architecture preview
- hover state
- click state

Hover behavior:

- subtle champagne border illumination
- 1–2% scale maximum
- project metadata fades in
- background visual may slightly sharpen
- no bounce

Click behavior:

- use a polished route transition or expanding card transition
- navigate into case study
- preserve accessibility

---

# 16. Project Data Model

Create project content as structured data.

Suggested interface:

```ts
export type Project = {
  slug: string
  title: string
  category: string
  featured: boolean
  summary: string
  problem: {
    headline?: string
    body: string
  }
  overview: string
  architecture: {
    description: string
    nodes?: ArchitectureNode[]
  }
  technology: {
    platform?: string[]
    model?: string[]
    agentArchitecture?: string[]
    promptStrategy?: string[]
    dataLayer?: string[]
    integrations?: string[]
    controls?: string[]
  }
  impact: {
    metric?: string
    outcomes: string[]
  }
  lessons: string[]
  capabilities: string[]
  relatedProjects?: string[]
}
```

Do not hardcode the project page separately for every project.

Build a reusable case-study system.

---

# 17. Case Study Page

Case-study structure:

## 01 / Problem
## 02 / Project Overview
## 03 / Architecture
## 04 / AI & Technology Layer
## 05 / Business Impact
## 06 / Lessons Learned
## 07 / Related Systems

Use section markers consistently.

### Project Hero

Show:

- project number
- title
- concise description
- categories
- role / focus
- technology tags
- visual diagram or project artwork

### Architecture Section

Build diagrams with SVG or structured React components when feasible.

Use:

- thin champagne connectors
- sage nodes
- clean labels
- subtle line-draw animation
- active-node focus

Do not use screenshots of generic flowcharts.

### Impact Section

Allow high-impact callouts.

Example for Project Documentation Generator:

**HOURS → MINUTES**

Only use this because it is supported by the project description.

Do not invent percentages or dollar amounts.

---

# 18. Current Project Content

Populate the project data using the content in `01-master-portfolio-brief.md`.

Do not include company names.

Do not invent:

- employers
- confidential details
- financial metrics
- user counts
- adoption numbers
- ROI percentages
- time savings not explicitly supported

Use polished corporate wording while remaining faithful to the source descriptions.

---

# 19. Projects Page

Build a project archive with three groups:

## Featured Systems

- Enterprise Estimate Intake System
- Process Build Coach Agent
- Project Documentation Generator
- PMO Tracking Assistant

## Supporting AI & Automation Systems

- Initiative Proposal Builder
- Minutes Agent
- Sentence Agent

## Applied Tools & Experiments

- Decision Advisor Skill
- Iron Ledger

Avoid a uniform 3-column card grid as the only browsing model.

Preferred behavior:

- staggered editorial rows
- hover preview
- project artwork appears alongside row
- project tags and one-line description reveal
- strong typography

---

# 20. Architecture Page

Headline:

# Architecture

Subheading:

**How I approach intelligent systems.**

Intro direction:

> Successful AI implementations rarely begin with AI. They begin with a clearly defined operating problem, understood constraints, structured information, and intentional governance.

Build the Architecture Framework:

1. Business Problem
2. Process Design
3. Information Structure
4. Governance & Control
5. AI Enablement
6. Outcome

Each node should be interactive.

On click:

- focus node
- reveal explanation
- show design question
- show relevant project examples
- illuminate related connectors

Use a layout that feels more like an elegant system diagram than a game skill menu.

---

# 21. Capability Map

Create an interactive capability visualization.

Primary capabilities:

- Solution Architecture
- Process Design
- Applied AI
- Governance
- Workflow Design
- Documentation Automation
- Stakeholder Communication
- Low-Code Systems
- Project / Program Discipline

Secondary capabilities may include:

- Prompt / Instruction Design
- Structured Output Design
- Persistent AI Workspaces
- Human-in-the-Loop Design
- Decision Support
- Technical Prototyping
- Enterprise Communication

Interaction:

- hover → short definition
- click → evidence panel
- selected branch illuminates
- evidence panel links to projects

The capability map should use project evidence rather than self-assigned numeric proficiency scores.

Never display:

- percentage mastery
- level numbers
- RPG stats
- XP

---

# 22. About Page

Content direction:

> My career has centered on understanding complex operational problems and turning them into structured, executable solutions.

> Experience in financial services and healthcare reinforced the importance of governance, consistency, stakeholder alignment, and operational clarity.

> AI gave me a new set of tools for solving the kinds of problems I have always been drawn to.

Credentials:

- PMP
- B.S. Technology Administration
- MBA — Technology Management, In Progress
- Financial Services
- Healthcare

Create a career journey visualization:

1. Technology Administration
2. Financial Services
3. Project Management
4. Enterprise Planning
5. Process Systems
6. Applied AI
7. Current Direction — AI Solutions Architecture & Strategy

Do not imply the final node is a current employment title.

---

# 23. Resume Page

This page should intentionally reduce fantasy styling.

Use:

- warm white / ivory
- clean professional typography
- minimal decorative framing
- conventional information order
- strong printability

Provide a clear `Download Resume` action.

If the résumé file is not available, render the page shell and keep the download action disabled or clearly marked for later wiring.

Do not invent résumé details.

---

# 24. Contact Page

Return to the environmental mood.

Heading:

# Let’s Build Something Better.

Supporting direction:

> Interested in AI solutions architecture, intelligent process design, enterprise transformation, and opportunities at the intersection of business and AI.

Links/placeholders:

- LinkedIn
- Email
- Resume

If actual URLs are not provided, use clearly labeled placeholders in configuration/data rather than inventing them.

---

# 25. Persistent Section Indicator

On desktop, optionally include a subtle vertical progress component.

Example sections:

- Home
- Work
- Architecture
- About
- Contact

Style:

- thin line
- small circular nodes
- sage / champagne active state
- low visual priority
- hidden on mobile

This should feel like elegant wayfinding.

---

# 26. Optional Ambient Audio

Do not implement autoplay.

If implemented later:

- default OFF
- explicit user action required
- preserve preference for session
- use a discreet `Ambient` toggle
- no sound is required for the MVP

Do not make audio a dependency.

---

# 27. Performance Requirements

Target a fast, professional experience.

Priorities:

- optimize hero assets
- lazy-load below-the-fold imagery
- use AVIF/WebP where possible
- minimize client-side JavaScript
- avoid huge video backgrounds
- avoid full-scene 3D
- avoid heavy particle libraries
- use responsive image sizes
- keep animation GPU-friendly
- prefer transform and opacity

Do not sacrifice load time for spectacle.

---

# 28. Mobile Requirements

Mobile should be a deliberate alternate composition.

Do not simply shrink desktop.

On mobile:

- simplify cloud reveal
- reduce environmental layers
- keep bird movement subtle
- reduce parallax
- stack project content
- convert capability map to vertical flow if necessary
- convert diagrams to scrollable or simplified layouts
- use drawer navigation
- hide desktop progress indicator
- preserve all project information

---

# 29. Accessibility Requirements

Mandatory:

- semantic headings
- keyboard navigation
- visible focus
- ARIA labeling where required
- reduced-motion support
- color contrast
- meaningful alt text
- accessible buttons and links
- no hover-only critical information
- mobile/touch equivalents for hover interactions

---

# 30. Interaction Design Standard

Use motion to communicate:

- hierarchy
- focus
- transition
- relationship
- depth

Not to entertain by itself.

Preferred animations:

- fade
- crossfade
- line draw
- gentle slide
- subtle scale
- parallax
- focus shift
- masked reveal

Avoid:

- bounce
- elastic springiness
- overshoot
- rapid zoom
- spin
- shake
- large cursor-following effects

---

# 31. Motion Timing

Use approximate ranges:

```text
Micro UI:          150–250ms
Hover reveal:      200–350ms
Section reveal:    500–800ms
Route transition:  600–1000ms
Cinematic motion:  1500–3000ms
```

Use easing that feels smooth and cinematic.

Avoid exaggerated spring physics.

---

# 32. Content Style

Writing should be:

- concise
- strategic
- enterprise-aware
- outcome-oriented
- technically credible
- process-oriented

Use terms such as:

- governance
- operational change
- process design
- workflow
- architecture
- scalability
- auditability
- structured information
- AI enablement
- decision support
- controls
- consistency
- execution

Avoid empty claims such as:

- revolutionary
- visionary
- disruptive
- game-changing
- AI expert
- guru
- thought leader

Let the work communicate credibility.

---

# 33. Meta Section

Include a small footer or About-page section:

# Built as an Experiment in Applied AI

Copy:

> This portfolio was conceived, designed, iterated, and developed using AI-assisted creative and technical workflows.

Credits:

**Concept Development**  
ChatGPT

**Implementation**  
Claude Code

**Creative Direction**  
EngSean Lee

Keep this restrained.

It should feel like an interesting production note, not an advertisement.

---

# 34. MVP Build Order

Implement in this order.

## Step 1 — Foundation

- initialize styles and tokens
- global typography
- responsive container system
- navigation
- routing
- content data structure

## Step 2 — Hero Environment

- layered environment component
- cloud movement
- bird movement
- foreground wind motion
- responsive behavior
- reduced-motion behavior
- arrival reveal

## Step 3 — Homepage

- hero
- philosophy
- featured projects
- architecture preview
- about preview
- closing CTA

## Step 4 — Project System

- project data model
- projects archive
- reusable project hero
- reusable case-study template
- architecture diagram primitives
- impact section
- related projects

## Step 5 — Architecture

- framework
- interactive nodes
- evidence mapping
- capability map MVP

## Step 6 — About / Resume / Contact

- about content
- journey
- credentials
- resume shell
- contact

## Step 7 — Polish

- responsive refinement
- accessibility pass
- animation refinement
- performance pass
- browser testing

---

# 35. First Build Target

The first usable target should include:

- working responsive navigation
- animated Daylight Meadow hero
- non-static clouds
- birds coasting
- visible meadow wind effect
- hero content
- Systems Before Solutions section
- four Featured Systems
- one complete case-study page
- Architecture page MVP
- About page
- Contact
- responsive mobile
- reduced-motion support

Do not attempt every advanced idea before this target is stable.

---

# 36. Quality Gate

Before considering the first build complete, verify:

## Visual

- Does it feel premium?
- Is the fantasy influence obvious but restrained?
- Does the sage/champagne palette feel intentional?
- Is there enough negative space?
- Does the site avoid generic SaaS aesthetics?

## Motion

- Does the background feel alive?
- Are the birds subtle?
- Does the meadow appear affected by wind?
- Are animations slow enough?
- Can the user read without distraction?

## Professional

- Can a recruiter immediately understand the portfolio?
- Are project outcomes clear?
- Does Architecture feel substantive?
- Are claims supported?
- Is the résumé experience conventional enough?

## Technical

- Does it work on mobile?
- Does reduced motion work?
- Are animations performant?
- Are routes accessible?
- Is project content data-driven?

## Tone

- Does it avoid cosplay?
- Does it avoid “weeb kid” presentation?
- Does it still feel personal and creative?
- Does the work remain the hero?

---

# 37. Development Behavior

When implementing:

1. Read the entire master brief before making major design decisions.
2. Preserve the design system.
3. Prefer reusable components.
4. Keep project content data-driven.
5. Do not invent personal or business facts.
6. Do not overbuild.
7. Build the MVP first.
8. Use placeholders clearly where external assets or URLs are missing.
9. Keep changes easy to iterate on.
10. When choosing between spectacle and clarity, choose clarity.

---

# 38. Asset Placeholders

Until final art assets exist, create clearly labeled asset slots such as:

```text
/public/environment/sky.webp
/public/environment/clouds-far.webp
/public/environment/clouds-near.webp
/public/environment/mountains.webp
/public/environment/observatory.webp
/public/environment/meadow.webp
/public/environment/foreground-grass.svg
/public/environment/birds.svg
```

Do not use low-quality random fantasy stock imagery as a permanent substitute.

Temporary placeholders are acceptable during development but should be easy to swap.

---

# 39. Environmental Implementation Concept

A possible hero composition:

```tsx
<HeroEnvironment>
  <SkyLayer />
  <CloudLayer depth="far" />
  <MountainLayer />
  <ObservatoryLayer />
  <TerraceLayer />
  <CloudLayer depth="near" />
  <MeadowLayer />
  <ForegroundGrass />
  <BirdLayer />
  <AtmosphereLayer />
  <HeroContent />
</HeroEnvironment>
```

Each layer should have:

- controlled transform range
- responsive positioning
- reduced-motion behavior
- pointer-events disabled unless interactive

Avoid unnecessary DOM complexity.

---

# 40. Final Design Test

The finished experience should communicate:

> “This person understands operational problems, process design, governance, and applied AI—and had the creativity and persistence to turn those ideas into something unusually well made.”

The portfolio itself is part of the proof.

Build accordingly.
