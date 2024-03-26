import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  public title: string = 'Blog';
  public subTitle: string =
    "Ici, nous plongeons dans l'univers captivant du développement web et démystifions les concepts essentiels de programmation dans le but de perfectionner notre art du code.";
  public posts = [
    {
      id: 1,
      title: 'Injection de dépendance Angular',
      resum: 'resum',
      content: 'content',
      coverImagePath: 'assets/change_detection.png',
      keywords: ['Angular', 'truc'],
      readTime: 30,
      date: new Date(),
    },
    {
      id: 1,
      title: '1er titre',
      resum: 'resum',
      content: 'content',
      coverImagePath: 'assets/change_detection.png',
      keywords: ['Angular', 'truc'],
      readTime: 30,
      date: new Date(),
    },
  ];
}
