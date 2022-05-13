import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-ticket-pendientes',
  templateUrl: './ticket-pendientes.page.html',
  styleUrls: ['./ticket-pendientes.page.scss'],
})
export class TicketPendientesPage implements OnInit {

  tickets: any;
  usuario:string
  constructor(private clienteService:ClienteService) { 
    this.clienteService.getUsuario().then((val)=>{
      console.log(val);
      this.usuario = val;
      
   }).then(()=>{

     this.clienteService.getTicketsPendientes(this.usuario).subscribe((data)=>{
        this.tickets=data;
     });
   })
    
  }
  ngOnInit() {
  }

}
