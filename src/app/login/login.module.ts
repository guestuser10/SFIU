import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponentComponent } from './login-component/login-component.component';
import { AngMatImpModule } from '../ang-mat-imp/ang-mat-imp.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    LoginComponentComponent
  ],
  imports: [
    CommonModule,
    AngMatImpModule,
    HttpClientModule,
  ],
  exports:[
    LoginComponentComponent,
  ]
})
export class LoginModule { }
