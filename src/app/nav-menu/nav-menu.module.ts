import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponentComponent } from './nav-menu-component/nav-menu-component.component';
import { AngMatImpModule } from '../ang-mat-imp/ang-mat-imp.module';



@NgModule({
  declarations: [
    NavMenuComponentComponent
  ],
  imports: [
    CommonModule,
    AngMatImpModule,
  ],
  exports:[
    NavMenuComponentComponent
  ],
})
export class NavMenuModule { }
