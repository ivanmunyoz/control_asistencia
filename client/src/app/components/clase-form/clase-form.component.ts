import { Component, OnInit, HostBinding } from '@angular/core';
import { ClasesService } from "../../services/clases.service";
import { Clase } from "../../models/Clase";
import { Router, ActivatedRoute } from "@angular/router";
import { CalendariosService } from "../../services/calendarios.service";
import { Calendario } from "../../models/Calendario";


@Component({
  selector: 'app-clase-form',
  templateUrl: './clase-form.component.html',
  styleUrls: ['./clase-form.component.css']
})

export class ClaseFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  clase: Clase = {
    id_clase: 0,
    id_calendario: 1,
    nombre: "",
    curso: 1
  }
  calendario;
  edit:boolean = false;

  constructor(private clasesServices: ClasesService, private calendariosServices: CalendariosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const cal = this.getAllCalendarios();
    this.calendario;
    const params = this.activatedRoute.snapshot.params;
    if(params.id_clas){
      this.clasesServices.getClase(params.id_clas)
      .subscribe(
        res => {
          this.clase = res;
          this.edit = true;
        },
        err => console.error(err)
      )

    }

  }

  saveNewClase(){

    delete this.clase.id_clase;

    this.clasesServices.saveClase(this.clase)
    .subscribe(
      res => {
        this.router.navigate(['/clases']);
      },
      err => console.error(err)
    );
  }

  updateClase(){
    console.log(this.clase.id_calendario);
    this.clasesServices.updateClase(this.clase.id_clase, this.clase)
    .subscribe(
      res => {
        this.router.navigate(['/clases']);
      },
      err => console.error(err)
    )
  }

  getAllCalendarios(){
    const prueba = this.calendariosServices.getCalendarios().subscribe(
      res=>{
        this.calendario = res;
      },
      err => console.error(err)
    )

  }

}
