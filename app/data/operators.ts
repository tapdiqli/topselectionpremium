export type BrandMark = {
  /** Letter drawn inside the medallion, derived from the operator name. */
  initial: string
  /** Gradient stops for the medallion face. */
  from: string
  to: string
  /** Hexagon outline and rank-bar colour. */
  edge: string
  /** Colour of the initial itself. */
  ink: string
  /** How many of the three rank bars are filled. */
  bars: 1 | 2 | 3
}

export type Operator = {
  slug: string
  name: string
  score: number
  stars: number
  badge: string
  summary: string
  strengths: [string, string]
  /** Outbound affiliate destination. */
  href: string
  mark: BrandMark
}

export const operators: Operator[] = [
  {
    slug: 'winamax',
    name: 'Winamax',
    score: 9.9,
    stars: 5,
    badge: 'Préférence de la rédaction',
    summary:
      'Maison française devenue une référence, distinguée pour une interface dégraissée au maximum et des partis pris d\'ergonomie assumés.',
    strengths: ['Prise en main immédiate', 'Affichage sans surcharge'],
    href: 'https://www.winamax.fr/',
    mark: { initial: 'W', from: '#0f3a44', to: '#04161c', edge: '#35c297', ink: '#6fdab6', bars: 3 }
  },
  {
    slug: 'betclic',
    name: 'Betclic',
    score: 9.8,
    stars: 5,
    badge: 'La plus limpide',
    summary:
      'Un opérateur qui mise sur la lisibilité : règles détaillées, formulations directes et informations que l\'on trouve sans chercher.',
    strengths: ['Règles écrites simplement', 'Assistance bien documentée'],
    href: 'https://www.betclic.fr/',
    mark: { initial: 'B', from: '#edfbf5', to: '#d2f5e7', edge: '#088663', ink: '#0a4637', bars: 3 }
  },
  {
    slug: 'unibet',
    name: 'Unibet',
    score: 9.6,
    stars: 5,
    badge: 'Le meilleur sur mobile',
    summary:
      'Enseigne solidement ancrée dans l\'Hexagone, qui investit surtout dans un parcours mobile actuel et remarquablement fluide.',
    strengths: ['Navigation sans temps mort', 'Contenus rafraîchis souvent'],
    href: 'https://www.unibet.fr/',
    mark: { initial: 'U', from: '#fdf6ef', to: '#f4d0ae', edge: '#bd551f', ink: '#7e351f', bars: 2 }
  },
  {
    slug: 'pmu',
    name: 'PMU',
    score: 9.4,
    stars: 5,
    badge: 'La valeur d\'expérience',
    summary:
      'Institution hexagonale installée depuis des décennies, qui compte parmi les repères historiques du secteur passé en ligne.',
    strengths: ['Éventail de services étendu', 'Support qui répond vite'],
    href: 'https://www.pmu.fr/',
    mark: { initial: 'P', from: '#0a4637', to: '#032820', edge: '#e28a49', ink: '#ecb07c', bars: 2 }
  },
  {
    slug: 'netbet',
    name: 'NetBet',
    score: 9.2,
    stars: 4,
    badge: 'Le rapport offre / simplicité',
    summary:
      'Acteur européen présent de longue date en France, retenu pour un catalogue large servi par une mise en page qui reste digeste.',
    strengths: ['Catalogue bien fourni', 'Parcours d\'inscription court'],
    href: 'https://www.netbet.fr/',
    mark: { initial: 'N', from: '#f4f8f8', to: '#cddee0', edge: '#0f3a44', ink: '#0a2b34', bars: 1 }
  }
]

export const operatorNames = operators.map(o => o.name).join(', ')
