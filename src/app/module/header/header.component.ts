import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = '';
  url: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Inicializa la URL actual
    this.url = this.router.url;
    this.updateTitle(this.url);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.url = this.router.url; // Actualiza la URL actual
        this.updateTitle(this.url); // Actualiza el título basado en la URL
        console.log("Current URL:", this.url); // Log para verificar la URL actual
      }
    });
  }

  updateTitle(url: string): void {
    if (url.includes('/personal')) {
      this.title = 'REGISTRO DE PERSONAL';
    } else if (url.includes('/formdata')) {
      this.title = 'REGISTRO DE PERSONAL';
    }else if (url.includes('/assists')) {
      this.title = 'REGISTRO DE ASISTENCIA';
    }else {
      this.title = '';
    }
    console.log("Updated title:", this.title); // Log para verificar el título actualizado
  }
}
