---
name: Estudi Dental Carrera
description: Modernist-grounded, beige-on-ink dental identity · Lleida + Tremp
colors:
  ink: "#2A2A2C"
  off-white: "#FAF8F5"
  white: "#FDFCFA"
  cream: "#F2EDE6"
  beix: "#C1B2A2"
  beix-light: "#DDD1C6"
  beix-xlight: "#EDE6DE"
  beix-bg: "#F4EFE9"
  beix-text: "#745C4C"
  beix-rich: "#9A7860"
  beix-deep: "#685040"
  gris: "#6B6B6F"
  gris-dark: "#4A4A4E"
  success: "#2C9067"
typography:
  display:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: "clamp(3rem, 7vw, 6rem)"
    fontWeight: 400
    lineHeight: 1.07
    letterSpacing: "normal"
  headline:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: "clamp(2.2rem, 4vw, 3.8rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "normal"
  title:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: "1.15rem"
    fontWeight: 500
    lineHeight: 1.2
  body:
    fontFamily: "'N27', 'Inter', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 300
    lineHeight: 1.75
  label:
    fontFamily: "'N27', 'Inter', system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.16em"
rounded:
  sm: "6px"
  md: "12px"
  lg: "24px"
  xl: "40px"
  pill: "100px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "80px"
  pad: "clamp(20px, 5vw, 80px)"
components:
  button-primary:
    backgroundColor: "{colors.beix-deep}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.gris-dark}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  card-team:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "clamp(20px, 2.5vw, 28px)"
  card-service:
    backgroundColor: "{colors.off-white}"
    textColor: "{colors.ink}"
    rounded: "0"
    padding: "clamp(24px, 3vw, 40px)"
  chip-tag:
    backgroundColor: "{colors.beix-xlight}"
    textColor: "{colors.gris-dark}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
  pillar:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "24px 28px"
  cta-band:
    backgroundColor: "{colors.beix-deep}"
    textColor: "{colors.white}"
    rounded: "0"
    padding: "clamp(60px, 8vw, 100px) 0"
---

# Design System: Estudi Dental Carrera

## 1. Overview

**Creative North Star: "The Modernist Consultation"**

The system is a dental brand operating from inside a real modernist building in Lleida (Carrer Major, 74–76). That physical fact is the design's center of gravity: warm beige pedra against deep ink, Playfair Display running italic on emphasis, generous margins, no stock-photo smiles. The visual temperature of the web should match the temperature of walking into the clinic — not clinical blue-white under fluorescent light, but cream and shade and patinated wood, with a quiet confidence that comes from *not* having to shout.

The palette is deliberately earth-based: a family of beiges (pedra, light, x-light, bg, rich, deep) pulled toward oklch warm hue 52° anchored against a near-black ink (#2A2A2C, never `#000`). The system rejects the entire category-reflex of "healthcare → white + teal" and "dental → blue + smile." Authority here is warm, not sterile. Reassurance comes from texture, not from promises.

Quoting PRODUCT.md: *"sòbria, rigorosa, propera"* — this spec is the visual contract for those three adjectives. Display type carries the sòbria (Playfair, italic for moments of emphasis, never decorative); generous line-height and 65–75ch cap deliver the rigorosa; earth tones and the edifici modernista as narrative backdrop deliver the propera.

**Key Characteristics:**
- Beige-on-ink committed palette (not restrained) — the warm family carries 40–60% of most surfaces.
- Playfair Display + custom N27 sans — one of each, never mixing display faces.
- Pill buttons (`100px` radius) as the signature shape; cards use `24px`.
- Flat-by-default; shadows reserved for hover lift and depth cues, never decoration.
- Italic as the only form of display emphasis. No bold, no uppercase on headlines.
- Motion is slow exponential ease (`cubic-bezier(0.23, 1, 0.32, 1)`), never bounce.

## 2. Colors: The Beige Pedra Palette

The palette is one warm hue family (beige / pedra, oklch warm 52°) against one cold neutral (ink #2A2A2C). Every "neutral" is tinted toward the brand hue — there is no pure grey and no pure white in the system.

### Primary
- **Beige Pedra** (`#C1B2A2`, `--beix`): the namesake of the brand. Decorative role only — too light for body text on white. Used as accent underline on nav, decorative orbs in the hero, active dots on location pills, hover accent on footer links.
- **Beige Deep** (`#685040`, `oklch(40% 0.065 52)`, `--beix-deep`): the load-bearing brand color. Drives primary button fill, the CTA band surface, and the `marquee` strip. Contrast on white ≈ 6.1:1 (WCAG AA for normal text).

### Secondary
- **Ink** (`#2A2A2C`, `--ink`): the anchor dark. Hero backgrounds, headlines, body text on light surfaces, outline buttons, footer. Never `#000`.
- **Beige Text** (`#745C4C`, `oklch(43% 0.06 52)`, `--beix-text`): the text role of the beige family. Used for italic emphasis inside headlines (`h1 em`), labels, eyebrows, meta. Contrast on white ≈ 5.3:1.
- **Beige Rich** (`#9A7860`, `oklch(54% 0.055 56)`, `--beix-rich`): display-only tone for large numbers (stat counters). Contrast 3.3:1 — forbidden for body text.

### Neutral (tinted, never pure)
- **Off-White** (`#FAF8F5`, `--off-white`): default body surface. Section backgrounds.
- **Cream** (`#F2EDE6`, `--cream`): secondary surface for alternating sections; light page-hero.
- **White** (`#FDFCFA`, `--white`): card interiors, pillar backgrounds. Warmer than #fff.
- **Beige BG** (`#F4EFE9`, `--beix-bg`): the warmest surface tone — used behind team photos to build visual continuity between clinic interior light and the web.
- **Beige Light** (`#DDD1C6`) / **Beige X-Light** (`#EDE6DE`): borders, chip backgrounds, dividers.
- **Gris** (`#6B6B6F`, `--gris`): body copy on white. **Gris-Dark** (`#4A4A4E`, `--gris-dark`): nav links, chip text, dark button hover.

### Named Rules
**The No-Pure-Anything Rule.** Neither `#000` nor `#fff` appears anywhere in the system. The darkest surface is `--ink` (#2A2A2C), the lightest is `--white` (#FDFCFA). Any value migrating toward pure black or pure white is a bug.

**The Beige-Hierarchy Rule.** The beige family is a hierarchy, not a palette. Light and x-light are for fills; bg is for photo backgrounds; text is for labels and emphasis; rich is display-only; deep is load-bearing (CTAs, marquee, footer accents). Moving up or down this ladder changes meaning.

**The Italic-Only Emphasis Rule.** Emphasis inside display type is expressed through italic (Playfair's italic is the reason this font is here). Never bold, never uppercase, never color-shift to an accent. The pattern is `<em style="font-style:italic; color: var(--beix-text)">paraula</em>` inside an otherwise-regular headline.

## 3. Typography

**Display Font:** Playfair Display (Google Fonts) — italic on emphasis, regular weight (400) on titles, medium (500) for small titles.
**Body Font:** N27 (self-hosted woff2, weights 300 / 400 / 500 / 700).
**Label/Mono Font:** N27 at 0.72rem with 0.16em tracking, uppercase — used as a single tight role, not a family.

**Character:** Playfair is the voice of the building — serif with pronounced contrast, Italic forms that feel like handwriting from a careful hand. N27 is its quiet companion: humanist-geometric, a bit more modern than Söhne but not as warm as Inter. The pairing reads as **"editorial + clinical record"**: a headline that could be a magazine title over body copy that could be a clinic report.

### Hierarchy
- **Display** (`Playfair`, weight 400, `clamp(3rem, 7vw, 6rem)`, line-height 1.07): hero title only. Always lowercase / sentence case, never uppercase. Italic on the key word (`L'odontologia com ha de ser`).
- **Headline** (`Playfair`, weight 400, `clamp(2.2rem, 4vw, 3.2rem)`, line-height 1.1–1.15): section H2. Uses `<em>` for emphasis in `--beix-text`.
- **Title** (`Playfair`, weight 500, `1.05–1.5rem`, line-height 1.2): card heads (team member name, pillar title, service card title).
- **Body** (`N27`, weight 300, `1rem`, line-height 1.75–1.8, `color: var(--gris)`): all running copy. **Cap at 65–75ch** — most paragraphs already set `max-width: 420px–480px`, do not stretch longer.
- **Label** (`N27`, weight 400, `0.72rem`, letter-spacing 0.16em, UPPERCASE, `color: var(--beix-text)`): eyebrows above section titles, tags, metadata.
- **Inline em inside display/headline:** italic + `--beix-text`. The same em pattern in body copy drops the color shift (italic only).

### Named Rules
**The Single-Italic Rule.** Each display headline has at most one italic span — the single word that carries the thought. Italicizing multiple words in a headline dilutes the device to decoration.

**The 300-Weight Body Rule.** Running body copy is weight 300, not 400. The lightness is deliberate: it gives Playfair's display weight the contrast to feel editorial instead of busy. Do not upweight body to 400 "for readability" — fix contrast in color instead.

## 4. Elevation

The system is **flat by default** with a three-step ambient shadow vocabulary used sparingly. Depth is conveyed primarily through tonal layering (cream over off-white over white, or ink over beige-deep) rather than shadow. Shadows appear as a state response (hover lift on buttons and cards) and as grounding on floated elements (nav when scrolled, back-to-top, team-teaser photo card). Decorative shadows are prohibited.

### Shadow Vocabulary
- **`--shadow-sm`** (`0 2px 12px rgba(42,42,44,.06)`): barely-there ambient. Reserved for nav hover states and subtle card hints. The tint is ink-tinted rgba, not neutral black.
- **`--shadow-md`** (`0 8px 32px rgba(42,42,44,.10)`): standard hover lift for primary buttons and team cards. Paired with `transform: translateY(-2px)` or `translateY(-3px)`.
- **`--shadow-lg`** (`0 24px 60px rgba(42,42,44,.14)`): reserved for the team-teaser photo card and location-card CTA hover. Two-part shadow layered with `0 4px 16px` for closer contact.

### Named Rules
**The Flat-At-Rest Rule.** Every surface is flat at rest. Shadows are earned by interaction (hover, focus) or by meaningful altitude (a photo hero card that *is* the hierarchical focus of the section). No shadow appears "because the card needs to look like a card."

**The Ink-Tinted Shadow Rule.** Shadow color is always `rgba(42, 42, 44, α)` or `oklch(18% 0.03 55 / α)` — the ink hue, never pure black. Neutral-black shadows against a beige surface read as dirty; ink-tinted shadows stay tonal.

## 5. Components

### Buttons
- **Shape:** pill (`border-radius: 100px`), not rounded-rectangle. `padding: 14px 28px` (sm: `12px 20px`, lg: `16px 36px`). Icon + label with `gap: 8px`.
- **Primary** (`--btn--primary`): `background: var(--beix-deep)` + `color: var(--white)`. The load-bearing CTA — "Demana cita", "Demanar visita".
- **Outline** (`--btn--outline`): `1.5px solid var(--ink)` + `color: var(--ink)`. Secondary CTAs on light backgrounds.
- **Ghost** (`--btn--ghost`): `1.5px solid rgba(255,255,255,.45)` + `color: var(--white)`. Only appears on ink / beige-deep surfaces.
- **Dark** (`--btn--dark`): `background: var(--ink)` + `color: var(--white)`. Rare alternative when beige-deep is already in use.
- **Hover / Focus:** `transform: translateY(-2px)` with `--shadow-md` emerging, background shift to `--gris-dark` on primary. Active: `translateY(-2px) scale(0.97)` (scale snap at 60ms). Focus-visible: `outline: 2px solid var(--beix-text); outline-offset: 3px`.
- **Touch target:** minimum 44px height enforced via `min-height: 44px` on `.btn--sm` and `.nav__burger`.

### Chips / Tags (`.team-card__tags span`)
- **Style:** `background: var(--beix-xlight)` + `color: var(--gris-dark)`, `border-radius: 100px`, `padding: 4px 10px`, `font-size: 0.72rem`. Pill-shaped, unified with buttons but smaller and quieter.
- **State:** static only (display role, not interactive). Used for specialty tags on team cards.

### Cards
Cards are used **sparingly and with variety** — never a uniform grid of identical cards.

- **Team Card** (`.team-card`): horizontal layout with photo (120px width, `object-fit: cover`, `object-position: top`, background `--beix-bg`) + body. Radius `--radius-lg` (24px). Hover: `translateY(-3px)` + `--shadow-md`. On mobile, flips to vertical with 200px photo height.
- **Service Card** (`.service-card`): part of a 3×3 grid with a featured first card (`grid-column: 1 / 3; grid-row: 1 / 3`) that breaks the monotony. Background `--off-white`, hover fades to `--white`. **No radius** on individual cards — the outer grid carries `--radius-lg`.
- **Pillar Card** (`.pillar`): white surface, 1px border in `--beix-xlight`, radius `--radius-md`. Numbered `01 02 03` in `--beix-text` at `0.85rem`, then Playfair heading, then N27 body.
- **About Card** (`.about__card--1`): dark quote card on `--ink`, with a decorative `"` glyph at 240px using `rgba(255,255,255,0.04)` in the corner — the one decorative moment in the system, justified because it carries content.

### Inputs (`.form-row input, textarea`)
- Pattern not yet extensively defined in the CSS; form treatment is minimal. When extended, follow: `background: var(--white)`, `1px solid var(--beix-xlight)`, `border-radius: var(--radius-md)` (12px — distinct from the pill buttons). Focus: border-color shifts to `--beix-text` + 2px outline. Error: border `--success` hue inverse (to be specified).

### Navigation (`.nav`)
- Fixed-top, transparent until `.scrolled` state activates `background: rgba(250,248,245,.93)` + `backdrop-filter: blur(18px)` + 1px bottom shadow. This is the **only** place in the system where `backdrop-filter` is permitted.
- Links: `0.875rem`, weight 400, `--gris-dark` default → `--ink` on hover/active, with a 1px `--beix` underline that scales from `scaleX(0)` to `scaleX(1)` on hover (transform-origin: left).
- Logo icon rotates `-7deg scale(1.1)` on hover — a subtle playful beat in an otherwise composed system. Keep it.
- **Hero nav variant** (`.nav--hero`): inverts text to white over the dark hero; when scrolled over hero, the state chain re-inverts to ink. Do not simplify this chain.

### Marquee (`.marquee`)
- Signature component: an infinite-scrolling strip of clinic values / seu names on `--beix-deep` background. `animation: marquee 30s linear infinite`. Uppercase N27 400, 0.78rem, tracking 0.08em. Keep the content sparse — the point is rhythm, not reading.

### CTA Band (`.cta-band`)
- Full-bleed `--beix-deep` surface with an animated diagonal gradient shimmer (`bandShimmer 10s ease-in-out infinite`, 240% background-size). The shimmer is intentionally barely perceptible — it's texture, not decoration. Respects `prefers-reduced-motion`.

### Hero (home)
- Ink background with two floating radial "orb" gradients (beige and grey) drifting at 10s. The orbs are structural, not ornamental — they carry the warm hue forward over the dark surface so the system's tonal identity reads in the first viewport.
- Scroll hint at bottom-right with a 1px gradient line and pulsing opacity — only visible on desktop (hidden under 768px height).

## 6. Do's and Don'ts

### Do:
- **Do** keep the beige family as a committed 40–60% presence on most surfaces. This is not a "restrained + one accent" palette.
- **Do** use Playfair italic for emphasis inside headlines — one italic span per headline, using `<em>` with `color: var(--beix-text)`.
- **Do** cap body copy at 65–75ch (most paragraphs already set `max-width: 420px–480px`).
- **Do** use pill buttons (`border-radius: 100px`) as the primary CTA shape. Anything else reads off-brand.
- **Do** reserve `--shadow-md` and `--shadow-lg` for hover lift, photo hero cards, and grounding fixed elements. Flat at rest otherwise.
- **Do** tint every neutral toward the brand hue. `--off-white` is warmer than `#fff`; `--ink` is warmer than `#000`. Every value respects this.
- **Do** treat the modernist building as narrative content — photography, direction of art, architectural detail — per PRODUCT.md Principle 2.
- **Do** make the two-seu coherence visible: the same type, the same palette, the same button shapes across Lleida and Tremp. Per PRODUCT.md Principle 3.

### Don't:
- **Don't** use `#000` or `#fff` anywhere. The darkest value is `--ink` (#2A2A2C); the lightest is `--white` (#FDFCFA).
- **Don't** use the category-reflex healthcare palette — blue + teal + white + stock smiles. Per PRODUCT.md anti-references (Vitaldent, Clinicachela, clinicarrera.cat legacy).
- **Don't** use gradient text (`background-clip: text` on a gradient). Forbidden by shared design laws and by this project's restraint.
- **Don't** use decorative glassmorphism. `backdrop-filter: blur` is permitted only on `.nav.scrolled` (functional) and `.location-card__cta` (functional over image backgrounds). Never decorative.
- **Don't** build hero-metric templates (big number + small label + supporting stats + gradient accent). Per PRODUCT.md anti-references ("Hero amb big number / mètriques").
- **Don't** use side-stripe borders as a colored accent (`border-left: 4px solid ...`). Forbidden across the whole impeccable skill.
- **Don't** build a uniform grid of identical cards with icon + heading + text repeated. The service grid already varies via a featured first tile — keep that variation. Per PRODUCT.md anti-references ("cards iguals en graella").
- **Don't** use generic flaticon-style icons. The current codebase uses minimal SVG (ornamental `◆` for formation) or none — keep it that way.
- **Don't** add uppercase / bold / color-shift as display emphasis. Italic in `--beix-text` is the only permitted pattern.
- **Don't** use em dashes (—) in UI copy. Per shared design laws. Use commas, colons, or periods.
- **Don't** write "confiança, qualitat, somriure" or "la teva salut és la nostra prioritat" or any saturated-sector cliché. Per PRODUCT.md Brand Personality ("El que NO és la veu").
- **Don't** present "odontologia conservadora" as a service card in a service grid. It is a filosofia, not a tractament. Per PRODUCT.md Principle 4.
- **Don't** bounce / elastic ease anywhere. All motion uses `cubic-bezier(0.23, 1, 0.32, 1)` or equivalent exponential ease-out.
- **Don't** animate layout properties. Transform and opacity only. Already respected in `.reveal`, `.btn`, `.nav__logo-icon` — keep it.
- **Don't** break `prefers-reduced-motion`. The CSS already honors it globally; new animations must too.
