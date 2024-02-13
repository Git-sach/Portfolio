import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollFadeInAnimation]',
})
export class ScrollFadeInAnimationDirective {
  private effectAchieved = false;

  constructor(private Element: ElementRef<HTMLDivElement>) {
    this.Element?.nativeElement.classList.add('initial_fade_in_animation');
    this.onScroll();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const windeowHeight = window.innerHeight;
    const offsetViewportBottom = windeowHeight * 0.2;

    const topElement = this.Element?.nativeElement.getBoundingClientRect().top;

    if (
      topElement < windeowHeight - offsetViewportBottom &&
      !this.effectAchieved
    ) {
      this.Element?.nativeElement.classList.add('fade_in_animation');
      this.effectAchieved = true;
    }
  }
}
