import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemaComponentComponent } from './problema-component/problema-component.component';
import { AngMatImpModule } from '../ang-mat-imp/ang-mat-imp.module';



@NgModule({
  declarations: [
    ProblemaComponentComponent
  ],
  imports: [
    CommonModule,
    AngMatImpModule,
  ]
})
export class ProblemaModule { }
