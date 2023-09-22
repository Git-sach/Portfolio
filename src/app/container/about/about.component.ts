import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public title: string = `Bonjour, enchanté !`;
  public resum: string = `Je suis Adrien, développeur web indépendant spécialisé dans le Front-end.
  Après avoir accumulé une expérience significative en travaillant sur divers projets pour de grandes entreprises, j'ai choisi d'exploiter mes compétences en proposant mes services en tant qu'indépendant.

  J'aide les entreprises et particuliers à concrétiser leurs projets en ligne.
  Mon objectif est de mettre en place des application performantes, fiable et évolutifs. Ce sont autent d'engagements qui animes mes journées et vos projets.

  Je porte un grand intérer au travail minussieusement réalisé et prend un réel plaisir à découvrir de nouveaux secteurs qui me permetent de relever de nouveau défis.

  Explorez mon portflio pour découvir les projets que j'ai réalisé et n'héhistez pas à me contacter pour que l'on échanges sur la ménière dont je pourais vous aider à atteindre vos objectifs`;
}
