@AGENTS.md

## Design system (locked)

This design system is a locked client decision. Do not redesign, add aesthetic ideas, or "improve" the direction. Precise execution only.

### Design tokens

| Token | Value | Use |
|---|---|---|
| `--color-white` | `#FFFFFF` | Background, cards |
| `--color-smoke` | `#F6F6F4` | Alternating sections |
| `--color-mist` | `#ECECE9` | Image placeholder surfaces |
| `--color-line` | `#E4E4E1` | Hairlines, borders |
| `--color-gravel` | `#8E8C87` | Index numbers, eyebrow labels only — never body text |
| `--color-stone` | `#57544E` | Secondary text |
| `--color-graphite` | `#21201D` | Dark sections, primary button hover |
| `--color-ink` | `#131210` | Primary text, primary buttons |
| `--color-ok` | `#2F6B3F` | Form success only — never decorative |
| `--color-error` | `#A8442E` | Form errors only — never decorative |
| `--font-display` | `var(--font-archivo)` | Archivo variable font |
| `--font-sans` | `var(--font-inter)` | Inter |
| `--radius-btn` | `10px` | Buttons only |
| `--radius-img` | `12px` | Image surfaces only |

### Typography

- **Wordmark NORGESGYM**: Archivo, font-stretch 125%, weight 600, uppercase, letter-spacing 0.06em.
- **H1**: Archivo weight 500, `clamp(2.75rem, 7vw, 4.5rem)`, line-height 1.08, color ink.
- **H2**: Archivo weight 500, `clamp(1.5rem, 3vw, 2rem)`, color ink.
- **Stat numerals**: Archivo font-stretch 125%, weight 500, `clamp(2rem, 5vw, 3rem)`.
- **Body / everything else**: Inter 400, secondary text in stone.
- **Buttons, labels, emphasis**: weight 500.
- **Eyebrow labels**: Inter 12px, letter-spacing 0.08em, color gravel.
- Allowed weights: 400, 500, 600 only.

### Prohibitions (regression guards)

- **NO feature cards.** No rounded boxes containing icon + title + text. Structure = hairlines (color line) + whitespace + type scale.
- **NO decorative icons.** Only functional icons: plus/minus in FAQ accordion, arrow in text links. Inline SVG, 1.5px stroke, currentColor.
- **NO gradients, box-shadows, glassmorphism, background patterns, emoji.**
- **NO stock photos or AI images.** Use `PlaceholderImage` component.
- **No autoplay carousels, slider arrows, dots, or rotating-slide indicators.** A static scroll-snap overflow row with no controls is permitted for the photo gallery only. Parallax and scroll-triggered animation remain prohibited. Only: accordion open/close and hover/focus transitions (150ms).
- **NO Title Case.** Norwegian sentence case everywhere.
- **Border-radius only** on buttons (10px) and image surfaces (12px). Nothing else gets rounded corners.
- **Gravel color** must only appear as index numbers, eyebrows and disabled states. Never as body text.
- **ok and error colors** are functional UI only. Never decorative.
