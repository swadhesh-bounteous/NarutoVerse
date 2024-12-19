import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ClanCardComponent } from './components/clan-card/clan-card.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { VillageCardComponent } from './components/village-card/village-card.component';
import { TailedBeastCardComponent } from './components/tailed-beast-card/tailed-beast-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ClanCardComponent,
    CharacterCardComponent,
    VillageCardComponent,
    TailedBeastCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
