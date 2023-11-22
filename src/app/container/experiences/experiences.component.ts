import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';
import { experiences } from './experiences';

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
        height: '40px',
      })),
      state('displayed', style({
        height: '140px',
      })),
      transition('hidden <=> displayed', animate('.3s ease-out'))
    ]),
    trigger('ongletFront', [
      state('hidden', style({
        height:'60px',
      })),
      state('displayed', style({
        height:'150px',
      })),
      transition('hidden <=> displayed', animate('.3s ease-out'))
    ]),

    trigger('imgRight', [
      state('hidden', style({
        width: '0%',
      })),
      state('displayed', style({
        width: '100%',
      })),
      transition('hidden => displayed', animate('.3s ease-out')),
      transition('displayed => hidden', animate('0s')),
    ]),
    trigger('imgLeft', [
      state('hidden', style({
        width: '0%',
      })),
      state('displayed', style({
        width: '100%',
      })),
      transition('hidden => displayed', animate('0s')),
      transition('displayed => hidden', animate('.3s ease-out')),
    ]),
  ]
})
export class ExperiencesComponent {

  @ViewChildren('ongletBack') ongletBack?: QueryList<ElementRef>;
  @ViewChildren('crossMore') crossMore?: QueryList<ElementRef>;

  public imgLeft: string|null = null;
  public imgLeftStage: string = 'hidden';

  public imgRight: string|null = null;
  public imgRightStage: string = 'hidden';
  public rightImageLoad: string|null = null;

  public animationBlocked: boolean = false;

  public title: string = 'Experiences';
  public subTitle: string = 'Voici une synthèse des expériences professionnelles à travers lesquelles j’ai pu développer mon expertise tant sur l’aspect définition des besoins que sur la mise en place de solutions pour y répondre.';
  public experiences = experiences;

  public experienceClick(index: number): void {
    if (!this.experiences[index].props.style.isOpen) {
      this.experiences.forEach(experience => experience.props.style.isOpen = false);

        this.animationBlocked = true;
        this.imgRightStage = 'displayed';

        setTimeout(() => {
          this.imgLeft = this.imgRight
          this.imgLeftStage = 'displayed';
          this.imgRightStage = 'hidden';
          this.animationBlocked = false;
        }, 300);

    } else {
      this.imgLeftStage = 'hidden';
      //cas du double click sur une ligne
      setTimeout(() => {
        this.imgLeftStage = 'hidden';
      }, 300);
    }
    this.experiences[index].props.style.isOpen = !this.experiences[index].props.style.isOpen;


    // TODO: inverser les images a la fin de l'annimation
    // faire en sorte que le tableau ce sentre sur l'onglet ouvert (comme le site avenirgrowth)
    // retirer le trait qui dépasse en haut et a droite de la bare de gauche
    // essayer de faire la transition d'image en digonale ?
    // faire un hover sur l'ombre de l'experience
  }

  public experienceHover(index: number): void {
    if (!this.experiences[index].props.style.isOpen && !this.animationBlocked) {
      this.imgRight = this.experiences[index].props.style.img;
    }
    this.ongletBack!.get(index)!.nativeElement.classList.add('hoverback');
    this.crossMore!.get(index)!.nativeElement.classList.add('hoverMore');
  }

  public experienceLeav (index: number): void {
    this.ongletBack!.get(index)!.nativeElement.classList.remove('hoverback');
    this.crossMore!.get(index)!.nativeElement.classList.remove('hoverMore');
  }

  public handleRightImageLoad(img: string) {
    this.rightImageLoad = img;
  }
}
