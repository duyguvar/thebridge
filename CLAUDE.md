# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Corporate marketing site for **The Bridge** — a GCC defense accelerator advisory brand. Next.js 16 (App Router, Turbopack) + TypeScript + Tailwind CSS v4. Deployed on Vercel as project `the-bridge-defense-accelerator`, live at `thebridgeconsulting.ae`.

## Commands

- `npm run dev` — start dev server (localhost:3000)
- `npm run build` — production build (also runs the TypeScript check)
- `npm run lint` — ESLint
- No test suite is configured.

## Architecture

**Content is centralized in `src/lib/data.ts`.** Segments, the 19 products/solutions, the 5 capability domains, the brand tagline, and the verbatim legal `serviceBoundaryStatement` all live there as typed data — pages import and render from it rather than hardcoding copy. When adding/editing a product, segment, or domain, edit this file first.

**Segment pages share one template.** `src/components/SegmentPage.tsx` renders the full page body for all three segment routes (`/segments/international`, `/segments/gcc-organizations`, `/segments/government`); each route file just passes its `Segment` object from `lib/data.ts`. Don't duplicate segment page markup — extend the shared template instead.

**Design constraints are intentional, not accidental:**
- Strict black/white/gray palette only (see `tailwind.config.ts` — `bridge-*` colors). No other colors.
- Every top-level page's black hero banner uses the same fixed height (`h-[560px] sm:h-[620px] lg:h-[680px]` with `flex items-center`) so banners are visually uniform across pages regardless of content length — don't let a page's hero fall back to padding-driven auto height.
- Body copy uses a standardized `text-sm sm:text-base` scale; hero H1s across interior pages use `text-3xl sm:text-4xl lg:text-5xl`. Match these when adding pages rather than introducing new sizes.
- No pricing is ever shown — solutions are described by scope/value only, CTAs are "Contact Us" / "Request a Consultation".
- `serviceBoundaryStatement` (footer, and the About page) must be reproduced verbatim — it's a compliance/legal statement, not copy to edit for tone.

**Logo assets are pre-processed, not raw.** `public/logo.png` is the original lockup (solid black background). `logo-lockup-black/white.png` and `logo-mark-black/white.png` are transparent-background derivatives (generated via Python/Pillow, luminance-keyed) used by `src/components/Logo.tsx` (header/footer) and `src/components/LogoWatermark.tsx` (large low-key mark on hero banners, right side, `hidden lg:block`). If the source logo changes, regenerate these rather than hand-editing.

**`src/middleware.ts`** redirects any `www.*` host to the apex domain (308) — needed because DNS for `thebridgeconsulting.ae` is intentionally kept on the registrar (tasjeel.ae) rather than delegated to Vercel's nameservers, to avoid breaking existing MX/email records there.

## Framework version note

This repo pins **Next.js 16**, which has breaking changes vs. older training data (APIs/conventions/file structure may differ). Check `node_modules/next/dist/docs/` before assuming behavior from memory, and heed deprecation warnings in build output.

Tailwind is **v4**, which is CSS-first by default (`@theme` in `globals.css`), but this project also loads `tailwind.config.ts` via an explicit `@config` directive in `globals.css` for the color palette — don't assume a pure CSS-only config here.
