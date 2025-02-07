import { Component, OnInit } from '@angular/core';
import { BannerComponent } from '../../components/shared/banner/banner.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  ngOnInit() {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }
}
