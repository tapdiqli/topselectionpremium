<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const isNotFound = computed(() => props.error?.statusCode === 404)

useSeoMeta({
  title: isNotFound.value ? 'Page introuvable' : 'Une erreur est survenue',
  robots: 'noindex'
})
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <SiteHeader />

    <main class="flex flex-1 items-center justify-center px-5 py-20">
      <div class="max-w-lg text-center">
        <p class="font-display text-6xl font-extrabold text-jade-600">
          {{ error?.statusCode ?? 500 }}
        </p>
        <h1 class="mt-4 font-display text-2xl font-extrabold text-abyss-900">
          {{ isNotFound ? 'Cette page reste introuvable' : 'Quelque chose a coincé' }}
        </h1>
        <p class="mt-3 text-sm leading-relaxed text-abyss-700">
          {{ isNotFound
            ? 'L\'adresse saisie ne correspond à aucune page du site. Elle a peut-être changé, ou comporte une coquille.'
            : 'Un incident technique nous empêche d\'afficher cette page. Merci de retenter dans un instant.' }}
        </p>

        <div class="mt-7 flex flex-wrap justify-center gap-3">
          <NuxtLink
            to="/"
            class="rounded-full bg-gradient-to-r from-jade-500 to-jade-700 px-6 py-2.5 text-sm font-bold text-white shadow-halo transition-transform hover:-translate-y-0.5"
          >
            Retour à l'accueil
          </NuxtLink>
          <NuxtLink
            to="/classement"
            class="rounded-full border border-linen-300 px-6 py-2.5 text-sm font-semibold text-abyss-800 transition-colors hover:bg-linen-100"
          >
            Voir le classement
          </NuxtLink>
        </div>
      </div>
    </main>

    <SiteFooter />
  </div>
</template>
