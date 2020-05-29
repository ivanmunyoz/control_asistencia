import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Asistencia } from "../models/Asistencia";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AsistenciasService {

  private subject = new Subject<any>();
  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAsistencias(){
    var command = this.API_URI + '/asistencias';
    return this.http.get(command);
  }

  getAsistencia(id_asis: string){
    var command = this.API_URI + '/asistencias/'+ id_asis;
    return this.http.get(command);
  }

  saveAsistencia(asistencia: Asistencia){
    var command = this.API_URI + '/asistencias';
    return this.http.post(command, asistencia);
  }

  deleteAsistencia(id_asis: string){
    var command = this.API_URI + '/asistencias/'+ id_asis;
    return this.http.delete(command);
  }

  updateAsistencia(id_asis: string|number, updatedAsistencia: Asistencia): Observable<Asistencia>{
    return this.http.put(`${this.API_URI}/asistencia/${id_asis}`, updatedAsistencia);
  }

  getAsistenciaByUser(id_usr: string){
    var command = this.API_URI + '/asistencias/usuario/'+ id_usr;
    return this.http.get(command);
  }

  getAsistenciaByClass(id_clas: string){
    var command = this.API_URI + '/asistencias/clase/'+ id_clas;
    return this.http.get(command);
  }
}
