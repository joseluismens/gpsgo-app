import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  {
   codigo:string;
  constructor(public menuCtrl:MenuController, private storage:Storage, private router:Router, private loginService:LoginService) {
      
  }
  ngOnInit() {

    //this.menuCtrl.enable(true);
    this.storage.create();
    
  }
  
}
