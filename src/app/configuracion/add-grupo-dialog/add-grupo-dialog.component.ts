import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-grupo-dialog',
  templateUrl: './add-grupo-dialog.component.html',
  styleUrls: ['./add-grupo-dialog.component.css']
})
export class AddGrupoDialogComponent {
  nuevoGrupo: any = {
    nombre: "",
    activo: 1,
  };
  constructor(
    public dialogRef: MatDialogRef<AddGrupoDialogComponent>, 
    private http: HttpClient
  ) {}
  enviarFormulario() {
    console.log(this.nuevoGrupo.id_grupo)
    this.http.post('http://127.0.0.1:8000/create_grupo', this.nuevoGrupo)
      .subscribe(response => {
        console.log(response);
      });
      location.reload();
  }

}
