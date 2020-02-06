import { Component, OnInit, HostBinding } from '@angular/core';
import { Ciclo } from "../../models/Ciclo";
import { CiclosService } from "../../services/ciclos.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-ciclo-form',
  templateUrl: './ciclo-form.component.html',
  styleUrls: ['./ciclo-form.component.css']
})
export class CicloFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  ciclo: Ciclo = {
    id_ciclo: 0,
    nombre: "",
    descripcion: ""
  }

  edit: boolean = false;

  constructor(private ciclosServices: CiclosService, private router: Router, private activatedRoute: ActivatedRoute  ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    console.log(params);
    if(params.id){
      this.ciclosServices.getCiclo(params.id)
      .subscribe(
        res => {
          console.log(res)
          this.ciclo = res;
          this.edit = true;
        },
        err => console.error(err)
      )

    }
  }

  saveNewCiclo(){

    delete this.ciclo.id_ciclo;

    this.ciclosServices.saveCiclo(this.ciclo)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/ciclos']);
      },
      err => console.error(err)
    );
  }

  updateCiclo(){

    this.ciclosServices.updateCiclo(this.ciclo.id_ciclo, this.ciclo)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/ciclos']);
      },
      err => console.error(err)
    )
  }

}
