import { Component } from '@angular/core';
import { BannerComponent } from '../../components/shared/banner/banner.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
