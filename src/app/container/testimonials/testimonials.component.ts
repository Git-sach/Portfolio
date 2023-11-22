import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TestimonialsFormComponent } from './testimonials-form/testimonials-form.component';
import { Comment } from 'src/app/shared/interfaces/comment.interface';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {

  @Input() public comments: Comment[] | null = null;

  public title: string = 'Témoignage';
  public subTitle: string = 'Ce que les personnes disent à propos de mon travail';

  constructor(public dialog: MatDialog) {
  }

  public getNoteElementsClasses(note: number): string[] {
    let notes: string[] = ['noteElement', 'noteElement', 'noteElement', 'noteElement', 'noteElement']
    for(let i=0; i<note; i++) {
      notes[i] += ' checked'
    }
    return notes
  }

  openDialog(): void {
    this.dialog.open(TestimonialsFormComponent, {
      maxWidth: '95vw',
      ariaModal: true,
      panelClass: 'custom-dialog-container',
    });
  }

}
