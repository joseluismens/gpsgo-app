import { Component, OnInit } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';
import { ClienteService } from 'src/app/services/cliente.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  clientes:any;
  constructor(private clienteService:ClienteService) { 

      this.clienteService.clientes_spa().subscribe((data)=>{
        this.clientes = data;
      })
  }
  
  ngOnInit() {
      
    

  }
  
  

}
