import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import Swiper from 'swiper';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
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
export class HomeComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  private swiper!: Swiper;
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initSwiper();
    this.handleResize();
    this.initThumbnailNavigation();
  }

  private initSwiper(): void {
    this.swiper = new Swiper('.hero-slider', {
      modules: [Autoplay, EffectFade, Pagination],
      effect: 'fade',
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      on: {
        slideChange: () => {
          this.updateThumbnailActive();
          this.resetAnimations();
        }
      }
    });
  }

  private initThumbnailNavigation(): void {
    const thumbs = document.querySelectorAll('.thumb');
    thumbs.forEach((thumb) => {
      thumb.addEventListener('click', (e) => {
        const slideIndex = (e.currentTarget as HTMLElement).getAttribute('data-slide');
        if (slideIndex && this.swiper) {
          this.swiper.slideTo(parseInt(slideIndex));
        }
      });
    });
    
    // Set initial active state
    this.updateThumbnailActive();
  }

  private updateThumbnailActive(): void {
    if (!this.swiper) return;

    const thumbs = document.querySelectorAll('.thumb');
    thumbs.forEach((thumb, index) => {
      if (this.swiper.realIndex === parseInt(thumb.getAttribute('data-slide') || '0')) {
        thumb.classList.add('active');
      } else {
        thumb.classList.remove('active');
      }
    });
  }

  private handleResize(): void {
    fromEvent(window, 'resize')
      .pipe(
        debounceTime(250),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        if (this.swiper) {
          this.swiper.update();
        }
      });
  }

  private resetAnimations(): void {
    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach(element => {
      element.classList.remove('aos-animate');
      setTimeout(() => {
        element.classList.add('aos-animate');
      }, 10);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.swiper) {
      this.swiper.destroy();
    }
  }

  private animateContent() {
    const timeline = gsap.timeline();
    
    timeline
      .fromTo('.hero-content > *', 
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.7, 
          stagger: 0.2 
        }
      )
      .fromTo('.hero-image-wrapper',
        { x: 120, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 1 
        },
        "-=0.5"
      );
  }
}
