import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clases/cliente.class';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
public lst_clientes:Cliente[]=[];
  constructor(private _clienteService:ClienteService) { }

  ngOnInit() {
    this.obtenerClientes();
  }
  obtenerClientes(){
    this._clienteService.obtenerClientes().subscribe( 
        result => {
            console.log(result);
            this.lst_clientes = result;
        },
        error =>  {
            console.log(error);
        }
    );
  }
}
