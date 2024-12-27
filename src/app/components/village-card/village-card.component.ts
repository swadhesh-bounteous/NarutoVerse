import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Village } from '../../models/village_types';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-village-card',
  standalone: false,

  templateUrl: './village-card.component.html',
  styleUrl: './village-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VillageCardComponent {
  @Input() village!: Village;
}
