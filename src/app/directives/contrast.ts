import { computed, Directive, effect, ElementRef, HostBinding, inject } from '@angular/core';
import { UtilityService } from '../services/utility-service';
function hexToRgb(hex: string) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}


@Directive({
  selector: '[contrast]',
})
export class Contrast {


  constructor() {
    effect(() => {
      const rgb = hexToRgb(this.utilityService.bodyColor())
      const Y = (0.2126 * rgb!.r + 0.7152 * rgb!.g + 0.0722 * rgb!.b) / 255
      if (Y > 0.4 && Y < 0.6) {
        if (Y > 0.4 && Y < 0.5)
          this.textColor = 'white'
        else if (Y >= 0.5 && Y < 0.6) {
          this.textColor = 'black'
        }
      } else {
        this.textColor = `rgb(${255 - rgb!.r}, ${255 - rgb!.g}, ${255 - rgb!.b})`
      }
    })
  }


  private utilityService = inject(UtilityService)

  @HostBinding('style.color') textColor = "black"

}
