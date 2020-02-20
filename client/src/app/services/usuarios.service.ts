import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Usuario } from "../models/Usuario";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUsuarios(){
    var command = this.API_URI + '/usuarios';
    return this.http.get(command);
  }

  getUsuario(id_usr: string){
    var command = this.API_URI + '/usuarios/'+ id_usr;
    console.log(command);
    return this.http.get(command);
  }

  saveUsuario(usuario: Usuario){
    var command = this.API_URI + '/usuarios';
    return this.http.post(command, usuario);
  }

  deleteUsuario(id_usr: string){
    var command = this.API_URI + '/usuarios/'+ id_usr;
    return this.http.delete(command);
  }

  updateUsuario(id_usr: string|number, updatedUsuario: Usuario): Observable<Usuario>{
    return this.http.put(`${this.API_URI}/usuarios/${id_usr}`, updatedUsuario);
  }

}
