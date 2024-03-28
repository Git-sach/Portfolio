import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/interfaces/post.interface';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  public blogService = inject(BlogService);

  public title: string = 'Blog';
  public posts$: Observable<Post[]> = this.blogService.getPosts();

  public subTitle: string =
    "Plongez dans l'univers du développement web avec Angular à travers les derniers articles de mon blog ! En tant que développeur passionné et adepte d'Angular, j'ai pris plaisir à partager mes connaissances et expériences pour vous guider à travers les rouages de ce puissant framework JavaScript.";

  onClickPost() {
    window.location.href = 'https://blog.adriencheynet.fr/post/4';
  }

  onClickAllPosts() {
    window.location.href = 'https://blog.adriencheynet.fr/home';
  }
}
