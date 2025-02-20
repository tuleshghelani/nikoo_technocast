import { Component, OnInit } from '@angular/core';
import { BannerComponent } from '../../components/shared/banner/banner.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  counters:any = {
    years: { start: 0, end: 20, current: 0 },
    clients: { start: 0, end: 500, current: 0 },
    projects: { start: 0, end: 1000, current: 0 }
  };

  ngOnInit() {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });

    // Start counter animation when element is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounters();
          observer.disconnect(); // Stop observing once animation starts
        }
      });
    });

    // Observe the stats section
    const statsElement = document.querySelector('.stats-row');
    if (statsElement) {
      observer.observe(statsElement);
    }
  }

  private animateCounters() {
    const duration = 2000; // 2 seconds
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
          counter.current = counter.end; // Ensure we end at exact number
          clearInterval(timer);
        }
      }, interval);
    });
  }
}
