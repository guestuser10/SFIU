import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaMiembroComponentComponent } from './busqueda-miembro-component/busqueda-miembro-component.component';
import { AngMatImpModule } from '../ang-mat-imp/ang-mat-imp.module';



@NgModule({
  declarations: [
    BusquedaMiembroComponentComponent
  ],
  imports: [
    CommonModule,
    AngMatImpModule,
  ],
  exports: [
    BusquedaMiembroComponentComponent
  ],
})
export class BusquedaModule { }
