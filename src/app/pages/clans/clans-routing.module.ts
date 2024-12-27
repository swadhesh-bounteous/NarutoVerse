import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClansComponent } from './clans.component';

const routes: Routes = [
  {
    path: '',
    component: ClansComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClansRoutingModule {}
