import { Component, OnInit, HostBinding } from '@angular/core';
import { ModulosService } from "../../services/modulos.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-modulo-list',
  templateUrl: './modulo-list.component.html',
  styleUrls: ['./modulo-list.component.css']
})
export class ModuloListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  modulos: any = [];

  constructor(private modulosService: ModulosService, private router: Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.getModulos();
  }

  getModulos(){
    const id_cic = this.activatedRoute.snapshot.params.id;
    this.modulosService.getModulos(id_cic).subscribe(
      res => {
        this.modulos = res;
      },
      err => console.error(err)
    );
  }

  deleteModulo(id_ciclo: string, id_modulo: string){
      this.modulosService.deleteModulo(id_ciclo, id_modulo).subscribe(
      res => {
        this.getModulos();
      },
      err => console.error(err)
    )
  }

}
