import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { BannerComponent } from '../../components/shared/banner/banner.component';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-qms',
  standalone: true,
  imports: [BannerComponent, CommonModule],
  templateUrl: './qms.component.html',
  styleUrl: './qms.component.scss'
})
export class QmsComponent implements OnInit {
  rawMaterials = [
    {
      icon: 'fas fa-layer-group',
      name: 'CRCA Scrap',
      description: 'High-quality cold rolled steel scrap'
    },
    {
      icon: 'fas fa-cube',
      name: 'Copper',
      description: 'Premium grade copper for superior conductivity'
    },
    {
      icon: 'fas fa-atom',
      name: 'Iron Silicide',
      description: 'FeSi for enhanced material properties'
    },
    {
      icon: 'fas fa-microscope',
      name: 'FeSiMg',
      description: 'Magnesium Silicon Ferro-Alloys for strength'
    }
  ];

  testingProcesses = [
    {
      icon: 'fas fa-microscope',
      name: 'Chemical Analysis',
      description: 'Optical Emission Spectrometer (Bruker USA) with 29 channels for precise material composition analysis'
    },
    {
      icon: 'fas fa-chart-line',
      name: 'Physical Testing',
      description: 'Comprehensive testing including Brinell hardness (250-3000 kgs) and tensile strength analysis'
    },
    {
      icon: 'fas fa-flask',
      name: 'Wet Lab Analysis',
      description: 'Detailed analysis of ferrous alloys and composition control'
    },
    {
      icon: 'fas fa-cogs',
      name: 'Quality Control',
      description: 'AFS Sieve Analysis and Permeability testing for consistent quality'
    }
  ];

  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    // SEO Optimization
    this.title.setTitle('Quality Management System | Nikoo Technocast - Leading Iron Casting Manufacturer');
    
    this.meta.updateTag({ 
      name: 'description', 
      content: 'Explore Nikoo Technocast\'s cutting-edge manufacturing infrastructure featuring Green Sand Molding Lines, Optical Emission Spectrometer, and advanced automation systems.'
    });

    this.meta.updateTag({ 
      name: 'keywords', 
      content: 'quality management system, iron casting quality control, Bruker spectrometer, material testing, casting inspection, quality assurance, Nikoo Technocast'
    });

    this.meta.updateTag({ property: 'og:title', content: 'Quality Management System | Nikoo Technocast' });
    this.meta.updateTag({ property: 'og:description', content: 'Advanced quality control processes ensuring premium iron castings.' });
    this.meta.updateTag({ property: 'og:image', content: 'assets/qms/quality-testing.jpg' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    // Only initialize AOS in browser environment
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 800,
        once: true,
        offset: 100
      });
    }

    // Add structured data only in browser environment
    if (isPlatformBrowser(this.platformId)) {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "ManufacturingFacility",
        "name": "Nikoo Technocast",
        "description": "Leading manufacturer of Gray & Ductile iron castings with advanced quality management systems",
        "areaServed": "Global",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Quality Testing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Chemical Analysis",
                "description": "Optical Emission Spectrometer testing"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Physical Testing",
                "description": "Comprehensive material strength testing"
              }
            }
          ]
        }
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }
}
