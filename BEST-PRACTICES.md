# Best Practices (Current as of 2025–2026)

This project follows current best practices for Next.js 15, React 19, real estate/local SEO, Core Web Vitals, and accessibility. Sources are linked where applicable.

---

## Next.js 15 & App Router

- **Server Components by default** – Use `'use client'` only where interactivity is needed (state, effects, event handlers). Data fetching and static content stay in Server Components. [Next.js 15 App Router](https://nextjs.org/docs/app/building-your-application/upgrading/version-15)
- **Async `params` in dynamic routes** – In Next.js 15, `params` and `searchParams` are Promises; use `await params` in pages and `generateMetadata`. [Upgrading: Version 15](https://nextjs.org/docs/app/building-your-application/upgrading/version-15)
- **Explicit project root** – Set `outputFileTracingRoot` in `next.config.ts` (e.g. `__dirname` via `fileURLToPath(import.meta.url)`) so file tracing uses this repo. If a parent directory has another lockfile, Next may still show a warning; the option still ensures correct tracing. [Next.js #81864](https://github.com/vercel/next.js/issues/81864)
- **Caching** – Use `fetch(..., { next: { revalidate: 3600 } })` for ISR; avoid default no-cache for GET unless required.

---

## React 19 & Server Components

- **Thin client boundaries** – Keep Client Components as small as possible; pass data from Server Components as props. [React Server Components](https://react.dev/reference/rsc/server-components)
- **No unnecessary memoization** – Rely on React 19 Compiler for re-render optimization; avoid extra `useMemo`/`useCallback` unless measured.

---

## Real Estate & Local SEO

- **NAP consistency** – Single source of truth in `lib/site-config.ts`; match Google Business Profile in visible text and schema (LocalBusiness, RealEstateAgent). [Local SEO for Real Estate](https://jefflenney.com/real-estate/real-estate-local-seo/)
- **Hyperlocal content** – Neighborhood pages, market report, area-specific copy; schema and meta per page.
- **Structured data** – Organization, LocalBusiness, RealEstateAgent, WebSite, FAQPage where applicable.

---

## Images (March 2026)

- **next/image everywhere** – Hero, featured properties, quick move-in, and Latest News use the Next.js `Image` component for automatic AVIF/WebP, responsive `srcset`, and LCP/CLS optimization. [Image Optimization 2026](https://askseocoach.com/technical-seo/web-performance/images/)
- **Hero** – First slide uses `priority` and `sizes="100vw"`; other slides lazy-load with `fill` and `quality={80}`.
- **Cards** – Explicit `width`/`height`, `sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"` for 3-column grids; `loading="lazy"` and `decoding="async"`.
- **Config** – `next.config.ts` has `formats: ['image/webp', 'image/avif']` and `remotePatterns` for Unsplash and KCM.

## Core Web Vitals

- **LCP (≤2.5s)** – Hero uses `next/image` with `priority`; fonts use `display: 'swap'`. [Core Web Vitals 2025](https://www.digitalapplied.com/blog/core-webvitals-optimization-guide-2025)
- **CLS (<0.1)** – All images use `next/image` with intrinsic dimensions or `fill` in a sized container.
- **INP (≤200ms)** – Defer non-critical JS; RealScout script uses `strategy="afterInteractive"`.

---

## Accessibility (WCAG 2.2)

- **Skip link** – “Skip to main content” at top of body; visible on focus, targets `#main-content`. [WCAG 2.2](https://www.w3.org/WAI/WCAG22/quickref/)
- **Semantic HTML** – `<main>`, `<nav>`, `<section>`, `aria-labelledby` where needed.
- **Images** – Descriptive `alt` for content images; decorative or redundant use `alt=""`.
- **Focus** – Visible focus styles (ring); no `outline: none` without a replacement.

---

## Security

- **Headers** – `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: origin-when-cross-origin`.
- **CSP** – Allowlist for RealScout (`em.realscout.com`, `www.realscout.com`) in script-src and connect-src; img-src allows `https:` for KCM feed images. Strict nonce-based CSP is a future goal where third-party scripts allow.

---

## Project-specific

- **RealScout** – Single script load in root layout; widgets use `dangerouslySetInnerHTML` or custom elements; no duplicate script.
- **IDX** – Do not modify `components/idx/*` without explicit approval; always show MLS disclaimer and attribution.
- **Build** – Prefer `vercel build` for production; use `vercel dev` for local parity.

---

*Last updated: March 2026. Revisit when upgrading Next.js/React or changing third-party integrations.*
