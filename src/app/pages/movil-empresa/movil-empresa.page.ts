import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-movil-empresa',
  templateUrl: './movil-empresa.page.html',
  styleUrls: ['./movil-empresa.page.scss'],
})
export class MovilEmpresaPage implements OnInit {
  @Input()moviles:any;
  constructor(private modalController : ModalController) { }

  ngOnInit() {
  }
  back() {
    
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
