import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { env } from 'src/environments/environment';
@Component({
  selector: 'app-addobrero-dialog',
  templateUrl: './addobrero-dialog.component.html',
  styleUrls: ['./addobrero-dialog.component.css']
})
export class AddobreroDialogComponent implements OnInit {
  grupos!: any[]; 
  nuevoUsuario: any = {
    nombre: "",
    telefono: "",
    direccion: "",
    id_grupo: 0,
    activo: 1,
    usuario: "",
    contrasena: ""
  };
  constructor(
    public dialogRef: MatDialogRef<AddobreroDialogComponent>, 
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.obtenerGrupos();
  }
  obtenerGrupos() {
    this.http.post(`${env.apiUrl}/select_grupo`, {}).subscribe(
        (data: any) => {
          this.grupos = data.Grupos;
          console.log('Grupos cargados:', this.grupos);
        },
        error => {
          console.error('Error al cargar grupos:', error);
        }
      );
  }
  enviarFormulario() {
    console.log(this.nuevoUsuario.id_grupo)
    this.http.post(`${env.apiUrl}/create_obrero`, this.nuevoUsuario)
      .subscribe(response => {
        console.log(response);
      });
  }

}
