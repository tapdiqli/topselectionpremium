<script setup lang="ts">
import { spotlightBonus, spotlightBrands } from '~/data/spotlight'

const MIN_GCLID_LENGTH = 51

const route = useRoute()
const dismissed = ref(false)

const gclid = computed(() => {
  const value = route.query.gclid
  const raw = Array.isArray(value) ? value[0] : value
  return typeof raw === 'string' ? raw.trim() : ''
})

const open = computed(() => !dismissed.value && gclid.value.length > MIN_GCLID_LENGTH)

watch(gclid, (value, previous) => {
  if (value !== previous) dismissed.value = false
})

function outbound(href: string) {
  try {
    const url = new URL(href)
    url.searchParams.set('visit_id', gclid.value)
    return url.toString()
  } catch {
    return href
  }
}

function close() {
  dismissed.value = true
}

function ageStillLocked() {
  try {
    return localStorage.getItem('tsp-age-confirmed') !== 'yes'
  } catch {
    return true
  }
}

function applyLock(value: boolean) {
  if (!import.meta.client) return
  if (value) document.documentElement.dataset.spotlight = 'open'
  else delete document.documentElement.dataset.spotlight
  document.documentElement.style.overflow = value || ageStillLocked() ? 'hidden' : ''
}

function onKey(event: KeyboardEvent) {
  if (event.key === 'Escape') close()
}

watch(open, (value) => {
  applyLock(value)
  if (!import.meta.client) return
  if (value) window.addEventListener('keydown', onKey)
  else window.removeEventListener('keydown', onKey)
})

onMounted(() => applyLock(open.value))

onBeforeUnmount(() => {
  if (!import.meta.client) return
  window.removeEventListener('keydown', onKey)
  delete document.documentElement.dataset.spotlight
  document.documentElement.style.overflow = ageStillLocked() ? 'hidden' : ''
})
</script>

<template>
  <div
    v-if="open"
    class="fixed inset-0 z-[65] overflow-y-auto overscroll-contain bg-[#09060f] text-white"
    role="dialog"
    aria-modal="true"
    aria-labelledby="spotlight-title"
  >
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,rgba(88,40,140,0.45),transparent_68%)]"
    />

    <div class="relative mx-auto flex min-h-full w-full max-w-[440px] flex-col px-4 pb-10">
      <header class="flex items-center justify-between py-3.5">
        <SiteLogo tone="dark" />
    
      </header>

      <div class="px-1 pt-3 text-center">
        <span class="inline-flex items-center gap-2 rounded-full border border-cyan-400/80 bg-[#071820] px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-100">
          <span class="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#67e8f9]" />
          Exclusif mobile
        </span>

        <h2
          id="spotlight-title"
          class="mt-4 font-display text-[clamp(1.05rem,4.85vw,1.7rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.04em]"
        >
          <span class="block whitespace-nowrap">
            <span class="text-white">Les meilleures </span><span class="text-[#f5c53a]">offres du</span>
          </span>
          <span class="block text-[#f5c53a]">jour</span>
        </h2>

        <p class="mx-auto mt-3 max-w-[22rem] text-[13px] leading-relaxed text-white/55">
          Nouvelles offres, retraits rapides et meilleures plateformes sélectionnées pour vous, avec des
          bonus exclusifs optimisés pour votre smartphone.
        </p>
      </div>

      <ul class="mt-5 flex items-center justify-center gap-2">
        <li class="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#7a2433] text-[11px] font-extrabold text-white">
          18+
        </li>
        <li class="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/80 bg-emerald-950/50 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-wide text-emerald-300">
          <UIcon
            name="i-lucide-shield-check"
            class="h-3.5 w-3.5 text-amber-300"
          />
          Licence sécurisée
        </li>
        <li class="inline-flex items-center gap-1.5 rounded-full border border-fuchsia-500/70 bg-fuchsia-950/40 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-wide text-fuchsia-200">
          <span class="grid h-3.5 w-3.5 place-items-center rounded-full bg-amber-300 text-[9px] font-black text-fuchsia-950">$</span>
          Supporte 24/7
        </li>
      </ul>

      <div class="relative mt-4 space-y-3.5">
        <article
          v-for="(brand, index) in spotlightBrands"
          :key="brand.slug"
          class="relative rounded-[1.35rem] border border-[#6a4a86]/70 bg-[#140c1e] px-3.5 pb-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          :class="index === 0 ? 'pt-6' : 'pt-4'"
        >
          <span
            v-if="index === 0"
            class="absolute -top-2.5 left-4 rounded-full bg-[#3dde7a] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-white shadow-[0_4px_12px_rgba(61,222,122,0.35)]"
          >
            Retraits rapides
          </span>

          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0">
              <img
                :src="brand.logo"
                :alt="brand.name"
                class="w-auto max-w-[9.5rem] object-contain object-left"
                :class="brand.logoClass"
              >
              <div class="mt-2 flex items-center gap-1.5">
                <span
                  class="flex items-center gap-px text-[#f5c53a]"
                  aria-hidden="true"
                >
                  <svg
                    v-for="star in 5"
                    :key="star"
                    viewBox="0 0 20 20"
                    class="h-3 w-3"
                    fill="currentColor"
                  >
                    <path d="M10 1.6l2.5 5.1 5.6.8-4 3.9.9 5.6-5-2.6-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.6Z" />
                  </svg>
                </span>
                <p class="font-display text-sm font-extrabold leading-none text-white">
                  {{ brand.score.toFixed(1) }}<span class="text-[11px] font-semibold text-white/45"> /10</span>
                </p>
              </div>
              <div
                class="mt-2 flex items-center gap-1"
                aria-hidden="true"
              >
                <span class="grid h-[18px] w-[18px] place-items-center rounded-full bg-[#f7931a] text-[10px] font-bold text-white">₿</span>
                <span class="grid h-[18px] min-w-[30px] place-items-center rounded-[3px] bg-white px-1 text-[7px] font-black italic tracking-tight text-[#1a1f71]">VISA</span>
                <span class="grid h-[18px] min-w-[30px] place-items-center rounded-[3px] bg-[#1434cb] px-1 text-[7px] font-black tracking-tight text-white">CARD</span>
              </div>
            </div>

            <div class="shrink-0 pt-0.5 text-right">
              <span class="inline-flex rounded-full bg-[#6d28d9] px-2 py-1 text-[8px] font-bold uppercase tracking-[0.08em] text-white">
                Pack de bienvenue
              </span>
              <p class="mt-2 max-w-[11.2rem] font-display text-[15px] font-extrabold leading-[1.15] text-white">
                <span class="text-[#f5c53a]">{{ spotlightBonus.percent }}</span> {{ spotlightBonus.line }}<br>{{ spotlightBonus.extra }}
              </p>
            </div>
          </div>

          <a
            :href="outbound(brand.href)"
            target="_blank"
            rel="noopener noreferrer sponsored nofollow"
            class="mt-3.5 flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#2ee7ff] via-[#5b7cff] to-[#b44bff] text-[13px] font-extrabold uppercase tracking-[0.06em] text-white shadow-[0_8px_22px_rgba(80,140,255,0.45)] transition-transform hover:-translate-y-0.5"
          >
            Jouer sur {{ brand.cta }}
          </a>
        </article>
      </div>
    </div>
  </div>
</template>
