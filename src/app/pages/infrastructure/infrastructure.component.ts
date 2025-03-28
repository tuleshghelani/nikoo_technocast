import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { BannerComponent } from '../../components/shared/banner/banner.component';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

export interface EquipmentItem {
  icon: string;
  name: string;
  description: string;
  svgPath: string;
}

@Component({
  selector: 'app-infrastructure',
  standalone: true,
  imports: [BannerComponent, CommonModule],
  templateUrl: './infrastructure.component.html',
  styleUrl: './infrastructure.component.scss'
})
export class InfrastructureComponent implements OnInit {
  qualityEquipment: EquipmentItem[] = [
    {
      icon: 'fas fa-atom',
      name: 'Optical Emission Spectrometer',
      description: 'Bruker USA make 29 channels for precise material analysis',
      svgPath: 'assets/svg/equipment/spectrometer.svg'
    },
    {
      icon: 'fas fa-microscope',
      name: 'Microstructure Analysis',
      description: 'Advanced Image Analyzer for detailed microstructure examination',
      svgPath: 'assets/svg/equipment/microscope.svg'
    },
    {
      icon: 'fas fa-flask',
      name: 'Wet Lab Analysis', 
      description: 'Comprehensive testing of ferrous alloys and composition control',
      svgPath: 'assets/svg/equipment/flask.svg'
    },
    {
      icon: 'fas fa-tools',
      name: 'Physical Testing Equipment',
      description: 'Including Brinell hardness tester and tensile testing machine',
      svgPath: 'assets/svg/equipment/tools.svg'
    },
    {
      icon: 'fas fa-chart-line',
      name: 'Quality Control Systems',
      description: 'AFS Sieve Analyzer and Permeability Meter for consistent quality',
      svgPath: 'assets/svg/equipment/chart-line.svg'
    },
    {
      icon: 'fas fa-cogs',
      name: 'Process Control',
      description: 'Advanced systems for monitoring and controlling manufacturing processes',
      svgPath: 'assets/svg/equipment/cogs.svg'
    }
  ];

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.title.setTitle('Advanced Manufacturing Infrastructure & Equipment | Nikoo Technocast');
    
    // Meta description
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Explore Nikoo Technocast\'s state-of-the-art manufacturing infrastructure featuring Green Sand Molding, Optical Emission Spectrometer, and advanced quality control systems. Led by expert engineers and technicians.'
    });

    // Additional meta tags for SEO
    this.meta.updateTag({ 
      name: 'keywords', 
      content: 'manufacturing infrastructure, green sand molding, quality control equipment, casting machinery, industrial testing equipment, Nikoo Technocast facility, foundry equipment'
    });

    // Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: 'Advanced Manufacturing Infrastructure | Nikoo Technocast' });
    this.meta.updateTag({ property: 'og:description', content: 'State-of-the-art manufacturing facility with advanced casting and testing equipment.' });
    this.meta.updateTag({ property: 'og:image', content: 'assets/infrastructure/manufacturing-plant.jpg' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    // Twitter Card tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Advanced Manufacturing Infrastructure | Nikoo Technocast' });
    
    // Initialize AOS only in browser
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 800,
        once: true,
        offset: 100
      });
    }
  }
}
