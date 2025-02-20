import { Component, OnInit } from '@angular/core';
import { BannerComponent } from '../../components/shared/banner/banner.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-products-by-category',
  standalone: true,
  imports: [BannerComponent, CommonModule],
  templateUrl: './products-by-category.component.html',
  styleUrl: './products-by-category.component.scss'
})
export class ProductsByCategoryComponent implements OnInit {
  category: string = '';
  categoryTitle: string = '';
  products: Product[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params['category'];
      this.categoryTitle = this.getCategoryTitle(this.category);
      this.loadProducts();
    });
  }

  getCategoryTitle(category: string): string {
    return category.replace(/-/g, ' ').toUpperCase();
  }

  private loadProducts() {
    // Replace this with your actual API call
    this.products = [
      {
        id: 1,
        name: 'Product 1',
        description: 'This is a sample product description that might be a bit longer than expected.',
        price: 99.99,
        image: 'assets/home/casting_product_3.jpeg'
      },
      {
        id: 1,
        name: 'Product 1',
        description: 'This is a sample product description that might be a bit longer than expected.',
        price: 99.99,
        image: 'assets/home/casting_product_3.jpeg'
      },
      {
        id: 1,
        name: 'Product 1',
        description: 'This is a sample product description that might be a bit longer than expected.',
        price: 99.99,
        image: 'assets/home/casting_product_3.jpeg'
      },
      {
        id: 1,
        name: 'Product 1',
        description: 'This is a sample product description that might be a bit longer than expected.',
        price: 99.99,
        image: 'assets/home/casting_product_3.jpeg'
      },
      {
        id: 1,
        name: 'Product 1',
        description: 'This is a sample product description that might be a bit longer than expected.',
        price: 99.99,
        image: 'assets/home/casting_product_3.jpeg'
      },
      {
        id: 1,
        name: 'Product 1',
        description: 'This is a sample product description that might be a bit longer than expected.',
        price: 99.99,
        image: 'assets/home/casting_product_3.jpeg'
      },
      {
        id: 1,
        name: 'Product 1',
        description: 'This is a sample product description that might be a bit longer than expected.',
        price: 99.99,
        image: 'assets/home/casting_product_3.jpeg'
      },
      {
        id: 1,
        name: 'Product 1',
        description: 'This is a sample product description that might be a bit longer than expected.',
        price: 99.99,
        image: 'assets/home/casting_product_3.jpeg'
      }
      // Add more products...
    ];
  }
}
