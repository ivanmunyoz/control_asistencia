import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CicloListComponent } from "./components/ciclo-list/ciclo-list.component";
import { CicloFormComponent } from './components/ciclo-form/ciclo-form.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
