Wraps a control with its label, hint and error text — used internally by Input/Select/Textarea, and directly when you compose a custom control.

```jsx
<Field label="Sector" hint="Se usa para calibrar el diagnóstico.">
  <MyCustomControl />
</Field>
```

Labels are 13px SemiBold navy-900; the required marker is an orange asterisk; error text replaces hint text.
