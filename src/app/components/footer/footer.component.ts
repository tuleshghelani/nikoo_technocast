import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  currentYear: number = new Date().getFullYear();

  ngOnInit() {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
    // Any additional initialization
  }
}
