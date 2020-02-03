import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CicloFormComponent } from './components/ciclo-form/ciclo-form.component';
import { CicloListComponent } from './components/ciclo-list/ciclo-list.component';

import { CiclosService } from './services/ciclos.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CicloFormComponent,
    CicloListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CiclosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }