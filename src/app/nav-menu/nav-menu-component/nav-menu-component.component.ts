import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu-component',
  templateUrl: './nav-menu-component.component.html',
  styleUrls: ['./nav-menu-component.component.css']
})
export class NavMenuComponentComponent {
  constructor(private router: Router) { }

  navigateToMenu() {
    this.router.navigate(['/menu']);
  }
}