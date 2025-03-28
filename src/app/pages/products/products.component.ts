import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { BannerComponent } from '../../components/shared/banner/banner.component';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

export interface ProductCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  applications: string[];
  materials: string[];
  image: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [BannerComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  productCategories: ProductCategory[] = [
    {
      id: 'brake-components',
      title: 'Heavy Vehicle Brake Systems Components',
      icon: 'bi bi-truck',
      description: 'High-quality, durable brake system components for heavy vehicles ensuring optimal safety and reliability in demanding conditions.',
      applications: ['Commercial trucks', 'Buses', 'Heavy-duty vehicles', 'Trailers'],
      materials: ['Gray Iron (GI)', 'Ductile Iron (SG)'],
      image: 'assets/home/automobile_casting.png'
    },
    {
      id: 'passenger-car',
      title: 'Passenger Car Components',
      icon: 'bi bi-car-front',
      description: 'Precision-engineered components for passenger vehicles ensuring optimal performance, durability, and safety compliance.',
      applications: ['Sedans', 'SUVs', 'Luxury vehicles', 'Electric vehicles'],
      materials: ['Gray Iron (GI)', 'Ductile Iron (SG)'],
      image: 'assets/home/automobile_casting.png'
    },
    {
      id: 'compressors',
      title: 'Compressors Components',
      icon: 'bi bi-gear',
      description: 'Durable and efficient components for industrial compressor applications, designed for high-pressure environments and continuous operation.',
      applications: ['Industrial compressors', 'Air conditioning systems', 'Refrigeration units'],
      materials: ['Gray Iron (GI)', 'Ductile Iron (SG)'],
      image: 'assets/home/automobile_casting.png'
    },
    {
      id: 'earth-movers',
      title: 'Earth Movers & Heavy Vehicles',
      icon: 'bi bi-truck-flatbed',
      description: 'Robust components designed for heavy-duty earth moving equipment, built to withstand extreme conditions and heavy loads.',
      applications: ['Excavators', 'Bulldozers', 'Loaders', 'Mining equipment'],
      materials: ['Gray Iron (GI)', 'Ductile Iron (SG)'],
      image: 'assets/home/automobile_casting.png'
    },
    {
      id: 'valve-components',
      title: 'Valve & Valve Components',
      icon: 'bi bi-valve',
      description: 'High-precision valve components for various industrial applications, ensuring optimal flow control and system integrity.',
      applications: ['Industrial valves', 'Control systems', 'Fluid handling'],
      materials: ['Gray Iron (GI)', 'Ductile Iron (SG)'],
      image: 'assets/home/automobile_casting.png'
    },
    {
      id: 'automobile-parts',
      title: 'Automobile Parts',
      icon: 'bi bi-car-front-fill',
      description: 'Specialized automobile parts manufactured to OEM specifications with high precision and performance standards.',
      applications: ['Engine components', 'Transmission parts', 'Chassis components'],
      materials: ['Gray Iron (GI)', 'Ductile Iron (SG)'],
      image: 'assets/home/automobile_casting.png'
    },
    {
      id: 'machine-tools',
      title: 'Machine Tools Components',
      icon: 'bi bi-tools',
      description: 'Precision-machined components for tooling applications, designed for accuracy and long service life.',
      applications: ['CNC machines', 'Industrial machinery', 'Manufacturing equipment'],
      materials: ['Gray Iron (GI)', 'Ductile Iron (SG)'],
      image: 'assets/home/automobile_casting.png'
    },
    {
      id: 'oil-gas',
      title: 'Oil & Gas Components',
      icon: 'bi bi-fuel-pump',
      description: 'High-performance components for the oil and gas industry, engineered to withstand harsh environments and pressure conditions.',
      applications: ['Oil rigs', 'Refineries', 'Pumping stations', 'Processing facilities'],
      materials: ['Gray Iron (GI)', 'Ductile Iron (SG)'],
      image: 'assets/home/automobile_casting.png'
    },
    {
      id: 'transmission',
      title: 'Transmission Components',
      icon: 'bi bi-gear-wide-connected',
      description: 'Critically engineered transmission components ensuring smooth power delivery and operational efficiency.',
      applications: ['Automotive transmissions', 'Industrial gearboxes', 'Power transfer systems'],
      materials: ['Gray Iron (GI)', 'Ductile Iron (SG)'],
      image: 'assets/home/automobile_casting.png'
    }
  ];

  selectedCategory: ProductCategory | null = null;

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  
  ngOnInit() {
    // SEO Optimization
    this.title.setTitle('Premium Iron Castings & Components | Nikoo Technocast');
    
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Explore Nikoo Technocast\'s specialized Gray (C.I) & Ductile (S.G) iron castings for automotive, industrial, and heavy machinery applications with precision engineering and premium quality.'
    });

    this.meta.updateTag({ 
      name: 'keywords', 
      content: 'iron castings, gray iron, ductile iron, brake components, valve components, automotive parts, machine tools, compressor components, heavy vehicle parts, Nikoo Technocast'
    });

    // Open Graph tags for better social sharing
    this.meta.updateTag({ property: 'og:title', content: 'Premium Iron Castings & Components | Nikoo Technocast' });
    this.meta.updateTag({ property: 'og:description', content: 'Specialized Gray (C.I) & Ductile (S.G) iron castings for automotive, industrial, and heavy machinery applications.' });
    this.meta.updateTag({ property: 'og:image', content: 'assets/home/automobile_casting.png' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    // Initialize AOS animations only in browser environment
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 800,
        once: true,
        offset: 100
      });
    }
  }

  showProductDetails(category: ProductCategory) {
    this.selectedCategory = category;
  }
}
