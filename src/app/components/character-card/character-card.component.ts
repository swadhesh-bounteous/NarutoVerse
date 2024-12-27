import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Character } from '../../models/character_types';

@Component({
  selector: 'app-character-card',
  standalone: false,

  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterCardComponent {
  @Input() character!: Character;
}
