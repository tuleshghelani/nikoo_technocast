import { Component } from '@angular/core';
import { BannerComponent } from '../../components/shared/banner/banner.component';
import * as AOS from 'aos';


@Component({
  selector: 'app-qms',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './qms.component.html',
  styleUrl: './qms.component.scss'
})
export class QmsComponent {
  ngOnInit() {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }
}
