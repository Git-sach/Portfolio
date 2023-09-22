import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Comment } from 'src/app/shared/interfaces/comment.interface'
import { TestimonialsFormComponent } from './testimonials-form/testimonials-form.component';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit{

  public title: string = 'Témoignage';
  public subTitle: string = 'Ce que les personnes disent a propos de mon travail';

  public comments: Comment[] = [
    {
      firstName: 'Jean',
      lastName: 'Dupon',
      company: 'Google',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Has been the industry's standard dummy text ever since the 1500s",
      date: undefined,
      note: 5
    },
    {
      firstName: 'Jean',
      lastName: 'Dupon',
      company: 'Google',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Has been the industry's standard dummy text ever since the 1500s",
      date: undefined,
      note: 0
    },
    {
      firstName: 'Jean',
      lastName: 'Dupon',
      company: 'Google',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Has been the industry's standard dummy text ever since the 1500s",
      date: undefined,
      note: 3
    }
  ]

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
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
      panelClass: 'custom-dialog-container'
    });
  }

}
