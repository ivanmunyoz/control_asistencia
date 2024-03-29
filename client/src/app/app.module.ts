import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CicloFormComponent } from './components/ciclo-form/ciclo-form.component';
import { CicloListComponent } from './components/ciclo-list/ciclo-list.component';
import { ModuloListComponent } from './components/modulo-list/modulo-list.component';
import { ModuloFormComponent } from './components/modulo-form/modulo-form.component';

import { CiclosService } from './services/ciclos.service';
import { ModulosService } from './services/modulos.service';
import { CalendarioFormComponent } from './components/calendario-form/calendario-form.component';
import { CalendarioListComponent } from './components/calendario-list/calendario-list.component';
import { DatePipe } from '@angular/common';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { ClaseListComponent } from './components/clase-list/clase-list.component';
import { ClaseFormComponent } from './components/clase-form/clase-form.component';
import { UsuarioProfileComponent } from './components/usuario-profile/usuario-profile.component';
import { AsistenciaListComponent } from './components/asistencia-list/asistencia-list.component';
import { AsistenciaFormComponent } from './components/asistencia-form/asistencia-form.component';
import { GrupoClaseComponent } from './components/grupo-clase/grupo-clase.component';
import { ClaseShowComponent } from './components/clase-show/clase-show.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CicloFormComponent,
    CicloListComponent,
    ModuloListComponent,
    ModuloFormComponent,
    CalendarioFormComponent,
    CalendarioListComponent,
    UsuarioListComponent,
    UsuarioFormComponent,
    ClaseListComponent,
    ClaseFormComponent,
    UsuarioProfileComponent,
    AsistenciaListComponent,
    AsistenciaFormComponent,
    GrupoClaseComponent,
    ClaseShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CiclosService,
    ModulosService,
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
