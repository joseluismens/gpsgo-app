import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketPendientesPage } from './ticket-pendientes.page';

const routes: Routes = [
  {
    path: '',
    component: TicketPendientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketPendientesPageRoutingModule {}
