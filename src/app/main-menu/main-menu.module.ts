import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngMatImpModule } from '../ang-mat-imp/ang-mat-imp.module';
import { MainMenuComponentComponent } from './main-menu-component/main-menu-component.component';

@NgModule({
  declarations: [
    MainMenuComponentComponent
  ],
  imports: [
    CommonModule,
    AngMatImpModule,
  ],
  exports:[
    MainMenuComponentComponent
  ],
})
export class MainMenuModule { }
