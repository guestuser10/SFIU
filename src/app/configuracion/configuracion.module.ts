import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracionComponentComponent } from './configuracion-component/configuracion-component.component';
import { AngMatImpModule } from '../ang-mat-imp/ang-mat-imp.module';
import { AddGrupoDialogComponent } from './add-grupo-dialog/add-grupo-dialog.component';
import { FAQComponentComponent } from './faq-component/faq-component.component';


@NgModule({
  declarations: [
    ConfiguracionComponentComponent,
    AddGrupoDialogComponent,
    FAQComponentComponent
  ],
  imports: [
    CommonModule,
    AngMatImpModule
  ]
})
export class ConfiguracionModule { }
