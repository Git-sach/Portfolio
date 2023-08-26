import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';
import { ExperienceWithStyle } from 'src/app/shared/interfaces/experience.interface';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
  animations: [
    trigger('resum', [
      state('hidden', style({
        height:'0px',
        transform: 'translateY(20px)',
        opacity: 0,
        marginBottom: '0px',
        marginTop: '0px'
      })),
      state('displayed', style({
        height:'*',
        transform: 'translateY(0px)',
        opacity: 1,
        marginBottom: '20px',
        marginTop: '15px'
      })),
      transition('hidden => displayed', [
        group([
          animate(150, style({
            height:'*',
            marginBottom: '20px',
            marginTop: '15px'
          })),
          animate(380, style({
            transform: 'translateY(0px)',
            opacity: 1
          }))
        ])
      ]
      ),
      transition('displayed => hidden', [
        group([
          animate(150, style({
            transform: 'translateY(20px)',
            opacity: 0
          })),
          animate(380, style({
            height:'0px',
            marginBottom: '0px',
            marginTop: '0px'
          }))
        ])
      ])
    ]),

    trigger('agile', [
      state('hidden', style({
        height:'0px',
        marginBottom: '0px',
        transform: 'translateY(20px)'
      })),
      state('displayed', style({
        height:'*',
        marginBottom: '15px',
        transform: 'translateY(0px)'
      })),
      transition('hidden => displayed', [
        group([
          animate(150, style({
            height:'*',
            marginBottom: '15px'
          })),
          animate(430, style({
            transform: 'translateY(0px)',
            opacity: 1
          }))
        ])
      ]
      ),
      transition('displayed => hidden', [
        group([
          animate(150, style({
            transform: 'translateY(20px)',
            opacity: 0
          })),
          animate(430, style({
            height:'0px',
            marginBottom: '0px'
          }))
        ])
      ])
    ]),

    trigger('keyWord', [
      state('hidden', style({
        height:'0px',
        transform: 'translateY(20px)',
        opacity: 0,
      })),
      state('displayed', style({
        height:'*',
        transform: 'translateY(0px)',
        opacity: 1,
      })),
      transition('hidden => displayed', [
        group([
          animate(150, style({
            height:'*',
          })),
          animate(470, style({
            transform: 'translateY(0px)',
            opacity: 1
          }))
        ])
      ]),
      transition('displayed => hidden', [
        group([
          animate(470, style({
            height:'0px'
          })),
          animate(150, style({
            transform: 'translateY(20px)',
            opacity: 0
          }))
        ])
      ])
    ]),

    trigger('ongletBack', [
      state('hidden', style({
        height: '30px',
      })),
      state('displayed', style({
        height: '100px',
      })),
      transition('hidden <=> displayed', animate('.3s ease-out'))
    ]),
    trigger('ongletFront', [
      state('hidden', style({
        height:'40px',
      })),
      state('displayed', style({
        height:'105px',
      })),
      transition('hidden <=> displayed', animate('.3s ease-out'))
    ]),

    trigger('imgRight', [
      state('hidden', style({
        width: '0%',
      })),
      state('between', style({
        width: '10%',
      })),
      state('displayed', style({
        width: '100%',
      })),
      transition('hidden <=> between', animate('.05s ease-out')),
      transition('displayed <=> between', animate('.05s ease-out'))
    ]),
    trigger('imgLeft', [
      state('hidden', style({
        width: '0%',
      })),
      state('between', style({
        width: '90%',
      })),
      state('displayed', style({
        width: '100%',
      })),
      transition('hidden <=> between', animate('.05s ease-out')),
      transition('displayed <=> between', animate('.05s ease-out'))
    ]),
  ]
})
export class ExperiencesComponent {

  public imgLeft: string|null = null;
  public imgLeftStage: string = 'displayed'

  public imgRight: string|null = null;
  public imgRightStage: string = 'hidden'
  public rightImageLoad: string|null = null;

  public animationBlocked: boolean = false;

  public title: string = 'Experiences';
  public subTitle: string = 'Voici une synthèse des expériences professionnelles a travers les quelles j’ai pu développer mon expertise tant sur l’aspect définition des besoins que sur la mise en place des solution pour y répondre.';
  public experiences: ExperienceWithStyle[] = [
    {
      title: 'Developpeur Web',
      companyLogo: 'logoAbylsen.svg',
      companyName: 'ABYLSEN',
      dateStart: new Date('2020/05/04'),
      dateEnd: new Date(),
      resum: `Collaboration avec une équipe de consultant sur un projet  pour le développement d’une application destiné a permettre a EDF de réaliser et diffuser des prévisions météorologiques.
      La partie de l’application sur laquelle je suis intervenu devait permettre une visualisation et un paramétrage des lien existant entre les bassins hydrologiques installées en France.`,
      agile: true,
      keyWords: ['Angular', 'TypeScript', 'Java'],
      style: {
        img: 'imgAMOA.png',
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

  public experienceClick(index: number): void {
    if (!this.experiences[index].style.isOpen) {
      this.experiences.forEach(experience => experience.style.isOpen = false);

      this.sideImgDisplay('right');

      this.animationBlocked = true;
      setTimeout(() => {
        this.imgLeft = this.experiences[index].style.img;
        this.sideImgDisplay('left');
        this.animationBlocked = false;
      }, 50);
    } else {
      this.imgRight = this.experiences[index].style.img;
      this.imgLeft = null;
      this.sideImgDisplay('right');
      setTimeout(() => {
        this.sideImgDisplay('both');
      }, 50);
    }
    this.experiences[index].style.isOpen = !this.experiences[index].style.isOpen;


    // TODO: inverser les images a la fin de l'annimation
    // faire en sorte que le tableau ce sentre sur l'onglet ouvert (comme le site avenirgrowth)
    // retirer le trait qui dépasse en haut et a droite de la bare de gauche
    // essayer de faire la transition d'image en digonale ?
    // faire un hover sur l'ombre de l'experience
  }

  public experienceHover(index: number): void {
    if (!this.experiences[index].style.isOpen) {
      if(!this.animationBlocked) {
        this.imgRight = this.experiences[index].style.img;
        if (this.imgRight === this.rightImageLoad) {
          this.sideImgDisplay('both');
        }
      } else {
        setTimeout(() => {
          this.imgRight = this.experiences[index].style.img;
          if (this.imgRight === this.rightImageLoad) {
            this.sideImgDisplay('both');
          }
        }, 50)
      }
    }
  }

  public experienceHoverLeave(index: number): void {
    if (!this.animationBlocked) {
      this.sideImgDisplay('left');
      if (!this.experiences[index].style.isOpen) {
        this.animationBlocked = true
        setTimeout(() => {
          this.animationBlocked = false;
        }, (50))
      }
    }
  }

  private sideImgDisplay( side: 'right'|'left'|'both' ) {
    switch(side) {
      case 'left': {
        this.imgLeftStage = 'displayed';
        this.imgRightStage = 'hidden';
        break;
      }
      case 'both': {
        this.imgLeftStage = 'between';
        this.imgRightStage = 'between';
        break;
      }
      case 'right': {
        this.imgLeftStage = 'hidden';
        this.imgRightStage = 'displayed';
        break;
      }
    }
  }

  public handleRightImageLoad(img: string) {
    this.rightImageLoad = img;
    this.sideImgDisplay('both');
  }
}
