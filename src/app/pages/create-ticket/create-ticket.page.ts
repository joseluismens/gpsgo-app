import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ClienteService } from 'src/app/services/cliente.service';
import { Usuario } from 'src/app/interfaces/IUsuario';
import { Cliente } from 'src/app/interfaces/ICliente';


@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.page.html',
  styleUrls: ['./create-ticket.page.scss'],
})
export class CreateTicketPage implements OnInit {
  clientes: Cliente[];
  usuarios: Usuario[];
  cliente:Cliente;
  constructor(public menuCtrl: MenuController, private clienteService: ClienteService) {
    this.clienteService.clientes_spa().subscribe((data:Cliente[]) => {
     this.clientes = data;
    });
    this.clienteService.getUsuarios().subscribe((data:Usuario[]) => {
      this.usuarios = data;
      console.log(data);
      
    })
  }
 

  ngOnInit() {

  }
  
}
