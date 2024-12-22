import { Component, Input } from '@angular/core';
import { Character } from '../../models/character_types';

@Component({
  selector: 'app-character-card',
  standalone: false,
  
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss'
})
export class CharacterCardComponent {
  @Input() character!: Character;
}
