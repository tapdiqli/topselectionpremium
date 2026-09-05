<script setup lang="ts">
import { site } from '~/data/site'
import type { LegalSection } from '~/components/LegalDoc.vue'

const title = 'Conditions générales'
const description = 'Les règles qui encadrent l\'accès au site et l\'usage des analyses que nous publions.'

useSeoMeta({ title, description, ogTitle: title, ogDescription: description })

const sections: LegalSection[] = [
  {
    id: 'objet',
    title: 'Objet',
    blocks: [
      `Le présent texte régit l'accès au site ${site.domain} ainsi que l'usage des contenus qui y sont diffusés. Consulter le site emporte adhésion entière à ces règles.`
    ]
  },
  {
    id: 'public',
    title: 'Public visé',
    blocks: [
      'L\'entrée est réservée aux personnes ayant au moins 18 ans. Un dispositif de confirmation d\'âge est présenté dès la première visite ; toute déclaration mensongère engage celui qui la formule.',
      'Il vous incombe par ailleurs de vérifier que la consultation de tels contenus est licite dans votre pays de résidence.'
    ]
  },
  {
    id: 'contenus',
    title: 'Nature des contenus',
    blocks: [
      'Les comparatifs, notes et analyses diffusés traduisent le jugement de la rédaction à la date de leur mise en ligne, sur la base d\'une méthode appliquée à l\'identique à chaque enseigne.',
      'Leur portée demeure strictement informative. Ils ne constituent ni un conseil individualisé, ni une incitation, ni la promesse d\'un quelconque résultat.'
    ]
  },
  {
    id: 'autorise',
    title: 'Usage autorisé',
    blocks: [
      { list: [
        'Parcourir librement les pages pour vos besoins personnels.',
        'Relayer un lien vers une page du site en mentionnant explicitement la source.',
        'Nous signaler toute donnée que vous jugez inexacte via la page Nous écrire.'
      ] }
    ]
  },
  {
    id: 'interdit',
    title: 'Usage prohibé',
    blocks: [
      { list: [
        'Reproduire, republier ou monétiser nos contenus sans accord écrit préalable.',
        'Aspirer massivement les données du site par un moyen automatisé.',
        'Chercher à perturber le fonctionnement du site ou à en déjouer les protections.',
        'Restituer nos analyses de manière trompeuse ou détachée de leur contexte d\'origine.'
      ] }
    ]
  },
  {
    id: 'tiers',
    title: 'Renvois vers des services tiers',
    blocks: [
      'Le site oriente vers des plateformes exploitées par des tiers, soumises à leurs propres conditions. Nous vous invitons à les parcourir attentivement avant tout engagement.',
      'L\'éditeur n\'exerce aucune maîtrise sur ces services et ne saurait répondre de leur contenu, de leur accessibilité ou de leurs pratiques.'
    ]
  },
  {
    id: 'disponibilite',
    title: 'Disponibilité et évolutions',
    blocks: [
      'Le site peut se trouver momentanément inaccessible, pour maintenance ou pour une cause échappant à notre maîtrise, sans que cela ouvre droit à la moindre indemnisation.',
      'Les contenus, le classement et le présent texte sont susceptibles d\'évoluer à tout moment. Fait foi la version publiée en ligne au moment de votre visite.'
    ]
  },
  {
    id: 'responsabilite',
    title: 'Responsabilité',
    blocks: [
      'L\'éditeur ne saurait répondre des décisions prises par un visiteur au vu des informations diffusées, non plus que des conséquences, directes ou indirectes, qui en résulteraient.'
    ]
  },
  {
    id: 'jeu-maitrise',
    title: 'Pratique maîtrisée',
    blocks: [
      `Fréquenter excessivement ces plateformes peut favoriser des comportements déséquilibrés. Une écoute confidentielle est joignable au ${site.helpline} (${site.helplineNote}), et notre page Jeu maîtrisé recense d'autres ressources.`
    ]
  },
  {
    id: 'droit',
    title: 'Droit applicable',
    blocks: [
      'Les présentes conditions relèvent du droit français. Tout différend qui n\'aurait pu être résolu à l\'amiable sera porté devant les juridictions françaises compétentes.'
    ]
  }
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="Cadre d'utilisation"
      title="Conditions générales"
      :lead="description"
      :updated="site.updated"
    />
    <LegalDoc :sections="sections" />
  </div>
</template>
