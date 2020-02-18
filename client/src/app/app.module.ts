import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CicloFormComponent } from './components/ciclo-form/ciclo-form.component';
import { CicloListComponent } from './components/ciclo-list/ciclo-list.component';
import { ModuloListComponent } from './components/modulo-list/modulo-list.component';
import { ModuloFormComponent } from './components/modulo-form/modulo-form.component';

import { CiclosService } from './services/ciclos.service';
import { ModulosService } from './services/modulos.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CicloFormComponent,
    CicloListComponent,
    ModuloListComponent,
    ModuloFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CiclosService,
    ModulosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
