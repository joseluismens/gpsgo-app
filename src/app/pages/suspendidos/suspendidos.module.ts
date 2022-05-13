import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuspendidosPageRoutingModule } from './suspendidos-routing.module';

import { SuspendidosPage } from './suspendidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuspendidosPageRoutingModule
  ],
  declarations: [SuspendidosPage]
})
export class SuspendidosPageModule {}
