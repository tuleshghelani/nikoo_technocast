import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { BannerComponent } from '../../components/shared/banner/banner.component';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    BannerComponent,
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  ngForm: any;
  contactData: any = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 800,
        once: true,
        offset: 100
      });
    }
  }

  onSubmit() {
    // Implement form submission logic here
  }
}
