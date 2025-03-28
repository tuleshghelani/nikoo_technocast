import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { BannerComponent } from '../../components/shared/banner/banner.component';
import * as AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  counters:any = {
    years: { start: 0, end: 20, current: 0 },
    clients: { start: 0, end: 500, current: 0 },
    projects: { start: 0, end: 1000, current: 0 }
  };

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 800,
        once: true,
        offset: 100
      });
      
      this.initCounterAnimation();
    }
  }

  private initCounterAnimation() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounters();
          observer.disconnect();
        }
      });
    });
    
    setTimeout(() => {
      const statsElement = document.querySelector('.stats-row');
      if (statsElement) {
        observer.observe(statsElement);
      }
    }, 100);
  }

  private animateCounters() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    Object.keys(this.counters).forEach(key => {
      const counter = this.counters[key];
      const increment = (counter.end - counter.start) / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        counter.current = Math.round(counter.start + (increment * currentStep));

        if (currentStep === steps) {
          counter.current = counter.end;
          clearInterval(timer);
        }
      }, interval);
    });
  }
}
