import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { env } from 'src/environments/environment';


@Component({
  selector: 'app-add-problema-dialog',
  templateUrl: './add-problema-dialog.component.html',
  styleUrls: ['./add-problema-dialog.component.css']
})
export class AddProblemaDialogComponent implements OnInit {
  problema: any = {
    id: 0,
    id_creyente:"",
    nombre_problema: "",
    descripcion: "",
    id_estado: 1,
    activo: 1,
  }

  constructor(
    public dialogRef: MatDialogRef<AddProblemaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id_creyente: any },
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.problema.id_creyente = this.data.id_creyente; // Usa el id_creyente recibido
  }

  enviarFormulario() {
    console.log(this.problema.id_creyente)
    this.http.post(`${env.apiUrl}/create_problema`, this.problema)
      .subscribe(response => {
        console.log(response);
      });
  }
}
