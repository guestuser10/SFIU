import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavMenuModule } from './nav-menu/nav-menu.module';
import { MainMenuModule } from './main-menu/main-menu.module';
import { PerfilModule } from './perfil/perfil.module';
import { AngMatImpModule } from './ang-mat-imp/ang-mat-imp.module';
import { LoginModule } from './login/login.module';
import { BusquedaModule } from './busqueda/busqueda.module';
import { ProblemaModule } from './problema/problema.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavMenuModule,
    MainMenuModule,
    PerfilModule,
    AngMatImpModule,
    LoginModule,
    BusquedaModule,
    ProblemaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  public link: string = "127.0.0.1";
}
