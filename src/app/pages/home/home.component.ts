import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import Swiper from 'swiper';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/shared/product-card/product-card.component';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  private swiper!: Swiper;
  yearsOfExperience: number;
  products = [
    {
      image: 'assets/home/sand_casting.png',
      name: 'Sand Casting Parts',
      description: 'Precision-engineered sand casting components with superior finish and dimensional accuracy'
    },
    {
      image: 'assets/home/automobile_casting.png',
      name: 'AutoMobile Casting Parts',
      description: 'High-quality automotive components meeting strict OEM specifications'
    },
    {
      image: 'assets/home/crank_shaft.png',
      name: 'Casting Crank Shafts',
      description: 'Durable and precision-machined crankshafts for optimal performance'
    },
    {
      image: 'assets/home/gearbox_housing.png',
      name: 'Casting Gearbox Housing',
      description: 'Robust gearbox housings engineered for maximum reliability'
    },
    {
      image: 'assets/home/differential_housing.png',
      name: 'Casting Differential Housing',
      description: 'Precision-engineered differential housings for smooth power transmission'
    },
    {
      image: 'assets/home/sand_valve_and_valve_body.png',
      name: 'Sand Casting Valves and Valve Body',
      description: 'High-performance valve components with excellent flow characteristics'
    },
    {
      image: 'assets/home/agricultural_casting.png',
      name: 'Agricultural Casting Parts',
      description: 'Durable agricultural components built for demanding field conditions'
    },
    {
      image: 'assets/home/earth_mover_casting.png',
      name: 'Casting Parts for Earth Movers',
      description: 'Heavy-duty components designed for extreme operational conditions'
    }
  ];
  
  infrastructure = [
    {
      image: 'assets/home/cnc_machine_shop.jpeg',
      title: 'CNC Machine Shop',
      description: 'State-of-the-art CNC machinery for precision manufacturing'
    },
    {
      image: 'assets/home/tool_and_mold_design.jpeg',
      title: 'Tool & Mold Design',
      description: 'Advanced design facilities for tooling and mold development'
    },
    {
      image: 'assets/home/casting.jpeg',
      title: 'Casting',
      description: 'Modern casting facilities with superior quality control'
    },
    {
      image: 'assets/home/tools_and_die.jpeg',
      title: 'Tools and Die',
      description: 'Comprehensive tool and die manufacturing capabilities'
    },
    {
      image: 'assets/home/general_engineering.jpeg',
      title: 'General Engineering',
      description: 'Versatile engineering solutions for diverse industries'
    },
    {
      image: 'assets/home/automotive.jpeg',
      title: 'Automotive',
      description: 'Specialized facilities for automotive component manufacturing'
    },
    {
      image: 'assets/home/pattern_development.jpeg',
      title: 'Pattern Development',
      description: 'Expert pattern making for precise casting results'
    },
    {
      image: 'assets/home/quality_testing.jpeg',
      title: 'Quality Testing',
      description: 'Advanced testing facilities ensuring product excellence'
    }
  ];

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {
    this.yearsOfExperience = new Date().getFullYear() - 2005;
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 800,
        once: true,
        offset: 100
      });
      
      setTimeout(() => {
        this.initSwiper();
      }, 0);
    }
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
