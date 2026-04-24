# Next.js Base Template

Reusable Next.js starter template for new applications.  
Use this repository as your base code, then build feature modules on top.

## Use This Template For A New App

1. Create a new project from this template (GitHub template or clone/copy).
2. Install dependencies:

```bash
npm i
```

3. Start development:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000).
5. Begin with `src/app/page.tsx`, then add new routes in `src/app`.

## Project Structure

```text
.
├── public/                              # Static assets served from /
├── src/
│   ├── app/                             # App Router routes, layouts, and route handlers
│   │   ├── api/
│   │   │   ├── register-user/route.ts    # Route handler for registration requests
│   │   ├── privacy-policy/page.tsx
│   │   ├── register/page.tsx            # Form + useActionState demo
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── favicon.ico
│   │   └── globals.css
│   ├── components/                       # Shared UI components
│   │   ├── notes-app/                    # Notes feature components + context
│   │   ├── ui/page-card.tsx              # Reusable page shell/card
│   │   ├── site-header.tsx
│   │   ├── site-footer.tsx
│   │   ├── theme-toggle.tsx
│   │   └── ...
│   └── lib/                              # Shared helpers and server actions
│       ├── actions/
│       │   ├── users.ts
│       │   ├── register-state.ts
│       │   └── auth.ts
│       ├── types/
│       │   ├── in-app-pets.ts
│       │   └── in-app-user.ts
│       ├── navigation.ts
│       └── formatDate.ts
├── next.config.ts                        # Next.js configuration
├── package.json
├── package-lock.json
├── eslint.config.mjs                     # ESLint setup
├── postcss.config.mjs                    # PostCSS config
├── tsconfig.json                         # TypeScript configuration
└── AGENTS.md                             # Project-specific coding instructions
```

### Folder Conventions

- Put reusable UI in `src/components`.
- Put route files (`page.tsx`, `layout.tsx`, etc.) in `src/app`.
- Use `'use client'` at the top of a component file only when that component needs client-side interactivity.

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Template Notes

- This repo is intentionally structured as a reusable foundation.
- Keep shared UI in `src/components` and app-specific pages in `src/app`.
- Add domain models and reusable helpers in `src/lib`.
- Keep generated cache/build artifacts out of git (for example `.next`, `node_modules`, `tsconfig.tsbuildinfo`).
