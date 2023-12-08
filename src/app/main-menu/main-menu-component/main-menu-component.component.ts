import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isThisWeek } from 'date-fns';
import { env } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
const apiUrl = env.apiUrl;

@Component({
  selector: 'app-main-menu-component',
  templateUrl: './main-menu-component.component.html',
  styleUrls: ['./main-menu-component.component.css']
})
export class MainMenuComponentComponent implements OnInit {
  problemas: any[] = [];
  gpo: string = '3';
  constructor(
    private router: Router, 
    private http: HttpClient,
    private cookieService: CookieService
    ) {}

  esEstaSemana(fechaRevision: Date, hoy: Date): boolean {
    return isThisWeek(fechaRevision, { weekStartsOn: 1 }); // 1 para que la semana empiece en lunes
  }

  obtenerCategoria(revision: string): string {
    const fechaRevision = new Date(revision);
    const hoy = new Date();

    if (fechaRevision < hoy) {
      return 'CON RETRAZO';
    } else if (this.esEstaSemana(fechaRevision, hoy)) {
      return 'ESTA SEMANA';
    } else {
      return 'MAS TIEMPO';
    }
  }

  ngOnInit(): void {
    this.gpo = this.cookieService.get('groupId');

    this.http.get<any>(`${env.apiUrl}/main_menu/${this.gpo}`).subscribe(
      response => {
        this.problemas = response.Problemas.map((problema: any) => {
          return {
            id: problema.id,
            id_creyente: problema.id_creyente,
            nombre_creyente: problema.nombre_creyente,
            nombre_problema: problema.nombre_problema,
            descripcion: problema.descripcion,
            fecha_creacion: problema.fecha_creacion,
            revision: problema.revision,
            id_estado: problema.id_estado,
            activo: problema.activo,
            categoria: this.obtenerCategoria(problema.revision), // Agrega la categoría aquí
          };
        });
      },
      error => {
        console.error('Error al obtener datos:', error);
      }
    );
  }
  
  getColor(categoria: string): string {
    switch (categoria) {
      case 'CON RETRAZO':
        return 'lightcoral';
      case 'ESTA SEMANA':
        return '';
      case 'MAS TIEMPO':
        return '';
      default:
        return '';
    }
  }  

  redirigirAPerfil(idCreyente: number) {
    const rutaPerfil = `/perfil/${idCreyente}`;
    this.router.navigate([rutaPerfil]);
  }

  problemasConCategoria(categoria: string): any[] {
    return this.problemas.filter(problema => problema.categoria === categoria);
  }
}
