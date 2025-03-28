import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isScrolled = false;
  isHomePage = false;
  isMobile = false;
  private routerSubscription: Subscription | null = null;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    // Check if we're on home page whenever route changes
    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isHomePage = this.router.url === '/';
      
      if (isPlatformBrowser(this.platformId)) {
        this.isMobile = window.innerWidth < 992;
        this.isScrolled = window.scrollY > 50;
        this.updateNavStyles();
      }
    });

    // Initial check for mobile view and scroll position
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth < 992;
      this.isScrolled = window.scrollY > 50;
      this.updateNavStyles();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth < 992;
      this.updateNavStyles();
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled = window.scrollY > 50;
      this.updateNavStyles();
    }
  }

  private updateNavStyles() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    
    const header = document.querySelector('.navbar');
    if (header) {
      if (this.isHomePage && !this.isScrolled) {
        header.classList.add('on-home');
        header.classList.remove('scrolled');
      } else {
        header.classList.remove('on-home');
        if (this.isScrolled) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    }
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
      this.routerSubscription = null;
    }
  }
}
