import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HerramientasEmpresaPage } from './herramientas-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: HerramientasEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HerramientasEmpresaPageRoutingModule {}
