import { Component, OnInit, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

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
export class AgricultureAndEarthMoversComponent implements OnInit {
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

  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

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

  // Keyboard navigation
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.showSlider) {
      switch(event.key) {
        case 'ArrowLeft':
          this.previousImage();
          break;
        case 'ArrowRight':
          this.nextImage();
          break;
        case 'Escape':
          this.closeSlider();
          break;
      }
    }
  }

  // Prevent click propagation from modal content
  onModalContentClick(event: Event) {
    event.stopPropagation();
  }
}