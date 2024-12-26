import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private authService: AuthService){}
  ngOnInit(): void {
    this.updateNavbarStyle();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.updateNavbarStyle(); 
  }

  private updateNavbarStyle(): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    const maxScroll = 650; 
    const baseOpacity = 1; 
    const minOpacity = 0.8; 
    const opacity = Math.max(minOpacity, Math.min(baseOpacity, baseOpacity - (scrollTop / maxScroll) * (baseOpacity - minOpacity)));

    document.body.style.setProperty('--navbar-scroll', `rgba(0, 0, 0, ${opacity})`);
    document.body.style.setProperty('--navbar-scroll-text', 'white'); 
  }

  logout(){
    this.authService.logout();
  }
}
