import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavMenuComponentComponent } from './nav-menu-component/nav-menu-component.component';
import { MainMenuComponentComponent } from '../main-menu/main-menu-component/main-menu-component.component';
import { PerfilComponentComponent } from '../perfil/perfil-component/perfil-component.component';
import { BusquedaMiembroComponentComponent } from '../busqueda/busqueda-miembro-component/busqueda-miembro-component.component';
import { BusquedaObreroComponentComponent } from '../busqueda/busqueda-obrero-component/busqueda-obrero-component.component';
import { ProblemaComponentComponent } from '../problema/problema-component/problema-component.component';

const routes: Routes = [
  {path:'',
  component: NavMenuComponentComponent,
  children:[
    {path: 'menu', component: MainMenuComponentComponent},
    {path: 'perfil/:id_creyente', component: PerfilComponentComponent},
    {path: 'miembro/:busqueda', component: BusquedaMiembroComponentComponent},
    {path: 'obrero/:busqueda', component: BusquedaObreroComponentComponent},
    {path: 'problema/:id_problema', component: ProblemaComponentComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
  ],
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavMenuRoutingModule { }
