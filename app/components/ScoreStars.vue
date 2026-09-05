<script setup lang="ts">
defineProps<{ stars: number }>()
</script>

<template>
  <div
    class="flex items-center gap-0.5"
    role="img"
    :aria-label="`Appréciation de ${stars} sur 5`"
  >
    <svg
      v-for="i in 5"
      :key="i"
      viewBox="0 0 20 20"
      aria-hidden="true"
      class="h-4 w-4"
      :class="i <= stars ? 'text-copper-500' : 'text-linen-300'"
      fill="currentColor"
    >
      <path d="M10 1.6l2.5 5.1 5.6.8-4 3.9.9 5.6-5-2.6-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.6Z" />
    </svg>
  </div>
</template>
