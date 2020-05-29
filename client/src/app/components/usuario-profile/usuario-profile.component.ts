import { Component, OnInit } from '@angular/core';
import { Usuario } from "../../models/Usuario";
import { UsuariosService } from "../../services/usuarios.service";
import { Router, ActivatedRoute } from "@angular/router";
import { AsistenciasService } from "../../services/asistencias.service";
import { ClasesService } from "../../services/clases.service";


@Component({
  selector: 'app-usuario-profile',
  templateUrl: './usuario-profile.component.html',
  styleUrls: ['./usuario-profile.component.css']
})
export class UsuarioProfileComponent implements OnInit {

  constructor(private clasesService: ClasesService, private asistenciasService: AsistenciasService, private usuariosServices: UsuariosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  usuario: Usuario = {
    id_usuario: 0,
    nombre: "",
    primer_apellido: "",
    segundo_apellido: "",
    dni: "",
    email: "",
    tipo: "",
    usuario: "",
    contrasena: ""
  }

  clase;
  asistencia;

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if(params.id_usr){
      this.getAllClases();
      this.clase;
      this.getAllAsistencias();
      this.asistencia;
      this.usuariosServices.getUsuario(params.id_usr)
      .subscribe(
        res => {
          this.usuario = res;
        },
        err => console.error(err)
      )

    }
  }

  getAllAsistencias(){
    this.asistenciasService.getAsistencias().subscribe(
      res => {
        this.asistencia = res;
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
