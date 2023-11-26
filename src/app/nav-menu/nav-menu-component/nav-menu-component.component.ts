import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddobreroDialogComponent } from '../addobrero-dialog/addobrero-dialog.component';
import { AdduserDialogComponent } from '../adduser-dialog/adduser-dialog.component';

@Component({
  selector: 'app-nav-menu-component',
  templateUrl: './nav-menu-component.component.html',
  styleUrls: ['./nav-menu-component.component.css']
})
export class NavMenuComponentComponent {
  constructor(private router: Router, public dialog: MatDialog) { }

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
    const ruta_busqueda_miembro = `/obrero/${valor_obrero}`;
    this.router.navigate([ruta_busqueda_miembro]);
  }

  DialogAddObrero() {
    const dialogRef = this.dialog.open(AddobreroDialogComponent, {
      width: '400px', // Puedes ajustar el ancho según tus necesidades
    });
  
    // Suscripción para manejar los datos que puedes devolver desde el diálogo
    dialogRef.afterClosed().subscribe(result => {
      console.log('El cuadro de diálogo se cerró', result);
    });
  }

  DialogAddCreyente() {
    const dialogRef = this.dialog.open(AdduserDialogComponent, {
      width: '400px', // Puedes ajustar el ancho según tus necesidades
    });
  
    // Suscripción para manejar los datos que puedes devolver desde el diálogo
    dialogRef.afterClosed().subscribe(result => {
      console.log('El cuadro de diálogo se cerró', result);
    });
  }
}