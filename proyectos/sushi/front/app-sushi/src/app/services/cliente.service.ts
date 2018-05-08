import { Injectable, transition } from '@angular/core';
import { HttpClientJsonpModule, HttpClient, HttpErrorResponse, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ResponseContentType } from '@angular/http';

@Injectable()
export class ClienteService {
  public host:any="http://localhost:11933/";
  private apiMain: string = 'api/main/';
  private headerPost: any;
  private headerGet: any;
  constructor(private httpClient: HttpClient) {
    this.headerPost = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', "method": "post" });
    this.headerGet = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', "method": "get" });
  }
  obtenerClientes(): Observable<any> {
    return this.httpClient.get(`${this.host}${this.apiMain}${apiMethod.obtenerClientes}`);
  }

}
const apiMethod = {
  obtenerClientes: 'obtenerClientes'
}