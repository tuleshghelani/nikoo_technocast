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
  selector: 'app-automotive-components',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './automotive-components.component.html',
  styleUrl: './automotive-components.component.scss'
})
export class AutomotiveComponentsComponent implements OnInit, OnDestroy {
  products: Product[] = [
    {
      id: '3-wheeler-differential-cage',
      name: '3 Wheeler Differential Cage',
      image: 'assets/Automotive Components/3 Wheeler Differential Cage.png',
      description: 'High-precision differential cage designed for 3-wheeler vehicles with superior load distribution'
    },
    {
      id: 'air-compressor-crank-shaft',
      name: 'Air Compressor Crank Shaft',
      image: 'assets/Automotive Components/Air Compressor Crank Shaft.png',
      description: 'Robust crank shaft engineered for air compressor applications with optimal balance'
    },
    {
      id: 'air-compressor-crank-shaft-1',
      name: 'Air Compressor Crank Shaft',
      image: 'assets/Automotive Components/Air Compressor Crank Shaft(1).png',
      description: 'Heavy-duty air compressor crank shaft with enhanced durability'
    },
    {
      id: 'axel-support-bracket',
      name: 'Axel Support Bracket',
      image: 'assets/Automotive Components/Axel Support Bracket.png',
      description: 'Precision-machined axel support bracket for reliable vehicle suspension'
    },
    {
      id: 'balancer-clamp',
      name: 'Balancer Clamp',
      image: 'assets/Automotive Components/Balancer Clamp.png',
      description: 'High-strength balancer clamp for engine vibration control'
    },
    {
      id: 'brake-lever-lh',
      name: 'Brake Lever LH',
      image: 'assets/Automotive Components/Brake Lever LH.png',
      description: 'Left-hand brake lever with ergonomic design and superior grip'
    },
    {
      id: 'brake-lever-rh',
      name: 'Brake Lever RH',
      image: 'assets/Automotive Components/Brake Lever RH.png',
      description: 'Right-hand brake lever engineered for optimal braking performance'
    },
    {
      id: 'brake-mounting-big',
      name: 'Brake Mounting Big',
      image: 'assets/Automotive Components/Brake Mounting Big.png',
      description: 'Heavy-duty brake mounting for commercial vehicle applications'
    },
    {
      id: 'brake-mounting-support',
      name: 'Brake Mounting Support',
      image: 'assets/Automotive Components/Brake Mounting Support.png',
      description: 'Robust brake mounting support for enhanced braking system stability'
    },
    {
      id: 'bullet-bike-engine-head',
      name: 'Bullet Bike Engine Head',
      image: 'assets/Automotive Components/Bullet Bike Engine Head.png',
      description: 'Premium engine head for Bullet motorcycles with superior heat dissipation'
    },
    {
      id: 'clutch-support',
      name: 'Clutch Support',
      image: 'assets/Automotive Components/Clutch Support.png',
      description: 'Precision clutch support component for smooth gear engagement'
    },
    {
      id: 'commercial-vehicle-crank-shaft',
      name: 'Commercial Vehicle Crank Shaft',
      image: 'assets/Automotive Components/Commercial Vehicle Crank Shaft.png',
      description: 'Heavy-duty crank shaft designed for commercial vehicle engines'
    },
    {
      id: 'crank-shaft',
      name: 'Crank Shaft',
      image: 'assets/Automotive Components/Crank Shaft.png',
      description: 'High-performance crank shaft with precision balancing'
    },
    {
      id: 'crank-shaft-1',
      name: 'Crank Shaft',
      image: 'assets/Automotive Components/Crank Shaft(1).png',
      description: 'Durable crank shaft for automotive applications'
    },
    {
      id: 'differential-carrier-case',
      name: 'Differential Carrier Case',
      image: 'assets/Automotive Components/Differential Carrier Case.png',
      description: 'Robust differential carrier case for reliable power transmission'
    },
    {
      id: 'engine-crank-case',
      name: 'Engine Crank Case',
      image: 'assets/Automotive Components/Engine Crank Case.png',
      description: 'Precision-cast engine crank case with optimal oil flow design'
    },
    {
      id: 'engine-cylinder',
      name: 'Engine Cylinder',
      image: 'assets/Automotive Components/Engine Cylinder.png',
      description: 'High-quality engine cylinder with superior bore finish'
    },
    {
      id: 'engine-cylinder-1',
      name: 'Engine Cylinder',
      image: 'assets/Automotive Components/Engine Cylinder(1).png',
      description: 'Durable engine cylinder for various automotive applications'
    },
    {
      id: 'fuel-pump-gear',
      name: 'Fuel Pump Gear',
      image: 'assets/Automotive Components/Fuel Pump Gear.png',
      description: 'Precision fuel pump gear for optimal fuel delivery'
    },
    {
      id: 'generator-crank-shaft',
      name: 'Generator Crank Shaft',
      image: 'assets/Automotive Components/Generator Crank Shaft.png',
      description: 'Robust generator crank shaft for reliable power generation'
    },
    {
      id: 'generator-crank-shaft-1',
      name: 'Generator Crank Shaft',
      image: 'assets/Automotive Components/Generator Crank Shaft(1).png',
      description: 'Heavy-duty generator crank shaft with superior balance'
    },
    {
      id: 'heavy-vehicle-brake-pad',
      name: 'Heavy Vehicle Brake Pad',
      image: 'assets/Automotive Components/Heavy Vehicle Brake Pad.png',
      description: 'Premium brake pad designed for heavy vehicle applications'
    },
    {
      id: 'heavy-vehicle-crank-shaft',
      name: 'Heavy Vehicle Crank Shaft',
      image: 'assets/Automotive Components/Heavy Vehicle Crank Shaft.png',
      description: 'High-strength crank shaft for heavy vehicle engines'
    },
    {
      id: 'induction-motor-stator',
      name: 'Induction Motor Stator',
      image: 'assets/Automotive Components/Induction Motor Stator.png',
      description: 'Precision induction motor stator for optimal electromagnetic performance'
    },
    {
      id: 'locking-differential',
      name: 'Locking Differential',
      image: 'assets/Automotive Components/Locking Differential.png',
      description: 'Heavy-duty locking differential for enhanced traction control'
    },
    {
      id: 'marine-application-crank-shaft',
      name: 'Marine Application Crank Shaft',
      image: 'assets/Automotive Components/Marine Application Crank Shaft.png',
      description: 'Corrosion-resistant crank shaft for marine engine applications'
    },
    {
      id: 'multi-belt-pully',
      name: 'Multi-Belt Pully',
      image: 'assets/Automotive Components/Multi-Belt Pully.png',
      description: 'Precision multi-belt pulley for efficient power transmission'
    },
    {
      id: 'quick-exhaust-valve',
      name: 'Quick Exhaust Valve',
      image: 'assets/Automotive Components/Quick Exhaust Valve.png',
      description: 'High-flow quick exhaust valve for optimal engine breathing'
    },
    {
      id: 'shaft-housing-for-tractor',
      name: 'Shaft Housing for Tractor',
      image: 'assets/Automotive Components/Shaft Housing for Tractor.png',
      description: 'Robust shaft housing designed for tractor applications'
    },
    {
      id: 'shaft-support',
      name: 'Shaft Support',
      image: 'assets/Automotive Components/Shaft Support.png',
      description: 'Heavy-duty shaft support for reliable rotational stability'
    },
    {
      id: 'stopper-hinge',
      name: 'Stopper Hinge',
      image: 'assets/Automotive Components/Stopper Hinge.png',
      description: 'Precision stopper hinge for controlled movement'
    },
    {
      id: 'transmission-box-cover',
      name: 'Transmission Box Cover',
      image: 'assets/Automotive Components/Transmission Box Cover.png',
      description: 'Durable transmission box cover with precision fit'
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
    this.title.setTitle('Automotive Components | Nikoo Technocast');

    this.meta.updateTag({
      name: 'description',
      content: 'Premium Gray (C.I) & Ductile (S.G) iron castings for automotive applications. Browse our complete range of engine components, brake systems, and transmission parts.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'automotive components, engine parts, crank shaft, brake components, transmission parts, differential, clutch support, Nikoo Technocast'
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
