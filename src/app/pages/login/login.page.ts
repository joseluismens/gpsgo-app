import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  usuario:string = '';
  contrasena:string ='';

  @ViewChild('passwordEyeRegister') passwordEye;

  passwordTypeInput  =  'password';
  iconpassword  =  'eye-off';

  constructor(private menuController:MenuController, private loginService:LoginService) {
    this.menuController.enable(false);
    this.islogged();
  }

  togglePasswordMode() {
    this.passwordTypeInput  =  this.passwordTypeInput  ===  'text'  ?  'password'  :  'text';
    this.iconpassword  =  this.iconpassword  ===  'eye-off'  ?  'eye'  :  'eye-off';
  }
  ingresar(){
    
    this.loginService.inciarSesion(this.usuario, this.contrasena).subscribe();
  }
  islogged(){
    this.loginService.verificar_login() ;
    
  }

}
