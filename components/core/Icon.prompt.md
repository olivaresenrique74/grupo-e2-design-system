Renders a Lucide outline glyph that inherits text colour — use it for every icon in Grupo E2 UI instead of inline SVG or emoji.

```jsx
<Icon name="shield-check" size="lg" />
<Icon name="arrow-right" size="sm" color="var(--e2-orange)" />
```

Sizes: `sm` 16 · `md` 20 · `lg` 24 · `xl` 32, or pass a number. Icons are decorative by default; pass `label` when the icon is the only content (e.g. inside `IconButton`, which already forwards its own label).
