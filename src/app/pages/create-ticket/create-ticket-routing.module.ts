import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { CreateTicketPage } from './create-ticket.page';

const routes: Routes = [
  {
    path: '',
    component: CreateTicketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,FormsModule],
})
export class CreateTicketPageRoutingModule {}
