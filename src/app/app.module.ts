import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavMenuModule } from './nav-menu/nav-menu.module';
import { MainMenuModule } from './main-menu/main-menu.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
