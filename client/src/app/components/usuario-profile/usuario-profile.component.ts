import { Component, OnInit } from '@angular/core';
import { Usuario } from "../../models/Usuario";
import { UsuariosService } from "../../services/usuarios.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-usuario-profile',
  templateUrl: './usuario-profile.component.html',
  styleUrls: ['./usuario-profile.component.css']
})
export class UsuarioProfileComponent implements OnInit {

  constructor(private usuariosServices: UsuariosService, private router: Router, private activatedRoute: ActivatedRoute) { }

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

  ngOnInit() {

    const params = this.activatedRoute.snapshot.params;
    if(params.id_usr){
      this.usuariosServices.getUsuario(params.id_usr)
      .subscribe(
        res => {
          this.usuario = res;
        },
        err => console.error(err)
      )

    }
  }

}
