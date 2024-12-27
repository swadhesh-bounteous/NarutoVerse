import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClansRoutingModule } from './clans-routing.module';
import { ClansComponent } from './clans.component';
import { SharedModule } from '../../shared/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ClanCardComponent } from '../../components/clan-card/clan-card.component';
import { FilterClansPipe } from '../../pipes/filter-clans.pipe';
import { provideHttpClient } from '@angular/common/http';
import { MatTreeModule } from '@angular/material/tree';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ClansComponent, ClanCardComponent, FilterClansPipe],
  imports: [
    CommonModule,
    ClansRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
  ],

  providers: [provideHttpClient()],
  exports: [ClansComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ClansModule {}
