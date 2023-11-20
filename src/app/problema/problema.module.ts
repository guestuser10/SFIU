import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemaComponentComponent } from './problema-component/problema-component.component';
import { AngMatImpModule } from '../ang-mat-imp/ang-mat-imp.module';
import { ResueltoDialogComponent } from './resuelto-dialog/resuelto-dialog.component';
import { AbiertoDialogComponent } from './abierto-dialog/abierto-dialog.component';



@NgModule({
  declarations: [
    ProblemaComponentComponent,
    ResueltoDialogComponent,
    AbiertoDialogComponent,
  ],
  imports: [
    CommonModule,
    AngMatImpModule,
  ],
  exports: [
    ProblemaComponentComponent,
    ResueltoDialogComponent,
    AbiertoDialogComponent,
  ],
})
export class ProblemaModule { }
