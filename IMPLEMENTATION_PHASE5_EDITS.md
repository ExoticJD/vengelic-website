# Implementation Plan - Phase 5 Edits

This plan outlines the final polish and structural changes for the Vengelic website, focusing on high-end animations, mobile optimization, and brand consistency.

## Phase 1: Structural Rearrangements & Global Styles
- [x] Move `MarketCalculator` above `Testimonials` (Success Gallery) in `src/app/page.tsx`.
- [x] Implement global `pointer` cursor for all clickable elements in `globals.css`.
- [x] Add the new `Open Graph image.png` to the metadata in `layout.tsx`.

## Phase 2: Hero Section & Brand Integration
- [ ] **Hero Text**: Update colors in `Hero.tsx`. "Dominance" & "Impact" to Gold; "&" and other words to Linen.
- [ ] **Hero Button**: Add color-invert hover effect in `Hero.tsx`.
- [ ] **Mobile Hero**: Move `BrandIntegration` (pulse/silhouette animation) above the title on mobile viewports.
- [ ] **Phone Mockup**: Replace the placeholder "V" favicon with the actual brand `Logo` component in `RoadMap.tsx`.

## Phase 3: Navigation & FAQ Overhaul
- [x] **FAQ Modal**: 
    - [x] Create a new `FAQModal.tsx` component.
    - [x] Implement the "Mixed Animation" (Depth Recede, Liquid, Side-Slide, Ink Reveal).
    - [x] Remove the `FAQAccordion` section from the home page.
- [x] **Navbar**:
    - [x] Add "FAQ" button to the desktop menu.
    - [x] Implement the functional **Mobile Hamburger Menu** (right-side slide-in).
    - [x] Integrate the desktop links into the mobile menu.

## Phase 4: Calculator & Comparison Refinements
- [x] **Market Calculator**:
    - [x] Add "Service Business" selection with a standard list.
    - [x] Implement "Other" option with a text input field.
    - [x] Remove the three result cards (Authority Gap, etc.) from Step 3.
- [x] **Visual Comparison**:
    - [x] Change "Traditional" to "Others."
    - [x] Center "Vengelic" above its column.
    - [x] Center "Others" above its column.
    - [x] Center "VS" between columns.
    - [x] Spread columns slightly while maintaining height.

## Phase 5: Road Map & Feature Cards
- [x] **Light Mode**: Increase description contrast for better readability.
- [x] **Dark Mode**: 
    - [x] Update `FeatureCard` containers to match the Espresso background color.
    - [x] Set headers and descriptions to the light Linen color.

## Verification Plan

### Automated Tests
- Run `npm run build` to ensure no TypeScript or build errors.

### Manual Verification
- **FAQ Animation**: Verify the blend of 4 animations works seamlessly on both desktop and mobile.
- **Mobile UX**: Test the new hamburger menu and hero animation placement on various screen sizes.
- **Calculator**: Test the new "Other" business input logic.
- **Comparison**: Verify the labels are perfectly aligned with the columns below them.
