import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cliente } from 'src/app/interfaces/ICliente';

@Component({
  selector: 'app-info-empresa',
  templateUrl: './info-empresa.page.html',
  styleUrls: ['./info-empresa.page.scss'],
})
export class InfoEmpresaPage implements OnInit {
  @Input() cliente:Cliente;

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  dismiss() {
    
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
