import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavMenuModule } from './nav-menu/nav-menu.module';
import { MainMenuModule } from './main-menu/main-menu.module';
import { PerfilModule } from './perfil/perfil.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
