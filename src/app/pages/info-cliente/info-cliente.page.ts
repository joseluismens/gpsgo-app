import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { Cliente } from 'src/app/interfaces/ICliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { InfoEmpresaPage } from '../info-empresa/info-empresa.page';

@Component({
  selector: 'app-info-cliente',
  templateUrl: './info-cliente.page.html',
  styleUrls: ['./info-cliente.page.scss'],
})
export class InfoClientePage implements OnInit {
   id:string;
   cliente:Cliente;
  constructor(private clienteService: ClienteService, private activateRoute: ActivatedRoute,private loadingController: LoadingController,
    private navController:NavController, private modalController: ModalController) {
    
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.clienteService.getInfoCliente(this.id).subscribe((data:Cliente)=>{
      this.cliente = data;
                                    
  
    });

  }


  async infoModal() {
    const modal = await this.modalController.create({
      component: InfoEmpresaPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'cliente':this.cliente
      }
    });
    return await modal.present();
  }
  
  ngOnInit() {
  }
  
  atras(){
    this.navController.pop();
  }
  
}
