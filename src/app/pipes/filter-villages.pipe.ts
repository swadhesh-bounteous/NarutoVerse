import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterVillages',
  standalone: false
})
export class FilterVillagesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
