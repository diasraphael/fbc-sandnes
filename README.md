# FBC Sandnes

A modern Next.js application for Faith Baptist Church, Sandnes.

## Getting Started

First, run the development server:

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Features

- Next.js 14 dev server instead of our current vite dev server
- TypeScript
- Tailwind CSS
- ESLint
- Turbopack for faster development as build tool instead of our current Rollup + esbuild
- Autoprefixer - before You had to manually write vendor prefixes, with autoprefixer You just write the standard CSS. Autoprefixer automatically generates the prefixed versions based on your browser support requirements.

## Project Structure

- `src/app` - Application pages and components
- `src/components` - Reusable UI components
- `public` - Static assets

## Deployment

Deploying the build out folder to azure

```
az storage blob upload-batch --account-name fbcsandnes --destination '$web' --source ./out --overwrite
```