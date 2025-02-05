import { Component } from '@angular/core';
import { BannerComponent } from '../../components/shared/banner/banner.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
