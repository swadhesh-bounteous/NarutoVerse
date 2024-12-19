import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TailedBeastsRoutingModule } from './tailed-beasts-routing.module';
import { TailedBeastsComponent } from './tailed-beasts.component';


@NgModule({
  declarations: [
    TailedBeastsComponent
  ],
  imports: [
    CommonModule,
    TailedBeastsRoutingModule
  ]
})
export class TailedBeastsModule { }
