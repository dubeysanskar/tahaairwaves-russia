# DEVELOPMENT CHANGELOG — Taha Airwaves Russia Website

> Full record of every change made during the UI/UX overhaul.
> This file serves as a complete audit trail for future reference.
> Date: March 21–22, 2026

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
All copied from `tahafrontend/public/images/partners/` → `/public/images/partners/`:
- `1.png`, `1111.png`, `1234.png`
- `245361195_1121051235093790_4685913069255081052_n.jpg`
- `CFB-Large-Small-1.png`, `Clip-path-group-1.png`
- `DESERT_DEVELOPMENT_CONTRACTING_COMPANY-Logo-header.webp`
- `Logo-560x357.jpg`, `RealLogo.png`
- `Saudi_Ministry_of_Health_Logo.svg.png`
- `alrajhi-bank.png`, `cLklTgs-_400x400.jpg`
- `header-logo.svg`, `logo-03-e1672981302803.png.webp`
- `logo-almabani.png`, `logo-removebg-preview.png`
- `logo.png`, `logo.webp`, `logo_light.png`, `small-2.png`

### Service & Blog Images (17 files)
Copied from `tahafrontend/public/service and blog/` → `/public/service-and-blog/` (spaces replaced with hyphens):
- `Cleaners.jpeg`, `Cleaners2.jpeg`
- `drivers.jpeg`
- `General-labours.jpeg`
- `Loading-unloading-workers.jpeg`, `Loading-unloading-workers2.jpeg`
- `Factory-helpers.jpeg`, `Factory-helpers2.jpeg`
- `Barista-workers.jpeg`
- `Packers-workers.jpeg`
- `Immigration-clearance.jpeg`, `Immigration-clearance2.jpeg`
- `Document-attestation.jpeg`
- `Hajj-umrah-travell-service.jpeg`, `Hajj-umrah-travell-service2.jpeg`
- `employe-outsourcing-.jpeg`, `Employee-outsourcing2.jpeg`

### General Images (15 files)
Copied from `tahafrontend/public/images/` → `/public/images/`:
- `hero-bg-new.png` — Hero background
- `world-map.png` — Footer background overlay
- `hospitality.png` — Industry image
- `healthcare.png` — Industry image
- `oil-gas.png` — Industry image
- `it-telecom.png` — Industry image
- `retail-fmcg.png` — Industry image
- `facility-management.png` — Industry image
- `demo4.jpeg` — Hero slide 2 / Construction
- `demo5.jpeg` — Hero slide 3 / Logistics
- `demo7.jpeg` — Manufacturing industry
- `about-story.png` — About page
- `services-banner.png` — Services page banner
- `contact-banner.png` — Contact page banner
- `blog-banner.png` — Blog page banner

---

## PHASE 2: FOUNDATION CHANGES

### File: `src/app/globals.css`
**Changed**: Color variables updated from Willow Casa theme to Taha Airwaves theme
```css
/* BEFORE */
--color-primary-brown: #1a0a10;
--color-cream: #FFF0F2;

/* AFTER */
--color-primary: #8E0935;
--color-secondary: #BC264B;
--color-neutral: #FDFBEF;
--color-dark: #1a0a10;
```

### File: `.env.local`
**Created**: Environment variables for Gemini AI chatbot and SMTP contact form
- `GEMINI_API_KEY` — Google Gemini 2.0 Flash API key
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` — Gmail SMTP for contact form
- `CONTACT_EMAIL` — info@tahaairwaves.com
- `NEXT_PUBLIC_SITE_URL` — https://tahaairwaves.ru

### File: `src/app/layout.js`
**Changed**:
1. Added `import Chatbot from "@/components/chatbot"`
2. Updated favicon paths from `/favicon.png` to proper `/favicon.ico`, `/favicon-16x16.png`, `/favicon-32x32.png`
3. Added `apple: '/apple-touch-icon.png'`
4. Added `<Chatbot />` component after `<Footer />`

---

## PHASE 3: COMPONENT CHANGES

### File: `src/components/header/index.jsx` — COMPLETE REWRITE
**Before**: Willow Casa style header
**After**: Taha Airwaves header with:
- Top info bar (desktop only) — email, phone, 5 social links
- Logo image (`LOGO-WHITE.png`) instead of text
- All 5 social links: Facebook, Instagram, LinkedIn, X/Twitter, WhatsApp
- Non-sticky navbar (relative position, no scroll effect)
- Exact colors: dark bg `#1a0a10`, text `#FDFBEF`, accents `#8E0935`/`#BC264B`
- Mobile menu with slide-in animation
- Contact Us button styled as rounded-full pill

### File: `src/components/footer/index.jsx` — COMPLETE REWRITE
**Before**: Willow Casa style footer
**After**: Taha Airwaves footer with:
- 5-column grid: Brand, Quick Links, Our Services, Our Offices, Contact
- Logo image (`LOGO-WHITE.png`)
- World map background overlay (`/images/world-map.png`)
- All 5 social links with hover effects
- All 5 offices: Delhi, Noida, Jeddah, Moscow, Dubai
- RA License badge on same line (not wrapping): `B-3260/DEL/COM/100/5/11259/2025`
- Bottom marquee strip: "Taha Airwaves — Where Talent Meets Reliability"
- Dark bg `#1a0a10`

### File: `src/components/home/hero/index.jsx` — COMPLETE REWRITE
**Before**: Static hero
**After**: Auto-sliding hero with:
- 3 background images: `hero-bg-new.png`, `demo4.jpeg`, `demo5.jpeg`
- Auto-advance every 5 seconds with crossfade
- Two-line heading: Line 1 in `#FDFBEF`, Line 2 italic in `#BC264B`
- Stats bar at bottom: 5000+ DEPLOYED, 11+ COUNTRIES, 20+ YEARS
- Slide indicators (clickable dots)
- Two CTA buttons: "Our Services" (filled), "Get in Touch" (outlined)
- Service number indicator (01, 02, 03) on desktop right

### File: `src/components/home/industries-we-serve/index.jsx` — COMPLETE REWRITE
**Before**: Placeholder content
**After**: 9 industries with real images:
- Construction (`demo4.jpeg`), Hospitality (`hospitality.png`), Logistics (`demo5.jpeg`)
- Healthcare (`healthcare.png`), Manufacturing (`demo7.jpeg`), Facility Management (`facility-management.png`)
- Oil & Gas (`oil-gas.png`), IT & Telecom (`it-telecom.png`), Retail & FMCG (`retail-fmcg.png`)
- Hover effect: overlay changes from black to primary color, description slides up
- Grid layout: 2 cols mobile, 3 cols desktop

### File: `src/components/home/countries-we-serve/index.jsx` — COMPLETE REWRITE
**Before**: Placeholder flags
**After**: 11 real country flags from flagcdn.com:
- UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain, Jordan, Egypt, Russia, Mauritius, Malaysia
- Dual marquee rows (opposing directions)
- Flag cards with hover: border highlight + WhatsApp overlay
- Click opens WhatsApp with pre-filled message for that country
- Stats cards: 11+ Countries, 5000+ Deployed, GCC Primary Market

### File: `src/components/home/partners/index.jsx` — COMPLETE REWRITE
**Before**: Placeholder partner logos
**After**: 20 real partner logos from tahafrontend:
- Infinite marquee animation (40s loop)
- Grayscale by default → color on hover
- Scale up on hover
- Edge fade gradients
- Pause on hover

### File: `src/components/home/blog-preview/index.jsx` — COMPLETE REWRITE
**Before**: Links to `/blog` (generic)
**After**: 3 blog cards linking to individual `/blog/[slug]` pages
- Dark section background `#1a0a10`
- "View All Articles" button links to `/blog`
- Cards show category, date, title, excerpt, "Read More" with arrow

### File: `src/components/home/cta/index.jsx` — REWRITE
**Before**: Gradient background `bg-gradient-to-br from-[#1a0a10] to-[#2a1018]`
**After**: Flat solid color `background: #8E0935`
- Added WhatsApp button alongside Contact button
- Removed gradient, ambient orbs simplified

### File: `src/components/about/about-main/index.jsx` — MODIFIED
**Changes**:
1. Background changed from `#f7f4ef` → `#FDFBEF`
2. Stats text changed from gradient `bg-gradient-to-br bg-clip-text text-transparent` → flat `color: '#8E0935'`
3. Company info section background changed from gradient → flat `#FDFBEF`

### File: `src/components/services/services-main/index.jsx` — COMPLETE REWRITE
**Before**: 5 generic services with no links to detail pages
**After**: 11 services from tahafrontend, each linking to `/services/[slug]`:
- Cleaners, All Types of Drivers, General Labour, Loading & Unloading Workers
- Factory Helpers, Barista Workers, Packing Workers
- Emigration & Immigration Clearance, Document Attestation
- Hajj & Umrah Travel, Employee Outsourcing
- Grid: 1 col mobile, 2 cols tablet, 3 cols desktop
- Each card has emoji icon, title, description, "Learn More →"

### File: `src/components/blog/blog-main/index.jsx` — COMPLETE REWRITE
**Before**: 6 blog cards with no links to individual articles
**After**: 6 blog cards linking to `/blog/[slug]`:
- Imports from shared `@/data/blog-posts` module
- Background changed to `#FDFBEF`
- Cards styled with exact colors

### File: `src/components/contact/contact-main/index.jsx` — COMPLETE REWRITE
**Before**: Basic contact form
**After**: Full contact page with:
- Contact form with name, email, phone, service dropdown (11 services), message
- Form submits to `/api/contact` (SMTP)
- Direct contact sidebar: phone, email, WhatsApp (dark card)
- Social links with branded colors (Facebook blue, Instagram pink, etc.)
- 5 office location cards (Delhi, Noida, Jeddah, Moscow, Dubai) — each links to Google Maps
- Google Maps iframe embed

---

## PHASE 4: NEW FILES CREATED

### File: `src/components/faq-accordion/index.jsx` — NEW
FAQ accordion component with expand/collapse animation for service detail pages.

### File: `src/app/services/[slug]/page.js` — COMPLETE REWRITE
Dynamic service detail page with all 11 slugs. Each page has:
- Hero section with service image
- "About This Service" section with intro + detail + secondary image
- "What We Provide" — types grid with checkmarks
- "Industries We Serve" — pill-style tags
- "Our Process" — numbered step cards
- "Why Choose Taha Airwaves" — dark benefits section
- FAQ Accordion
- CTA section with "Get a Quote" + "WhatsApp Us" buttons
- `generateStaticParams()` and `generateMetadata()` for SSG + SEO

### File: `src/data/blog-posts.js` — NEW
Shared blog data module (plain JS, no 'use client') containing all 6 blog articles with full content. Imported by both client (blog-main) and server (blog/[slug]/page.js) components.

### File: `src/app/blog/[slug]/page.js` — NEW
Blog detail page that renders full article content with:
- Dark hero with category badge, date, read time
- Content renderer (handles **bold**, bullet lists, headings)
- CTA section at bottom
- `generateStaticParams()` and `generateMetadata()` for SSG + SEO

### File: `src/components/chatbot/index.jsx` — NEW
Floating AI chatbot component:
- Toggle button (bottom-right, pulsing animation)
- Chat panel with messages, auto-scroll
- Quick reply suggestions (first 2 messages only)
- Markdown rendering (bold, italic, lists)
- Loading dots animation
- Sends to `/api/chat`

### File: `src/app/api/chat/route.js` — NEW
Gemini 2.0 Flash chatbot API:
- System prompt with all services, countries, contact info, company details
- Falls back to contact info if API key not configured
- Model: `gemini-2.0-flash`
- Temperature: 0.7, maxOutputTokens: 500

### File: `src/app/api/contact/route.js` — REWRITE
SMTP contact form API:
- Dynamic import of nodemailer
- Falls back to console.log if SMTP not configured
- Sends HTML email with all form fields

### File: `PROJECT_SOP.md` — NEW
10-section Standard Operating Procedure covering complete project context.

### File: `README.md` — REWRITE
Full project documentation with tech stack, setup, structure, colors, fonts, slugs.

### File: `.env.local` — REWRITE
Real credentials copied from tahafrontend:
- Gemini API key
- SMTP credentials (Gmail/Google Workspace)
- Resend API key (backup)
- Notification emails

---

## PHASE 5: BUG FIXES

### Bug: Blog detail pages not opening
**Cause**: `BLOG_POSTS` was defined inside a `'use client'` component and exported. Server component `blog/[slug]/page.js` couldn't import it properly.
**Fix**: Extracted blog data to `src/data/blog-posts.js` (no 'use client' directive), imported by both components.

### Bug: Build failing with `BLOG_POSTS.map is not a function`
**Cause**: Same client/server import issue.
**Fix**: Same as above — shared plain JS module.

### Bug: Service images not loading
**Cause**: tahafrontend used folder name `service and blog` (with spaces). Next.js public folder paths don't handle spaces well.
**Fix**: Copied files to `/public/service-and-blog/` with hyphens replacing spaces.

---

## VERIFICATION

### Build Test
```
npx next build
→ Exit code: 0 ✅
→ All static params generated (11 service slugs, 6 blog slugs)
→ No compilation errors
```

### GitHub Push
```
git push -u origin main --force
→ Repository: github.com/dubeysanskar/tahaairwaves-russia
→ Branch: main
→ Commit: "Complete UI/UX overhaul: non-sticky navbar, 11 service pages, chatbot, SOP docs"
```

---

## COMPLETE FILE LIST OF CHANGES

| File | Action | Description |
|---|---|---|
| `src/app/globals.css` | Modified | Color variables |
| `src/app/layout.js` | Modified | Chatbot + favicons |
| `.env.local` | Created | API keys + SMTP |
| `.gitignore` | Existing | Already had context exclusions |
| `README.md` | Rewrite | Full documentation |
| `PROJECT_SOP.md` | New | Comprehensive SOP |
| `src/components/header/index.jsx` | Rewrite | Logo, socials, non-sticky |
| `src/components/footer/index.jsx` | Rewrite | 5 offices, world-map, license |
| `src/components/home/hero/index.jsx` | Rewrite | 3 bg images, auto-slide |
| `src/components/home/industries-we-serve/index.jsx` | Rewrite | 9 real images |
| `src/components/home/countries-we-serve/index.jsx` | Rewrite | 11 flags, marquees |
| `src/components/home/partners/index.jsx` | Rewrite | 20 real logos |
| `src/components/home/blog-preview/index.jsx` | Rewrite | Links to /blog/[slug] |
| `src/components/home/cta/index.jsx` | Rewrite | Flat color, WhatsApp |
| `src/components/about/about-main/index.jsx` | Modified | Flat colors |
| `src/components/services/services-main/index.jsx` | Rewrite | 11 services |
| `src/components/blog/blog-main/index.jsx` | Rewrite | Shared data import |
| `src/components/contact/contact-main/index.jsx` | Rewrite | 5 offices, form, map |
| `src/components/faq-accordion/index.jsx` | New | FAQ component |
| `src/components/chatbot/index.jsx` | New | AI chatbot |
| `src/app/services/[slug]/page.js` | Rewrite | 11 service detail pages |
| `src/app/blog/[slug]/page.js` | New | Blog detail pages |
| `src/app/api/chat/route.js` | New | Gemini API |
| `src/app/api/contact/route.js` | Rewrite | SMTP API |
| `src/data/blog-posts.js` | New | Shared blog data |
| `public/LOGO.png` | Copied | Dark logo |
| `public/LOGO-WHITE.png` | Copied | White logo |
| `public/favicon.ico` + others | Copied | Favicons |
| `public/images/partners/*` | Copied | 20 partner logos |
| `public/service-and-blog/*` | Copied | 17 service images |
| `public/images/*` | Copied | 15 general images |
