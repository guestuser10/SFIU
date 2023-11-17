import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu-component',
  templateUrl: './nav-menu-component.component.html',
  styleUrls: ['./nav-menu-component.component.css']
})
export class NavMenuComponentComponent {
  constructor(private router: Router) { }

  valor_miembro: string ='';
  valor_obrero: string ='';

  navigateToMenu() {
    this.router.navigate(['/menu']);
  }

  searchmiembro(valor_miembro: string) {
    const ruta_busqueda_miembro = `/miembro/${this.valor_miembro}`;
    this.router.navigate([ruta_busqueda_miembro]);
  }

  searchobrero(valor_obrero: string) {
    const ruta_busqueda_miembro = `/obrero/${this.valor_miembro}`;
    this.router.navigate([ruta_busqueda_miembro]);
  }
}