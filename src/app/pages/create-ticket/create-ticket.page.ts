import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.page.html',
  styleUrls: ['./create-ticket.page.scss'],
})
export class CreateTicketPage implements OnInit {

  constructor(public menuCtrl:MenuController) {
    //this.menuCtrl.close();
  }

  ngOnInit() {
    
  }

}
