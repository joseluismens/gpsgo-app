import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
 
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'create-ticket',
    loadChildren: () => import('./pages/create-ticket/create-ticket.module').then( m => m.CreateTicketPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./pages/clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'suspendidos',
    loadChildren: () => import('./pages/suspendidos/suspendidos.module').then( m => m.SuspendidosPageModule)
  },
  {
    path: 'archivos',
    loadChildren: () => import('./pages/archivos/archivos.module').then( m => m.ArchivosPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./pages/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'ticket-realizados',
    loadChildren: () => import('./pages/ticket-realizados/ticket-realizados.module').then( m => m.TicketRealizadosPageModule)
  },
  {
    path: 'ticket-detalle',
    loadChildren: () => import('./pages/ticket-detalle/ticket-detalle.module').then( m => m.TicketDetallePageModule)
  },
  {
    path: 'ticket-pendientes',
    loadChildren: () => import('./pages/ticket-pendientes/ticket-pendientes.module').then( m => m.TicketPendientesPageModule)
  },
  {
    path: 'info-cliente/:id',
    loadChildren: () => import('./pages/info-cliente/info-cliente.module').then( m => m.InfoClientePageModule)
  },
  {
    path: 'info-empresa',
    loadChildren: () => import('./pages/info-empresa/info-empresa.module').then( m => m.InfoEmpresaPageModule)
  },

 
 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
