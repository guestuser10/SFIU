import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { env } from 'src/environments/environment';
@Component({
  selector: 'app-adduser-dialog',
  templateUrl: './adduser-dialog.component.html',
  styleUrls: ['./adduser-dialog.component.css']
})
export class AdduserDialogComponent implements OnInit{
  diasDisp: string[] = ["F", "F", "F", "F", "F", "F"];

    grupos!: any[]; 
    nuevoCreyente: any = {
      nombre: "",
      telefono: "",
      direccion: "",
      dias_disp: "",
      id_grupo: 0,
      activo: 1
    };
  
    constructor(
      public dialogRef: MatDialogRef<AdduserDialogComponent>, 
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
      this.nuevoCreyente.dias_disp = this.diasDisp.join("");
      this.http.post(`${env.apiUrl}/create_Creyentes`, this.nuevoCreyente)
        .subscribe(response => {
          console.log(response);
        });
        location.reload();
    }
}

