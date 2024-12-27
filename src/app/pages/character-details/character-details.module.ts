import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterDetailsRoutingModule } from './character-details-routing.module';
import { CharacterDetailsComponent } from './character-details.component';
import { SharedModule } from '../../shared/shared/shared.module';

@NgModule({
  declarations: [CharacterDetailsComponent],
  imports: [CommonModule, CharacterDetailsRoutingModule, SharedModule],
})
export class CharacterDetailsModule {}
