<script setup lang="ts">
export type LegalBlock = string | { list: string[] }
export type LegalSection = { id: string, title: string, blocks: LegalBlock[] }

defineProps<{ sections: LegalSection[] }>()

function isList(block: LegalBlock): block is { list: string[] } {
  return typeof block !== 'string'
}
</script>

<template>
  <section class="py-12 sm:py-16">
    <div class="container-page grid gap-10 lg:grid-cols-[16rem_1fr]">
      <nav
        aria-label="Sommaire"
        class="lg:sticky lg:top-32 lg:self-start"
      >
        <div class="rounded-2xl border border-linen-200 bg-white p-5 shadow-panel">
          <h2 class="font-display text-sm font-extrabold text-abyss-900">
            Sommaire
          </h2>
          <ol class="mt-3.5 space-y-2">
            <li
              v-for="(section, index) in sections"
              :key="section.id"
            >
              <a
                :href="`#${section.id}`"
                class="flex gap-2 text-sm leading-snug text-abyss-700 transition-colors hover:text-jade-700"
              >
                <span class="font-bold text-copper-500">{{ index + 1 }}.</span>
                {{ section.title }}
              </a>
            </li>
          </ol>
        </div>
      </nav>

      <div class="max-w-3xl space-y-10">
        <section
          v-for="(section, index) in sections"
          :id="section.id"
          :key="section.id"
          class="scroll-mt-32"
        >
          <h2 class="font-display text-lg font-extrabold text-abyss-900">
            <span class="text-copper-500">{{ index + 1 }}.</span> {{ section.title }}
          </h2>

          <div class="mt-3 space-y-3">
            <template
              v-for="(block, i) in section.blocks"
              :key="i"
            >
              <ul
                v-if="isList(block)"
                class="space-y-2"
              >
                <li
                  v-for="item in block.list"
                  :key="item"
                  class="flex items-start gap-2.5 text-sm leading-relaxed text-abyss-700"
                >
                  <UIcon
                    name="i-lucide-dot"
                    class="mt-0.5 h-4 w-4 shrink-0 text-jade-600"
                  />
                  <span>{{ item }}</span>
                </li>
              </ul>
              <p
                v-else
                class="text-sm leading-relaxed text-abyss-700"
              >
                {{ block }}
              </p>
            </template>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>
