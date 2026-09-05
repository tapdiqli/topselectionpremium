# Top Selection Premium

Comparateur éditorial des plateformes de paris en ligne agréées ANJ, destiné au public français.

- Domaine : https://www.topselectionpremium.com
- Stack : Nuxt 4, TypeScript, Nuxt UI 4 (Tailwind CSS v4)
- Public : adultes (18 ans et plus) résidant en France

```bash
npm install --legacy-peer-deps
npm run dev
```

## Structure

| Dossier | Contenu |
| --- | --- |
| `app/data` | Contenu éditorial : opérateurs, critères, FAQ, métadonnées du site |
| `app/components` | Logo, emblèmes opérateurs, en-tête, pied de page, contrôle d'âge, bandeau traceurs |
| `app/composables` | Consentement aux traceurs et décoration des liens d'affiliation |
| `app/pages` | Pages publiques et pages légales |
| `public/reg` | Visuels des organismes affichés en pied de page (ANJ, Joueurs Info Service, Médiateur, 18+) |
| `server/routes` | `robots.txt` et `sitemap.xml` |

## Identité visuelle

La palette repose sur trois familles définies dans `app/assets/css/main.css` :
`jade` (couleur primaire), `copper` (accent) et `abyss` (fonds sombres), sur des neutres chauds `linen`.
Le logo et les emblèmes opérateurs sont des SVG dessinés à la main : un médaillon hexagonal dont la
lettre initiale et les barres de rang varient selon l'enseigne (`app/components/BrandMark.vue`).

## Liens d'affiliation

Les destinations sortantes sont définies par `href` dans `app/data/operators.ts`. L'identifiant de
campagne `msclkid` n'est repris sur ces liens qu'après acceptation des traceurs de mesure.

18+ uniquement. Joueurs Info Service : 09 74 75 13 13 (appel non surtaxé).
