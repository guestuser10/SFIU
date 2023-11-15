import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu-component',
  templateUrl: './main-menu-component.component.html',
  styleUrls: ['./main-menu-component.component.css']
})
export class MainMenuComponentComponent implements OnInit {
  problemas: any[] = []; 
  constructor(private router: Router, private http: HttpClient) {}

  problemasConRevision = this.problemas.map(problema => {
    if (!problema.revision) {
      return { ...problema, descripcionCorta: problema.descripcion.slice(0, 10) };
    }
    return problema;
    
  });

  ngOnInit(): void {
    this.http.get<any>('http://127.0.0.1:8000/main_menu/1').subscribe(
      response => {
        // Verifica si la respuesta contiene la clave "Problemas"
        if (response.Problemas) {
          // Transforma el formato del array
          this.problemas = response.Problemas.map((problema: any) => {
            return {
              id: problema.id,
              id_creyente: problema.id_creyente,
              nombre_creyente: problema.nombre_creyente,
              descripcion: problema.descripcion,
              fecha_creacion: problema.fecha_creacion,
              revision: problema.revision,
              id_estado: problema.id_estado,
              activo: problema.activo
            };
          });
        } else {
          // Usa el formato existente si no hay clave "Problemas"
          this.problemas = response;
        }
      },
      error => {
        console.error('Error al obtener datos:', error);
      }
    );
  }

  redirigirAPerfil(idCreyente: number) {
    // Construir la ruta con el id_creyente
    const rutaPerfil = `/perfil/${idCreyente}`;

    // Redirigir a la ruta perfil
    this.router.navigate([rutaPerfil]);
  }

}
