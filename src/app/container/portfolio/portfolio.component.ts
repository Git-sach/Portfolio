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
  @ViewChildren('liMenu') liMenu: QueryList<ElementRef> | undefined;

  public isSmallScreen: boolean = false;

  public title: string = 'Portfolio';
  public subTitle: string = 'Découvrez quelque un de mes derniers projets réalisé sur mon temps libre.';

  public selectedProject: number = 0;

  public projects: Project[] = [
    {
      title: 'Geoquizz',
      resum: `Application web sous forme de jeu où le but est de trouver le nom des départements français le plus rapidement possible. Un système de score permet de perfectionner son temps et de réaliser des records de rapidité tout en apprenant les départements Français !

      GeoQuizz est une application essentiellement Front-end qui avait pour but de recoder (à ma manière) un concept qui m’a plu, en me permettant de perfectionner mes connaissances en Angular.`,
      keyWords: ['Angular', 'TypeSript', 'NodeJs'],
      sources: {
        website: 'https://multiapp.adriencheynet.fr/geoquizz',
        codeSource: 'https://github.com/Git-sach/Portfolio'
      },
      images: {
        imgLeft: 'geoquizzImgLeft.png',
        imgBetween: 'geoquizzImgCenter.png',
        imgRight: 'geoquizzImgRight.png',
      },
      blured: false
    },
    {
      title: 'Portfolio',
      resum: `Portfolio que j’ai créé il y a quelque temps pour présenter mes compétences, mes expériences et mes projets. Application qui avait pour intérêt de posséder un back-end réalisé avec node.js qui rendait possible l’administration du site et mettait en place un lien fort entre expériences, compétences et projets.

      Cependant, vous ne naviguez pas en ce moment sur ce site mais sur un portfolio qui cible mieux les éléments de mon profil que je souhaite aujourd’hui exposer.`,
      keyWords: ['Angular', 'TypeSript', 'NodeJs'],
      sources: {
        website: 'https://portfolio.adriencheynet.fr/projects',
        codeSource: 'https://github.com/Git-sach/My-Portfolio'
      },
      images: {
        imgLeft: 'portfolioImgLeft.png',
        imgBetween: 'portfolioImgCenter.png',
        imgRight: 'portfolioImgRight.png',
      },
      blured: false
    },
    {
      title: 'Bientôt ...',
      resum: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      keyWords: ['Bientôt', 'Bientôt', 'Bientôt'],
      sources: {
      },
      images: {
        imgLeft: 'soonImg.png',
        imgBetween: 'soonImg.png',
        imgRight: 'soonImg.png',
      },
      blured: true
    }
  ]

  private positionFirstPoint: number = 0;
  private diffPoints: number = 0;

  public detailStateAnimation = 'displayedToRight';

  ngOnInit(): void {
    this.isSmallScreen = window.innerWidth <= 768
  }

  ngAfterViewInit(): void {
    this.liMenu!.get(0)!.nativeElement.style.opacity = '1';
    this.liMenu!.get(0)!.nativeElement.style.fontWeight = '600';
    this.calculateDiffPoint();
  }

  onResize() {
    this.calculateDiffPoint();
    this.isSmallScreen = window.innerWidth <= 768
  }

  public navClick(index: number): void {
    const oldSelectedProject: number = this.selectedProject;
    const mouve = (index - this.selectedProject)*this.diffPoints;

    // gestion du point sous la navigation
    this.points!.get(oldSelectedProject).nativeElement.style.transform = `translate(${mouve}px, -50%)`;

    // gestion de la couleur des li du menu
    this.liMenu!.get(index)!.nativeElement.style.opacity = '1';
    this.liMenu!.get(index)!.nativeElement.style.fontWeight = '600';
    this.liMenu!.get(oldSelectedProject)!.nativeElement.style.opacity = '.8';
    this.liMenu!.get(oldSelectedProject)!.nativeElement.style.fontWeight = '400';



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

  public clickWebsite(url: string): void {
    document.location.href = url;
  }
}
