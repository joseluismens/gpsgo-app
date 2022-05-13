import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TicketPendientesPageRoutingModule } from './ticket-pendientes-routing.module';

import { TicketPendientesPage } from './ticket-pendientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TicketPendientesPageRoutingModule
  ],
  declarations: [TicketPendientesPage]
})
export class TicketPendientesPageModule {}
