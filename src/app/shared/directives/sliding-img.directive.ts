import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSlidingImg]'
})
export class SlidingImgDirective {

  @Input() ratioX: number = 0;
  @Input() ratioY: number = 0;

  constructor( private imgElement: ElementRef<HTMLImageElement | HTMLDivElement>) { }

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {

    const elementPositionRelativeToViewport: number = -this.imgElement!.nativeElement.getBoundingClientRect().top;

    this.imgElement!.nativeElement.style.transform =
    `translate(${elementPositionRelativeToViewport*this.ratioX}%,
      ${elementPositionRelativeToViewport*this.ratioY}%)`;
  }
}
