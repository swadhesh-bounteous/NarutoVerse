import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { CharacterCardComponent } from '../../components/character-card/character-card.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    CharactersComponent,
    CharacterCardComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CharactersModule { }
