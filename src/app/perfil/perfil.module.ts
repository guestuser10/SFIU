import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponentComponent } from './perfil-component/perfil-component.component';
import { AngMatImpModule } from '../ang-mat-imp/ang-mat-imp.module';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PerfilComponentComponent,
  ],
  imports: [
    CommonModule,
    AngMatImpModule,
    HttpClientModule,
  ],
  exports:[
    PerfilComponentComponent,
  ],
})
export class PerfilModule { }
