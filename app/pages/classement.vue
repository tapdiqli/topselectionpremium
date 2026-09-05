<script setup lang="ts">
import { criteria } from '~/data/site'
import { operators, operatorNames } from '~/data/operators'

const title = `Classement des plateformes : ${operatorNames}`
const description = `Top Selection Premium détaille chaque opérateur agréé retenu : ses points forts, ses marges de progression et la note issue de notre grille de lecture.`

useSeoMeta({ title, description, ogTitle: title, ogDescription: description })
</script>

<template>
  <div>
    <PageHero
      eyebrow="Palmarès intégral"
      :title="`Le comparatif ${operatorNames}`"
      lead="Nous reprenons ici chaque enseigne agréée retenue : ce qu'elle réussit, ce qui reste perfectible et la note que lui attribue notre grille."
    />

    <section
      aria-labelledby="ranking-title"
      class="bg-linen-100 py-10 sm:py-14"
    >
      <div class="container-page">
        <h2
          id="ranking-title"
          class="mb-6 font-display text-xl font-extrabold text-abyss-900 sm:text-2xl"
        >
          Les {{ operators.length }} plateformes mises en regard
        </h2>

        <div class="space-y-4">
          <OperatorCard
            v-for="(operator, index) in operators"
            :key="operator.slug"
            :operator="operator"
            :rank="index + 1"
          />
        </div>

        <p class="mt-6 rounded-2xl border border-copper-200 bg-copper-50 px-5 py-4 text-xs leading-relaxed text-copper-900">
          Les notes traduisent l'avis de la rédaction au jour de publication. Elles n'annoncent aucun gain
          et ne remplacent pas la lecture des conditions générales de l'opérateur concerné.
        </p>
      </div>
    </section>

    <section
      aria-labelledby="criteria-title"
      class="py-12 sm:py-16"
    >
      <div class="container-page">
        <span class="text-[10px] font-bold uppercase tracking-[0.18em] text-jade-700">
          Piqûre de rappel
        </span>
        <h2
          id="criteria-title"
          class="mt-2.5 font-display text-xl font-extrabold text-abyss-900 sm:text-2xl"
        >
          Les quatre axes qui fondent chaque note
        </h2>

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
            <p class="mt-3 text-xs font-bold text-jade-700">
              Pondération : {{ item.weight }} %
            </p>
          </div>
        </div>

        <div class="mt-9 text-center">
          <NuxtLink
            to="/questions"
            class="inline-flex items-center gap-2 rounded-full border border-jade-600/40 px-6 py-3 text-sm font-bold text-jade-700 transition-colors hover:bg-jade-50"
          >
            Une interrogation sur la méthode ?
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
