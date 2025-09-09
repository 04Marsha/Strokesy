import { Component } from '@angular/core';

@Component({
  selector: 'app-authenticationBar',
  standalone: false,
  templateUrl: './AuthenticationBar.component.html',
  styleUrl: './AuthenticationBar.component.css',
})
export class AuthenticationBarComponent {
  menuOpen = false;
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    console.log('menuOpen:', this.menuOpen);
  }
}
