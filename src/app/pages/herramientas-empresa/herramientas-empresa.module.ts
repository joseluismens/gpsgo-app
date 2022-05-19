import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HerramientasEmpresaPageRoutingModule } from './herramientas-empresa-routing.module';

import { HerramientasEmpresaPage } from './herramientas-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HerramientasEmpresaPageRoutingModule
  ],
  declarations: [HerramientasEmpresaPage]
})
export class HerramientasEmpresaPageModule {}
