import { trigger, state, style, animate, transition, group, sequence } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Project } from 'src/app/shared/interfaces/project.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [
    trigger('content', [
      state('hiddenToLeft', style({
        transform: 'translate(-100px, 0)',
        opacity: 0
      })),
      state('hiddenToRight', style({
        transform: 'translate(100px, 0)',
        opacity: 0
      })),
      transition('displayedToRight => hiddenToLeft', animate('.15s ease-out')),
      transition('displayedToLeft => hiddenToLeft', animate('.15s ease-out')),
      transition('displayedToRight => hiddenToRight', animate('.15s ease-out')),
      transition('displayedToLeft => hiddenToRight', animate('.15s ease-out')),
      transition('hiddenToLeft => displayedToRight', [
        sequence([
          animate(1, style({
            transform: 'translate(100px, 0)',
          })),
          animate(150, style({
            transform: 'translate(0, 0)',
            opacity: 1
          }))
        ])
      ]),
      transition('hiddenToRight => displayedToLeft', [
        sequence([
          animate(1, style({
            transform: 'translate(-100px, 0)',
          })),
          animate(150, style({
            transform: 'translate(0, 0)',
            opacity: 1
          }))
        ])
      ])
    ])
  ],
  host: {
    '(window:resize)': 'onResize()'
  }
})
export class PortfolioComponent implements AfterViewInit, OnInit{

  @ViewChildren('point') points: QueryList<any> | undefined;

  public isSmallScreen: boolean = false;

  public title: string = 'Portfolio';
  public subTitle: string = 'Découvrez quelque un de mes derniers projets réalisé sur mon temps libre.';

  public selectedProject: number = 0;

  public projects: Project[] = [
    {
      title: 'Geoquizz',
      resum: `Application web sous forme de jeux ou le but est de trouver le nom des département Français le plus rapidement possible. Un système de score permet de perfectionner sont temps et de réaliser des records de rapidité tout en apprenant les départements Français.

      GeoQuizz est une application essentiellement Front-end qui avait pour but de recodé (a ma sauce) un concept qui m’avait plu, en me permettant de perfectionner mes connaissance en Angular.`,
      keyWords: ['Angular', 'TypeSript', 'NodeJs'],
      sources: {
      },
      images: {
        imgLeft: 'geoquizzImgLeft.png',
        imgBetween: 'geoquizzImgCenter.png',
        imgRight: 'geoquizzImgRight.png',
      }
    },
    {
      title: 'Portfolio',
      resum: `Portfolio que j’ai crée il y a quelque temps pour présenter mes compétences, mes expériences et mes projet. Application qui avait pour intérêt de posséder un back-end réalisé avec node.js qui rendait possible l’administration du site et mettait en place un lien fort entre expériences, compétences et projets.

      Cependant, étant un éternel insatisfait, vous ne naviguez pas en ce moment sur ce site mais sur un portfolio qui cible mieux les éléments de mon profil que je souhaite aujourd’hui exposer.`,
      keyWords: ['Angular', 'TypeSript', 'NodeJs'],
      sources: {
      },
      images: {
        imgLeft: 'portfolioImgLeft.png',
        imgBetween: 'portfolioImgCenter.png',
        imgRight: 'portfolioImgRight.png',
      }
    },
    {
      title: 'Projet 3',
      resum: `Application web sous forme de jeux ou le but est de trouver le nom des département Français le plus rapidement possible. Un système de score permet de perfectionner sont temps et de réaliser des records de rapidité tout en apprenant les départements Français.
      GeoQuizz est une application essentiellement Front-end qui avait pour but de recodé (a ma sauce) un concept qui m’avait plu, en me permettant de perfectionner mes connaissance en Angular.`,
      keyWords: ['Angular', 'TypeSript'],
      sources: {
      },
      images: {
        imgLeft: 'geoquizzImgLeft.png',
        imgBetween: 'geoquizzImgCenter.png',
        imgRight: 'geoquizzImgRight.png',
      }
    }
  ]

  private positionFirstPoint: number = 0;
  private diffPoints: number = 0;

  public detailStateAnimation = 'displayedToRight';

  ngOnInit(): void {
    this.isSmallScreen = window.innerWidth <= 768
  }

  ngAfterViewInit(): void {
    this.calculateDiffPoint();
  }

  onResize() {
    this.calculateDiffPoint();
    this.isSmallScreen = window.innerWidth <= 768
  }

  public navClick(index: number): void {
    const oldSelectedProject: number = this.selectedProject;
    const mouve = (index - this.selectedProject)*this.diffPoints;
    this.points!.get(oldSelectedProject).nativeElement.style.transform = `translate(${mouve}px, -50%)`

    if (mouve < 0) {
      this.detailStateAnimation = 'hiddenToLeft';
    } else {
      this.detailStateAnimation = 'hiddenToRight';
    }

    setTimeout(() => {
      this.selectedProject = index;
      if (mouve < 0) {
        this.detailStateAnimation = 'displayedToRight';
      } else {
        this.detailStateAnimation = 'displayedToLeft';
      }
    }, 150);

    setTimeout(() => {
      this.displayPoint(index);
      this.points!.get(oldSelectedProject).nativeElement.style.transform = `translate(0px, -50%)`;
    }, 300);
  }

  private displayPoint(index: number): void {
    this.points!.forEach(element => {
      element.nativeElement.style.opacity = "0"
    });
    this.points!.get(index).nativeElement.style.opacity = "1";
  }

  private calculateDiffPoint(): void {
    this.positionFirstPoint = this.points?.get(0).nativeElement.getBoundingClientRect().left
    this.diffPoints = this.points?.get(1).nativeElement.getBoundingClientRect().left - this.positionFirstPoint;
  }
}
