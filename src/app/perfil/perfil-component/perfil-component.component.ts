import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddProblemaDialogComponent } from '../add-problema-dialog/add-problema-dialog.component';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-perfil-component',
  templateUrl: './perfil-component.component.html',
  styleUrls: ['./perfil-component.component.css']
})
export class PerfilComponentComponent implements OnInit, OnDestroy {
  problemas: any[] = [];
  nombre: any;
  private destroy$ = new Subject<void>();

  constructor(
    private http: HttpClient,
    private AR: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.AR.params.pipe(
      takeUntil(this.destroy$)
    ).subscribe(params => {
      const perfilId = params['id_creyente'];

      this.http.get<any>(`http://127.0.0.1:8000/perfil/${perfilId}`).subscribe(
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
        }
      );
    });
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
