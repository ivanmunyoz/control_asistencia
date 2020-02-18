import { Component, OnInit, HostBinding } from '@angular/core';
import { Modulo } from '../../models/Modulo';
import { ModulosService } from "../../services/modulos.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-modulo-form',
  templateUrl: './modulo-form.component.html',
  styleUrls: ['./modulo-form.component.css']
})
export class ModuloFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  modulo: Modulo = {
    id_modulo: 0,
    id_ciclo: 0,
    nombre: '',
    descripcion: '',
    horas_totales: 0
  };

  edit: boolean = false;

  constructor(private modulosService: ModulosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    //console.log(params);
    if(params.id && params.id_mod){
      this.modulosService.getModulo(params.id, params.id_mod)
      .subscribe(
        res => {
          //console.log(res)
          this.modulo = res;
          this.edit = true;
        },
        err => console.error(err)
      )

    }
  }

  saveNewModulo(){
    delete this.modulo.id_modulo;
    delete this.modulo.id_ciclo;
    const id_cic = this.activatedRoute.snapshot.params.id;
    this.modulo.id_ciclo = id_cic;
    this.modulosService.saveModulo(this.modulo, id_cic)
    .subscribe(
      res => {
        this.router.navigate(['/ciclos/'+id_cic+'/modulos']);
      },
      err => console.error(err)
    );
  }


  editModulo(id_cic: string, id_modulo: string){
    this.modulosService.updateModulo(id_cic, id_modulo, this.modulo)
      .subscribe(
        res => {
          this.router.navigate(['/ciclos/'+id_cic+'/modulos']);
        },
        err => console.error(err)
      )
  }

}
