import { Component } from '@angular/core';
import { BannerComponent } from '../../components/shared/banner/banner.component';

@Component({
  selector: 'app-qms',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './qms.component.html',
  styleUrl: './qms.component.scss'
})
export class QmsComponent {

}
