Switches between sibling views. The orange 2px underline is the brand's active indicator.

```jsx
<Tabs value={tab} onChange={setTab} items={[
  { id: 'resumen', label: 'Resumen', icon: 'layout-dashboard' },
  { id: 'procesos', label: 'Procesos', count: 12 },
  { id: 'entregables', label: 'Entregables' },
]} />
```

`underline` for page-level sections, `segmented` for in-card filters.
