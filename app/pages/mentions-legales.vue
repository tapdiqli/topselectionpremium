<script setup lang="ts">
import { site } from '~/data/site'
import type { LegalSection } from '~/components/LegalDoc.vue'

const title = 'Mentions légales'
const description = `Identification de l'éditeur, cadre d'utilisation et responsabilités applicables au site ${site.domain}.`

useSeoMeta({ title, description, ogTitle: title, ogDescription: description })

const sections: LegalSection[] = [
  {
    id: 'editeur',
    title: 'Éditeur du site',
    blocks: [
      `Le site ${site.domain} est publié par la rédaction ${site.name}, structure autonome consacrée à l'analyse comparative des plateformes en ligne ouvertes depuis la France.`,
      `Siège de la rédaction : Paris, France. Pour nous joindre : ${site.email}.`
    ]
  },
  {
    id: 'publication',
    title: 'Direction de la publication',
    blocks: [
      `La responsabilité de la publication incombe au responsable éditorial de ${site.name}, que l'on peut contacter à l'adresse ${site.email}.`
    ]
  },
  {
    id: 'hebergement',
    title: 'Hébergement',
    blocks: [
      'Le site repose sur une infrastructure cloud établie au sein de l\'Union européenne. Les coordonnées détaillées de l\'hébergeur sont transmises sur simple demande écrite adressée à la rédaction.'
    ]
  },
  {
    id: 'nature',
    title: 'Nature du service',
    blocks: [
      `${site.name} constitue un support éditorial doublé d'une dimension publicitaire. Nous n'offrons aucune prestation transactionnelle, n'ouvrons aucun espace personnel et ne percevons aucun règlement de la part des visiteurs.`,
      'Ce qui est publié ici a valeur d\'information. Cela ne vaut ni recommandation personnalisée, ni promesse de résultat.'
    ]
  },
  {
    id: 'propriete',
    title: 'Propriété intellectuelle',
    blocks: [
      'La totalité des éléments qui composent ce site — rédactionnels, tableaux comparatifs, éléments graphiques, composants d\'interface — relève de la protection du droit de la propriété intellectuelle.',
      'Toute reproduction, adaptation, rediffusion ou exploitation, complète ou fragmentaire, sur quelque support que ce soit, est prohibée sans autorisation écrite délivrée au préalable par l\'éditeur.'
    ]
  },
  {
    id: 'liens',
    title: 'Liens sortants et rémunération',
    blocks: [
      'Le site oriente vers des services exploités par des tiers. Certains de ces renvois sont susceptibles de générer une rémunération au bénéfice de l\'éditeur.',
      'Cette rémunération demeure sans incidence sur la méthode d\'évaluation retenue comme sur l\'ordre du classement diffusé. L\'éditeur ne maîtrise nullement le contenu des sites tiers et se dégage de toute responsabilité les concernant.'
    ]
  },
  {
    id: 'responsabilite',
    title: 'Limitation de responsabilité',
    blocks: [
      'L\'éditeur s\'attache à diffuser des informations justes et actualisées, sans pouvoir en garantir l\'exhaustivité à chaque instant. L\'usage fait des informations rassemblées ici engage le seul visiteur.',
      'Il appartient à chacun de s\'assurer que la consultation de ce type de contenu est licite dans son pays de résidence.'
    ]
  },
  {
    id: 'majeurs',
    title: 'Accès réservé aux personnes majeures',
    blocks: [
      'L\'entrée sur le site est rigoureusement limitée aux personnes ayant atteint 18 ans révolus. Un dispositif de contrôle de l\'âge apparaît dès la première visite.',
      `Une pratique excessive des plateformes en ligne peut conduire à l'isolement ou à la perte de repères. Pour être écouté et orienté, formez le ${site.helpline} (${site.helplineNote}).`
    ]
  }
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="Informations légales"
      title="Mentions légales"
      :lead="description"
      :updated="site.updated"
    />
    <LegalDoc :sections="sections" />
  </div>
</template>
