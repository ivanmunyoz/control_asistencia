import { Component, OnInit} from '@angular/core';
import { Clase } from "../../models/Clase";
import { ClasesService } from "../../services/clases.service";
import { UsuariosService } from "../../services/usuarios.service";
import { GruposService } from "../../services/grupos.service";
import { CalendariosService } from "../../services/calendarios.service";
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-clase-show',
  templateUrl: './clase-show.component.html',
  styleUrls: ['./clase-show.component.css']
})
export class ClaseShowComponent implements OnInit {

  clase: Clase = {
    id_clase: 0,
    id_calendario: 0,
    nombre: "",
    curso: 0
  }

  calendario;
  usuario;
  grupo;

  constructor(private calendadiosService: CalendariosService, private clasesService: ClasesService, private usuariosService: UsuariosService, private gruposService: GruposService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if(params.id_clas){
      this.getAllCalendarios();
      this.calendario;
      this.getAllGrupos(params.id_clas);
      this.grupo;
      this.getAllUsuarios();
      this.usuario;
      this.clasesService.getClase(params.id_clas)
      .subscribe(
        res => {
          this.clase = res;
        },
        err => console.error(err)
      )

    }
  }

  getAllCalendarios(){
    this.calendadiosService.getCalendarios().subscribe(
      res => {
        this.calendario = res;
      },
      err => console.error(err)
    );
  }

  getAllUsuarios(){
    this.usuariosService.getUsuarios().subscribe(
      res => {
        this.usuario = res;
      },
      err => console.error(err)
    );
  }

  getAllGrupos(value){
    this.gruposService.searchForClase(value).subscribe(
      res => {
        this.grupo = res;
      },
      err => console.error(err)
    );
  }

}
