import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private http = inject(HttpClient);

  readonly baseUrl = 'https://blogapi.adriencheynet.fr';

  getPosts(): Observable<Post[]> {
    return this.http.get<any[]>(`${this.baseUrl}/posts`);
  }
}
