# Teglgaard Wood

Premium Danish Christmas trees since 1976.

## Structure

```
teglgaard-wood/
├── apps/
│   ├── web/          # Marketing website (Astro + Tailwind 4)
│   └── ops/          # Operations app (coming soon)
├── packages/
│   ├── db/           # Database schema (Drizzle)
│   └── shared/       # Shared types and utilities
```

## Tech Stack

- **Package Manager**: pnpm
- **Web**: Astro 5 + React 19 + Tailwind CSS 4
- **Database**: Drizzle ORM (ready for Neon/Postgres)
- **Language**: TypeScript

## Development

```bash
# Install dependencies
pnpm install

# Run marketing site
pnpm dev:web

# Build all
pnpm build
```

## Apps

### Web (Marketing Site)
Public-facing website at teglgaardwood.dk

### Ops (Coming Soon)
Internal operations application:
- Delivery notes
- Production tracking
- Customer management
- Grower relationships

## Packages

### @teglgaard/shared
Shared TypeScript types for orders, customers, products.

### @teglgaard/db
Database schema and client (Drizzle ORM).
