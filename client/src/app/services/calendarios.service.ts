import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Calendario } from "../models/Calendario";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CalendariosService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getCalendarios(){
    var command = this.API_URI + '/calendarios';
    return this.http.get(command);
  }

  getCalendario(id_cal: string){
    var command = this.API_URI + '/calendarios/'+ id_cal;
    return this.http.get(command);
  }

  saveCalendario(calendario: Calendario){
    var command = this.API_URI + '/calendarios';
    return this.http.post(command, calendario);
  }

  deleteCalendario(id_cal: string){
    var command = this.API_URI + '/calendarios/'+ id_cal;
    return this.http.delete(command);
  }

  updateCalendario(id_cal: string|number, updatedCalendario: Calendario): Observable<Calendario>{
    return this.http.put(`${this.API_URI}/calendarios/${id_cal}`, updatedCalendario);
  }
}
