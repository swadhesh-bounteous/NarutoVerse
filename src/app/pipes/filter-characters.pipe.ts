import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../models/character_types';

@Pipe({
  name: 'filterCharacters',
  standalone: false
})
export class FilterCharactersPipe implements PipeTransform {

  transform(characters: Character[], filterText: string): Character[] {
    if(!characters || !filterText){
      return characters;
    }
    return characters.filter((character)=> character.name.toLowerCase().includes(filterText.toLowerCase()))
  }

}
