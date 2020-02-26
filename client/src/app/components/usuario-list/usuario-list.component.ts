import { Component, OnInit, HostBinding } from '@angular/core';
import { UsuariosService } from "../../services/usuarios.service";

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  usuarios: any = [];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios(){
    this.usuariosService.getUsuarios().subscribe(
      res => {
        this.usuarios = res;
      },
      err => console.error(err)
    );
  }

  deleteUsuario(id_usr: string){
    this.usuariosService.deleteUsuario(id_usr).subscribe(
      res => {
        this.getUsuarios();
      },
      err => console.error(err)
    )
  }

}
