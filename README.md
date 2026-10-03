# BPPA Reach

Build a premium, professional, international-standard official website for the Bangladesh Para Pickleball Association (BPPA).

This is a fresh project. Do NOT copy or clone an existing website. Create a new, polished, scalable implementation from scratch while following the requirements below.

The website should represent BPPA professionally to athletes, persons with disabilities, sports organizations, international federations, partners, sponsors, media, and the general public.

IMPORTANT:
Use the uploaded BPPA logo as the official branding reference.

Follow the official BPPA visual identity:
- Dark green
- White
- Lime green
- Clean neutral supporting tones where necessary

Do not alter, redraw, distort, or replace the BPPA logo.

==================================================
1. PRIMARY GOAL
==================================================

Create a modern international sports-association website that feels:

- Professional
- Credible
- Inclusive
- Accessible
- Modern
- Clean
- International
- Trustworthy
- Scalable
- Easy to maintain

The design should feel like a serious sports federation/association website, NOT a generic sports template, gaming website, charity template, or overly colorful startup landing page.

Avoid excessive gradients, excessive glassmorphism, excessive rounded cards, unnecessary animations, visual clutter, and decorative effects that reduce professionalism.

Use strong editorial layouts, clear typography, strong hierarchy, quality imagery, consistent spacing, and the BPPA brand colors.

The design must work equally well on desktop, tablet, and mobile.

==================================================
2. CONTENT ACCURACY — VERY IMPORTANT
==================================================

This is an initial frontend prototype.

Do NOT invent official:
- Leadership names
- Executive committee members
- Athlete achievements
- Rankings
- International affiliations
- Government recognition
- Federation recognition
- Sponsors
- Partners
- Championships
- Tournament results
- Statistics
- Contact information
- Addresses
- Social media accounts
- Organizational history
- Official claims

If official information is not available, use clearly marked placeholder/demo content such as:

"Sample Content — Pending Official Confirmation"

or

"Official information will be published after confirmation."

The website must never present fictional information as official BPPA information.

Structure the content so all placeholder content can easily be replaced later.

==================================================
3. TECHNOLOGY
==================================================

Use a modern, maintainable frontend architecture.

Preferred stack:

- React
- TypeScript
- Tailwind CSS
- Semantic HTML
- Component-based architecture
- Accessible UI components
- Responsive design

If the Lovable environment supports TanStack Start/file-based routing reliably, use it appropriately. Otherwise use the most stable React routing architecture supported by the environment.

Avoid unnecessary dependencies.

Write clean, modular, understandable code.

The code should be suitable for a developer who will later study the implementation and recreate the project manually.

Use reusable components instead of duplicating markup.

==================================================
4. FUTURE SCALABILITY
==================================================

The current release must be frontend-only.

DO NOT connect:
- Database
- Authentication
- Paid APIs
- Backend
- Payment system
- External CMS
- Admin panel

However, architect the frontend so that a backend/CMS can be added later without rebuilding the entire website.

Future backend target:

- Python
- Django
- Django REST Framework
- PostgreSQL

Future CMS/admin functionality should eventually support:

- News management
- Events management
- Athlete profiles
- Programs
- Media/gallery
- Partners
- Pages
- Bilingual content
- Image uploads
- Draft/publish workflow
- Role-based admin access

For the current prototype, use well-structured typed local data modules that can later be replaced by API data.

==================================================
5. WEBSITE STRUCTURE
==================================================

Create the following main routes:

1. Home
2. About BPPA
3. Para Pickleball
4. Athletes
5. Events
6. News & Media
7. Contact

Also create:

8. Accessibility Statement
9. 404 / Not Found page

Use a consistent global site shell.

==================================================
6. HEADER / NAVIGATION
==================================================

Create a professional responsive header containing:

- BPPA logo
- Main navigation
- English / বাংলা language switcher
- Accessibility Menu button

Desktop:
- Clean horizontal navigation

Mobile:
- Accessible hamburger menu
- Proper keyboard navigation
- Proper focus handling
- Menu opens/closes correctly
- Escape closes the menu
- Focus should behave logically

Navigation links:

Home
About BPPA
Para Pickleball
Athletes
Events
News & Media
Contact

Do not overcrowd the header.

The header should remain visually professional when scrolling.

If a sticky header is used, make sure it never hides focused content.

==================================================
7. BILINGUAL SUPPORT
==================================================

The website must support:

English
বাংলা

English is the default language.

Create a visible language switcher.

Changing language should update the entire interface, not only a few headings.

Translate:

- Navigation
- Buttons
- Headings
- Labels
- Form fields
- Accessibility controls
- Footer
- Static page content
- Event interface
- News interface
- Relevant UI messages

Use a proper bilingual content structure.

For example:

{
  en: "...",
  bn: "..."
}

News and event content should also be structured with separate English and Bangla fields.

Do NOT rely on an external automatic translation widget.

Use placeholder Bangla content where official Bengali translations are not yet available, but clearly structure it so verified translations can replace it later.

Language preference should persist during the browser session.

==================================================
8. HOME PAGE
==================================================

Create a strong international-standard homepage.

The homepage should include:

A. Hero Section
- Strong BPPA identity
- Clear statement about para pickleball
- Professional adaptive-sports imagery
- Short supporting text
- Primary CTA
- Secondary CTA

Possible CTA structure:

"Discover Para Pickleball"
"Explore BPPA"

Do not make unsupported claims.

The hero should immediately communicate:

Who BPPA is
What para pickleball is
Why the organization exists

B. About BPPA
- Short introduction
- Mission
- Vision
- Link to full About page

C. Para Pickleball
- Explain the sport in an accessible way
- Who can participate
- Inclusive participation
- Equipment/context
- Link to full page

D. Programs / Initiatives
Use structured cards or editorial blocks.

Possible placeholder categories:

- Athlete Development
- Training & Participation
- Awareness & Inclusion
- Community Programs

Clearly mark content as sample if not officially confirmed.

E. Events
- Upcoming events
- Event cards
- Date
- Location
- Status
- View details

F. Athlete Highlights
Use respectful athlete presentation.

Do not invent real achievements.

G. News & Media
- Latest news
- Announcements
- Media highlights

H. Partners / Supporting Organizations
Use placeholders only until official partners are confirmed.

I. Strong closing CTA

J. Professional footer

==================================================
9. ABOUT BPPA PAGE
==================================================

Create sections for:

- About BPPA
- Mission
- Vision
- Objectives
- Inclusion
- Governance
- Organizational development

Use placeholder/demo labels where official content is unavailable.

Do not fabricate governance structures.

The page should feel like an official association profile.

==================================================
10. PARA PICKLEBALL PAGE
==================================================

Create a dedicated educational page explaining para pickleball.

Include:

- What is Para Pickleball?
- Inclusive participation
- Who may participate
- Basic playing environment
- Equipment overview
- Court/environment considerations
- Accessibility considerations
- Participation pathways
- Safety considerations
- FAQ

Do not invent official classification rules, eligibility rules, international regulations, or governing-body policies.

If information is not officially confirmed, label it accordingly.

Use accessible diagrams/visual explanations only when accurate.

==================================================
11. ATHLETES PAGE
==================================================

Create a professional athlete directory structure.

Include:

- Athlete cards
- Profile photo
- Name
- Category/classification field where officially applicable
- Short biography
- Achievements
- Profile page structure

For the prototype, use clearly labeled sample athletes.

Do NOT imply that sample athletes are actual BPPA athletes.

Use respectful person-first/inclusive presentation.

Avoid tokenistic imagery.

==================================================
12. EVENTS PAGE
==================================================

Create a professional event listing.

Include:

- Upcoming events
- Past events
- Event cards
- Date
- Location
- Status
- Event type
- Details page structure

Add useful filtering/search structure if appropriate.

Use sample events only and clearly label them as demo/sample.

Design the data structure so future CMS/API data can replace the sample data.

==================================================
13. NEWS & MEDIA PAGE
==================================================

Create a professional media/news section.

Include:

- News
- Announcements
- Press/media
- Photo/video/media area
- Search/filter structure where appropriate

Each article should support:

- English title
- Bangla title
- English summary
- Bangla summary
- English body
- Bangla body
- Date
- Featured image
- Category
- Author/source field

Do not invent real news.

Use clearly marked sample articles.

==================================================
14. CONTACT PAGE
==================================================

Create a professional contact page.

Include:

- Contact information placeholders
- Address placeholder
- Email placeholder
- Phone placeholder
- Social media placeholders
- Contact form

The current form must be frontend-only.

It should NOT actually send emails.

Implement:

- Proper labels
- Required-field validation
- Error messages
- Success state
- Accessible status messages
- Keyboard accessibility

Clearly indicate that the form is a prototype if necessary.

==================================================
15. ACCESSIBILITY — HIGH PRIORITY
==================================================

Accessibility must be part of the core website architecture, not just an accessibility menu.

Design toward WCAG 2.2 AA best practices.

Do NOT claim official WCAG certification.

Implement:

- Semantic HTML
- Correct heading hierarchy
- One appropriate H1 per page
- Landmark elements
- Header
- Navigation
- Main
- Footer
- Buttons as buttons
- Links as links
- Proper form labels
- Accessible error messages
- Accessible status messages
- Keyboard navigation
- Visible keyboard focus
- Skip-to-main-content link
- Logical tab order
- Meaningful link text
- Accessible button names
- Proper alt text
- Empty alt for decorative images
- Sufficient color contrast
- Do not communicate information through color alone
- Reduced-motion support
- Responsive text resizing
- No unnecessary horizontal scrolling
- Focus should never be hidden behind sticky elements
- Native HTML semantics before ARIA
- Appropriate ARIA only when necessary

==================================================
16. ACCESSIBILITY MENU
==================================================

Create a dedicated, clearly visible Accessibility Menu.

The button must have an accessible name such as:

"Accessibility Options"

The menu itself must be fully keyboard accessible.

Implement these controls:

1. Increase Text
2. Decrease Text
3. Reset Text
4. High Contrast
5. Grayscale / Monochrome
6. Invert Colors
7. Default / Normal Mode
8. Big Cursor
9. Normal Cursor
10. Highlight Links
11. Highlight Headings
12. Reading Guide
13. Reduce Motion
14. Enhanced Focus Indicator
15. Reset All Accessibility Settings
16. Download Screen Reader

All controls must actually work.

Do NOT create decorative buttons that do nothing.

Accessibility settings should persist using localStorage where appropriate.

Reset All must return the website to its default visual/accessibility state.

The Accessibility Menu itself must support:

- Keyboard access
- Enter/Space activation
- Escape to close
- Visible focus
- Proper ARIA
- Logical focus behavior
- Outside click close where appropriate
- No inaccessible focus trap

==================================================
17. SCREEN READER DOWNLOAD
==================================================

Inside the Accessibility Menu, include:

"Download Screen Reader"

This should link to the official NV Access NVDA download page.

Open external resources safely in a new tab where appropriate.

Do NOT use an outdated direct installer URL.

Do not imply that NVDA is the only screen reader.

Label the link clearly, for example:

"Download NVDA Screen Reader"

==================================================
18. READING GUIDE
==================================================

The Reading Guide must be functional.

It should provide a horizontal visual guide that helps users track the current reading line/area.

It should:

- Follow pointer movement where appropriate
- Work without interfering with normal interaction
- Not block buttons/links
- Be disabled when turned off
- Respect reduced-motion preferences

Do not implement it merely as a decorative overlay.

==================================================
19. ACCESSIBILITY VISUAL MODES
==================================================

Implement accessibility modes carefully.

High Contrast:
Increase contrast while preserving usability.

Grayscale:
Convert visual content to grayscale.

Invert Colors:
Provide an invert mode.

Normal Mode:
Return to default.

These modes should not unnecessarily conflict with one another.

If multiple modes are enabled, define predictable behavior.

==================================================
20. RESPONSIVE DESIGN
==================================================

Design mobile-first.

Test layouts for:

- Small mobile phones
- Large mobile phones
- Tablets
- Laptops
- Large desktop screens

Avoid:

- Horizontal overflow
- Broken cards
- Overlapping text
- Tiny buttons
- inaccessible mobile menus
- oversized hero sections
- content hidden behind fixed elements

Touch targets should be appropriately sized.

==================================================
21. TYPOGRAPHY
==================================================

Use professional modern typography.

Ensure the chosen fonts support both:

English
Bangla

Typography must remain readable at increased text sizes.

Do not rely on thin/light font weights for essential content.

Maintain strong hierarchy between:

H1
H2
H3
Body
Labels
Buttons
Metadata

==================================================
22. IMAGES
==================================================

Use high-quality, respectful adaptive-sports and pickleball imagery.

Images should represent:

- Inclusion
- Athletes
- Para sport
- Pickleball
- Community
- Professional sport

Avoid stereotypical or pity-based disability imagery.

Use descriptive alt text for meaningful images.

Use empty alt text for purely decorative images.

Optimize images for performance.

Use lazy loading where appropriate.

Do not use random unrelated stock photography just to fill space.

==================================================
23. DESIGN SYSTEM
==================================================

Create a consistent design system.

Primary:

Dark Green

Secondary:

Lime Green

Base:

White

Supporting:

Neutral gray tones

Use consistent:

- Spacing
- Typography
- Buttons
- Cards
- Borders
- Focus states
- Form controls
- Section headings
- Badges
- Icons

Do not overuse rounded cards.

Use a professional balance of sharp and moderately rounded elements.

Maintain consistent visual rhythm.

==================================================
24. MOTION
==================================================

Use motion sparingly.

Animations should:

- Support understanding
- Improve interaction feedback
- Feel professional
- Never distract

Respect:

prefers-reduced-motion

When Reduce Motion is enabled, disable or minimize non-essential animation.

==================================================
25. SEO
==================================================

Implement a strong SEO foundation.

Each page should have:

- Unique title
- Meta description
- Proper heading hierarchy
- Semantic structure
- Descriptive URLs
- Open Graph-ready metadata structure
- Social sharing metadata structure
- Canonical URL structure where appropriate

Create SEO metadata for both:

English
Bangla

Do not make unsupported SEO claims.

Prepare structure for:

- sitemap
- robots.txt
- structured metadata where appropriate

==================================================
26. PERFORMANCE
==================================================

Prioritize fast loading.

Avoid:

- unnecessary libraries
- huge images
- excessive JavaScript
- unnecessary animations
- duplicate components
- unnecessary network requests

Use:

- optimized images
- lazy loading
- reusable components
- efficient rendering
- appropriate code splitting where supported

==================================================
27. ERROR / EMPTY / LOADING STATES
==================================================

Every dynamic-looking section should have appropriate states.

Include structures for:

- Loading
- Empty
- Error
- Success

Examples:

No events available
No news available
No athlete profile available
Content unavailable
Page not found

These should look intentional and professional.

==================================================
28. 404 PAGE
==================================================

Create a professional 404 page.

Include:

- Clear message
- Short explanation
- Return Home button
- Useful navigation

Do not show a generic browser error.

==================================================
29. ACCESSIBILITY STATEMENT
==================================================

Create an Accessibility Statement page.

It should explain:

- BPPA's commitment to accessible digital experiences
- Accessibility features available on the website
- Keyboard accessibility
- Accessibility menu
- Language support
- Contact placeholder for accessibility feedback

Do not claim full compliance or certification unless officially verified.

Use wording such as:

"This website is being developed with accessibility as a core requirement and is designed toward WCAG 2.2 AA best practices."

==================================================
30. FOOTER
==================================================

Create a professional footer containing:

- BPPA logo
- Short organization description
- Navigation
- Accessibility link
- Contact placeholder
- Social media placeholders
- Copyright
- Language switcher if useful

Do not invent social media accounts.

==================================================
31. COMPONENT ARCHITECTURE
==================================================

Create reusable components such as:

- SiteHeader
- MobileNavigation
- SiteFooter
- LanguageSwitcher
- AccessibilityMenu
- SkipToContent
- HeroSection
- SectionHeading
- PageIntro
- Button
- Card
- NewsCard
- EventCard
- AthleteCard
- EmptyState
- LoadingState
- ErrorState
- Breadcrumbs where appropriate

Avoid duplicating UI code across pages.

==================================================
32. CONTENT ARCHITECTURE
==================================================

Create typed local data structures for:

- Navigation
- Pages
- Events
- Athletes
- News
- Programs
- Partners

Use bilingual fields.

Example:

{
  title: {
    en: "...",
    bn: "..."
  }
}

This architecture must make it easy to replace local data with future API responses.

==================================================
33. FUTURE CMS READINESS
==================================================

Although there is no CMS now, organize the code so that future CMS integration is straightforward.

Future entities may include:

- Site settings
- Pages
- News
- Events
- Athletes
- Programs
- Media
- Partners
- Contact information

Do not tightly couple the UI directly to hardcoded content.

Separate:

UI components
Content/data
Types/interfaces
Configuration
Utilities

==================================================
34. SECURITY-MINDED FRONTEND
==================================================

Even though this is frontend-only:

- Never expose secrets
- Never hardcode future API keys
- Never include fake credentials
- Do not add unnecessary third-party scripts
- Treat future external content as untrusted
- Structure forms safely
- Avoid unsafe HTML injection

==================================================
35. INTERNATIONAL PRESENTATION
==================================================

The website should look appropriate for presentation to:

- International para-sports organizations
- Pickleball organizations
- Athletes
- Coaches
- Sponsors
- Media
- Development partners
- Government/institutional stakeholders
- General public

The design should communicate organizational seriousness without pretending that BPPA already has international recognition or affiliations that have not been officially confirmed.

==================================================
36. DO NOT DO THESE THINGS
==================================================

Do NOT:

- Copy another website
- Clone the previous BPPA prototype
- Invent official information
- Invent athlete achievements
- Invent sponsors
- Invent affiliations
- Invent rankings
- Invent awards
- Invent contact information
- Use fake statistics as real statistics
- Use inaccessible components
- Add accessibility buttons that do nothing
- Overuse animations
- Overuse gradients
- Overuse glassmorphism
- Make the site look like a gaming website
- Make it childish
- Make it look like a generic template
- Add unnecessary dependencies
- Add a backend in this phase
- Add authentication in this phase
- Add payment systems
- Add unnecessary external APIs

==================================================
37. CODE QUALITY
==================================================

Code should be:

- Clean
- Modular
- Readable
- Well organized
- Reusable
- Strongly typed
- Accessible
- Maintainable

Use clear naming conventions.

Avoid giant components.

Keep page components focused.

Create reusable utilities/hooks where appropriate.

Add comments only where they improve understanding.

==================================================
38. QA / VERIFICATION
==================================================

Before considering the project complete, verify:

ROUTES:
- Home works
- About works
- Para Pickleball works
- Athletes works
- Events works
- News & Media works
- Contact works
- Accessibility Statement works
- 404 works

LANGUAGE:
- English works
- Bangla works
- Language switching updates the complete UI
- Language preference persists

ACCESSIBILITY:
- Keyboard navigation works
- Skip link works
- Focus indicators are visible
- Mobile menu is keyboard accessible
- Accessibility menu is keyboard accessible
- Every accessibility control works
- Text resizing works
- High contrast works
- Grayscale works
- Invert colors works
- Big cursor works as far as browser capabilities allow
- Highlight links works
- Highlight headings works
- Reading Guide works
- Reduce Motion works
- Enhanced Focus works
- Reset works
- NVDA external link works

RESPONSIVE:
- Mobile
- Tablet
- Desktop
- Large desktop

Check for:
- horizontal overflow
- broken layouts
- overlapping content
- inaccessible controls
- unreadable text
- hidden focus

FORMS:
- labels
- validation
- errors
- success state
- keyboard accessibility

TECHNICAL:
- No runtime errors
- No console errors
- No broken internal links
- No missing images
- No broken routes
- No unnecessary warnings
- No duplicate inaccessible controls

==================================================
39. FINAL DESIGN DIRECTION
==================================================

The final website should feel like:

A serious, modern, inclusive national para-sports association preparing for professional public and international presentation.

Think:

"Sports Federation + Accessibility + Modern Editorial Design"

NOT:

"Generic sports landing page"

NOT:

"Charity website"

NOT:

"Gaming website"

NOT:

"Template website"

Use confidence, whitespace, strong typography, photography, clear information hierarchy, and restrained BPPA branding.

The final result should be visually impressive without becoming flashy.

==================================================
40. IMPORTANT FINAL INSTRUCTION
==================================================

Build this as a fresh BPPA project from scratch.

Do not clone or reproduce any previous BPPA website.

Use the uploaded BPPA logo and official color direction as the branding foundation.

Prioritize:

1. Professionalism
2. Accessibility
3. Content accuracy
4. Responsive design
5. Scalability
6. Maintainability
7. Bilingual support
8. Performance
9. SEO
10. Future CMS/backend readiness

The first release must remain frontend-only, but the architecture must be ready for a future Django + Django REST Framework + PostgreSQL backend and content management system.

Before finishing, perform a complete visual, responsive, accessibility, navigation, language-switching, and runtime QA pass and fix issues found.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7572ac2f-aad9-4214-8562-3cd657ea3f96).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
