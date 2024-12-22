import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNavHovUnderline]',
  standalone: false
})
export class NavHovUnderlineDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'color', '#ffffff');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'color 0.3s ease, text-decoration 0.3s ease');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'color', '#f7a11b');
    this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'none');
  }
}
