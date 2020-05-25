import { Component, OnInit, HostBinding } from '@angular/core';
import { ClasesService } from "../../services/clases.service";

@Component({
  selector: 'app-clase-list',
  templateUrl: './clase-list.component.html',
  styleUrls: ['./clase-list.component.css']
})
export class ClaseListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  clases: any = [];

  constructor(private clasesService: ClasesService) { }

  ngOnInit() {
    this.getClases();
  }

  getClases(){
    this.clasesService.getClases().subscribe(
      res => {
        this.clases = res;
      },
      err => console.error(err)
    );
  }

  deleteClase(id_clas: string){
    this.clasesService.deleteClase(id_clas).subscribe(
      res => {
        this.getClases();
      },
      err => console.error(err)
    )
  }

}
