import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClansRoutingModule } from './clans-routing.module';
import { ClansComponent } from './clans.component';


@NgModule({
  declarations: [
    ClansComponent
  ],
  imports: [
    CommonModule,
    ClansRoutingModule
  ]
})
export class ClansModule { }
