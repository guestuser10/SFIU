import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { env } from 'src/environments/environment';
const apiUrl = env.apiUrl;

interface MiembroResponse {
  Creyentes?: any[];
}

@Component({
  selector: 'app-busqueda-miembro-component',
  templateUrl: './busqueda-miembro-component.component.html',
  styleUrls: ['./busqueda-miembro-component.component.css']
})
export class BusquedaMiembroComponentComponent implements OnInit {
  miembros: any[] = [];
  busqueda: string = '';
  orden: 'asc' | 'desc' = 'asc';

  constructor(private http: HttpClient, private AR: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Extrae el valor de 'busqueda' de la URL
    this.busqueda = this.AR.snapshot.params['busqueda'];

    // Inicia la búsqueda al cargar el componente
    this.buscarMiembros();
  }

  buscarMiembros() {
    const url = `http://127.0.0.1:8000/miembros/${this.busqueda}`;
    this.http.get<MiembroResponse>(url).subscribe(
      response => {
        if (response.Creyentes) {
          this.miembros = response.Creyentes.map((creyente: any) => {
            return {
              id: creyente.id,
              nombre: creyente.nombre || '',
              telefono: creyente.telefono,
              direccion: creyente.direccion,
              dias_disp: creyente.dias_disp,
              id_grupo: creyente.id_grupo,
              activo: creyente.activo
            };
          });

          // Aplica el orden
          this.miembros.sort((a, b) => {
            const factor = (this.orden === 'asc') ? 1 : -1;
            return factor * a.nombre.localeCompare(b.nombre);
          });

        } else if (Array.isArray(response)) {
          this.miembros = response;

          // Aplica el orden
          this.miembros.sort((a, b) => {
            const factor = (this.orden === 'asc') ? 1 : -1;
            return factor * a.nombre.localeCompare(b.nombre);
          });

        } else {
          console.error('Formato de respuesta no reconocido:', response);
        }
      },
      error => {
        console.error('Error al obtener datos de miembros:', error);
        // Agrega lógica adicional para manejar errores, por ejemplo, mostrar un mensaje al usuario.
      }
    );
  }

  cambiarOrden(nuevoOrden: 'asc' | 'desc') {
    this.orden = nuevoOrden;
    this.ngOnInit();
  }

  redirigirAPerfil(idCreyente: number) {
    const rutaPerfil = `/perfil/${idCreyente}`;
    this.router.navigate([rutaPerfil]);
  }
}
