import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-ticket-realizados',
  templateUrl: './ticket-realizados.page.html',
  styleUrls: ['./ticket-realizados.page.scss'],
})
export class TicketRealizadosPage implements OnInit {

  tickets: any;
  usuario:string
  constructor(private clienteService:ClienteService, private menuController:MenuController) { 
    this.menuController.close();
    this.clienteService.getUsuario().then((val)=>{
      console.log(val);
      this.usuario = val;
      
   }).then(()=>{

     this.clienteService.getTicketsRelizados(this.usuario).subscribe((data:any)=>{
        this.tickets=data.tickets
        console.log(data.tickets);
        
     });
   })
    
  }

  ngOnInit() {
  }

}
