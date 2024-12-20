import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VillagesRoutingModule } from './villages-routing.module';
import { VillagesComponent } from './villages.component';
import { provideHttpClient } from '@angular/common/http';
import { VillageCardComponent } from '../../components/village-card/village-card.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkAccordionModule } from '@angular/cdk/accordion';


@NgModule({
  declarations: [
    VillagesComponent,
    VillageCardComponent
  ],
  imports: [
    CommonModule,
    VillagesRoutingModule,
    MatExpansionModule, 
    CdkAccordionModule
  ],
  providers: [provideHttpClient()],
  exports: [
    VillagesComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class VillagesModule { }
