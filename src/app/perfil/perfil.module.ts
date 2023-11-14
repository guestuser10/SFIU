import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponentComponent } from './perfil-component/perfil-component.component';
import { AngMatImpModule } from '../ang-mat-imp/ang-mat-imp.module';



@NgModule({
  declarations: [
    PerfilComponentComponent,
  ],
  imports: [
    CommonModule,
    AngMatImpModule,
  ],
  exports:[
    PerfilComponentComponent,
  ],
})
export class PerfilModule { }
