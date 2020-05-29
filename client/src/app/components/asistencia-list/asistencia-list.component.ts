import { Component, OnInit, HostBinding } from '@angular/core';
import { AsistenciasService } from "../../services/asistencias.service";
import { UsuariosService } from "../../services/usuarios.service";
import { ClasesService } from "../../services/clases.service";


@Component({
  selector: 'app-asistencia-list',
  templateUrl: './asistencia-list.component.html',
  styleUrls: ['./asistencia-list.component.css']
})
export class AsistenciaListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  asistencia: any = [];

  usuario;
  clase;

  constructor(private asistenciasService: AsistenciasService, private usuariosService: UsuariosService, private clasesService: ClasesService) { }

  ngOnInit() {
    this.getAsistencias();
  }

    getAsistencias(){
      this.getAllClases();
      this.clase;
      this.getAllUsers();
      this.usuario;
      this.asistenciasService.getAsistencias().subscribe(
        res => {
          this.asistencia = res;
        },
        err => console.error(err)
      );
    }

    deleteAsistencia(id_asistencia: string){
      this.asistenciasService.deleteAsistencia(id_asistencia).subscribe(
        res => {
          this.getAsistencias();
        },
        err => console.error(err)
      );
    }

    getAllUsers(){
      this.usuariosService.getUsuarios().subscribe(
        res => {
          this.usuario = res;
        }
      );
    }

    getAllClases(){
      this.clasesService.getClases().subscribe(
        res => {
          this.clase = res;
        }
      );
    }

}
