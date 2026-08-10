# Snoonu Design System

## Company Overview

**Snoonu** is Qatar's leading super app — a one-stop platform for on-demand delivery covering food, grocery (Snoomart), pharmacy, electronics/marketplace, flowers & gifts, laundry, courier (Snoosend), and event ticketing (S City). Tagline: **"Your Everything App."**

Operating exclusively in Qatar (currency: QAR — Qatari Riyal), Snoonu is mobile-first with native iOS and Android apps and a web presence. The app is bilingual: **English (LTR)** and **Arabic (RTL)**, using two separate typefaces per language.

### Products / Surfaces

| Product | Description |
|---|---|
| **Food** | Restaurant delivery — the core product |
| **Snoomart** | Grocery delivery (24/7 badge on icon) |
| **Grocery** | General grocery vertical |
| **Marketplace** | Electronics, retail, general merchandise |
| **Pharmacy** | Medicine and health products |
| **Snoosend** | On-demand courier / package delivery |
| **S City** | Event ticketing, experiences |
| **Flowers & Gifts** | Gift delivery |
| **SnooLaundry** | Laundry service |
| **Snoonu Market** | Snoonu's own marketplace brand |

### Loyalty Program

Tiers (ascending): **Bronze → Silver → Gold → Platinum → Royal Club**

**S+ (Snoonu Plus)**: Premium subscription tier with a distinctive pink–red–orange gradient brand identity. Displayed on restaurant cards and in wallet.

### Figma Source

- File: `Design_System_draft.fig` (attached by user, mounted at `_fig/Design_System_draft/`)
- Page: "Design system Snoonu draft" (node `10:1663`)
- 32,741 nodes; 1,196 design tokens across Light/Dark and EN/AR modes
- Extracted tokens: `_fig/Design_System_draft/tokens.css`
- Extracted components: `_fig/Design_System_draft/components/`

> Note: Many component instances in the Figma file reference external components not included in this partial export (stubbed as `data-external` in the JSX). The design system is a draft / work-in-progress.

---

## Content Fundamentals

### Tone & Voice

- **Warm, direct, enthusiastic** — short bursts of copy, no fluff
- **Second person "you"**: "You've got free delivery!", "Your Everything App"
- **Encouraging on success**: "Awesome! You've got free delivery!" — exclamation points on positive outcomes
- **Friendly on errors**: "Oops… Something went wrong. Try again" — lowercase "oops", ellipsis softens the blow
- **Conversational contractions**: "it's ready", "you're"
- **Action-first button labels**: "Add to cart", "Place Order", "Go to Checkout", "See All"

### Casing

- **Buttons**: Sentence case — "Add to cart", "Go to Checkout", "Place Order"
- **Navigation tabs**: Title case — "Royal Club", "My Favorites"
- **Section headers**: Title case — "See all" (lowercase "all" is a Snoonu quirk)
- **Badges**: ALL CAPS or Title Case — "Best Seller", "30% Off", "Buy 1 + Get 1"
- **Error messages**: Sentence case — "No Internet Connection"
- **Category names**: Title Case — "Flowers & Gifts", "Home Decor"

### Number / Currency Formatting

- Currency suffix with space: `170 QAR` or `10 QR` (both used, QR is shorter)
- Arabic: `ر.ق` suffix
- Time: `15–20 min` (en-dash), `10:00 am`
- Delivery estimates: "Today, within 45 min", "Tomorrow, 10:00 am"

### Emoji Usage

Emoji are **not** used in the product UI. The Figma tokens show a stray 🚫 emoji on some Arabic-mode labels as a design-system warning marker — this is internal tooling only, not production UI.

### Bilingual Notes

- English: LTR, Inter typeface
- Arabic: RTL, Estedad typeface (see Typography section)
- Arabic copy is formal but natural — not overly stiff. E.g., "اطلب طعامك واستلمه بنفسك" ("Order food and pick it up yourself")
- Some UI elements remain in English even in Arabic mode (e.g., "Apple Pay", "Google Pay")

---

## Visual Foundations

### Colors

**Primary Brand Red** — `#D90217` (primary-500) — the dominant CTA, badge, and active-state color across the entire app.

- Light tint for backgrounds: `#FFE7E6` (primary-50)
- Hover/press: `#B30018` (primary-600)
- Dark variant: `#8C0017` (primary-700)

**App Backgrounds**
- App shell: `#F5F5F5` (grey-100) — the persistent grey canvas
- Cards/surfaces: `#FFFFFF` white
- Dark mode shell: `#121212` (graphite-900)

**Text Hierarchy**
- Primary: `#000000` — headings, labels
- Secondary: `#75757E` — descriptions, meta
- Tertiary/muted: `#717171` — captions, placeholders
- Disabled: `#B4B4B4` — inactive elements

**Status Colors**
- Success / delivery active: `#22C55E` (herbal-500)
- Warning / promotional: `#FFDA0A` (yellow-500)
- Error / unavailable: `#FF5C5F` (cool-red-500)
- Info: `#017BFF` (blue-500)

**S+ Premium Gradient** — `linear-gradient(135deg, #FF5AC8, #FF5078, #FF8C28)` (pink → rose → orange)

**Dark Mode** — full dark mode support using graphite scale (`#121212` base, `#1E1E1E` surface, `#2C2C2C` elevated).

### Typography

**English font**: **Inter** (Google Fonts) — clean, neutral, modern sans-serif. Not system default.
**Arabic font**: **Estedad** — a Persian/Arabic variable typeface used for all Arabic-mode content. Substitute: Noto Sans Arabic (flagged below).

Typography uses **negative letter spacing** at larger sizes (a key Inter characteristic):
- 32px: −0.69px | 30px: −0.64px | 24px: −0.47px | 20px: −0.33px | 16px: −0.18px | 14px: −0.09px

Scale:
| Role | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| Display | 32px | Bold | 38px | Hero, splash, onboarding |
| Display Small | 30px | Bold | 36px | Sub-hero, marketing |
| H1 Screen | 24px | Bold | 32px | Main screen title |
| H2 Section | 20px | Bold | 28px | Section headers, modal titles |
| H3 Block | 18px | Bold | 24px | Card titles, block headers |
| H4 Compact | 16px | Bold | 20px | Compact headers, tab labels |
| Body | 16px | Regular | 22px | Body copy, descriptions |
| Body Strong | 16px | SemiBold | 20px | Active labels, emphasized body |
| Body Italic | 16px | Italic | 22px | Quotes, annotations |
| Small | 14px | Regular | 20px | Secondary descriptions |
| Small Strong | 14px | SemiBold | 20px | Tags, action items, buttons |
| Caption | 12px | Regular | 16px | Timestamps, metadata |
| Caption Strong | 12px | SemiBold | 16px | Important small labels |
| Label/Eyebrow | 10px | Bold | 12px | ALL-CAPS section labels |

### Spacing

Base unit: **4px**. Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 56.
Standard screen padding: `16px` horizontal.
Section gaps: `12px` between cards, `16px` between sections.

### Border Radius

| Token | Value | Usage |
|---|---|---|
| `radius-sm` | 8px | Small tags, badges |
| `radius-md` | 12px | Cards, inputs, category chips |
| `radius-lg` | 20px | Large cards, modals |
| `radius-xl` | 24px | Hero banners, bottom sheets |
| `radius-2xl` | 28px | Prominent hero elements |
| `radius-pill` | 100px | Buttons, chips, pills |

### Cards

Cards use `border-radius: 12–28px`, white background (`#FFFFFF`), very subtle shadow:
`box-shadow: 0 1px 4px rgba(0,0,0,0.08)` — barely visible, relies on background contrast (white on grey).
No visible card borders in light mode. Cards feel "floating" on the grey canvas.

### Shadows / Elevation

Minimal. Snoonu uses background-color contrast over explicit drop shadows.
- Level 0: No shadow (flat, same-color surface)
- Level 1: `box-shadow: 0 1px 4px rgba(0,0,0,0.08)` — cards on grey bg
- Level 2: `box-shadow: 0 4px 16px rgba(0,0,0,0.16)` — modals, bottom sheets
- Blur/frosted-glass: `backdrop-filter: blur(12px)` — used in overlays

### Imagery

- Product/food photos: **warm, saturated, appetite-first**. Dark-ish backgrounds on restaurant cards (photo fills the card).
- Hero banners: custom illustrations on brand-colored or gradient backgrounds (seen: purple/violet, grey, playful brand art)
- Category icons: custom illustrated icons in rounded-square containers (56–68px), brand-colored backgrounds
- No grain, no heavy filters, no B&W imagery

### Animation

- Transitions: fast, iOS-native feel. `0.2s ease` for most state changes
- Page transitions: slide (LTR push/pop navigation)
- Loading: skeleton screens using `grey-100 → grey-50` shimmer animation
- Add-to-cart: brief scale-up + bounce on the cart badge count
- No heavy spring animations; clean and snappy

### Press / Hover States

- Buttons: `opacity: 0.85` on press (no color change)
- Cards: subtle `scale(0.98)` on press
- Tab bar icons: fill switches to red (`#D90217`) on active

### Backgrounds / Gradients

- App shell: flat `#F5F5F5` — no patterns, no textures
- Hero banners: brand illustration backgrounds (varies per campaign)
- S+ badge/elements: `linear-gradient(135deg, #FF5AC8, #FF5078, #FF8C28)`
- Skeleton: `linear-gradient(90deg, #EAEAEA, rgba(245,245,245,0.4))`

### Corner Radius Personality

Very rounded — Snoonu leans heavily into rounded corners for a **friendly, approachable feel**. Even the app chrome (phone frame) uses rounded corners. Hero banners push to 28px. Only dividers/rules are sharp.

---

## Iconography

See `assets/README.md` for detail.

**Short version:**
- Custom icon set used throughout the app (not a public CDN set)
- Icons are **outline style** in the bottom nav (inactive), **filled/colored** when active
- Category icons are **custom illustrated** with brand-colored backgrounds
- No SVG icon assets were extractable from the partial Figma export
- **Substitution used**: Phosphor Icons (outline weight) loaded from CDN — flagged in UI kit

---

## File Index

### Root
| Path | Description |
|---|---|
| `README.md` | This file — overview, foundations, content guide |
| `SKILL.md` | Agent skill definition for Claude Code |
| `colors_and_type.css` | All CSS custom properties: colors, typography, spacing, radius, shadows |

### Assets
| Path | Description |
|---|---|
| `assets/README.md` | What's needed + iconography notes. No visual assets extracted from Figma partial. |

### Design System Cards (`preview/`)
| File | Group | Description |
|---|---|---|
| `colors-primary.html` | Colors | Brand red scale 50–900 |
| `colors-semantic.html` | Colors | Semantic UI tokens (bg, surface, text, border) |
| `colors-status.html` | Colors | Success, warning, error, info |
| `colors-extended.html` | Colors | Orange, violet, pink, electric-blue, yellow, gold, herbal, graphite |
| `type-display-heading.html` | Type | Display 32px → H4 16px |
| `type-body-caption.html` | Type | Body 16px → Label 10px |
| `type-bilingual.html` | Type | English (Inter) vs Arabic (Noto Sans Arabic substitute) |
| `spacing-tokens.html` | Spacing | 4–80px scale bars |
| `radius-tokens.html` | Spacing | 0, 4, 8, 12, 20, 24, 28, pill |
| `shadow-elevation.html` | Spacing | 6 elevation levels + glass blur |
| `components-buttons.html` | Components | Primary, secondary, ghost, icon, quantity buttons |
| `components-badges.html` | Components | Discount, promo, status badges + filter chips |
| `components-bottom-nav.html` | Components | 5-tab bottom navigation bar |
| `components-inputs.html` | Components | Search bar, text input, phone input + error state |
| `components-cards.html` | Components | Product card + restaurant card |
| `brand-splus-loyalty.html` | Brand | S+ gradient + loyalty tier progression |
| `brand-categories.html` | Brand | 10 service category icons (emoji placeholders) |

### UI Kits
| Path | Description |
|---|---|
| `ui_kits/mobile_app/index.html` | **Main prototype** — 5-screen click-through app |
| `ui_kits/mobile_app/components.jsx` | Shared components: StatusBar, BottomNav, SearchBar, Icons, Badge, etc. |
| `ui_kits/mobile_app/HomeScreen.jsx` | Home feed — address, hero banner, categories, products, restaurants |
| `ui_kits/mobile_app/StoreScreen.jsx` | Store listing + Product detail modal |
| `ui_kits/mobile_app/CartScreen.jsx` | Cart, payment selection, checkout + Order tracking |

### Figma Source (raw extraction)
| Path | Description |
|---|---|
| `_fig/Design_System_draft/tokens.css` | All 1,196 Figma variables as CSS custom properties |
| `_fig/Design_System_draft/components/` | Extracted JSX for TextStyles and Master screen frames |
| `_fig/Design_System_draft/inventory.json` | Component list, token count, extraction warnings |
