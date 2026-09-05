<script setup lang="ts">
import { site, nav, legalNav, regulators } from '~/data/site'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="mt-auto bg-abyss-950 text-abyss-200">
    <!-- Age reminder band -->
    <div class="border-b border-white/5 bg-gradient-to-r from-jade-900 to-abyss-900">
      <div class="container-page flex flex-col items-center gap-3 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p class="font-display text-base font-extrabold text-white">
            Interdit aux mineurs — restez maître de votre pratique
          </p>
          <p class="mt-1 text-sm text-abyss-200/80">
            Une interrogation ou besoin d'un appui ? Adressez-vous aux organismes prévus, ou appelez le
            {{ site.helpline }} ({{ site.helplineNote }}).
          </p>
        </div>
        <NuxtLink
          to="/jeu-maitrise"
          class="shrink-0 rounded-full border border-jade-400/60 px-5 py-2.5 text-sm font-bold text-jade-200 transition-colors hover:bg-jade-400/10"
        >
          Jeu maîtrisé
        </NuxtLink>
      </div>
    </div>

    <div class="container-page grid gap-10 py-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
      <div>
        <SiteLogo tone="dark" />
        <p class="mt-4 max-w-sm text-sm leading-relaxed text-abyss-200/75">
          {{ site.name }} examine et met côte à côte les plateformes en ligne ouvertes depuis la France :
          sérieux de l'enseigne, agrément du site et transparence des règles, afin de décider en toute lucidité.
        </p>
      </div>

      <div>
        <h3 class="font-display text-sm font-extrabold text-white">
          Parcourir
        </h3>
        <ul class="mt-4 space-y-2.5">
          <li
            v-for="item in nav"
            :key="item.to"
          >
            <NuxtLink
              :to="item.to"
              class="text-sm text-abyss-200/75 transition-colors hover:text-copper-300"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="font-display text-sm font-extrabold text-white">
          Cadre légal
        </h3>
        <ul class="mt-4 space-y-2.5">
          <li
            v-for="item in legalNav"
            :key="item.to"
          >
            <NuxtLink
              :to="item.to"
              class="text-sm text-abyss-200/75 transition-colors hover:text-copper-300"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="font-display text-sm font-extrabold text-white">
          Un accompagnement ?
        </h3>
        <p class="mt-4 text-sm leading-relaxed text-abyss-200/75">
          Site fermé aux mineurs. Consultez ces plateformes avec retenue. Une écoute confidentielle vous
          attend au <span class="font-semibold text-white">{{ site.helpline }}</span>.
        </p>
        <a
          :href="`tel:${site.helpline.replace(/\s/g, '')}`"
          class="mt-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-bold text-jade-200 transition-colors hover:bg-white/10"
        >
          <UIcon
            name="i-lucide-phone"
            class="h-4 w-4"
          />
          {{ site.helpline }}
        </a>
      </div>
    </div>

    <!-- Regulator and prevention marks -->
    <div class="border-t border-white/5">
      <div class="container-page flex flex-wrap items-center justify-center gap-x-8 gap-y-5 py-7">
        <NuxtLink
          v-for="r in regulators"
          :key="r.label"
          :to="r.href"
          :external="r.href.startsWith('http')"
          :target="r.href.startsWith('http') ? '_blank' : undefined"
          :rel="r.href.startsWith('http') ? 'noopener noreferrer nofollow' : undefined"
          :aria-label="r.label"
          class="opacity-90 transition-opacity hover:opacity-100"
        >
          <img
            :src="r.img"
            :alt="r.alt"
            loading="lazy"
            decoding="async"
            class="h-9 w-auto max-w-[120px] object-contain sm:h-10 sm:max-w-[140px]"
          >
        </NuxtLink>
      </div>
    </div>

    <div class="border-t border-white/5">
      <div class="container-page space-y-3 py-8 text-xs leading-relaxed text-abyss-200/60">
        <p>
          Une pratique démesurée des plateformes en ligne finit par se voir : épuisement, repères qui vacillent,
          mise à l'écart. Pour être écouté et orienté, formez le {{ site.helpline }} ({{ site.helplineNote }}).
        </p>
        <p>
          Il vous revient, avant d'ouvrir un compte, de contrôler que ce type de service est permis dans votre
          pays de résidence. Ce que vous faites des informations réunies ici relève de votre seule responsabilité.
        </p>
        <p>
          Reproduire, rediffuser ou exploiter nos textes, visuels et tableaux comparatifs — en tout ou partie —
          est interdit sans notre autorisation écrite préalable.
        </p>
        <p>
          Contenu réservé aux personnes de 18 ans et plus. Fréquenter intensément ces environnements peut
          nourrir des habitudes déséquilibrées : gardez une posture calme et gardez du recul.
        </p>
      </div>
    </div>

    <div class="border-t border-white/5">
      <div class="container-page flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <ul class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <li
            v-for="item in legalNav"
            :key="item.to"
          >
            <NuxtLink
              :to="item.to"
              class="text-xs text-abyss-200/60 transition-colors hover:text-copper-300"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
        <p class="text-center text-xs text-abyss-200/60 sm:text-right">
          © {{ year }} — {{ site.name }} · 18+ | Contenu éditorial et promotionnel, aucun résultat garanti.
        </p>
      </div>
    </div>
  </footer>
</template>
