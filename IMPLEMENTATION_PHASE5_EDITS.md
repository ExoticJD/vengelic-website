# Implementation Plan - Phase 5 Edits

This plan outlines the final polish and structural changes for the Vengelic website, focusing on high-end animations, mobile optimization, and brand consistency.

## Phase 1: Structural Rearrangements & Global Styles
- [ ] Move `MarketCalculator` above `Testimonials` (Success Gallery) in `src/app/page.tsx`.
- [ ] Implement global `pointer` cursor for all clickable elements in `globals.css`.
- [ ] Add the new `Open Graph image.png` to the metadata in `layout.tsx`.

## Phase 2: Hero Section & Brand Integration
- [ ] **Hero Text**: Update colors in `Hero.tsx`. "Dominance" & "Impact" to Gold; "&" and other words to Linen.
- [ ] **Hero Button**: Add color-invert hover effect in `Hero.tsx`.
- [ ] **Mobile Hero**: Move `BrandIntegration` (pulse/silhouette animation) above the title on mobile viewports.
- [ ] **Phone Mockup**: Replace the placeholder "V" favicon with the actual brand `Logo` component in `RoadMap.tsx`.

## Phase 3: Navigation & FAQ Overhaul
- [ ] **FAQ Modal**: 
    - Create a new `FAQModal.tsx` component.
    - Implement the "Mixed Animation" (Depth Recede, Liquid, Side-Slide, Ink Reveal).
    - Remove the `FAQAccordion` section from the home page.
- [ ] **Navbar**:
    - Add "FAQ" button to the desktop menu.
    - Implement the functional **Mobile Hamburger Menu** (right-side slide-in).
    - Integrate the desktop links into the mobile menu.

## Phase 4: Calculator & Comparison Refinements
- [ ] **Market Calculator**:
    - Add "Service Business" selection with a standard list.
    - Implement "Other" option with a text input field.
    - Remove the three result cards (Authority Gap, etc.) from Step 3.
- [ ] **Visual Comparison**:
    - Change "Traditional" to "Others."
    - Center "Vengelic" above its column.
    - Center "Others" above its column.
    - Center "VS" between columns.
    - Spread columns slightly while maintaining height.

## Phase 5: Road Map & Feature Cards
- [ ] **Light Mode**: Increase description contrast for better readability.
- [ ] **Dark Mode**: 
    - Update `FeatureCard` containers to match the Espresso background color.
    - Set headers and descriptions to the light Linen color.

## Verification Plan

### Automated Tests
- Run `npm run build` to ensure no TypeScript or build errors.

### Manual Verification
- **FAQ Animation**: Verify the blend of 4 animations works seamlessly on both desktop and mobile.
- **Mobile UX**: Test the new hamburger menu and hero animation placement on various screen sizes.
- **Calculator**: Test the new "Other" business input logic.
- **Comparison**: Verify the labels are perfectly aligned with the columns below them.
