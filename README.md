# Kevin C Philipose — Portfolio (Orbit-style)
Next.js 16 · TypeScript · Tailwind v4 · Framer Motion

## Preview instantly
Open PREVIEW-open-me.html in any browser.

## Contact info wired in
- Email: kevincphilipose2004@gmail.com
- Instagram: @iamkwinn

## ★ KEVIN'S PHOTO — one step, no code
Save as exactly:
    public/portrait.jpg     (Next.js app)
    portrait.jpg            (beside PREVIEW-open-me.html)
Becomes the parallax HERO BACKGROUND automatically.

## ★ LOGOS
Drop into public/logos/ then set the `logo` field per company in app/companies.ts.
PARENT.logo is currently `undefined` (KS initials shown) — set it once you have a Kwin logo file.

## Run
npm install && npm run dev

## Animations (desktop + mobile)
- Full-screen parallax hero, typed rotating roles, floating orbs, scroll cue
- Nav: transparent-over-hero → frosted on scroll; ANIMATED HAMBURGER + slide-down menu on mobile
- Scroll progress bar
- Section headings: underline grows in
- About: two columns slide in from opposite sides
- Ventures: cards pop in staggered, spring hover-lift
- Group: org-chart children stagger in, spring hover
- Journey: numbered nodes + accent line that draws in as you scroll
- Recognition: featured award + achievement list slide in from opposite sides, list items stagger
- Contact: two columns slide in, card hover-lift
- Quote band: parallax background
- Everything respects prefers-reduced-motion
