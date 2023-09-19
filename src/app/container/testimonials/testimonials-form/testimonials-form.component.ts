import { ViewChild, Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Subscription, filter } from 'rxjs';
import { DialogConfig, DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-testimonials-form',
  templateUrl: './testimonials-form.component.html',
  styleUrls: ['./testimonials-form.component.css']
})
export class TestimonialsFormComponent implements OnInit, OnDestroy{

  @ViewChild('confirmCloseDialog') confirmCloseDialog!: TemplateRef<any>;
  private confirmCloseDialogRef!: MatDialogRef<any>;

  private noteStatus: boolean[] = [true, false, false, false, false]

  public form: FormGroup = this.fb.group({
    firstName: [''],
    lastName: [''],
    company: [''],
    comment: [''],
    note: this.fb.array(this.noteStatus.map((value) => {
      return this.fb.control(value)
    }))
  });

  private noteFormSubscripton?: Subscription;

  constructor(
    public dialogRef: MatDialogRef<TestimonialsFormComponent>,
    public fb: FormBuilder,
    public dialogCloseConfirm: MatDialog){
  }

  ngOnInit(): void {
    // Utilisation de filter pour stoper l'observation le temps de mettre à jours le fomulaire
    const noteObservale$ = this.note.valueChanges.pipe(
      filter(() => !isProcessing ));

    //gérer le comportement du click sur une note
    this.noteFormSubscripton = noteObservale$.subscribe( (value) => {
      isProcessing = true;
      let indexChange = false
      for (let i = 0; i < this.noteStatus.length; i++) {
        const getInput = this.note.get(String(i));
        indexChange ? getInput?.setValue(false) : getInput?.setValue(true);
        if (this.noteStatus[i] !== value[i]) {
          indexChange = true
        }
      }
      this.noteStatus = this.note.value
      isProcessing = false;
    })
    let isProcessing = false;

    this.dialogRef.disableClose = true;
    this.dialogRef.backdropClick().subscribe(_ => {
      this.confirmCloseDialogRef = this.dialogCloseConfirm.open(this.confirmCloseDialog);
    })
  }

  get note() {
    return this.form.get('note') as FormArray;
  }

  submitComment() {
    console.log(this.form);
  }

  closeDialogConfirmClose() {
    this.confirmCloseDialogRef.close();
  }

  closeAllDialog() {
    this.dialogRef.close();
    this.confirmCloseDialogRef.close();
  }

  ngOnDestroy(): void {
    this.noteFormSubscripton?.unsubscribe();
  }
}

