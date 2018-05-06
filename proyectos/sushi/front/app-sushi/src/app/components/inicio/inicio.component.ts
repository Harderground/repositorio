import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';
import { NgxPaginationModule } from 'ngx-pagination'
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
 public items:any[]=[];
 public var1:any="";
  constructor(private _servicio: ServicioService) { }

  ngOnInit() {
    this.obtener();
  }
  obtener() {
    this._servicio.urlGetPrueba().subscribe(
      result => {
        console.log(result);
        this.items = result;
      },
      error => {
        console.log(error);
      }
    );
  }
}
