import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterLink,
    RouterOutlet,
  ],
  template: `
    <main>
    <header class="brand-name"> 
      <a [routerLink]="['/']">
        
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
      </a>
      <a class =" contact"[routerLink]="['/contact']"> Inquiry Form</a>
    </header>

      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
