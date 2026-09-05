const BASE = 'https://www.topselectionpremium.com'

export default defineEventHandler((event) => {
  setHeader(event, 'content-type', 'text/plain; charset=utf-8')

  return [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${BASE}/sitemap.xml`,
    ''
  ].join('\n')
})
