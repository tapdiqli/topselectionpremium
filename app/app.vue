<script setup lang="ts">
import { site } from '~/data/site'

const route = useRoute()

useHead({
  htmlAttrs: { lang: 'fr' },
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'rating', content: 'adult' },
    { name: 'theme-color', content: '#04161c' }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'canonical', href: () => site.url + route.path }
  ],
  titleTemplate: chunk => (chunk ? `${chunk} | ${site.name}` : site.name)
})

useSeoMeta({
  description: site.description,
  ogSiteName: site.name,
  ogLocale: site.locale,
  ogType: 'website',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <div class="flex min-h-screen flex-col">
      <SiteHeader />
      <main class="flex-1">
        <NuxtPage />
      </main>
      <SiteFooter />
    </div>

    <AgeGate />
    <CookieBanner />
  </UApp>
</template>
