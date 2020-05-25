import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Clase } from "../models/Clase";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getClases(){
    const command = this.API_URI + '/clases';
    return this.http.get(command);
  }

  getClase(id: string){
    const command = this.API_URI + '/clases/'+ id;
    console.log(command);
    return this.http.get(command);
  }

  saveClase(clase: Clase){
    const command = this.API_URI + '/clases';
    return this.http.post(command, clase);
  }

  deleteClase(id: string){
    const command = this.API_URI + '/clases/'+ id;
    return this.http.delete(command);
  }

  updateClase(id: number, updatedClase: Clase): Observable<Clase>{
    const command = this.API_URI + '/clases/' + id;
    return this.http.put(command, updatedClase);
  }
}
