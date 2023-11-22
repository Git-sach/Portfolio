import { ViewChild, Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, filter } from 'rxjs';
import { CommentService } from '../../../shared/services/comment.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-testimonials-form',
  templateUrl: './testimonials-form.component.html',
  styleUrls: ['./testimonials-form.component.css']
})
export class TestimonialsFormComponent implements OnInit, OnDestroy{

  @ViewChild('confirmCloseDialog') confirmCloseDialog!: TemplateRef<any>;
  private confirmCloseDialogRef!: MatDialogRef<any>;
  private noteStatus: boolean[] = [true, false, false, false, false];

  public showErrorsForm: boolean = false;

  public form: FormGroup = this.fb.group({
    first_name: ['', Validators.required],
    last_name: [''],
    company_name: [''],
    content: ['', [Validators.required, Validators.maxLength(230)]],
    note: this.fb.array(this.noteStatus.map((value) => {
      return this.fb.control(value)
    }))
  });

  private noteFormSubscripton?: Subscription;

  constructor(
    public dialogRef: MatDialogRef<TestimonialsFormComponent>,
    public fb: FormBuilder,
    public dialogCloseConfirm: MatDialog,
    private commentService: CommentService,
    private notificationService: NotificationService){
  }

  ngOnInit(): void {

    document.body.classList.add("noScrollBack");
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
      this.confirmCloseDialogRef = this.dialogCloseConfirm.open(this.confirmCloseDialog, {
        maxWidth: '95vw'
      });
    });
  }

  get note() {
    return this.form.get('note') as FormArray;
  }

  submitComment() {

    if (this.form.status === "VALID") {
      // refacto dans un abstract ? qui gérer les notes
      this.form.value.note = this.form.value.note.reduce((count: number, currentValue: boolean) => {
        if (currentValue === true) {
          return count + 1;
        }
        return count;
      }, 0);

      this.commentService.addComment(this.form.value).subscribe({
        next: () => {
          this.closeAllDialog();
        },
        complete: () => {
          this.notificationService.success('Merci 😀 Votre commentaire a bien été enregistré !');
        }
      });
    } else {
      this.showErrorsForm = true;
      //amélioration: ajouter les classes ng-invalid aux élements qui sont invalide pour avoir le border red
    }
  }

  closeDialogConfirmClose() {
    this.confirmCloseDialogRef.close();
  }

  closeDialog() {
    this.confirmCloseDialogRef = this.dialogCloseConfirm.open(this.confirmCloseDialog, {
      maxWidth: '95vw'
    });
  }


  closeAllDialog() {
    this.dialogRef.close();
    this.confirmCloseDialogRef ? this.confirmCloseDialogRef.close() : null;
    document.body.classList.remove("noScrollBack");
  }

  ngOnDestroy(): void {
    this.noteFormSubscripton?.unsubscribe();
  }
}

