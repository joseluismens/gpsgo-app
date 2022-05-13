import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TicketRealizadosPageRoutingModule } from './ticket-realizados-routing.module';

import { TicketRealizadosPage } from './ticket-realizados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TicketRealizadosPageRoutingModule
  ],
  declarations: [TicketRealizadosPage]
})
export class TicketRealizadosPageModule {}
