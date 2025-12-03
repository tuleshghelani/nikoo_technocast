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
  selector: 'app-gear-and-engineering-components',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gear-and-engineering-components.component.html',
  styleUrl: './gear-and-engineering-components.component.scss'
})
export class GearAndEngineeringComponentsComponent implements OnInit, OnDestroy {
  products: Product[] = [
    {
      id: '4-window-fire-hydrant-housing',
      name: '4 Window Fire Hydrant Housing',
      image: 'assets/Gear and Engineering Components/4 Window Fire Hydrant Housing.png',
      description: 'Heavy-duty fire hydrant housing with 4 window design for industrial applications'
    },
    {
      id: 'adaptor-flange',
      name: 'Adaptor Flange',
      image: 'assets/Gear and Engineering Components/Adaptor Flange.png',
      description: 'Precision-engineered adaptor flange for seamless equipment integration'
    },
    {
      id: 'bearing-housing',
      name: 'Bearing Housing',
      image: 'assets/Gear and Engineering Components/Bearing Housing.png',
      description: 'Robust bearing housing for optimal load distribution and durability'
    },
    {
      id: 'biffi-actuator-housing',
      name: 'Biffi Actuator Housing',
      image: 'assets/Gear and Engineering Components/Biffi Actuator Housing.png',
      description: 'High-performance actuator housing for industrial valve automation'
    },
    {
      id: 'biffi-actuator-housing-1',
      name: 'Biffi Actuator Housing',
      image: 'assets/Gear and Engineering Components/Biffi Actuator Housing(1).png',
      description: 'Premium quality actuator housing for heavy-duty applications'
    },
    {
      id: 'bonfiglioli-gearbox-case',
      name: 'Bonfiglioli GearBox Case',
      image: 'assets/Gear and Engineering Components/Bonfiglioli GearBox Case.png',
      description: 'Precision-cast gearbox case for Bonfiglioli drive systems'
    },
    {
      id: 'buffer-housing',
      name: 'Buffer Housing',
      image: 'assets/Gear and Engineering Components/Buffer Housing_.png',
      description: 'Heavy-duty buffer housing for shock absorption and vibration dampening'
    },
    {
      id: 'cap-nut',
      name: 'Cap Nut',
      image: 'assets/Gear and Engineering Components/Cap Nut.png',
      description: 'Precision-engineered cap nut for secure fastening applications'
    },
    {
      id: 'filter-housing',
      name: 'Filter Housing',
      image: 'assets/Gear and Engineering Components/Filter Housing.png',
      description: 'Industrial-grade filter housing for fluid filtration systems'
    },
    {
      id: 'flange',
      name: 'Flange',
      image: 'assets/Gear and Engineering Components/Flange.png',
      description: 'High-quality flange component for pipe connections and joints'
    },
    {
      id: 'gearbox-bearing-divider',
      name: 'GearBox Bearing Divider',
      image: 'assets/Gear and Engineering Components/GearBox Bearing Divider.png',
      description: 'Precision bearing divider for gearbox assembly applications'
    },
    {
      id: 'heavy-buffer-pad',
      name: 'Heavy Buffer Pad',
      image: 'assets/Gear and Engineering Components/Heavy Buffer Pad.png',
      description: 'Heavy-duty buffer pad for industrial equipment protection'
    },
    {
      id: 'hydraulic-switch-cut-section',
      name: 'Hydraulic Switch Cut-Section',
      image: 'assets/Gear and Engineering Components/Hydraulic Switch Cut-Section.png',
      description: 'Precision cut-section component for hydraulic switch systems'
    },
    {
      id: 'hydraulic-switch-housing',
      name: 'Hydraulic Switch Housing',
      image: 'assets/Gear and Engineering Components/Hydraulic Switch Housing.png',
      description: 'Robust housing for hydraulic switch assemblies'
    },
    {
      id: 'hydraulic-valve-housing',
      name: 'Hydraulic Valve Housing',
      image: 'assets/Gear and Engineering Components/Hydraulic Valve Housing.png',
      description: 'High-performance valve housing for hydraulic control systems'
    },
    {
      id: 'insulator-flange',
      name: 'Insulator Flange',
      image: 'assets/Gear and Engineering Components/Insulator Flange.png',
      description: 'Specialized insulator flange for electrical isolation applications'
    },
    {
      id: 'milling-machine-part',
      name: 'Milling Machine Part',
      image: 'assets/Gear and Engineering Components/Milling Machine Part.png',
      description: 'Precision-engineered component for milling machine applications'
    },
    {
      id: 'pinion-for-rack',
      name: 'Pinion for Rack',
      image: 'assets/Gear and Engineering Components/Pinion for Rack.png',
      description: 'High-quality pinion gear for rack and pinion drive systems'
    },
    {
      id: 'planetary-gear-housing',
      name: 'Planetary Gear Housing',
      image: 'assets/Gear and Engineering Components/Planetary Gear Housing.png',
      description: 'Robust housing for planetary gear assemblies'
    },
    {
      id: 'planetary-gear-support',
      name: 'Planetary Gear Support',
      image: 'assets/Gear and Engineering Components/Planetary Gear Support.png',
      description: 'Precision support component for planetary gear systems'
    },
    {
      id: 'power-transmission-adapter',
      name: 'Power Transmission Adapter',
      image: 'assets/Gear and Engineering Components/Power Transmission Adapter.png',
      description: 'Heavy-duty adapter for power transmission applications'
    },
    {
      id: 'rack-for-pinion',
      name: 'Rack for Pinion',
      image: 'assets/Gear and Engineering Components/Rack for Pinion.png',
      description: 'High-precision rack component for linear motion systems'
    },
    {
      id: 'reduction-gear-case',
      name: 'Reduction Gear Case',
      image: 'assets/Gear and Engineering Components/Reduction Gear Case.png',
      description: 'Robust gear case for speed reduction applications'
    },
    {
      id: 'reduction-gear-case-1',
      name: 'Reduction Gear Case',
      image: 'assets/Gear and Engineering Components/Reduction Gear Case(1).png',
      description: 'Premium quality reduction gear case for industrial gearboxes'
    },
    {
      id: 'reduction-gearbox-housing',
      name: 'Reduction GearBox Housing',
      image: 'assets/Gear and Engineering Components/Reduction GearBox Housing.png',
      description: 'Heavy-duty housing for reduction gearbox assemblies'
    },
    {
      id: 'sliding-channel-clamp',
      name: 'Sliding Channel Clamp',
      image: 'assets/Gear and Engineering Components/Sliding Channel Clamp.png',
      description: 'Precision sliding channel clamp for linear motion systems'
    },
    {
      id: 'special-gear',
      name: 'Special Gear',
      image: 'assets/Gear and Engineering Components/Special Gear.png',
      description: 'Custom-engineered special gear for specialized applications'
    },
    {
      id: 'special-manhole-cover',
      name: 'Special Manhole Cover',
      image: 'assets/Gear and Engineering Components/Special Manhole Cover.png',
      description: 'Heavy-duty special manhole cover for infrastructure applications'
    },
    {
      id: 'special-purpose-planetary-gearbox-housing',
      name: 'Special Purpose Planetary GearBox Housing',
      image: 'assets/Gear and Engineering Components/Special Purpose Planetary GearBox Housing_.png',
      description: 'Specialized housing for custom planetary gearbox systems'
    },
    {
      id: 'spherical-bushing',
      name: 'Spherical Bushing',
      image: 'assets/Gear and Engineering Components/Spherical Bushing.png',
      description: 'Precision spherical bushing for angular movement applications'
    },
    {
      id: 'square-manhole-cover',
      name: 'Square Manhole Cover',
      image: 'assets/Gear and Engineering Components/Square Manhole Cover_.png',
      description: 'Robust square manhole cover for utility access points'
    },
    {
      id: 'support-clamp',
      name: 'Support Clamp',
      image: 'assets/Gear and Engineering Components/Support Clamp.png',
      description: 'Heavy-duty support clamp for structural applications'
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
    this.title.setTitle('Gear and Engineering Components | Nikoo Technocast');

    this.meta.updateTag({
      name: 'description',
      content: 'Premium Gray (C.I) & Ductile (S.G) iron castings for gear and engineering applications. Browse our complete range of precision-engineered gearbox housings, flanges, and industrial components.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'gear components, engineering components, gearbox housing, planetary gear, hydraulic valve housing, iron castings, industrial components, Nikoo Technocast'
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
