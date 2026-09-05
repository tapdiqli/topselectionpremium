<script setup lang="ts">
import { site, criteria } from '~/data/site'
import { operators, operatorNames } from '~/data/operators'
import { faqs } from '~/data/faqs'

const podium = operators.slice(0, 3)
const homeFaqs = faqs.slice(0, 4)
const openFaq = ref(0)

const title = 'La sélection indépendante des plateformes agréées en France'

useSeoMeta({
  title,
  description: site.description,
  ogTitle: title,
  ogDescription: site.description
})

const method = [
  {
    icon: 'i-lucide-filter',
    title: 'Tri en amont',
    text: 'N\'apparaissent dans nos pages que les enseignes répondant à nos attentes en matière de transparence et de qualité de service.'
  },
  {
    icon: 'i-lucide-refresh-cw',
    title: 'Confrontation périodique',
    text: 'Nous remettons chaque fiche sur l\'établi à intervalles fixes pour comparer les prestations et tenir un classement défendable.'
  },
  {
    icon: 'i-lucide-scale',
    title: 'Œil indépendant',
    text: 'Nos textes visent la compréhension : ni jargon superflu, ni arrière-pensée dissimulée derrière une recommandation.'
  },
  {
    icon: 'i-lucide-shield-check',
    title: 'Pratique tempérée',
    text: 'Chaque page redit les réflexes à conserver et pointe vers les organismes d\'écoute et d\'information déjà en place.'
  }
]

const figures = [
  { value: String(operators.length), label: 'enseignes décortiquées une à une' },
  { value: String(criteria.length), label: 'critères passés sur chacune' },
  { value: '18+', label: 'entrée réservée aux seuls majeurs' },
  { value: '0 €', label: 'rien à payer pour lire le classement' }
]
</script>

<template>
  <div>
    <section class="relative overflow-hidden bg-abyss-900">
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 bg-[radial-gradient(50rem_24rem_at_50%_-12%,rgba(20,166,124,0.38),transparent)]"
      />
      <div class="container-page relative py-10 text-center sm:py-14">
        <span class="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-copper-300">
          Comparateur indépendant de plateformes
        </span>
        <h1 class="text-balance-title mx-auto mt-4 max-w-3xl font-display text-[1.7rem] font-extrabold leading-[1.14] tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
          Les plateformes les plus solides ouvertes en France
        </h1>
        <p class="mx-auto mt-3.5 max-w-2xl text-sm leading-relaxed text-abyss-200/80 sm:text-base">
          Un palmarès lisible de {{ operatorNames }}, bâti sur l'assise de l'enseigne, l'ergonomie du site
          et l'ampleur des services rendus.
        </p>

        <ul class="no-scrollbar -mx-5 mt-6 flex w-[calc(100%+2.5rem)] gap-2 overflow-x-auto px-5 pb-1 sm:mx-auto sm:w-full sm:max-w-3xl sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0">
          <li
            v-for="tag in ['Regard tourné vers la France', 'Enseignes examinées de près', 'Palmarès tenu à jour', 'Révision à échéances fixes']"
            :key="tag"
            class="shrink-0 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-1.5 text-[11px] font-semibold text-abyss-200/85 sm:text-xs"
          >
            {{ tag }}
          </li>
        </ul>
      </div>
    </section>

    <section
      id="podium"
      aria-labelledby="podium-title"
      class="bg-linen-100 py-10 sm:py-14"
    >
      <div class="container-page">
        <h2
          id="podium-title"
          class="mb-6 font-display text-xl font-extrabold text-abyss-900 sm:text-2xl"
        >
          Le trio de tête : {{ podium.map(o => o.name).join(', ') }}
        </h2>

        <div class="space-y-4">
          <OperatorCard
            v-for="(operator, index) in podium"
            :key="operator.slug"
            :operator="operator"
            :rank="index + 1"
          />
        </div>

        <div class="mt-7 text-center">
          <NuxtLink
            to="/classement"
            class="inline-flex items-center gap-2 text-sm font-bold text-jade-700 transition-colors hover:text-jade-800"
          >
            Accéder au classement complet
            <UIcon
              name="i-lucide-arrow-right"
              class="h-4 w-4"
            />
          </NuxtLink>
        </div>
      </div>
    </section>

    <section
      aria-label="Chiffres clés"
      class="bg-abyss-900 py-10"
    >
      <div class="container-page grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
        <div
          v-for="figure in figures"
          :key="figure.label"
        >
          <p class="font-display text-3xl font-extrabold text-jade-300">
            {{ figure.value }}
          </p>
          <p class="mt-1.5 text-xs leading-snug text-abyss-200/70">
            {{ figure.label }}
          </p>
        </div>
      </div>
    </section>

    <section
      aria-labelledby="method-title"
      class="py-12 sm:py-16"
    >
      <div class="container-page">
        <span class="text-[10px] font-bold uppercase tracking-[0.18em] text-jade-700">
          Notre façon de faire
        </span>
        <h2
          id="method-title"
          class="mt-2.5 font-display text-xl font-extrabold text-abyss-900 sm:text-2xl"
        >
          Pourquoi ce palmarès mérite votre confiance
        </h2>
        <p class="mt-2.5 max-w-2xl text-sm leading-relaxed text-abyss-700">
          Une seule et même grille de lecture, appliquée sans dérogation à chacune des enseignes que nous
          passons en revue.
        </p>

        <div class="mt-8 grid gap-4 sm:grid-cols-2">
          <div
            v-for="item in method"
            :key="item.title"
            class="rounded-2xl border border-linen-200 bg-white p-5 shadow-panel"
          >
            <span class="grid h-10 w-10 place-items-center rounded-xl bg-jade-50 text-jade-700">
              <UIcon
                :name="item.icon"
                class="h-5 w-5"
              />
            </span>
            <h3 class="mt-3.5 font-display text-base font-extrabold text-abyss-900">
              {{ item.title }}
            </h3>
            <p class="mt-1.5 text-sm leading-relaxed text-abyss-700">
              {{ item.text }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      aria-labelledby="score-title"
      class="bg-linen-100 py-12 sm:py-16"
    >
      <div class="container-page">
        <span class="text-[10px] font-bold uppercase tracking-[0.18em] text-jade-700">
          Le calcul de la note
        </span>
        <h2
          id="score-title"
          class="mt-2.5 font-display text-xl font-extrabold text-abyss-900 sm:text-2xl"
        >
          Ce qui compose le résultat final
        </h2>
        <p class="mt-2.5 max-w-2xl text-sm leading-relaxed text-abyss-700">
          Chaque enseigne décroche sa position à partir des quatre axes ci-dessous, pondérés comme indiqué.
        </p>

        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="item in criteria"
            :key="item.index"
            class="rounded-2xl border border-linen-200 bg-white p-5 shadow-panel"
          >
            <span class="font-display text-sm font-extrabold text-copper-500">{{ item.index }}</span>
            <h3 class="mt-2 font-display text-base font-extrabold text-abyss-900">
              {{ item.title }}
            </h3>
            <p class="mt-1.5 text-sm leading-relaxed text-abyss-700">
              {{ item.text }}
            </p>

            <div class="mt-4">
              <div class="h-1.5 overflow-hidden rounded-full bg-linen-200">
                <div
                  class="h-full rounded-full bg-gradient-to-r from-jade-400 to-jade-600"
                  :style="{ width: `${item.weight}%` }"
                />
              </div>
              <p class="mt-2 text-xs font-bold text-abyss-700">
                Pondération : {{ item.weight }} %
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      aria-labelledby="faq-title"
      class="py-12 sm:py-16"
    >
      <div class="container-page max-w-3xl">
        <span class="text-[10px] font-bold uppercase tracking-[0.18em] text-jade-700">
          On nous demande souvent
        </span>
        <h2
          id="faq-title"
          class="mt-2.5 font-display text-xl font-extrabold text-abyss-900 sm:text-2xl"
        >
          Le principal, en quelques réponses
        </h2>

        <div class="mt-7 space-y-3">
          <div
            v-for="(faq, index) in homeFaqs"
            :key="faq.q"
            class="overflow-hidden rounded-2xl border border-linen-200 bg-white shadow-panel"
          >
            <h3>
              <button
                type="button"
                class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                :aria-expanded="openFaq === index"
                @click="openFaq = openFaq === index ? -1 : index"
              >
                <span class="font-display text-sm font-extrabold text-abyss-900">{{ faq.q }}</span>
                <UIcon
                  name="i-lucide-chevron-down"
                  class="h-5 w-5 shrink-0 text-jade-600 transition-transform duration-200"
                  :class="openFaq === index ? 'rotate-180' : ''"
                />
              </button>
            </h3>
            <p
              v-if="openFaq === index"
              class="px-5 pb-5 text-sm leading-relaxed text-abyss-700"
            >
              {{ faq.a }}
            </p>
          </div>
        </div>

        <div class="mt-7 text-center">
          <NuxtLink
            to="/questions"
            class="inline-flex items-center gap-2 text-sm font-bold text-jade-700 transition-colors hover:text-jade-800"
          >
            Voir toutes les questions
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
