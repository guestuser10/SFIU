import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponentComponent } from './main-menu/main-menu-component/main-menu-component.component';
import { PerfilComponentComponent } from './perfil/perfil-component/perfil-component.component';
import { LoginComponentComponent } from './login/login-component/login-component.component';

const routes: Routes = [
  {path: '', component: LoginComponentComponent},
  //{ path: 'menu', component: MainMenuComponentComponent },
  //{ path: 'perfil/:id_creyente', component: PerfilComponentComponent},
  {path: '', loadChildren:() =>import('./nav-menu/nav-menu.module').then((m) => m.NavMenuModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
