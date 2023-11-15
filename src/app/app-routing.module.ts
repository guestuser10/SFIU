import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponentComponent } from './main-menu/main-menu-component/main-menu-component.component';
import { PerfilComponentComponent } from './perfil/perfil-component/perfil-component.component';

const routes: Routes = [
  { path: 'menu', component: MainMenuComponentComponent },
  { path: 'perfil/:id_creyente', component: PerfilComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
