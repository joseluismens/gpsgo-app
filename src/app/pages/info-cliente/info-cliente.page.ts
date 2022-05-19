import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { Cliente } from 'src/app/interfaces/ICliente';
import { Usuario } from 'src/app/interfaces/IUsuario';
import { ClienteService } from 'src/app/services/cliente.service';
import { BitacoraEmpresaPage } from '../bitacora-empresa/bitacora-empresa.page';
import { HerramientasEmpresaPage } from '../herramientas-empresa/herramientas-empresa.page';
import { InfoEmpresaPage } from '../info-empresa/info-empresa.page';
import { MovilEmpresaPage } from '../movil-empresa/movil-empresa.page';
import { UsuarioEmpresaPage } from '../usuario-empresa/usuario-empresa.page';

@Component({
  selector: 'app-info-cliente',
  templateUrl: './info-cliente.page.html',
  styleUrls: ['./info-cliente.page.scss'],
})
export class InfoClientePage implements OnInit {
   id:string;
   cliente:Cliente;
   accesos:any;
   moviles:any;
   usuarios:any;

  constructor(private clienteService: ClienteService, private activateRoute: ActivatedRoute,private loadingController: LoadingController,
    private navController:NavController, private modalController: ModalController) {
    
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.clienteService.getInfoCliente(this.id).subscribe((data:Cliente)=>{
      this.cliente = data;
                                
    });
    this.clienteService.getInfoUsuario(this.id).subscribe((data:any)=>{
      this.accesos=data.usuarios;
      
    })
    this.clienteService.getMoviles(this.id).subscribe((data:any)=>{
      this.moviles = data.moviles;
    });
    this.clienteService.getUsuarios().subscribe((data:any) => {
      this.usuarios = data;
      
    })

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
  async usuariosModal(){
    const modal = await this.modalController.create({
      component:UsuarioEmpresaPage,
      componentProps:{
        'accesos':this.accesos,
        'cliente':this.cliente
      }
    });
    return await modal.present();
  }
  async movilesModal(){
    const modal = await this.modalController.create({
      component:MovilEmpresaPage,
      componentProps:{
        'moviles':this.moviles
      }
    });
    return await modal.present();
  }
  async herramientasModal(){
    const modal = await this.modalController.create({
      component:HerramientasEmpresaPage,
      componentProps:{
        'cliente':this.cliente
      }
    });
    return await modal.present();
  }
  async bitacoraModal(){
    const modal = await this.modalController.create({
      component:BitacoraEmpresaPage,
      componentProps:{
        'cliente':this.cliente,
        'usuarios':this.usuarios
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
