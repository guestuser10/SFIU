import { Component } from '@angular/core';

@Component({
  selector: 'app-main-menu-component',
  templateUrl: './main-menu-component.component.html',
  styleUrls: ['./main-menu-component.component.css']
})
export class MainMenuComponentComponent {
  problemas = [
    {
      "id": 2,
      "id_creyente": 1,
      "nombre_creyente": "CUCHU",
      "descripcion": "mamarre mamarre",
      "fecha_creacion": "2023-09-24T13:58:03Z",
      "revision": "2023-09-25T13:58:32Z",
      "id_estado": 1,
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
      "activo": 1
    }
  ];
  problemasConRevision = this.problemas.map(problema => {
    if (!problema.revision) {
      return { ...problema, descripcionCorta: problema.descripcion.slice(0, 10) };
    }
    return problema;
  });
}
