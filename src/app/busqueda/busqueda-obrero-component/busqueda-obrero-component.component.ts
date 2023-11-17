import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Define una interfaz para representar la estructura del JSON esperado del servidor
interface ObreroResponse {
  Obreros?: any[]; // Actualiza el nombre según la estructura real del JSON
}

@Component({
  selector: 'app-busqueda-obrero-component', // Actualiza el nombre del selector
  templateUrl: './busqueda-obrero-component.component.html',
  styleUrls: ['./busqueda-obrero-component.component.css']
})
export class BusquedaObreroComponentComponent implements OnInit { // Actualiza el nombre del componente
  obreros: any[] = []; // Actualiza el nombre de la variable

  constructor(private http: HttpClient, private AR: ActivatedRoute, private router:Router) { }
  
  ngOnInit(): void {
    var busqueda: string ;

    busqueda = this.AR.snapshot.params['busqueda'];

    this.buscarObreros(busqueda); // Actualiza el nombre del método
  }

  buscarObreros(busqueda: string) {
    // Utiliza la URL proporcionada para realizar la búsqueda
    const url = `http://127.0.0.1:8000/obreros/${busqueda}`;
    console.log(url);
    this.http.get<ObreroResponse>(url).subscribe(
      response => {
        // Verifica si la respuesta contiene la clave "Obreros"
        if (response.Obreros) {
          // Transforma el formato del array si es necesario
          this.obreros = response.Obreros.map((obrero: any) => {
            return {
              id: obrero.id,
              nombre: obrero.nombre || '',  // Asigna un valor predeterminado si es undefined
              telefono: obrero.telefono,
              direccion: obrero.direccion,
              id_grupo: obrero.id_grupo,
              activo: obrero.activo
            };
          });
        } else if (Array.isArray(response)) {
          // Usa el formato existente si la respuesta es un array
          this.obreros = response;
        } else {
          // En otros casos, maneja la respuesta según tus necesidades
          console.error('Formato de respuesta no reconocido:', response);
        }
      },
      error => {
        console.error('Error al obtener datos de obreros:', error);
      }
    );
  }

  
}
