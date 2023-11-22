import { Component, OnInit } from '@angular/core';
import { CommentService } from '../shared/services/comment.service';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/shared/interfaces/comment.interface'

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  public comments$: Observable<Comment[] | null> = this.commentService.comments$;

  constructor(private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.commentService.fetchComments().subscribe();
  }

}
