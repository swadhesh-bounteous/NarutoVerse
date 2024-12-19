import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './layouts/footer/footer.component';
import { ClanCardComponent } from './components/clan-card/clan-card.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { VillageCardComponent } from './components/village-card/village-card.component';
import { TailedBeastCardComponent } from './components/tailed-beast-card/tailed-beast-card.component';
import { HeroCarouselComponent } from './components/hero-carousel/hero-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ClanCardComponent,
    CharacterCardComponent,
    VillageCardComponent,
    TailedBeastCardComponent,
    HeroCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
