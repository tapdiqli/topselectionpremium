<script setup lang="ts">
import { site } from '~/data/site'

const STORAGE_KEY = 'tsp-age-confirmed'

const status = ref<'pending' | 'granted' | 'refused'>('pending')

onMounted(() => {
  try {
    if (localStorage.getItem(STORAGE_KEY) === 'yes') {
      status.value = 'granted'
    }
  } catch {
    // Private browsing or storage disabled: keep the gate visible.
  }
})

function confirm() {
  try {
    localStorage.setItem(STORAGE_KEY, 'yes')
  } catch {
    // Ignore: the visitor simply sees the gate again next time.
  }
  status.value = 'granted'
}

const locked = computed(() => status.value !== 'granted')

watch(locked, (value) => {
  if (import.meta.client) {
    document.documentElement.style.overflow = value ? 'hidden' : ''
  }
}, { immediate: true })

onBeforeUnmount(() => {
  if (import.meta.client) document.documentElement.style.overflow = ''
})
</script>

<template>
  <ClientOnly>
    <div
      v-if="locked"
      class="fixed inset-0 z-[70] grid place-items-center bg-abyss-950/95 px-5 py-10 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
    >
      <div class="w-full max-w-md rounded-2xl border border-white/10 bg-abyss-900 p-7 text-center shadow-panel-lift">
        <div class="mx-auto flex justify-center">
          <SiteLogo tone="dark" />
        </div>

        <template v-if="status === 'pending'">
          <h2
            id="age-gate-title"
            class="mt-6 font-display text-xl font-extrabold text-white"
          >
            Contrôle de l'âge
          </h2>
          <p class="mt-2.5 text-sm leading-relaxed text-abyss-200/80">
            Ce site ne s'adresse qu'à un public adulte. Confirmez avoir 18 ans révolus pour continuer votre
            visite.
          </p>

          <div class="mt-6 grid gap-2.5">
            <button
              type="button"
              class="rounded-full bg-gradient-to-r from-jade-500 to-jade-700 px-5 py-3 text-sm font-bold text-white shadow-halo transition-transform hover:-translate-y-0.5"
              @click="confirm"
            >
              J'ai 18 ans ou plus
            </button>
            <button
              type="button"
              class="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-abyss-200 transition-colors hover:bg-white/5"
              @click="status = 'refused'"
            >
              J'ai moins de 18 ans
            </button>
          </div>
        </template>

        <template v-else>
          <h2
            id="age-gate-title"
            class="mt-6 font-display text-xl font-extrabold text-white"
          >
            Accès non autorisé
          </h2>
          <p class="mt-2.5 text-sm leading-relaxed text-abyss-200/80">
            Ces contenus sont strictement fermés aux personnes mineures. Nous ne pouvons pas vous laisser
            poursuivre.
          </p>
          <p class="mt-4 text-sm text-abyss-200/70">
            Besoin de parler à quelqu'un ? Le
            <span class="font-semibold text-white">{{ site.helpline }}</span>
            ({{ site.helplineNote }}) répond en toute confidentialité.
          </p>
          <button
            type="button"
            class="mt-6 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-abyss-200 transition-colors hover:bg-white/5"
            @click="status = 'pending'"
          >
            Revenir en arrière
          </button>
        </template>
      </div>
    </div>
  </ClientOnly>
</template>
