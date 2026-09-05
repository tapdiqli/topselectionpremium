<script setup lang="ts">
const { consent, accept, refuse } = useConsent()
const visible = ref(false)

onMounted(() => {
  visible.value = consent.value === null
})

function choose(all: boolean) {
  if (all) accept()
  else refuse()
  visible.value = false
}
</script>

<template>
  <ClientOnly>
    <div
      v-if="visible"
      class="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6"
      role="region"
      aria-label="Réglage des traceurs"
    >
      <div class="container-page rounded-2xl border border-linen-300 bg-white p-5 shadow-panel-lift sm:flex sm:items-center sm:gap-6">
        <div class="flex-1">
          <p class="font-display text-sm font-extrabold text-abyss-900">
            Réglage des traceurs
          </p>
          <p class="mt-1.5 text-sm leading-relaxed text-abyss-700">
            Nous posons des cookies et dispositifs comparables pour ajuster les contenus, compter les visites
            et rendre la lecture plus agréable. Valider revient à autoriser cet usage.
            <NuxtLink
              to="/donnees-personnelles"
              class="font-semibold text-jade-700 underline underline-offset-2"
            >
              Notre politique
            </NuxtLink>
          </p>
        </div>

        <div class="mt-4 flex shrink-0 gap-2.5 sm:mt-0">
          <button
            type="button"
            class="flex-1 rounded-full border border-linen-300 px-5 py-2.5 text-sm font-semibold text-abyss-800 transition-colors hover:bg-linen-100 sm:flex-none"
            @click="choose(false)"
          >
            Strict nécessaire
          </button>
          <button
            type="button"
            class="flex-1 rounded-full bg-gradient-to-r from-jade-500 to-jade-700 px-6 py-2.5 text-sm font-bold text-white shadow-halo transition-transform hover:-translate-y-0.5 sm:flex-none"
            @click="choose(true)"
          >
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
