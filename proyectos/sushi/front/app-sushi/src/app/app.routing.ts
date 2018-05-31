import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MateriaPrimaComponent } from './components/materia-prima/materia-prima.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { PadreComponent } from './components/padre/padre.component';
import { HijoComponent } from './components/hijo/hijo.component';
import { Hijo2Component } from './components/hijo2/hijo2.component';
import { ProductoComponent } from './components/producto/producto.component';


const appRoutes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'mantenedor-materia-prima', component: MateriaPrimaComponent },
    { path: 'mantenedor-cliente', component: ClienteComponent },
    {
        path: 'padre', component: PadreComponent,
        children: [
            { path: 'hijo1', component: HijoComponent },
            { path: 'hijo2', component: Hijo2Component },
        ]
    },

    { path: 'mantenedor-pedidos', component: PedidosComponent },
    { path: 'productos', component: ProductoComponent },
    

    { path: '**', component: NotFoundComponent },



];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


