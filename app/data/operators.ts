export type BrandMark = {
  /** Ornate plaque generated for this enseigne. */
  src: string
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
    mark: { src: '/brands/winamax.jpg' }
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
    mark: { src: '/brands/betclic.jpg' }
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
    mark: { src: '/brands/unibet.jpg' }
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
    mark: { src: '/brands/pmu.jpg' }
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
    mark: { src: '/brands/netbet.jpg' }
  }
]

export const operatorNames = operators.map(o => o.name).join(', ')
