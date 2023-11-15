import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngMatImpModule } from '../ang-mat-imp/ang-mat-imp.module';
import { MainMenuComponentComponent } from './main-menu-component/main-menu-component.component';
import { NavMenuModule } from '../nav-menu/nav-menu.module';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    MainMenuComponentComponent
  ],
  imports: [
    CommonModule,
    AngMatImpModule,
    NavMenuModule,
    HttpClientModule,
  ],
  exports:[
    MainMenuComponentComponent
  ],
})
export class MainMenuModule { }
