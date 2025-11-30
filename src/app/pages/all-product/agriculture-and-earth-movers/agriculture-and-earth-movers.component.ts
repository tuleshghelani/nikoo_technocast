import { Component, OnInit, OnDestroy, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import * as AOS from 'aos';

interface Product {
  id: string;
  name: string;
  image: string;
  description?: string;
}

@Component({
  selector: 'app-agriculture-and-earth-movers',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './agriculture-and-earth-movers.component.html',
  styleUrl: './agriculture-and-earth-movers.component.scss'
})
export class AgricultureAndEarthMoversComponent implements OnInit, OnDestroy {
  products: Product[] = [
    {
      id: 'adapter-clamp',
      name: 'Adapter Clamp',
      image: 'assets/Agriculture and Earth Movers/Adapter Clamp.png',
      description: 'Heavy-duty adapter clamp for agricultural and earth moving equipment'
    },
    {
      id: 'bearing-housing',
      name: 'Bearing Housing',
      image: 'assets/Agriculture and Earth Movers/Bearing Housing.png',
      description: 'Precision bearing housing for optimal load distribution'
    },
    {
      id: 'clamp',
      name: 'Clamp',
      image: 'assets/Agriculture and Earth Movers/Clamp.png',
      description: 'Robust clamp component for secure fastening'
    },
    {
      id: 'differential-housing-case',
      name: 'Differential Housing Case',
      image: 'assets/Agriculture and Earth Movers/Differential Housing Case.png',
      description: 'Durable differential housing case for heavy machinery'
    },
    {
      id: 'elevator-finger-disc',
      name: 'Elevator Finger Disc',
      image: 'assets/Agriculture and Earth Movers/Elevator Finger Disc.png',
      description: 'Specialized elevator finger disc for agricultural equipment'
    },
    {
      id: 'elevator-roller',
      name: 'Elevator Roller',
      image: 'assets/Agriculture and Earth Movers/Elevator Roller.png',
      description: 'High-performance elevator roller component'
    },
    {
      id: 'gear-box-housing',
      name: 'Gear Box Housing',
      image: 'assets/Agriculture and Earth Movers/Gear Box Housing.png',
      description: 'Precision-engineered gear box housing'
    },
    {
      id: 'gear-case-cover-1',
      name: 'Gear Case Cover',
      image: 'assets/Agriculture and Earth Movers/Gear Case Cover(1).png',
      description: 'Protective gear case cover for machinery'
    },
    {
      id: 'gear-case-cover',
      name: 'Gear Case Cover',
      image: 'assets/Agriculture and Earth Movers/Gear Case Cover.png',
      description: 'Heavy-duty gear case cover'
    },
    {
      id: 'gear-case-housing',
      name: 'Gear Case Housing',
      image: 'assets/Agriculture and Earth Movers/Gear Case Housing.png',
      description: 'Robust gear case housing component'
    },
    {
      id: 'gear-case-mounting',
      name: 'Gear Case Mounting',
      image: 'assets/Agriculture and Earth Movers/Gear Case Mounting.png',
      description: 'Secure gear case mounting system'
    },
    {
      id: 'gearbox-adapter',
      name: 'GearBox Adapter',
      image: 'assets/Agriculture and Earth Movers/GearBox Adapter.png',
      description: 'Precision gearbox adapter for equipment integration'
    },
    {
      id: 'harvester-shoe-blade',
      name: 'Harvester Shoe Blade',
      image: 'assets/Agriculture and Earth Movers/Harvester Shoe Blade.png',
      description: 'Durable harvester shoe blade'
    },
    {
      id: 'harvester-shoe-housing',
      name: 'Harvester Shoe Housing',
      image: 'assets/Agriculture and Earth Movers/Harvester Shoe Housing.png',
      description: 'Heavy-duty harvester shoe housing'
    },
    {
      id: 'horseshoe-clamp',
      name: 'Horseshoe Clamp',
      image: 'assets/Agriculture and Earth Movers/Horseshoe Clamp.png',
      description: 'Specialized horseshoe clamp component'
    },
    {
      id: 'hydraulic-accessories',
      name: 'Hydraulic Accessories',
      image: 'assets/Agriculture and Earth Movers/Hydraulic Accessories.png',
      description: 'Essential hydraulic accessories for machinery'
    },
    {
      id: 'hydraulic-switch-cover',
      name: 'Hydraulic Switch Cover',
      image: 'assets/Agriculture and Earth Movers/Hydraulic Switch Cover.png',
      description: 'Protective hydraulic switch cover'
    },
    {
      id: 'pully-1',
      name: 'Pully',
      image: 'assets/Agriculture and Earth Movers/Pully(1).png',
      description: 'High-performance pully component'
    },
    {
      id: 'pully-2',
      name: 'Pully',
      image: 'assets/Agriculture and Earth Movers/Pully(2).png',
      description: 'Precision-engineered pully'
    },
    {
      id: 'pully',
      name: 'Pully',
      image: 'assets/Agriculture and Earth Movers/Pully.png',
      description: 'Heavy-duty pully component'
    },
    {
      id: 'rotavator-gear-case',
      name: 'Rotavator Gear Case',
      image: 'assets/Agriculture and Earth Movers/Rotavator Gear Case.png',
      description: 'Robust rotavator gear case'
    },
    {
      id: 'rotavator-shaft-clamp-1',
      name: 'Rotavator Shaft Clamp',
      image: 'assets/Agriculture and Earth Movers/Rotavator Shaft Clamp(1).png',
      description: 'Secure rotavator shaft clamp'
    },
    {
      id: 'rotavator-shaft-clamp-2',
      name: 'Rotavator Shaft Clamp',
      image: 'assets/Agriculture and Earth Movers/Rotavator Shaft Clamp(2).png',
      description: 'Heavy-duty rotavator shaft clamp'
    },
    {
      id: 'rotavator-shaft-clamp',
      name: 'Rotavator Shaft Clamp',
      image: 'assets/Agriculture and Earth Movers/Rotavator Shaft Clamp.png',
      description: 'Precision rotavator shaft clamp'
    },
    {
      id: 'seal-cover',
      name: 'Seal Cover',
      image: 'assets/Agriculture and Earth Movers/Seal Cover.png',
      description: 'Protective seal cover component'
    },
    {
      id: 'shaft-support',
      name: 'Shaft Support',
      image: 'assets/Agriculture and Earth Movers/Shaft Support.png',
      description: 'Robust shaft support system'
    },
    {
      id: 'support-ring',
      name: 'Support Ring',
      image: 'assets/Agriculture and Earth Movers/Support Ring.png',
      description: 'Heavy-duty support ring'
    },
    {
      id: 'swing-arm-support',
      name: 'Swing Arm Support',
      image: 'assets/Agriculture and Earth Movers/Swing Arm Support.png',
      description: 'Precision swing arm support'
    },
    {
      id: 'swing-arm',
      name: 'Swing Arm',
      image: 'assets/Agriculture and Earth Movers/Swing Arm.png',
      description: 'Durable swing arm component'
    },
    {
      id: 'tail-blade',
      name: 'Tail Blade',
      image: 'assets/Agriculture and Earth Movers/Tail Blade.png',
      description: 'Heavy-duty tail blade'
    },
    {
      id: 'tail-blase-small',
      name: 'Tail Blase Small',
      image: 'assets/Agriculture and Earth Movers/Tail Blase Small.png',
      description: 'Compact tail blase component'
    }
  ];

  // Slider properties
  showSlider = false;
  currentImageIndex = 0;
  isClosing = false;

  // Touch event handling
  private touchStartX = 0;
  private touchStartY = 0;
  private touchEndX = 0;
  private touchEndY = 0;
  private touchStartTime = 0;
  private readonly SWIPE_THRESHOLD = 50;
  private readonly TAP_THRESHOLD = 300; // milliseconds

  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    // SEO Optimization
    this.title.setTitle('Agriculture and Earth Movers Components | Nikoo Technocast');

    this.meta.updateTag({
      name: 'description',
      content: 'Premium Gray (C.I) & Ductile (S.G) iron castings for agriculture and earth moving equipment. Browse our complete range of heavy-duty components.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'agriculture components, earth movers, iron castings, gear housing, hydraulic components, rotavator parts, harvester components, Nikoo Technocast'
    });

    // Initialize AOS animations only in browser environment
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        delay: 0
      });
    }
  }

  ngOnDestroy() {
    // Cleanup if needed
    if (isPlatformBrowser(this.platformId)) {
      // Restore body scroll if modal is open
      if (this.showSlider) {
        document.body.style.overflow = 'auto';
      }
    }
  }

  // Open slider at specific index
  openSlider(index: number) {
    this.currentImageIndex = index;
    this.showSlider = true;
    this.isClosing = false;

    // Prevent body scroll
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
    }
  }

  // Close slider
  closeSlider() {
    this.isClosing = true;
    setTimeout(() => {
      this.showSlider = false;
      this.isClosing = false;

      // Restore body scroll
      if (isPlatformBrowser(this.platformId)) {
        document.body.style.overflow = 'auto';
      }
    }, 300);
  }

  // Navigate to previous image
  previousImage() {
    this.currentImageIndex =
      this.currentImageIndex > 0
        ? this.currentImageIndex - 1
        : this.products.length - 1;
  }

  // Navigate to next image
  nextImage() {
    this.currentImageIndex =
      this.currentImageIndex < this.products.length - 1
        ? this.currentImageIndex + 1
        : 0;
  }

  // Jump to specific image
  goToImage(index: number) {
    this.currentImageIndex = index;
  }

  // Get current product
  get currentProduct(): Product {
    return this.products[this.currentImageIndex];
  }

  // Prevent click propagation from modal content
  onModalContentClick(event: Event) {
    event.stopPropagation();
  }

  // Touch event handlers for mobile optimization
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
    this.touchStartY = event.touches[0].clientY;
    this.touchStartTime = Date.now();
  }

  onTouchEnd(event: TouchEvent) {
    if (!event.changedTouches || event.changedTouches.length === 0) {
      return;
    }

    this.touchEndX = event.changedTouches[0].clientX;
    this.touchEndY = event.changedTouches[0].clientY;
    const touchDuration = Date.now() - this.touchStartTime;

    const deltaX = this.touchEndX - this.touchStartX;
    const deltaY = this.touchEndY - this.touchStartY;
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);

    // Prevent default if it's a swipe (not a tap)
    if (absDeltaX > this.SWIPE_THRESHOLD || absDeltaY > this.SWIPE_THRESHOLD) {
      event.preventDefault();
      return;
    }

    // Handle tap (if touch duration is short and movement is minimal)
    if (touchDuration < this.TAP_THRESHOLD && absDeltaX < 10 && absDeltaY < 10) {
      // Allow the click event to proceed naturally
      return;
    }
  }

  // Enhanced keyboard navigation with touch support
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.showSlider) {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          this.previousImage();
          break;
        case 'ArrowRight':
          event.preventDefault();
          this.nextImage();
          break;
        case 'Escape':
          event.preventDefault();
          this.closeSlider();
          break;
      }
    }
  }

  // Handle swipe gestures in modal
  @HostListener('touchstart', ['$event'])
  onModalTouchStart(event: TouchEvent) {
    if (this.showSlider && event.target instanceof HTMLElement) {
      const target = event.target.closest('.slider-container');
      if (target) {
        this.touchStartX = event.touches[0].clientX;
        this.touchStartTime = Date.now();
      }
    }
  }

  @HostListener('touchend', ['$event'])
  onModalTouchEnd(event: TouchEvent) {
    if (this.showSlider && event.target instanceof HTMLElement) {
      const target = event.target.closest('.slider-container');
      if (target && event.changedTouches && event.changedTouches.length > 0) {
        this.touchEndX = event.changedTouches[0].clientX;
        const deltaX = this.touchEndX - this.touchStartX;
        const absDeltaX = Math.abs(deltaX);

        if (absDeltaX > this.SWIPE_THRESHOLD) {
          if (deltaX > 0) {
            this.previousImage();
          } else {
            this.nextImage();
          }
        }
      }
    }
  }
}