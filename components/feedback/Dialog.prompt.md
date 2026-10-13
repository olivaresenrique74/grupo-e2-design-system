Modal for a decision or a short form. Navy 55% scrim with a 3px blur; the panel rises 12px on entry.

```jsx
<Dialog open={open} onClose={close} title="Confirmar cierre de fase"
        description="Se notificará al equipo del cliente."
        footer={<><Button variant="ghost" onClick={close}>Cancelar</Button><Button>Confirmar</Button></>} />
```

16px radius (the largest in the system) and `--shadow-4`. Never nest dialogs.
