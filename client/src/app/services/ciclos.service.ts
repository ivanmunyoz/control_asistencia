import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Ciclo } from "../models/Ciclo";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CiclosService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getCiclos(){
    const command = this.API_URI + '/ciclos';
    return this.http.get(command);
  }

  getCiclo(id: string){
    const command = this.API_URI + '/ciclos/'+ id;
    console.log(command);
    return this.http.get(command);
  }

  saveCiclo(ciclo: Ciclo){
    const command = this.API_URI + '/ciclos';
    return this.http.post(command, ciclo);
  }

  deleteCiclo(id: string){
    const command = this.API_URI + '/ciclos/'+ id;
    return this.http.delete(command);
  }

  updateCiclo(id: string|number, updatedCiclo: Ciclo): Observable<Ciclo>{
    const command = this.API_URI + '/ciclos/' + id;
    return this.http.put(command, updatedCiclo);
  }

}
