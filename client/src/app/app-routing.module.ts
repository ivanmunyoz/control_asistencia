import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CicloListComponent } from "./components/ciclo-list/ciclo-list.component";
import { CicloFormComponent } from './components/ciclo-form/ciclo-form.component';
import { ModuloListComponent } from './components/modulo-list/modulo-list.component';
import { ModuloFormComponent } from './components/modulo-form/modulo-form.component';
import { CalendarioListComponent } from './components/calendario-list/calendario-list.component';
import { CalendarioFormComponent } from './components/calendario-form/calendario-form.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { ClaseListComponent } from './components/clase-list/clase-list.component';
import { ClaseFormComponent } from './components/clase-form/clase-form.component';
import { UsuarioProfileComponent } from './components/usuario-profile/usuario-profile.component';
// import { GrupoListComponent } from './components/grupo-list/grupo-list.component';
// import { GrupoFormComponent } from './components/grupo-form/grupo-form.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'ciclos',
    component: CicloListComponent,
  },
  {
    path: 'ciclos/add',
    component: CicloFormComponent
  },
  {
    path: 'ciclos/edit/:id',
    component: CicloFormComponent
  },
  {
    path: 'ciclos/:id/modulos',
    component: ModuloListComponent
  },
  {
    path: 'ciclos/:id/modulos/add',
    component: ModuloFormComponent
  },
  {
    path: 'ciclos/:id/modulos/edit/:id_mod',
    component: ModuloFormComponent
  },
  {
    path: 'calendarios',
    component: CalendarioListComponent,
  },
  {
    path: 'calendarios/add',
    component: CalendarioFormComponent
  },
  {
    path: 'calendarios/edit/:id_cal',
    component: CalendarioFormComponent
  },
  {
    path: 'usuarios',
    component: UsuarioListComponent,
  },
  {
    path: 'usuarios/add',
    component: UsuarioFormComponent
  },
  {
    path: 'usuarios/edit/:id_usr',
    component: UsuarioFormComponent
  },
  {
    path: 'usuarios/perfil/:id_usr',
    component: UsuarioProfileComponent
  },
  {
    path: 'clases',
    component: ClaseListComponent,
  },
  {
    path: 'clases/add',
    component: ClaseFormComponent
  },
  {
    path: 'clases/edit/:id_clas',
    component: ClaseFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
