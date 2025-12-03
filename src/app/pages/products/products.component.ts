import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { BannerComponent } from '../../components/shared/banner/banner.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
  url: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [BannerComponent, CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  productCategories: ProductCategory[] = [
    {
      id: 'agriculture-earth-movers',
      title: 'Agriculture and Earth Movers',
      icon: 'bi bi-truck-flatbed',
      description: 'Robust components designed for heavy-duty agricultural and earth moving equipment, built to withstand extreme conditions and heavy loads in demanding environments.',
      applications: ['Excavators', 'Bulldozers', 'Tractors', 'Agricultural machinery', 'Mining equipment', 'Loaders'],
      materials: ['Gray Iron (GI)', 'Ductile Iron (SG)'],
      image: 'assets/Agriculture and Earth Movers/Adapter Clamp.png',
      url: 'product/agriculture-and-earth-movers'
    },
    {
      id: 'automotive-components',
      title: 'Automotive Components',
      icon: 'bi bi-car-front-fill',
      description: 'Precision-engineered automotive components manufactured to OEM specifications, ensuring optimal performance, durability, and safety compliance across all vehicle types.',
      applications: ['Engine components', 'Transmission parts', 'Differential systems', 'Chassis components', 'Brake systems', 'Steering components'],
      materials: ['Gray Iron (GI)', 'Ductile Iron (SG)'],
      image: 'assets/Automotive Components/3 Wheeler Differential Cage.png',
      url: 'product/automotive-components'
    },
    {
      id: 'gear-engineering-components',
      title: 'Gear and Engineering Components',
      icon: 'bi bi-gear-wide-connected',
      description: 'High-precision gear and engineering components for various industrial and municipal applications, designed for accuracy, reliability, and long service life in critical systems.',
      applications: ['Industrial gearboxes', 'Fire hydrant systems', 'Power transmission', 'Municipal infrastructure', 'Manufacturing equipment', 'Safety systems'],
      materials: ['Gray Iron (GI)', 'Ductile Iron (SG)'],
      image: 'assets/Gear and Engineering Components/4 Window Fire Hydrant Housing.png',
      url: '/gear-engineering-components'
    },
    {
      id: 'oil-gas-components',
      title: 'Oil & Gas Components',
      icon: 'bi bi-fuel-pump',
      description: 'High-performance components for the oil and gas industry, engineered to withstand harsh environments, extreme pressure conditions, and demanding operational requirements.',
      applications: ['Oil rigs', 'Refineries', 'Pumping stations', 'Processing facilities', 'Pipeline systems', 'Drilling equipment'],
      materials: ['Gray Iron (GI)', 'Ductile Iron (SG)'],
      image: 'assets/Oil & Gas Components/2_ Hammer Union.png',
      url: '/oil-gas-components'
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
