import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'NarutoVerse';
  showNavbar: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    // Listen for navigation end events to check the route
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Hide navbar for login and register routes
        if (
          event.urlAfterRedirects === '/login' ||
          event.urlAfterRedirects === '/register'
        ) {
          this.showNavbar = false;
        } else {
          this.showNavbar = true;
        }
      });
  }
}
