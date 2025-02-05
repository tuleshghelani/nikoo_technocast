import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  @Input() title: string = '';
  @Input() subtitle?: string;
  @Input() breadcrumb: string[] = [];
  @Input() background?: string = 'assets/images/banner-bg.jpg'; 
}
