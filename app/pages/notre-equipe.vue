<script setup lang="ts">
import { site, criteria } from '~/data/site'

const title = 'Notre équipe'
const description = 'Top Selection Premium est un support éditorial : nous observons, nous comparons et nous écrivons, sans proposer le moindre service de jeu.'

useSeoMeta({ title, description, ogTitle: title, ogDescription: description })

const commitments = [
  'Une grille identique pour toutes les enseignes passées en revue',
  'Aucune note monnayée, aucune position négociable',
  'Les faiblesses exposées aussi franchement que les qualités',
  'Un rappel constant du cadre 18+ et de la pratique tempérée',
  'Une rectification rapide dès qu\'une erreur nous est remontée'
]

const steps = [
  {
    step: 'Étape 1',
    title: 'Repérage',
    text: 'Nous listons les plateformes véritablement accessibles depuis la France et écartons celles dont les informations publiques demeurent trop vagues.'
  },
  {
    step: 'Étape 2',
    title: 'Instruction',
    text: 'Chaque enseigne conservée traverse la même grille, renseignée à partir de sources publiques et de nos propres constatations.'
  },
  {
    step: 'Étape 3',
    title: 'Arbitrage',
    text: 'Les résultats sont confrontés les uns aux autres, ce dont découlent la position, la note chiffrée et le nombre d\'étoiles.'
  },
  {
    step: 'Étape 4',
    title: 'Mise à jour',
    text: 'Les fiches sont reprises à échéances régulières et corrigées sitôt qu\'une évolution notable est observée.'
  }
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="Qui écrit ces pages"
      title="Un comparateur éditorial, en aucun cas un opérateur"
      :lead="`${site.name} est un site d'information. Nous observons, nous confrontons et nous rédigeons ; aucun service de jeu n'est proposé chez nous.`"
    />

    <section class="py-12 sm:py-16">
      <div class="container-page grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div class="space-y-8">
          <div>
            <h2 class="font-display text-xl font-extrabold text-abyss-900">
              Ce qui nous a décidés
            </h2>
            <div class="mt-3 space-y-3 text-sm leading-relaxed text-abyss-700">
              <p>
                Le marché français ne manque pas d'acteurs, et rien n'est plus malaisé que de séparer ceux
                qui honorent leurs engagements de ceux qui savent surtout communiquer. Nous avons lancé
                {{ site.name }} pour offrir un repère de comparaison stable, écrit dans une langue accessible.
              </p>
              <p>
                Notre biais assumé : ne retenir que ce qui se vérifie. Nombre d'années d'exercice, netteté du
                règlement, ergonomie éprouvée, promptitude du service client. Les promesses invérifiables et
                les arguments purement publicitaires restent à la porte.
              </p>
              <p>
                Nous ne revendiquons aucune vérité définitive. Notre classement est un point de départ
                argumenté ; l'arbitrage final, lui, vous appartient sans partage.
              </p>
            </div>
          </div>

          <div>
            <h2 class="font-display text-xl font-extrabold text-abyss-900">
              D'où viennent nos revenus
            </h2>
            <div class="mt-3 space-y-3 text-sm leading-relaxed text-abyss-700">
              <p>
                La lecture ne coûte rien. Une part des liens sortants peut nous rapporter une commission
                lorsqu'un visiteur poursuit sa route chez une enseigne étudiée.
              </p>
              <p>
                Ce financement ne déplace ni la grille de lecture ni l'ordre du palmarès. Les mêmes critères
                valent pour toutes les plateformes, qu'un accord commercial existe ou non.
              </p>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div class="rounded-2xl border border-linen-200 bg-white p-6 shadow-panel">
            <h2 class="font-display text-base font-extrabold text-abyss-900">
              Nos engagements
            </h2>
            <ul class="mt-4 space-y-3">
              <li
                v-for="item in commitments"
                :key="item"
                class="flex items-start gap-2.5 text-sm leading-snug text-abyss-700"
              >
                <UIcon
                  name="i-lucide-check"
                  class="mt-0.5 h-4 w-4 shrink-0 text-jade-600"
                />
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="rounded-2xl border border-linen-200 bg-white p-6 shadow-panel">
            <h2 class="font-display text-base font-extrabold text-abyss-900">
              La pondération retenue
            </h2>
            <ul class="mt-4 space-y-3.5">
              <li
                v-for="item in criteria"
                :key="item.index"
              >
                <div class="flex items-center justify-between text-sm font-semibold text-abyss-800">
                  <span>{{ item.title }}</span>
                  <span class="text-jade-700">{{ item.weight }} %</span>
                </div>
                <div class="mt-1.5 h-1.5 overflow-hidden rounded-full bg-linen-200">
                  <div
                    class="h-full rounded-full bg-gradient-to-r from-jade-400 to-jade-600"
                    :style="{ width: `${item.weight}%` }"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section
      aria-labelledby="process-title"
      class="bg-linen-100 py-12 sm:py-16"
    >
      <div class="container-page">
        <span class="text-[10px] font-bold uppercase tracking-[0.18em] text-jade-700">
          Notre déroulé
        </span>
        <h2
          id="process-title"
          class="mt-2.5 font-display text-xl font-extrabold text-abyss-900 sm:text-2xl"
        >
          Quatre temps, toujours dans cet ordre
        </h2>

        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="item in steps"
            :key="item.step"
            class="rounded-2xl border border-linen-200 bg-white p-5 shadow-panel"
          >
            <span class="text-[10px] font-bold uppercase tracking-[0.16em] text-copper-600">
              {{ item.step }}
            </span>
            <h3 class="mt-2 font-display text-base font-extrabold text-abyss-900">
              {{ item.title }}
            </h3>
            <p class="mt-1.5 text-sm leading-relaxed text-abyss-700">
              {{ item.text }}
            </p>
          </div>
        </div>

        <div class="mt-9 text-center">
          <NuxtLink
            to="/nous-ecrire"
            class="inline-flex items-center gap-2 rounded-full border border-jade-600/40 px-6 py-3 text-sm font-bold text-jade-700 transition-colors hover:bg-jade-50"
          >
            Une observation à nous faire remonter ?
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
