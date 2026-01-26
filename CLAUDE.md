# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

Teglgaard Wood is a monorepo for a Danish Christmas tree wholesale trading company. It contains a marketing website and will expand to include an internal operations application.

**Company:** Teglgaard Wood ApS (CVR: 38689622)
**Business:** B2B wholesale trading of premium Danish Christmas trees
**Founded:** 1976
**Markets:** France, Germany, UK, and broader Europe

## Repository Structure

```
teglgaard-wood/
├── apps/
│   ├── web/              # Marketing website (Astro)
│   └── ops/              # Operations app (planned)
├── packages/
│   ├── db/               # Database schema (Drizzle ORM)
│   └── shared/           # Shared types and utilities
├── pnpm-workspace.yaml
└── package.json
```

## Tech Stack

- **Package Manager:** pnpm 9+ (monorepo workspaces)
- **Node:** 20+
- **Marketing Site (apps/web):**
  - Astro 5 (static site generator)
  - React 19 (interactive components)
  - Tailwind CSS 4 (CSS-first config via @tailwindcss/vite)
  - TypeScript strict
- **Operations App (apps/ops - planned):**
  - Vite + React 19
  - TanStack Router + Query
  - Tailwind CSS 4
- **Database (packages/db):**
  - Drizzle ORM
  - Target: Neon (serverless Postgres)
- **Shared (packages/shared):**
  - TypeScript types for Customer, Order, Product

## Development Commands

```bash
# Install dependencies
pnpm install

# Development
pnpm dev           # Run all apps
pnpm dev:web       # Run marketing site only (port 4321)
pnpm dev:ops       # Run operations app (when created)

# Build
pnpm build         # Build all apps
pnpm build:web     # Build marketing site only

# Type checking
pnpm typecheck     # Check all packages
```

## Code Conventions

### Styling
- Tailwind CSS 4 uses CSS-first configuration in `src/styles/global.css`
- Custom colors defined in `@theme` block (primary-50 through primary-900)
- Use Tailwind classes, avoid custom CSS unless necessary

### Components
- Astro components for static content (.astro)
- React components only for interactivity (.tsx with `client:visible`)
- Keep React components minimal - prefer Astro where possible

### File Organization
- Pages in `src/pages/`
- Layouts in `src/layouts/`
- Components in `src/components/`
- Business constants in `src/constants/`
- Styles in `src/styles/`

### Package Naming
- Workspace packages use `@teglgaard/` prefix
- Internal dependencies use `workspace:*`

## Business Context

### Key Information
- **Phone:** +45 40 73 70 78 (prominently displayed)
- **Email:** mt@teglgaardwood.dk
- **CEO:** Michael Teglgaard
- **Address:** Rugaardsvej 784, 5462 Morud, Denmark

### Website Goals
1. Phone contact visibility on every page
2. B2B wholesale focus (not retail)
3. Trust signals: 48+ years experience, Danish quality
4. Mobile-first (60%+ mobile users expected)
5. Fast load times (<1.5s)

### Operations App Goals (Future)
- Delivery note management
- Production tracking
- Customer/grower relationships
- Order management
- Reporting on dækningsbidrag per product

## Deployment

- Marketing site: Static hosting (Vercel/Cloudflare Pages)
- Domain: teglgaardwood.dk
- Build output: `apps/web/dist/`

## Related Documentation

- Obsidian Vault: `03 Areas/Teglgaard Wood/`
- Contains board meeting notes, e-conomic migration docs, business context
