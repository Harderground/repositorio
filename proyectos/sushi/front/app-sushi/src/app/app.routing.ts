import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MateriaPrimaComponent } from './components/materia-prima/materia-prima.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';


const appRoutes: Routes =[
    {path:'',component  : InicioComponent},
    {path:'inicio',component  : InicioComponent},
    {path:'mantenedor-materia-prima',component  : MateriaPrimaComponent},
    {path:'mantenedor-cliente',component  : ClienteComponent},
    {path:'mantenedor-pedidos',component  : PedidosComponent},
    
    {path:'**',component: NotFoundComponent},

  

];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);