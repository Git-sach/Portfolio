import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css'],
})
export class StackComponent {
  @ViewChild('myElement') myElement?: ElementRef;

  //mettre un delay pour pas le faire trop souvant
  @HostListener('window:scroll', [])
  onScroll() {
    console.log(this.myElement?.nativeElement.getBoundingClientRect());
  }
}
