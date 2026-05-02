# IMPLEMENTATION PHASE 3 EDITS

This document tracks the third phase of refinements for the Vengelic website, focusing on premium animation micro-interactions, geolocation-based personalization, and a complete re-engineering of the Road Map section using custom code for maximum fidelity.

## Project Status: [PLANNING]

---

## Phase 1: Visual Identity & Brand Polish
- [ ] **Favicon Re-Design**: Recreate the storefront + gold location pin icon.
    - [ ] Remove silhouettes of people.
    - [ ] Ensure high-resolution, vector-like quality (non-blurry).
    - [ ] Implement with a transparent background.
- [ ] **Open Graph (OG) Image**: (Final Step) Create and implement a premium social sharing preview image.

## Phase 2: Premium Global Animations
- [ ] **Magnetic Buttons**: Implement magnetic hover effects on all primary CTAs for a tactile, high-end feel.
- [ ] **Smooth Scroll Progress**: Add a subtle, minimalist progress bar at the top of the viewport to track reading progress.
- [ ] **Subtle Text Reveals**: Implement staggered word-by-word or line-by-line entrance animations for key headings.
- [ ] **Interactive Hover States**: Refine existing hover states with soft glow effects and smooth transitions.

## Phase 3: Personalized UX & Social Proof
- [ ] **Dynamic City Indicator**:
    - [ ] Integrate a geolocation API (e.g., ipapi.co) to detect the user's city.
    - [ ] Add a location icon and text ("Serving [City]") under the top-left Vengelic button.
- [ ] **Social Proof Fix**: 
    - [ ] Resolve the overlapping lines on the second-to-last social proof element.
    - [ ] Audit all testimonial cards for responsive text-wrapping issues.

## Phase 4: Road Map Re-Engineering (Code-Based)
- [ ] **Custom Phone Mockup**: Re-create the provided "Google Search" phone interface using pure HTML/CSS.
- [ ] **Feature Cards**: Build the three feature blocks (Profile Optimization, Authority Building, Custom Design) using the brand's layout.
- [ ] **Parallax Image Shift**: Implement a subtle tilt/parallax effect on the phone mockup relative to mouse movement.
- [ ] **Entrance Animations**: Animate the cards and phone elements as the section scrolls into view.

## Phase 5: Copywriting & Content Strategy
- [ ] **Tone Shift**: Rewrite all site copy to be "Result-Driven" and "Business-Friendly."
    - [ ] Replace technical SEO jargon with simple, high-impact wording.
    - [ ] Focus on the "Problem -> Solution -> ROI" framework for business owners.
- [ ] **Hierarchy Polish**: Ensure headings and subheadings clearly communicate the value proposition in 3 seconds or less.

---

## Design Specifications & Animation Logic
- **Magnetic Force**: `strength: 0.3` for a subtle "pull" rather than a jump.
- **Parallax Factor**: `lerp: 0.1` for buttery smooth phone tilting.
- **Scroll Progress**: Use a thin (2px) bar in Gold (#D4AF37) with a slight glow.
- **Color Palette**: Strictly maintain Linen (#F0E5D5), Espresso (#432616), and Gold highlights.
- **Typography**: Ensure all text remains legible and properly weighted for business readability.
