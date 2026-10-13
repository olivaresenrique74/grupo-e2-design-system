# Grupo E2 — Design System

Consultoría corporativa, estandarización de operaciones y gestión de proyectos. Servicios personalizados para empresarios; audiencia principal: pequeñas y medianas empresas mexicanas.

This design system encodes the official brand identity of **Grupo E2** (legal wordmark: *E2 Corporative Group*) and applies it to digital surfaces.

---

## 1. Sources

Everything here derives from material the client supplied. Nothing was invented from an external reference.

| Source | What it gave us |
|---|---|
| `uploads/Manual_de_Marca_Grupo_E2.docx` — *Branding · Manual de Marca · Grupo E2 · Consultoría Corporativa · México 2026* | Logo construction and misuse rules, clear-space rule, monochrome usage, official typeface (Poppins Bold + Regular), full colour palette with RGB/CMYK/HEX/Pantone |
| `uploads/logo azul.png` | Primary full-colour lockup → `assets/logo-primary.png`, `assets/mark-primary.png` |
| `uploads/letra blanca.png` | White lockup for dark grounds → `assets/logo-white.png`, `assets/mark-white.png` |
| `uploads/letra negra.png` | One-ink black lockup → `assets/logo-black.png` |
| `uploads/E2_Corporative-Logotipo-N-02.png`, `uploads/letra blanca_fondo negro.jpg` | White-on-black reference renders |
| `uploads/fondo azul.png` | Lockup on brand navy → kept as `assets/logo-on-navy.png` reference |

**Not received / blocked**
- `uploads/E2_Logotipo.ai` was listed in the brief but is **not present** in the project. Vector artwork (SVG/AI) is still missing — everything in `assets/` is raster PNG.
- No **website code, Figma file, screenshots or live-site access** for grupoe2.com. The brand manual is the only design source.
- No **Poppins font binaries**; the system loads Poppins from the Google Fonts CDN (see `tokens/fonts.css`). Poppins *is* the manual's official typeface, so this is a delivery-channel substitution, not a typeface substitution.
- No **proprietary icon set**; Lucide is used as a documented stand-in (see *Iconography*).
- No **brand photography or illustration**. Where imagery belongs, the kits use navy panels, the mark as a low-opacity watermark, or explicit grey placeholders.

---

## 2. Brand in one paragraph

Grupo E2 is a corporate consultancy. Its identity is built to read as *solidez, precisión y una visión moderna del acompañamiento estratégico* — solidity, precision, and a modern view of strategic support. Visually that means a deep navy field, one saturated orange accent used sparingly, geometric sans-serif type, flat-cut shapes with no ornament, and a lot of white space. The mark itself is an "E" built from three sheared planes, one of them orange: corporate weight, contemporary construction.

---

## 3. Content fundamentals

**Language.** Spanish (Mexico) is the primary language. The brand's own name uses the English wordmark "E2 Corporative Group" — never translate or reorder it. English copy is acceptable for international decks; Spanish is the default.

**Person.** Address the client as **tú** in marketing surfaces ("Agenda un diagnóstico", "¿Qué proceso se rompe primero?") and speak as **nosotros** for the firm ("Documentamos los procesos que ya funcionan"). Use **usted** only in formal contracts, proposals and letterhead. Never write in first-person singular — the firm speaks, not an individual.

**Tone.** Matter-of-fact, specific, unembellished. The manual itself models it: instructions are given as plain constraints ("El logotipo nunca debe: distorsionarse, estirarse o rotarse"), with an *IMPORTANTE* flag rather than exclamation marks. Copy states what is delivered and by when. It does not sell adjectives.

Do write:
> Documentamos los procesos que ya funcionan, medimos los que no, y dejamos un manual que el equipo puede seguir sin nosotros.

> Alcance escrito, responsable con nombre.

> Una sesión de 60 minutos, sin costo. Al terminar recibes un resumen escrito de los tres frentes más urgentes.

Don't write:
> ¡Transformamos tu empresa con soluciones innovadoras de clase mundial! 🚀

> Somos líderes en sinergia estratégica y excelencia operativa.

**Casing.** Sentence case for headings and buttons ("Agendar diagnóstico", not "Agendar Diagnóstico"). ALL CAPS only in the eyebrow/label treatment, where it is paired with `.18em` tracking — that combination is a brand signature and appears in the manual's running footers (`MANUAL DE MARCA · GRUPO E2 · IDENTIDAD VISUAL`). Never set a sentence or paragraph in caps.

**Punctuation.** The middot with spaces (` · `) is the brand's separator, used in footers, metadata and eyebrows. Em dashes are used for parenthetical asides, em-dash bullets (`—  `) appear in the manual's prohibition lists. Numbers use Mexican conventions (`+52 55 0000 0000`, `MXN`, `9:00 – 18:00`).

**Emoji: never.** Not in product UI, not in marketing, not in email. Status is carried by `Badge` tones and Lucide icons.

**Numbers and claims.** Prefer a countable fact to a superlative: "6 semanas para el primer entregable", "1 responsable por proyecto". Every figure in a deliverable must be traceable to client data — placeholder figures in this system (e.g. `+120 proyectos`) are illustrative and must be replaced before publication.

---

## 4. Visual foundations

**Colour.** Two brand colours only (`tokens/colors.css`):
- **Azul Marino `#1F3E6F`** (`--e2-navy`) — RGB 31,62,111 · CMYK 72,44,0,56 · Pantone ≈ 534 C. The dominant colour: full-bleed hero panels, footers, primary buttons, headings.
- **Naranja `#FF751F`** (`--e2-orange`) — RGB 255,117,31 · CMYK 0,54,88,0 · Pantone ≈ 1585 C. Accent only. It appears as: the active tab underline, the required-field asterisk, the focus ring, the eyebrow label colour, the single most important CTA on a screen, and one short bevel tick. Orange is never a background wash and never a large field.

Derived ramps (`--navy-50…900`, `--orange-50…700`) exist for tints and hovers. Neutrals are cool — the grey axis carries a slight blue so it sits with the navy rather than fighting it. Semantic status colours (success/warning/danger/info) are muted and each carries a soft tint for backgrounds. **Maximum two background colours per composition**: white (or grey-50) plus navy. Always use the semantic aliases (`--text-body`, `--surface-card`, `--action-primary-bg`) rather than raw ramp steps; `.e2-on-dark` flips the whole alias set for sections sitting on navy.

**Type.** Poppins throughout — the manual specifies exactly two weights, Bold for titles and the brand name, Regular for body and contact details. This system adds SemiBold (600) for headings and UI labels and Medium (500) for nav/controls, because on screen Bold at 21px is too heavy for a card title. Display sizes 64/52/40 carry tight negative tracking (−3% to −2.4%); body sits at 16px with a generous 1.65 line-height; the eyebrow is 12px SemiBold uppercase at `.18em`. Prose is capped at `--measure-prose` (66ch). Headings use `text-wrap: balance`, body uses `text-wrap: pretty`.

**Spacing and layout.** 4px base scale, `--space-1` (2px) → `--space-14` (128px). Content lives in a 1200px `--container-max` with 48px gutters; long-form text in a 760px `--container-narrow`. Section rhythm is 96px vertical (`--section-y`), 64px on compact pages. Cards pad 24px, stack gaps 12–16px, grid gaps 20px. The header is the only fixed/sticky element — 76px tall, sticky, translucent white with `backdrop-filter` and a hairline that appears only after scroll. Nothing else is pinned; no floating action buttons, no sticky sidebars except the summary card on a service detail page.

**Corners.** Deliberately crisp: 2px on checkboxes, 4px on tags and small chips, 6px on all controls (`--radius-control`), 10px on cards (`--radius-card`), 16px on dialogs and large panels (`--radius-surface`). Pills (`999px`) are reserved for `Badge` status — nothing else in the system is pill-shaped. Rounded corners never exceed 16px; the geometry stays closer to the mark's flat cuts than to a soft consumer app.

**The bevel motif.** Borrowed from the logo's 22° sheared planes (`--bevel-angle`, `--bevel-cut`, `--bevel-clip`): a flat corner cut on a navy panel, a sheared section divider, the orange segment at the start of a rule, or `Card`'s `accentEdge` tick. Used at most once per composition, and never on buttons or form fields.

**Borders.** Hairlines do the structural work, not shadows. `--border-subtle` (grey-200) for card and section edges, `--border-default` (grey-300) for control outlines, `--border-strong` (grey-400) for unchecked choice controls, `rgba(255,255,255,.14)` on navy. Dividers are 1px; the method-step rule and the active tab indicator are 2px.

**Shadows.** Navy-tinted (never neutral black), soft and low. `--shadow-1` at rest, `--shadow-2` for raised surfaces, `--shadow-3` on card hover and toasts, `--shadow-4` for dialogs only. Nothing sits above `--shadow-2` at rest. There are no inner shadows on inputs — focus is communicated by border colour plus a 3px navy 12% halo. Full-bleed navy panels get a hairline instead of a shadow.

**Transparency and blur.** Two uses only: the sticky header (`rgba(255,255,255,.88)` + `--blur-glass`) and the dialog scrim (`rgba(15,31,56,.55)` + 3px blur). No frosted cards, no glassmorphism. Watermarks — the mark behind a hero — sit at 6–12% opacity.

**Protection gradients.** Text over imagery uses `--scrim-navy`, a bottom-up navy gradient from transparent to 72%. Capsule/pill backgrounds behind text are not used; the brand prefers a scrim or a solid panel.

**Imagery.** No brand photography has been supplied. When it exists, the direction is cool and neutral: real offices, plant floors, working meetings; daylight or cool white light; no warm filters, no grain, no heavy colour grading; navy present in the frame where possible. Black-and-white is acceptable for portraits. Photos crop to 16:9 or 3:2 with a 10px radius, or run full-bleed inside a navy section with a scrim. Until real photography arrives, use navy panels, grey placeholders, or the mark as a watermark — **not** stock-looking abstractions or generated illustration.

**Animation.** Corporate restraint. Entrances fade in and rise 8–12px; exits fade only. Durations: 80ms press, 140ms hover/colour, 200ms toggles and fades, 320ms dialog rise, 480ms route change. Easing is `--ease-out` `cubic-bezier(.2,.7,.3,1)` for entrances and `--ease-emphasis` for the dialog. Nothing bounces, overshoots, rotates or loops — the only rotation in the system is the button loading spinner.

**Hover states.** Filled buttons darken exactly one ramp step (navy-700 → navy-800). Outline and ghost buttons fill with their softest tint (navy-50 / grey-50) rather than changing text colour. Links shift from navy to orange-600. Interactive cards lift 2px and go from `--shadow-1` to `--shadow-3`. Opacity is never used to signal hover — only for disabled (55%) and watermarks.

**Press states.** `transform: scale(.985)` plus one further ramp step darker. No colour inversion, no shadow removal.

**Focus.** Keyboard focus is a 2px orange outline at 2px offset (`--focus-ring`) on everything except text inputs, which show a navy border plus a 3px `rgba(31,62,111,.12)` halo so the field doesn't read as an error.

**Disabled.** Grey-200 fill, grey-400 text, `not-allowed` cursor, no shadow.

---

## 5. Iconography

- **No proprietary icon set was supplied.** ⚠️ **Substitution flagged:** the system uses **Lucide** (`lucide-static@0.469.0`, loaded from unpkg) — 24px grid, 2px stroke, geometric construction, flat terminals. It is the closest match to the mark's straight-cut geometry among CDN sets. If Grupo E2 has (or wants) its own glyph set, send it and `components/core/Icon.jsx` swaps over in one place.
- Icons are rendered as **CSS masks** so they always inherit `currentColor` — never as coloured `<img>`, never as inline hand-drawn SVG.
- Sizes: 16 (`sm`) inside dense controls, 20 (`md`) default, 24 (`lg`) in card icon squares, 32 (`xl`) for feature marks. Stroke weight is never overridden.
- The working vocabulary: `clipboard-list`, `workflow`, `target`, `shield-check`, `trending-up`, `users`, `file-text`, `calendar-check`, `handshake`, `chart-no-axes-column`, `settings-2`, `check`, `arrow-right`, `chevron-down`, `x`, `download`, `mail`, `phone`, `map-pin`, `globe`, `clock`.
- Icons in card headers sit in a 44px square with a 4px radius and a `--surface-brand-soft` fill; on navy the square is `rgba(255,255,255,.10)`.
- **No emoji, ever.** No Unicode dingbats as icons either — the only Unicode characters used decoratively are the middot `·` separator and the em dash `—`.
- The brand mark is not an icon. Use `Logo variant="mark-color"` for favicons, avatars and tight navigation; do not put the mark inline in body text.

---

## 6. Components

Built as the standard primitive set — no source defined a component inventory, so this is a from-scratch library sized to the brand's needs (marketing site + client-facing forms and dashboards).

**`components/core/`** — `Button`, `IconButton`, `Card`, `Badge`, `Tag`, `Icon`, `Logo`
**`components/forms/`** — `Field`, `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`
**`components/navigation/`** — `Tabs`
**`components/feedback/`** — `Dialog`, `Toast`, `Tooltip`

Each directory has one `@dsCard` HTML showing its states. Every component has a sibling `.d.ts` (props contract) and `.prompt.md` (what & when, usage example, variants).

**Intentional additions** beyond the generic standard set:
- `Logo` — the brand manual's rules (five legal lockups, clear space, misuse list) are only enforceable if placing the logo is a component rather than a raw `<img>`.
- `Icon` — a single wrapper for the Lucide substitution, so replacing the icon set later is a one-file change.
- `Field` — shared label/hint/error scaffold so custom controls match `Input` exactly.

---

## 7. Index

```
readme.md                  this file
SKILL.md                   agent-skill entry point
thumbnail.html             homepage tile
styles.css                 the only file consumers link — @import list

tokens/
  fonts.css                Poppins @font-face (Google Fonts CDN)
  colors.css               brand base, ramps, semantics, .e2-on-dark scope
  typography.css           families, weights, size/leading/tracking scale
  spacing.css              4px scale, containers, section rhythm
  radius.css               radii + the bevel motif
  elevation.css            navy-tinted shadows, hairlines, scrim, blur
  motion.css               durations, easings, press scale
  base.css                 element resets, link colours, .e2-eyebrow

assets/
  logo-primary.png         full colour lockup (navy + orange)
  logo-white.png           white lockup, for navy / dark grounds
  logo-black.png           one-ink black lockup
  logo-on-navy.png         supplied reference: lockup on #1F3E6F
  logo-white-on-black.jpg  supplied reference render
  mark-primary.png         "E" mark only, colour
  mark-white.png           "E" mark only, white

guidelines/                foundation specimen cards (Design System tab)
  Colors  brand · navy ramp · orange ramp · neutrals · status · text roles
  Type    display · headings · body · eyebrow & label · scale ladder
  Spacing scale · in use · radii · elevation · motion
  Brand   logo lockups · the E mark · clear space & misuse · bevel motif ·
          imagery & surfaces · iconography

components/                see section 6
ui_kits/website/           corporate site recreation-by-application (README inside)
templates/corporate-landing/  "Landing corporativa" starting template
```

**Before publishing anything from this system:** replace the illustrative figures (`+120 proyectos`, `14 sectores`, the manufacturing testimonial) with real, client-approved data.
