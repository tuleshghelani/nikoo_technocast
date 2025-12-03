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
  selector: 'app-oil-and-gas-components',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './oil-and-gas-components.component.html',
  styleUrl: './oil-and-gas-components.component.scss'
})
export class OilAndGasComponentsComponent implements OnInit, OnDestroy {
  products: Product[] = [
    {
      id: 'butterfly-valve-disc-1',
      name: '1" Butterfly Valve Disc',
      image: 'assets/Oil and Gas Components/1_ Butterfly Valve Disc.png',
      description: 'Precision-engineered 1" butterfly valve disc for flow control in oil and gas pipelines'
    },
    {
      id: 'butterfly-valve-disc-2',
      name: '2" Butterfly Valve Disc',
      image: 'assets/Oil and Gas Components/2_ Butterfly Valve Disc.png',
      description: 'High-performance 2" butterfly valve disc for industrial applications'
    },
    {
      id: 'hammer-union-2',
      name: '2" Hammer Union',
      image: 'assets/Oil and Gas Components/2_ Hammer Union.png',
      description: 'Heavy-duty 2" hammer union for secure pipe connections'
    },
    {
      id: 'butterfly-valve-disc-3',
      name: '3" Butterfly Valve Disc',
      image: 'assets/Oil and Gas Components/3_ Butterfly Valve Disc.png',
      description: 'Robust 3" butterfly valve disc for medium flow applications'
    },
    {
      id: 'butterfly-valve-disc-6',
      name: '6" Butterfly Valve Disc',
      image: 'assets/Oil and Gas Components/6_ Butterfly Valve Disc.png',
      description: 'Large diameter 6" butterfly valve disc for high-volume flow control'
    },
    {
      id: 'hammer-seal-union-6',
      name: '6" Hammer Seal Union',
      image: 'assets/Oil and Gas Components/6_ Hammer Seal Union.png',
      description: 'Premium 6" hammer seal union for pressure-tight connections'
    },
    {
      id: 'butterfly-valve-disc-10',
      name: '10" Butterfly Valve Disc',
      image: 'assets/Oil and Gas Components/10_ Butterfly Valve Disc.png',
      description: 'Industrial-grade 10" butterfly valve disc for large-scale operations'
    },
    {
      id: 'hammer-seal-union-12',
      name: '12" Hammer Seal Union',
      image: 'assets/Oil and Gas Components/12_ Hammer Seal Union.png',
      description: 'Heavy-duty 12" hammer seal union for high-pressure applications'
    },
    {
      id: 'butterfly-valve-disc-16',
      name: '16" Butterfly Valve Disc',
      image: 'assets/Oil and Gas Components/16_ Butterfly Valve Disc.png',
      description: 'Extra-large 16" butterfly valve disc for major pipeline systems'
    },
    {
      id: 'air-operated-pump-cover',
      name: 'Air-Operated Pump Cover',
      image: 'assets/Oil and Gas Components/Air-Operated Pump Cover.png',
      description: 'Durable air-operated pump cover for pneumatic systems'
    },
    {
      id: 'ball-valve-body',
      name: 'Ball Valve Body',
      image: 'assets/Oil and Gas Components/Ball Valve Body.png',
      description: 'Precision-cast ball valve body for reliable shutoff applications'
    },
    {
      id: 'basket-strainer',
      name: 'Basket Strainer',
      image: 'assets/Oil and Gas Components/Basket Strainer.png',
      description: 'Industrial basket strainer for filtering debris in pipelines'
    },
    {
      id: 'blind-nut',
      name: 'Blind Nut',
      image: 'assets/Oil and Gas Components/Blind Nut.png',
      description: 'Heavy-duty blind nut for secure sealing applications'
    },
    {
      id: 'bullet-piercing-valve-casing',
      name: 'Bullet Piercing Valve Casing',
      image: 'assets/Oil and Gas Components/Bullet Piercing Valve Casing.png',
      description: 'Specialized bullet piercing valve casing for HVAC and refrigeration'
    },
    {
      id: 'conduit-locknut',
      name: 'Conduit Locknut',
      image: 'assets/Oil and Gas Components/Conduit Locknut.png',
      description: 'Standard conduit locknut for electrical and piping applications'
    },
    {
      id: 'conduit-locknut-1',
      name: 'Conduit Locknut',
      image: 'assets/Oil and Gas Components/Conduit Locknut(1).png',
      description: 'Precision conduit locknut for secure fastening'
    },
    {
      id: 'conduit-locknut-2',
      name: 'Conduit Locknut',
      image: 'assets/Oil and Gas Components/Conduit Locknut(2).png',
      description: 'Heavy-duty conduit locknut for industrial use'
    },
    {
      id: 'conduit-locknut-3',
      name: 'Conduit Locknut',
      image: 'assets/Oil and Gas Components/Conduit Locknut(3).png',
      description: 'Robust conduit locknut for demanding environments'
    },
    {
      id: 'cover-with-pressure-release-nut',
      name: 'Cover with Pressure Release Nut',
      image: 'assets/Oil and Gas Components/Cover with Pressure Release Nut.png',
      description: 'Safety cover with integrated pressure release mechanism'
    },
    {
      id: 'end-cap-flap',
      name: 'End Cap Flap',
      image: 'assets/Oil and Gas Components/End Cap Flap.png',
      description: 'Durable end cap flap for pipeline termination'
    },
    {
      id: 'filter-nut',
      name: 'Filter Nut',
      image: 'assets/Oil and Gas Components/Filter Nut.png',
      description: 'Precision filter nut for filtration system assemblies'
    },
    {
      id: 'gate-valve-body',
      name: 'Gate Valve Body',
      image: 'assets/Oil and Gas Components/Gate Valve Body.png',
      description: 'Heavy-duty gate valve body for full-flow applications'
    },
    {
      id: 'groove-coupling',
      name: 'Groove Coupling',
      image: 'assets/Oil and Gas Components/Groove Coupling.png',
      description: 'Mechanical groove coupling for quick pipe connections'
    },
    {
      id: 'hammer-union',
      name: 'Hammer Union',
      image: 'assets/Oil and Gas Components/Hammer Union.png',
      description: 'Standard hammer union for high-pressure pipe connections'
    },
    {
      id: 'hammer-union-1',
      name: 'Hammer Union',
      image: 'assets/Oil and Gas Components/Hammer Union(1).png',
      description: 'Premium hammer union for oilfield applications'
    },
    {
      id: 'horizontal-lift-check-valve',
      name: 'Horizontal Lift Check Valve',
      image: 'assets/Oil and Gas Components/Horizontal Lift Check Valve.png',
      description: 'Horizontal lift check valve for preventing backflow'
    },
    {
      id: 'hose-coupling',
      name: 'Hose Coupling',
      image: 'assets/Oil and Gas Components/Hose Coupling.png',
      description: 'Durable hose coupling for flexible connections'
    },
    {
      id: 'hub-cap-bolt',
      name: 'Hub Cap Bolt',
      image: 'assets/Oil and Gas Components/Hub Cap Bolt.png',
      description: 'Heavy-duty hub cap bolt for industrial equipment'
    },
    {
      id: 'knife-gate-valve-body',
      name: 'Knife Gate Valve Body',
      image: 'assets/Oil and Gas Components/Knife Gate Valve Body.png',
      description: 'Precision knife gate valve body for slurry applications'
    },
    {
      id: 'locking-nut',
      name: 'Locking Nut',
      image: 'assets/Oil and Gas Components/Locking Nut.png',
      description: 'Self-locking nut for vibration-resistant connections'
    },
    {
      id: 'plug-valve-regulator',
      name: 'Plug Valve Regulator',
      image: 'assets/Oil and Gas Components/Plug Valve Regulator.png',
      description: 'Precision plug valve regulator for flow control'
    },
    {
      id: 'scaffolding-nut',
      name: 'Scaffolding Nut',
      image: 'assets/Oil and Gas Components/Scaffolding Nut.png',
      description: 'Heavy-duty scaffolding nut for construction applications'
    },
    {
      id: 'scaffolding-prop-nut',
      name: 'Scaffolding Prop Nut',
      image: 'assets/Oil and Gas Components/Scaffolding Prop Nut.png',
      description: 'Robust scaffolding prop nut for adjustable supports'
    },
    {
      id: 'seal-nut',
      name: 'Seal Nut',
      image: 'assets/Oil and Gas Components/Seal Nut.png',
      description: 'Precision seal nut for leak-proof connections'
    },
    {
      id: 'special-hammer-union-nut',
      name: 'Special Hammer Union Nut',
      image: 'assets/Oil and Gas Components/Special Hammer Union Nut.png',
      description: 'Specialized hammer union nut for custom applications'
    },
    {
      id: 'wing-nut',
      name: 'Wing Nut',
      image: 'assets/Oil and Gas Components/Wing Nut.png',
      description: 'Hand-tightening wing nut for quick assembly'
    },
    {
      id: 'wing-nut-1',
      name: 'Wing Nut',
      image: 'assets/Oil and Gas Components/Wing Nut(1).png',
      description: 'Heavy-duty wing nut for industrial applications'
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
    this.title.setTitle('Oil and Gas Components | Nikoo Technocast');

    this.meta.updateTag({
      name: 'description',
      content: 'Premium Gray (C.I) & Ductile (S.G) iron castings for oil and gas industry. Browse our complete range of valves, unions, couplings, and specialized components.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'oil and gas components, butterfly valve disc, hammer union, gate valve, ball valve, iron castings, pipeline fittings, Nikoo Technocast'
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
