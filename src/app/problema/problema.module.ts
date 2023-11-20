import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemaComponentComponent } from './problema-component/problema-component.component';
import { AngMatImpModule } from '../ang-mat-imp/ang-mat-imp.module';
import { ResueltoDialogComponent } from './resuelto-dialog/resuelto-dialog.component';
import { AbiertoDialogComponent } from './abierto-dialog/abierto-dialog.component';
import { RevisionDialogComponent } from './revision-dialog/revision-dialog.component';



@NgModule({
  declarations: [
    ProblemaComponentComponent,
    ResueltoDialogComponent,
    AbiertoDialogComponent,
    RevisionDialogComponent,
  ],
  imports: [
    CommonModule,
    AngMatImpModule,
  ],
  exports: [
    ProblemaComponentComponent,
    ResueltoDialogComponent,
    AbiertoDialogComponent,
    RevisionDialogComponent,
  ],
})
export class ProblemaModule { }
