<script setup lang="ts">
import { site } from '~/data/site'
import { operatorNames } from '~/data/operators'
import type { LegalSection } from '~/components/LegalDoc.vue'

const title = 'Transparence affiliation'
const description = 'Comment ce site est financé, ce que cela implique pour vous, et pourquoi cela ne déplace jamais une ligne de notre classement.'

useSeoMeta({ title, description, ogTitle: title, ogDescription: description })

const sections: LegalSection[] = [
  {
    id: 'essentiel',
    title: 'L\'essentiel en une phrase',
    blocks: [
      `${site.name} (${site.domain}) est un site éditorial vivant de l'affiliation : cliquer sur un lien menant vers un opérateur cité peut nous valoir une commission. La lecture vous reste gratuite et cette commission ne déplace pas l'ordre du classement.`
    ]
  },
  {
    id: 'modele',
    title: 'Notre modèle économique',
    blocks: [
      'Nous ne commercialisons aucun service et n\'encaissons rien auprès des visiteurs. Notre unique ressource provient des sommes versées par les opérateurs, ou par les régies d\'affiliation qui les représentent.',
      { list: [
        'Elle peut se déclencher sur un clic sortant, une inscription ou l\'ouverture d\'un compte chez l\'opérateur.',
        'Elle diffère d\'une enseigne à l\'autre : certaines rémunèrent mieux, d\'autres pas du tout.',
        'Elle couvre le temps passé à éprouver les plateformes, à contrôler les agréments et à tenir les pages à jour.'
      ] }
    ]
  },
  {
    id: 'independance',
    title: 'Pourquoi le montant ne pèse pas sur le classement',
    blocks: [
      'La position de chaque plateforme se fixe avant toute considération commerciale, à partir de la grille publiée sur notre page méthode : assise de l\'enseigne, ergonomie au quotidien, clarté du règlement et qualité de l\'accompagnement.',
      'Aucun opérateur ne peut acquérir un rang, ni obtenir le retrait d\'une réserve que nous aurions exprimée. Symétriquement, une enseigne qui ne nous rémunère pas figure au classement dès lors qu\'elle satisfait nos critères.'
    ]
  },
  {
    id: 'operateurs',
    title: 'Opérateurs concernés',
    blocks: [
      `Les plateformes mentionnées sur ce site sont : ${operatorNames}. Toutes détiennent un agrément de l'Autorité nationale des jeux (ANJ) et sont accessibles légalement depuis la France.`,
      'Nous n\'exploitons aucune de ces plateformes. Nous ne sommes pas opérateur de jeux, n\'acceptons aucun dépôt et ne proposons aucun jeu.'
    ]
  },
  {
    id: 'campagnes',
    title: 'Identifiants de campagne sur les liens sortants',
    blocks: [
      'Lorsque vous arrivez ici depuis une annonce, la régie publicitaire accroche un identifiant de campagne à l\'adresse de la page. Nous le conservons dans votre navigateur et le reportons sur le lien sortant afin que la mise en relation soit correctement attribuée.',
      'L\'identifiant en question est msclkid (Microsoft Advertising / Bing Ads). Il ne renferme ni votre nom, ni votre adresse électronique.',
      'Cette conservation n\'intervient qu\'une fois les cookies de mesure acceptés. Le détail figure dans notre politique de données personnelles.'
    ]
  },
  {
    id: 'limites',
    title: 'Ce que nous ne faisons pas',
    blocks: [
      { list: [
        'Nous ne promettons aucun gain : les jeux d\'argent comportent un risque de perte.',
        'Nous ne communiquons aux opérateurs ni votre identité, ni vos coordonnées, ni la moindre donnée de compte.',
        'Nous ne diffusons aucun texte rédigé ou relu par un opérateur.',
        'Nous ne nous adressons jamais aux personnes de moins de 18 ans.'
      ] }
    ]
  },
  {
    id: 'question',
    title: 'Une question sur cette page',
    blocks: [
      `Pour toute interrogation touchant à nos accords commerciaux, ou pour nous signaler une information erronée, écrivez à ${site.email}. Les erreurs remontées sont rectifiées dans les meilleurs délais.`
    ]
  }
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="Transparence"
      title="Notre divulgation d'affiliation"
      :lead="description"
      :updated="site.updated"
    />
    <LegalDoc :sections="sections" />
  </div>
</template>
