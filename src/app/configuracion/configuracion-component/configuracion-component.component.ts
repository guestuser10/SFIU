import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddGrupoDialogComponent } from '../add-grupo-dialog/add-grupo-dialog.component';
@Component({
  selector: 'app-configuracion-component',
  templateUrl: './configuracion-component.component.html',
  styleUrls: ['./configuracion-component.component.css']
})
export class ConfiguracionComponentComponent {
  constructor( public dialog: MatDialog) { }
  DialogAddGrupo() {
    const dialogRef = this.dialog.open(AddGrupoDialogComponent, {
      width: '400px', // Puedes ajustar el ancho según tus necesidades
    });
  
    // Suscripción para manejar los datos que puedes devolver desde el diálogo
    dialogRef.afterClosed().subscribe(result => {
      console.log('El cuadro de diálogo se cerró', result);
    });
  }
}
