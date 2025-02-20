<<<<<<< HEAD
import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
=======
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
>>>>>>> 6c726d8018eb80d012d973c611a8e2602f944439
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
      image: 'assets/home/casting_product_3.jpeg',
      name: 'Brake Components',
      description: 'High-quality brake system components for heavy vehicles'
    },
    {
      image: 'assets/home/casting_product_3.jpeg',
      name: 'Valve Components',
      description: 'Precision-engineered valve components for industrial applications'
    },
    {
      image: 'assets/home/casting_product_3.jpeg',
      name: 'Machine Parts',
      description: 'Custom machine parts with superior durability'
    },
    {
      image: 'assets/home/casting_product_3.jpeg',
      name: 'Compressor Components',
      description: 'Reliable components for industrial compressors'
    }
  ];
  
  infrastructure = [
    {
      image: 'assets/home/casting_product_3.jpeg',
      title: 'CNC Machine Shop',
      description: 'State-of-the-art CNC machinery for precision manufacturing'
    },
    {
      image: 'assets/home/casting_product_3.jpeg',
      title: 'Tool & Mold Design',
      description: 'Advanced design facilities for tooling and mold development'
    },
    {
      image: 'assets/home/casting_product_3.jpeg',
      title: 'Casting',
      description: 'Modern casting facilities with superior quality control'
    },
    {
      image: 'assets/home/casting_product_3.jpeg',
      title: 'Tools and Die',
      description: 'Comprehensive tool and die manufacturing capabilities'
    },
    {
      image: 'assets/home/casting_product_3.jpeg',
      title: 'General Engineering',
      description: 'Versatile engineering solutions for diverse industries'
    },
    {
      image: 'assets/home/casting_product_3.jpeg',
      title: 'Automotive',
      description: 'Specialized facilities for automotive component manufacturing'
    },
    {
      image: 'assets/home/casting_product_3.jpeg',
      title: 'Pattern Development',
      description: 'Expert pattern making for precise casting results'
    },
    {
      image: 'assets/home/casting_product_3.jpeg',
      title: 'Quality Testing',
      description: 'Advanced testing facilities ensuring product excellence'
    }
  ];

<<<<<<< HEAD
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initSwiper();
      this.initThumbnails();
    }
=======
  constructor(private router: Router) {
    this.yearsOfExperience = new Date().getFullYear() - 2005;
>>>>>>> 6c726d8018eb80d012d973c611a8e2602f944439
  }

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
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.2 }
      )
      .fromTo('.hero-image-wrapper',
        { x: 120, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 },
        "-=0.5"
      );
  }
}
