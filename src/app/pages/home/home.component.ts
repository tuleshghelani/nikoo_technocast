import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import Swiper from 'swiper';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  private swiper!: Swiper;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initSwiper();
      this.initThumbnails();
    }
  }

  private initSwiper() {
    this.swiper = new Swiper('.hero-slider', {
      modules: [Autoplay, EffectFade],
      effect: 'fade',
      loop: true,
      speed: 2000,
      autoplay: {
        delay: 2000,
        disableOnInteraction: true,
      },
    });

    // Animate content on slide change
    this.swiper.on('slideChangeTransitionStart', () => {
      this.updateThumbnails();
      this.animateContent();
    });
  }

  private initThumbnails() {
    const thumbs = document.querySelectorAll('.thumb');
    thumbs.forEach((thumb, index) => {
      thumb.addEventListener('click', () => {
        this.swiper.slideTo(index);
      });
    });
  }

  private updateThumbnails() {
    const thumbs = document.querySelectorAll('.thumb');
    thumbs.forEach((thumb, index) => {
      thumb.classList.toggle('active', index === this.swiper.realIndex);
    });
  }

  private animateContent() {
    const timeline = gsap.timeline();
    
    timeline
      .fromTo('.hero-content > *', 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.2 }
      )
      .fromTo('.hero-image-wrapper',
        { x: 120, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 },
        "-=0.5"
      );
  }
}
