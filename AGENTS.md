# AGENTS.md — bhaier-bazar-landing-page

Pure static Bengali food product site. No build step, no package manager, no dev server.

## Quick start
- `open index.html` in a browser — nothing else needed.
- All product detail pages are under `products/`.

## Data & rendering
- Product data lives **only** in `products.js` (the `products` array).
- The landing page (`index.html`) category grid is **not** hardcoded. It iterates `getAllProducts()` on `DOMContentLoaded` and creates `.category-card` elements for each product.
- Each product detail page (`products/*.html`) calls `getProductById("product-id")` and populates all sections (hero, carousel, stats, sizes, product info, ingredients, why special, how to enjoy) via inline `<script>`.
- Adding a new product: add to `products.js` → the landing page auto-picks it up. Then create a matching `products/<id>.html` with the inline population script.

## Image assets
- All product images live under `/assets/` (root) or subdirectories like `/assets/seven-ocean/`.
- Image paths in `products.js` must exactly match the filesystem. A mismatch (e.g., `/assets/sevenocean3.jpg` vs `/assets/seven-ocean/sevenocean3.jpg`) will silently break images.
- Product `image` field (used in category cards) and `product.image` field (used on detail page) are separate entries — both must be correct.

## Current product detail pages (`products/`)
| File | Product ID |
|---|---|
| `chingri-balachao.html` | `chingri-balachao` |
| `nuts.html` | — (no matching ID, likely legacy) |
| `nuts-kaju.html` | — (no matching ID, likely legacy) |
| `nuts-kat.html` | — (no matching ID, likely legacy) |
| `seven-oceans-biscuit.html` | `seven-oceans-biscuit` |

Note: `nuts.html`, `nuts-kaju.html`, `nuts-kat.html` have no corresponding product ID in `products.js`.

## CSS quirks
- `.nav-order` uses `!important` for background/color — override with higher specificity, not by removing `!important`.
- `hero-slider` animation runs `heroSlide 12s infinite ease-in-out` with 3-4 slides and 4s delays. Any timing change needs coordinated keyframe + nth-child updates.
- Two separate animations exist: `pulse` (hero-badge dot, 1.8s) and `bounce` (floating WhatsApp action, 2.5s).
- CSS custom properties in `:root` control the green/orange theme.
- Breakpoints: 900px, 768px, 600px.

## Contact
- WhatsApp: `https://wa.me/8801869051881`
- Facebook: `https://www.facebook.com/bhaier.bazar`
- Both open in `_blank`, present in hero, order section, and floating action.

## Gotchas
- `products.js` includes `seven-oceans-biscuit` product `image: "/assets/seven-ocean/sevenocean3.jpg"` but the image is in `/assets/seven-ocean/`. This was previously fixed — verify on any future edits.
- Floating WhatsApp action has `bounce` animation; hero badge dot has `pulse` animation. Do not confuse.
- The `convertToBengali()` helper in each product detail page handles numeral conversion for sizes/prices. It is duplicated inline per page, not shared.
