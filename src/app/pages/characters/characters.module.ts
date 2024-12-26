import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { CharacterCardComponent } from '../../components/character-card/character-card.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterCharactersPipe } from '../../pipes/filter-characters.pipe';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { charactersReducer } from '../../state/characters.reducer';
import { CharactersEffects } from '../../state/characters.effects';

@NgModule({
  declarations: [
    CharactersComponent,
    CharacterCardComponent,
    FilterCharactersPipe
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CharactersModule { }
