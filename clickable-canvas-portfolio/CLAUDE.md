# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Shivangi Kamat's personal portfolio: a Vite + React 18 + TypeScript SPA styled with Tailwind and shadcn/ui, deployed on Vercel. The site is an illustrated "makeover room" where each piece of furniture is a clickable SVG that navigates to a themed page (wardrobe = experience, book = education, desktop = projects, shelf = extracurriculars, telephone = contact).

## Commands

```bash
npm install
npm run dev        # Vite dev server on port 8080 (not 5173)
npm run build      # production build to dist/
npm run build:dev  # build in development mode
npm run lint       # eslint over .ts/.tsx
npm run preview    # serve the built dist/ (closest to what Vercel serves)
```

There is no test runner and no `typecheck` script. `vite build` does not type-check (SWC); run `npx tsc --noEmit -p tsconfig.app.json` to check types. TypeScript is deliberately loose (`strict: false`, `noImplicitAny: false`, `strictNullChecks: false`).

Both `package-lock.json` and `bun.lockb` are committed; npm is the one to use.

## Architecture

### Fixed-design scene scaling

Every page is wrapped in `FixedDesignScene` (`src/components/FixedDesignScene.tsx`). It renders children into a fixed 1670×1000 px canvas and applies a single uniform `transform: scale()` computed by `useResponsiveScale` as `min(innerWidth / 1670, innerHeight / 1000)`, anchored top-center. Consequences:

- Layout inside a scene is absolute positioning with percentages of the 1670×1000 canvas, not responsive flow. Don't add breakpoint-based layout inside a scene; change the percentages instead.
- The scene's `backgroundColor` fills the letterboxed area outside the canvas, so each page passes a colour matching its artwork.
- The only mobile-specific positioning hook is `ClickableItem`'s `position.topMobile`, which sets a `--desktop-top` CSS variable that `src/index.css` re-applies at `min-width: 768px`.

### Scene building blocks

- `ClickableItem` — an absolutely positioned image button that navigates to `route`. Decorative furniture uses the same component with `disabled={true}`. Its hover tooltip label comes from a hard-coded route→name map inside the component, which needs a new entry when a route is added.
- `PopupItem` — same positioning model, but calls `onOpenPopup` instead of navigating. Used on the inner pages.
- `MakeoverRoom` — the landing scene. Holds the `isDarkMode` state (toggled by `TopClock`), which swaps background colours and the `*_dark.svg` variants of window/chandelier/lights. This is local state, unrelated to the Tailwind `.dark` class or `next-themes`.

### Content pipeline

Page text lives in `public/Content/*.json` (arrays of `{ title, content, date? }`) and is fetched at runtime, so content can be edited without touching components. Each page pairs that data with a hard-coded layout array describing where each clickable sits:

- `Experience`, `Education`, `Projects` match JSON entries to layout slots **by array index**. Reordering the JSON changes which artwork opens which entry, and a slot with no entry renders disabled.
- `Extracurriculars` matches **by `title`** against keys of its `layoutConfig`; a title with no matching key is not rendered.
- `Blog` is hard-coded in the component and uses `BlogPopup`; `public/Content/Blog.json` is empty.

Popup image galleries are not discovered from disk. `src/components/ui/popup.tsx` has an `IMAGE_FOLDERS` map from an `imageFolder` key (e.g. `basketball`, `jumping_jack`) to explicit image lists. Adding gallery images means adding the files under `src/assets/images/` and listing them in `IMAGE_FOLDERS`; a key missing from the map shows no images.

### Images and caching

All scene artwork and gallery photos live in `src/assets/images/` and are referenced only through `img("relative/path.webp")` from `src/lib/images.ts`, which resolves to Vite's content-hashed URL (a missing path logs a warning in dev). Never reference them by a literal `/images/...` URL. Because the filenames are fingerprinted, `vercel.json` caches `/assets/*` as immutable for a year and a replaced image is picked up on the next deploy.

Keep images small: the illustrations were originally Figma SVG exports wrapping multi-megabyte base64 PNGs (150 MB in total) and were flattened to WebP at roughly 2x their on-canvas size. New art should be added as WebP (or a genuinely vector SVG of a few KB), and photos resized to about 1600 px on the long side. `MakeoverRoom` idle-preloads the main artwork of the inner pages via `preloadImages`; there is no global preloader.

### Routing and transitions

Routes are declared in `src/App.tsx`. Every page except the landing room is lazy-loaded. All routes except `/contact` are wrapped in `CurtainLoader`, which replays a 1.5 s curtain-opening animation on initial load and on every `location.pathname` change. `vercel.json` rewrites all paths to `index.html` so deep links work. `/testimonials` and `/rug-pull` have page components but their routes are commented out.

### Contact page

`src/pages/Contact.tsx` sends the form through EmailJS, but the service ID, template ID and public key are still the placeholder strings `YOUR_SERVICE_ID` / `YOUR_TEMPLATE_ID` / `YOUR_PUBLIC_KEY`, so submission does not work until real values are supplied. The page also plays `public/sounds/telephone-ring.mp3`, gated behind a user gesture to satisfy browser autoplay rules.

### UI library

`src/components/ui/` is mostly generated shadcn/ui primitives (configured in `components.json`, `@/` aliases `src/`). The hand-written files in that folder are `popup.tsx`, `blog-popup.tsx`, `notification.tsx` and `curtain-loader.tsx`. Headings and tooltips use the `.heading-font` / `.tooltip-font` classes (Berkshire Swash) defined in `src/index.css`; body text is Inter.
