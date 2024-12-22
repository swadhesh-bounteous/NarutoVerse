import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'villages', loadChildren: () => import('./pages/villages/villages.module').then(m => m.VillagesModule) },
  { path: 'characters', loadChildren: () => import('./pages/characters/characters.module').then(m => m.CharactersModule) },
  { path: 'character/:id', loadChildren: () => import('./pages/character-details/character-details.module').then(m => m.CharacterDetailsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
