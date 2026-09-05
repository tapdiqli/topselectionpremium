<script setup lang="ts">
import type { Operator } from '~/data/operators'

const props = defineProps<{ operator: Operator, rank: number }>()

const { decorate } = useAffiliateLink()
const href = computed(() => decorate(props.operator.href))
</script>

<template>
  <article class="rounded-2xl border border-linen-200 bg-white p-4 shadow-panel transition-all duration-300 hover:-translate-y-0.5 hover:border-jade-200 hover:shadow-panel-lift sm:p-5 lg:p-6">
    <!-- Compact layout -->
    <div class="lg:hidden">
      <div class="flex items-center gap-3">
        <span class="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-abyss-900 font-display text-xs font-bold text-white">
          {{ rank }}
        </span>
        <BrandMark
          :mark="operator.mark"
          :name="operator.name"
          class="shrink-0"
        />
        <h3 class="min-w-0 flex-1 truncate font-display text-base font-extrabold leading-tight text-abyss-900">
          {{ operator.name }}
        </h3>
        <div class="shrink-0 text-right">
          <p class="font-display text-xl font-extrabold leading-none text-abyss-900">
            {{ operator.score.toFixed(1) }}
          </p>
          <ScoreStars
            :stars="operator.stars"
            class="mt-1 scale-90 origin-right justify-end"
          />
        </div>
      </div>

      <span class="mt-3 inline-block rounded-full bg-copper-100 px-2.5 py-0.5 text-[10px] font-bold text-copper-700">
        {{ operator.badge }}
      </span>

      <p class="mt-2 text-[13px] font-medium leading-snug text-abyss-800">
        {{ operator.summary }}
      </p>

      <a
        :href="href"
        target="_blank"
        rel="noopener noreferrer sponsored nofollow"
        class="mt-4 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-jade-500 to-jade-700 px-4 py-2.5 text-sm font-bold text-white shadow-halo transition-transform hover:-translate-y-0.5"
      >
        Découvrir {{ operator.name }}
      </a>
    </div>

    <!-- Wide layout -->
    <div class="hidden items-center gap-6 lg:grid lg:grid-cols-12">
      <div class="col-span-3 flex items-center gap-3">
        <span class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-abyss-900 font-display text-sm font-bold text-white">
          {{ rank }}
        </span>
        <BrandMark
          :mark="operator.mark"
          :name="operator.name"
          size="lg"
        />
      </div>

      <div class="col-span-6 min-w-0">
        <div class="flex flex-wrap items-center gap-2">
          <h3 class="font-display text-lg font-extrabold leading-tight text-abyss-900">
            {{ operator.name }}
          </h3>
          <span class="rounded-full bg-copper-100 px-2.5 py-0.5 text-[10px] font-bold text-copper-700">
            {{ operator.badge }}
          </span>
        </div>

        <p class="mt-2 text-sm leading-relaxed text-abyss-800">
          {{ operator.summary }}
        </p>

        <ul class="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
          <li
            v-for="point in operator.strengths"
            :key="point"
            class="flex items-center gap-1.5 text-[13px] font-medium text-abyss-700"
          >
            <UIcon
              name="i-lucide-check"
              class="h-4 w-4 shrink-0 text-jade-600"
            />
            {{ point }}
          </li>
        </ul>
      </div>

      <div class="col-span-3 text-right">
        <p class="font-display text-3xl font-extrabold leading-none text-abyss-900">
          {{ operator.score.toFixed(1) }}
        </p>
        <ScoreStars
          :stars="operator.stars"
          class="mt-1.5 justify-end"
        />
        <a
          :href="href"
          target="_blank"
          rel="noopener noreferrer sponsored nofollow"
          class="mt-3.5 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-jade-500 to-jade-700 px-5 py-2.5 text-sm font-bold text-white shadow-halo transition-transform hover:-translate-y-0.5"
        >
          Découvrir
        </a>
      </div>
    </div>
  </article>
</template>
