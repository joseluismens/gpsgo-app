import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BitacoraEmpresaPage } from './bitacora-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: BitacoraEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BitacoraEmpresaPageRoutingModule {}
