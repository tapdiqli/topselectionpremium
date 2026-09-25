export type SpotlightBrand = {
  slug: string
  name: string
  cta: string
  score: number
  href: string
  logo: string
  logoClass: string
}

export const spotlightBonus = {
  percent: '725%',
  line: 'jusqu\'à £ 6250 +',
  extra: '425FS'
}

/** Shown only inside the full-screen offer modal, and only for a long gclid. */
export const spotlightBrands: SpotlightBrand[] = [
  {
    slug: 'spinyrush',
    name: 'Spiny Rush',
    cta: 'SPINYRUSH',
    score: 9.9,
    href: 'https://spinyrush777.net/dk8hh8fh8/?campaign_id=G-FR01&visit_id=',
    logo: '/brands/spinyrush.svg',
    logoClass: 'h-8'
  },
  {
    slug: 'superspins',
    name: 'Super Spins',
    cta: 'SUPERSPINS',
    score: 9.8,
    href: 'https://superspins777.net/d3gpklnrj/?campaign_id=G-FR01&visit_id=',
    logo: '/brands/superspin.svg',
    logoClass: 'h-10'
  },
  {
    slug: 'rollyspin',
    name: 'Rolly Spin',
    cta: 'ROLLYSPIN',
    score: 9.7,
    href: 'https://rollyspin19.net/dusjc5gyt/?campaign_id=G-FR01&visit_id=',
    logo: '/brands/rollyspins.svg',
    logoClass: 'h-12'
  },
  {
    slug: 'spinreelz',
    name: 'Spin Reelz',
    cta: 'SPINREELZ',
    score: 9.6,
    href: 'https://spinreelz777.net/d6eexzjtv/?campaign_id=G-FR01&visit_id=',
    logo: '/brands/spinreelz.svg',
    logoClass: 'h-12'
  }
]
