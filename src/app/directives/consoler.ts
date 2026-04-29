import { Directive, ElementRef, HostBinding, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appConsoler]',
})
export class Consoler {
  private element = inject(ElementRef)

  @HostListener('click') print() {
    console.log(this.element.nativeElement.textContent)
  }

  @HostBinding('style.color') color = 'red'

}
