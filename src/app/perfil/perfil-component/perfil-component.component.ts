import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-component',
  templateUrl: './perfil-component.component.html',
  styleUrls: ['./perfil-component.component.css']
})
export class PerfilComponentComponent {
  problemas = [
    {
      "id": 2,
      "id_creyente": 1,
      "nombre_creyente": "CUCHU",
      "descripcion": "mamarre mamarre",
      "fecha_creacion": "2023-09-24T13:58:03Z",
      "revision": "2023-09-25T13:58:32Z",
      "id_estado": 1,
      "nombre_estado": "PENDIENTE",
      "activo": 1
    },
    {
      "id": 1,
      "id_creyente": 1,
      "nombre_creyente": "CUCHU",
      "descripcion": "Problema de prueba",
      "fecha_creacion": "2023-09-30T12:00:00Z",
      "revision": "2023-10-07T12:00:00Z",
      "id_estado": 1,
      "nombre_estado": "PENDIENTE",
      "activo": 1
    }
  ];

  verDetalle(id: number) {
    console.log('Ver detalle del problema con ID:', id);
  }
}
