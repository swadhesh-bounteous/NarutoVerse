import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Clan } from '../../models/clan_types';

@Component({
  selector: 'app-clan-card',
  standalone: false,

  templateUrl: './clan-card.component.html',
  styleUrl: './clan-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClanCardComponent {
  @Input() clan!: Clan;
}
