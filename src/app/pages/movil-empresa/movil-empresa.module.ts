import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovilEmpresaPageRoutingModule } from './movil-empresa-routing.module';

import { MovilEmpresaPage } from './movil-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovilEmpresaPageRoutingModule
  ],
  declarations: [MovilEmpresaPage]
})
export class MovilEmpresaPageModule {}
