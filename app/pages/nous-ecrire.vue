<script setup lang="ts">
import { site } from '~/data/site'

const title = 'Nous écrire'
const description = 'Une question, une précision ou une correction à signaler ? Chaque message est lu par un membre de la rédaction de Top Selection Premium.'

useSeoMeta({ title, description, ogTitle: title, ogDescription: description })

const subjects = [
  'Une question d\'ordre général',
  'Signaler une information erronée',
  'Suggérer une plateforme à examiner',
  'Sollicitation presse ou partenariat',
  'Autre motif'
]

const form = reactive({
  name: '',
  email: '',
  subject: subjects[0],
  message: '',
  confirmed: false
})

const sent = ref(false)

const mailto = computed(() => {
  const body = [
    `Nom : ${form.name}`,
    `Objet : ${form.subject}`,
    '',
    form.message
  ].join('\n')

  return `mailto:${site.email}?subject=${encodeURIComponent(`[${site.shortName}] ${form.subject}`)}&body=${encodeURIComponent(body)}`
})

function submit() {
  if (!form.confirmed) return
  sent.value = true
  window.location.href = mailto.value
}
</script>

<template>
  <div>
    <PageHero
      eyebrow="Prendre contact"
      title="Une question, une précision, une rectification ?"
      lead="Chaque message atterrit chez un membre de la rédaction. Plus votre demande sera circonstanciée, plus notre réponse le sera aussi."
    />

    <section class="py-12 sm:py-16">
      <div class="container-page grid gap-8 lg:grid-cols-[1fr_1.3fr]">
        <aside class="space-y-5">
          <div class="rounded-2xl border border-linen-200 bg-white p-6 shadow-panel">
            <h2 class="font-display text-base font-extrabold text-abyss-900">
              Nous joindre autrement
            </h2>
            <p class="mt-2.5 text-sm leading-relaxed text-abyss-700">
              Nous n'administrons aucun compte joueur et ne pouvons pas intervenir auprès des plateformes
              étudiées. Pour toute démarche liée à un compte, adressez-vous directement au service concerné.
            </p>

            <dl class="mt-5 space-y-4">
              <div>
                <dt class="text-[10px] font-bold uppercase tracking-[0.16em] text-abyss-500">
                  Courriel
                </dt>
                <dd class="mt-1">
                  <a
                    :href="`mailto:${site.email}`"
                    class="text-sm font-semibold text-jade-700 hover:underline"
                  >
                    {{ site.email }}
                  </a>
                </dd>
              </div>
              <div>
                <dt class="text-[10px] font-bold uppercase tracking-[0.16em] text-abyss-500">
                  Rédaction
                </dt>
                <dd class="mt-1 text-sm font-semibold text-abyss-800">
                  Paris, France
                </dd>
              </div>
              <div>
                <dt class="text-[10px] font-bold uppercase tracking-[0.16em] text-abyss-500">
                  Écoute et prévention
                </dt>
                <dd class="mt-1 text-sm font-semibold text-abyss-800">
                  {{ site.helpline }} ({{ site.helplineNote }})
                </dd>
              </div>
            </dl>
          </div>

          <p class="rounded-2xl border border-copper-200 bg-copper-50 px-5 py-4 text-xs leading-relaxed text-copper-900">
            Pour mémoire : {{ site.name }} ne s'adresse qu'à un public majeur. Aucune sollicitation émanant
            d'une personne mineure ne sera traitée.
          </p>
        </aside>

        <div class="rounded-2xl border border-linen-200 bg-white p-6 shadow-panel sm:p-8">
          <div
            v-if="sent"
            class="text-center"
          >
            <span class="mx-auto grid h-12 w-12 place-items-center rounded-full bg-jade-50 text-jade-700">
              <UIcon
                name="i-lucide-mail-check"
                class="h-6 w-6"
              />
            </span>
            <h2 class="mt-4 font-display text-lg font-extrabold text-abyss-900">
              Votre logiciel de messagerie prend le relais
            </h2>
            <p class="mt-2 text-sm leading-relaxed text-abyss-700">
              Si rien ne s'est ouvert, écrivez-nous directement à
              <a
                :href="`mailto:${site.email}`"
                class="font-semibold text-jade-700 hover:underline"
              >{{ site.email }}</a>.
            </p>
            <button
              type="button"
              class="mt-5 rounded-full border border-linen-300 px-5 py-2.5 text-sm font-semibold text-abyss-800 transition-colors hover:bg-linen-100"
              @click="sent = false"
            >
              Rédiger un autre message
            </button>
          </div>

          <form
            v-else
            class="space-y-5"
            @submit.prevent="submit"
          >
            <div class="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  for="name"
                  class="block text-xs font-bold text-abyss-800"
                >Nom</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  autocomplete="name"
                  class="mt-1.5 w-full rounded-xl border border-linen-300 bg-linen-50 px-3.5 py-2.5 text-sm text-abyss-900 outline-none transition-colors focus:border-jade-500 focus:bg-white"
                >
              </div>
              <div>
                <label
                  for="email"
                  class="block text-xs font-bold text-abyss-800"
                >Adresse e-mail</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  autocomplete="email"
                  class="mt-1.5 w-full rounded-xl border border-linen-300 bg-linen-50 px-3.5 py-2.5 text-sm text-abyss-900 outline-none transition-colors focus:border-jade-500 focus:bg-white"
                >
              </div>
            </div>

            <div>
              <label
                for="subject"
                class="block text-xs font-bold text-abyss-800"
              >Objet</label>
              <select
                id="subject"
                v-model="form.subject"
                class="mt-1.5 w-full rounded-xl border border-linen-300 bg-linen-50 px-3.5 py-2.5 text-sm text-abyss-900 outline-none transition-colors focus:border-jade-500 focus:bg-white"
              >
                <option
                  v-for="subject in subjects"
                  :key="subject"
                  :value="subject"
                >
                  {{ subject }}
                </option>
              </select>
            </div>

            <div>
              <label
                for="message"
                class="block text-xs font-bold text-abyss-800"
              >Message</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="6"
                required
                class="mt-1.5 w-full resize-y rounded-xl border border-linen-300 bg-linen-50 px-3.5 py-2.5 text-sm text-abyss-900 outline-none transition-colors focus:border-jade-500 focus:bg-white"
              />
            </div>

            <label class="flex items-start gap-2.5 text-xs leading-relaxed text-abyss-700">
              <input
                v-model="form.confirmed"
                type="checkbox"
                required
                class="mt-0.5 h-4 w-4 shrink-0 rounded border-linen-300 text-jade-600 focus:ring-jade-500"
              >
              <span>
                Je certifie avoir 18 ans révolus et j'accepte que mes informations soient utilisées dans le
                seul but de traiter cette demande.
              </span>
            </label>

            <button
              type="submit"
              class="w-full rounded-full bg-gradient-to-r from-jade-500 to-jade-700 px-6 py-3 text-sm font-bold text-white shadow-halo transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
              :disabled="!form.confirmed"
            >
              Transmettre le message
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
