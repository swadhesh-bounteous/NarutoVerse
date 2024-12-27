import { Pipe, PipeTransform } from '@angular/core';
import { Clan } from '../models/clan_types';

@Pipe({
  name: 'filterClans',
  standalone: false,
})
export class FilterClansPipe implements PipeTransform {
  transform(clans: Clan[], filterText: string): Clan[] {
    if (!clans || !filterText) {
      return clans;
    }
    return clans.filter((clan) =>
      clan.name.toLowerCase().includes(filterText.toLowerCase()),
    );
  }
}
