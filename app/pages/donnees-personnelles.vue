<script setup lang="ts">
import { site } from '~/data/site'
import type { LegalSection } from '~/components/LegalDoc.vue'

const title = 'Données personnelles'
const description = 'Quelles informations nous recueillons, dans quel but, combien de temps nous les gardons et comment exercer vos droits.'

useSeoMeta({ title, description, ogTitle: title, ogDescription: description })

const { consent, reset } = useConsent()

const sections: LegalSection[] = [
  {
    id: 'principe',
    title: 'Notre principe de départ',
    blocks: [
      `${site.name} ne gère aucun espace personnel et ne réclame la création d'aucun compte. La visite du site s'effectue sans que vous ayez à décliner votre identité.`,
      'Nous recueillons le strict minimum : ce qui permet de faire fonctionner le site, de mesurer sa fréquentation et de répondre aux messages qui nous parviennent.'
    ]
  },
  {
    id: 'responsable',
    title: 'Responsable du traitement',
    blocks: [
      `Le traitement est mis en œuvre par la rédaction ${site.name}, joignable à l'adresse ${site.email}. La rédaction est établie à Paris, France.`
    ]
  },
  {
    id: 'donnees',
    title: 'Données concernées',
    blocks: [
      { list: [
        'Données de navigation : pages parcourues, durée de consultation, type d\'appareil et provenance, sous une forme agrégée.',
        'Identifiant de campagne publicitaire (msclkid) lorsque vous arrivez depuis une annonce Microsoft Advertising.',
        'Préférence exprimée sur les traceurs et confirmation de majorité, conservées localement dans votre navigateur.',
        'Contenu des messages que vous nous adressez volontairement : nom, adresse électronique, objet et texte de la demande.'
      ] }
    ]
  },
  {
    id: 'finalites',
    title: 'À quoi servent ces données',
    blocks: [
      { list: [
        'Assurer l\'affichage du site et mémoriser vos choix d\'une visite à l\'autre.',
        'Évaluer l\'audience afin d\'orienter le travail éditorial.',
        'Rattacher correctement une mise en relation lorsqu\'elle découle d\'une campagne publicitaire.',
        'Traiter et suivre les demandes reçues via la page Nous écrire.'
      ] }
    ]
  },
  {
    id: 'bases',
    title: 'Bases juridiques',
    blocks: [
      'La mesure d\'audience et la conservation de l\'identifiant de campagne reposent sur votre consentement, recueilli par le bandeau affiché à la première visite et révocable à tout instant.',
      'Le traitement des messages reçus se fonde sur notre intérêt légitime à répondre aux sollicitations qui nous sont adressées.'
    ]
  },
  {
    id: 'traceurs',
    title: 'Traceurs déposés',
    blocks: [
      'Les traceurs indispensables au fonctionnement du site — mémorisation de votre choix sur les cookies et de la confirmation d\'âge — sont déposés sans consentement préalable, car le service ne peut être rendu sans eux.',
      'Les traceurs de mesure et l\'identifiant de campagne ne sont activés qu\'après acceptation explicite de votre part. Refuser n\'entrave en rien la consultation du site.'
    ]
  },
  {
    id: 'duree',
    title: 'Durées de conservation',
    blocks: [
      { list: [
        'Préférence sur les traceurs et confirmation de majorité : conservées dans votre navigateur jusqu\'à ce que vous les effaciez.',
        'Identifiant de campagne : conservé le temps de la session de navigation seulement.',
        'Statistiques de fréquentation : conservées sous forme agrégée, sans possibilité de vous réidentifier.',
        'Messages adressés à la rédaction : conservés douze mois après la clôture de l\'échange.'
      ] }
    ]
  },
  {
    id: 'destinataires',
    title: 'Qui accède à ces données',
    blocks: [
      'Seuls les membres de la rédaction ont accès aux messages reçus. Les données ne sont ni cédées, ni louées, ni échangées.',
      'Nos prestataires techniques — hébergeur et outil de mesure d\'audience — interviennent pour notre compte, dans le cadre d\'engagements contractuels et sur une infrastructure implantée dans l\'Union européenne.',
      'Les opérateurs vers lesquels nous renvoyons ne reçoivent de notre part aucune donnée vous concernant. Dès que vous quittez notre site, leur propre politique s\'applique.'
    ]
  },
  {
    id: 'droits',
    title: 'Vos droits',
    blocks: [
      'Vous disposez d\'un droit d\'accès, de rectification, d\'effacement, de limitation et d\'opposition, ainsi que du droit de retirer votre consentement à tout moment.',
      `Pour les exercer, écrivez à ${site.email}. Une réponse vous parviendra dans un délai d'un mois.`,
      'Si la réponse ne vous satisfait pas, vous pouvez saisir la Commission nationale de l\'informatique et des libertés (CNIL), autorité de contrôle compétente en France.'
    ]
  },
  {
    id: 'mineurs',
    title: 'Personnes mineures',
    blocks: [
      'Ce site ne s\'adresse pas aux moins de 18 ans et ne collecte pas sciemment leurs données. Si une telle collecte devait nous être signalée, les informations concernées seraient supprimées sans délai.'
    ]
  }
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="Vie privée"
      title="Politique de données personnelles"
      :lead="description"
      :updated="site.updated"
    />

    <LegalDoc :sections="sections" />

    <section class="pb-16">
      <div class="container-page">
        <div class="rounded-2xl border border-jade-200 bg-jade-50 p-6 text-center">
          <h2 class="font-display text-base font-extrabold text-abyss-900">
            Revenir sur votre choix de traceurs
          </h2>
          <p class="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-abyss-700">
            <ClientOnly>
              <template v-if="consent === 'all'">
                Vous avez accepté les traceurs de mesure.
              </template>
              <template v-else-if="consent === 'essential'">
                Vous n'avez autorisé que les traceurs indispensables.
              </template>
              <template v-else>
                Aucune préférence n'est enregistrée pour l'instant.
              </template>
            </ClientOnly>
            Le bandeau reparaîtra afin que vous puissiez trancher à nouveau.
          </p>
          <button
            type="button"
            class="mt-5 rounded-full bg-gradient-to-r from-jade-500 to-jade-700 px-6 py-2.5 text-sm font-bold text-white shadow-halo transition-transform hover:-translate-y-0.5"
            @click="reset(); $router.go(0)"
          >
            Modifier mes préférences
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
