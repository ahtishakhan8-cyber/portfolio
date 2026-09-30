# Urduban

An English–Urdu dictionary front-end built with React, TypeScript and Vite. The page covers the
header and translator hero, the word-meaning results with its sidebar, a "Most Common Words"
carousel, and the site footer.

## Getting started

```bash
npm install
npm run dev
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Type-check with `tsc -b`, then build to `dist/` |
| `npm run lint` | Run ESLint over the project |
| `npm run preview` | Serve the production build locally |

## Project structure

```
src/
  components/      One folder per component: Component.tsx + Component.css
  data/            All copy and link lists, kept out of the components
  style/           variables.css, scrollbar.css, global.css
  assets/          Icons imported by components (hashed by the bundler)
public/images/     Logo and promo images served at a fixed URL
```

### Components

| Component | Role |
| --- | --- |
| `Header` | Sticky nav bar; collapses to a hamburger drawer under 768px |
| `Hero` | Translator bar, search form and the top promo |
| `LanguageSelect` | The English ⇄ Urdu picker (see note below) |
| `MainContent` | Two-column grid: word entry + sidebar |
| `WordEntry` | Meanings grouped by part of speech, English beside Urdu |
| `Sidebar` | App download card, promo, and the "Other Words!" list |
| `CommonWords` | Horizontally scrollable card carousel |
| `AdCard` | Reusable dismissible promo, used by Hero and Sidebar |
| `ScrollToTop` | Floating back-to-top button, appears after 300px |

### Data

Link lists and page copy live in `src/data/` rather than inside components, so content changes never
require touching JSX:

- `navigation.ts` — header nav links
- `footer.ts` — footer columns, social links, app links
- `word.ts` — the searched word, its meanings, related words, carousel entries
- `appStores.ts` — store badges for the sidebar card

## Styling

Plain CSS, one stylesheet per component, no framework.

`src/style/variables.css` holds the design tokens — brand colors (`--color-primary` `#2269e1`,
`--color-primary-dark` `#1c56b9`, `--color-yellow` `#f8b318`, plus black/white/gray), the Inter and
Urdu font stacks, radii, shadows and the container width. `global.css` adds the reset, the shared
`.container` wrapper and the `.visually-hidden` helper; `scrollbar.css` styles the scrollbar in both
WebKit and Firefox.

### Breakpoints

`1024px`, `900px` (sidebar drop), `768px` (mobile nav), `480px`. Media queries are written inline
with each rule using native CSS nesting.

### Conventions

- BEM-ish class names (`.site-footer__brand`, `.word-card__close`)
- `.container` provides page width and gutters; each section adds only vertical padding
- Shared values go through custom properties rather than being repeated

## Accessibility notes

A few decisions that look unusual but are deliberate:

- **`LanguageSelect`** renders a visible label with a real `<select>` layered over it at
  `opacity: 0`. A native select is always as wide as its widest option, which broke the layout, but
  replacing it with `<div>`s would cost keyboard support, screen-reader semantics and the mobile
  picker. `opacity: 0` keeps the real control working while the span sizes to the selected text.
- **`.visually-hidden`** carries the search input's `<label>` and the page `<h1>`, both of which the
  design does not show. `display: none` would hide them from screen readers too.
- Icon-only links carry an `aria-label`, with the icon marked `aria-hidden`.
- Urdu text is marked `lang="ur" dir="rtl"`.

## Notes

Promo images and their CSS classes avoid the word "ad" (`promo-1.png`, `.promo-card`). Ad blockers
match on that substring and were removing the banners from the page.
