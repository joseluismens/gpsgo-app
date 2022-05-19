import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cliente } from 'src/app/interfaces/ICliente';

@Component({
  selector: 'app-usuario-empresa',
  templateUrl: './usuario-empresa.page.html',
  styleUrls: ['./usuario-empresa.page.scss'],
})
export class UsuarioEmpresaPage implements OnInit {
  @Input() accesos:any;
  @Input()cliente:Cliente;
  constructor(private modalController : ModalController) {
    
   }

  ngOnInit() {
  }
  back() {
    
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
