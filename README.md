# Logo Vintrack

Fichiers de l'identité visuelle de Vintrack, prêts à être ajoutés au dépôt (par exemple dans `assets/brand/` ou `public/`).

## Couleurs

| Nom        | Hex       |
|------------|-----------|
| Noir       | `#0E0E0E` |
| Vert foncé | `#1F7A45` |
| Blanc      | `#FFFFFF` |

Police du nom : **Sora ExtraBold (800)**. Dans les SVG, le texte est converti en tracés : aucune police n'est à installer.

## Fichiers

### `svg/` (vectoriels, à privilégier)
- `vintrack-logo.svg` : logo complet (icône + nom), pour fond clair
- `vintrack-logo-dark.svg` : logo complet pour fond sombre
- `vintrack-wordmark.svg` : le nom seul
- `vintrack-icon.svg` : icône noire au V vert
- `vintrack-app-icon.svg` : icône d'application verte au V blanc
- `vintrack-icon-small.svg` : icône simplifiée pour les très petites tailles

### `png/`
- `vintrack-app-icon-1024.png`, `-512.png`, `-192.png` : icônes d'application (stores, PWA)
- `apple-touch-icon.png` : 180 × 180, écran d'accueil iPhone
- `vintrack-icon-512.png` : icône noire
- `vintrack-logo.png`, `vintrack-logo-dark.png` : logos complets, 1600 px de large
- `favicon-32.png` : favicon PNG

### Racine
- `favicon.ico` : favicon multi-tailles (16, 32, 48)

## Intégration web

```html
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/svg/vintrack-icon-small.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/png/apple-touch-icon.png">
```

Dans un README GitHub :

```markdown
<img src="assets/brand/svg/vintrack-logo.svg" alt="Vintrack" height="64">
```
