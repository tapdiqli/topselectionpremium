const STORAGE_KEY = 'tsp-consent'

export type Consent = 'all' | 'essential'

export function useConsent() {
  const consent = useState<Consent | null>('tsp-consent', () => null)

  onMounted(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored === 'all' || stored === 'essential') consent.value = stored
    } catch {
      // Storage unavailable: treat as "not answered yet".
    }
  })

  function set(value: Consent) {
    consent.value = value
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      // Nothing to persist; the choice still applies to this page view.
    }
  }

  return {
    consent,
    accept: () => set('all'),
    refuse: () => set('essential'),
    reset: () => {
      consent.value = null
      try {
        localStorage.removeItem(STORAGE_KEY)
      } catch {
        // Ignore.
      }
    }
  }
}
