import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { ClienteService } from 'src/app/services/cliente.service';
import { TicketDetallePage } from '../ticket-detalle/ticket-detalle.page';

@Component({
  selector: 'app-ticket-pendientes',
  templateUrl: './ticket-pendientes.page.html',
  styleUrls: ['./ticket-pendientes.page.scss'],
})
export class TicketPendientesPage implements OnInit {

  tickets: any;
  usuario: string;
  searchItem: any;
  constructor(private clienteService: ClienteService, private menuController: MenuController, private modalController:ModalController) {
    this.menuController.close();
    this.clienteService.getUsuario().then((val) => {
      console.log(val);
      this.usuario = val;

    }).then(() => {

      this.clienteService.getTicketsPendientes(this.usuario).subscribe((data: any) => {
        this.tickets = data.tickets;
        this.searchItem = data.tickets;

      });
    })

  }
  ngOnInit() {

  }
  ticketChange(event) {
    console.log(event.detail.value);
    const val = event.target.value;

    this.searchItem = this.tickets;
    if (val && val.trim()) {

      this.searchItem = this.searchItem.filter((item: any) => {
        let abonado = item.codigo_abonado.toString();
        let id_ticket = item.id_ticket.toString();

        return (abonado.indexOf(val) > -1 || id_ticket.indexOf(val) > -1 || item.usuario.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.fecha_ingreso.indexOf(val) > -1);
      })
    }

  }
  async ticketModal(ticket:any) {
    const modal = await this.modalController.create({
      component: TicketDetallePage,
      cssClass: 'my-custom-class',
      componentProps: {
        'ticket':ticket
      }
    });
    return await modal.present();
  }

}
