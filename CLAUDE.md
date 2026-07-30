# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Corporate marketing site for **The Bridge Consulting Group** (brand still referred to as "The Bridge" in some legacy assets — see logo note below) — a GCC advisory firm spanning engineering, AI, aviation, and defense. Next.js 16 (App Router, Turbopack) + TypeScript + Tailwind CSS v4. Deployed on Vercel as project `the-bridge-defense-accelerator` (Vercel project slug unchanged — renaming it is a separate infra decision), live at `thebridgeconsulting.ae`.

## Commands

- `npm run dev` — start dev server (localhost:3000)
- `npm run build` — production build (also runs the TypeScript check)
- `npm run lint` — ESLint
- No test suite is configured.

## Architecture

**Content is centralized in `src/lib/data.ts`.** Segments, the 17 products/solutions, the 6 capability domains, the brand tagline, and the verbatim legal `serviceBoundaryStatement` all live there as typed data — pages import and render from it rather than hardcoding copy. When adding/editing a product, segment, or domain, edit this file first.

**Segment pages share one template.** `src/components/SegmentPage.tsx` renders the full page body for all three segment routes (`/segments/international`, `/segments/gcc-organizations`, `/segments/government`); each route file just passes its `Segment` object from `lib/data.ts`. Don't duplicate segment page markup — extend the shared template instead.

**Nav is About / Solutions / Register / Contact.** The standalone Domains page was folded into About (`src/app/about/page.tsx`, "Six Domains of Expertise" section) — don't recreate a separate `/domains` route.

**Solutions starts with a guided picker, not a flat grid.** `src/components/ProductsGrid.tsx` (client component) opens on a "Which Best Describes You?" segment-picker view; picking a segment (or "View All Solutions") switches to a filtered, grouped results view. Keep new segments/products flowing through this component via `lib/data.ts` rather than adding a second listing UI.

**Client registration writes to Neon Postgres and notifies by email.** `/register` (`RegisterForm.tsx`) posts to `src/app/api/register/route.ts`, which inserts into a `clients` table via `src/lib/db.ts` (the `postgres` package, pooled on `globalThis` in dev, `DATABASE_URL` env var) and — if `GMAIL_USER`/`GMAIL_APP_PASSWORD` are set — emails a notification through Gmail SMTP (`nodemailer`, same pattern as `/api/contact`). The DB write is authoritative; email failure doesn't fail the request. `src/app/admin/clients/page.tsx` lists/filters registrations from the DB and is protected by HTTP Basic Auth enforced in `src/middleware.ts` for any `/admin/*` path, gated on `ADMIN_USER`/`ADMIN_PASSWORD` env vars (503 if unset).

**Contact form (`/api/contact`) also sends via Gmail Workspace SMTP** (`nodemailer`, not Resend) — `CONTACT_TO_EMAIL`/`CONTACT_CC_EMAIL` env vars control recipients, CC defaults to `gokerakinci@thebridgeconsulting.ae`.

**Design constraints are intentional, not accidental:**
- Strict black/white/gray palette only (see `tailwind.config.ts` — `bridge-*` colors). No other colors.
- Every top-level page's black hero banner uses the same fixed height (`h-[560px] sm:h-[620px] lg:h-[680px]` with `flex items-center`) so banners are visually uniform across pages regardless of content length — don't let a page's hero fall back to padding-driven auto height.
- Body copy uses a standardized `text-sm sm:text-base` scale; hero H1s across interior pages use `text-3xl sm:text-4xl lg:text-5xl`. Match these when adding pages rather than introducing new sizes.
- No pricing is ever shown — solutions are described by scope/value only, CTAs are "Contact Us" / "Request a Consultation".
- `serviceBoundaryStatement` (footer, and the About page) must be reproduced verbatim — it's a compliance/legal statement, not copy to edit for tone.

**Logo assets are pre-processed, not raw.** `public/logo.png` is the original lockup (solid black background). `logo-lockup-black/white.png` and `logo-mark-black/white.png` are transparent-background derivatives (generated via Python/Pillow, luminance-keyed) used by `src/components/Logo.tsx` (header/footer) and `src/components/LogoWatermark.tsx` (large low-key mark on hero banners, right side, `hidden lg:block`). If the source logo changes, regenerate these rather than hand-editing. **Intentional divergence:** these image assets render the "The Bridge" wordmark while page copy says "The Bridge Consulting Group" — the logo is staying as-is by decision, not a pending fix. Don't regenerate it to match the full legal name.

**`src/middleware.ts`** does two things: redirects any `www.*` host to the apex domain (308) — needed because DNS for `thebridgeconsulting.ae` is intentionally kept on the registrar (tasjeel.ae) rather than delegated to Vercel's nameservers, to avoid breaking existing MX/email records there — and enforces HTTP Basic Auth on `/admin/*` (see client registration note above).

## Framework version note

This repo pins **Next.js 16**, which has breaking changes vs. older training data (APIs/conventions/file structure may differ). Check `node_modules/next/dist/docs/` before assuming behavior from memory, and heed deprecation warnings in build output.

Tailwind is **v4**, which is CSS-first by default (`@theme` in `globals.css`), but this project also loads `tailwind.config.ts` via an explicit `@config` directive in `globals.css` for the color palette — don't assume a pure CSS-only config here.
