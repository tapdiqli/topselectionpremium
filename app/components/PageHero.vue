<script setup lang="ts">
defineProps<{ eyebrow: string, title: string, lead?: string, updated?: string }>()
</script>

<template>
  <section class="relative overflow-hidden bg-abyss-900">
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(46rem_20rem_at_50%_-15%,rgba(20,166,124,0.35),transparent)]"
    />
    <div class="container-page relative py-10 text-center sm:py-12">
      <span class="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-copper-300">
        {{ eyebrow }}
      </span>
      <h1 class="text-balance-title mx-auto mt-3.5 max-w-3xl font-display text-2xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-3xl lg:text-[2.15rem]">
        {{ title }}
      </h1>
      <p
        v-if="lead"
        class="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-abyss-200/80"
      >
        {{ lead }}
      </p>
      <p
        v-if="updated"
        class="mt-4 text-xs font-medium text-abyss-200/60"
      >
        Dernière révision : {{ updated }}
      </p>
    </div>
  </section>
</template>
