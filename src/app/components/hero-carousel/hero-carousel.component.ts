import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

register();
@Component({
  selector: 'app-hero-carousel',
  standalone: false,
  
  templateUrl: './hero-carousel.component.html',
  styleUrl: './hero-carousel.component.scss',
})
export class HeroCarouselComponent {

}