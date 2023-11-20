import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ResueltoDialogComponent } from '../resuelto-dialog/resuelto-dialog.component';
import { AbiertoDialogComponent } from '../abierto-dialog/abierto-dialog.component';
import { RevisionDialogComponent } from '../revision-dialog/revision-dialog.component';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-problema-component',
  templateUrl: './problema-component.component.html',
  styleUrls: ['./problema-component.component.css']
})
export class ProblemaComponentComponent implements OnInit {
  problema: any = {};
  mensajes: any[] = [];

  mensajeChunks: any[] = [];

  newMessage: string = "";

  private baseUrl = 'http://127.0.0.1:8000';

  constructor(
    private http: HttpClient, 
    private AR: ActivatedRoute,
    private dialog: MatDialog,
    ) {}
  
  
  
  ngOnInit(): void {
    var problemaid: string ;
    problemaid = this.AR.snapshot.params['id_problema'];
    this.http.get<any>(`http://127.0.0.1:8000/conversacion/${problemaid}`).subscribe(
      response => {
        if (response.problema) {
          this.problema = {
            id: response.problema.id,
            id_creyente: response.problema.id_creyente,
            nombre_creyente: response.problema.nombre_creyente,
            nombre_problema: response.problema.nombre_problema,
            descripcion: response.problema.descripcion,
            fecha_creacion: response.problema.fecha_creacion,
            revision: response.problema.revision,
            id_estado: response.problema.id_estado,
            activo: response.problema.activo
          };
        }

        if (response.mensajes) {
          this.mensajes = response.mensajes.map((mensaje: any) => ({
            id: mensaje.id,
            mensaje: mensaje.mensaje,
            fecha: mensaje.fecha,
            id_problema: mensaje.id_problema,
            activo: mensaje.activo
          }));
          this.createMessageChunks();
        } else {
          this.mensajes = [{ id: 0, mensaje: "no hay mensajes", fecha: "", id_problema: 0, activo: 0 }];
        }

        // Move console.log inside the subscribe callback
      },
      error => {
        console.error('Error al obtener datos:', error);
      }
    );
  }

  private createMessageChunks() {
    this.mensajeChunks = this.mensajes.map((mensaje: any) => {
      const chunks = [];
      const message = mensaje.mensaje;
      const screenWidth = window.innerWidth;
      const chunkLength = Math.floor(screenWidth / 13); // Ajusta según tus necesidades
  
      let start = 0;
      let end = chunkLength;
  
      while (end < message.length) {
        // Busca el último espacio en blanco dentro del límite
        while (end > start && message[end] !== ' ' && message[end] !== '\n') {
          end--;
        }
  
        // Si no se encontró un espacio, corta en el límite
        if (end === start) {
          chunks.push(message.slice(start, end));
          start = end + 1;
          end = start + chunkLength;
        } else {
          // Corta en el último espacio
          chunks.push(message.slice(start, end));
          start = end + 1;
          end = start + chunkLength;
        }
      }
  
      // Agrega el fragmento final
      if (start < message.length) {
        chunks.push(message.slice(start));
      }
  
      return chunks;
    });
  }
  

  addMessage() {
    const newMessageObject = {
      mensaje: this.newMessage,
      id_problema: this.problema.id, // Adjust this based on your actual data structure
      activo: 1 // Adjust this based on your actual requirements
    };

    // Assuming you have an endpoint for adding messages, replace 'your-api-endpoint' with the actual URL
    this.http.post('http://127.0.0.1:8000/create_mensaje', newMessageObject).subscribe(
      response => {
        //refresh 
        this.ngOnInit();
      },
      error => {
        console.error('Error adding new message:', error);
      }
    );
  }
  
  openResueltoDialog(): void {
    const dialogRef = this.dialog.open(ResueltoDialogComponent, {

      width: '250px',
    });
  }
  openAbiertoDialog(): void {
    const dialogRef = this.dialog.open(AbiertoDialogComponent, {

      width: '250px',
    });
  }
  openDTPDialog(jid: number): void {

    const dialogRef = this.dialog.open(RevisionDialogComponent, {
      width: '300px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.date) {
        console.log('Fecha seleccionada:', result.date);
        const formattedDate = this.formatDateToCustomString(result.date);

        this.http.put(`${this.baseUrl}/revision/${jid}/${formattedDate}`, {}).subscribe(
          response => {
            console.log(response+formattedDate);         
          },
          error => {
            console.error('Error al cambiar el estado', error);
            // Manejo de errores
          }
        );
        
      } else {
        console.log('El diálogo se cerró sin seleccionar una fecha.');
      }
    });

  }
  CambiarEstado(jid:number, estadoId:number): void {
    estadoId = estadoId === 1 ? 2 : 1;
    this.ngOnInit
    
    this.http.put(`${this.baseUrl}/estado/${jid}/${estadoId}`, {}).subscribe(
      response => {
        if(estadoId === 2){
          this.openResueltoDialog();
          return location.reload();;
        }
        this.openAbiertoDialog();
        location.reload();       
      },
      error => {
        console.error('Error al cambiar el estado', error);
        // Manejo de errores
      }
    );
  }

  formatDateToCustomString(date: Date): string {
    const year = date.getUTCFullYear();
    const month = this.padZero(date.getUTCMonth() + 1);
    const day = this.padZero(date.getUTCDate());
    const hours = this.padZero(date.getUTCHours());
    const minutes = this.padZero(date.getUTCMinutes());
    const seconds = this.padZero(date.getUTCSeconds());
  
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
  }
  
  padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}
