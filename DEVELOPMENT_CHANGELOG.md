# DEVELOPMENT CHANGELOG — Taha Airwaves Russia Website

> Full record of every change made during the UI/UX overhaul.
> This file serves as a complete audit trail for future reference.
> Date: March 21–24, 2026

---

## SESSION OVERVIEW

**Objective**: Build a new website for Taha Airwaves' Russian deployment by combining:
- **UI/UX design** from the Willow Casa website (`the-willow-casa-main`)
- **Content, data & assets** from the original Taha Airwaves website (`tahafrontend`)

**Color requirements**: Exact flat colors only (NO gradients):
- Primary: `#8E0935` (Viva Magenta)
- Secondary: `#BC264B` (Secondary Burgundy)
- Neutral: `#FDFBEF` (Cloud Dancer)
- Dark: `#1a0a10`

**Repository**: https://github.com/dubeysanskar/tahaairwaves-russia

---

## PHASE 1: ASSET MIGRATION

### Logos & Favicons Copied
- `LOGO.png` → `/public/LOGO.png`
- `LOGO-WHITE.png` → `/public/LOGO-WHITE.png`
- `favicon.ico` → `/public/favicon.ico`
- `android-chrome-192x192.png` → `/public/android-chrome-192x192.png`
- `android-chrome-512x512.png` → `/public/android-chrome-512x512.png`
- `apple-touch-icon.png` → `/public/apple-touch-icon.png`
- `favicon-16x16.png` → `/public/favicon-16x16.png`
- `favicon-32x32.png` → `/public/favicon-32x32.png`
- `site.webmanifest` → `/public/site.webmanifest`

### Partner Logos (20 files)
All copied from `tahafrontend/public/images/partners/` → `/public/images/partners/`

### Service & Blog Images (17 files)
Copied from `tahafrontend/public/service and blog/` → `/public/service-and-blog/`

### General Images (15 files)
Copied from `tahafrontend/public/images/` → `/public/images/`

---

## PHASE 2: FOUNDATION CHANGES

### File: `src/app/globals.css`
Color variables updated from Willow Casa theme to Taha Airwaves theme with Tailwind v4 `@theme inline`.

### File: `.env.local`
Environment variables for Gemini AI chatbot and SMTP contact form.

### File: `src/app/layout.js`
Added Chatbot component, updated favicons.

---

## PHASE 3: INITIAL COMPONENT CHANGES

Complete rewrites of: header, footer, hero, industries-we-serve, countries-we-serve, partners, blog-preview, cta, about-main, services-main, blog-main, contact-main, faq-accordion, chatbot.

New files: `src/data/blog-posts.js`, `src/app/blog/[slug]/page.js`, `src/app/services/[slug]/page.js`, `src/app/api/chat/route.js`, `src/app/api/contact/route.js`.

---

## PHASE 4: BUG FIXES

- Blog detail pages not opening → shared data module
- Build failing with `BLOG_POSTS.map is not a function` → shared plain JS module
- Service images not loading → hyphens replacing spaces in folder name

---

## PHASE 5: RUSSIA-FOCUSED OVERHAUL (March 24, 2026)

### Brand Book Audit
- Read all 16 pages of the Taha Airwaves Brand Book
- Audited current website against brand guidelines
- Identified 50+ gradient usages, navy #03204B usage, and global-focused content

### Key Decisions
1. **Typography**: Keep current fonts (Cormorant Garamond, Lato, Oswald, Poppins) — custom TahaAirwaevs font not suitable for web
2. **Gradients**: Removed from solid UI elements; kept image overlays for readability
3. **Navy #03204B**: Removed from new code, replaced with brand colors
4. **Body background**: White (#FFFFFF) primary, Cloud Dancer (#FDFBEF) for alternating sections

### File: `src/components/header/index.jsx` — COMPLETE REWRITE
**Changes:**
- Background changed from dark `#1a0a10` → solid red `#8E0935` (mega menu)
- Social links: Removed Facebook, Instagram, LinkedIn, X/Twitter → Added VK, Telegram, WhatsApp
- Social icon colors: White (not yellow)
- WhatsApp button: Brand pink `#BC264B` (not green `#25D366`)
- Mobile menu: Red theme matching header

### File: `src/components/home/hero/index.jsx` — COMPLETE REWRITE
**Changes:**
- Background: Dark `#1a0a10` → White `#FFFFFF` with light overlay
- Headings: "DEPLOY GLOBAL" → "WORKFORCE RUSSIA", "SKILLED MANPOWER" → "RELIABLE RECRUITMENT", "TRUSTED PARTNERS" → "TRUSTED EXCELLENCE"
- Taglines: Russia-focused, no "skilled labour" wording
- Stats: "5000+ DEPLOYED, 11+ COUNTRIES, 20+ YEARS" → "500+ WORKERS IN RUSSIA, 2022 RUSSIA OPERATIONS, 20+ YEARS GLOBAL EXPERIENCE"
- New Russia hero background image generated

### File: `src/components/footer/index.jsx` — REWRITE
**Changes:**
- Social links: VK, Telegram, WhatsApp (white icons)
- Offices: Delhi, Noida, Moscow (removed Jeddah, Dubai — Russia focus)
- All office addresses are clickable → open Google Maps in new tab
- Description: Russia-focused text
- Added "Technicians" service link

### File: `src/components/home/cta/index.jsx` — MODIFIED
- Heading: "Ready to Deploy Your Global Workforce?" → "Ready to Build Your Workforce in Russia?"
- Subtitle: "Let's Build Your Workforce Together" → "Manpower Recruitment for Russia"

### File: `src/components/home/home-about/index.jsx` — MODIFIED
- Content: Russia-focused (since 2022, Moscow office, Russia operations team)
- Body text size: `text-sm md:text-base` → `text-base md:text-lg`

### File: `src/components/home/our-strength/index.jsx` — NEW
- New "Our Strength / Key Metrics" section
- 4 metric cards: 500+ Workers in Russia, 2022 Russia Operations, 20+ Years Experience, 50+ Partner Companies
- Animated entrance with Framer Motion
- FDFBEF background with white cards

### File: `src/components/home/testimonial/index.jsx` — REWRITE
- 3 testimonials with country flags (Russia flag × 2, UAE flag × 1)
- Professional quotes about workforce quality and recruitment
- Flags displayed inline with client names
- White background theme

### File: `src/components/home/why-us/index.jsx` — MODIFIED
- "Global Reach" → "Russia Expertise"
- Stats: "11+ Countries" → "500+ in Russia", "Since 2022"
- Description: Russia-focused content, Moscow office mention

### File: `src/components/home/countries-we-serve/index.jsx` — COMPLETE REWRITE
- Removed 11-country flag marquee
- New design: India → Russia deployment pipeline
- India flag card (Sourcing Hub) → Deployment stats (500+) → Russia flag card (Operations)
- Key Russian industries: Construction, Hospitality, Manufacturing, Logistics

### File: `src/components/home/blog-preview/index.jsx` — MODIFIED
- Background: Dark `#1a0a10` → Light `#FDFBEF`
- All text colors adjusted for light background
- Blog titles/content slightly updated for Russia focus

### File: `src/components/home/industries-we-serve/index.jsx` — MODIFIED
- Subtitle: "worldwide" → "in Russia"

### File: `src/app/page.js` — MODIFIED
- Added `OurStrength` section after `HomeAbout`
- Added `Testimonials` section between `Partners` and `BlogPreview`

### File: `PROJECT_SOP.md` — COMPLETE REWRITE
- Updated for Russia-only focus
- Social media: VK, Telegram, WhatsApp
- Professional wording guidelines (no "skilled labour")
- White/light theme rules
- Russia est. 2022, 500+ workers metrics
- Updated component architecture with new sections

### File: `public/images/russia-hero-bg.png` — NEW
- Generated Russia-focused hero background image (Moscow cityscape with professional workers)

---

## VERIFICATION

### Build Test
```
npx next build
→ Exit code: 0 ✅
→ All static params generated (27 pages total)
→ 11 service slugs, 6 blog slugs
→ No compilation errors
```

### Visual Browser Check
- ✅ Header: Solid red background, VK/Telegram/WhatsApp, brand-pink WhatsApp button
- ✅ Hero: White/light theme, Russia-focused content, 500+ stats
- ✅ Our Strength: New metrics section visible
- ✅ Countries: India→Russia pipeline instead of 11-country marquee
- ✅ Testimonials: Country flags displayed
- ✅ Blog: Light theme
- ✅ CTA: Russia-focused text
- ✅ Footer: White social icons, clickable map addresses

---

## COMPLETE FILE LIST OF SESSION 2 CHANGES

| File | Action | Description |
|---|---|---|
| `src/components/header/index.jsx` | Rewrite | Red mega menu, VK/Telegram/WhatsApp |
| `src/components/home/hero/index.jsx` | Rewrite | White theme, Russia content |
| `src/components/footer/index.jsx` | Rewrite | Clickable addresses, white social icons |
| `src/components/home/cta/index.jsx` | Modified | Russia CTA text |
| `src/components/home/home-about/index.jsx` | Modified | Russia-focused content |
| `src/components/home/our-strength/index.jsx` | New | Key metrics section |
| `src/components/home/testimonial/index.jsx` | Rewrite | Flags, Russia testimonials |
| `src/components/home/why-us/index.jsx` | Modified | Russia expertise |
| `src/components/home/countries-we-serve/index.jsx` | Rewrite | India→Russia pipeline |
| `src/components/home/blog-preview/index.jsx` | Modified | Light theme |
| `src/components/home/industries-we-serve/index.jsx` | Modified | Russia subtitle |
| `src/app/page.js` | Modified | Added OurStrength + Testimonials |
| `PROJECT_SOP.md` | Rewrite | Russia-focused SOP |
| `public/images/russia-hero-bg.png` | New | Russia hero background |

---

## PHASE 6: ROUND 2 OVERHAUL (March 24, 2026 — Session 3)

### Language Toggle System
- **NEW** `src/context/language.jsx` — Full RU/EN translations for all sections
- **NEW** `src/components/providers.jsx` — Client-side LanguageProvider wrapper
- Language toggle (`🇬🇧 EN / 🇷🇺 РУ`) in top bar, main nav, and mobile menu
- Russian is **default**, English by toggle
- Updated `layout.js`: LanguageProvider wrapper, `lang="ru"`, cyrillic font subset

### Header — REWRITE
- Background: red `#8E0935` → **black `#1a0a10`** (client request)
- Logo: Always **red `LOGO.png`** (not white/black)
- Language toggle button added (3 locations)
- All nav text from language context

### Hero — COMPLETE REDESIGN
- Background images ONLY animate (crossfade every 5s) — content is static
- 3 new Russia bg images generated (construction, factory, hospitality)
- **Contact form** added on right side (name, email, phone, message)
- Slide indicator dots, stats bar at bottom

### New Sections
- **NEW** `src/components/home/how-it-works/index.jsx` — 4-step process (ported from main site)
- **NEW** `src/components/home/what-we-do/index.jsx` — 4 service cards (ported from main site)
- Both language-aware with `useLanguage()` hook

### About Us Page — REWRITE
- Removed ALL dark `#1a0a10` boxes → white/Cloud Dancer cards
- Stats: 500+ Workers in Russia, 50+ Partners (was 5000+ Deployed, 11+ Countries)
- License card: light background instead of black
- Content: Russia-focused (Moscow operations since 2022)

### Contact Page — REWRITE
- Social links: Facebook/Instagram/LinkedIn/X → **VK/Telegram/WhatsApp**
- Offices: Removed Jeddah & Dubai → only Delhi, Noida, Moscow
- Direct Contact card: white instead of black `#1a0a10`

### Other Updates
- `home-about`, `our-strength`, `cta`, `footer` — all updated with `useLanguage()` hook
- Homepage `page.js` — added WhatWeDo + HowItWorks sections
- `PROJECT_SOP.md` — updated with all round 2 changes

### Verification
```
npx next build → Exit code: 0 ✅ (all pages generated)
```

### Complete File List — Session 3

| File | Action | Description |
|---|---|---|
| `src/context/language.jsx` | New | Full RU/EN language context |
| `src/components/providers.jsx` | New | LanguageProvider wrapper |
| `src/app/layout.js` | Modified | Providers, cyrillic, lang=ru |
| `src/components/header/index.jsx` | Rewrite | Black navbar, red logo, lang toggle |
| `src/components/home/hero/index.jsx` | Rewrite | Bg-only animation, contact form |
| `src/components/home/how-it-works/index.jsx` | New | 4-step process |
| `src/components/home/what-we-do/index.jsx` | New | 4 service cards |
| `src/components/home/home-about/index.jsx` | Modified | Language context |
| `src/components/home/our-strength/index.jsx` | Modified | Language context |
| `src/components/home/cta/index.jsx` | Modified | Language context |
| `src/components/footer/index.jsx` | Rewrite | Red logo, language context |
| `src/components/about/about-main/index.jsx` | Rewrite | White cards, Russia stats |
| `src/components/contact/contact-main/index.jsx` | Rewrite | VK/Telegram/WhatsApp, no Jeddah/Dubai |
| `src/app/page.js` | Modified | Added WhatWeDo + HowItWorks |
| `PROJECT_SOP.md` | Modified | Round 2 updates |
| `public/images/hero-russia-1.png` | New | Construction hero bg |
| `public/images/hero-russia-2.png` | New | Factory hero bg |
| `public/images/hero-russia-3.png` | New | Hospitality hero bg |
