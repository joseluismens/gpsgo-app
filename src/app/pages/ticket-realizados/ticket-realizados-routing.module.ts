import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketRealizadosPage } from './ticket-realizados.page';

const routes: Routes = [
  {
    path: '',
    component: TicketRealizadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketRealizadosPageRoutingModule {}
