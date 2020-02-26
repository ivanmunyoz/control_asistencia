import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Modulo } from "../models/Modulo";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModulosService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getModulos(id: string){
    const command = `${this.API_URI}/ciclos/${id}/modulos`;
    return this.http.get(command);
  }

  getModulo(id: string, id_mod: string){
    const command = `${this.API_URI}/ciclos/${id}/modulos/${id_mod}`;
    return this.http.get(command);
  }

  deleteModulo(id: string, id_mod: string){
    const command = `${this.API_URI}/ciclos/${id}/modulos/${id_mod}`;
    return this.http.delete(command);
  }

  saveModulo(modulo: Modulo, id: string){
    const command = `${this.API_URI}/ciclos/${id}/modulos`;
    return this.http.post(command, modulo);
  }

  updateModulo(id: string, id_mod: string, updatedModulo: Modulo): Observable<Modulo>{
    const command = `${this.API_URI}/ciclos/${id}/modulos/${id_mod}`;
    return this.http.put(command, updatedModulo);
  }

}
