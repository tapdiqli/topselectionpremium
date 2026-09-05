export const site = {
  name: 'Top Selection Premium',
  shortName: 'TopSelection',
  domain: 'topselectionpremium.com',
  url: 'https://www.topselectionpremium.com',
  email: 'contact@topselectionpremium.com',
  locale: 'fr_FR',
  lang: 'fr',
  tagline: 'La sélection raisonnée des plateformes agréées en France',
  description:
    'Top Selection Premium passe en revue les plateformes en ligne ouvertes au public français et les classe selon des critères publiés : ancienneté de l\'enseigne, richesse de l\'offre, ergonomie et transparence des règles.',
  helpline: '09 74 75 13 13',
  helplineNote: 'appel non surtaxé',
  updated: 'février 2026'
} as const

export const nav = [
  { label: 'Accueil', to: '/' },
  { label: 'Le classement', to: '/classement' },
  { label: 'Questions', to: '/questions' },
  { label: 'Jeu maîtrisé', to: '/jeu-maitrise' },
  { label: 'Notre équipe', to: '/notre-equipe' },
  { label: 'Nous écrire', to: '/nous-ecrire' }
] as const

export const legalNav = [
  { label: 'Mentions légales', to: '/mentions-legales' },
  { label: 'Données personnelles', to: '/donnees-personnelles' },
  { label: 'Conditions générales', to: '/conditions-generales' },
  { label: 'Transparence affiliation', to: '/transparence-affiliation' }
] as const

export const regulators = [
  {
    label: '18+',
    alt: 'Accès réservé aux personnes majeures',
    img: '/reg/18plus.webp',
    href: '/jeu-maitrise'
  },
  {
    label: 'Autorité nationale des jeux',
    alt: 'Logo de l\'Autorité nationale des jeux',
    img: '/reg/anj.png',
    href: 'https://anj.fr/'
  },
  {
    label: 'Joueurs Info Service',
    alt: 'Logo de Joueurs Info Service',
    img: '/reg/joueurs-info-service.png',
    href: 'https://www.joueurs-info-service.fr/'
  },
  {
    label: 'Médiateur des jeux en ligne',
    alt: 'Logo du Médiateur des jeux en ligne',
    img: '/reg/mediateur-des-jeux.png',
    href: 'https://mediateurdesjeuxenligne.fr/'
  }
] as const

export const supportResources = [
  {
    name: 'Joueurs Info Service',
    href: 'https://www.joueurs-info-service.fr/',
    text: 'Une ligne d\'écoute gratuite et anonyme, ouverte tous les jours, aussi bien pour les joueurs que pour leur entourage.'
  },
  {
    name: 'Autorité nationale des jeux (ANJ)',
    href: 'https://anj.fr/',
    text: 'Le régulateur français : cadre légal, registre des opérateurs agréés et procédures d\'exclusion volontaire.'
  },
  {
    name: 'EvalluJeu',
    href: 'https://www.evalujeu.fr/',
    text: 'Un test anonyme et sans frais qui aide à situer sa pratique et à décider si un accompagnement se justifie.'
  },
  {
    name: 'Médiateur des jeux en ligne',
    href: 'https://mediateurdesjeuxenligne.fr/',
    text: 'Une médiation gratuite et impartiale lorsqu\'un différend avec un opérateur agréé reste sans issue.'
  }
] as const

export const criteria = [
  {
    index: '01',
    title: 'Assise de l\'enseigne',
    weight: 30,
    text: 'Nombre d\'années d\'activité, netteté du discours public et image bâtie auprès des joueurs français.'
  },
  {
    index: '02',
    title: 'Richesse de l\'offre',
    weight: 25,
    text: 'Ce que la plateforme met réellement à disposition et jusqu\'où vont les fonctionnalités annoncées.'
  },
  {
    index: '03',
    title: 'Ergonomie au quotidien',
    weight: 25,
    text: 'Rapidité des pages, tenue sur téléphone et simplicité à mettre la main sur une information précise.'
  },
  {
    index: '04',
    title: 'Clarté du règlement',
    weight: 20,
    text: 'Des conditions rédigées pour être lues et des informations livrées sans détour ni petites lignes.'
  }
] as const
