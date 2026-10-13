The workhorse container for service blocks, metrics and content panels.

```jsx
<Card icon="shield-check" eyebrow="Consultoría" title="Estandarización de operaciones"
      description="Documentamos y estabilizamos los procesos que ya funcionan." accentEdge />
<Card variant="brand" title="Gestión de proyectos" description="Un solo responsable, un solo tablero." />
```

Variants: `default` (white), `subtle` (grey-50), `brand` (navy — automatically switches to the `.e2-on-dark` token scope), `outline`. Add `interactive` only when the whole card is a link. Cards never carry a coloured left border; use `accentEdge` for the small orange corner tick instead.
