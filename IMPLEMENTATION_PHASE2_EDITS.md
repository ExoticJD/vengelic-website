# IMPLEMENTATION PHASE 2 EDITS

This document tracks the second phase of refinements for the Vengelic website, focusing on navigation consolidation, social proof dynamics, brand integration, and the addition of the animated Road Map.

## Project Status: [IN PROGRESS]

---

## Phase 1: Navigation & Menu Refinement
- [ ] Remove "Contact" tab from the header menu (Consolidating with "Enquire").
- [ ] Rename "Authority" menu item to **"Proof"**.
- [ ] Rename "Services" menu item to **"Road Map"**.
- [ ] Update anchor links to ensure smooth scrolling to the new section IDs.

## Phase 2: Dynamic Social Proof
- [ ] Expand testimonial data structure to support multiple entries.
- [ ] Implement **Auto-Looping Carousel** (One card visible at a time).
- [ ] Configure **4-Second Interval** for transitions.
- [ ] Apply **Fade-In/Fade-Out Animations** using Framer Motion `AnimatePresence`.

## Phase 3: Animated Road Map Section
- [ ] Create new **RoadMap** component to visualize the SEO ranking journey.
- [ ] Implement **Vertical Timeline** design using the Espresso/Gold palette.
- [ ] Apply **Scroll-Triggered Path Animation** (Gold line drawing as the user scrolls).
- [ ] Add **Staggered Step Reveals** for key milestones (e.g., Keyword Dominance → Authority Building → Page 1 Rank).

## Phase 4: Hero Brand Integration
- [ ] Integrate the **Vengelic Gold Logo** into the Hero section's right column.
- [ ] Replace/Integrate with the "Ascent" animation to maintain visual balance.
- [ ] Apply **Primary Color Integration**: Use an `espresso` background container or mask to make the gold logo pop.

## Phase 5: Social Media & Footer
- [ ] Update footer icons to include **Facebook, Instagram, X (Twitter), and LinkedIn**.
- [ ] Implement external profile links (URLs provided by user).
- [ ] Ensure icons maintain the minimalist "Quiet Luxury" aesthetic.

---

## Design Specifications & Animation Logic
- **Transitions:** All fades to use `duration: 0.8` with `ease: [0.16, 1, 0.3, 1]`.
- **Roadmap Logic:** Trigger animations when 50% of the section is in view.
- **Color Palette:** Maintain strict adherence to Linen (#F0E5D5) and Espresso (#432616) with Gold highlights for the Logo and Roadmap Path.
