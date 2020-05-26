import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Grupo } from "../models/Grupo";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getGrupos(){
    const command = this.API_URI + '/grupos';
    return this.http.get(command);
  }

  getGrupo(id_grp: string){
    const command = this.API_URI + '/grupos/'+ id_grp;
    //console.log(command);
    return this.http.get(command);
  }

  saveGrupo(ciclo: Grupo){
    const command = this.API_URI + '/grupos';
    return this.http.post(command, ciclo);
  }

  deleteGrupo(id_grp: string){
    const command = this.API_URI + '/grupos/'+ id_grp;
    return this.http.delete(command);
  }

  updateGrupo(id_grp: number, updatedGrupo: Grupo): Observable<Grupo>{
    const command = this.API_URI + '/grupos/' + id_grp;
    return this.http.put(command, updatedGrupo);
  }

  serachForUsuario(id_usr: number){
    const command = this.API_URI + '/grupos/usuario/'+ id_usr;
    return this.http.get(command);
  }

  searchForClase(id_clas: number){
    const command = this.API_URI + '/grupos/clase/'+ id_clas;
    return this.http.get(command);
  }
}
