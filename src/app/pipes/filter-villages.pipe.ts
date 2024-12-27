import { Pipe, PipeTransform } from '@angular/core';
import { Village } from '../models/village_types';

@Pipe({
  name: 'filterVillages',
  standalone: false,
})
export class FilterVillagesPipe implements PipeTransform {
  transform(villages: Village[], filterText: string): Village[] {
    if (!villages || !filterText) {
      return villages;
    }
    return villages.filter((village) =>
      village.name.toLowerCase().includes(filterText.toLowerCase()),
    );
  }
}
