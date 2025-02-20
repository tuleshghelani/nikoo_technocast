import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isScrolled = false;
  isHomePage = false;
  isMobile:any

  constructor(private router: Router) {
    // Check if we're on home page whenever route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isHomePage = this.router.url === '/';
      this.updateNavStyles();
    });
  }
  

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = window.innerWidth < 992;
    this.updateNavStyles();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
    this.updateNavStyles();
  }

  private updateNavStyles() {
    const header = document.querySelector('.navbar');
    if (header) {
      if (this.isHomePage && !this.isScrolled) {
        header.classList.add('on-home');
      } else {
        header.classList.remove('on-home');
      }
    }
  }
}
