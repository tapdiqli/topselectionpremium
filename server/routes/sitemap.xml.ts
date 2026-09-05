const BASE = 'https://www.topselectionpremium.com'

const routes = [
  { path: '/', priority: '1.0' },
  { path: '/classement', priority: '0.9' },
  { path: '/questions', priority: '0.8' },
  { path: '/jeu-maitrise', priority: '0.8' },
  { path: '/notre-equipe', priority: '0.7' },
  { path: '/nous-ecrire', priority: '0.6' },
  { path: '/mentions-legales', priority: '0.3' },
  { path: '/donnees-personnelles', priority: '0.3' },
  { path: '/conditions-generales', priority: '0.3' },
  { path: '/transparence-affiliation', priority: '0.4' }
]

export default defineEventHandler((event) => {
  setHeader(event, 'content-type', 'application/xml; charset=utf-8')

  const lastmod = new Date().toISOString().slice(0, 10)
  const urls = routes
    .map(({ path, priority }) =>
      `  <url>\n    <loc>${BASE}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${priority}</priority>\n  </url>`
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
})
