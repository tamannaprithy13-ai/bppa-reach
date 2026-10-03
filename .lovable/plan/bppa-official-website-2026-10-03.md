# BPPA Official Website

## Goal
Build a polished, bilingual, frontend-only website for the Bangladesh Para Pickleball Association using the supplied logo and a restrained sports-federation visual system. All unverified organizational information will remain clearly labeled as sample or pending confirmation.

## Pages and navigation
- Create dedicated routes for Home, About BPPA, Para Pickleball, Athletes, Events, News & Media, Contact, and Accessibility Statement.
- Add a shared responsive header/footer, desktop and mobile navigation, language switcher, skip link, breadcrumbs on inner pages, and a tailored 404 page.
- Give every content route unique English/Bangla-aware metadata, descriptions, Open Graph fields, and self-referencing canonical paths.

## Visual direction
- Use the uploaded BPPA logo unchanged, with dark green, white, lime, and neutral editorial tones.
- Build a confident federation-style layout: strong typography, disciplined grids, restrained borders, minimal rounding, and selective motion.
- Create a small cohesive set of respectful adaptive-sports images for the homepage and content pages; keep the logo as the exact supplied asset.
- Support mobile, tablet, laptop, and wide desktop without horizontal overflow or oversized first screens.

## Content architecture
- Define typed bilingual content models and local data for navigation, programs, events, athletes, news, partners, and shared page copy.
- Keep UI components separate from content so a future Django REST API can replace local data without restructuring pages.
- Clearly mark all people, events, achievements, partners, contacts, and organizational details as sample or pending official confirmation.
- Include intentional empty, loading, error, and success presentation components for future data-backed sections.

## Accessibility and interaction
- Build one semantic page landmark, logical headings, labeled controls, visible focus, keyboard-safe navigation, and accessible form validation/status feedback.
- Implement a keyboard-accessible accessibility panel with working text sizing, contrast, grayscale, invert, cursor size, link/heading highlights, reading guide, reduced motion, enhanced focus, normal mode, reset, and the official NVDA download link.
- Persist language for the browser session and accessibility preferences locally; switching language updates all shared controls and page content.
- Make the mobile menu and accessibility panel close on Escape, restore focus, and handle outside clicks appropriately.

## Key page content
- Home: identity-led image hero, concise BPPA/para pickleball introduction, mission and vision, initiatives, sample events, sample athlete highlights, sample news, partner placeholders, and closing action.
- About: mission, vision, objectives, inclusion, governance, and organizational development.
- Para Pickleball: accessible sport overview, participation, environment, equipment, court/accessibility and safety considerations, pathways, and FAQ without invented regulations.
- Athletes, Events, News: bilingual sample directories with filters/search structures and clear prototype labels.
- Contact: placeholder contact details plus a frontend-only validated form with a non-sending success state.
- Accessibility Statement: careful commitment language without claiming certification.

## Verification
- Add route and interaction tests for all pages, language switching, contact validation, and core accessibility settings.
- Check the live preview at desktop and mobile sizes for layout, navigation, focus behavior, accessibility modes, missing media, console errors, and all internal links.
- Confirm the project builds cleanly and retain `robots.txt`; no database, authentication, paid service, CMS, admin, or external API will be added.
