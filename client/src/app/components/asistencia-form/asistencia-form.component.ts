import { Component, OnInit, HostBinding } from '@angular/core';
import { Asistencia } from "../../models/Asistencia";
import { AsistenciasService } from "../../services/asistencias.service";
import { Router, ActivatedRoute } from "@angular/router";
import { DatePipe } from "@angular/common";
import { UsuariosService } from "../../services/usuarios.service";
import { ClasesService } from "../../services/clases.service";
@Component({
  selector: 'app-asistencia-form',
  templateUrl: './asistencia-form.component.html',
  styleUrls: ['./asistencia-form.component.css']
})
export class AsistenciaFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  asistencia: Asistencia = {
    id_asistencia: 0,
    id_alumno: 0,
    id_clase: 0,
    falta: false,
    retraso: false,
    justificada: false,
    fecha: "",
    hora: new Date()
  }

  clase;
  usuario;

  edit: boolean = false;

  constructor(private asistenciasService: AsistenciasService, private clasesService: ClasesService, private usuariosServices: UsuariosService, private router: Router, private activatedRoute: ActivatedRoute, private datepipe: DatePipe) { }

  ngOnInit() {
    this.getAllClases();
    this.clase;
    this.getAllUsers();
    this.usuario;
    const params = this.activatedRoute.snapshot.params;

    if(params.id_asis){
      this.asistenciasService.getAsistencia(params.id_asis).subscribe(
        res => {
          this.asistencia = res;
          this.asistencia.fecha = new String(this.datepipe.transform(new Date(), 'yyyy-MM-dd'));
          this.asistencia.hora = new Date();
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }

  saveNewAsistencia(){
    delete this.asistencia.id_asistencia;
    this.asistencia.fecha = new String(this.datepipe.transform(new Date(), 'yyyy-MM-dd'));
    this.asistencia.hora = new Date();
    this.asistenciasService.saveAsistencia(this.asistencia).subscribe(
      res => {
        this.router.navigate(['/asistencias'])
      }
    );
  }

  updateAsistencia(){
    this.asistenciasService.updateAsistencia(this.asistencia.id_asistencia, this.asistencia).subscribe(
      res => {

      },
      err => console.error(err)
    );
  }

  getAllUsers(){
    this.usuariosServices.getUsuarios().subscribe(
      res => {
        this.usuario = res;
      },
      err => console.error(err)
    );
  }

  getAllClases(){
    this.clasesService.getClases().subscribe(
      res => {
        this.clase = res;
      }
    );
  }

  checkJustificar(){
      this.asistencia.justificada = !this.asistencia.justificada;
  }

  checkFalta(){
    if(this.asistencia.falta == false && this.asistencia.retraso == false){
      this.asistencia.falta = true;
    }else{
      this.asistencia.falta = true;
      this.asistencia.retraso = false;
    }
}

checkRetraso(){
  if(this.asistencia.falta == false && this.asistencia.retraso == false){
    this.asistencia.retraso = true;
  }else{
    this.asistencia.retraso = true;
    this.asistencia.falta = false;
  }
}

}
