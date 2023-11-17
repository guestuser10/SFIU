import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngMatImpModule } from 'src/app/ang-mat-imp/ang-mat-imp.module';
// Define una interfaz para representar la estructura del JSON esperado del servidor
interface MiembroResponse {
  Creyentes?: any[]; // Puedes ajustar esto según la estructura real del JSON
}

@Component({
  selector: 'app-busqueda-miembro-component',
  templateUrl: './busqueda-miembro-component.component.html',
  styleUrls: ['./busqueda-miembro-component.component.css']
})
export class BusquedaMiembroComponentComponent implements OnInit {
  miembros: any[] = []; // Inicializa la variable con un array vacío

  constructor(private http: HttpClient, private AR: ActivatedRoute) { }
  
  ngOnInit(): void {
    var busqueda: string ;

    busqueda = this.AR.snapshot.params['busqueda'];

    this.buscarMiembros(busqueda)
  }
  buscarMiembros(busqueda: string) {
    // Utiliza la URL proporcionada para realizar la búsqueda
    const url = `http://127.0.0.1:8000/miembros/${busqueda}`;
    console.log(url);
    this.http.get<MiembroResponse>(url).subscribe(
      response => {
        // Verifica si la respuesta contiene la clave "Creyentes"
        if (response.Creyentes) {
          // Transforma el formato del array si es necesario
          this.miembros = response.Creyentes.map((creyente: any) => {
            return {
              id: creyente.id,
              nombre: creyente.nombre || '',  // Asigna un valor predeterminado si es undefined
              telefono: creyente.telefono,
              direccion: creyente.direccion,
              dias_disp: creyente.dias_disp,
              id_grupo: creyente.id_grupo,
              activo: creyente.activo
            };
          });
        } else if (Array.isArray(response)) {
          // Usa el formato existente si la respuesta es un array
          this.miembros = response;
        } else {
          // En otros casos, maneja la respuesta según tus necesidades
          console.error('Formato de respuesta no reconocido:', response);
        }
      },
      error => {
        console.error('Error al obtener datos de miembros:', error);
      }
    );
  }

  // Puedes agregar más métodos según sea necesario
}
