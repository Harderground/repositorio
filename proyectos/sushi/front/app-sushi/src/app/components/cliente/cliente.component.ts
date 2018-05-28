import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clases/cliente.class';
import { ClienteService } from '../../services/cliente.service';
import { tick } from '@angular/core/testing';
import { Mensaje } from '../../clases/mensaje.class';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  public lst_clientes: Cliente[] = [];
  public cliente_agregar: Cliente;
  public cliente_modificar: Cliente;
  public mensaje:Mensaje= new Mensaje();
  public msgSuccess:any;
  public msgError:any;
  public estadoBoton:any;
  public confirmacion:any;

  constructor(private _clienteService: ClienteService) {
    this.cliente_agregar = new Cliente("", "", "", "", "");
    this.cliente_modificar = new Cliente("", "", "", "", "");
    this.msgSuccess="";
    this.msgError="";
    this.estadoBoton=1;
    this.confirmacion="";

  }

  ngOnInit() {
    this.obtenerClientes();


  }
  obtenerClientes() {
    this._clienteService.obtenerClientes().subscribe(
      result => {
        console.log(result);
        this.lst_clientes = result;
      },
      error => {
        console.log(error);
        this.msgError= this.mensaje.Error_Conexion();
      }
    );
  }

  insertarCliente() {
    
    this.estadoBoton=2;
    this._clienteService.insertarClientes(this.cliente_agregar).subscribe(
      result => {
        console.log(result);
        if (result==true){
          this.msgSuccess= this.mensaje.Success();
          this.obtenerClientes();
          this.estadoBoton=1;
          this.cliente_agregar = new Cliente("", "", "", "", "");
          $("#BtnCancelarAgregar").click();
        }else{
          this.msgError=this.mensaje.Error_BackEnd();
          this.estadoBoton=1;
        }
        
      },
      error => {
        console.log(error);
        this.msgError= this.mensaje.Error_Conexion();

      }
    );
    
  }
  obtenerCliente(id: any) {
    console.log(id);
    this._clienteService.obtenerCliente(id).subscribe(

      result => {
        console.log(result);
        this.cliente_modificar = result;

      },
      error => {
        console.log(error);
        this.msgError= this.mensaje.Error_Conexion();
      }
    );

  }
  modificarCliente() {
    this._clienteService.modificarCliente(this.cliente_modificar).subscribe(
      result => {
        console.log(result);
        this.obtenerClientes();
      },
      error => {
        console.log(error);
        this.msgError= this.mensaje.Error_Conexion();
      }
    );
    
  }

  eliminarCliente(id: any){
    this.estadoBoton=2;
    this._clienteService.eliminarCliente(id).subscribe(
      result => {
        console.log(result);
        if (result==true){
          this.msgSuccess= this.mensaje.Success();
          this.obtenerClientes();
          this.estadoBoton=1;
          $("#BtncancelarEliminar").click(); 
        }
        
      },
      error => {
        console.log(error);
        this.msgError= this.mensaje.Error_Conexion();
      }
    );
  }
  cerrarMensaje(){
    this.msgError="";
    this.msgSuccess="";
  }



}
