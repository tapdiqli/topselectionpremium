<script setup lang="ts">
import { site, supportResources } from '~/data/site'

const title = 'Jeu maîtrisé'
const description = 'Les repères que nous rappelons systématiquement pour conserver une pratique tempérée, les signaux qui doivent alerter et les interlocuteurs indépendants vers qui se tourner.'

useSeoMeta({ title, description, ogTitle: title, ogDescription: description })

const habits = [
  {
    icon: 'i-lucide-timer',
    title: 'Posez le cadre avant de démarrer',
    text: 'Arrêtez à l\'avance le temps que vous comptez y passer, puis tenez cette limite même lorsque l\'envie de continuer se manifeste.'
  },
  {
    icon: 'i-lucide-book-open',
    title: 'Restez dans une démarche d\'information',
    text: 'Ces sites servent d\'abord à comparer et à s\'informer. Prenez le temps de lire le règlement avant toute ouverture de compte.'
  },
  {
    icon: 'i-lucide-pause',
    title: 'Accordez-vous de vraies coupures',
    text: 'S\'interrompre régulièrement aide à retrouver du recul. Réglez une alarme si le temps vous échappe facilement.'
  },
  {
    icon: 'i-lucide-sliders-horizontal',
    title: 'Enclenchez les garde-fous proposés',
    text: 'Les opérateurs sérieux offrent des rappels de session et des plafonds paramétrables. Activez-les dès la création du compte.'
  }
]

const warnings = [
  'Le temps consacré dépasse nettement ce que vous aviez prévu.',
  'Vous y retournez pour faire passer une contrariété.',
  'Vous taisez cette activité auprès de vos proches.',
  'Votre sommeil, votre travail ou vos relations en subissent les effets.',
  'L\'idée de vous arrêter provoque chez vous de l\'agacement.',
  'Tenir quelques jours sans y revenir vous semble difficile.'
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="Prévention"
      title="Conserver une pratique tempérée, consciente et choisie"
      lead="Consulter des plateformes en ligne ne pose aucun problème tant que l'activité demeure sous contrôle. Voici les repères que nous redisons à chaque page."
    />

    <section
      aria-labelledby="habits-title"
      class="py-12 sm:py-16"
    >
      <div class="container-page">
        <h2
          id="habits-title"
          class="sr-only"
        >
          Les bons réflexes
        </h2>
        <div class="grid gap-4 sm:grid-cols-2">
          <div
            v-for="item in habits"
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
      aria-labelledby="warnings-title"
      class="bg-linen-100 py-12 sm:py-16"
    >
      <div class="container-page">
        <span class="text-[10px] font-bold uppercase tracking-[0.18em] text-copper-600">
          Signaux d'alerte
        </span>
        <h2
          id="warnings-title"
          class="mt-2.5 font-display text-xl font-extrabold text-abyss-900 sm:text-2xl"
        >
          Les moments où il faut redoubler d'attention
        </h2>
        <p class="mt-2.5 max-w-2xl text-sm leading-relaxed text-abyss-700">
          Un seul de ces constats justifie déjà de marquer une pause. Si plusieurs vous ressemblent,
          adressez-vous sans tarder à un professionnel.
        </p>

        <ul class="mt-7 grid gap-3 sm:grid-cols-2">
          <li
            v-for="warning in warnings"
            :key="warning"
            class="flex items-start gap-3 rounded-xl border border-linen-200 bg-white px-4 py-3.5 text-sm leading-snug text-abyss-800 shadow-panel"
          >
            <UIcon
              name="i-lucide-triangle-alert"
              class="mt-0.5 h-4 w-4 shrink-0 text-copper-500"
            />
            {{ warning }}
          </li>
        </ul>
      </div>
    </section>

    <section
      aria-labelledby="resources-title"
      class="py-12 sm:py-16"
    >
      <div class="container-page">
        <span class="text-[10px] font-bold uppercase tracking-[0.18em] text-jade-700">
          Vers qui se tourner
        </span>
        <h2
          id="resources-title"
          class="mt-2.5 font-display text-xl font-extrabold text-abyss-900 sm:text-2xl"
        >
          Des interlocuteurs sans lien avec les opérateurs
        </h2>
        <p class="mt-2.5 max-w-2xl text-sm leading-relaxed text-abyss-700">
          Aucune de ces structures n'entretient de relation commerciale avec les plateformes étudiées sur
          ce site.
        </p>

        <div class="mt-7 grid gap-4 sm:grid-cols-2">
          <a
            v-for="resource in supportResources"
            :key="resource.name"
            :href="resource.href"
            target="_blank"
            rel="noopener noreferrer"
            class="group rounded-2xl border border-linen-200 bg-white p-5 shadow-panel transition-all hover:-translate-y-0.5 hover:border-jade-200 hover:shadow-panel-lift"
          >
            <div class="flex items-start justify-between gap-3">
              <h3 class="font-display text-base font-extrabold text-abyss-900">
                {{ resource.name }}
              </h3>
              <UIcon
                name="i-lucide-external-link"
                class="mt-0.5 h-4 w-4 shrink-0 text-abyss-400 transition-colors group-hover:text-jade-600"
              />
            </div>
            <p class="mt-2 text-sm leading-relaxed text-abyss-700">
              {{ resource.text }}
            </p>
          </a>
        </div>
      </div>
    </section>

    <section class="bg-abyss-900 py-12">
      <div class="container-page max-w-2xl text-center">
        <span class="inline-flex items-center rounded-full border border-copper-400/60 px-2 py-0.5 text-[11px] font-bold text-copper-300">
          18+
        </span>
        <h2 class="mt-4 font-display text-xl font-extrabold text-white">
          Une écoute confidentielle, gratuite et sans jugement
        </h2>
        <p class="mt-2.5 text-sm leading-relaxed text-abyss-200/80">
          Si votre pratique vous préoccupe, ou préoccupe un proche, composez le numéro ci-dessous.
          L'appel n'est pas surtaxé et ne vous engage à rien.
        </p>
        <a
          :href="`tel:${site.helpline.replace(/\s/g, '')}`"
          class="mt-6 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-jade-500 to-jade-700 px-7 py-3.5 font-display text-lg font-extrabold text-white shadow-halo transition-transform hover:-translate-y-0.5"
        >
          <UIcon
            name="i-lucide-phone"
            class="h-5 w-5"
          />
          {{ site.helpline }}
        </a>
      </div>
    </section>
  </div>
</template>
