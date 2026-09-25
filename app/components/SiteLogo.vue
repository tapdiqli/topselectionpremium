<script setup lang="ts">
withDefaults(defineProps<{ tone?: 'dark' | 'light', compact?: boolean }>(), {
  tone: 'dark',
  compact: false
})

const uid = useId()
</script>

<template>
  <span class="inline-flex items-center gap-2.5">
    <svg
      viewBox="0 0 40 40"
      role="img"
      aria-hidden="true"
      class="h-9 w-9 shrink-0"
    >
      <defs>
        <linearGradient
          :id="`tsp-face-${uid}`"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop
            offset="0%"
            :stop-color="tone === 'dark' ? '#0f3a44' : '#14a67c'"
          />
          <stop
            offset="100%"
            :stop-color="tone === 'dark' ? '#04161c' : '#076b51'"
          />
        </linearGradient>
      </defs>

      <polygon
        points="20,1 36.45,10.5 36.45,29.5 20,39 3.55,29.5 3.55,10.5"
        :fill="`url(#tsp-face-${uid})`"
        stroke="#35c297"
        stroke-width="1.4"
        stroke-linejoin="round"
      />
      <polygon
        points="20,5.6 32.45,12.8 32.45,27.2 20,34.4 7.55,27.2 7.55,12.8"
        fill="none"
        stroke="#35c297"
        stroke-width="0.6"
        stroke-opacity="0.35"
        stroke-linejoin="round"
      />

      <!-- Three ascending bars: the podium that gives the mark its meaning -->
      <rect
        x="11"
        y="22.5"
        width="4.6"
        height="6.5"
        rx="1.4"
        fill="#35c297"
        fill-opacity="0.55"
      />
      <rect
        x="17.7"
        y="18.5"
        width="4.6"
        height="10.5"
        rx="1.4"
        fill="#6fdab6"
        fill-opacity="0.8"
      />
      <rect
        x="24.4"
        y="14.5"
        width="4.6"
        height="14.5"
        rx="1.4"
        fill="#e28a49"
      />

      <path
        d="M26.7 11.6 L28.5 8.4 L30.3 11.6 L28.5 12.9 Z"
        fill="#ecb07c"
      />
    </svg>

    <span
      v-if="!compact"
      class="flex flex-col leading-none"
    >
      <span
        class="font-display text-[0.95rem] font-extrabold tracking-[-0.01em]"
        :class="tone === 'dark' ? 'text-white' : 'text-abyss-900'"
      >
        Top<span class="text-jade-400">Selection</span>
      </span>
      <span
        class="mt-1 text-[0.5rem] font-bold uppercase tracking-[0.42em]"
        :class="tone === 'dark' ? 'text-copper-300' : 'text-copper-600'"
      >
        Premium
      </span>
    </span>
  </span>
</template>
