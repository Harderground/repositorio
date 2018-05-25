import { Injectable, transition } from '@angular/core';
import { HttpClientJsonpModule, HttpClient, HttpErrorResponse, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ResponseContentType } from '@angular/http';
import { Cliente } from '../clases/cliente.class';

@Injectable()
export class ClienteService {
  public host:any="http://localhost:11933/";
  private apiMain: string = 'api/main/';
  private apiCliente: string ='api/Cliente/';
  private headerPost: any;
  private headerGet: any;
  constructor(private httpClient: HttpClient) {
    this.headerPost = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', "method": "post" });
    this.headerGet = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', "method": "get" });
  }
  obtenerClientes(): Observable<any> {
    return this.httpClient.get(`${this.host}${this.apiCliente}${apiMethod.obtenerClientes}`);
  }
  insertarClientes(Cliente: any): Observable<any> {
    return this.httpClient.post(`${this.host}${this.apiCliente}${apiMethod.insertarClientes}`,Cliente,this.headerPost);
  }
}
const apiMethod = {
  obtenerClientes: 'obtenerClientes',
  insertarClientes: 'insertarClientes'
}