<script setup lang="ts">
import { nav } from '~/data/site'

const open = ref(false)
const route = useRoute()

watch(() => route.fullPath, () => {
  open.value = false
})
</script>

<template>
  <div class="sticky top-0 z-40">
    <p class="bg-abyss-950 px-4 py-1.5 text-center text-[11px] font-medium text-abyss-200">
      <span class="mr-2 inline-flex items-center rounded-full border border-copper-400/60 px-1.5 py-px text-[10px] font-bold text-copper-300">18+</span>
      Espace ouvert aux seuls majeurs — à consulter posément, sans précipitation.
    </p>

    <header class="border-b border-white/5 bg-abyss-900/95 backdrop-blur-sm">
      <div class="container-page flex h-16 items-center justify-between gap-4">
        <NuxtLink
          to="/"
          :aria-label="`Top Selection Premium — revenir à l'accueil`"
        >
          <SiteLogo tone="dark" />
        </NuxtLink>

        <nav
          aria-label="Navigation principale"
          class="hidden lg:block"
        >
          <ul class="flex items-center gap-1">
            <li
              v-for="item in nav"
              :key="item.to"
            >
              <NuxtLink
                :to="item.to"
                class="rounded-lg px-3 py-2 text-sm font-semibold transition-colors"
                active-class="text-copper-300"
                exact-active-class="text-copper-300"
                :class="route.path === item.to ? 'text-copper-300' : 'text-abyss-200/85 hover:bg-white/5 hover:text-white'"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="flex items-center gap-2">
          <NuxtLink
            to="/classement"
            class="hidden rounded-full bg-gradient-to-r from-jade-500 to-jade-700 px-5 py-2.5 text-sm font-bold text-white shadow-halo transition-transform duration-200 hover:-translate-y-0.5 sm:inline-flex"
          >
            Voir le classement
          </NuxtLink>

          <button
            type="button"
            :aria-expanded="open"
            aria-controls="menu-mobile"
            :aria-label="open ? 'Fermer le menu' : 'Ouvrir le menu'"
            class="grid h-10 w-10 place-items-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
            @click="open = !open"
          >
            <UIcon
              :name="open ? 'i-lucide-x' : 'i-lucide-menu'"
              class="h-6 w-6"
            />
          </button>
        </div>
      </div>

      <nav
        v-if="open"
        id="menu-mobile"
        aria-label="Navigation mobile"
        class="border-t border-white/5 bg-abyss-900 lg:hidden"
      >
        <ul class="container-page grid gap-1 py-3">
          <li
            v-for="item in nav"
            :key="item.to"
          >
            <NuxtLink
              :to="item.to"
              class="block rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors"
              :class="route.path === item.to ? 'bg-white/5 text-copper-300' : 'text-abyss-200/85 hover:bg-white/5 hover:text-white'"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
          <li class="pt-1">
            <NuxtLink
              to="/classement"
              class="flex items-center justify-center rounded-full bg-gradient-to-r from-jade-500 to-jade-700 px-5 py-2.5 text-sm font-bold text-white"
            >
              Voir le classement
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>
