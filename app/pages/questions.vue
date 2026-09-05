<script setup lang="ts">
import { faqs } from '~/data/faqs'

const title = 'Questions fréquentes'
const description = 'Les points qui reviennent le plus souvent, de la construction du classement à la protection des mineurs, réunis sur une seule page.'

useSeoMeta({ title, description, ogTitle: title, ogDescription: description })

const open = ref<number>(0)

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqs.map(f => ({
        '@type': 'Question',
        'name': f.q,
        'acceptedAnswer': { '@type': 'Answer', 'text': f.a }
      }))
    })
  }]
})
</script>

<template>
  <div>
    <PageHero
      eyebrow="Foire aux questions"
      title="Ce que vous nous demandez, ce que nous répondons"
      lead="Nous réunissons ici les sujets qui reviennent le plus, depuis la mécanique du classement jusqu'à la protection des personnes mineures."
    />

    <section class="py-12 sm:py-16">
      <div class="container-page max-w-3xl">
        <div class="space-y-3">
          <div
            v-for="(faq, index) in faqs"
            :key="faq.q"
            class="overflow-hidden rounded-2xl border border-linen-200 bg-white shadow-panel"
          >
            <h2>
              <button
                type="button"
                class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                :aria-expanded="open === index"
                @click="open = open === index ? -1 : index"
              >
                <span class="font-display text-sm font-extrabold text-abyss-900">{{ faq.q }}</span>
                <UIcon
                  name="i-lucide-chevron-down"
                  class="h-5 w-5 shrink-0 text-jade-600 transition-transform duration-200"
                  :class="open === index ? 'rotate-180' : ''"
                />
              </button>
            </h2>
            <p
              v-if="open === index"
              class="px-5 pb-5 text-sm leading-relaxed text-abyss-700"
            >
              {{ faq.a }}
            </p>
          </div>
        </div>

        <div class="mt-10 rounded-2xl border border-jade-200 bg-jade-50 p-6 text-center">
          <h2 class="font-display text-base font-extrabold text-abyss-900">
            Votre question ne figure pas dans cette liste ?
          </h2>
          <p class="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-abyss-700">
            Envoyez-nous un mot : chaque message reçoit une réponse, et cette page s'enrichit dès qu'un
            sujet revient plusieurs fois.
          </p>
          <NuxtLink
            to="/nous-ecrire"
            class="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-jade-500 to-jade-700 px-6 py-2.5 text-sm font-bold text-white shadow-halo transition-transform hover:-translate-y-0.5"
          >
            Nous écrire
            <UIcon
              name="i-lucide-arrow-right"
              class="h-4 w-4"
            />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
