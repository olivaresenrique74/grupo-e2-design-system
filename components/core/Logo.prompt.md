Places the official Grupo E2 lockup — always as supplied artwork, never redrawn.

```jsx
<Logo variant="full-color" height={40} assetBase="./assets/" />
<Logo variant="full-white" height={32} assetBase="./assets/" />   {/* on navy */}
<Logo variant="mark-color" height={28} assetBase="./assets/" />   {/* favicon, avatars, tight nav */}
```

Set `assetBase` to the relative path of the design system's `assets/` folder. Use `clearSpace` when the lockup sits near other graphics. Do not apply shadows, outlines, rotation or non-palette colours.
