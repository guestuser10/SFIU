import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddProblemaDialogComponent } from '../add-problema-dialog/add-problema-dialog.component';
import { takeUntil, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-perfil-component',
  templateUrl: './perfil-component.component.html',
  styleUrls: ['./perfil-component.component.css']
})
export class PerfilComponentComponent implements OnInit, OnDestroy {
  problemas: any[] = [];
  nombre: any;
  datospersonales: any[] = [];
  diasDisp: boolean[] = [false, false, false, false, false, false, false];
  private destroy$ = new Subject<void>();

  constructor(
    private http: HttpClient,
    private AR: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.AR.params.pipe(
      takeUntil(this.destroy$),
      switchMap(params => {
        const perfilId = params['id_creyente'];

        return this.http.get<any>(`http://127.0.0.1:8000/perfil/${perfilId}`);
      })
    ).subscribe(
      response => {
        if (response.nombre_creyente) {
          this.nombre = response.nombre_creyente;
        }

        if (response.Problemas && Array.isArray(response.Problemas)) {
          this.problemas = response.Problemas.map((problema: any) => {
            return {
              id: problema.id,
              id_creyente: problema.id_creyente,
              nombre_creyente: problema.nombre_creyente || '',
              descripcion: problema.descripcion,
              fecha_creacion: problema.fecha_creacion,
              revision: problema.revision,
              id_estado: problema.id_estado,
              nombre_estado: problema.nombre_estado,
              activo: problema.activo
            };
          });
        } else {
          this.problemas = response.Problemas ? [response.Problemas] : [];
        }
      },
      error => {
        console.error('Error al obtener datos del perfil:', error);
        // Puedes manejar el error aquí, por ejemplo, mostrando un mensaje al usuario.
      }
    );

    this.AR.params.pipe(
      takeUntil(this.destroy$),
      switchMap(params => this.http.get(`http://127.0.0.1:8000/search_Creyente/${params['id_creyente']}`))
    ).subscribe((data: any) => {
      if (data.Creyente) {
        this.datospersonales = [{
          id: data.Creyente.id,
          nombre: data.Creyente.nombre,
          telefono: data.Creyente.telefono,
          direccion: data.Creyente.direccion,
          dias_disp: data.Creyente.dias_disp,
          id_grupo: data.Creyente.id_grupo,
          activo: data.Creyente.activo
        }];
      } else {
        console.error("No se encontraron datos de Creyente en la respuesta.");
      }
      this.diasDisp = [false, false, false, false, false, false, false];
      this.procesarDiasDisp();
    });
  }

  procesarDiasDisp(): void {
    this.diasDisp = []; // Asegura que el arreglo esté vacío antes de procesar
  
    if (this.datospersonales.length > 0) {
      const diasDispTexto = this.datospersonales[0].dias_disp;
      let i = 0;
  
      // Itera sobre la cadena y marca los checkboxes correspondientes
      while (i < diasDispTexto.length) {
        let subcadena: string;
        let diaDisponible: boolean;
  
        if (diasDispTexto.charAt(i) === 'F') {
          subcadena = diasDispTexto.substr(i, 1);
          diaDisponible = false;
          i += 1; // Salta 1 posición si es 'F'
        } else if (diasDispTexto.substr(i, 4) === 'true') {
          subcadena = diasDispTexto.substr(i, 4);
          diaDisponible = true;
          i += 4; // Salta 4 posiciones si es 'true'
        } else {
          console.error('Formato no reconocido en la posición', i);
          break; // Termina el bucle si el formato no es reconocido
        }
  
        this.diasDisp.push(diaDisponible);
      }
  
      // Imprime la cadena resultante en la consola
      console.log('Cadena procesada:', this.diasDisp.join(', '));
    }
  }  

  obtenerLetraDia(index: number): string {
    switch (index) {
      case 0: return 'L';
      case 1: return 'M';
      case 2: return 'M';
      case 3: return 'J';
      case 4: return 'V';
      case 5: return 'S';
      case 6: return 'D';
      default: return '';
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  verDetalle(id: number) {
    console.log('Ver detalle del problema con ID:', id);
  }

  redirigirAPerfil(idCreyente: number) {
    const rutaPerfil = `/problema/${idCreyente}`;
    console.log(rutaPerfil);
    this.router.navigate([rutaPerfil]);
  }

  DialogAddProblema() {
    const dialogRef = this.dialog.open(AddProblemaDialogComponent, {
      width: '400px',
      data: { id_creyente: this.AR.snapshot.params['id_creyente'] }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
}
