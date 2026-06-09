# Design System Inspired by Pennyu Indonesia

## 1. Visual Theme & Atmosphere

Pennyu's design system embodies trust and reliability through a bold, professional aesthetic centered on water management and sanitation infrastructure. The visual identity combines vibrant energy with institutional confidence, using striking primary colors to capture attention while maintaining approachability for B2B and consumer audiences. The design emphasizes clarity and action—every element is purposeful, whether guiding users through product categories or compelling them toward conversion. Clean layouts, generous whitespace, and confident typography create an air of stability and expertise, while the energetic accent colors inject modern vitality into what could otherwise be a purely utilitarian category.

**Key Characteristics**
- Bold primary and accent colors creating high contrast and clear visual hierarchy
- Modern sans-serif typography (Poppins and Plus Jakarta Sans) for legibility and contemporary feel
- Rounded button corners (16px–50px) softening the industrial nature of the product category
- Strategic use of warm coral/orange (#F07057) and deep blue (#0050A3) for emotional engagement
- Ample whitespace and breathing room in layouts
- Strong call-to-action emphasis through color and scale
- Accessible neutral palette for secondary information and grounding

## 2. Color Palette & Roles

### Primary
- **Primary Coral** (`#F07057`): Dominant action color for primary buttons, hero CTAs, and key highlights; conveys energy and urgency
- **Primary Blue** (`#0050A3`): Secondary primary for navigation, dropdown indicators, and accent links; represents trust and professionalism

### Accent Colors
- **Teal Accent** (`#AADDDD`): Subtle secondary accent for hover states and supporting UI elements
- **Warning Yellow** (`#FCB900`): Warning and alert states, used sparingly for cautionary messaging
- **Error Red** (`#CF2E2E`): Error states, validation failures, and critical messaging
- **Success Green** (`#7BDCB5`): Confirmation, success states, and positive feedback

### Interactive
- **Button Primary Background** (`#F07057`): Coral background for primary action buttons
- **Button Primary Text** (`#FFFFFF`): White text on primary buttons for maximum contrast
- **Button Secondary Border** (`#F07057`): Coral outline for secondary button variants
- **Button Tertiary Background** (`#0050A3`): Blue background for tertiary action buttons
- **Link Color** (`#0050A3`): Deep blue for hyperlinks and navigation elements

### Neutral Scale
- **Text Primary** (`#000000`): Primary heading and body text color for maximum legibility
- **Text Secondary** (`#686868`): Secondary body text, descriptions, and supporting information
- **Text Tertiary** (`#8E8E8E`): Disabled text, captions, and de-emphasized content
- **Text Muted** (`#A7A7A7`): Placeholder text and very subtle information
- **Text Dark** (`#444444`): Slightly lighter emphasis for certain body contexts
- **Text Disabled** (`#606060`): Disabled form inputs and inactive elements

### Surface & Borders
- **Surface White** (`#FFFFFF`): Default background for cards, containers, and modal overlays
- **Surface Light** (`#F5F5F5`): Subtle background differentiation for secondary sections
- **Border Subtle** (`#A7A7A7` at 40% opacity): Light borders for form inputs and dividers
- **Overlay Black** (`#000000`): Transparent black for modals and overlays

## 3. Typography Rules

### Font Family
**Primary:** Poppins, system-ui, -apple-system, sans-serif  
**Secondary:** Plus Jakarta Sans, system-ui, -apple-system, sans-serif  
**Monospace:** Courier New, monospace (for code or technical content)

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|-----------------|-------|
| H1 / Display | Poppins | 53px | 700 | 75px | 0px | Hero headlines, page titles |
| H2 / Section Title | Poppins | 48px | 700 | 67.2px | 0px | Major section headers |
| H3 / Subsection | Poppins | 32px | 700 | 44.8px | 0px | Card titles, module headers |
| H4 / Label | Poppins | 20px | 700 | 28px | 0px | Form labels, small headings |
| Body Large | Plus Jakarta Sans | 18px | 400 | 28px | 0px | Large body text, button text |
| Body | Plus Jakarta Sans | 16px | 400 | 32px | 0px | Primary body copy, standard text |
| Link | Plus Jakarta Sans | 14px | 400 | 28px | 0px | Hyperlinks and nav items |
| Caption | Plus Jakarta Sans | 12px | 400 | 18px | 0px | Small supporting text, disclaimers |
| Icon | Font Awesome 6 Free | 22px | 900 | 44px | 0px | Icon glyphs and symbols |

### Principles
- **Contrast-driven:** Font weights (400–700) and sizes create immediate visual hierarchy without relying solely on color
- **Readability first:** Line heights exceed standard ratios (1.5x–1.6x) to accommodate longer Indonesian text
- **Modular scale:** Each heading step increases by ~1.5x, creating harmonic visual rhythm
- **Brand voice:** Poppins conveys modern friendliness; Plus Jakarta Sans delivers clarity in supporting content
- **Accessibility:** All body text maintains minimum 16px size for legibility; links are underlined or sufficiently contrasted

## 4. Component Stylings

### Buttons

#### Primary Button
- **Background:** `#F07057`
- **Text Color:** `#FFFFFF`
- **Font Size:** 16px
- **Font Weight:** 400
- **Font Family:** Plus Jakarta Sans
- **Padding:** 5px 20px 5px 20px
- **Border Radius:** 16px
- **Border:** 1px solid transparent
- **Height:** 32px
- **Box Shadow:** `rgba(0, 80, 163, 0.11) 0px 4px 40px 0px`
- **Hover State:** Background darkens to `#E85F4F`, shadow intensifies
- **Active State:** Background becomes `#D64E39`
- **Disabled State:** Background `#CCCCCC`, text `#999999`, no shadow

#### Secondary Button
- **Background:** `#FFFFFF`
- **Text Color:** `#F07057`
- **Font Size:** 16px
- **Font Weight:** 400
- **Font Family:** Plus Jakarta Sans
- **Padding:** 5px 20px 5px 20px
- **Border Radius:** 16px
- **Border:** 1px solid `#F07057`
- **Height:** 32px
- **Box Shadow:** `rgba(0, 80, 163, 0.11) 0px 4px 40px 0px`
- **Hover State:** Background `#FEF3F1`, border stays `#F07057`
- **Active State:** Background `#FCDDD8`
- **Disabled State:** Border `#CCCCCC`, text `#999999`

#### Primary Large Button
- **Background:** `#F07057`
- **Text Color:** `#FFFFFF`
- **Font Size:** 16px
- **Font Weight:** 400
- **Font Family:** Plus Jakarta Sans
- **Padding:** 0px 20px 0px 20px
- **Border Radius:** 16px
- **Border:** 2px solid `#F07057`
- **Height:** 49px
- **Line Height:** 45px
- **Width:** 240px
- **Box Shadow:** `rgba(0, 80, 163, 0.11) 0px 4px 40px 0px`
- **Hover State:** Background `#E85F4F`, border `#E85F4F`
- **Active State:** Background `#D64E39`, border `#D64E39`

#### Tertiary (Ghost) Button
- **Background:** transparent
- **Text Color:** `#0050A3`
- **Font Size:** 16px
- **Font Weight:** 400
- **Font Family:** Plus Jakarta Sans
- **Padding:** 0px 20px 0px 20px
- **Border Radius:** 16px
- **Border:** 2px solid `#0050A3`
- **Height:** 49px
- **Line Height:** 45px
- **Width:** 240px
- **Box Shadow:** `rgba(0, 80, 163, 0.11) 0px 4px 40px 0px`
- **Hover State:** Background `#F0F5FF`, text `#003B7A`
- **Active State:** Background `#E0E8FF`, text `#00286B`

### Cards & Containers

#### Standard Card
- **Background:** `#FFFFFF`
- **Border Radius:** 16px
- **Border:** 1px solid `rgba(167, 167, 167, 0.2)`
- **Padding:** 20px
- **Box Shadow:** `rgba(0, 0, 0, 0.08) 0px 2px 16px 0px`
- **Heading Color:** `#000000`
- **Body Text Color:** `#686868`

#### Featured Card (with accent band)
- **Background:** `#FFFFFF`
- **Border Radius:** 16px
- **Left Border:** 4px solid `#F07057`
- **Padding:** 20px
- **Box Shadow:** `rgba(0, 80, 163, 0.11) 0px 4px 40px 0px`
- **Accent Band Background:** `#FCB900` (top or side 20px wide)
- **Content Padding:** 20px

#### Hero Container
- **Background:** Linear gradient from `#0050A3` (left) to `#0050A3` (right, 60% opacity)
- **Padding:** 56px 32px 56px 32px
- **Min Height:** 320px
- **Border Radius:** 0px (full width)
- **Text Color:** `#FFFFFF`
- **Heading:** `#FFFFFF`

### Inputs & Forms

#### Text Input
- **Background:** `#FFFFFF`
- **Text Color:** `#444444`
- **Font Size:** 16px
- **Font Weight:** 400
- **Font Family:** Plus Jakarta Sans
- **Padding:** 12px 12px 12px 12px
- **Border Radius:** 16px
- **Border:** 1px solid `rgba(167, 167, 167, 0.4)`
- **Height:** 47px
- **Line Height:** normal
- **Box Shadow:** none
- **Placeholder Color:** `#A7A7A7`
- **Focus State:** Border `#0050A3`, outline none, shadow `rgba(0, 80, 163, 0.1) 0px 0px 0px 3px`
- **Error State:** Border `#CF2E2E`, background `#FFFBFB`
- **Disabled State:** Background `#F5F5F5`, border `#CCCCCC`, color `#999999`

#### Textarea
- **Background:** `#FFFFFF`
- **Text Color:** `#444444`
- **Font Size:** 16px
- **Font Weight:** 400
- **Font Family:** Plus Jakarta Sans
- **Padding:** 12px 12px 12px 12px
- **Border Radius:** 16px
- **Border:** 1px solid `rgba(167, 167, 167, 0.4)`
- **Min Height:** 100px
- **Line Height:** 1.5
- **Resize:** vertical
- **Focus State:** Border `#0050A3`, shadow `rgba(0, 80, 163, 0.1) 0px 0px 0px 3px`

#### Form Label
- **Font Family:** Poppins
- **Font Size:** 14px
- **Font Weight:** 600
- **Color:** `#000000`
- **Margin Bottom:** 8px
- **Display:** block

#### Form Error Message
- **Font Size:** 12px
- **Color:** `#CF2E2E`
- **Margin Top:** 4px
- **Font Weight:** 400

### Navigation

#### Top Navigation Bar
- **Background:** `#0050A3`
- **Height:** 64px
- **Padding:** 0px 32px 0px 32px
- **Link Color:** `#FFFFFF`
- **Link Font Size:** 14px
- **Link Font Weight:** 400
- **Link Hover:** Text remains `#FFFFFF`, background `rgba(255, 255, 255, 0.1)`
- **Active Link:** Border bottom 2px solid `#F07057`

#### Dropdown Menu
- **Background:** `#FFFFFF`
- **Border Radius:** 8px
- **Border:** 1px solid `#E8E8E8`
- **Box Shadow:** `rgba(0, 0, 0, 0.16) 0px 5px 40px 0px`
- **Padding:** 8px 0px 8px 0px
- **Menu Item Padding:** 12px 20px 12px 20px
- **Menu Item Color:** `#686868`
- **Menu Item Hover:** Background `#F5F5F5`, color `#000000`

### Badges & Tags

#### Badge Default
- **Background:** `#F07057`
- **Text Color:** `#FFFFFF`
- **Font Size:** 12px
- **Font Weight:** 600
- **Padding:** 4px 12px 4px 12px
- **Border Radius:** 8px
- **Border:** none
- **Display:** inline-block

#### Badge Outline
- **Background:** transparent
- **Text Color:** `#F07057`
- **Font Size:** 12px
- **Font Weight:** 600
- **Padding:** 4px 12px 4px 12px
- **Border Radius:** 8px
- **Border:** 1px solid `#F07057`

## 5. Layout Principles

### Spacing System

**Base Unit:** 4px

**Scale:**
- 4px — Micro spacing (icon margins, tight element pairing)
- 8px — Tight spacing (adjacent element spacing, small component padding)
- 12px — Small spacing (form field padding, button internal space)
- 16px — Standard spacing (default element margin, section gutters)
- 20px — Comfortable spacing (card padding, component separation)
- 32px — Generous spacing (section margins, container horizontal padding)
- 52px — Large section spacing (between major content blocks)
- 56px — Extra-large section spacing (hero sections, page transitions)
- 100px — Jumbo spacing (hero to content separation)
- 120px — Massive spacing (page section breaks)

**Usage Context:**
- Interior component padding: 12px–20px
- Between small elements: 8px–16px
- Between cards or sections: 32px–52px
- Page margins and container padding: 32px (mobile), 56px (desktop)
- Vertical rhythm between H2 and body text: 16px

### Grid & Container

**Max Width:** 1440px (desktop); 100% (mobile/tablet)

**Column Strategy:** 12-column grid with 32px gutters (desktop), 16px gutters (tablet), 16px gutters (mobile)

**Section Patterns:**
- Full-width hero: No max-width constraint, full viewport width
- Content sections: Max 1200px, centered, padding 32px horizontal
- Two-column layout: 50%/50% split on desktop, stacked on mobile
- Three-column layout: 33.33%/33.33%/33.33% on desktop, stacked below 768px
- Sidebar + main: 25% sidebar + 75% content, swap proportions for narrower screens

### Whitespace Philosophy

Generous whitespace creates breathing room and elevates Pennyu's professional positioning. Each major section is separated by 56px–120px of vertical space, preventing cognitive overload. Within components, padding ranges from 12px (tight forms) to 56px (hero sections), establishing a clear hierarchy of importance. Horizontal margins maintain 32px minimum on desktop, 16px on mobile, ensuring content never feels cramped. This philosophy reinforces trust and clarity—hallmarks of the B2B/consumer sanitation sector.

### Border Radius Scale

- **0px** — Full-width sections, banners, no rounding
- **8px** — Badges, small UI elements, secondary components
- **16px** — Buttons, inputs, cards, standard interactive elements
- **24px** — Large cards, hero sections with rounded corners
- **50px** — Fully rounded (circular buttons, avatar containers)

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (L0) | No shadow | Neutral backgrounds, disabled states, secondary text |
| Raised (L1) | `rgba(0, 0, 0, 0.08) 0px 2px 16px 0px` | Standard cards, mild elevation |
| Floating (L2) | `rgba(0, 80, 163, 0.11) 0px 4px 40px 0px` | Buttons, active inputs, interactive elements |
| Modal (L3) | `rgba(0, 0, 0, 0.16) 0px 5px 40px 0px` | Modals, overlays, maximum prominence |
| Focus (L1-Focus) | `rgba(0, 80, 163, 0.1) 0px 0px 0px 3px` (outline style) | Focus rings on inputs |

**Shadow Philosophy:** Shadows in Pennyu's system are subtle and purposeful, rarely exceeding 0.16 opacity. The blue-tinted shadow (`#0050A3` at 11% opacity) on interactive elements subtly reinforces brand identity. Layers build progressively—flat backgrounds provide stability, raised cards indicate grouping, and modal shadows create clear separation. This restraint maintains a clean, professional aesthetic while preserving hierarchy and usability.

## 7. Do's and Don'ts

### Do
- **Use Coral (#F07057) for primary CTAs** — Reserve this bold accent for actions you want users to take (download, submit, purchase)
- **Pair Blue (#0050A3) with Coral** — These two colors create high contrast and brand recognition; use together in navigation and hero sections
- **Maintain 32px+ horizontal padding** — Prevent content from feeling cramped; ensure comfortable reading on all viewport sizes
- **Apply 16px rounded corners to interactive elements** — Buttons, inputs, and cards should feel approachable and modern
- **Use Poppins (700 weight) for all headings** — Maintains strong visual hierarchy and brand consistency
- **Stack content vertically with 56px+ gaps** — Create clear, breathable sections that guide users through information
- **Employ Plus Jakarta Sans at 16px for body text** — Ensures excellent legibility for long-form content and descriptions
- **Test color contrast ratios** — Ensure WCAG AA compliance (4.5:1 for text) across all text-background combinations
- **Use the blue-tinted shadow on interactive elements** — Subtly reinforces brand and indicates interactivity

### Don't
- **Mix Coral and Blue in close proximity without spacing** — These dominant colors compete; separate with whitespace or neutral colors
- **Use shadows larger than `0px 5px 40px 0px`** — Excessive shadows flatten the professional aesthetic
- **Set button padding below 12px or above 20px** — Maintains hand-friendly touch targets and visual consistency
- **Apply border radii smaller than 8px** — Risks appearing harsh and outdated; 16px is the minimum for modern interactive elements
- **Override line heights below 1.4x font size** — Compact line heights harm readability, especially for Indonesian text
- **Use text colors other than black, gray, or white on neutral backgrounds** — Reduces accessibility and visual clarity
- **Nest more than two font weights** — Stick to 400 (regular) and 700 (bold) to avoid visual chaos
- **Apply more than one shadow to a single element** — Multiple shadows create visual confusion; choose one shadow level
- **Reduce button height below 32px on desktop, 44px on mobile** — Touch targets become unreliable
- **Use warning or error colors for emphasis** — Reserve `#FCB900` and `#CF2E2E` for their semantic purposes only

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | 320px–479px | Single column, 16px margins, stacked navigation, 32px button height, 14px heading text |
| Small Tablet | 480px–767px | Single column, 16px margins, simplified header, full-width cards |
| Tablet | 768px–1023px | 2 columns for appropriate layouts, 24px margins, tablet-optimized nav (slide-out drawer or tabs) |
| Small Desktop | 1024px–1439px | 3-column grids available, 32px margins, standard nav bar visible |
| Desktop | 1440px+ | Full 3-column layouts, max-width container (1200px content), 56px+ margins, all features visible |

### Touch Targets

- **Minimum interactive element size:** 44px × 44px (mobile), 32px × 32px (desktop)
- **Button minimum:** 44px height on mobile, 32px on desktop
- **Link minimum:** 24px × 24px touch area (can use padding around text)
- **Icon buttons:** 40px × 40px on mobile, 32px × 32px on desktop
- **Form inputs:** 47px height minimum (includes padding and border)

### Collapsing Strategy

**Navigation:**
- Desktop (1024px+): Horizontal top bar with dropdown menus
- Tablet (768px–1023px): Hamburger menu with slide-out drawer, 80% viewport width
- Mobile (320px–767px): Full-width slide-out drawer from left, dismissible with overlay

**Grid Layouts:**
- 3 columns → 2 columns at 1024px
- 2 columns → 1 column at 768px
- Always stack to 1 column below 480px

**Hero Section:**
- Desktop: Image on right, text on left (2 columns), padding 56px
- Tablet: Image scales down or becomes background overlay, padding 40px
- Mobile: Image as background at reduced height, text overlaid or below, padding 20px

**Cards:**
- Desktop: Full product cards with images (200px height)
- Tablet: Reduced image height (150px) or aspect ratio adjustment
- Mobile: Compact card layout, image 100% width, text below

**Button Sizing:**
- Desktop: Standard buttons (32px height, 240px width for large CTAs)
- Tablet: Full-width or 80% width for major CTAs
- Mobile: Full-width buttons (100%), minimum 44px height

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA:** Coral (`#F07057`) — Use for primary buttons and hero highlights
- **Secondary CTA:** Blue (`#0050A3`) — Use for navigation and tertiary actions
- **Background:** White (`#FFFFFF`) — Default surface for cards and containers
- **Text Primary:** Black (`#000000`) — Headings and emphasis
- **Text Body:** Dark Gray (`#686868`) — Standard paragraph text
- **Text Secondary:** Medium Gray (`#8E8E8E`) — Captions and reduced emphasis
- **Text Muted:** Light Gray (`#A7A7A7`) — Placeholder and disabled states
- **Error State:** Red (`#CF2E2E`) — Validation failures and alerts
- **Warning State:** Yellow (`#FCB900`) — Cautionary messages
- **Success State:** Green (`#7BDCB5`) — Confirmation and positive feedback
- **Accent Teal:** Teal (`#AADDDD`) — Subtle hover states and secondary accents
- **Surface Light:** Off-White (`#F5F5F5`) — Secondary background for differentiation
- **Border Color:** Light Gray with opacity (`rgba(167, 167, 167, 0.4)`) — Input and card borders

### Iteration Guide

1. **Typography First:** Use Poppins 700 for all headings (H1: 53px, H2: 48px, H3: 32px, H4: 20px); Plus Jakarta Sans 400 for body (16px) and links (14px). Do not deviate—consistency drives brand recognition.

2. **Color Hierarchy:** Establish visual hierarchy using Coral (#F07057) for primary actions, Blue (#0050A3) for navigation/secondary, and Gray scale (#000000 → #A7A7A7) for content layers. Never use both Coral and Blue on the same button.

3. **Spacing Discipline:** Apply 32px horizontal padding on desktop (16px on mobile), 56px vertical gaps between sections, and 16px padding inside cards. Whitespace is your friend—never cram content.

4. **Button Consistency:** All buttons must have 16px border radius, minimum 32px height (desktop) or 44px (mobile), and use the blue-tinted shadow (`rgba(0, 80, 163, 0.11) 0px 4px 40px 0px`). Primary buttons: Coral background + white text. Secondary buttons: White background + Coral border. Tertiary buttons: Transparent + Blue border.

5. **Input Styling:** Forms use 16px rounded corners, 12px padding, 1px subtle gray border (`rgba(167, 167, 167, 0.4)`), and focus state with Blue outline (`#0050A3` border + shadow). Error states: `#CF2E2E` border + light red background (`#FFFBFB`).

6. **Card Elevation:** Standard cards use `rgba(0, 0, 0, 0.08) 0px 2px 16px 0px` shadow; interactive elements use `rgba(0, 80, 163, 0.11) 0px 4px 40px 0px`. Modals/overlays: `rgba(0, 0, 0, 0.16) 0px 5px 40px 0px`.

7. **Responsive Collapse:** Stack all 2-3 column layouts to 1 column below 768px. Full-width buttons on mobile (44px minimum height). Hero sections: image right on desktop, background/bottom on mobile.

8. **Accessibility:** Ensure text contrast is ≥4.5:1 (WCAG AA). Use semantic HTML (`<button>`, `<input>`, `<label>`). Focus indicators must be visible (`3px` outline at `rgba(0, 80, 163, 0.1)`). Test with keyboard navigation.

9. **Brand Voice in Motion:** Hover states should be subtle—darken Coral by ~10% (#E85F4F), lighten Blue by ~8%, or shift background to `#F5F5F5`. No transitions longer than 300ms. Maintain professionalism; avoid playful animations in this sector.

10. **Quality Check:** Before launch, verify all headings are Poppins 700, body text is Plus Jakarta Sans 400/16px, spacing is consistent in multiples of 4px, all interactive elements are ≥44px touch targets, and color contrast meets WCAG AA. Use this checklist as your final gate.