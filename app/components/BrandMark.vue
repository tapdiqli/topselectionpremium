<script setup lang="ts">
import type { BrandMark } from '~/data/operators'

withDefaults(
  defineProps<{ mark: BrandMark, name: string, size?: 'sm' | 'lg' }>(),
  { size: 'sm' }
)
</script>

<template>
  <img
    :src="mark.src"
    :alt="`Emblème ${name}`"
    width="400"
    height="300"
    :class="size === 'lg'
      ? 'h-auto w-[10.5rem] rounded-xl shadow-panel ring-1 ring-abyss-900/10'
      : 'h-auto w-[6.75rem] rounded-lg shadow-panel ring-1 ring-abyss-900/10 sm:w-32'"
  >
</template>
