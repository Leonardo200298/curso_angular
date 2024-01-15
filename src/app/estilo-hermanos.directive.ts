import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEstiloHermanos]'
})
export class EstiloHermanosDirective {

  constructor(private element: ElementRef) { 

    this.element.nativeElement.style.backgroundColor = 'green';
    this.element.nativeElement.style.color = 'white';
  }

}
