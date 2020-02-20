import { Component, OnInit, HostBinding } from '@angular/core';
import { CalendariosService } from "../../services/calendarios.service";

@Component({
  selector: 'app-calendario-list',
  templateUrl: './calendario-list.component.html',
  styleUrls: ['./calendario-list.component.css']
})
export class CalendarioListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  calendario: any = [];

  constructor(private calendariosService: CalendariosService) { }

  ngOnInit() {
    this.getCalendarios();
  }

  getCalendarios(){
    this.calendariosService.getCalendarios().subscribe(
      res => {
        this.calendario = res;
      },
      err => console.error(err)
    );
  }

  deleteCalendario(id_calendario: string){
    this.calendariosService.deleteCalendario(id_calendario).subscribe(
      res => {
        this.getCalendarios();
      },
      err => console.error(err)
    )
  }

}
