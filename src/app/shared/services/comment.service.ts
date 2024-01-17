import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { Comment } from 'src/app/shared/interfaces/comment.interface'

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  public comments$: BehaviorSubject<Comment[] | null> = new BehaviorSubject<Comment[] | null>(null);

  constructor(private http: HttpClient) { }

  public fetchComments(): Observable<Comment[] | []> {
    return this.http.get<Comment[] | []>('https://adriencheynet.fr/api/messages').pipe(
      tap((comments: Comment[]) => {
        this.comments$.next(comments)
      })
    );
  }

  public addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>('https://adriencheynet.fr/api/messages', comment);
  }

}
