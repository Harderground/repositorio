import { Injectable, transition } from '@angular/core';
import { HttpClientJsonpModule, HttpClient, HttpErrorResponse, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ResponseContentType } from '@angular/http';

@Injectable()
export class ServicioService {

  private host: string = 'http://localhost:43202/';
  private apiValue: string = 'api/Value';
  private headerPost: any;
  private headerGet: any;
  constructor(private httpClient: HttpClient) {
    this.headerPost = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', "method": "post" });
    this.headerGet = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', "method": "get" });
  }
  urlPrueba(userId: any): Observable<any> {
    return this.httpClient.post(`${this.host}${this.apiValue}${apiMethod.metodo1}`, userId, this.headerPost);
  }
  urlGetPrueba(): Observable<any> {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts");
  }
}
const apiMethod = {
  metodo1: 'metodo1'
}