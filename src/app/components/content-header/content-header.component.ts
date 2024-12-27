import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-header',
  standalone: false,

  templateUrl: './content-header.component.html',
  styleUrl: './content-header.component.scss',
})
export class ContentHeaderComponent {
  @Input() title!: string;
  @Input() width!: string;
}
