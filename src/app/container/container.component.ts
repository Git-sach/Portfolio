import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/shared/interfaces/comment.interface';
import { CommentService } from '../shared/services/comment.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  public commentService = inject(CommentService);

  public comments$: Observable<Comment[] | null> =
    this.commentService.comments$;

  ngOnInit(): void {
    this.commentService.fetchComments().subscribe();
  }
}
