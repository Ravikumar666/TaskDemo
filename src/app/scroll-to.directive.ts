import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appScrollTo]'
})
export class ScrollToDirective {

  @Input() scrollToId: string = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.scrollToId) {
      const element = document.getElementById(this.scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

}
