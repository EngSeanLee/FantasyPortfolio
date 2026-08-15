# INTERACTION & EXPERIENCE PIVOT — DAYLIGHT MEADOW PORTFOLIO

Read the existing project briefs and approved art-direction files before making changes.

This prompt updates the interaction model of the portfolio.

The current implementation still behaves too much like a traditional scrolling website.

That is no longer the intended experience.

---

# 1. New Core Experience

The portfolio should behave more like an **interactive professional application / premium RPG menu system layered over a persistent fantasy world**.

The experience should be:

> **Persistent world → choose destination → interface changes around the user → explore content → close/return to world**

Not:

> Homepage → scroll → new page → scroll → new page → scroll

The Daylight Meadow is not just a hero image.

It is the visual world the portfolio exists inside.

---

# 2. Primary Experience Goal

The most important outcome is not maximizing how much text a visitor reads.

The visitor should spend 2–3 minutes:

- absorbing the environment
- clicking through systems
- exploring the architecture framework
- understanding the type of work being built
- experiencing the portfolio itself as evidence of applied AI and design thinking

The emotional reaction should remain:

> “This is extremely well made.”

followed quickly by:

> “There is real professional substance behind the visual presentation.”

---

# 3. Persistent Daylight Meadow

The Daylight Meadow environment should remain visible throughout nearly the entire portfolio.

Use the approved environment asset as the persistent visual foundation.

The environment should not disappear when navigating to:

- Projects
- Architecture
- About
- Contact

Instead, content interfaces appear **over the environment**.

The scenery should remain recognizable behind those interfaces.

## Motion

Keep environmental motion extremely restrained.

For the current version:

- slow cloud movement only
- no animated birds
- no pollen
- no animated water
- no grass distortion
- no unnecessary particle effects

The painting itself should remain the star.

---

# 4. Persistent Application Shell

Create one persistent desktop shell containing:

1. Daylight Meadow environment
2. left-side navigation rail
3. primary content viewport
4. contextual overlays/panels
5. close/back control
6. transition system

Do not rebuild the entire environment between routes if avoidable.

The interface should feel like the user remains in the same world while the information layer changes.

---

# 5. Remove the Top Navigation

For this iteration, remove the traditional top navigation.

The **left navigation rail becomes the primary global navigation system**.

This should reduce visual clutter and reinforce the distinctive interaction model.

---

# 6. Left Navigation Rail

Restore and expand the navigation concept from the approved original mockup.

Desktop:

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

Requirements:

- fixed to left edge
- visible throughout desktop experience
- thin vertical champagne/stone connector line
- labeled navigation nodes
- no unlabeled pagination dots
- active page clearly indicated
- subtle transition between active states
- low visual weight
- high polish

Active state:

- sage center or selected node
- subtle champagne halo
- slightly stronger text
- approximately 300–450ms transition

Inactive state:

- hollow node
- thin outline
- lower-opacity text

The rail should feel like elegant location wayfinding, not a standard corporate sidebar.

---

# 7. Home — One Viewport

The Home experience should require essentially no scrolling.

Target:

**one primary viewport**

The visitor should immediately see:

- Daylight Meadow
- EngSean Lee
- headline
- positioning statement
- one or two main calls to action
- left navigation rail
- possibly subtle project/system entry points

Hero content:

**ENGSEAN LEE**

# Designing Intelligent Systems for Operational Change

**AI Solutions Architecture • Process Strategy • Applied AI**

Supporting copy:

> I design intelligent workflows, decision-support tools, and operational systems that improve visibility, consistency, and execution.

Primary action:

**Explore My Work**

Secondary action:

**About Me**

Do not place multiple long homepage sections below this.

The world itself should be the homepage experience.

---

# 8. Projects — Interactive System Map

Do not use the current long archive page as the primary Projects experience.

Replace it with a **system map**.

The system map should feel like an elegant visualization of connected work, not a literal game map.

Possible structure:

```text
                 PROCESS BUILD
                   COACH AGENT
                      ●
                     / \
                    /   \
                   /     \
                  ●-------●
          ESTIMATE        DOCUMENTATION
           INTAKE          GENERATOR
                  \         /
                   \       /
                    \     /
                      ●
                 PMO TRACKING
```

This is illustrative only.

Design the actual map based on project relationships.

Projects can be grouped visually by:

- Governance & Process
- Applied AI
- Documentation Automation
- Operational Systems
- Technical Experimentation

The map should communicate that these projects form an evolving body of work.

---

# 9. Projects Panel

When the user clicks PROJECTS:

1. keep the Meadow visible;
2. soften or dim the environment slightly;
3. optionally add very light background blur;
4. open the Projects System Map as the primary interface;
5. use a translucent ivory/frosted-glass panel where necessary.

The landscape should still be clearly visible.

Do not replace the screen with a flat ivory page.

---

# 10. Panel Visual Treatment

Panels should feel integrated into the fantasy world but remain corporate.

Use:

- translucent warm ivory
- subtle backdrop blur
- champagne borders
- low-opacity stone/sage line work
- soft shadow
- generous padding
- restrained ornament

The environment should remain visible through the panel.

Avoid:

- heavy glassmorphism
- dark frosted glass
- bright glowing borders
- thick fantasy frames
- opaque white rectangles covering most of the artwork

The panel should feel more like a refined piece of architectural glass than a SaaS modal.

---

# 11. Project Selection

Hovering or focusing a project node should reveal:

- project title
- one-line value statement
- category
- key capabilities
- small architecture preview if appropriate

Clicking the project should open a **case-study viewer**.

Do not navigate the user into a traditional long scrolling article.

---

# 12. Project Case Study Viewer

Open the selected project in a large overlay / application-style viewer while preserving the Meadow behind it.

Use approximately:

```text
┌─────────────────────────────────────────────────────────┐
│ PROJECT TITLE                                    [ × ]  │
│ category / role / technology                           │
├─────────────────────────────────────────────────────────┤
│                                                       │
│  01 Problem                                           │
│  02 Overview             CURRENT CONTENT              │
│  03 Architecture                                       │
│  04 AI & Technology                                   │
│  05 Business Impact                                   │
│  06 Lessons Learned                                   │
│                                                       │
└─────────────────────────────────────────────────────────┘
```

This is **not** a normal browser tab interface.

Treat these as **chapters / sections of the system**.

Use elegant numbered navigation:

```text
01
Problem

02
Overview

03
Architecture

04
AI & Technology

05
Business Impact

06
Lessons Learned
```

Selecting a chapter swaps the main content region.

This eliminates almost all vertical scrolling.

---

# 13. Case Study Content Density

Prioritize executive-level content.

Each section should generally fit within the available viewport.

Use:

- strong headline
- concise explanation
- diagrams
- large impact statements
- short evidence lists

If more detail is useful, provide an optional:

**View Detail**

or

**Expand**

Do not make every visitor read the full detail by default.

The hierarchy should be:

**understand quickly → explore deeper if interested**

---

# 14. Case Study Viewer Navigation

Every case study viewer must provide a clear close/back control.

Examples:

**×**

or

**Back to Systems**

Closing the case study returns the visitor to the Projects System Map without resetting the overall experience.

Avoid traditional browser-navigation feeling where possible.

---

# 15. Architecture — Interactive Framework

Architecture should no longer be a long stacked page.

When ARCHITECTURE is selected:

- keep the landscape visible
- subtly shift/reframe the environment toward the observatory
- dim/soften background appropriately
- open the Architecture interface

The experience should suggest that the visitor has moved **toward the observatory**.

No literal character movement is required.

---

# 16. Architecture Framework

Use the six-part framework:

1. Business Problem
2. Process Design
3. Information Structure
4. Governance & Control
5. AI Enablement
6. Outcome

Present these as an interactive system diagram.

Example:

```text
BUSINESS
PROBLEM
   ●
   │
   ▼
PROCESS
DESIGN
   ●
  / \
 /   \
●     ●
INFO  GOVERNANCE
 \     /
  \   /
   ●
AI ENABLEMENT
   │
   ▼
OUTCOME
```

The visual can be more organic and elegant than this.

Do not display them as six generic rectangular web cards.

---

# 17. Architecture Interaction

Clicking a framework node should replace the content panel beside/below the diagram.

Example:

### BUSINESS PROBLEM

**What operating condition are we actually trying to change?**

Short explanation.

**Principle**

> If the problem cannot be stated without mentioning a tool, it is not yet well understood.

**Evidence**

- Enterprise Estimate Intake System
- PMO Tracking Assistant

The Architecture page should function through selection, not scrolling.

---

# 18. Architecture Internal Navigation

Use two high-level internal views:

**Architecture Framework**

**Capability Map**

Do not stack both vertically.

Switch between them within the same interface.

This keeps Architecture essentially within one viewport.

---

# 19. Capability Map

The Capability Map should use the visual language of a skill tree without game terminology.

Possible central structure:

```text
                  SOLUTION ARCHITECTURE
                           ●
                         /   \
                        /     \
                 PROCESS       APPLIED AI
                   ●               ●
                 /   \           /   \
         GOVERNANCE WORKFLOW   AGENTS AUTOMATION
```

Selecting a capability should reveal:

- definition
- related capabilities
- project evidence

Example:

### GOVERNANCE

> Designing controls into the workflow rather than relying solely on policy or user behavior.

**Demonstrated in**

- Enterprise Estimate Intake System
- Process Build Coach Agent

No scores.

No XP.

No proficiency percentages.

---

# 20. Spatial Transitions

Navigation transitions should feel spatial.

Examples:

### Home → Projects

- scene subtly shifts laterally or forward
- background softens
- project system map fades into the foreground

### Home → Architecture

- environment reframes slightly toward the observatory
- ivory architecture interface emerges

### Home → About

- scene reframes toward a quieter meadow / overlook composition

Transitions should suggest movement through a world while remaining subtle.

Do not use:

- dramatic camera flying
- 3D game movement
- spinning transitions
- large zoom effects

Target duration:

**600–1000ms**

---

# 21. Environmental Variations

The Meadow remains the common world, but different sections may reframe it.

Suggested treatment:

## Home

Full wide valley.

## Projects

Same world, slightly softened behind the System Map.

## Architecture

Crop/reframe toward the observatory.

## About

Quieter meadow / landscape framing.

## Contact

Open horizon / optimistic closing composition.

These should feel like different viewpoints inside the same place.

---

# 22. About

About should also avoid becoming a long page.

Use one main panel with selectable areas if necessary:

- Background
- Journey
- Credentials
- Beyond the Work

A small amount of scrolling is acceptable if unavoidable, but keep it restrained.

About should remain visually integrated with the Meadow.

---

# 23. Resume

Resume is the exception.

The Resume page may behave like a conventional professional page.

Scrolling is acceptable.

It should intentionally become simpler:

- ivory/white background
- minimal fantasy styling
- conventional hierarchy
- print-friendly
- downloadable résumé

This provides recruiters with a familiar safe space.

---

# 24. Contact

Contact should return strongly to the environmental experience.

Minimal content.

Possible heading:

# Let’s Build Something Better.

Supporting copy:

> Interested in AI solutions architecture, intelligent process design, enterprise transformation, and opportunities at the intersection of business and AI.

Actions:

- Email
- LinkedIn
- Resume

Keep it within one viewport.

---

# 25. Scrolling Rules

Scrolling should be minimized aggressively.

Target behavior:

```text
HOME
No scrolling

PROJECTS
No scrolling or extremely minimal

PROJECT CASE STUDY
No traditional vertical article scrolling
Use chapter selection

ARCHITECTURE
No scrolling or extremely minimal
Use selectable framework nodes

CAPABILITY MAP
No scrolling if practical

ABOUT
Maximum approximately one short viewport of scrolling

CONTACT
No scrolling

RESUME
Traditional scrolling allowed
```

Do not artificially force content into tiny unreadable spaces.

If scrolling is necessary for accessibility or smaller displays, allow it gracefully.

---

# 26. Desktop First

The immersive application model is primarily a desktop/tablet experience.

Do not compromise desktop quality by forcing the exact interaction pattern onto mobile.

---

# 27. Mobile

Mobile may use:

- simplified navigation drawer
- more conventional vertical layout
- stacked content
- limited scrolling
- simplified Project System Map
- simplified Capability Map

The information architecture should remain consistent even if the interaction changes.

The desktop experience is the primary artistic expression.

---

# 28. Back / Close Behavior

Every deep interaction should feel reversible.

Examples:

**Back to Meadow**

**Back to Systems**

**Close**

**Return to Architecture**

Avoid trapping visitors inside nested navigation.

Returning should preserve context whenever possible.

---

# 29. URL / Browser Behavior

Even though the experience feels application-like, preserve usable URLs where practical.

Projects may still have route or URL state for:

- direct linking
- recruiter sharing
- refresh behavior
- browser history

But the visual transition should feel like opening the content inside the persistent world.

Do not sacrifice standard browser usability for theatricality.

---

# 30. Priority of the Environment

The landscape should shine through more than it currently does.

However:

The art should not overpower the professional content.

Use this balance:

**Home:** 100% environmental presence

**Projects:** approximately 60–75% perceived environmental presence

**Architecture:** approximately 45–65%

**About:** approximately 50–70%

**Case Study Viewer:** approximately 30–50%

**Resume:** minimal environment

These are conceptual visual weights, not opacity values.

---

# 31. Preserve Readability

Where content overlays the world:

- use localized blur rather than blurring the entire background
- use restrained ivory translucency
- keep text contrast high
- avoid placing copy directly over visually busy scenery
- preserve the observatory where possible

---

# 32. No More Generic Website Sections

Avoid layouts that feel like:

```text
Title
paragraph
cards
scroll
new title
paragraph
cards
scroll
footer
```

The new portfolio should feel intentionally composed as an interactive experience.

---

# 33. Keep the Content Corporate

Even though interaction becomes more game-like, language does not.

Use:

- Projects
- Architecture
- Capability Map
- Business Impact
- Lessons Learned
- AI & Technology
- Resume
- About

Do not rename these:

- Quests
- Skills
- Stats
- Inventory
- Codex
- Party
- Levels

The fantasy is visual and experiential.

The vocabulary remains professional.

---

# 34. Implementation Priority

Do this transition incrementally.

## Phase 1

Convert the global shell:

- persistent environment
- remove top navigation
- restore left navigation rail
- minimize Home scrolling

## Phase 2

Convert Projects:

- System Map
- project preview interaction
- case-study viewer

## Phase 3

Convert Architecture:

- interactive framework
- Capability Map toggle
- evidence interactions

## Phase 4

Convert About and Contact.

## Phase 5

Refine spatial transitions.

Do not rewrite all working content at once.

---

# 35. Critical Design Test

After implementing the pivot, ask:

> If I remove the content text, does this still feel like a distinctive interactive world?

Then ask:

> If I remove the fantasy artwork, is the content still professionally credible?

The correct portfolio must answer **yes to both**.

---

# 36. Final Experience Definition

This is no longer:

> A professional portfolio with a fantasy background.

It is:

> **An explorable professional portfolio interface that exists inside a persistent fantasy environment.**

The Meadow creates wonder.

The navigation creates exploration.

The system maps create interaction.

The case studies provide evidence.

The Architecture framework demonstrates thinking.

The Resume provides conventional credibility.

The full experience itself demonstrates creativity, AI-assisted building, and attention to detail.

That is the product.
