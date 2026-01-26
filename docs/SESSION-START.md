# Teglgaard Wood Website - Build Session Start

## Quick Start Prompt

Copy this to start a new session:

---

**Build the Teglgaard Wood website. All planning is complete.**

**Read these docs first:**
1. `/Users/humainasger/Documents/projects/teglgaard-wood/docs/BUILD-PLAN.md` - Full specifications
2. `/Users/humainasger/Documents/projects/teglgaard-wood/docs/sitemap-v2.md` - Page structure
3. `/Users/humainasger/Documents/projects/teglgaard-wood/CLAUDE.md` - Tech context

**Project location:** `/Users/humainasger/Documents/projects/teglgaard-wood`

**Monorepo already set up with:**
- apps/web (Astro 5 + Tailwind 4 + React 19)
- packages/db, packages/shared

**Start with Phase 1:**
1. Build homepage with professional B2B design
2. Build products pages (christmas-trees, greenery)
3. Build services page
4. Build about page with leadership section
5. Build contact page with smart form
6. Generate images with Gemini as needed

**Use Gemini for image generation:**
```bash
uv run /opt/homebrew/lib/node_modules/clawdbot/skills/nano-banana-pro/scripts/generate_image.py --prompt "YOUR PROMPT" --filename "OUTPUT_PATH" --resolution 2K
```

**Key design direction:**
- Professional B2B supplier look (not family business)
- Buyer-first: UK garden center procurement manager should trust this
- Clean, corporate, modern
- Phone number always visible
- Clear CTAs to request quote

---

## Project Status

### Completed
- [x] Monorepo structure (pnpm workspaces)
- [x] Tech stack decided (Astro 5, Tailwind 4, React 19)
- [x] Sitemap finalized
- [x] Build plan documented
- [x] Competitor analysis done
- [x] Content research compiled
- [x] Image generation tested (Gemini works)

### Ready to Build
- [ ] Homepage
- [ ] /products/christmas-trees
- [ ] /products/greenery
- [ ] /services
- [ ] /about
- [ ] /contact
- [ ] /quote (smart form)

### Phase 2 (Later)
- [ ] Multi-language (DA, DE, FR)
- [ ] SEO articles
- [ ] Operations app integration
- [ ] Chatbot

## Key Files

```
teglgaard-wood/
├── docs/
│   ├── BUILD-PLAN.md          # Full specifications
│   ├── sitemap-v2.md          # Page structure
│   ├── competitor-analysis.md # Competition research
│   ├── content-research.md    # Content & facts
│   └── test-*.png             # Sample AI images
├── apps/
│   └── web/                   # Marketing website
│       ├── src/
│       │   ├── pages/
│       │   ├── components/
│       │   ├── layouts/
│       │   └── styles/
│       └── public/
├── packages/
│   ├── db/
│   └── shared/
├── CLAUDE.md                  # Coding agent context
└── README.md
```

## Company Facts (Quick Reference)

- **Name:** Teglgaard Wood ApS
- **CVR:** 38689622
- **Phone:** +45 40 73 70 78
- **Email:** info@teglgaardwood.dk
- **Address:** Rugårdsvej 784, 5462 Morud, Denmark
- **Volume:** 250,000 trees/year
- **Experience:** 50 years (since 1976)
- **Team:** 1-2 year-round, 10-30 seasonal
- **Markets:** Germany, France, UK (primary)
- **Products:** Christmas trees + decorative greenery

## Leadership

- **Michael Teglgaard** - Founder & Director (50 years in industry)
- **Rasmus Teglgaard** - Board Member
- **Asger Teglgaard** - Board Member, Operations & Technology

## Design Notes

- Primary color: Forest green (#2D5A3D)
- Font: Inter
- Style: Professional, corporate, B2B
- Must feel like a supplier you'd trust with €500k order
- Phone visible on every page
- Strong CTAs

## Image Generation Prompts (Tested)

**Hero/Plantation:**
```
Aerial drone view of a large Nordmann fir Christmas tree plantation in Denmark, neat rows of green trees, early morning golden light, professional landscape photography
```

**Product Shot:**
```
Premium Nordmann fir Christmas tree, single tree, symmetrical perfect shape, dense dark green needles, white studio background, professional product photography
```

**Operations:**
```
Workers in a Christmas tree processing facility, netting and palletizing Nordmann fir trees, professional industrial setting, documentary photography style
```
