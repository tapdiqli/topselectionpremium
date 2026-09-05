const CLICK_ID_KEY = 'tsp-msclkid'

/**
 * Microsoft Advertising stamps `msclkid` on the landing URL. We keep it for the
 * session so the outbound click can be attributed, but only once the visitor has
 * accepted measurement cookies.
 */
export function useAffiliateLink() {
  const { consent } = useConsent()
  const clickId = useState<string | null>('tsp-msclkid', () => null)

  onMounted(() => {
    if (consent.value !== 'all') return

    const fromUrl = new URLSearchParams(window.location.search).get('msclkid')
    if (fromUrl) {
      clickId.value = fromUrl
      try {
        sessionStorage.setItem(CLICK_ID_KEY, fromUrl)
      } catch {
        // Non-fatal: attribution is simply skipped.
      }
      return
    }

    try {
      clickId.value = sessionStorage.getItem(CLICK_ID_KEY)
    } catch {
      clickId.value = null
    }
  })

  function decorate(href: string) {
    if (!clickId.value) return href
    try {
      const url = new URL(href)
      url.searchParams.set('msclkid', clickId.value)
      return url.toString()
    } catch {
      return href
    }
  }

  return { clickId, decorate }
}
