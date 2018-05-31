import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgProgressModule, NgProgressInterceptor } from 'ngx-progressbar';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination'
import { ServicioService } from './services/servicio.service';
import { appRoutingProviders, routing } from './app.routing';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MateriaPrimaComponent } from './components/materia-prima/materia-prima.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ClienteService } from './services/cliente.service';
import { PadreComponent } from './components/padre/padre.component';
import { HijoComponent } from './components/hijo/hijo.component';
import { Hijo2Component } from './components/hijo2/hijo2.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductosService } from './services/productos.service';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NotFoundComponent,
    MateriaPrimaComponent,
    NavBarComponent,
    ClienteComponent,
    PedidosComponent,
    PadreComponent,
    HijoComponent,
    Hijo2Component,
    ProductoComponent,
   


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgProgressModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    ServicioService,
    ClienteService,
    ProductosService,
    { provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 
