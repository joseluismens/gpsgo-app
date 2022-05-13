import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuspendidosPage } from './suspendidos.page';

const routes: Routes = [
  {
    path: '',
    component: SuspendidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuspendidosPageRoutingModule {}
