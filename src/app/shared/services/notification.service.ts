import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private readonly snackBar: MatSnackBar
  ) { }

  public success(message: string) {
    this.openNotification(message, 'success-information')
  }

  private openNotification(message: string, className: string, duration = 5000 ) {
    this.snackBar.open(message, '', {
      duration: duration,
      panelClass: [className],
      verticalPosition: 'top'
    })
  }
}
