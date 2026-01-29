# i18n/Localization Implementation Plan

## Overview
Add full internationalization support for 4 languages (English, Danish, German, French) to the Astro marketing website using Astro 5's built-in i18n routing.

## Design Decisions

### Routing Strategy
- **prefixDefaultLocale: false** - English at root `/`, other languages at `/da/`, `/de/`, `/fr/`
- Cleaner URLs for primary English market, better SEO

### Translation File Structure
- **Nested objects** with TypeScript types for better organization
- Type-safe keys inferred from English as source of truth
- Structure: `{ common: { ... }, nav: { ... }, home: { ... }, products: { ... } }`

### Localized Routes
- **Folder-based routing**: Create `/da/`, `/de/`, `/fr/` folders with matching page structure
- Each localized page imports same components but with language context
- 9 pages × 3 non-English languages = 27 new route files

### Constants vs Translations
- `business.ts` stays unchanged (phone, email, address, stats, team)
- Product names, species descriptions, quality grades → translation files
- Link by key: `TREE_SPECIES.nordmann` → `t('products.species.nordmann.name', lang)`

## Implementation Steps

### Phase 1: Core i18n Infrastructure (Foundation)

**1.1 Update astro.config.mjs**
- Add i18n configuration block
- Set defaultLocale: 'en', locales: ['en', 'da', 'de', 'fr']
- Set prefixDefaultLocale: false

**1.2 Create src/i18n/locales/types.ts**
- Define `Locale` type: 'en' | 'da' | 'de' | 'fr'
- Define `Translation` type (will infer from en.ts)
- Type-safe translation key paths

**1.3 Create src/i18n/locales/en.ts**
- Export `en` translation object with `as const`
- Nested structure: common, nav, header, footer, home, about, contact, services, products, solutions, seo
- Extract ALL hardcoded strings from existing pages
- Key sections:
  - `common`: phone, email, requestQuote, getStarted, learnMore, viewAll
  - `nav`: products, services, solutions, about, contact, christmasTrees, greenery
  - `header`: topBar messages, megaMenu descriptions, CTA
  - `footer`: brandDescription, section headers, legal links
  - `home`: hero, products, whyUs, deliveryCoverage, stats labels
  - `about`: hero, whoWeAre, approach, leadership, facts, milestone
  - `contact`: hero, form labels, team section
  - `services`: hero, process, capabilities, deliveryCoverage, stats
  - `products.species`: nordmann, noble, fraser, bluespruce (name, description)
  - `products.greenery`: nobleFir, fraserFir, wreaths, cemetery (name, description)
  - `products.quality`: premium, aGrade, standard (name, description)
  - `solutions`: hero, customerTypes (gardenCenters, supermarkets, distributors, nurseries, ecommerce, commercial)
  - `seo`: page-specific titles, descriptions, keywords

**1.4 Create src/i18n/locales/da.ts**
- Import `Translation` type
- Export `da: Translation` object
- Danish translations for all keys from en.ts
- Professional B2B Danish (company is Danish)

**1.5 Create src/i18n/locales/de.ts**
- Import `Translation` type
- Export `de: Translation` object
- Professional B2B German translations

**1.6 Create src/i18n/locales/fr.ts**
- Import `Translation` type
- Export `fr: Translation` object
- Professional B2B French translations

**1.7 Create src/i18n/index.ts**
- Import all locale files (en, da, de, fr)
- Export `getLanguageFromURL(url: URL): Locale` - extracts lang from pathname
- Export `t(key: string, lang: Locale): string` - gets nested translation by dot notation
- Export `getLocalizedPath(path: string, lang: Locale): string` - generates localized URLs
- Export `getAlternateLinks(pathname: string, locale: Locale)` - for hreflang tags

### Phase 2: Layout & Core Components

**2.1 Update src/layouts/Layout.astro**
- Import i18n utilities
- Get current language: `const lang = getLanguageFromURL(Astro.url)`
- Set dynamic `lang` attribute: `<html lang={lang}>`
- Add hreflang tags using `getAlternateLinks()`
- Add x-default hreflang
- Use translated SEO defaults from translation files

**2.2 Create src/components/LanguageSwitcher.astro**
- Dropdown button with current language flag emoji
- Menu with 4 languages: 🇬🇧 English, 🇩🇰 Dansk, 🇩🇪 Deutsch, 🇫🇷 Français
- Links to same page in different language using `getLocalizedPath()`
- Current language highlighted with primary color
- Responsive design (collapses flag-only on mobile)

**2.3 Update src/components/Header.astro**
- Import `t` and `getLanguageFromURL`
- Get current language from URL
- Replace top bar text with `t('header.topBar.yearsExcellence', lang)` and `t('header.topBar.deliveringEurope', lang)`
- Replace all nav labels with `t('nav.products', lang)`, etc.
- Replace mega menu descriptions with translations
- Replace "Get a Quote" with `t('header.cta', lang)`
- Add `<LanguageSwitcher />` component next to "Get a Quote" button
- Update mobile menu with translations
- Update navigation links to use `getLocalizedPath()` for current language

**2.4 Update src/components/Footer.astro**
- Import `t` and `getLanguageFromURL`
- Get current language
- Replace brand description with `t('footer.brandDescription', lang)`
- Replace section headers (Products, Solutions, Company) with translations
- Replace all link labels with translations
- Replace legal links (Privacy, Terms, Cookies) with translations
- Update footer links to use `getLocalizedPath()`

### Phase 3: Refactor English Pages (Baseline)

**3.1 Update src/pages/index.astro**
- Import `t` function
- Set `lang = 'en'` (implicit for root pages)
- Replace all hardcoded text with `t('home.hero.title', lang)` etc.
- Keep BUSINESS_INFO references unchanged (phone, stats)
- Update CTAs, section headings, descriptions
- Translate stats labels ("trees annually", "years experience", "European markets")

**3.2 Update src/pages/about.astro**
- Import `t` and set lang
- Replace hero title/subtitle
- Replace "Who We Are" section prose
- Replace "Our Approach" section (4 value props)
- Keep leadership team data from BUSINESS_INFO
- Translate section labels around team data
- Replace milestone section text

**3.3 Update src/pages/contact.astro**
- Import `t` and set lang
- Replace hero text
- Pass lang to ContactForm component (if it has internal text)
- Replace section headings
- Keep contact details from BUSINESS_INFO

**3.4 Update src/pages/services.astro**
- Import `t` and set lang
- Replace hero title/subtitle
- Replace process section headings
- Replace capabilities section text
- Replace delivery coverage section
- Update country flag labels if needed
- Replace CTA section text

**3.5 Update src/pages/products/index.astro**
- Import `t` and set lang
- Replace hero text
- Replace product card headings
- Keep dynamic tags from TREE_SPECIES/GREENERY_PRODUCTS

**3.6 Update src/pages/products/christmas-trees.astro**
- Import `t` and set lang
- Replace breadcrumb text
- Map species using: `t(\`products.species.\${key}.name\`, lang)` and `t(\`products.species.\${key}.description\`, lang)`
- Keep scientific names from TREE_SPECIES
- Replace section headings (Species Available, Size Range, Quality Grades, Packaging)
- Map quality grades using translations
- Replace CTA section

**3.7 Update src/pages/products/greenery.astro**
- Import `t` and set lang
- Replace breadcrumb text
- Map greenery products using translations
- Replace Applications section (Wreaths, Cemetery, Commercial)
- Replace Packaging Options section
- Replace CTA section

**3.8 Update src/pages/solutions/index.astro**
- Import `t` and set lang
- Replace hero text
- Replace sub-navigation labels (6 customer types)
- Replace experience banner
- Map customer types sections using translations:
  - Customer type name
  - Challenges list
  - How we help list
  - CTA text
- Replace "Why It Matters" section

**3.9 Update src/pages/404.astro**
- Import `t` and set lang
- Replace error message
- Replace navigation link labels
- Keep contact info from BUSINESS_INFO

### Phase 4: Create Localized Routes

**4.1 Create Danish routes (src/pages/da/)**
- `da/index.astro` - Copy structure from index.astro, set `lang = 'da'`, use same components
- `da/about.astro`
- `da/contact.astro`
- `da/services.astro`
- `da/products/index.astro`
- `da/products/christmas-trees.astro`
- `da/products/greenery.astro`
- `da/solutions/index.astro`

**Pattern for each file:**
```astro
---
import Layout from '../../layouts/Layout.astro'
import { t } from '../../i18n'
// ... other imports

const lang = 'da'
const title = t('seo.home.title', lang)
const description = t('seo.home.description', lang)
---

<Layout title={title} description={description}>
  <!-- Same structure as English version but with lang='da' passed to t() -->
</Layout>
```

**4.2 Create German routes (src/pages/de/)**
- Same 8 pages as Danish
- Set `lang = 'de'`
- Import path: `../../layouts/Layout.astro` or `../../../` for nested pages

**4.3 Create French routes (src/pages/fr/)**
- Same 8 pages
- Set `lang = 'fr'`

### Phase 5: Verification & Polish

**5.1 Build verification**
- Run `pnpm build` - should succeed
- Check dist/ folder for all localized routes
- Verify no TypeScript errors
- Check bundle size

**5.2 Manual testing**
- Visit `/` (English homepage)
- Test language switcher → lands on `/da/`
- Navigate to About → verify `/da/about` shows Danish content
- Test all 9 pages × 4 languages = 36 routes
- Verify phone/email/address unchanged across all languages
- Verify all internal links work
- Test mobile language switcher
- Test mega menus in Header

**5.3 SEO verification**
- Inspect `<html lang="">` attribute on each page
- Verify hreflang tags present and correct
- Check canonical URLs
- Verify meta descriptions translated
- Verify page titles translated

**5.4 Run completion webhook**
```bash
clawdbot gateway wake --text "Done: i18n localization complete - 4 languages with translated pages, language switcher, and hreflang tags" --mode now
```

## Critical Files

1. **astro.config.mjs** - i18n routing configuration (foundation)
2. **src/i18n/index.ts** - Core utilities used everywhere
3. **src/i18n/locales/en.ts** - Source of truth for all translations (largest file)
4. **src/layouts/Layout.astro** - Lang attribute, hreflang tags (affects all pages)
5. **src/components/Header.astro** - Most visible component, sets pattern
6. **src/components/LanguageSwitcher.astro** - New component for language switching

## File Counts

**New files to create:**
- 6 i18n infrastructure files (index.ts, types.ts, en.ts, da.ts, de.ts, fr.ts)
- 1 LanguageSwitcher component
- 27 localized page routes (9 pages × 3 non-English languages)
- **Total: 34 new files**

**Existing files to modify:**
- 1 config file (astro.config.mjs)
- 1 layout (Layout.astro)
- 2 components (Header.astro, Footer.astro)
- 9 English pages
- **Total: 13 modified files**

## Translation Content Strategy

### English (en)
- Keep all existing text from current pages
- Extract to structured translation object

### Danish (da)
- Natural Danish for B2B context
- Company is Danish, so this should sound native
- Formal but approachable tone

### German (de)
- Professional B2B German
- Clear, precise language
- Formal tone appropriate for German business context

### French (fr)
- Professional B2B French
- Elegant but clear language
- Appropriate formality for French business communications

## Testing Checklist

- [ ] i18n config in astro.config.mjs
- [ ] All 4 translation files created with matching structure
- [ ] TypeScript validates translation structure
- [ ] `t()` function returns correct translations
- [ ] `getLanguageFromURL()` detects language correctly
- [ ] `getLocalizedPath()` generates correct URLs
- [ ] Layout has dynamic lang attribute
- [ ] hreflang tags generated correctly
- [ ] Language switcher displays and works
- [ ] Header navigation translated
- [ ] Footer translated
- [ ] All 9 English pages use t() function
- [ ] All 27 localized pages created
- [ ] Build succeeds without errors
- [ ] All routes accessible (36 total pages)
- [ ] Phone/email/address consistent across languages
- [ ] Internal links work correctly
- [ ] Mobile responsive
- [ ] No console errors

## Potential Issues & Solutions

**Issue: Large translation volume**
- Solution: Start with Danish (closest to company), then German/French
- Use translation service for accuracy

**Issue: Keeping translations in sync**
- Solution: TypeScript will catch missing keys
- Regular audits of translation completeness

**Issue: Form handling in ContactForm**
- Solution: Pass lang prop to form component, translate validation messages

**Issue: Dynamic content (species, products)**
- Solution: Use key-based lookups: `t(\`products.species.\${key}.name\`, lang)`

## Success Criteria

1. ✅ Website accessible in 4 languages (en, da, de, fr)
2. ✅ Language switcher works from any page
3. ✅ All pages translated (36 routes total)
4. ✅ SEO tags (lang, hreflang) correct
5. ✅ Business data (phone, email) consistent
6. ✅ Type-safe translation keys
7. ✅ Build succeeds
8. ✅ No broken links
9. ✅ Professional translations for B2B context
10. ✅ Mobile responsive language switcher
