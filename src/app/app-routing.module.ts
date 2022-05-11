import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',component:InicioComponent
  },
  {
    path: 'clientes',component:ClientesComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
