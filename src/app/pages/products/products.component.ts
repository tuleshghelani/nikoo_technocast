import { Component, OnInit } from '@angular/core';
import { BannerComponent } from '../../components/shared/banner/banner.component';
import * as AOS from 'aos';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [BannerComponent,CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ProductsComponent implements OnInit {

  constructor(private router: Router) {}
  selectedCategory: string | null = null;
  selectedCategoryTitle: string = '';
  categoryProducts: any[] = [];

  ngOnInit() {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }

  showProducts(category: string) {
    this.selectedCategory = category;
    this.router.navigate(['/product', category]);
    // Example products data - replace with your actual data
    const productsData: { [key: string]: { title: string; products: { name: string; description: string; image: string; }[]; } } = {
      'brake-systems': {
        title: 'Heavy Vehicle Brake Systems Components',
        products: [
          {
            name: 'Brake Drum',
            description: 'Heavy-duty brake drum for commercial vehicles',
            image: 'assets/images/products/brake-drum.jpg'
          },
          {
            name: 'Brake Disc',
            description: 'High-performance brake disc with superior heat dissipation',
            image: 'assets/images/products/brake-disc.jpg'
          },
          // Add more products...
        ]
      }
      // Add more categories...
    };

    this.selectedCategoryTitle = productsData[category].title;
    this.categoryProducts = productsData[category].products;
  }

  openProductModal(product: any) {
    // Implement modal opening logic
  }
}
