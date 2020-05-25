import { Component, OnInit, HostBinding } from '@angular/core';
import { Calendario } from "../../models/Calendario";
import { CalendariosService } from "../../services/calendarios.service";
import { Router, ActivatedRoute } from "@angular/router";
import { formatDate, DatePipe } from '@angular/common';

@Component({
  selector: 'app-calendario-form',
  templateUrl: './calendario-form.component.html',
  styleUrls: ['./calendario-form.component.css']
})
export class CalendarioFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  calendario: Calendario = {
    id_calendario: 0,
    fecha_fin: "",
    fecha_inicio: "",
    hora_inicio_dia: "",
    hora_fin_dia: ""
  }

  edit: boolean = false;

  constructor(private calendariosService: CalendariosService, private router: Router, private activatedRoute: ActivatedRoute, private datepipe: DatePipe) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    //console.log(params)
    if(params.id_cal){
      this.calendariosService.getCalendario(params.id_cal)
      .subscribe(
        res => {
          this.calendario = res;
          this.calendario.fecha_inicio = new String(this.datepipe.transform(this.calendario.fecha_inicio, 'yyyy-MM-dd'));
          this.calendario.fecha_fin = new String(this.datepipe.transform(this.calendario.fecha_fin, 'yyyy-MM-dd'));
          console.log(this.calendario.fecha_fin);
          this.edit = true;
        },
        err => console.error(err)
      )

    }
  }

  saveNewCalendario(){

    delete this.calendario.id_calendario;

    this.calendariosService.saveCalendario(this.calendario)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/calendarios']);
      },
      err => console.error(err)
    );
  }

  updateCalendario(){
    this.calendariosService.updateCalendario(this.calendario.id_calendario, this.calendario)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    )
  }

}
