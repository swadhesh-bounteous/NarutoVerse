import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClanCardComponent } from './components/clan-card/clan-card.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { TailedBeastCardComponent } from './components/tailed-beast-card/tailed-beast-card.component';
import { HeroCarouselComponent } from './components/hero-carousel/hero-carousel.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CommonModule } from '@angular/common';
import { FilterVillagesPipe } from './pipes/filter-villages.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClanCardComponent,
    CharacterCardComponent,
    TailedBeastCardComponent,
    HeroCarouselComponent,
    NavbarComponent,
    FilterVillagesPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [provideHttpClient(), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule {}
