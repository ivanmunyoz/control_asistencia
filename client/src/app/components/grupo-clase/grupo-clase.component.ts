import { Component, OnInit, HostBinding } from '@angular/core';
import { GruposService } from "../../services/grupos.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Grupo } from "../../models/Grupo";
import { UsuariosService } from "../../services/usuarios.service";


@Component({
  selector: 'app-grupo-clase',
  templateUrl: './grupo-clase.component.html',
  styleUrls: ['./grupo-clase.component.css']
})
export class GrupoClaseComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  grupo: Grupo = {
    id_grupo: 0,
    id_usuario: 0,
    id_clase: parseInt(this.activatedRoute.snapshot.params.id_clas)

  };

  usuario;

  constructor(private usuariosService: UsuariosService, private gruposService: GruposService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getAllUsuarios();
    this.usuario;
  }

  saveNewGrupo(){
    delete this.grupo.id_grupo;
    this.gruposService.saveGrupo(this.grupo)
    .subscribe(
      res => {
        this.router.navigate(['/clases']);
      },
      err => console.error(err)
    );
  }

  getAllUsuarios(){
    this.usuariosService.getUsuarios().subscribe(
      res => {
        this.usuario = res;
      }
    );
  }

}
