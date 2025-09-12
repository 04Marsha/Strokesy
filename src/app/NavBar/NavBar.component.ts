import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './NavBar.component.html',
  styleUrl: './NavBar.component.css',
})
export class NavBarComponent {
  text = 'MANDALA || ACRYLICS || WATERCOLORS || PENCIL SKETCHES || CHARCOAL || ';
  copies = Array(2).fill(0);
}
