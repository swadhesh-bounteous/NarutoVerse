import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'villages',
    loadChildren: () =>
      import('./pages/villages/villages.module').then((m) => m.VillagesModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'clans',
    loadChildren: () =>
      import('./pages/clans/clans.module').then((m) => m.ClansModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('./pages/characters/characters.module').then(
        (m) => m.CharactersModule,
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register-page/register-page.module').then(
        (m) => m.RegisterPageModule,
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login-page/login-page.module').then(
        (m) => m.LoginPageModule,
      ),
  },
  {
    path: 'character/:id',
    loadChildren: () =>
      import('./pages/character-details/character-details.module').then(
        (m) => m.CharacterDetailsModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableViewTransitions: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
