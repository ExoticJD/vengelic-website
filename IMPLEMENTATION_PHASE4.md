# IMPLEMENTATION_PHASE4: Vengelic Authority Refinements

This plan outlines the updates for the Vengelic website to enhance interaction, clarify messaging, and strengthen brand authority.

## Phase 1: Foundation & Brand Identity
- [ ] **Hero Section Updates**
    - [ ] Change CTA button text to "GET FREE CONSULTATION".
    - [ ] Integrate the provided image as the official OpenGraph (OG) image for social sharing.
- [ ] **Navigation Expansion**
    - [ ] Add "ABOUT" link to the top Navbar (triggers the About Us modal).

## Phase 2: High-Interaction Components
- [ ] **FAQ Section Enhancements**
    - [ ] Add 2 new FAQs focusing on ROI and Market Capture.
    - [ ] Implement `onMouseEnter` / `onMouseLeave` hover reveal for answers.
    - [ ] Ensure mobile compatibility (keep click-to-reveal for touch).
- [ ] **Road Map Section Updates**
    - [ ] Update 3rd card description: *"We build your digital presence to turn website visitors into potential clients, even if you don't already have one."*
    - [ ] **Icon Animations:**
        - [ ] MapPin: Implement a "jump/bounce" animation.
        - [ ] Shield: Implement a "diagonal shimmer/glint" effect.
        - [ ] Globe: Implement a "slow cinematic rotation."

## Phase 3: Forms & Modal Architecture
- [ ] **Consultation & Inquiry Form**
    - [ ] Change Modal Header to "Free Consultation".
    - [ ] Change Submit Button text to "Submit Application".
    - [ ] Update Website input: Change type to `text` and implement flexible validation (allows `domain.com` without `https://`).
    - [ ] Add "Application Processing" micro-interaction/loading state upon submission.
- [ ] **Footer Legal & Story Modals**
    - [ ] Implement simplified "About Us" modal text.
    - [ ] Implement simplified "Privacy" modal text.
    - [ ] Implement simplified "Terms" modal text.

## Phase 4: Authority Building
- [ ] **Visual Comparison Table**
    - [ ] Design and implement a high-fidelity "Vengelic vs. Traditional SEO" table.
    - [ ] Focus on visual impact and clear value differentiation.

---

## Technical Considerations
- **Animations:** Primarily using Framer Motion for consistent, premium movement.
- **Validation:** Custom regex for the website field to handle various domain formats.
- **State Management:** Reusing/Expanding the `ModalContext` to handle multiple footer modals.

## Open Questions & Notes
- **OG Image:** I will need the local path to the image provided in the chat to move it into the `/public` directory.
- **Comparison Table Content:** I will draft the specific comparison points (e.g., "Generic Traffic" vs. "Revenue Intent") during implementation.
