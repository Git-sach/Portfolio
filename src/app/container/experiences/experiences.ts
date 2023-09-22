import { ExperienceWithStyle } from "src/app/shared/interfaces/experience.interface";

export const experiences: ExperienceWithStyle[] = [
  {
    title: 'Developpeur Web ▪️ EDF',
    companyLogo: 'logoAbylsen.svg',
    companyName: 'ABYLSEN',
    dateStart: new Date('2020/05/04'),
    dateEnd: new Date(),
    resum: `Collaboration avec une équipe de consultant sur un projet  pour le développement d’une application destiné a permettre a EDF de réaliser et diffuser des prévisions météorologiques.

La partie de l’application sur laquelle je suis intervenu devait permettre une visualisation et un paramétrage (sous fomes de graphiques, courbes et tableaux) des lien existant entre les bassins hydrologiques installées en France.`,
    agile: true,
    keyWords: ['Angular', 'TypeScript', 'Java', 'EDF'],
    style: {
      img: 'imgAMOA.png',
      isOpen: false
    }
  },
  {
  title: `Assistant a maitrise d'ouvrage ▪️ EDF`,
  companyLogo: 'logoAbylsen.svg',
  companyName: 'ABYLSEN',
  dateStart: new Date('2020/05/04'),
  dateEnd: new Date(),
  resum: `Définition d'axes d'évolution pour une application destiné a permettre à EDF, de réaliser et diffuser des prévisions météorologiques.

  Mon travail sur ce poste consitait à définir les futures évolutions, étudier la faisabilité des solutions fonctionnelles, analyser les dysfonctionnements de l'aplication et enfin, contrôler et suivre la réalisation des cibles.

  J'ai notement mis en place des campagnes de tests automotiques réalisant des tests de non régéressions sur les APIs`,
  agile: false,
  keyWords: ['SQL', 'Postman', 'RestAPI', 'EDF'],
  style: {
      img: 'imgDev1.png',
      isOpen: false
    }
  },
  {
   title: 'Developpeur Web ▪️ STMicroelectronics',
   companyLogo: 'logoAbylsen.svg',
   companyName: 'ABYLSEN',
   dateStart: new Date('2020/05/04'),
   dateEnd: new Date(),
   resum: `Collaboration avec une équipe de consultant sur un projet  pour le développement d’une application destiné a permettre a EDF de réaliser et diffuser des prévisions météorologiques.
   La partie de l’application sur laquelle je suis intervenu devait permettre une visualisation et un paramétrage des lien existant entre les bassins hydrologiques installées en France.`,
   agile: false,
   keyWords: ['Angular', 'TypeScript', 'Java'],
   style: {
      img: 'imgDev2.png',
      isOpen: false
    }
  }
]
