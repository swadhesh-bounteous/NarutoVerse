import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VillagesRoutingModule } from './villages-routing.module';
import { VillagesComponent } from './villages.component';
import { provideHttpClient } from '@angular/common/http';
import { VillageCardComponent } from '../../components/village-card/village-card.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterVillagesPipe } from '../../pipes/filter-villages.pipe';
import { MatInputModule } from '@angular/material/input'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SharedModule } from '../../shared/shared/shared.module';

@NgModule({
  declarations: [
    VillagesComponent,
    VillageCardComponent,
    FilterVillagesPipe
  ],
  imports: [
    CommonModule,
    VillagesRoutingModule,
    MatExpansionModule, 
    CdkAccordionModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule, 
    MatProgressSpinnerModule, ReactiveFormsModule, SharedModule
  ],
  providers: [provideHttpClient()],
  exports: [
    VillagesComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class VillagesModule { }
