import { Component, OnInit, HostBinding } from '@angular/core';
import { Usuario } from "../../models/Usuario";
import { UsuariosService } from "../../services/usuarios.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

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

  edit: boolean = false;

  constructor(private usuariosServices: UsuariosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if(params.id_usr){
      this.usuariosServices.getUsuario(params.id_usr)
      .subscribe(
        res => {
          this.usuario = res;
          this.edit = true;
        },
        err => console.error(err)
      )

    }
  }

  saveNewUsuario(){

    delete this.usuario.id_usuario;

    this.usuariosServices.saveUsuario(this.usuario)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/usuarios']);
      },
      err => console.error(err)
    );
  }

  updateUsuario(){
    this.usuariosServices.updateUsuario(this.usuario.id_usuario, this.usuario)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    )
  }

}

