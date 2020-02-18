import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CicloListComponent } from "./components/ciclo-list/ciclo-list.component";
import { CicloFormComponent } from './components/ciclo-form/ciclo-form.component';
import { ModuloListComponent } from './components/modulo-list/modulo-list.component';
import { ModuloFormComponent } from './components/modulo-form/modulo-form.component';


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
    path: 'ciclos/:id/modulos/:id_mod/edit',
    component: ModuloFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
