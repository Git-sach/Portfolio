import { ExperienceImpl, ExperienceWithStyle } from "src/app/shared/interfaces/experience.interface";

export const experiences: ExperienceImpl[] = [
  new ExperienceImpl({
    title: 'Developpeur Web',
    companyLogo: 'logoAbylsen.svg',
    companyName: 'ABYLSEN',
    dateStart: new Date('2023/03/01'),
    dateEnd: new Date(),
    resum: `Développement d’une application permettant à EDF de réaliser et diffuser des prévisions météorologiques.

    La partie de l’application sur laquelle je suis intervenu devait permettre une visualisation et un paramétrage (sous forme de graphiques, courbes et tableaux) des liens existants entre les différents bassins hydrologiques installés en France.

    Enjeux :

    ▫️ développement d'une solution ergonomique pour la manipulation de données.
    ▫️ optimisation des performances de l'application
    ▫️ structure garantissant une bonne maintenabilité`,
    agile: true,
    keyWords: ['Angular', 'TypeScript', 'Java', 'EDF'],
    style: {
      img: 'imgAMOA.png',
      isOpen: true
    }
  })
  ,
  new ExperienceImpl({
    title: `Assistant à maitrise d'ouvrage`,
    companyLogo: 'logoAbylsen.svg',
    companyName: 'ABYLSEN',
    dateStart: new Date('2021/07/01'),
    dateEnd: new Date(),
    resum: `Définition d'axe d'évolution pour une application destinée à permettre à EDF, de réaliser et diffuser des prévisions météorologiques.

    Mon travail sur ce poste consistait à définir les évolutions futures, étudier la faisabilité des solutions fonctionnelles, analyser les dysfonctionnements de l'application et enfin, contrôler et suivre la réalisation des cibles.

    J'ai notamment mis en place des campagnes de tests automatiques réalisant des tests de non régressions sur les APIs

    Enjeux :

    ▫️ défintion des axes du projet à implémenter selon le besoin du client.
    ▫️ travailler à l’atteinte des objectifs.
    ▫️ analyser les dysfonctionnements de l'application
    ▫️ contrôler et suivre la réalisation des cibles fixées`,
    agile: true,
    keyWords: ['SQL', 'Postman', 'RestAPI', 'EDF'],
    style: {
        img: 'imgDev1.png',
        isOpen: false
      }
    }),
  new ExperienceImpl({
   title: 'Developpeur Web',
   companyLogo: 'logoAbylsen.svg',
   companyName: 'ABYLSEN',
   dateStart: new Date('2021/01/01'),
   dateEnd: new Date('2021/06/01'),
   resum: `Maintien et développement de l'application PCSA, outils de production de STMicroelectronics servant à l'optimisation des mappings et à la métrologie des wafers.

   Application développée en Java EE, Pro C communiquant avec une base SQL Oracle.

   Enjeux :

   ▫️ développement des évolutions apportées à l'application.
   ▫️ corrections des anomalies rencontrées via retour de tests ou utilisateur.
   ▫️ analyse technique pour les développements et chiffrages.
   `,
   agile: true,
   keyWords: ['ProC', 'JavaEE', 'Oracle SQL'],
   style: {
      img: 'imgDev2.png',
      isOpen: false
    }
  })
]
