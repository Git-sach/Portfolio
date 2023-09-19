import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public title: string = `Bonjour, enchanté !`;
  public resum: string = `Bonjour! Je m’appelle Adrien Cheynet. Je suis développeur web full stack. J’ai passé beaucoup de temps professionel mais aussi personel a déveloper des sites web en commencement par la définition du produit et le prototypage, en passant par l’intégration du projet et en terminant par la mise en ligne de l’application.

Je possède des compétences variées dans le domaine du web principalement acquises de façon autodicdacte. Je me forme continuelement du les tendances et framworks actuel afin de proposer le meilleur lors de l’élaboration des projets sur les quel je suis amenés a travailler.

Je peux donc vous acompagner sur les différentes étapes de votre porjet web pour répondre a vos besoins.`;
}
