# Teglgaard Wood - Complete Build Plan

## Overview

This document captures all requirements for the Teglgaard Wood website rebuild, including technical architecture, content strategy, SEO plan, and integrations.

---

## 1. Core Positioning

**Tagline:** "Your Professional Christmas Tree Partner"

**Key Messages:**
- 250,000 Christmas trees annually
- 50 years in the industry (1976-2026)
- Full production team in Denmark
- European grower network
- Partnering with best logistics providers
- Flexible delivery: FTL or mixed loads to UK, Germany, France

**Trust Signals:**
- 50 years experience
- 250,000 trees/year capacity
- Estimated 10+ million trees exported over 50 years
- Day-to-day delivery capability to key markets

**What We DON'T Have:**
- Certifications (don't mention)
- Largest team (say "great production team" not "biggest")

---

## 2. Branding

### Logo
- Keep existing Silva Green branch icon
- Add "50 Years" anniversary badge for 2026
- Text: "Teglgaard Wood" (replacing Silva Green)

### Colors
```css
Primary Green: #2D5A3D
Primary range: #f0f4f1 → #172d20
Accent: To be defined
Background: White / Light gray
Text: Dark gray / Black
```

### Typography
- Font: Inter (clean, professional, widely supported)

---

## 3. Site Architecture

### Primary Navigation
```
[Logo + 50yr badge] | Products | Services | About | Contact | [🇬🇧 EN ▼] | ☎ +45 40 73 70 78
```

### Page Structure

```
/                           Homepage
/products                   Products overview
/products/christmas-trees   Christmas tree catalog
/products/greenery          Decorative greenery catalog
/services                   Our services & capabilities
/about                      Company & leadership
/contact                    Contact form + details
/quote                      Smart quote request (chatbot-style)

/da/...                     Danish versions
/de/...                     German versions  
/fr/...                     French versions

/articles                   SEO content hub
/articles/[slug]            Individual articles
```

### Footer Pages
```
/privacy                    Privacy policy
/terms                      Terms of service
/cookies                    Cookie policy
```

---

## 4. Homepage Specification

### Header (Sticky)
- Logo with 50-year badge (left)
- Navigation: Products | Services | About | Contact
- Language selector (EN/DA/DE/FR)
- Phone number: +45 40 73 70 78 (always visible)

### Hero Section
```
Background: High-quality image of premium Nordmann fir trees

HEADLINE:
Wholesale Christmas Trees
& Decorative Greenery

SUBLINE:
250,000 trees annually. Production team in Denmark.
Delivering to retailers across Europe.

BUTTONS:
[View Products]  [Request Quote]
```

### Products Section (2 cards)
```
┌─────────────────────────┐  ┌─────────────────────────┐
│ Christmas Trees         │  │ Decorative Greenery     │
│ [Quality tree image]    │  │ [Greenery image]        │
│                         │  │                         │
│ Nordmann · Noble ·      │  │ Noble fir · Nordmann ·  │
│ Fraser · Spruce         │  │ Cypress · Spruce        │
│                         │  │                         │
│ All sizes 1m - 7m+      │  │ Bundles & bulk          │
│ [View Range →]          │  │ [View Range →]          │
└─────────────────────────┘  └─────────────────────────┘
```

### Why Teglgaard Wood (4 columns)
```
┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ [Icon]      │ │ [Icon]      │ │ [Icon]      │ │ [Icon]      │
│ Production  │ │ European    │ │ Reliable    │ │ 50 Years    │
│ Team        │ │ Network     │ │ Logistics   │ │ Experience  │
│             │ │             │ │             │ │             │
│ Experienced │ │ Growers     │ │ Best-in-    │ │ Since 1976  │
│ team on     │ │ across      │ │ class       │ │ 10M+ trees  │
│ the ground  │ │ Europe      │ │ partners    │ │ exported    │
└─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘
```

### Delivery Coverage
```
"Delivering to retailers across Europe"

[Simple map or flag icons]

🇩🇪 Germany  🇫🇷 France  🇬🇧 United Kingdom  🇳🇱 Netherlands  🇧🇪 Belgium  🇩🇰 Denmark

Full truck loads · Mixed loads · Day-to-day delivery · Flexible scheduling
```

### Contact CTA
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Ready to discuss your requirements?                        │
│                                                             │
│  ☎ +45 40 73 70 78          ✉ info@teglgaardwood.dk        │
│                                                             │
│  [Get a Quote →]                                            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Footer
```
Products              Services              Company
- Christmas Trees     - Production          - About Us
- Greenery            - Logistics           - Leadership
                      - Private Label       - Contact

Teglgaard Wood ApS
Rugårdsvej 784, 5462 Morud, Denmark
CVR: 38689622

☎ +45 40 73 70 78
✉ info@teglgaardwood.dk

[LinkedIn icon]

© 2026 Teglgaard Wood ApS
Privacy · Terms · Cookies
```

---

## 5. Products Pages

### /products/christmas-trees

**Sections:**
1. Hero: "Premium Christmas Trees for European Retailers"
2. Species grid (Nordmann, Noble, Fraser, Norway Spruce, others on request)
3. Size chart (100-150cm through 250cm+, large specimens to 7m)
4. Quality grades (Premium, A-Grade, Standard) with clear descriptions
5. Packaging (netting, pallets, custom labeling, private label)
6. CTA: Request pricing

### /products/greenery

**Sections:**
1. Hero: "Fresh Decorative Greenery"
2. Products (Noble fir, Nordmann, Cypress varieties, Spruce)
3. Applications (wreaths, cemetery, commercial decorating)
4. Packaging options
5. CTA: Request pricing

---

## 6. Services Page

### /services

**Sections:**
1. "How We Work" - Visual process flow
2. Capabilities:
   - Sourcing (European grower network)
   - Production (team on the ground in Denmark)
   - Quality Control (professional grading)
   - Logistics (best-in-class partners, FTL/mixed, day-to-day delivery)
3. Delivery coverage with map
4. Private label / custom branding options
5. CTA: Contact us

---

## 7. About Page

### /about

**Sections:**
1. Who We Are - Brief professional intro
2. Our Approach - Quality, partnerships, flexibility
3. Leadership Team:
   - **Michael Teglgaard** - Founder & Director (50 years in industry)
   - **Rasmus Teglgaard** - Board Member
   - **Asger Teglgaard** - Board Member, Operations & Technology
   (Professional photos, brief bios)
4. Company facts (Teglgaard Wood ApS, CVR, location, established)
5. 50 Years milestone callout

---

## 8. Contact Page

### /contact

**Sections:**
1. Main contact info (prominent):
   - Phone: +45 40 73 70 78
   - Email: info@teglgaardwood.dk
2. Contact form (see Form Specification below)
3. Address with map embed
4. Business hours

---

## 9. Smart Quote Form / Lead Capture

### /quote (or modal from any page)

**Intelligent Multi-Step Form:**

```
Step 1: What do you need?
[ ] Christmas Trees
[ ] Decorative Greenery
[ ] Both

Step 2: Delivery location
[Dropdown: Country]
[Text: City/Region]

Step 3: Volume
[Dropdown: Estimated quantity]
- Under 1,000 trees
- 1,000 - 5,000 trees
- 5,000 - 10,000 trees
- 10,000 - 50,000 trees
- 50,000+ trees
- Greenery (tons): [input]

Step 4: Quality preference
[Dropdown]
- Premium only
- Mixed grades
- Budget-focused
- Not sure yet

Step 5: When do you need delivery?
[Date picker or dropdown: Month/Week]

Step 6: Contact details
[Company name]
[Contact name]
[Email]
[Phone]
[Message (optional)]

[Submit Request]
```

### On Submit:
1. Save to database (operations app backend)
2. Send email notification to:
   - Michael: [his email]
   - Asger: [your email]
3. Push notification to phones (via operations app)
4. Auto-reply email to customer confirming receipt
5. Log in CRM/lead tracking

---

## 10. Backend Integration (Operations App)

### Requirements:

**Lead Capture System:**
- All form submissions stored in database
- Real-time dashboard showing incoming leads
- Notifications:
  - Email to Michael + Asger
  - Push notification to phones
  - In-app notification in operations dashboard

**Data Captured:**
- Timestamp
- Product interest (trees/greenery/both)
- Delivery country/region
- Volume estimate
- Quality preference
- Delivery timing
- Contact info
- Source (which page, UTM params)
- Language/locale

**Future Integration:**
- Link leads to orders
- Track conversion
- Connect to delivery notes system

### Tech Stack for Operations App:
```
apps/ops/
├── Vite + React 19
├── TanStack Router + Query
├── Tailwind CSS 4
├── Hono API backend
├── Drizzle + Neon (Postgres)
└── Push notifications (Firebase or similar)
```

---

## 11. Multi-Language Setup

### Languages:
1. **English (EN)** - Primary, default
2. **Danish (DA)** - Secondary
3. **German (DE)** - Key market
4. **French (FR)** - Key market

### URL Structure:
```
teglgaardwood.dk/           → English (default)
teglgaardwood.dk/da/        → Danish
teglgaardwood.dk/de/        → German
teglgaardwood.dk/fr/        → French
```

### Implementation:
- Astro i18n routing
- Content collections per locale
- hreflang tags for SEO
- Language switcher in header
- Auto-detect browser language (optional)

### Translation Priority:
1. Homepage
2. Products pages
3. Contact page
4. Services
5. About
6. Articles (phase 2)

---

## 12. SEO Strategy

### E-E-A-T Focus (Experience, Expertise, Authoritativeness, Trustworthiness)

**Experience:**
- 50 years in the industry
- Showcase real operations (photos, team)
- Customer testimonials (if available)

**Expertise:**
- Technical articles about Christmas tree industry
- Species guides
- Quality grading explanations
- Logistics/supply chain content

**Authoritativeness:**
- Proper schema markup
- Industry association links
- Clear company information
- Leadership bios with credentials

**Trustworthiness:**
- Physical address
- Phone number
- Clear contact options
- Privacy policy
- Secure site (HTTPS)

### Target Keywords:

**Primary (High intent):**
- christmas tree wholesale
- christmas tree wholesale supplier
- nordmann fir wholesale
- christmas tree exporter denmark
- wholesale christmas trees europe
- christmas tree supplier uk
- christmas tree supplier germany
- christmas tree supplier france
- decorative greenery wholesale
- noble fir greenery wholesale

**Secondary (Informational):**
- nordmann fir grading
- christmas tree sizes
- christmas tree logistics
- danish christmas tree industry
- christmas tree wholesale prices
- how to buy christmas trees wholesale

### Content Hub (/articles)

**Technical Articles (E-E-A-T builders):**

1. "The Complete Guide to Nordmann Fir Quality Grades"
2. "Christmas Tree Sizes: A Buyer's Guide"
3. "How Christmas Tree Logistics Works: From Denmark to Your Store"
4. "Noble Fir vs Nordmann Fir: Which is Right for Your Market?"
5. "Understanding Christmas Tree Wholesale Pricing"
6. "The Danish Christmas Tree Industry: Why Denmark Leads Europe"
7. "Decorative Greenery for Commercial Use: A Buying Guide"
8. "When to Order Christmas Trees: Wholesale Timing Guide"
9. "Full Truck Load vs Mixed Load: Optimizing Your Christmas Tree Order"
10. "Christmas Tree Storage and Care for Retailers"

**Article Structure:**
- 1,500-2,500 words
- Clear headings (H2, H3)
- Internal links to product/service pages
- External links to authoritative sources
- Author byline (Michael or Asger for credibility)
- Last updated date
- Schema markup (Article)

### Internal Linking Strategy:

```
Homepage
├── Links to: Products, Services, About, Contact
├── Links to: Key articles

Products/Christmas Trees
├── Links to: Species-specific articles
├── Links to: Grading guide article
├── Links to: Services (logistics)
├── Links to: Quote form

Articles
├── Link to relevant product pages
├── Link to related articles
├── Link to contact/quote

Every page
├── Footer links to all main pages
├── CTA linking to contact/quote
```

### Technical SEO:

- XML sitemap (auto-generated)
- robots.txt
- Canonical URLs
- hreflang tags for multi-language
- Schema markup:
  - Organization
  - LocalBusiness
  - Product (on product pages)
  - Article (on articles)
  - BreadcrumbList
- Open Graph tags
- Twitter cards
- Fast page speed (<1.5s LCP)
- Mobile-first design
- Core Web Vitals optimized

---

## 13. Chatbot (Future Enhancement)

### Concept:
Intelligent chat widget that guides visitors through a quote request.

### Flow:
```
Bot: "Hi! I'm here to help you find the right Christmas trees. 
      What are you looking for today?"

Options:
[ Christmas Trees ] [ Decorative Greenery ] [ Both ] [ Just browsing ]

Bot: "Great! Where do you need them delivered?"
[Country dropdown] [City/region input]

Bot: "How many trees are you looking for?"
[Quantity selector]

Bot: "What quality level?"
[Options with brief explanations]

Bot: "When do you need delivery?"
[Date/month selector]

Bot: "Perfect! Let me get your contact details so our team can 
      prepare a quote for you."
[Name, Company, Email, Phone]

Bot: "Thanks [Name]! We've received your request. Our team will 
      be in touch within 24 hours. In the meantime, feel free 
      to call us at +45 40 73 70 78."
```

### Tech Options:
- Custom built (React component)
- Typeform embed
- Tally.so embed
- Chatbot service (Intercom, Drift, etc.)

### Integration:
- Same backend as contact form
- Notifications to Michael + Asger
- Lead tracking

---

## 14. Analytics & Tracking

### Tools:
- Google Analytics 4
- Google Search Console
- Google Tag Manager

### Track:
- Page views
- Form submissions (conversions)
- Quote requests
- Phone clicks
- Email clicks
- Time on page
- Bounce rate
- Traffic sources
- Keyword rankings

### Goals:
1. Quote form submission
2. Contact form submission
3. Phone number click
4. Email click

---

## 15. Hosting & Deployment

### Recommendation: Cloudflare Pages

**Why:**
- Fast global CDN
- Free SSL
- Easy deployment from Git
- Good for static sites (Astro)
- DDoS protection included

**Alternative:** Vercel

### Domain:
- teglgaardwood.dk (primary)
- Set up www redirect
- SSL certificate

---

## 16. Photography Needs

### Required Images:

**Products:**
- Nordmann fir (multiple angles, sizes)
- Noble fir
- Fraser fir
- Norway spruce
- Greenery bundles
- Cypress varieties

**Operations:**
- Production team at work
- Tree grading/selection
- Netting process
- Palletized trees
- Truck loading
- Logistics/delivery

**Team:**
- Michael Teglgaard (professional headshot)
- Rasmus Teglgaard (professional headshot)
- Asger Teglgaard (professional headshot)

**Atmosphere:**
- Danish plantation landscape
- Trees in field
- Seasonal imagery

### Image Specs:
- High resolution (min 2000px wide)
- Landscape orientation for heroes
- Square/portrait for team photos
- Optimized for web (compress before upload)

---

## 17. Development Phases

### Phase 1: Core Website (Priority)
- [ ] Homepage
- [ ] Products pages (trees + greenery)
- [ ] Services page
- [ ] About page
- [ ] Contact page with form
- [ ] Basic quote form
- [ ] English only
- [ ] Mobile responsive
- [ ] Basic SEO (meta tags, sitemap)
- [ ] Analytics setup
- [ ] Deploy to production

### Phase 2: Enhancements
- [ ] Smart multi-step quote form
- [ ] Email notifications on form submit
- [ ] Push notifications (requires ops app)
- [ ] 50-year badge on logo
- [ ] Photography updates

### Phase 3: Multi-Language
- [ ] Danish translation
- [ ] German translation
- [ ] French translation
- [ ] Language switcher
- [ ] hreflang setup

### Phase 4: Content & SEO
- [ ] Article hub structure
- [ ] First 5 articles
- [ ] Internal linking
- [ ] Schema markup
- [ ] Search console monitoring

### Phase 5: Operations App Integration
- [ ] Lead capture backend
- [ ] Real-time dashboard
- [ ] Notification system
- [ ] CRM features

### Phase 6: Chatbot
- [ ] Design conversation flow
- [ ] Build or integrate chatbot
- [ ] Connect to backend

---

## 18. Content Checklist

### Copy to Write:
- [ ] Homepage hero text
- [ ] Homepage sections
- [ ] Products overview
- [ ] Christmas trees page
- [ ] Greenery page
- [ ] Services page
- [ ] About page (company description)
- [ ] Leadership bios (Michael, Rasmus, Asger)
- [ ] Contact page
- [ ] Form confirmation messages
- [ ] Email templates (auto-reply, notification)
- [ ] Footer text
- [ ] Meta descriptions for all pages
- [ ] 404 page

### Translations:
- [ ] All above in Danish
- [ ] All above in German
- [ ] All above in French

---

## 19. Technical Specifications

### Monorepo Structure:
```
teglgaard-wood/
├── apps/
│   ├── web/                 # Marketing website (Astro)
│   │   ├── src/
│   │   │   ├── pages/
│   │   │   │   ├── index.astro
│   │   │   │   ├── products/
│   │   │   │   ├── services.astro
│   │   │   │   ├── about.astro
│   │   │   │   ├── contact.astro
│   │   │   │   ├── quote.astro
│   │   │   │   ├── articles/
│   │   │   │   ├── da/          # Danish
│   │   │   │   ├── de/          # German
│   │   │   │   └── fr/          # French
│   │   │   ├── components/
│   │   │   ├── layouts/
│   │   │   ├── content/         # MDX content
│   │   │   ├── i18n/            # Translations
│   │   │   └── styles/
│   │   └── public/
│   │       └── images/
│   │
│   └── ops/                 # Operations app (Phase 5)
│       ├── src/
│       └── ...
│
├── packages/
│   ├── db/                  # Database schema
│   └── shared/              # Shared types
│
└── docs/                    # Documentation
```

### Tech Stack Summary:
```
Marketing Website (apps/web):
- Astro 5
- React 19 (interactive components)
- Tailwind CSS 4
- TypeScript
- MDX for content

Operations App (apps/ops):
- Vite + React 19
- TanStack Router + Query
- Tailwind CSS 4
- Hono (API)
- Drizzle ORM
- Neon (Postgres)

Shared:
- pnpm workspaces
- TypeScript
- @teglgaard/* packages
```

---

## 20. Success Metrics

### Website Goals:
1. **Search visibility:** Page 1 for "christmas tree wholesale denmark"
2. **Lead generation:** X quote requests per month
3. **Engagement:** <40% bounce rate, >2 min avg session
4. **Performance:** <1.5s LCP, 90+ PageSpeed score
5. **Mobile:** 60%+ mobile traffic handled well

### Business Goals:
1. Professional image for large buyers
2. Capture leads efficiently
3. Reduce time spent on initial inquiries (form pre-qualifies)
4. Support for German/French markets
5. Foundation for operations app

---

*Document created: 26 January 2026*
*Last updated: 26 January 2026*
*Version: 1.0*
