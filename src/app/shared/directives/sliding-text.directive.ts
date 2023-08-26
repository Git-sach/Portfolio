import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSlidingText]'
})
export class SlidingTextDirective {

  constructor( private titleElement: ElementRef<HTMLHeadingElement>) { }

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    const elementPositionRelativeToViewport: number = -this.titleElement!.nativeElement.getBoundingClientRect().top;
    const ratioTranslateRelativeToViewport: number = .03;

    this.titleElement!.nativeElement
    .style.transform = `translateX(${elementPositionRelativeToViewport*ratioTranslateRelativeToViewport}%)`;
  }

}
