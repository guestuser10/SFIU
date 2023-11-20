import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-perfil-component',
  templateUrl: './perfil-component.component.html',
  styleUrls: ['./perfil-component.component.css']
})
export class PerfilComponentComponent implements OnInit{
  problemas: any[] = [];

  constructor(private http: HttpClient, private AR:ActivatedRoute, private router: Router,) { }

  ngOnInit(): void {
    // Supongamos que el id del perfil es 1
    var perfilId: string ;

    perfilId = this.AR.snapshot.params['id_creyente'];
    
    
    this.http.get<any>(`http://127.0.0.1:8000/perfil/${perfilId}`).subscribe(
      response => {
        // Verifica si la respuesta contiene la clave "Problemas"
        if (response.Problemas) {
          // Transforma el formato del array
          this.problemas = response.Problemas.map((problema: any) => {
            return {
              id: problema.id,
              id_creyente: problema.id_creyente,
              nombre_creyente: problema.nombre_creyente || '',  // Asigna un valor predeterminado si es undefined
              descripcion: problema.descripcion,
              fecha_creacion: problema.fecha_creacion,
              revision: problema.revision,
              id_estado: problema.id_estado,
              nombre_estado: problema.nombre_estado,
              activo: problema.activo
            };
          });
        } else {
          // Usa el formato existente si no hay clave "Problemas"
          this.problemas = response;
        }
      },
      error => {
        console.error('Error al obtener datos del perfil:', error);
      }
    );
    //console.log(this.problemas)
  }
      
  verDetalle(id: number) {
    console.log('Ver detalle del problema con ID:', id);
  }

  redirigirAPerfil(idCreyente: number) {
    // Construir la ruta con el id_creyente
    const rutaPerfil = `/problema/${idCreyente}`;
    console.log(rutaPerfil);
    // Redirigir a la ruta perfil
    this.router.navigate([rutaPerfil]);
  }
}
