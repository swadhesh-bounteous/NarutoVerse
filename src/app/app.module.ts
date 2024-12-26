import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClanCardComponent } from './components/clan-card/clan-card.component';
import { TailedBeastCardComponent } from './components/tailed-beast-card/tailed-beast-card.component';
import { HeroCarouselComponent } from './components/hero-carousel/hero-carousel.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NavHovUnderlineDirective } from './directives/nav-hov-underline.directive';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { charactersReducer } from './state/characters.reducer';
import { CharactersEffects } from './state/characters.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    ClanCardComponent,
    TailedBeastCardComponent,
    HeroCarouselComponent,
    NavbarComponent,
    NavHovUnderlineDirective,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ characters: charactersReducer }), // Register reducer here
    EffectsModule.forRoot([CharactersEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    provideHttpClient(),
    provideAnimationsAsync(),
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  exports: [NavHovUnderlineDirective],
})
export class AppModule {}
