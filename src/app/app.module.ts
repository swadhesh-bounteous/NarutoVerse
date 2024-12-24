import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClanCardComponent } from './components/clan-card/clan-card.component';
import { TailedBeastCardComponent } from './components/tailed-beast-card/tailed-beast-card.component';
import { HeroCarouselComponent } from './components/hero-carousel/hero-carousel.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NavHovUnderlineDirective } from './directives/nav-hov-underline.directive';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { charactersReducer } from './state/characters.reducer';
import { CharactersEffects } from './state/characters.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    ClanCardComponent,
    TailedBeastCardComponent,
    HeroCarouselComponent,
    NavbarComponent,
    NavHovUnderlineDirective
  ],
  imports: [BrowserModule, AppRoutingModule, NgOptimizedImage, CommonModule, StoreModule.forRoot({ characters: charactersReducer }), // Register reducer here
    EffectsModule.forRoot([CharactersEffects]), StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })],
  providers: [provideHttpClient(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
  exports:[NavHovUnderlineDirective]
})
export class AppModule {}
