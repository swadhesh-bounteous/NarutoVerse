import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeContentComponent } from '../../components/home-content/home-content.component';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { SharedModule } from '../../shared/shared/shared.module';
import { HeroCarouselComponent } from '../../components/hero-carousel/hero-carousel.component';

@NgModule({
  declarations: [
    HomeComponent, 
    HomeContentComponent,
    FooterComponent,
    HeroCarouselComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
