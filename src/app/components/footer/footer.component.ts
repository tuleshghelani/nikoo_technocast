import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import * as AOS from 'aos';
import { Router } from 'express';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements AfterViewInit {
  currentYear: number = new Date().getFullYear();

  constructor() {
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }

  ngAfterViewInit() {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }
}
