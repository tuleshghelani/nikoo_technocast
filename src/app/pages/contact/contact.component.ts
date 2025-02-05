import { Component } from '@angular/core';
import { BannerComponent } from '../../components/shared/banner/banner.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    BannerComponent,
    FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  ngForm:any
  contactData:any = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  onSubmit(){

  }
}
