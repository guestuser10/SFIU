import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponentComponent } from './nav-menu-component/nav-menu-component.component';
import { AngMatImpModule } from '../ang-mat-imp/ang-mat-imp.module';
import { NavMenuRoutingModule } from './nav-menu-routing.module';


@NgModule({
  declarations: [
    NavMenuComponentComponent
  ],
  imports: [
    CommonModule,
    AngMatImpModule,
    NavMenuRoutingModule,
  ],
  exports:[
    NavMenuComponentComponent
  ],
})
export class NavMenuModule { }
