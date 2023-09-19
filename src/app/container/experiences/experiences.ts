import { ExperienceWithStyle } from "src/app/shared/interfaces/experience.interface";

export const experiences: ExperienceWithStyle[] = [
  {
    title: 'Developpeur Web',
    companyLogo: 'logoAbylsen.svg',
    companyName: 'ABYLSEN',
    dateStart: new Date('2020/05/04'),
    dateEnd: new Date(),
    resum: `Collaboration avec une équipe de consultant sur un projet  pour le développement d’une application destiné a permettre a EDF de réaliser et diffuser des prévisions météorologiques.
    😆
La partie de l’application sur laquelle je suis intervenu devait permettre une visualisation et un paramétrage des lien existant entre les bassins hydrologiques installées en France.`,
    agile: true,
    keyWords: ['Angular', 'TypeScript', 'Java'],
    style: {
      img: 'imgAMOA.png',
      isOpen: false
    }
  },
  {
  title: `Assistant a maitrise d'ouvrage`,
  companyLogo: 'logoAbylsen.svg',
  companyName: 'ABYLSEN',
  dateStart: new Date('2020/05/04'),
  dateEnd: new Date(),
  resum: `Collaboration avec une équipe de consultant sur un projet  pour le développement d’une application destiné a permettre a EDF de réaliser et diffuser des prévisions météorologiques.
  La partie de l’application sur laquelle je suis intervenu devait permettre une visualisation et un paramétrage des lien existant entre les bassins hydrologiques installées en France.`,
  agile: false,
  keyWords: ['Angular', 'TypeScript', 'Java'],
  style: {
      img: 'imgDev1.png',
      isOpen: false
    }
  },
  {
   title: 'Developpeur Web',
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
