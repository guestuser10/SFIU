import { Component } from '@angular/core';

@Component({
  selector: 'app-standalone-nav',
  templateUrl: './standalone-nav.component.html',
  styleUrls: ['./standalone-nav.component.css']
})
export class StandaloneNavComponent {
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
