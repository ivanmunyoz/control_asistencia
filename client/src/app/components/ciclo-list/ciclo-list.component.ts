import { Component, OnInit, HostBinding } from '@angular/core';
import { CiclosService } from "../../services/ciclos.service";

@Component({
  selector: 'app-ciclo-list',
  templateUrl: './ciclo-list.component.html',
  styleUrls: ['./ciclo-list.component.css']
})
export class CicloListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  ciclos: any = [];

  constructor(private ciclosService: CiclosService) { }

  ngOnInit() {
    this.getCiclos();
  }

  getCiclos(){
    this.ciclosService.getCiclos().subscribe(
      res => {
        this.ciclos = res;
      },
      err => console.error(err)
    );
  }

  deleteCiclo(id_ciclo: string){
    this.ciclosService.deleteCiclo(id_ciclo).subscribe(
      res => {
        this.getCiclos();
      },
      err => console.error(err)
    )
  }

  editCiclo(id_ciclo: string){
    
  }

}
