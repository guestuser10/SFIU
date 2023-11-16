import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavMenuComponentComponent } from './nav-menu-component/nav-menu-component.component';
import { MainMenuComponentComponent } from '../main-menu/main-menu-component/main-menu-component.component';

const routes: Routes = [
  {path:'',
  component: NavMenuComponentComponent,
  children:[
    {path: '', component: MainMenuComponentComponent},
    {path: '', redirectTo: 'menu', pathMatch: 'full'}
  ],
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavMenuRoutingModule { }
