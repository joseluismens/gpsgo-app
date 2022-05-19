import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSearchbar, LoadingController, MenuController } from '@ionic/angular';
import { Cliente } from 'src/app/interfaces/ICliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  clientes:Cliente[];
  @ViewChild('search',{static:false}) search:IonSearchbar;
   searchItem: Cliente[];
  constructor(private clienteService:ClienteService, private loadingController: LoadingController, private menuController:MenuController) { 
      this.menuController.close();
      this.presentLoading();

  }
  
  ngOnInit() {
      
    

  }
  
  
  async presentLoading() {
    const loading = await this.loadingController.create({
      spinner:'circles',
      duration: 2000,
      message: 'Cargando',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    this.clienteService.clientes_spa().subscribe((data:Cliente [])=>{
      this.clientes = data;
      this.searchItem =data;
    });
    return await loading.present();
  }
  ionViewDidEnter(){
    setTimeout(() => {
        this.search.setFocus();
    });
  }


  clienteChange(event){
      console.log(event.detail.value);
      const val = event.target.value;

      this.searchItem = this.clientes;
      if (val && val.trim()) {
        
        this.searchItem = this.searchItem.filter((item:Cliente)=>{
          console.log( typeof item.codigo_abonado);
          let abonado = item.codigo_abonado.toString();
          return (abonado.indexOf(val.toLowerCase())> -1 || item.nombre.toLowerCase().indexOf(val.toLowerCase())>-1 );
        })
      }
      
  }
  
  

}
