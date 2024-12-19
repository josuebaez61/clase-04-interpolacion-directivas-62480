import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]',
  standalone: false,
})
export class ResaltadoDirective {
  constructor(private elementRef: ElementRef) {
    console.log(elementRef);

    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }
}
