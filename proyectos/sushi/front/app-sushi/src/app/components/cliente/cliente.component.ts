import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clases/cliente.class';
import { ClienteService } from '../../services/cliente.service';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
public lst_clientes:Cliente[]=[];
public cliente: Cliente;
public nom_cliente: string;
public dir_cliente:string;
public fono_cliente: string;
public email_cliente:string;
  constructor(private _clienteService:ClienteService) { }

  ngOnInit() {
    this.obtenerClientes();
    this.cliente= new Cliente("","","",0,"");
    this.nom_cliente="";
    this.dir_cliente="";
    this.fono_cliente= "";
    this.email_cliente= "";
  
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

  insertarCliente(){

    this.cliente.nom_cliente=this.nom_cliente;
    this.cliente.direccion= this.dir_cliente;
    this.cliente.email    = this.email_cliente;
    this.cliente.fono= this.fono_cliente;

    this._clienteService.insertarClientes(this.cliente).subscribe(
      result => {
        console.log(result);
        
    },
    error =>  {
        console.log(error);
    }
    );
  }
  modificarCliente(){
    
  }
}
