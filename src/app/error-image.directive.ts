import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: 'img[appErrorImage]'
})
export class ErrorImageDirective {

  @Input() errorImage: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('error') onError() {
    this.renderer.setAttribute(this.el.nativeElement, 'src', this.errorImage);
  }

}
