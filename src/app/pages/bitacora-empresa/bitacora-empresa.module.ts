import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BitacoraEmpresaPageRoutingModule } from './bitacora-empresa-routing.module';

import { BitacoraEmpresaPage } from './bitacora-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BitacoraEmpresaPageRoutingModule
  ],
  declarations: [BitacoraEmpresaPage]
})
export class BitacoraEmpresaPageModule {}
