import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ticket-detalle',
  templateUrl: './ticket-detalle.page.html',
  styleUrls: ['./ticket-detalle.page.scss'],
})
export class TicketDetallePage implements OnInit {
  @Input() ticket:any;
  constructor(private modalController:ModalController) {

    
   }

  ngOnInit() {
  }
  back() {
    
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
