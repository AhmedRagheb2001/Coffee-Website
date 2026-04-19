# Velvet Roast Figma Blueprint

## What To Build In Figma

Build two files if possible:

1. `Velvet Roast Design System`
2. `Velvet Roast Website Screens`

If you prefer one file, keep the design system pages first and the screens pages after the separators.

## File 1: Design System

### Page order

1. `Cover`
2. `Getting Started`
3. `Foundations / Color`
4. `Foundations / Typography`
5. `Foundations / Spacing + Radius + Effects`
6. `Components / Navigation`
7. `Components / Buttons`
8. `Components / Cards`
9. `Components / Sections`

### Foundations to create

#### Color swatches

- Background
- Surface
- Surface Strong
- Surface Soft
- Text Primary
- Text Secondary
- Accent
- Accent Soft
- Border Subtle

#### Text styles

- `Display/H1`
- `Display/H2`
- `Heading/H3`
- `Body/Large`
- `Body/Regular`
- `Label/Nav`
- `Label/Eyebrow`
- `Label/Button`

#### Effects

- Card shadow
- Glass blur usage note
- Border opacity usage note

### Components to create

#### Navigation

- `Brand Mark`
- `Nav Link`
  Variants:
  `State=Default`
  `State=Active`

#### Buttons

- `Button`
  Variants:
  `Style=Filled`
  `Style=Ghost`

#### Cards

- `Feature Card`
- `Drink Card`
- `Menu Card`
- `Stat Card`
- `Visit Card`
- `Visit Detail Row`

#### Sections

- `Hero Split`
- `Three Card Grid`
- `Page Header`
- `Footer`

## File 2: Website Screens

### Page order

1. `Home`
2. `Menu`
3. `Story`
4. `Visit`
5. `Responsive / Mobile`

### Frames to create per page

For each page:

- `Desktop / 1440`
- `Tablet / 1024`
- `Mobile / 390`

### Home page sections

- top navigation
- hero split section
- editorial large feature card
- two supporting feature cards
- featured drinks grid
- footer

### Menu page sections

- page heading
- three-column menu cards
- footer

### Story page sections

- intro banner
- stat cards row
- experience cards row
- footer

### Visit page sections

- large main visit card
- contact card
- tasting highlight card
- footer

## Visual Direction

- premium coffeehouse
- warm, cinematic, tactile
- dark espresso background
- cream typography
- copper accent highlights
- rounded panels with soft blur
- serif display headings with modern sans support text

## Do Not Change

- Do not switch to a light UI theme by default.
- Do not replace the serif hero typography.
- Do not overcrowd pages with extra sections that are not in the React app.
- Do not use default bright blue links or generic template spacing.

## Source Of Truth In Code

- layout shell: [src/components/SiteShell.jsx](C:\Users\DELL\OneDrive\Desktop\Web Applications\web app\src\components\SiteShell.jsx)
- pages: [src/pages](C:\Users\DELL\OneDrive\Desktop\Web Applications\web app\src\pages)
- content data: [src/data/siteData.js](C:\Users\DELL\OneDrive\Desktop\Web Applications\web app\src\data\siteData.js)
- tokens and visual rules: [src/styles.css](C:\Users\DELL\OneDrive\Desktop\Web Applications\web app\src\styles.css)
