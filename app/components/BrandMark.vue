<script setup lang="ts">
import type { BrandMark } from '~/data/operators'

const props = withDefaults(
  defineProps<{ mark: BrandMark, name: string, size?: 'sm' | 'lg' }>(),
  { size: 'sm' }
)

// Unique gradient ids so several medallions can share a page.
const uid = useId()
const faceId = computed(() => `mark-face-${props.mark.initial}-${uid}`)
</script>

<template>
  <svg
    :viewBox="size === 'lg' ? '0 0 132 116' : '0 0 108 96'"
    role="img"
    :aria-label="`Emblème ${name}`"
    :class="size === 'lg' ? 'h-24 w-auto' : 'h-14 w-auto'"
  >
    <defs>
      <linearGradient
        :id="faceId"
        x1="0"
        y1="0"
        x2="0.4"
        y2="1"
      >
        <stop
          offset="0%"
          :stop-color="mark.from"
        />
        <stop
          offset="100%"
          :stop-color="mark.to"
        />
      </linearGradient>
    </defs>

    <g :transform="size === 'lg' ? 'translate(66 58) scale(1.2)' : 'translate(54 48)'">
      <!-- Flat-top hexagon medallion -->
      <polygon
        points="-30,0 -15,-26 15,-26 30,0 15,26 -15,26"
        :fill="`url(#${faceId})`"
        :stroke="mark.edge"
        stroke-width="2"
        stroke-linejoin="round"
      />
      <polygon
        points="-24,0 -12,-20.8 12,-20.8 24,0 12,20.8 -12,20.8"
        fill="none"
        :stroke="mark.edge"
        stroke-width="0.8"
        stroke-opacity="0.4"
        stroke-linejoin="round"
      />

      <text
        x="0"
        y="-1"
        text-anchor="middle"
        dominant-baseline="middle"
        class="font-display"
        font-size="21"
        font-weight="800"
        letter-spacing="-0.5"
        :fill="mark.ink"
      >{{ mark.initial }}</text>

      <!-- Rank bars: how many are filled mirrors the operator's tier -->
      <g :transform="'translate(-7.5 11)'">
        <rect
          v-for="i in 3"
          :key="i"
          :x="(i - 1) * 5.5"
          y="0"
          width="3.4"
          height="4.6"
          rx="1.1"
          :fill="mark.edge"
          :fill-opacity="i <= mark.bars ? 1 : 0.28"
        />
      </g>
    </g>
  </svg>
</template>
