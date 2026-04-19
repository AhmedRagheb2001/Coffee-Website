# Velvet Roast Figma Rules

## Overview

This project is a React + Vite marketing site for a boutique coffee brand called Velvet Roast. The UI uses a custom visual language with warm gradients, editorial typography, glassmorphism-style cards, and multi-page navigation. Figma work should preserve that direction rather than replacing it with generic SaaS patterns.

## Design System Structure

### Tokens

Tokens are currently implemented in CSS custom properties inside [src/styles.css](C:\Users\DELL\OneDrive\Desktop\Web Applications\web app\src\styles.css).

```css
:root {
  --bg: #120b08;
  --surface: rgba(38, 24, 18, 0.72);
  --surface-strong: rgba(52, 32, 24, 0.9);
  --surface-soft: rgba(255, 246, 236, 0.08);
  --text: #f6eadf;
  --muted: #d2bba6;
  --accent: #c88a56;
  --accent-soft: #f0dfcd;
  --line: rgba(255, 240, 225, 0.14);
  --shadow: 0 30px 80px rgba(0, 0, 0, 0.35);
}
```

Use these as the initial token source of truth for Figma variables.

Recommended variable collections:

- `Primitives`
- `Color`
- `Spacing`
- `Radius`
- `Effects`
- `Typography`

Recommended color variables:

- `color/bg/base` -> `#120b08`
- `color/surface/default` -> `rgba(38, 24, 18, 0.72)`
- `color/surface/strong` -> `rgba(52, 32, 24, 0.9)`
- `color/surface/soft` -> `rgba(255, 246, 236, 0.08)`
- `color/text/primary` -> `#f6eadf`
- `color/text/secondary` -> `#d2bba6`
- `color/accent/primary` -> `#c88a56`
- `color/accent/soft` -> `#f0dfcd`
- `color/border/subtle` -> `rgba(255, 240, 225, 0.14)`

Recommended spacing scale:

- `spacing/2xs` = 4
- `spacing/xs` = 8
- `spacing/sm` = 12
- `spacing/md` = 16
- `spacing/lg` = 20
- `spacing/xl` = 24
- `spacing/2xl` = 28
- `spacing/3xl` = 36
- `spacing/4xl` = 48

Recommended radius scale:

- `radius/sm` = 14
- `radius/md` = 20
- `radius/lg` = 24
- `radius/xl` = 30
- `radius/full` = 999

Recommended effect tokens:

- `effect/shadow/card` = `0 30 80 0 rgba(0,0,0,0.35)`
- `effect/blur/glass` = `18`

### Typography

Typography is based on:

- `Cormorant Garamond` for headings
- `Manrope` for body and navigation

Recommended text styles:

- `Display/H1`
- `Display/H2`
- `Heading/H3`
- `Body/Large`
- `Body/Regular`
- `Label/Nav`
- `Label/Eyebrow`
- `Label/Button`

Typography guidance:

- Use serif headings for premium cafe storytelling.
- Use sans-serif for structure, readability, and interface text.
- Keep line-height fairly open for body copy.
- Preserve high-contrast size differences between heading and supporting text.

## Component Library

Components are organized implicitly through React files rather than a separate UI library.

Main code locations:

- App routing: [src/App.jsx](C:\Users\DELL\OneDrive\Desktop\Web Applications\web app\src\App.jsx)
- Layout shell: [src/components/SiteShell.jsx](C:\Users\DELL\OneDrive\Desktop\Web Applications\web app\src\components\SiteShell.jsx)
- Page content: [src/pages/HomePage.jsx](C:\Users\DELL\OneDrive\Desktop\Web Applications\web app\src\pages\HomePage.jsx), [src/pages/MenuPage.jsx](C:\Users\DELL\OneDrive\Desktop\Web Applications\web app\src\pages\MenuPage.jsx), [src/pages/StoryPage.jsx](C:\Users\DELL\OneDrive\Desktop\Web Applications\web app\src\pages\StoryPage.jsx), [src/pages/VisitPage.jsx](C:\Users\DELL\OneDrive\Desktop\Web Applications\web app\src\pages\VisitPage.jsx)
- Content data: [src/data/siteData.js](C:\Users\DELL\OneDrive\Desktop\Web Applications\web app\src\data\siteData.js)

Recommended Figma components:

- `Nav / Brand Mark`
- `Nav / Pill Link`
- `Button / Filled`
- `Button / Ghost`
- `Card / Feature`
- `Card / Drink`
- `Card / Menu Section`
- `Card / Stat`
- `Card / Visit Detail`
- `Section / Hero`
- `Section / Two Column Intro`
- `Section / Three Card Grid`
- `Footer / Default`

Component behavior guidance:

- Use auto layout for all cards and navigation elements.
- Use variants for button style and nav state.
- Keep cards token-bound for fill, border, radius, and shadow.
- Reuse a small number of layout primitives instead of duplicating page-specific components.

## Frameworks And Libraries

### Frontend stack

- React 18
- React Router DOM 6
- Vite 5

Source: [package.json](C:\Users\DELL\OneDrive\Desktop\Web Applications\web app\package.json)

### Styling approach

- One global stylesheet in [src/styles.css](C:\Users\DELL\OneDrive\Desktop\Web Applications\web app\src\styles.css)
- CSS custom properties define the visual system
- Layout uses CSS Grid and Flexbox
- Responsive breakpoints are implemented with media queries

This means Figma components should map to reusable visual patterns, not CSS Modules or utility classes.

## Asset Management

This codebase currently uses almost no external image assets. The visual direction is built from:

- gradients
- blurs
- layered panels
- typographic contrast
- abstract geometric decoration

Current asset files:

- favicon: [public/favicon.svg](C:\Users\DELL\OneDrive\Desktop\Web Applications\web app\public\favicon.svg)

Figma implication:

- Favor vector shapes, gradients, and tokens over imported bitmap photos for the first version.
- If photography is added later, keep it warm, tactile, and low-saturation.

## Icon System

There is no icon library in the current app. The brand mark is text-based and the visual language avoids heavy icon dependency.

Figma recommendation:

- Start without a broad icon system.
- If icons are added, create a very small `Icons` page with 24px outline icons in a warm-neutral stroke color.

## Styling Approach

The current site uses:

- Glassmorphism-like surfaces
- Large serif headlines
- Warm brown and cream palette
- Rounded cards
- Soft glowing backgrounds
- Editorial asymmetry with structured grids

Figma should preserve these choices:

- Do not flatten the design into plain white cards on a neutral page.
- Do not replace the serif display typography with a generic sans-only system.
- Keep layered depth with shadows, subtle borders, and blurred surfaces.
- Maintain generous spacing and strong section rhythm.

## Project Structure

Current structure:

```text
web app/
  public/
    favicon.svg
  src/
    components/
      SiteShell.jsx
    data/
      siteData.js
    pages/
      HomePage.jsx
      MenuPage.jsx
      StoryPage.jsx
      VisitPage.jsx
    App.jsx
    main.jsx
    styles.css
  package.json
  vite.config.js
```

Figma should mirror this separation:

- foundations and shared components first
- page-level screens second
- content and copy blocks organized per page

## Suggested Figma File Structure

Create these Figma pages in this order:

1. `Cover`
2. `Getting Started`
3. `Foundations / Color`
4. `Foundations / Typography`
5. `Foundations / Spacing + Effects`
6. `---`
7. `Components / Navigation`
8. `Components / Buttons`
9. `Components / Cards`
10. `Components / Sections`
11. `---`
12. `Screens / Home`
13. `Screens / Menu`
14. `Screens / Story`
15. `Screens / Visit`

## Screen Mapping

### Home

Match [src/pages/HomePage.jsx](C:\Users\DELL\OneDrive\Desktop\Web Applications\web app\src\pages\HomePage.jsx):

- top navigation shell
- hero split layout
- three-card feature row
- featured drinks grid
- footer

### Menu

Match [src/pages/MenuPage.jsx](C:\Users\DELL\OneDrive\Desktop\Web Applications\web app\src\pages\MenuPage.jsx):

- intro header
- three menu category cards
- menu item rows with price alignment

### Story

Match [src/pages/StoryPage.jsx](C:\Users\DELL\OneDrive\Desktop\Web Applications\web app\src\pages\StoryPage.jsx):

- story intro banner
- stats cards
- experience cards

### Visit

Match [src/pages/VisitPage.jsx](C:\Users\DELL\OneDrive\Desktop\Web Applications\web app\src\pages\VisitPage.jsx):

- large visit information panel
- location/contact card
- reservation highlight card

## Implementation Notes For Figma

- Use desktop frame width around 1440 and mobile frame width around 390.
- Use an outer content container matching the code’s centered shell feel.
- Build all cards with auto layout and tokenized padding.
- Reuse the same card foundations with variant overrides where possible.
- Treat the hero visual as an abstract composition of layered panels and rings, not a photo placeholder by default.
- Use the copy in [src/data/siteData.js](C:\Users\DELL\OneDrive\Desktop\Web Applications\web app\src\data\siteData.js) as content source.

## Code Connect Readiness

If you later wire Code Connect, the best initial mapping targets are:

- `SiteShell` -> navigation + footer structure
- `HomePage` -> hero and drink cards
- `MenuPage` -> menu section card
- `StoryPage` -> stat and experience cards
- `VisitPage` -> visit cards

Keep Figma component names stable and human-readable so they can be mapped cleanly to the React structure.
