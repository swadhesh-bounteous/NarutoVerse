import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          transform: 'translate3d(0,0,0)',
        }),
      ),
      state(
        'out',
        style({
          transform: 'translate3d(100%, 0, 0)',
        }),
      ),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out')),
    ]),
  ],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService) {}

  menuState: string = 'out';
  isMobile: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkIfMobile();
  }

  private checkIfMobile(): void {
    this.isMobile = window.innerWidth <= 768;
  }

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
  ngOnInit(): void {
    this.updateNavbarStyle();
    this.checkIfMobile();
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
    const opacity = Math.max(
      minOpacity,
      Math.min(
        baseOpacity,
        baseOpacity - (scrollTop / maxScroll) * (baseOpacity - minOpacity),
      ),
    );

    document.body.style.setProperty(
      '--navbar-scroll',
      `rgba(0, 0, 0, ${opacity})`,
    );
    document.body.style.setProperty('--navbar-scroll-text', 'white');
  }

  logout() {
    this.authService.logout();
  }
}
