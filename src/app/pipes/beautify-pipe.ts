import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'beautify',
})
export class BeautifyPipe implements PipeTransform {
  transform(value: string): string {
    const withoutUnderscores = value.replace('_', ' ')
    const array = withoutUnderscores.split('')
    array[0] = array[0].toUpperCase()
    return array.join('').trim()
  }
}
