# APPROVED ART DIRECTION — DAYLIGHT MEADOW

## Status

**APPROVED VISUAL SOURCE OF TRUTH**

Reference image:

`/references/approved/daylight-meadow-approved-art-direction.png`

Original reference dimensions: **1536 × 1024px**

Claude Code must treat this image as the final authority for the portfolio's visual language.

If the current implementation conflicts with this image, the implementation should be adjusted to match the image — not the other way around.

---

# 1. What This Reference Controls

This reference establishes the approved direction for:

- environmental atmosphere
- painterly realism
- fantasy sophistication
- palette
- visual hierarchy
- environmental scale
- architectural language
- meadow density
- cloud scale
- lighting
- negative space
- typography placement
- interface restraint
- UI ornament density
- sage/champagne balance
- overall emotional tone

This image is not merely "inspiration."

It is the **visual target**.

---

# 2. Critical Interpretation

The approved direction is:

> **A premium professional AI portfolio presented inside an original, optimistic fantasy world.**

The reference succeeds because the environment feels like a location from a high-budget fantasy RPG while the interface remains restrained, editorial, and professional.

The environment should communicate:

- scale
- openness
- wonder
- calm
- spring
- possibility
- sophistication
- quiet confidence

The interface should communicate:

- enterprise credibility
- AI systems thinking
- process discipline
- architecture
- executive readability
- polish

---

# 3. DO NOT Simplify the Art Into Flat Vector Illustration

The environment in the approved reference is:

- painterly
- atmospheric
- layered
- detailed
- soft in the distance
- sharp enough in the foreground
- spatially deep

Do **not** replace it with:

- flat SVG mountains
- childlike vector hills
- simple cartoon clouds
- generic fantasy castle icons
- flat green fields
- primitive geometric ruins
- low-detail game art
- icon-based scenery

SVG may be used for:

- ambient birds
- pollen / motes
- subtle wind accents
- interface ornament
- architecture diagrams
- capability maps
- line animations

SVG should **not** be used as the primary landscape illustration.

---

# 4. Hero Composition

The approved hero composition should remain recognizable.

## Left side

Reserved for professional interface content:

**ENGSEAN LEE**

**Designing Intelligent Systems  
for Operational Change**

**AI Solutions Architecture • Process Strategy • Applied AI**

Supporting paragraph.

Primary and secondary CTAs.

The text is left-aligned and editorial.

Do not center the hero.

Do not turn it into a movie poster.

---

## Right side

The right half is visually dominated by:

- monumental pale fantasy architecture
- circular observatory forms
- mountain scale
- layered terraces
- distant water
- bright clouds
- meadow foreground

Do not place large UI cards over the observatory.

The landmark must remain visible.

---

# 5. Environmental Characteristics to Preserve

## Sky

- bright pale blue
- large luminous cloud formations
- atmospheric softness
- warm sunlight
- no dark storm atmosphere

## Meadow

- sage dominant
- white / champagne wildflowers
- layered vegetation
- foreground detail
- natural unevenness
- not a flat lawn

## Architecture

- pale ivory / white stone
- elegant circular and vertical geometry
- monumental scale
- fantasy influence without gothic styling
- integrated into landscape rather than floating separately

## Mountains

- cool distant blue / gray
- atmospheric perspective
- soft haze
- strong sense of scale

## Water

- quiet
- reflective
- terrace-like
- supports depth rather than becoming the focal point

## Lighting

- warm champagne sunlight
- bright daytime
- soft atmospheric bloom
- no neon
- no harsh game lighting

---

# 6. Palette

Use the approved reference as the primary palette source.

Core values:

```text
Dark Sage        #4E6B57
Soft Sage        #A7BFA6
Warm Ivory       #EFE7DB
Champagne        #F3E6C8
Soft Stone       #D6D1C4
Cloud White      #F7F6F1
```

These are guides, not an excuse to recolor the landscape mechanically.

The painting should remain natural and nuanced.

---

# 7. Interaction Philosophy

The environment should feel alive, but calm.

Add motion in ways that preserve the approved art.

Recommended motion:

- birds slowly coasting
- occasional small flock
- subtle atmospheric motes
- slight wind movement in foreground vegetation
- very mild cloud haze drift
- subtle water shimmer
- restrained scroll parallax

Do not create:

- dramatic flying camera
- constant large animation
- heavy particles
- pulsing glows
- rotating fantasy objects
- magical portals
- visible spell effects

The user should think:

> "This world is alive."

Not:

> "This website will not stop moving."

---

# 8. Approved Motion Asset

Use:

`/public/environment/daylight-meadow-ambient-overlay.svg`

This asset is transparent.

It is designed to sit **above the painterly environment** and **below the React UI**.

Its job is only to add:

- distant birds
- atmospheric motes
- foreground wind accents
- slow haze

It should not visually replace the approved reference.

---

# 9. Required Layer Order

Use this structure:

```text
Z-0   Painterly Environment / Approved Art-derived background
Z-1   Ambient SVG Motion Overlay
Z-2   Optional subtle light / contrast gradients
Z-10  React / HTML Professional Interface
```

Example:

```tsx
<section className="relative min-h-[100svh] overflow-hidden bg-[#F7F6F1]">

  <div className="absolute inset-0 z-0">
    {/* production painterly environment */}
  </div>

  <div className="pointer-events-none absolute inset-0 z-[1]">
    <img
      src="/environment/daylight-meadow-ambient-overlay.svg"
      alt=""
      aria-hidden="true"
      className="h-full w-full object-cover"
    />
  </div>

  <div className="pointer-events-none absolute inset-0 z-[2]">
    {/* subtle readability gradient only if required */}
  </div>

  <div className="relative z-10">
    {/* navigation + hero UI */}
  </div>

</section>
```

---

# 10. Important: The Approved Mockup Is a Reference, Not a Literal Full-Page Background

The file:

`/references/approved/daylight-meadow-approved-art-direction.png`

contains:

- hero art
- interface
- project preview
- design-system notes
- information-architecture notes

Do not simply stretch the entire mockup across the browser as the finished page.

Instead:

1. use it as the visual authority;
2. reproduce its hero composition using the production environment assets;
3. reproduce its typography, spacing, palette, and restraint in React;
4. use the approved motion overlay to make the environment feel alive.

---

# 11. Architecture Page Direction

The Architecture page should feel like the visitor has moved from the meadow **toward / into the observatory**.

Do not repeat the exact hero background on every page.

Architecture should transition toward:

- warm ivory surfaces
- pale stone
- sage accents
- champagne line work
- elegant diagrams
- large negative space
- restrained fantasy architectural framing

The conceptual progression is:

```text
DAYLIGHT MEADOW
      ↓
DISTANT OBSERVATORY
      ↓
APPROACH / TRANSITION
      ↓
ARCHITECTURE
      ↓
INTELLIGENT SYSTEM DIAGRAMS
```

The visual world and the professional content should reinforce each other.

---

# 12. Art Drift Test

Before committing any visual change, compare it to the approved reference.

Ask:

1. Does this feel as sophisticated as the reference?
2. Does it preserve painterly depth?
3. Does the architecture feel monumental?
4. Does the environment feel premium rather than illustrated?
5. Are the clouds large enough to create scale?
6. Is sage green present without becoming cartoon green?
7. Is champagne used subtly?
8. Does the interface remain professional?
9. Is there enough negative space?
10. Would this look credible in front of a senior hiring manager?

If not, revert or refine.

---

# 13. Claude Code Instruction — Use Exactly

Paste the following instruction into Claude Code:

```text
Read `04-approved-art-direction.md` before making any additional visual changes.

The image at `/references/approved/daylight-meadow-approved-art-direction.png` is now the authoritative visual source of truth.

Do not reinterpret it into simpler vector art, generic fantasy art, flat illustrations, or a new visual direction.

The approved reference controls:
- atmosphere
- painterly realism
- palette
- environmental scale
- architecture
- meadow density
- cloud scale
- typography placement
- interface restraint
- overall sophistication

Use `/public/environment/daylight-meadow-ambient-overlay.svg` only as a transparent ambient-motion layer for birds, wind accents, haze, and motes.

Do not use the SVG as the primary landscape artwork.

During this pass:
1. preserve existing working application functionality;
2. bring the visual implementation back toward the approved reference;
3. keep the hero left-aligned;
4. preserve the observatory / landmark as the major right-side focal point;
5. retain sage, ivory, champagne, and pale blue;
6. remove any childlike, flat, cartoon, or generic fantasy interpretation;
7. keep motion subtle;
8. do not make unrelated content or architecture changes.

When finished, list the exact files changed and explain how each change improves fidelity to the approved reference.
```

---

# 14. Final Rule

When there is disagreement between:

- Claude's aesthetic interpretation
- implementation convenience
- the approved visual reference

**the approved visual reference wins.**
