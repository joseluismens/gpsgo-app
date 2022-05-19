import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovilEmpresaPage } from './movil-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: MovilEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovilEmpresaPageRoutingModule {}
