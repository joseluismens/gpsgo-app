import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { ClienteService } from './services/cliente.service';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  {
   codigo:string;
   nombre:string;
   apellido:string;
  constructor(public menuCtrl:MenuController, private storage:Storage, private router:Router, private loginService:LoginService, private clienteService: ClienteService) {
    this.storage.create();

    this.clienteService.getNombre().then((data:any)=>{
        this.nombre = data; 
    });
    this.clienteService.getApellido().then((data:any)=>{
      this.apellido = data; 
  });
  }
  ngOnInit() {


    
  }
  
}
