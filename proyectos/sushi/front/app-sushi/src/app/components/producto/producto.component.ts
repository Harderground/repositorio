import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public items:any[]=[];
  public rolls:any[]=[];
  public var1:any="";
   constructor(private _productosServices: ProductosService) {
    
    }
  
  ngOnInit() {
   this.obtener();
  }
  obtener() {
    this._productosServices.obtenerRolls().subscribe(
      result => {
        console.log(result);
        this.rolls=result;
      },
      error => {
        console.log(error);
        
      }

    );
  }
}
