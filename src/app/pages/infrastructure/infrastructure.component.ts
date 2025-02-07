import { Component } from '@angular/core';
import { BannerComponent } from '../../components/shared/banner/banner.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-infrastructure',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './infrastructure.component.html',
  styleUrl: './infrastructure.component.scss'
})
export class InfrastructureComponent {
  ngOnInit() {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }
}
