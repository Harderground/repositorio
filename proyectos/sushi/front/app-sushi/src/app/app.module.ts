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

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NotFoundComponent

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
    { provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 
