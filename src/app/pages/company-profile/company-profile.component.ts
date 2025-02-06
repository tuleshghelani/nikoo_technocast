import { Component } from '@angular/core';
import { BannerComponent } from '../../components/shared/banner/banner.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-company-profile',
  standalone: true,
  imports: [BannerComponent, CommonModule, RouterModule],
  templateUrl: './company-profile.component.html',
  styleUrl: './company-profile.component.scss'
})
export class CompanyProfileComponent {

}
